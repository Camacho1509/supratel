export interface CatalogProduct {
  id: string;
  name: string;
  sku?: string;
  image: string;
  categoryId: string;
  badge?: string;
  description?: string;
}

export const catalogProducts: CatalogProduct[] = [
  /* ==================================================
     HARDWARE & ACCESSORIES
     ================================================== */

  {
    id: "aluminum-steel-dead-end-clamps",
    name: "Aluminum & Steel Dead-End Clamps",
    image: "/img/Productos/1- Hardware/1- Aluminium.webp",
    categoryId: "hardware-accessories", 
  },
  {
    id: "pole-brackets",
    name: "Pole Brackets",
    image: "/img/Productos/1- Hardware/2- Pole.webp",
    categoryId: "hardware-accessories",
  },
  {
    id: "adss-j-hook",
    name: "ADSS J Hook",
    image: "/img/Productos/1- Hardware/3- ADSS.webp",
    categoryId: "hardware-accessories",
  },
  {
    id: "stainless-steel-bands",
    name: 'Stainless Steel Bands (5/8", 3/4")',
    image: "/img/Productos/1- Hardware/4- Satainless.webp",
    categoryId: "hardware-accessories",
  },
  {
    id: "drop-clamps",
    name: "Drop Clamps (Flat & Round)",
    image: "/img/Productos/1- Hardware/5- Drop.webp",
    categoryId: "hardware-accessories",
  },
  {
    id: "banding-tool",
    name: "Banding Tool",
    image: "/img/Productos/1- Hardware/6- Banding.webp",
    categoryId: "hardware-accessories",
  },
  {
    id: "cable-storage-rack",
    name: "Cable Storage Rack",
    image: "/img/Productos/1- Hardware/7- Cable.webp",
    categoryId: "hardware-accessories",
  },
  {
    id: "anchoring-clamp",
    name: "Anchoring Clamp",
    image: "/img/Productos/1- Hardware/8- Anchoring.webp",
    categoryId: "hardware-accessories",
  },

  /* ==================================================
     CONNECTIVITY
     ================================================== */

  {
    id: "sc-apc-sc-upc-adapter",
    name: "SC/APC-SC/UPC Adapter",
    image: "/img/Productos/2- Connectivity/1- SC.webp",
    categoryId: "connectivity",
  }, 
  {
    id: "mechanical-connector-round-drop",
    name: "Mechanical Connector for Round Drop Cable",
    image: "/img/Productos/2- Connectivity/2- Mechanical.webp",
    categoryId: "connectivity",
  },
  {
    id: "mechanical-connector-flat-drop",
    name: "Mechanical Connector for Flat Drop Cable",
    image: "/img/Productos/2- Connectivity/3- Mechanical C.webp",
    categoryId: "connectivity",
  },
  {
    id: "1x16-mini-plc-fiber-splitter",
    name: "1x16 Mini PLC Fiber Splitter",
    image: "/img/Productos/2- Connectivity/4- 1x16.webp",
    categoryId: "connectivity",
    description: "SC/APC, SC/UPC Single Mode",
  },
  {
    id: "patch-cords",
    name: "Patch Cords",
    image: "/img/Productos/2- Connectivity/5- Patch.webp",
    categoryId: "connectivity",
  },
  {
    id: "1x8-1x6-mini-plc-fiber-splitter",
    name: "1x8, 1x6 Mini PLC Fiber Splitter",
    image: "/img/Productos/2- Connectivity/6- 1x8.webp",
    categoryId: "connectivity",
    description: "SC/APC, SC/UPC Single Mode",
  },
  {
    id: "adapter-global-brands",
    name: "Adapter Compatible with Global Brands",
    image: "/img/Productos/2- Connectivity/7- Adapter.webp",
    categoryId: "connectivity",
  },
  {
    id: "1x2-1x4-mini-plc-fiber-splitter",
    name: "1x2, 1x4 Mini PLC Fiber Splitter",
    image: "/img/Productos/2- Connectivity/8- 1x2.webp",
    categoryId: "connectivity",
    description: "SC/APC, SC/UPC Single Mode",
  },

  /* ==================================================
     CABLES
     ================================================== */

  {
    id: "adss-fiber-optic-cable",
    name: "ADSS Fiber Optic Cable",
    image: "/img/Productos/3- Cables/1- ADSS.webp",
    categoryId: "cables",
  },
  {
    id: "figure-8-fiber-optic-cable",
    name: "Figure-8 Fiber Optic Cable",
    image: "/img/Productos/3- Cables/2- Figure.webp",
    categoryId: "cables",
  },
  {
    id: "armored-outdoor-fiber-optic-cable",
    name: "Armored Outdoor Fiber Optic Cable",
    image: "/img/Productos/3- Cables/3- Armored.webp",
    categoryId: "cables",
  },
  {
    id: "outdoor-dielectric-fiber-optic-cable",
    name: "Outdoor Dielectric Fiber Optic Cable",
    image: "/img/Productos/3- Cables/4- Outdoor.webp",
    categoryId: "cables",
  },
  {
    id: "micro-fiber-optic-cable",
    name: "Micro Fiber Optic Cable",
    image: "/img/Productos/3- Cables/5- Micro.webp",
    categoryId: "cables",
  },
  {
    id: "ftth-drop-cable",
    name: "FTTH Drop Cable",
    image: "/img/Productos/3- Cables/6- FTTH.webp",
    categoryId: "cables",
  },
  {
    id: "indoor-outdoor-fiber-optic-cable",
    name: "Indoor/Outdoor Fiber Optic Cable",
    image: "/img/Productos/3- Cables/7- Indoor.webp",
    categoryId: "cables",
  },
  {
    id: "mini-adss-fiber-optic-cable",
    name: "Mini ADSS Fiber Optic Cable",
    image: "/img/Productos/3- Cables/8- Mini.webp",
    categoryId: "cables",
  },

  /* ==================================================
     ENCLOSURES
     ================================================== */

  {
    id: "fiber-distribution-boxes",
    name: "Fiber Distribution Boxes (FDB / NAP)",
    image: "/img/Productos/4- Enclosures/1- Fiber D.webp",
    categoryId: "enclosures",
  },
  {
    id: "horizontal-fiber-optic-closures",
    name: "Horizontal Fiber Optic Closures",
    image: "/img/Productos/4- Enclosures/2- Horizontal.webp",
    categoryId: "enclosures",
  },
  {
    id: "dome-closures",
    name: "Dome Closures",
    image: "/img/Productos/4- Enclosures/3- Dome.webp",
    categoryId: "enclosures",
  },
  {
    id: "splice-closures",
    name: "Splice Closures",
    image: "/img/Productos/4- Enclosures/4- Splice.webp",
    categoryId: "enclosures",
  },
  {
    id: "pre-connectorized-boxes",
    name: "Pre-Connectorized Boxes",
    image: "/img/Productos/4- Enclosures/5- Pre.webp",
    categoryId: "enclosures",
  },
  {
    id: "splitter-distribution-enclosures",
    name: "Splitter & Distribution Enclosures",
    image: "/img/Productos/4- Enclosures/6- Spliter.webp",
    categoryId: "enclosures",
  },
  {
    id: "outdoor-enclosures",
    name: "Outdoor Enclosures",
    image: "/img/Productos/4- Enclosures/7- Outdoor.webp",
    categoryId: "enclosures",
  },
  {
    id: "fiber-optic-faceplates",
    name: "Fiber Optic Faceplates",
    image: "/img/Productos/4- Enclosures/8- Fiber O.webp",
    categoryId: "enclosures",
  },

  /* ==================================================
     ONT & ONU
     ================================================== */

  {
    id: "basic-ont-onu",
    name: "Basic ONT/ONU",
    image: "/img/Productos/5- Ont y Onu/1- Basic.webp",
    categoryId: "ont-onu",
  },
  {
    id: "single-band-wifi-ont",
    name: "Single-Band Wi-Fi ONT",
    image: "/img/Productos/5- Ont y Onu/2- Single.webp",
    categoryId: "ont-onu",
  },
  {
    id: "dual-band-wifi-ont",
    name: "Dual-Band Wi-Fi ONT",
    image: "/img/Productos/5- Ont y Onu/3- Dual.webp",
    categoryId: "ont-onu",
  },
  {
    id: "wifi-6-ont",
    name: "Wi-Fi 6 ONT",
    image: "/img/Productos/5- Ont y Onu/4- Wifi6.webp",
    categoryId: "ont-onu",
  },
  {
    id: "catv-ont",
    name: "CATV ONT",
    image: "/img/Productos/5- Ont y Onu/5- CATV.webp",
    categoryId: "ont-onu",
  },
  {
    id: "voice-catv-ont",
    name: "Voice & CATV ONT",
    image: "/img/Productos/5- Ont y Onu/6- Voice.webp",
    categoryId: "ont-onu",
  },

  /* ==================================================
     ODF & FIBER PATCH PANELS
     ================================================== */

  {
    id: "rack-mounted-odf",
    name: "Rack-Mounted ODF",
    image: "/img/Productos/6- ODF/1- Rack.webp",
    categoryId: "odf-fiber-patch-panels",
  },
  {
    id: "fiber-optic-patch-panels",
    name: "Fiber Optic Patch Panels",
    image: "/img/Productos/6- ODF/2- Fiber.webp",
    categoryId: "odf-fiber-patch-panels",
  },
  {
    id: "high-density-odf",
    name: "High-Density ODF",
    image: "/img/Productos/6- ODF/3- High.webp",
    categoryId: "odf-fiber-patch-panels",
  },
  {
    id: "sliding-odf-patch-panels",
    name: "Sliding ODF & Patch Panels",
    image: "/img/Productos/6- ODF/4- Sliding.webp",
    categoryId: "odf-fiber-patch-panels",
  },
];