// database.js
export const productData = {
  "binky-bong-new-jeans-crochet-keychain": {
    name: "Binky Bong NewJeans Crochet by Charmedia",
    price: "RP. 35.000",
    reviews: "2519 reviews",
    description: "Binky Bong NewJeans Crochet by Charmedia✨️ \nPre-Order maksimal dalam 7 hari, tetapi dapat dikirim secepatnya jika produk sudah tersedia. \nUntuk pemesanan custom boleh chat Charmie yaa :))  \nCharmedia charms your life✨️",
    details: [
      { label: "Type", value: "Handmade Crochet Keychain" },
      { label: "Lebar", value: "7 cm" },
      { label: "Tinggi", value: "10,5 cm" },
      { label: "Keyring Size", value: "2.5 cm diameter, made of durable alloy" },
      { label: "Material", value: "100% Cotton Yarn - soft, sturdy, and environmentally friendly" },
      { label: "Stuffing", value: "Premium Grade A Dacron - lightweight and retains shape over time" },
      { label: "Technique", value: "Carefully hand-stitched with attention to detail" },
      { label: "Design", value: "Inspired by popular K-pop groups, anime characters, and custom fandom elements" },
      { label: "Customization", value: "Available upon request" },
    ],
    thumbnails: [
      "/img/binky-bong/binky-bong1.webp",
      "/img/binky-bong/binky-bong2.jpg",
    ],
    relatedProducts: Array(8).fill(null).map((_, i) => `/images/related${i + 1}.jpg`),
    quantity: 50,
    link: "https://gooogle.com"
  },


  "my-neighbor-totoro-krochet-keychain": {
    name: "My Neighbor Totoro Crochet Keychain | Ghibli Crochet by Charmedia",
    price: "RP. 22.000",
    reviews: "942 reviews",
    description: "My Neighbor Totoro Crochet Keychain by Charmedia. \nPre-Order maksimal dalam 7 hari, tetapi dapat dikirim secepatnya jika produk sudah tersedia.. \nUntuk pemesanan custom boleh chat Charmie yaa :)). \nCharmedia charms your life✨️",
    details: [
      { label: "Tipe", value: "-" },
      { label: "Lebar", value: "4.5 cm" },
      { label: "Tinggi", value: "5 cm" },
      { label: "Material", value: "-" },
      { label: "Frame", value: "--" },
    ],
    thumbnails: [
      "/img/totoro/totoro1.webp",
      "/img/totoro/totoro2.jpg",
      "/img/totoro/totoro3.jpg",
    ],
    relatedProducts: Array(5).fill(null).map((_, i) => `/images/related_hoop${i + 1}.jpg`),
    quantity: 99,
    link: "https://shopee.co.id/My-Neighbor-Totoro-Crochet-Keychain-Ghibli-Crochet-by-Charmedia%E2%9C%A8%EF%B8%8F-i.97645207.29285951668"
  },


  "geometric-pattern-coaster-set": {
    name: "Geometric Pattern Coaster Set (4pcs)",
    price: "RP. 35.000",
    reviews: "1211 reviews",
    description: "A set of four stylish coasters with unique geometric patterns. Protect your furniture in style! 📐☕",
    details: [
      { label: "Set Includes", value: "4 Coasters" },
      { label: "Material", value: "Cork" },
      { label: "Shape", value: "Square" },
      { label: "Size", value: "10x10 cm each" },
    ],
    thumbnails: [
      "/images/coaster_set_1.jpg",
      "/images/coaster_set_2.jpg",
    ],
    relatedProducts: Array(7).fill(null).map((_, i) => `/images/related_coaster${i + 1}.jpg`),
    quantity: 60,
  },
  "handmade-leather-wallet": {
    name: "Handmade Leather Wallet (Brown)",
    price: "RP. 120.000",
    reviews: "567 reviews",
    description: "A classic brown leather wallet, carefully handmade for durability and style. 💼<0xF0><0x9F><0xA7><0xB3>",
    details: [
      { label: "Type", value: "Leather Wallet" },
      { label: "Material", value: "Genuine Leather" },
      { label: "Color", value: "Brown" },
      { label: "Features", value: "Multiple card slots, bill compartment" },
    ],
    thumbnails: [
      "/images/leather_wallet_1.jpg",
      "/images/leather_wallet_2.jpg",
    ],
    relatedProducts: Array(4).fill(null).map((_, i) => `/images/related_wallet${i + 1}.jpg`),
    quantity: 15,
  },
  "ceramic-succulent-planter": {
    name: "Small Ceramic Succulent Planter",
    price: "RP. 25.000",
    reviews: "899 reviews",
    description: "A cute small ceramic planter perfect for housing your favorite succulents. 🌱🪴",
    details: [
      { label: "Type", value: "Ceramic Planter" },
      { label: "Size", value: "Diameter 8 cm, Height 7 cm" },
      { label: "Material", value: "Ceramic" },
      { label: "Drainage Hole", value: "Yes" },
    ],
    thumbnails: [
      "/images/planter_1.jpg",
      "/images/planter_2.jpg",
    ],
    relatedProducts: Array(6).fill(null).map((_, i) => `/images/related_planter${i + 1}.jpg`),
    quantity: 40,
  },
  "wooden-puzzle-animal-shapes": {
    name: "Wooden Puzzle - Animal Shapes",
    price: "RP. 75.000",
    reviews: "325 reviews",
    description: "A fun and educational wooden puzzle featuring various animal shapes. Great for kids! 🦒🐘🦓",
    details: [
      { label: "Type", value: "Wooden Puzzle" },
      { label: "Material", value: "Wood" },
      { label: "Number of Pieces", value: "20" },
      { label: "Recommended Age", value: "3+ years" },
    ],
    thumbnails: [
      "/images/puzzle_1.jpg",
      "/images/puzzle_2.jpg",
    ],
    relatedProducts: Array(5).fill(null).map((_, i) => `/images/related_puzzle${i + 1}.jpg`),
    quantity: 25,
  },
  "knitted-wool-scarf-grey": {
    name: "Knitted Wool Scarf - Grey",
    price: "RP. 90.000",
    reviews: "488 reviews",
    description: "A warm and cozy knitted wool scarf in a classic grey color. Perfect for chilly days. 🧣❄️",
    details: [
      { label: "Type", value: "Knitted Scarf" },
      { label: "Material", value: "100% Wool" },
      { label: "Color", value: "Grey" },
      { label: "Size", value: "180 cm x 30 cm" },
    ],
    thumbnails: [
      "/images/scarf_1.jpg",
      "/images/scarf_2.jpg",
    ],
    relatedProducts: Array(4).fill(null).map((_, i) => `/images/related_scarf${i + 1}.jpg`),
    quantity: 30,
  },
  "silver-minimalist-ring": {
    name: "Silver Minimalist Ring",
    price: "RP. 55.000",
    reviews: "712 reviews",
    description: "A simple and elegant minimalist ring made of sterling silver. A timeless piece of jewelry. 💍✨",
    details: [
      { label: "Type", value: "Ring" },
      { label: "Material", value: "Sterling Silver" },
      { label: "Style", value: "Minimalist" },
      { label: "Sizes Available", value: "6, 7, 8" },
    ],
    thumbnails: [
      "/images/ring_1.jpg",
      "/images/ring_2.jpg",
    ],
    relatedProducts: Array(5).fill(null).map((_, i) => `/images/related_ring${i + 1}.jpg`),
    quantity: 38,
  },
  "organic-lavender-soap-bar": {
    name: "Organic Lavender Soap Bar",
    price: "RP. 18.000",
    reviews: "1055 reviews",
    description: "A natural and organic soap bar infused with calming lavender essential oil. 🧼💜",
    details: [
      { label: "Type", value: "Soap Bar" },
      { label: "Ingredients", value: "Organic oils, lavender essential oil" },
      { label: "Weight", value: "100g" },
      { label: "Scent", value: "Lavender" },
    ],
    thumbnails: [
      "/images/soap_1.jpg",
      "/images/soap_2.jpg",
    ],
    relatedProducts: Array(6).fill(null).map((_, i) => `/images/related_soap${i + 1}.jpg`),
    quantity: 70,
  },
};

export const productList = [
  { id: 1, name: "Binky Bong New Jeans Crochet Keychain", slug: "binky-bong-new-jeans-crochet-keychain" },
  { id: 2, name: "Cute Cat Crochet Plushie", slug: "cute-cat-crochet-plushie" },
  { id: 3, name: "My Neighbor Totoro Crochet Keychain", slug: "my-neighbor-totoro-krochet-keychain" },
  { id: 4, name: "Geometric Pattern Coaster Set (4pcs)", slug: "geometric-pattern-coaster-set" },
  { id: 5, name: "Handmade Leather Wallet (Brown)", slug: "handmade-leather-wallet" },
  { id: 6, name: "Small Ceramic Succulent Planter", slug: "ceramic-succulent-planter" },
  { id: 7, name: "Wooden Puzzle - Animal Shapes", slug: "wooden-puzzle-animal-shapes" },
  { id: 8, name: "Knitted Wool Scarf - Grey", slug: "knitted-wool-scarf-grey" },
  { id: 9, name: "Silver Minimalist Ring", slug: "silver-minimalist-ring" },
  { id: 10, name: "Organic Lavender Soap Bar", slug: "organic-lavender-soap-bar" },
];