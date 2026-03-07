import "dotenv/config";
import jwt from "jsonwebtoken";
import { User } from "../models/userModel.js";

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;

function createAccessToken(user) {
  return jwt.sign(
    {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
    ACCESS_TOKEN_SECRET,
    { expiresIn: "15m" },
  );
}

function createRefreshToken(user) {
  return jwt.sign({ id: user._id }, REFRESH_TOKEN_SECRET, { expiresIn: "7d" });
}

function sendRefreshToken(res, token) {
  res.cookie("refreshToken", token, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
}

export async function register(req, res) {
  let user = null;
  try {
    const { name, email, password } = req.body;

    const duplicate = await User.findOne({ email });
    if (duplicate)
      return res.status(409).json({
        success: false,
        message: "Email already in use",
      });

    user = await User.create({ name, email, password });

    const accessToken = createAccessToken(user);
    const refreshToken = createRefreshToken(user);

    user.refreshToken = refreshToken;
    await user.save();

    sendRefreshToken(res, refreshToken);

    return res.status(201).json({
      accessToken,
      success: true,
      message: `${user.name} created successfully`,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    if (user) {
      await User.findByIdAndDelete(user._id);
    }
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");
    if (!user)
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });

    const isMatch = await user.comparePassword(password);
    if (!isMatch)
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    const accessToken = createAccessToken(user);
    const refreshToken = createRefreshToken(user);
    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });
    sendRefreshToken(res, refreshToken);
    return res.status(200).json({
      success: true,
      message: `${user.name} loggedin successfully`,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      accessToken,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}

export async function refresh(req, res) {
  try {
    const token = req.cookies.refreshToken;
    if (!token)
      return res.status(400).json({
        success: false,
        message: "No refreshToken",
      });
    let decoded;
    try {
      decoded = jwt.verify(token, REFRESH_TOKEN_SECRET);
    } catch (error) {
      console.error(error);
      return res.status(400).json({
        success: false,
        message: "Invalid refreshToken or tokenExpired",
      });
    }
    const user = await User.findById(decoded.id).select("+refreshToken");
    if (!user || user.refreshToken !== token)
      return res.status(400).json({
        success: false,
        message: "refreshToken reuse attempt detected",
      });
    const newAccessToken = createAccessToken(user);
    const newRefreshToken = createRefreshToken(user);
    user.refreshToken = newRefreshToken;
    await user.save({ validateBeforeSave: false });

    sendRefreshToken(res, newRefreshToken);
    return res.status(200).json({
      success: true,
      accessToken: newAccessToken,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}

export async function logout(req, res) {
  try {
    const token = req.cookies.refreshToken;
    if (!token)
      return res.status(400).json({
        success: false,
        message: "No token found",
      });
    const user = await User.findOneAndUpdate(
      { refreshToken: token },
      { refreshToken: null },
    );
    if (!user)
      return res.status(400).json({
        success: false,
        message: "No user found",
      });
    await user.save({ validateBeforeSave: false });
    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    });
    return res.status(200).json({
      success: true,
      message: `${user.name} loggedout successfully`,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}

export async function me(req, res) {
  try {
    const user = await User.findById(req.user.id);
    if (!user)
      return res.status(500).json({
        success: false,
        message: "User not found",
      });

    return res.status(200).json({
      success: true,
      message: `${user.name} was fetched successfully`,
      user,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}
