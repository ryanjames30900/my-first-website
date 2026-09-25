```javascript
const cpuData = [

    // =========================
    // AMD ATHLON / PHENOM
    // =========================

    {
        name: "AMD Athlon 64 3200+",
        category: "CPU",
        year: 2003,
        price: 15,
        performance: 12,
        socket: "AM2",
        image: "https://placehold.co/600x400/111111/D4AF37?text=Athlon+64+3200%2B"
    },

    {
        name: "AMD Athlon 64 X2 5000+",
        category: "CPU",
        year: 2006,
        price: 20,
        performance: 20,
        socket: "AM2",
        image: "https://placehold.co/600x400/111111/D4AF37?text=Athlon+64+X2+5000%2B"
    },

    {
        name: "AMD Phenom II X4 965",
        category: "CPU",
        year: 2009,
        price: 25,
        performance: 32,
        socket: "AM3",
        image: "https://placehold.co/600x400/111111/D4AF37?text=Phenom+II+X4+965"
    },

    // =========================
    // AMD FX
    // =========================

    {
        name: "AMD FX-4100",
        category: "CPU",
        year: 2011,
        price: 20,
        performance: 30,
        socket: "AM3+",
        image: "https://placehold.co/600x400/111111/D4AF37?text=FX-4100"
    },

    {
        name: "AMD FX-6300",
        category: "CPU",
        year: 2012,
        price: 25,
        performance: 38,
        socket: "AM3+",
        image: "https://placehold.co/600x400/111111/D4AF37?text=FX-6300"
    },

    {
        name: "AMD FX-8350",
        category: "CPU",
        year: 2012,
        price: 35,
        performance: 45,
        socket: "AM3+",
        image: "https://placehold.co/600x400/111111/D4AF37?text=FX-8350"
    },

    // =========================
    // AMD RYZEN 1000
    // =========================

    {
        name: "AMD Ryzen 3 1200",
        category: "CPU",
        year: 2017,
        price: 30,
        performance: 45,
        socket: "AM4",
        image: "https://placehold.co/600x400/111111/D4AF37?text=Ryzen+3+1200"
    },

    {
        name: "AMD Ryzen 5 1600",
        category: "CPU",
        year: 2017,
        price: 40,
        performance: 55,
        socket: "AM4",
        image: "https://placehold.co/600x400/111111/D4AF37?text=Ryzen+5+1600"
    },

    {
        name: "AMD Ryzen 7 1700",
        category: "CPU",
        year: 2017,
        price: 55,
        performance: 62,
        socket: "AM4",
        image: "https://placehold.co/600x400/111111/D4AF37?text=Ryzen+7+1700"
    },

    // =========================
    // AMD RYZEN 2000
    // =========================

    {
        name: "AMD Ryzen 3 2200G",
        category: "CPU",
        year: 2018,
        price: 35,
        performance: 48,
        socket: "AM4",
        image: "https://placehold.co/600x400/111111/D4AF37?text=Ryzen+3+2200G"
    },

    {
        name: "AMD Ryzen 5 2600",
        category: "CPU",
        year: 2018,
        price: 45,
        performance: 62,
        socket: "AM4",
        image: "https://placehold.co/600x400/111111/D4AF37?text=Ryzen+5+2600"
    },

    {
        name: "AMD Ryzen 7 2700X",
        category: "CPU",
        year: 2018,
        price: 60,
        performance: 70,
        socket: "AM4",
        image: "https://placehold.co/600x400/111111/D4AF37?text=Ryzen+7+2700X"
    },

    // =========================
    // AMD RYZEN 3000
    // =========================

    {
        name: "AMD Ryzen 3 3100",
        category: "CPU",
        year: 2020,
        price: 45,
        performance: 55,
        socket: "AM4",
        image: "https://placehold.co/600x400/111111/D4AF37?text=Ryzen+3+3100"
    },

    {
        name: "AMD Ryzen 5 3600",
        category: "CPU",
        year: 2019,
        price: 60,
        performance: 68,
        socket: "AM4",
        image: "https://placehold.co/600x400/111111/D4AF37?text=Ryzen+5+3600"
    },

    {
        name: "AMD Ryzen 7 3700X",
        category: "CPU",
        year: 2019,
        price: 90,
        performance: 78,
        socket: "AM4",
        image: "https://placehold.co/600x400/111111/D4AF37?text=Ryzen+7+3700X"
    },

    {
        name: "AMD Ryzen 9 3900X",
        category: "CPU",
        year: 2019,
        price: 120,
        performance: 86,
        socket: "AM4",
        image: "https://placehold.co/600x400/111111/D4AF37?text=Ryzen+9+3900X"
    },

    // =========================
    // AMD RYZEN 5000
    // =========================

    {
        name: "AMD Ryzen 5 5600",
        category: "CPU",
        year: 2022,
        price: 100,
        performance: 76,
        socket: "AM4",
        image: "https://placehold.co/600x400/111111/D4AF37?text=Ryzen+5+5600"
    },

    {
        name: "AMD Ryzen 5 5600X",
        category: "CPU",
        year: 2020,
        price: 115,
        performance: 79,
        socket: "AM4",
        image: "https://placehold.co/600x400/111111/D4AF37?text=Ryzen+5+5600X"
    },

    {
        name: "AMD Ryzen 7 5700X",
        category: "CPU",
        year: 2022,
        price: 140,
        performance: 84,
        socket: "AM4",
        image: "https://placehold.co/600x400/111111/D4AF37?text=Ryzen+7+5700X"
    },

    {
        name: "AMD Ryzen 7 5800X3D",
        category: "CPU",
        year: 2022,
        price: 220,
        performance: 92,
        socket: "AM4",
        image: "https://placehold.co/600x400/111111/D4AF37?text=Ryzen+7+5800X3D"
    },

    {
        name: "AMD Ryzen 9 5900X",
        category: "CPU",
        year: 2020,
        price: 220,
        performance: 91,
        socket: "AM4",
        image: "https://placehold.co/600x400/111111/D4AF37?text=Ryzen+9+5900X"
    },

    {
        name: "AMD Ryzen 9 5950X",
        category: "CPU",
        year: 2020,
        price: 280,
        performance: 96,
        socket: "AM4",
        image: "https://placehold.co/600x400/111111/D4AF37?text=Ryzen+9+5950X"
    },

    // =========================
    // AMD RYZEN 7000
    // =========================

    {
        name: "AMD Ryzen 5 7600",
        category: "CPU",
        year: 2023,
        price: 190,
        performance: 82,
        socket: "AM5",
        image: "https://placehold.co/600x400/111111/D4AF37?text=Ryzen+5+7600"
    },

    {
        name: "AMD Ryzen 7 7700",
        category: "CPU",
        year: 2023,
        price: 260,
        performance: 88,
        socket: "AM5",
        image: "https://placehold.co/600x400/111111/D4AF37?text=Ryzen+7+7700"
    },

    {
        name: "AMD Ryzen 7 7800X3D",
        category: "CPU",
        year: 2023,
        price: 350,
        performance: 97,
        socket: "AM5",
        image: "https://placehold.co/600x400/111111/D4AF37?text=Ryzen+7+7800X3D"
    },

    {
        name: "AMD Ryzen 9 7900X",
        category: "CPU",
        year: 2022,
        price: 330,
        performance: 94,
        socket: "AM5",
        image: "https://placehold.co/600x400/111111/D4AF37?text=Ryzen+9+7900X"
    },

    {
        name: "AMD Ryzen 9 7950X",
        category: "CPU",
        year: 2022,
        price: 500,
        performance: 100,
        socket: "AM5",
        image: "https://placehold.co/600x400/111111/D4AF37?text=Ryzen+9+7950X"
    },

    // =========================
    // AMD RYZEN 9000
    // =========================

    {
        name: "AMD Ryzen 5 9600X",
        category: "CPU",
        year: 2024,
        price: 250,
        performance: 90,
        socket: "AM5",
        image: "https://placehold.co/600x400/111111/D4AF37?text=Ryzen+5+9600X"
    },

    {
        name: "AMD Ryzen 7 9700X",
        category: "CPU",
        year: 2024,
        price: 350,
        performance: 96,
        socket: "AM5",
        image: "https://placehold.co/600x400/111111/D4AF37?text=Ryzen+7+9700X"
    },

    {
        name: "AMD Ryzen 7 9800X3D",
        category: "CPU",
        year: 2024,
        price: 480,
        performance: 100,
        socket: "AM5",
        image: "https://placehold.co/600x400/111111/D4AF37?text=Ryzen+7+9800X3D"
    },

    {
        name: "AMD Ryzen 9 9950X",
        category: "CPU",
        year: 2024,
        price: 600,
        performance: 105,
        socket: "AM5",
        image: "https://placehold.co/600x400/111111/D4AF37?text=Ryzen+9+9950X"
    },

    // =========================
    // INTEL CORE 2
    // =========================

    {
        name: "Intel Core 2 Duo E8400",
        category: "CPU",
        year: 2008,
        price: 15,
        performance: 22,
        socket: "LGA775",
        image: "https://placehold.co/600x400/111111/D4AF37?text=Core+2+Duo+E8400"
    },

    {
        name: "Intel Core 2 Quad Q6600",
        category: "CPU",
        year: 2007,
        price: 20,
        performance: 28,
        socket: "LGA775",
        image: "https://placehold.co/600x400/111111/D4AF37?text=Core+2+Quad+Q6600"
    },

    // =========================
    // INTEL 1ST GEN
    // =========================

    {
        name: "Intel Core i5-750",
        category: "CPU",
        year: 2009,
        price: 20,
        performance: 30,
        socket: "LGA1156",
        image: "https://placehold.co/600x400/111111/D4AF37?text=i5-750"
    },

    {
        name: "Intel Core i7-920",
        category: "CPU",
        year: 2008,
        price: 25,
        performance: 34,
        socket: "LGA1366",
        image: "https://placehold.co/600x400/111111/D4AF37?text=i7-920"
    },

    // =========================
    // INTEL 2ND GEN
    // =========================

    {
        name: "Intel Core i5-2500K",
        category: "CPU",
        year: 2011,
        price: 30,
        performance: 45,
        socket: "LGA1155",
        image: "https://placehold.co/600x400/111111/D4AF37?text=i5-2500K"
    },

    {
        name: "Intel Core i7-2600K",
        category: "CPU",
        year: 2011,
        price: 40,
        performance: 50,
        socket: "LGA1155",
        image: "https://placehold.co/600x400/111111/D4AF37?text=i7-2600K"
    },

    // =========================
    // INTEL 3RD GEN
    // =========================

    {
        name: "Intel Core i5-3570K",
        category: "CPU",
        year: 2012,
        price: 30,
        performance: 50,
        socket: "LGA1155",
        image: "https://placehold.co/600x400/111111/D4AF37?text=i5-3570K"
    },

    {
        name: "Intel Core i7-3770K",
        category: "CPU",
        year: 2012,
        price: 45,
        performance: 55,
        socket: "LGA1155",
        image: "https://placehold.co/600x400/111111/D4AF37?text=i7-3770K"
    },

    // =========================
    // INTEL 4TH GEN
    // =========================

    {
        name: "Intel Core i5-4690K",
        category: "CPU",
        year: 2014,
        price: 30,
        performance: 55,
        socket: "LGA1150",
        image: "https://placehold.co/600x400/111111/D4AF37?text=i5-4690K"
    },

    {
        name: "Intel Core i7-4790K",
        category: "CPU",
        year: 2014,
        price: 50,
        performance: 62,
        socket: "LGA1150",
        image: "https://placehold.co/600x400/111111/D4AF37?text=i7-4790K"
    },

    // =========================
    // INTEL 6TH / 7TH GEN
    // =========================

    {
        name: "Intel Core i5-6600K",
        category: "CPU",
        year: 2015,
        price: 40,
        performance: 60,
        socket: "LGA1151",
        image: "https://placehold.co/600x400/111111/D4AF37?text=i5-6600K"
    },

    {
        name: "Intel Core i7-6700K",
        category: "CPU",
        year: 2015,
        price: 50,
        performance: 66,
        socket: "LGA1151",
        image: "https://placehold.co/600x400/111111/D4AF37?text=i7-6700K"
    },

    {
        name: "Intel Core i7-7700K",
        category: "CPU",
        year: 2017,
        price: 60,
        performance: 70,
        socket: "LGA1151",
        image: "https://placehold.co/600x400/111111/D4AF37?text=i7-7700K"
    },

    // =========================
    // INTEL 8TH / 9TH GEN
    // =========================

    {
        name: "Intel Core i5-8400",
        category: "CPU",
        year: 2017,
        price: 55,
        performance: 67,
        socket: "LGA1151",
        image: "https://placehold.co/600x400/111111/D4AF37?text=i5-8400"
    },

    {
        name: "Intel Core i7-8700K",
        category: "CPU",
        year: 2017,
        price: 80,
        performance: 78,
        socket: "LGA1151",
        image: "https://placehold.co/600x400/111111/D4AF37?text=i7-8700K"
    },

    {
        name: "Intel Core i5-9600K",
        category: "CPU",
        year: 2018,
        price: 60,
        performance: 72,
        socket: "LGA1151",
        image: "https://placehold.co/600x400/111111/D4AF37?text=i5-9600K"
    },

    {
        name: "Intel Core i9-9900K",
        category: "CPU",
        year: 2018,
        price: 100,
        performance: 84,
        socket: "LGA1151",
        image: "https://placehold.co/600x400/111111/D4AF37?text=i9-9900K"
    },

    // =========================
    // INTEL 10TH GEN
    // =========================

    {
        name: "Intel Core i3-10100F",
        category: "CPU",
        year: 2020,
        price: 55,
        performance: 60,
        socket: "LGA1200",
        image: "https://placehold.co/600x400/111111/D4AF37?text=i3-10100F"
    },

    {
        name: "Intel Core i5-10400F",
        category: "CPU",
        year: 2020,
        price: 70,
        performance: 70,
        socket: "LGA1200",
        image: "https://placehold.co/600x400/111111/D4AF37?text=i5-10400F"
    },

    {
        name: "Intel Core i7-10700K",
        category: "CPU",
        year: 2020,
        price: 110,
        performance: 82,
        socket: "LGA1200",
        image: "https://placehold.co/600x400/111111/D4AF37?text=i7-10700K"
    },

    {
        name: "Intel Core i9-10900K",
        category: "CPU",
        year: 2020,
        price: 140,
        performance: 88,
        socket: "LGA1200",
        image: "https://placehold.co/600x400/111111/D4AF37?text=i9-10900K"
    },

    // =========================
    // INTEL 12TH GEN
    // =========================

    {
        name: "Intel Core i3-12100F",
        category: "CPU",
        year: 2022,
        price: 80,
        performance: 68,
        socket: "LGA1700",
        image: "https://placehold.co/600x400/111111/D4AF37?text=i3-12100F"
    },

    {
        name: "Intel Core i5-12400F",
        category: "CPU",
        year: 2022,
        price: 120,
        performance: 80,
        socket: "LGA1700",
        image: "https://placehold.co/600x400/111111/D4AF37?text=i5-12400F"
    },

    {
        name: "Intel Core i5-12600K",
        category: "CPU",
        year: 2021,
        price: 170,
        performance: 86,
        socket: "LGA1700",
        image: "https://placehold.co/600x400/111111/D4AF37?text=i5-12600K"
    },

    {
        name: "Intel Core i7-12700K",
        category: "CPU",
        year: 2021,
        price: 220,
        performance: 93,
        socket: "LGA1700",
        image: "https://placehold.co/600x400/111111/D4AF37?text=i7-12700K"
    },

    {
        name: "Intel Core i9-12900K",
        category: "CPU",
        year: 2021,
        price: 300,
        performance: 98,
        socket: "LGA1700",
        image: "https://placehold.co/600x400/111111/D4AF37?text=i9-12900K"
    },

    // =========================
    // INTEL 13TH GEN
    // =========================

    {
        name: "Intel Core i5-13400F",
        category: "CPU",
        year: 2023,
        price: 150,
        performance: 83,
        socket: "LGA1700",
        image: "https://placehold.co/600x400/111111/D4AF37?text=i5-13400F"
    },

    {
        name: "Intel Core i5-13600K",
        category: "CPU",
        year: 2022,
        price: 250,
        performance: 94,
        socket: "LGA1700",
        image: "https://placehold.co/600x400/111111/D4AF37?text=i5-13600K"
    },

    {
        name: "Intel Core i7-13700K",
        category: "CPU",
        year: 2022,
        price: 330,
        performance: 98,
        socket: "LGA1700",
        image: "https://placehold.co/600x400/111111/D4AF37?text=i7-13700K"
    },

    {
        name: "Intel Core i9-13900K",
        category: "CPU",
        year: 2022,
        price: 450,
        performance: 103,
        socket: "LGA1700",
        image: "https://placehold.co/600x400/111111/D4AF37?text=i9-13900K"
    },

    // =========================
    // INTEL 14TH GEN
    // =========================

    {
        name: "Intel Core i5-14400F",
        category: "CPU",
        year: 2024,
        price: 160,
        performance: 86,
        socket: "LGA1700",
        image: "https://placehold.co/600x400/111111/D4AF37?text=i5-14400F"
    },

    {
        name: "Intel Core i5-14600K",
        category: "CPU",
        year: 2023,
        price: 270,
        performance: 96,
        socket: "LGA1700",
        image: "https://placehold.co/600x400/111111/D4AF37?text=i5-14600K"
    },

    {
        name: "Intel Core i7-14700K",
        category: "CPU",
        year: 2023,
        price: 380,
        performance: 101,
        socket: "LGA1700",
        image: "https://placehold.co/600x400/111111/D4AF37?text=i7-14700K"
    },

    {
        name: "Intel Core i9-14900K",
        category: "CPU",
        year: 2023,
        price: 500,
        performance: 105,
        socket: "LGA1700",
        image: "https://placehold.co/600x400/111111/D4AF37?text=i9-14900K"
    }
];
```
