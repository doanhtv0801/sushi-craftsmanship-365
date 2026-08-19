import type { Metadata } from "next";
import { SearchContent } from "@/components/search/search-content";

export const metadata: Metadata = {
  title: "Search",
  description: "Search missions and Japanese sushi vocabulary.",
};

export default function SearchPage() {
  return <SearchContent />;
}
