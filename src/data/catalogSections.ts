export interface CatalogSection {
  id: string;
  name: string;
  overview: string;
}

export const catalogSections: CatalogSection[] = [
  {
    id: "hardware-accessories",
    name: "Hardware & Accessories",
    overview:
      "SUPRATEL® offers a comprehensive range of hardware and installation accessories for aerial fiber optic networks. Designed for high mechanical strength, durability, and easy installation, our solutions are compatible with various cable types, installation methods, and environmental conditions, ensuring reliable performance for every project.",
  },

  {
    id: "connectivity",
    name: "Connectivity",
    overview:
      "SUPRATEL® offers a complete range of fiber optic connectivity solutions designed for reliable signal transmission and efficient fiber management. Our portfolio includes connectors, adapters, couplers, PLC splitters, patch cords, pigtails, and other passive components in various configurations such as SC/APC and SC/UPC for FTTH, FTTx, and telecom networks.",
  },

  {
    id: "cables",
    name: "Cables",
    overview:
      "SUPRATEL® offers a complete range of fiber optic cables designed for reliable and high-performance network deployments. Our portfolio includes ADSS, Figure-8, Drop, Mini ADSS, Micro, Armored, Outdoor, and Indoor/Outdoor cables, available in various fiber counts, constructions, and specifications to meet the requirements of FTTH, FTTx, aerial, and telecom networks.",
  },

  {
    id: "enclosures",
    name: "Enclosures",
    overview:
      "SUPRATEL® offers a complete range of fiber optic enclosures designed to protect, organize, and distribute optical fibers in FTTH, FTTx, and telecom networks. Our portfolio includes fiber distribution boxes, splice closures, dome closures, FTTH boxes, and splitter enclosures, available in various configurations for aerial, wall-mounted, underground, and outdoor applications.",
  },

  {
    id: "ont-onu",
    name: "ONT & ONU",
    overview:
      "SUPRATEL® offers a complete range of GPON/EPON ONT and ONU solutions designed for reliable FTTH deployments and high-performance broadband services. Available in multiple configurations, our devices combine Ethernet, Wi-Fi, voice, CATV, and advanced network management features to meet different operator and subscriber requirements.",
  },

  {
    id: "odf-fiber-patch-panels",
    name: "ODF & Fiber Patch Panels",
    overview:
      "SUPRATEL® offers a complete range of ODF and fiber optic patch panels designed for efficient fiber termination, splicing, distribution, and management. Available in rack-mounted and various capacity configurations, our solutions provide reliable and organized fiber management for FTTH, LAN/WAN, CATV, and telecom networks.",
  },
];