// database.js
const templateDesc = "\nPre-Order maksimal dalam 7 hari, tetapi dapat dikirim secepatnya jika produk sudah tersedia. \nUntuk pemesanan custom boleh chat Charmie yaa :)). \nCharmedia charms your life✨️"
export const productData = {
  "binky-bong-new-jeans-crochet-keychain": {
    name: "Binky Bong NewJeans Crochet by Charmedia✨️",
    price: "RP. 35.000",
    reviews: "2519 reviews",
    description: "Binky Bong NewJeans Crochet by Charmedia✨️" + templateDesc,    
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
    quantity: 100,
    link: "https://shopee.co.id/Binky-Bong-NewJeans-Crochet-by-Charmedia%E2%9C%A8%EF%B8%8F-i.97645207.26085506028"
  },


  "my-neighbor-totoro-krochet-keychain": {
    name: "My Neighbor Totoro Crochet Keychain | Ghibli Crochet by Charmedia✨️",
    price: "RP. 22.000",
    reviews: "942 reviews",
    description: "My Neighbor Totoro Crochet Keychain by Charmedia." + templateDesc,
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


  "oh-my-seventeen-beads-keychain": {
    name: "'Oh My' Seventeen Beads Keychain by Charmedia✨️",
    price: "RP. 35.000",
    reviews: "1211 reviews",
    description: "Oh My Seventeen Charm Beads Keychain by Charmedia✨️." + templateDesc,
    details: [
      { label: "Set Includes", value: "4 Coasters" },
      { label: "Material", value: "Cork" },
      { label: "Shape", value: "Square" },
      { label: "Panjang", value: "13 cm" },
    ],
    thumbnails: [
      "/img/oh-my-seventeen-beads/oh-my-seventeen-beads1.webp",
      "/img/oh-my-seventeen-beads/oh-my-seventeen-beads2.jpg",
    ],
    relatedProducts: Array(7).fill(null).map((_, i) => `/images/related_coaster${i + 1}.jpg`),
    quantity: 100,
    link: "https://shopee.co.id/-Oh-My-Seventeen-Beads-Keychain-by-Charmedia%E2%9C%A8%EF%B8%8F-i.97645207.26735455693"
  },


  "spirited-away-susuwatari-crochet-keychain": {
    name: "Spirited Away Susuwatari Crochet Keychain | Ghibli Crochet by Charmedia✨️",
    price: "RP. 15.000",
    reviews: "567 reviews",
    description: "Spirited Away Susuwatari Crochet Keychain by Charmedia✨️" + templateDesc,
    details: [
      { label: "Type", value: "Leather Wallet" },
      { label: "Material", value: "Genuine Leather" },
      { label: "Lebar", value: "3.5 cm" },
      { label: "Panjang", value: "4 cm" },
      { label: "Color", value: "Brown" },
      { label: "Features", value: "Multiple card slots, bill compartment" },
    ],
    thumbnails: [
      "/img/spirited-away-susuwatari-crochet-keychain/spirited-away-susuwatari-crochet-keychain1.webp",
      "/img/spirited-away-susuwatari-crochet-keychain/spirited-away-susuwatari-crochet-keychain2.jpg",
    ],
    relatedProducts: Array(4).fill(null).map((_, i) => `/images/related_wallet${i + 1}.jpg`),
    quantity: 100,
    link: "https://shopee.co.id/Spirited-Away-Susuwatari-Crochet-Keychain-Ghibli-Crochet-by-Charmedia%E2%9C%A8%EF%B8%8F-i.97645207.26235951780"
  },
};

const productList = []

for (let key in productData) {
  const i = productList.length
  const product = {
    id: i + 1,
    name: productData[key].name,
    slug: key,
  };
  productList.push(product);
  // console.log("ADALKSDLKASDLKJ" + product.name);
  productList.map(product => (
    console.log(product.slug)
  ))
}

// export const productList = [
//   { id: 1, name: "Binky Bong New Jeans Crochet Keychain✨️", slug: "binky-bong-new-jeans-crochet-keychain" },
//   { id: 2, name: "My Neighbor Totoro Crochet Keychain | Ghibli Crochet by Charmedia✨️", slug: "my-neighbor-totoro-krochet-keychain" },
//   { id: 3, name: "'Oh My' Seventeen Beads Keychain by Charmedia✨️", slug: "oh-my-seventeen-beads-keychain" },
//   { id: 4, name: "Spirited Away Susuwatari Crochet Keychain | Ghibli Crochet by Charmedia✨️", slug: "spirited-away-susuwatari-crochet-keychain" },
// ];
export default productList;