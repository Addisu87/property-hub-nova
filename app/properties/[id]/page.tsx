
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Property } from "@/lib/types";

// This would be replaced with a real API call
async function getProperty(id: string): Promise<Property> {
  // Mock data for demo
  return {
    id: id,
    title: "Modern Apartment with Ocean View",
    description: "Beautiful apartment with stunning ocean views and modern amenities. This spacious property features floor-to-ceiling windows, a gourmet kitchen with stainless steel appliances, and a private balcony overlooking the ocean. The building offers a fitness center, swimming pool, and 24-hour concierge service. Located in a vibrant neighborhood with easy access to restaurants, shopping, and public transportation.",
    price: 450000,
    pricePerSqft: 450,
    address: "123 Ocean Drive, Miami, FL",
    type: "apartment",
    status: "for-sale",
    bedrooms: 2,
    bathrooms: 2,
    area: 1000,
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    featured: true,
    amenities: ["Pool", "Gym", "Parking", "Elevator", "Security", "Balcony", "Ocean View", "Central AC", "In-unit Laundry"],
    yearBuilt: 2019,
    createdAt: new Date("2023-06-15").toISOString(),
  };
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const property = await getProperty(params.id);
  
  return {
    title: `${property.title} | Real Estate Platform`,
    description: property.description.substring(0, 160),
  };
}

export default async function PropertyPage({
  params,
}: {
  params: { id: string };
}) {
  const property = await getProperty(params.id);
  
  const formatPrice = (price: number, isRent = false) => {
    return isRent
      ? `$${price.toLocaleString()}/mo`
      : `$${price.toLocaleString()}`;
  };

  return (
    <main className="container mx-auto py-8 px-4 md:px-6">
      <div className="mb-6">
        <Link href="/properties" className="text-primary hover:underline mb-4 inline-block">
          ← Back to listings
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold">{property.title}</h1>
        <p className="text-xl mt-2">{property.address}</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="rounded-lg overflow-hidden mb-8 border">
            <Image
              src={property.images[0]} 
              alt={property.title}
              width={1200}
              height={800}
              className="w-full object-cover h-[500px]"
              priority
            />
          </div>
          
          <div className="grid grid-cols-3 gap-4 mb-8">
            {property.images.slice(1).map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden border">
                <Image
                  src={image}
                  alt={`${property.title} - Image ${index + 2}`}
                  width={400}
                  height={300}
                  className="w-full h-40 object-cover"
                />
              </div>
            ))}
          </div>
          
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Description</h2>
              <p className="text-muted-foreground">{property.description}</p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">Features & Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-y-2">
                {property.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <Separator />
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">Property Details</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                  <p className="text-muted-foreground">Property Type</p>
                  <p className="font-medium capitalize">{property.type}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Year Built</p>
                  <p className="font-medium">{property.yearBuilt}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Status</p>
                  <p className="font-medium capitalize">{property.status.replace('-', ' ')}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Area</p>
                  <p className="font-medium">{property.area} sq ft</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Bedrooms</p>
                  <p className="font-medium">{property.bedrooms}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Bathrooms</p>
                  <p className="font-medium">{property.bathrooms}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <Card className="sticky top-8">
            <CardHeader>
              <CardTitle className="text-2xl">
                {formatPrice(property.price, property.status === "for-rent")}
              </CardTitle>
              <CardDescription>
                {property.status === "for-sale" 
                  ? `$${property.pricePerSqft}/sq ft` 
                  : `${property.bedrooms} bed, ${property.bathrooms} bath`}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full">Contact Agent</Button>
              <Button variant="outline" className="w-full">Schedule Tour</Button>
              
              <div className="pt-4">
                <h3 className="font-medium mb-2">Mortgage Estimate</h3>
                <div className="text-sm text-muted-foreground">
                  <p>30-year fixed, 6.5% interest</p>
                  <p className="font-medium text-foreground mt-1">
                    {property.status === "for-sale" && 
                      `$${Math.round((property.price * 0.8 * 0.065/12 * 
                      Math.pow(1 + 0.065/12, 360)) / 
                      (Math.pow(1 + 0.065/12, 360) - 1)).toLocaleString()}/month`}
                  </p>
                  <p className="mt-1">20% down payment, taxes, and insurance not included</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
