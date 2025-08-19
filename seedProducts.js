const mongoose = require("mongoose");
const Product = require("./models/Product");

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/ecommerce", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const sampleProducts = [
  // Smartphones
  {
    nameProd: "iPhone 15 Pro Max",
    price: 1199,
    category: "Smartphones",
    image:
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop",
    description:
      "Latest iPhone with A17 Pro chip, titanium design, and advanced camera system",
    rating: "4.8",
    sold: 150,
    quantity: 50,
  },
  {
    nameProd: "Samsung Galaxy S24 Ultra",
    price: 1299,
    category: "Smartphones",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop",
    description:
      "Premium Android flagship with S Pen, 200MP camera, and AI features",
    rating: "4.7",
    sold: 120,
    quantity: 45,
  },
  {
    nameProd: "Google Pixel 8 Pro",
    price: 999,
    category: "Smartphones",
    image:
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400&h=400&fit=crop",
    description:
      "Best camera phone with Google AI and clean Android experience",
    rating: "4.6",
    sold: 80,
    quantity: 30,
  },
  {
    nameProd: "OnePlus 12",
    price: 799,
    category: "Smartphones",
    image:
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop",
    description: "Fast performance, great value, and Hasselblad camera system",
    rating: "4.5",
    sold: 95,
    quantity: 40,
  },
  {
    nameProd: "Xiaomi 14 Ultra",
    price: 899,
    category: "Smartphones",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop",
    description: "Leica optics, powerful processor, and premium build quality",
    rating: "4.4",
    sold: 70,
    quantity: 25,
  },

  // Laptops
  {
    nameProd: "MacBook Pro 16-inch M3",
    price: 2499,
    category: "Laptops",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
    description: "Professional laptop with M3 chip, Liquid Retina XDR display",
    rating: "4.9",
    sold: 85,
    quantity: 35,
  },
  {
    nameProd: "Dell XPS 15",
    price: 1899,
    category: "Laptops",
    image:
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=400&fit=crop",
    description:
      "Premium Windows laptop with OLED display and Intel i9 processor",
    rating: "4.7",
    sold: 65,
    quantity: 28,
  },
  {
    nameProd: "Lenovo ThinkPad X1 Carbon",
    price: 1699,
    category: "Laptops",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
    description: "Business laptop with excellent keyboard and durability",
    rating: "4.6",
    sold: 55,
    quantity: 22,
  },
  {
    nameProd: "ASUS ROG Zephyrus G14",
    price: 1499,
    category: "Laptops",
    image:
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=400&fit=crop",
    description: "Gaming laptop with AMD Ryzen 9 and RTX 4060 graphics",
    rating: "4.5",
    sold: 75,
    quantity: 30,
  },
  {
    nameProd: "HP Spectre x360",
    price: 1299,
    category: "Laptops",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
    description:
      "2-in-1 convertible laptop with premium design and performance",
    rating: "4.4",
    sold: 45,
    quantity: 20,
  },

  // Gaming
  {
    nameProd: "PlayStation 5",
    price: 499,
    category: "Gaming",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=400&fit=crop",
    description: "Next-gen gaming console with 4K graphics and fast SSD",
    rating: "4.8",
    sold: 200,
    quantity: 80,
  },
  {
    nameProd: "Xbox Series X",
    price: 499,
    category: "Gaming",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=400&fit=crop",
    description: "Microsoft's most powerful console with Game Pass",
    rating: "4.7",
    sold: 180,
    quantity: 70,
  },
  {
    nameProd: "Nintendo Switch OLED",
    price: 349,
    category: "Gaming",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=400&fit=crop",
    description: "Portable gaming with 7-inch OLED screen and enhanced audio",
    rating: "4.6",
    sold: 150,
    quantity: 60,
  },
  {
    nameProd: "Steam Deck",
    price: 399,
    category: "Gaming",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=400&fit=crop",
    description: "Portable PC gaming device with Steam library access",
    rating: "4.5",
    sold: 90,
    quantity: 40,
  },
  {
    nameProd: "Gaming Headset Pro",
    price: 199,
    category: "Gaming",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=400&fit=crop",
    description: "7.1 surround sound with noise-canceling microphone",
    rating: "4.4",
    sold: 120,
    quantity: 50,
  },

  // Accessories
  {
    nameProd: "AirPods Pro 2",
    price: 249,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=400&fit=crop",
    description:
      "Active noise cancellation with spatial audio and wireless charging",
    rating: "4.8",
    sold: 300,
    quantity: 100,
  },
  {
    nameProd: "Samsung Galaxy Watch 6",
    price: 349,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=400&fit=crop",
    description:
      "Advanced health monitoring with rotating bezel and long battery",
    rating: "4.7",
    sold: 180,
    quantity: 75,
  },
  {
    nameProd: "iPad Air 5th Gen",
    price: 599,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=400&fit=crop",
    description: "Powerful tablet with M1 chip and Apple Pencil support",
    rating: "4.6",
    sold: 140,
    quantity: 60,
  },
  {
    nameProd: "Wireless Charging Pad",
    price: 49,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=400&fit=crop",
    description: "15W fast wireless charging compatible with all devices",
    rating: "4.5",
    sold: 250,
    quantity: 120,
  },
  {
    nameProd: "4K Webcam",
    price: 199,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=400&fit=crop",
    description: "Ultra HD video with autofocus and noise-canceling microphone",
    rating: "4.4",
    sold: 95,
    quantity: 45,
  },
  {
    nameProd: "Mechanical Keyboard",
    price: 129,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=400&fit=crop",
    description: "RGB backlit with Cherry MX switches and aluminum frame",
    rating: "4.3",
    sold: 160,
    quantity: 80,
  },
  {
    nameProd: "Gaming Mouse",
    price: 79,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=400&fit=crop",
    description: "25K DPI sensor with programmable buttons and RGB lighting",
    rating: "4.2",
    sold: 200,
    quantity: 100,
  },
];

async function seedProducts() {
  try {
    // Clear existing products completely
    await Product.deleteMany({});
    console.log("Cleared existing products");

    // Insert new products
    const insertedProducts = await Product.insertMany(sampleProducts);
    console.log(`Successfully inserted ${insertedProducts.length} products`);

    // Display products by category
    const categories = await Product.distinct("category");
    console.log("\nProducts by category:");
    for (const category of categories) {
      const count = await Product.countDocuments({ category });
      console.log(`${category}: ${count} products`);
    }

    mongoose.connection.close();
    console.log("\nDatabase seeding completed!");
  } catch (error) {
    console.error("Error seeding database:", error);
    mongoose.connection.close();
  }
}

seedProducts();
