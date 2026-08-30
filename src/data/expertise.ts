export type ExpertiseIcon =
  | "cable"
  | "network"
  | "radioTower"
  | "waypoints"
  | "boxes"
  | "router";

export interface ExpertiseItem {
  title: string;
  desc: string;
  icon: ExpertiseIcon;
}

export const expertise: ExpertiseItem[] = [
  {
    title: "Fiber Optic Infrastructure",
    desc: "Robust cables designed for high mechanical endurance and long-haul signal integrity.",
    icon: "cable",
  },
  {
    title: "FTTH & FTTx Deployment Solutions",
    desc: "End-to-end passive equipment engineered for rapid last-mile connectivity deployment.",
    icon: "network",
  },
  {
    title: "Aerial Network Solutions",
    desc: "Heavy-duty pole hardware and aerial cable suspension systems for rugged environments.",
    icon: "radioTower",
  },
  {
    title: "Passive Fiber Connectivity",
    desc: "High-precision connectors, adapters, and splitters for low-loss network performance.",
    icon: "waypoints",
  },
  {
    title: "Enclosures & Fiber Management",
    desc: "Durable splice closures and structured organization frames for high-density environments.",
    icon: "boxes",
  },
  {
    title: "Customer Premises Equipment",
    desc: "Reliable subscriber terminals and demarcation points for high-speed broadband services.",
    icon: "router",
  },
];