import mongoose from "mongoose";
import "dotenv/config";
import { Product } from "./server/models/productModel.js";
import { User } from "./server/models/userModel.js";

const products = [
  // ── SNEAKERS (25) ──────────────────────────────────────────
  {
    name: "Air Stride Classic White",
    description:
      "Clean all-white low-top sneaker with cushioned sole. Perfect for everyday casual wear.",
    price: 89.99,
    category: "sneakers",
    sizes: ["40", "41", "42", "43", "44", "45"],
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    ],
    stock: 40,
    isActive: true,
  },
  {
    name: "Urban Runner Pro Black",
    description:
      "High-performance running sneaker with breathable mesh upper and responsive foam.",
    price: 124.99,
    category: "sneakers",
    sizes: ["39", "40", "41", "42", "43", "44"],
    images: [
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80",
    ],
    stock: 30,
    isActive: true,
  },
  {
    name: "Retro Low Top Canvas",
    description:
      "Vintage-inspired canvas sneaker with rubber toe cap. A timeless streetwear staple.",
    price: 59.99,
    category: "sneakers",
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    images: [
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80",
    ],
    stock: 55,
    isActive: true,
  },
  {
    name: "Trail Blazer Outdoor",
    description:
      "Rugged trail sneaker with grip sole and water-resistant upper for outdoor adventures.",
    price: 149.99,
    category: "sneakers",
    sizes: ["40", "41", "42", "43", "44", "45", "46"],
    images: [
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80",
    ],
    stock: 20,
    isActive: true,
  },
  {
    name: "Slip-On Comfort Wave",
    description:
      "Easy slip-on sneaker with elastic side panels and memory foam insole.",
    price: 69.99,
    category: "sneakers",
    sizes: ["38", "39", "40", "41", "42", "43"],
    images: [
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&q=80",
    ],
    stock: 45,
    isActive: true,
  },
  {
    name: "High Top Street King",
    description:
      "Bold high-top sneaker with ankle strap and chunky sole. Makes a statement.",
    price: 109.99,
    category: "sneakers",
    sizes: ["40", "41", "42", "43", "44"],
    images: [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80",
    ],
    stock: 18,
    isActive: true,
  },
  {
    name: "Minimal White Leather",
    description:
      "Premium leather low-top with minimal branding. Clean and sophisticated.",
    price: 134.99,
    category: "sneakers",
    sizes: ["39", "40", "41", "42", "43", "44", "45"],
    images: [
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800&q=80",
    ],
    stock: 25,
    isActive: true,
  },
  {
    name: "Neon Pop Sport",
    description:
      "Eye-catching neon accent sport sneaker with lightweight knit construction.",
    price: 94.99,
    category: "sneakers",
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    images: [
      "https://images.unsplash.com/photo-1556906781-9a412961a28c?w=800&q=80",
    ],
    stock: 33,
    isActive: true,
  },
  {
    name: "Classic Court Low",
    description:
      "Court-inspired low-top sneaker with padded collar and vulcanized sole.",
    price: 74.99,
    category: "sneakers",
    sizes: ["39", "40", "41", "42", "43", "44"],
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80",
    ],
    stock: 60,
    isActive: true,
  },
  {
    name: "Chunky Dad Sneaker",
    description:
      "90s-inspired chunky sole sneaker with multi-layer upper and bold silhouette.",
    price: 119.99,
    category: "sneakers",
    sizes: ["40", "41", "42", "43", "44", "45"],
    images: [
      "https://images.unsplash.com/photo-1584735175315-9d5df23be620?w=800&q=80",
    ],
    stock: 22,
    isActive: true,
  },
  {
    name: "Summer Mesh Breeze",
    description:
      "Lightweight mesh sneaker designed for hot weather. Maximum airflow.",
    price: 64.99,
    category: "sneakers",
    sizes: ["38", "39", "40", "41", "42", "43"],
    images: [
      "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=800&q=80",
    ],
    stock: 48,
    isActive: true,
  },
  {
    name: "Carbon Speed Racer",
    description:
      "Competition-grade speed trainer with carbon plate and aggressive grip.",
    price: 179.99,
    category: "sneakers",
    sizes: ["40", "41", "42", "43", "44", "45"],
    images: [
      "https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=80",
    ],
    stock: 12,
    isActive: true,
  },
  {
    name: "Skate Deck Low",
    description:
      "Durable skate sneaker with reinforced toe cap and flat grip sole.",
    price: 79.99,
    category: "sneakers",
    sizes: ["39", "40", "41", "42", "43", "44"],
    images: [
      "https://images.unsplash.com/photo-1520256862855-398228c41684?w=800&q=80",
    ],
    stock: 35,
    isActive: true,
  },
  {
    name: "Monochrome All Black",
    description:
      "Full black-on-black sneaker for a sleek minimal look. Versatile and sharp.",
    price: 99.99,
    category: "sneakers",
    sizes: ["39", "40", "41", "42", "43", "44", "45"],
    images: [
      "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=800&q=80",
    ],
    stock: 40,
    isActive: true,
  },
  {
    name: "Pastel Cloud Walker",
    description:
      "Soft pastel colorway sneaker with ultra-cushioned midsole. Walks on clouds.",
    price: 89.99,
    category: "sneakers",
    sizes: ["36", "37", "38", "39", "40", "41"],
    images: [
      "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?w=800&q=80",
    ],
    stock: 28,
    isActive: true,
  },
  {
    name: "Gym Performance Knit",
    description:
      "Gym-ready knit sneaker with lateral support strap and non-marking sole.",
    price: 104.99,
    category: "sneakers",
    sizes: ["39", "40", "41", "42", "43", "44"],
    images: [
      "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=800&q=80",
    ],
    stock: 30,
    isActive: true,
  },
  {
    name: "Desert Boot Sneaker",
    description:
      "Boot-sneaker hybrid with suede upper and crepe-style sole. Smart casual.",
    price: 114.99,
    category: "sneakers",
    sizes: ["40", "41", "42", "43", "44", "45"],
    images: [
      "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=800&q=80",
    ],
    stock: 15,
    isActive: true,
  },
  {
    name: "Reflective Night Runner",
    description:
      "360-degree reflective panels for safe night running. High visibility design.",
    price: 139.99,
    category: "sneakers",
    sizes: ["39", "40", "41", "42", "43", "44", "45"],
    images: [
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&q=80",
    ],
    stock: 20,
    isActive: true,
  },
  {
    name: "Woven Espadrille Sneaker",
    description:
      "Summer-ready espadrille-inspired sneaker with jute midsole accent.",
    price: 69.99,
    category: "sneakers",
    sizes: ["37", "38", "39", "40", "41", "42"],
    images: [
      "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?w=800&q=80",
    ],
    stock: 22,
    isActive: true,
  },
  {
    name: "Premium Suede Low",
    description:
      "Luxurious suede upper with contrast stitching and gum rubber sole.",
    price: 144.99,
    category: "sneakers",
    sizes: ["39", "40", "41", "42", "43", "44"],
    images: [
      "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?w=800&q=80",
    ],
    stock: 18,
    isActive: true,
  },
  {
    name: "Color Block Express",
    description:
      "Bold color-blocked panels with contrast laces. Street art inspired.",
    price: 84.99,
    category: "sneakers",
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    images: [
      "https://images.unsplash.com/photo-1579338559194-a162d19bf842?w=800&q=80",
    ],
    stock: 32,
    isActive: true,
  },
  {
    name: "Sock Fit Racer",
    description:
      "Sock-like knit upper with bootie construction for a locked-in fit.",
    price: 99.99,
    category: "sneakers",
    sizes: ["39", "40", "41", "42", "43", "44"],
    images: [
      "https://images.unsplash.com/photo-1562183241-840b8af0721e?w=800&q=80",
    ],
    stock: 27,
    isActive: true,
  },
  {
    name: "Vintage Archive Low",
    description:
      "Archival reissue silhouette with aged yellowing effect and premium leather.",
    price: 159.99,
    category: "sneakers",
    sizes: ["40", "41", "42", "43", "44", "45"],
    images: [
      "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=800&q=80",
    ],
    stock: 10,
    isActive: true,
  },
  {
    name: "Wide Fit Comfort Plus",
    description:
      "Extra-wide fit sneaker with orthopedic insole for all-day comfort.",
    price: 74.99,
    category: "sneakers",
    sizes: ["41", "42", "43", "44", "45", "46", "47"],
    images: [
      "https://images.unsplash.com/photo-1559563458-527698bf5295?w=800&q=80",
    ],
    stock: 40,
    isActive: true,
  },
  {
    name: "Kids Jr. Flash",
    description:
      "Fun and durable kids sneaker with easy velcro strap and cushioned sole.",
    price: 44.99,
    category: "sneakers",
    sizes: ["28", "29", "30", "31", "32", "33", "34", "35"],
    images: [
      "https://images.unsplash.com/photo-1555274175-6cbf6f3b137b?w=800&q=80",
    ],
    stock: 50,
    isActive: true,
  },

  // ── SHIRTS (25) ────────────────────────────────────────────
  {
    name: "Essential White Tee",
    description:
      "100% organic cotton classic crew neck tee. The foundation of every wardrobe.",
    price: 29.99,
    category: "shirts",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
    ],
    stock: 100,
    isActive: true,
  },
  {
    name: "Oxford Button Down Blue",
    description:
      "Classic Oxford weave button-down shirt in mid-blue. Perfect for smart casual.",
    price: 59.99,
    category: "shirts",
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80",
    ],
    stock: 45,
    isActive: true,
  },
  {
    name: "Linen Summer Shirt",
    description:
      "Breathable linen shirt with relaxed fit and wooden buttons. Summer essential.",
    price: 54.99,
    category: "shirts",
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1598032895397-b9472444bf93?w=800&q=80",
    ],
    stock: 35,
    isActive: true,
  },
  {
    name: "Graphic Print Black Tee",
    description:
      "Bold graphic print on heavyweight cotton. Statement piece for streetwear looks.",
    price: 39.99,
    category: "shirts",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    images: [
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=800&q=80",
    ],
    stock: 60,
    isActive: true,
  },
  {
    name: "Flannel Check Shirt",
    description:
      "Soft flannel check shirt with double chest pockets. Casual weekend staple.",
    price: 64.99,
    category: "shirts",
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "https://images.unsplash.com/photo-1588359348347-9bc6cbbb689e?w=800&q=80",
    ],
    stock: 40,
    isActive: true,
  },
  {
    name: "Slim Fit Dress Shirt White",
    description:
      "Slim fit non-iron white dress shirt with spread collar. Office ready.",
    price: 69.99,
    category: "shirts",
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=800&q=80",
    ],
    stock: 50,
    isActive: true,
  },
  {
    name: "Oversized Drop Shoulder",
    description:
      "Relaxed oversized drop shoulder tee with raw hem detail. Streetwear fit.",
    price: 44.99,
    category: "shirts",
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80",
    ],
    stock: 55,
    isActive: true,
  },
  {
    name: "Polo Classic Pique",
    description:
      "Pique cotton polo with ribbed collar and two-button placket. Timeless.",
    price: 49.99,
    category: "shirts",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    images: [
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&q=80",
    ],
    stock: 70,
    isActive: true,
  },
  {
    name: "Hawaiian Floral Print",
    description:
      "Vibrant Hawaiian floral shirt in viscose. Relaxed fit with camp collar.",
    price: 54.99,
    category: "shirts",
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80",
    ],
    stock: 30,
    isActive: true,
  },
  {
    name: "Henley Long Sleeve",
    description:
      "Three-button henley in slub cotton for casual textured look. Relaxed fit.",
    price: 39.99,
    category: "shirts",
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&q=80",
    ],
    stock: 45,
    isActive: true,
  },
  {
    name: "Striped Breton Top",
    description:
      "Classic Breton stripe crew neck tee in navy and white. French inspired.",
    price: 44.99,
    category: "shirts",
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=800&q=80",
    ],
    stock: 38,
    isActive: true,
  },
  {
    name: "Denim Chambray Shirt",
    description:
      "Lightweight chambray denim shirt with washed finish. Smart casual crossover.",
    price: 59.99,
    category: "shirts",
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=800&q=80",
    ],
    stock: 28,
    isActive: true,
  },
  {
    name: "Longline Curved Hem",
    description:
      "Extended length tee with curved hem and side splits. Modern silhouette.",
    price: 34.99,
    category: "shirts",
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80",
    ],
    stock: 65,
    isActive: true,
  },
  {
    name: "Merino Wool Polo",
    description:
      "Fine merino wool polo for elevated casual occasions. Temperature regulating.",
    price: 89.99,
    category: "shirts",
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1614975059251-992f11792b9f?w=800&q=80",
    ],
    stock: 20,
    isActive: true,
  },
  {
    name: "Tie Dye Festival Tee",
    description:
      "Hand tie-dyed cotton tee with unique pattern. No two are exactly alike.",
    price: 34.99,
    category: "shirts",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    images: [
      "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=800&q=80",
    ],
    stock: 42,
    isActive: true,
  },
  {
    name: "Quarter Zip Sweatshirt",
    description:
      "Quarter zip pullover in brushed fleece with contrast zip tape detail.",
    price: 74.99,
    category: "shirts",
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?w=800&q=80",
    ],
    stock: 35,
    isActive: true,
  },
  {
    name: "Printed Camp Collar",
    description:
      "Printed camp collar shirt in lightweight fabric. Resort and city ready.",
    price: 49.99,
    category: "shirts",
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1591195853828-11db59a44f43?w=800&q=80",
    ],
    stock: 25,
    isActive: true,
  },
  {
    name: "Thermal Waffle Knit",
    description:
      "Waffle-knit thermal long sleeve in heather grey. Cozy layering piece.",
    price: 44.99,
    category: "shirts",
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "https://images.unsplash.com/photo-1609803384069-19f3e5a70de8?w=800&q=80",
    ],
    stock: 50,
    isActive: true,
  },
  {
    name: "Acid Wash Vintage Tee",
    description:
      "90s-inspired acid wash tee in heavyweight cotton. Vintage distressed look.",
    price: 39.99,
    category: "shirts",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    images: [
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80",
    ],
    stock: 48,
    isActive: true,
  },
  {
    name: "Embroidered Logo Tee",
    description:
      "Clean tee with subtle embroidered chest logo. Premium feel and finish.",
    price: 44.99,
    category: "shirts",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    images: [
      "https://images.unsplash.com/photo-1527719327859-c6ce80353573?w=800&q=80",
    ],
    stock: 55,
    isActive: true,
  },
  {
    name: "Relaxed Linen Tee",
    description:
      "Pure linen tee with relaxed fit and natural texture. Breathable warm-weather wear.",
    price: 49.99,
    category: "shirts",
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1622445275576-721325763afe?w=800&q=80",
    ],
    stock: 30,
    isActive: true,
  },
  {
    name: "Mock Neck Long Sleeve",
    description:
      "Fitted mock neck long sleeve in ribbed cotton. Sleek and minimal.",
    price: 39.99,
    category: "shirts",
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=800&q=80",
    ],
    stock: 42,
    isActive: true,
  },
  {
    name: "Printed Pocket Tee",
    description:
      "Everyday tee with small chest pocket and subtle print detail.",
    price: 29.99,
    category: "shirts",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    images: [
      "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=800&q=80",
    ],
    stock: 80,
    isActive: true,
  },
  {
    name: "Zip Up Hoodie Grey",
    description:
      "Classic zip-up hoodie in heavyweight fleece with kangaroo pocket.",
    price: 79.99,
    category: "shirts",
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=800&q=80",
    ],
    stock: 45,
    isActive: true,
  },
  {
    name: "Slim V-Neck Cotton",
    description:
      "Slim fit V-neck tee in soft pima cotton. Elegant and versatile.",
    price: 32.99,
    category: "shirts",
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1618354691229-88d47f285158?w=800&q=80",
    ],
    stock: 60,
    isActive: true,
  },

  // ── PANTS (25) ─────────────────────────────────────────────
  {
    name: "Slim Fit Black Chinos",
    description:
      "Clean slim-fit chino in stretch cotton twill. Office to evening versatile.",
    price: 69.99,
    category: "pants",
    sizes: ["28", "30", "32", "34", "36", "38"],
    images: [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80",
    ],
    stock: 50,
    isActive: true,
  },
  {
    name: "Classic Blue Denim Jeans",
    description:
      "Mid-wash straight leg denim jeans with five-pocket construction. A wardrobe must.",
    price: 79.99,
    category: "pants",
    sizes: ["28", "30", "32", "34", "36"],
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&q=80",
    ],
    stock: 60,
    isActive: true,
  },
  {
    name: "Relaxed Cargo Pants",
    description:
      "Multi-pocket cargo pants with adjustable waist and tapered leg.",
    price: 74.99,
    category: "pants",
    sizes: ["28", "30", "32", "34", "36", "38"],
    images: [
      "https://images.unsplash.com/photo-1604176354204-9268737828e4?w=800&q=80",
    ],
    stock: 38,
    isActive: true,
  },
  {
    name: "Jogger Track Pants",
    description:
      "Comfortable jogger with elasticated waistband and ribbed cuffs. Active or casual.",
    price: 54.99,
    category: "pants",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    images: [
      "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=800&q=80",
    ],
    stock: 55,
    isActive: true,
  },
  {
    name: "Tailored Wool Trousers",
    description:
      "Slim tailored trousers in wool blend. Sharp and refined for formal occasions.",
    price: 119.99,
    category: "pants",
    sizes: ["28", "30", "32", "34", "36"],
    images: [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80",
    ],
    stock: 20,
    isActive: true,
  },
  {
    name: "Ripped Skinny Jeans",
    description:
      "Stretch skinny jeans with distressed knee rips. Edgy streetwear look.",
    price: 69.99,
    category: "pants",
    sizes: ["28", "30", "32", "34"],
    images: [
      "https://images.unsplash.com/photo-1555689502-c4b22d76c56f?w=800&q=80",
    ],
    stock: 35,
    isActive: true,
  },
  {
    name: "Wide Leg Linen Pants",
    description:
      "Flowing wide leg pants in breathable linen. Relaxed summer silhouette.",
    price: 64.99,
    category: "pants",
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4b4b1f?w=800&q=80",
    ],
    stock: 28,
    isActive: true,
  },
  {
    name: "Slim Khaki Chinos",
    description: "Classic khaki slim chino with clean front and side pockets.",
    price: 64.99,
    category: "pants",
    sizes: ["28", "30", "32", "34", "36", "38"],
    images: [
      "https://images.unsplash.com/photo-1561861422-a549073e547a?w=800&q=80",
    ],
    stock: 45,
    isActive: true,
  },
  {
    name: "Corduroy Wide Leg",
    description: "Retro corduroy wide leg in camel. Autumn winter essential.",
    price: 84.99,
    category: "pants",
    sizes: ["28", "30", "32", "34", "36"],
    images: [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&q=80",
    ],
    stock: 22,
    isActive: true,
  },
  {
    name: "Athletic Shorts 7 Inch",
    description:
      "7-inch inseam athletic shorts with liner and zip pocket. Training essential.",
    price: 44.99,
    category: "pants",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    images: [
      "https://images.unsplash.com/photo-1591195853828-11db59a44f43?w=800&q=80",
    ],
    stock: 65,
    isActive: true,
  },
  {
    name: "Washed Black Jeans",
    description:
      "Faded black wash slim jeans with subtle distressing. Rock-inspired.",
    price: 74.99,
    category: "pants",
    sizes: ["28", "30", "32", "34", "36"],
    images: [
      "https://images.unsplash.com/photo-1475178626620-a4d074967452?w=800&q=80",
    ],
    stock: 40,
    isActive: true,
  },
  {
    name: "Pleated Dress Trousers",
    description:
      "Double-pleated dress trousers in charcoal grey. Elegant and comfortable.",
    price: 99.99,
    category: "pants",
    sizes: ["28", "30", "32", "34", "36", "38"],
    images: [
      "https://images.unsplash.com/photo-1536766820879-059fec98ec0a?w=800&q=80",
    ],
    stock: 18,
    isActive: true,
  },
  {
    name: "Swim Shorts Tropical",
    description: "Quick-dry swim shorts with tropical print and mesh lining.",
    price: 39.99,
    category: "pants",
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80",
    ],
    stock: 55,
    isActive: true,
  },
  {
    name: "Tech Fleece Sweatpants",
    description:
      "Engineered tech fleece sweatpants with tapered fit and zippered ankles.",
    price: 89.99,
    category: "pants",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    images: [
      "https://images.unsplash.com/photo-1566932769119-7a1fb6d7ce23?w=800&q=80",
    ],
    stock: 30,
    isActive: true,
  },
  {
    name: "Painter Utility Pants",
    description:
      "Workwear-inspired painter pants with hammer loop and multiple utility pockets.",
    price: 84.99,
    category: "pants",
    sizes: ["28", "30", "32", "34", "36"],
    images: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&q=80",
    ],
    stock: 25,
    isActive: true,
  },
  {
    name: "Barrel Leg Denim",
    description:
      "On-trend barrel leg jeans with high waist and roomy thigh. Fashion forward.",
    price: 89.99,
    category: "pants",
    sizes: ["26", "28", "30", "32", "34"],
    images: [
      "https://images.unsplash.com/photo-1560243563-062bfc001d68?w=800&q=80",
    ],
    stock: 20,
    isActive: true,
  },
  {
    name: "Hiking Trail Pants",
    description:
      "Convertible zip-off hiking pants in water-resistant nylon. Adventure ready.",
    price: 94.99,
    category: "pants",
    sizes: ["28", "30", "32", "34", "36", "38"],
    images: [
      "https://images.unsplash.com/photo-1519058082350-08716243e3f7?w=800&q=80",
    ],
    stock: 22,
    isActive: true,
  },
  {
    name: "Velvet Slim Trousers",
    description:
      "Luxurious velvet slim trousers for evening occasions. Rich and tactile.",
    price: 109.99,
    category: "pants",
    sizes: ["28", "30", "32", "34"],
    images: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80",
    ],
    stock: 12,
    isActive: true,
  },
  {
    name: "Cropped Straight Jeans",
    description:
      "Cropped ankle-length straight jeans in light wash. Modern everyday denim.",
    price: 74.99,
    category: "pants",
    sizes: ["26", "28", "30", "32", "34"],
    images: [
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80",
    ],
    stock: 35,
    isActive: true,
  },
  {
    name: "Cotton Shorts Chino",
    description:
      "5-inch inseam chino shorts in stretch cotton. Clean and preppy.",
    price: 44.99,
    category: "pants",
    sizes: ["28", "30", "32", "34", "36"],
    images: [
      "https://images.unsplash.com/photo-1591195853828-11db59a44f43?w=800&q=80",
    ],
    stock: 48,
    isActive: true,
  },
  {
    name: "Parachute Cargo Pants",
    description:
      "Lightweight parachute fabric cargo pants with oversized pockets. Trendy silhouette.",
    price: 99.99,
    category: "pants",
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=800&q=80",
    ],
    stock: 25,
    isActive: true,
  },
  {
    name: "Motocross Biker Jeans",
    description:
      "Moto-inspired biker jeans with quilted panels and zip ankle detail.",
    price: 94.99,
    category: "pants",
    sizes: ["28", "30", "32", "34", "36"],
    images: [
      "https://images.unsplash.com/photo-1475178626620-a4d074967452?w=800&q=80",
    ],
    stock: 18,
    isActive: true,
  },
  {
    name: "Linen Drawstring Pants",
    description:
      "Relaxed linen pants with drawstring waist and side seam pockets.",
    price: 59.99,
    category: "pants",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4b4b1f?w=800&q=80",
    ],
    stock: 35,
    isActive: true,
  },
  {
    name: "Slim Wool Tartan",
    description:
      "Heritage tartan slim trousers in wool blend. Bold pattern statement.",
    price: 114.99,
    category: "pants",
    sizes: ["28", "30", "32", "34", "36"],
    images: [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80",
    ],
    stock: 15,
    isActive: true,
  },
  {
    name: "Relaxed Fit Grey Sweats",
    description:
      "Classic grey sweatpants in brushed cotton fleece. Ultimate comfort.",
    price: 49.99,
    category: "pants",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    images: [
      "https://images.unsplash.com/photo-1566932769119-7a1fb6d7ce23?w=800&q=80",
    ],
    stock: 70,
    isActive: true,
  },

  // ── ACCESSORIES (25) ───────────────────────────────────────
  {
    name: "Leather Bifold Wallet",
    description:
      "Slim full-grain leather bifold wallet with 6 card slots and bill compartment.",
    price: 49.99,
    category: "accessories",
    sizes: ["One Size"],
    images: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&q=80",
    ],
    stock: 80,
    isActive: true,
  },
  {
    name: "Classic Snapback Cap",
    description:
      "6-panel structured snapback in twill cotton. Adjustable fit for all sizes.",
    price: 34.99,
    category: "accessories",
    sizes: ["One Size"],
    images: [
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&q=80",
    ],
    stock: 60,
    isActive: true,
  },
  {
    name: "Canvas Tote Bag",
    description:
      "Heavy duty canvas tote with interior zip pocket and reinforced handles.",
    price: 29.99,
    category: "accessories",
    sizes: ["One Size"],
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
    ],
    stock: 90,
    isActive: true,
  },
  {
    name: "Minimalist Watch Silver",
    description:
      "Slim minimalist watch with mesh stainless steel strap and clean dial.",
    price: 129.99,
    category: "accessories",
    sizes: ["One Size"],
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    ],
    stock: 25,
    isActive: true,
  },
  {
    name: "Wool Beanie Ribbed",
    description:
      "Cozy ribbed beanie in merino wool blend. Folds up or worn slouched.",
    price: 24.99,
    category: "accessories",
    sizes: ["One Size"],
    images: [
      "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=800&q=80",
    ],
    stock: 70,
    isActive: true,
  },
  {
    name: "Leather Belt Brown",
    description:
      "Full-grain leather belt with brass pin buckle. Classic and durable.",
    price: 44.99,
    category: "accessories",
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=800&q=80",
    ],
    stock: 55,
    isActive: true,
  },
  {
    name: "Aviator Sunglasses",
    description: "Classic metal aviator frames with UV400 polarized lenses.",
    price: 89.99,
    category: "accessories",
    sizes: ["One Size"],
    images: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80",
    ],
    stock: 40,
    isActive: true,
  },
  {
    name: "Knit Scarf Plaid",
    description:
      "Soft plaid knit scarf in oversized dimensions. Autumn winter warmth.",
    price: 34.99,
    category: "accessories",
    sizes: ["One Size"],
    images: [
      "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=800&q=80",
    ],
    stock: 45,
    isActive: true,
  },
  {
    name: "Crossbody Nylon Bag",
    description:
      "Lightweight nylon crossbody with multiple zip compartments. Urban everyday bag.",
    price: 54.99,
    category: "accessories",
    sizes: ["One Size"],
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80",
    ],
    stock: 35,
    isActive: true,
  },
  {
    name: "Luxury Cufflinks Silver",
    description:
      "Brushed silver toggle cufflinks for dress shirts. Presented in gift box.",
    price: 39.99,
    category: "accessories",
    sizes: ["One Size"],
    images: [
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
    ],
    stock: 30,
    isActive: true,
  },
  {
    name: "Trucker Hat Denim",
    description:
      "Washed denim trucker hat with mesh back and snapback closure.",
    price: 29.99,
    category: "accessories",
    sizes: ["One Size"],
    images: [
      "https://images.unsplash.com/photo-1534215754734-18e55d13e346?w=800&q=80",
    ],
    stock: 50,
    isActive: true,
  },
  {
    name: "Card Holder Slim",
    description:
      "Ultra-slim card holder in full-grain leather. Holds up to 8 cards.",
    price: 34.99,
    category: "accessories",
    sizes: ["One Size"],
    images: [
      "https://images.unsplash.com/photo-1606503153255-59d8b8b82176?w=800&q=80",
    ],
    stock: 65,
    isActive: true,
  },
  {
    name: "Sport Duffel Bag",
    description:
      "30L sport duffel with wet/dry compartment and detachable shoulder strap.",
    price: 69.99,
    category: "accessories",
    sizes: ["One Size"],
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
    ],
    stock: 28,
    isActive: true,
  },
  {
    name: "Tortoise Shell Glasses",
    description:
      "Retro tortoise shell acetate frames with clear lenses. Fashion accessory.",
    price: 74.99,
    category: "accessories",
    sizes: ["One Size"],
    images: [
      "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=800&q=80",
    ],
    stock: 22,
    isActive: true,
  },
  {
    name: "Woven Straw Hat",
    description:
      "Natural straw panama hat with grosgrain ribbon band. Summer essential.",
    price: 44.99,
    category: "accessories",
    sizes: ["S/M", "L/XL"],
    images: [
      "https://images.unsplash.com/photo-1558171813-0f4de4a0a48a?w=800&q=80",
    ],
    stock: 35,
    isActive: true,
  },
  {
    name: "Gym Water Bottle",
    description:
      "1L insulated stainless steel bottle keeps drinks cold 24hrs, hot 12hrs.",
    price: 34.99,
    category: "accessories",
    sizes: ["One Size"],
    images: [
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&q=80",
    ],
    stock: 80,
    isActive: true,
  },
  {
    name: "Leather Gloves Brown",
    description:
      "Lined leather driving gloves with knuckle cutouts. Classic and warm.",
    price: 54.99,
    category: "accessories",
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&q=80",
    ],
    stock: 30,
    isActive: true,
  },
  {
    name: "Backpack Urban 20L",
    description:
      "20L commuter backpack with laptop sleeve and USB charging port.",
    price: 84.99,
    category: "accessories",
    sizes: ["One Size"],
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
    ],
    stock: 25,
    isActive: true,
  },
  {
    name: "Silk Pocket Square",
    description:
      "Pure silk pocket square with hand-rolled edges. Elevates any suit.",
    price: 24.99,
    category: "accessories",
    sizes: ["One Size"],
    images: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80",
    ],
    stock: 40,
    isActive: true,
  },
  {
    name: "Gold Chain Necklace",
    description:
      "18K gold-plated Cuban link chain. 22 inch length. Bold and stylish.",
    price: 59.99,
    category: "accessories",
    sizes: ["One Size"],
    images: [
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80",
    ],
    stock: 35,
    isActive: true,
  },
  {
    name: "Rubber Wristband Pack",
    description:
      "Set of 5 silicone wristbands in assorted colors. Stackable and fun.",
    price: 14.99,
    category: "accessories",
    sizes: ["S/M", "L/XL"],
    images: [
      "https://images.unsplash.com/photo-1573483492240-6de38e6a9e03?w=800&q=80",
    ],
    stock: 100,
    isActive: true,
  },
  {
    name: "Leather Passport Holder",
    description:
      "Full-grain leather passport holder with card slots and boarding pass pocket.",
    price: 39.99,
    category: "accessories",
    sizes: ["One Size"],
    images: [
      "https://images.unsplash.com/photo-1575199240-7ced4d4d0add?w=800&q=80",
    ],
    stock: 45,
    isActive: true,
  },
  {
    name: "Printed Silk Tie",
    description:
      "100% silk tie with geometric print. 8cm blade width. Smart and distinctive.",
    price: 44.99,
    category: "accessories",
    sizes: ["One Size"],
    images: [
      "https://images.unsplash.com/photo-1598032895397-b9472444bf93?w=800&q=80",
    ],
    stock: 28,
    isActive: true,
  },
  {
    name: "Wireless Earbuds Case",
    description:
      "Premium vegan leather case for wireless earbuds with carabiner clip.",
    price: 19.99,
    category: "accessories",
    sizes: ["One Size"],
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80",
    ],
    stock: 60,
    isActive: true,
  },
  {
    name: "Socks 3-Pack Gift Set",
    description:
      "Premium cotton crew socks in 3 colourways. Cushioned sole and arch support.",
    price: 24.99,
    category: "accessories",
    sizes: ["S/M", "L/XL"],
    images: [
      "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=800&q=80",
    ],
    stock: 90,
    isActive: true,
  },
];

async function seed() {
  try {
    await mongoose.connect(process.env.DB);
    console.log("Connected to MongoDB");

    // Clear existing products
    await Product.deleteMany({});
    console.log("Cleared existing products");

    // Clear existing users
    await User.deleteMany({});
    console.log("Cleared existing users");

    // Insert all 100 products
    await Product.insertMany(products);
    console.log(`Seeded ${products.length} products`);

    // Create admin user
    await User.create({
      name: "Admin",
      email: "admin@shop.com",
      password: "admin123",
      role: "admin",
    });
    console.log("Created admin user — admin@shop.com / admin123");

    // Create customer user
    await User.create({
      name: "Customer",
      email: "customer@shop.com",
      password: "customer123",
      role: "customer",
    });
    console.log("Created customer user — customer@shop.com / customer123");

    console.log("Seed complete");
    process.exit(0);
  } catch (error) {
    console.error("Seed failed:", error);
    process.exit(1);
  }
}

seed();
