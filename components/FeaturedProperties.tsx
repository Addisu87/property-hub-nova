
"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PropertyCard from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";

// Mock data for featured properties
const mockProperties = {
  buy: [
    {
      id: "p1",
      title: "Modern Family Home",
      price: 450000,
      pricePerSqFt: 250,
      address: "123 Main St, New York, NY",
      bedrooms: 4,
      bathrooms: 3,
      squareFeet: 1800,
      images: ["/placeholder.svg"],
      type: "sale" as const,
      isNew: true,
    },
    {
      id: "p2",
      title: "Downtown Loft",
      price: 650000,
      pricePerSqFt: 450,
      address: "456 Park Ave, New York, NY",
      bedrooms: 2,
      bathrooms: 2,
      squareFeet: 1200,
      images: ["/placeholder.svg"],
      type: "sale" as const,
    },
    {
      id: "p3",
      title: "Suburban Villa",
      price: 850000,
      pricePerSqFt: 320,
      address: "789 Oak St, New Jersey, NJ",
      bedrooms: 5,
      bathrooms: 4,
      squareFeet: 2600,
      images: ["/placeholder.svg"],
      type: "sale" as const,
      isNew: true,
    },
  ],
  rent: [
    {
      id: "r1",
      title: "Studio Apartment",
      price: 1800,
      address: "101 Broadway, New York, NY",
      bedrooms: 0,
      bathrooms: 1,
      squareFeet: 550,
      images: ["/placeholder.svg"],
      type: "rent" as const,
    },
    {
      id: "r2",
      title: "Luxury Penthouse",
      price: 6500,
      address: "222 Fifth Ave, New York, NY",
      bedrooms: 3,
      bathrooms: 3,
      squareFeet: 1800,
      images: ["/placeholder.svg"],
      type: "rent" as const,
      isNew: true,
    },
    {
      id: "r3",
      title: "Cozy Apartment",
      price: 2200,
      address: "333 Madison St, Brooklyn, NY",
      bedrooms: 2,
      bathrooms: 1,
      squareFeet: 950,
      images: ["/placeholder.svg"],
      type: "rent" as const,
    },
  ],
};

export default function FeaturedProperties() {
  const [favorites, setFavorites] = useState<string[]>([]);
  
  const handleFavoriteToggle = (id: string) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(id)
        ? prevFavorites.filter((favId) => favId !== id)
        : [...prevFavorites, id]
    );
  };

  return (
    <section className="container py-16">
      <div className="mb-10 text-center">
        <h2 className="mb-2 text-3xl font-bold tracking-tight">
          Featured Properties
        </h2>
        <p className="text-lg text-muted-foreground">
          Explore our handpicked selection of premier properties
        </p>
      </div>

      <Tabs defaultValue="buy" className="w-full">
        <div className="flex justify-center">
          <TabsList className="mb-8">
            <TabsTrigger value="buy">For Sale</TabsTrigger>
            <TabsTrigger value="rent">For Rent</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="buy" className="space-y-8">
          <div className="property-grid">
            {mockProperties.buy.map((property) => (
              <PropertyCard
                key={property.id}
                {...property}
                onFavoriteToggle={handleFavoriteToggle}
                isFavorite={favorites.includes(property.id)}
              />
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Button asChild variant="outline" size="lg">
              <a href="/properties/buy">View All Properties For Sale</a>
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="rent" className="space-y-8">
          <div className="property-grid">
            {mockProperties.rent.map((property) => (
              <PropertyCard
                key={property.id}
                {...property}
                onFavoriteToggle={handleFavoriteToggle}
                isFavorite={favorites.includes(property.id)}
              />
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Button asChild variant="outline" size="lg">
              <a href="/properties/rent">View All Rental Properties</a>
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
