import type { Metadata } from "next";
import { DashboardContent } from "@/components/dashboard/dashboard-content";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Track your progress toward becoming a sushi craftsman.",
};

export default function DashboardPage() {
  return <DashboardContent />;
}
