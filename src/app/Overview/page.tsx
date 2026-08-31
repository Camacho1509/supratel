import type { Metadata } from "next";
import OverviewContent from "./OverviewContent";

export const metadata: Metadata = {
  title: "Overview",
  description: "SUPRATEL product overview",
};

export default function OverviewPage() {
  return <OverviewContent />;
}
