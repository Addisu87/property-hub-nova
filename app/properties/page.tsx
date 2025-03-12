
import { Metadata } from "next";
import PropertyFilters from "@/components/PropertyFilters";
import PropertyGrid from "@/components/PropertyGrid";

export const metadata: Metadata = {
  title: "Properties | Real Estate Platform",
  description: "Browse our extensive collection of properties for sale and rent",
};

export default function PropertiesPage() {
  return (
    <main className="container mx-auto py-8 px-4 md:px-6">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Available Properties</h1>
      <PropertyFilters />
      <PropertyGrid />
    </main>
  );
}
