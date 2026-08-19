import type { Metadata } from "next";
import { ProfileContent } from "@/components/profile/profile-content";

export const metadata: Metadata = {
  title: "Profile",
  description: "Your rank, level, streak and skills as a sushi craftsman in training.",
};

export default function ProfilePage() {
  return <ProfileContent />;
}
