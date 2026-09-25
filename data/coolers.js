```javascript
const coolers = [
  // =========================
  // STOCK / BASIC COOLERS
  // =========================

  {
    name: "Intel Stock Cooler",
    category: "CPU Cooler",
    brand: "Intel",
    year: 2010,
    price: 10,
    performance: 20,
    coolerType: "Air",
    socketSupport: ["LGA1155", "LGA1150", "LGA1151", "LGA1200"],
    coolingCapacity: 65,
    height: 47,
    radiatorSize: null,
    image: "https://placehold.co/500x500?text=Intel+Stock+Cooler"
  },

  {
    name: "AMD Wraith Stealth",
    category: "CPU Cooler",
    brand: "AMD",
    year: 2017,
    price: 15,
    performance: 25,
    coolerType: "Air",
    socketSupport: ["AM4", "AM5"],
    coolingCapacity: 65,
    height: 54,
    radiatorSize: null,
    image: "https://placehold.co/500x500?text=AMD+Wraith+Stealth"
  },

  {
    name: "AMD Wraith Spire",
    category: "CPU Cooler",
    brand: "AMD",
    year: 2017,
    price: 20,
    performance: 32,
    coolerType: "Air",
    socketSupport: ["AM4"],
    coolingCapacity: 95,
    height: 71,
    radiatorSize: null,
    image: "https://placehold.co/500x500?text=AMD+Wraith+Spire"
  },

  {
    name: "AMD Wraith Prism",
    category: "CPU Cooler",
    brand: "AMD",
    year: 2018,
    price: 30,
    performance: 45,
    coolerType: "Air",
    socketSupport: ["AM4", "AM5"],
    coolingCapacity: 105,
    height: 96,
    radiatorSize: null,
    image: "https://placehold.co/500x500?text=AMD+Wraith+Prism"
  },

  // =========================
  // BUDGET AIR COOLERS
  // =========================

  {
    name: "Cooler Master Hyper 212",
    category: "CPU Cooler",
    brand: "Cooler Master",
    year: 2008,
    price: 35,
    performance: 48,
    coolerType: "Air",
    socketSupport: ["LGA775", "LGA1155", "LGA1150", "LGA1151", "AM3", "AM4"],
    coolingCapacity: 120,
    height: 159,
    radiatorSize: null,
    image: "https://placehold.co/500x500?text=Hyper+212"
  },

  {
    name: "DeepCool GAMMAXX 400",
    category: "CPU Cooler",
    brand: "DeepCool",
    year: 2016,
    price: 25,
    performance: 45,
    coolerType: "Air",
    socketSupport: ["LGA1151", "LGA1200", "AM4"],
    coolingCapacity: 130,
    height: 155,
    radiatorSize: null,
    image: "https://placehold.co/500x500?text=GAMMAXX+400"
  },

  {
    name: "DeepCool AG400",
    category: "CPU Cooler",
    brand: "DeepCool",
    year: 2022,
    price: 25,
    performance: 58,
    coolerType: "Air",
    socketSupport: ["LGA1200", "LGA1700", "AM4", "AM5"],
    coolingCapacity: 180,
    height: 150,
    radiatorSize: null,
    image: "https://placehold.co/500x500?text=AG400"
  },

  {
    name: "Thermalright Assassin X 120",
    category: "CPU Cooler",
    brand: "Thermalright",
    year: 2022,
    price: 25,
    performance: 60,
    coolerType: "Air",
    socketSupport: ["LGA1200", "LGA1700", "AM4", "AM5"],
    coolingCapacity: 180,
    height: 148,
    radiatorSize: null,
    image: "https://placehold.co/500x500?text=Assassin+X+120"
  },

  // =========================
  // MID-RANGE AIR COOLERS
  // =========================

  {
    name: "be quiet! Pure Rock 2",
    category: "CPU Cooler",
    brand: "be quiet!",
    year: 2020,
    price: 45,
    performance: 68,
    coolerType: "Air",
    socketSupport: ["LGA1200", "LGA1700", "AM4", "AM5"],
    coolingCapacity: 150,
    height: 155,
    radiatorSize: null,
    image: "https://placehold.co/500x500?text=Pure+Rock+2"
  },

  {
    name: "Noctua NH-U12S",
    category: "CPU Cooler",
    brand: "Noctua",
    year: 2013,
    price: 65,
    performance: 75,
    coolerType: "Air",
    socketSupport: ["LGA1150", "LGA1151", "LGA1200", "LGA1700", "AM4", "AM5"],
    coolingCapacity: 160,
    height: 158,
    radiatorSize: null,
    image: "https://placehold.co/500x500?text=NH-U12S"
  },

  {
    name: "Thermalright Peerless Assassin 120",
    category: "CPU Cooler",
    brand: "Thermalright",
    year: 2022,
    price: 40,
    performance: 88,
    coolerType: "Air",
    socketSupport: ["LGA1200", "LGA1700", "AM4", "AM5"],
    coolingCapacity: 220,
    height: 157,
    radiatorSize: null,
    image: "https://placehold.co/500x500?text=Peerless+Assassin+120"
  },

  {
    name: "Thermalright Phantom Spirit 120",
    category: "CPU Cooler",
    brand: "Thermalright",
    year: 2023,
    price: 40,
    performance: 92,
    coolerType: "Air",
    socketSupport: ["LGA1200", "LGA1700", "AM4", "AM5"],
    coolingCapacity: 230,
    height: 157,
    radiatorSize: null,
    image: "https://placehold.co/500x500?text=Phantom+Spirit+120"
  },

  // =========================
  // HIGH-END AIR COOLERS
  // =========================

  {
    name: "Noctua NH-D15",
    category: "CPU Cooler",
    brand: "Noctua",
    year: 2014,
    price: 100,
    performance: 94,
    coolerType: "Air",
    socketSupport: ["LGA1150", "LGA1151", "LGA1200", "LGA1700", "AM4", "AM5"],
    coolingCapacity: 250,
    height: 165,
    radiatorSize: null,
    image: "https://placehold.co/500x500?text=NH-D15"
  },

  {
    name: "be quiet! Dark Rock Pro 4",
    category: "CPU Cooler",
    brand: "be quiet!",
    year: 2018,
    price: 90,
    performance: 92,
    coolerType: "Air",
    socketSupport: ["LGA1151", "LGA1200", "LGA1700", "AM4", "AM5"],
    coolingCapacity: 250,
    height: 163,
    radiatorSize: null,
    image: "https://placehold.co/500x500?text=Dark+Rock+Pro+4"
  },

  {
    name: "Noctua NH-D15 G2",
    category: "CPU Cooler",
    brand: "Noctua",
    year: 2024,
    price: 150,
    performance: 100,
    coolerType: "Air",
    socketSupport: ["LGA1700", "AM4", "AM5"],
    coolingCapacity: 270,
    height: 168,
    radiatorSize: null,
    image: "https://placehold.co/500x500?text=NH-D15+G2"
  },

  // =========================
  // 120MM AIO
  // =========================

  {
    name: "Cooler Master MasterLiquid 120",
    category: "CPU Cooler",
    brand: "Cooler Master",
    year: 2016,
    price: 60,
    performance: 62,
    coolerType: "AIO",
    socketSupport: ["LGA1151", "LGA1200", "AM4"],
    coolingCapacity: 150,
    height: null,
    radiatorSize: 120,
    image: "https://placehold.co/500x500?text=MasterLiquid+120"
  },

  // =========================
  // 240MM AIO
  // =========================

  {
    name: "Corsair H100i",
    category: "CPU Cooler",
    brand: "Corsair",
    year: 2012,
    price: 100,
    performance: 78,
    coolerType: "AIO",
    socketSupport: ["LGA1155", "LGA1150", "LGA1151", "LGA1200", "AM4"],
    coolingCapacity: 180,
    height: null,
    radiatorSize: 240,
    image: "https://placehold.co/500x500?text=Corsair+H100i"
  },

  {
    name: "Arctic Liquid Freezer II 240",
    category: "CPU Cooler",
    brand: "Arctic",
    year: 2020,
    price: 90,
    performance: 88,
    coolerType: "AIO",
    socketSupport: ["LGA1200", "LGA1700", "AM4", "AM5"],
    coolingCapacity: 240,
    height: null,
    radiatorSize: 240,
    image: "https://placehold.co/500x500?text=Liquid+Freezer+II+240"
  },

  {
    name: "Arctic Liquid Freezer III 240",
    category: "CPU Cooler",
    brand: "Arctic",
    year: 2024,
    price: 80,
    performance: 91,
    coolerType: "AIO",
    socketSupport: ["LGA1700", "AM4", "AM5"],
    coolingCapacity: 250,
    height: null,
    radiatorSize: 240,
    image: "https://placehold.co/500x500?text=Liquid+Freezer+III+240"
  },

  // =========================
  // 280MM AIO
  // =========================

  {
    name: "Corsair H115i",
    category: "CPU Cooler",
    brand: "Corsair",
    year: 2016,
    price: 130,
    performance: 88,
    coolerType: "AIO",
    socketSupport: ["LGA1151", "LGA1200", "LGA1700", "AM4", "AM5"],
    coolingCapacity: 250,
    height: null,
    radiatorSize: 280,
    image: "https://placehold.co/500x500?text=Corsair+H115i"
  },

  {
    name: "Arctic Liquid Freezer III 280",
    category: "CPU Cooler",
    brand: "Arctic",
    year: 2024,
    price: 100,
    performance: 95,
    coolerType: "AIO",
    socketSupport: ["LGA1700", "AM4", "AM5"],
    coolingCapacity: 270,
    height: null,
    radiatorSize: 280,
    image: "https://placehold.co/500x500?text=Liquid+Freezer+III+280"
  },

  // =========================
  // 360MM AIO
  // =========================

  {
    name: "Corsair H150i",
    category: "CPU Cooler",
    brand: "Corsair",
    year: 2020,
    price: 160,
    performance: 94,
    coolerType: "AIO",
    socketSupport: ["LGA1200", "LGA1700", "AM4", "AM5"],
    coolingCapacity: 280,
    height: null,
    radiatorSize: 360,
    image: "https://placehold.co/500x500?text=Corsair+H150i"
  },

  {
    name: "Arctic Liquid Freezer III 360",
    category: "CPU Cooler",
    brand: "Arctic",
    year: 2024,
    price: 120,
    performance: 100,
    coolerType: "AIO",
    socketSupport: ["LGA1700", "AM4", "AM5"],
    coolingCapacity: 300,
    height: null,
    radiatorSize: 360,
    image: "https://placehold.co/500x500?text=Liquid+Freezer+III+360"
  },

  {
    name: "NZXT Kraken 360",
    category: "CPU Cooler",
    brand: "NZXT",
    year: 2023,
    price: 180,
    performance: 96,
    coolerType: "AIO",
    socketSupport: ["LGA1700", "AM4", "AM5"],
    coolingCapacity: 280,
    height: null,
    radiatorSize: 360,
    image: "https://placehold.co/500x500?text=NZXT+Kraken+360"
  },

  // =========================
  // 420MM AIO
  // =========================

  {
    name: "Arctic Liquid Freezer II 420",
    category: "CPU Cooler",
    brand: "Arctic",
    year: 2020,
    price: 140,
    performance: 98,
    coolerType: "AIO",
    socketSupport: ["LGA1200", "LGA1700", "AM4", "AM5"],
    coolingCapacity: 320,
    height: null,
    radiatorSize: 420,
    image: "https://placehold.co/500x500?text=Liquid+Freezer+II+420"
  },

  {
    name: "Arctic Liquid Freezer III 420",
    category: "CPU Cooler",
    brand: "Arctic",
    year: 2024,
    price: 150,
    performance: 105,
    coolerType: "AIO",
    socketSupport: ["LGA1700", "AM4", "AM5"],
    coolingCapacity: 330,
    height: null,
    radiatorSize: 420,
    image: "https://placehold.co/500x500?text=Liquid+Freezer+III+420"
  }
];
```
