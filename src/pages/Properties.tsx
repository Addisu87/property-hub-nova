
import { useState } from "react";
import { Property } from "@/lib/types";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { MapPinIcon, BedIcon, BathIcon, RulerIcon, HeartIcon } from "lucide-react";
import { Link } from "react-router-dom";

// Mock property data
const mockProperties: Property[] = [
  {
    id: "1",
    title: "Modern Apartment with Ocean View",
    description: "Beautiful apartment with stunning ocean views and modern amenities.",
    price: 450000,
    pricePerSqft: 450,
    address: "123 Ocean Drive, Miami, FL",
    type: "apartment",
    status: "for-sale",
    bedrooms: 2,
    bathrooms: 2,
    area: 1000,
    images: ["/placeholder.svg"],
    featured: true,
    amenities: ["Pool", "Gym", "Parking", "Elevator", "Security"],
    yearBuilt: 2019,
    createdAt: new Date("2023-06-15").toISOString(),
  },
  {
    id: "2",
    title: "Luxury Townhouse in City Center",
    description: "Spacious townhouse located in the heart of the city with premium finishes.",
    price: 750000,
    pricePerSqft: 500,
    address: "456 Main Street, Denver, CO",
    type: "townhouse",
    status: "for-sale",
    bedrooms: 3,
    bathrooms: 2.5,
    area: 1500,
    images: ["/placeholder.svg"],
    featured: true,
    amenities: ["Fireplace", "Backyard", "Garage", "Hardwood Floors"],
    yearBuilt: 2015,
    createdAt: new Date("2023-07-02").toISOString(),
  },
  {
    id: "3",
    title: "Cozy Studio for Rent",
    description: "Fully furnished studio apartment available for immediate move-in.",
    price: 1200,
    pricePerSqft: 2,
    address: "789 Park Avenue, New York, NY",
    type: "apartment",
    status: "for-rent",
    bedrooms: 0,
    bathrooms: 1,
    area: 500,
    images: ["/placeholder.svg"],
    featured: false,
    amenities: ["Furnished", "Utilities Included", "Laundry"],
    yearBuilt: 2000,
    createdAt: new Date("2023-07-10").toISOString(),
  },
  {
    id: "4",
    title: "Family Home with Backyard",
    description: "Spacious family house with large backyard and modern kitchen.",
    price: 550000,
    pricePerSqft: 275,
    address: "101 Family Lane, Austin, TX",
    type: "house",
    status: "for-sale",
    bedrooms: 4,
    bathrooms: 3,
    area: 2000,
    images: ["/placeholder.svg"],
    featured: true,
    amenities: ["Backyard", "Garage", "Updated Kitchen", "Basement"],
    yearBuilt: 2005,
    createdAt: new Date("2023-06-20").toISOString(),
  },
  {
    id: "5",
    title: "Downtown Loft",
    description: "Industrial chic loft in the arts district with high ceilings.",
    price: 2200,
    pricePerSqft: 2.75,
    address: "222 Arts District, Portland, OR",
    type: "apartment",
    status: "for-rent",
    bedrooms: 1,
    bathrooms: 1,
    area: 800,
    images: ["/placeholder.svg"],
    featured: false,
    amenities: ["High Ceilings", "Exposed Brick", "Large Windows", "Stainless Appliances"],
    yearBuilt: 1925,
    createdAt: new Date("2023-07-05").toISOString(),
  },
  {
    id: "6",
    title: "Beachfront Condo",
    description: "Stunning beachfront condo with panoramic views and resort amenities.",
    price: 850000,
    pricePerSqft: 850,
    address: "333 Beach Road, San Diego, CA",
    type: "condo",
    status: "for-sale",
    bedrooms: 2,
    bathrooms: 2,
    area: 1000,
    images: ["/placeholder.svg"],
    featured: true,
    amenities: ["Pool", "Hot Tub", "Beach Access", "Gym", "Concierge"],
    yearBuilt: 2018,
    createdAt: new Date("2023-06-28").toISOString(),
  }
];

// Property Card Component
const PropertyCard = ({ property }: { property: Property }) => {
  const {
    id,
    title,
    price,
    address,
    bedrooms,
    bathrooms,
    area,
    images,
    status,
  } = property;

  const formatPrice = (price: number, isRent = status === "for-rent") => {
    return isRent
      ? `$${price.toLocaleString()}/mo`
      : `$${price.toLocaleString()}`;
  };

  const statusColors = {
    "for-sale": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100",
    "for-rent": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100",
    "sold": "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100",
    "pending": "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100",
  };

  const statusLabel = {
    "for-sale": "For Sale",
    "for-rent": "For Rent",
    "sold": "Sold",
    "pending": "Pending",
  };

  return (
    <Link to={`/properties/${id}`} className="group">
      <div className="rounded-lg overflow-hidden border bg-card transition-all hover:shadow-md">
        <div className="relative">
          <img
            src={images[0] || "/placeholder.svg"}
            alt={title}
            className="h-56 w-full object-cover transition-transform group-hover:scale-105"
          />
          <div
            className={`absolute top-3 left-3 px-2 py-1 rounded-md text-xs font-medium ${statusColors[status]}`}
          >
            {statusLabel[status]}
          </div>
          <button
            aria-label="Save property"
            className="absolute top-3 right-3 rounded-full p-1.5 bg-white/80 hover:bg-white text-muted-foreground hover:text-red-500 transition-colors"
          >
            <HeartIcon className="h-5 w-5" />
          </button>
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-semibold text-lg truncate group-hover:text-primary">
              {title}
            </h3>
          </div>
          <p className="text-xl font-bold mb-2">{formatPrice(price)}</p>
          <div className="flex items-center text-muted-foreground text-sm mb-4">
            <MapPinIcon className="h-4 w-4 mr-1" />
            <p className="truncate">{address}</p>
          </div>
          
          <div className="flex justify-between text-sm">
            <div className="flex items-center gap-1" title="Bedrooms">
              <BedIcon className="h-4 w-4 text-muted-foreground" />
              <span>{bedrooms}</span>
            </div>
            <div className="flex items-center gap-1" title="Bathrooms">
              <BathIcon className="h-4 w-4 text-muted-foreground" />
              <span>{bathrooms}</span>
            </div>
            <div className="flex items-center gap-1" title="Square Footage">
              <RulerIcon className="h-4 w-4 text-muted-foreground" />
              <span>{area} sqft</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

const Properties = () => {
  const [loading, setLoading] = useState(false);
  const [properties, setProperties] = useState<Property[]>(mockProperties);

  const loadMore = () => {
    setLoading(true);
    // Simulate loading more properties
    setTimeout(() => {
      setProperties([...properties, ...mockProperties.slice(0, 3)]);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Available Properties</h1>
      
      <div className="property-grid mb-10">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
        {loading &&
          Array(3)
            .fill(0)
            .map((_, index) => (
              <div key={`skeleton-${index}`} className="rounded-lg overflow-hidden border">
                <Skeleton className="h-48 w-full" />
                <div className="p-4 space-y-3">
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                  <div className="flex justify-between pt-2">
                    <Skeleton className="h-5 w-24" />
                    <Skeleton className="h-5 w-20" />
                  </div>
                </div>
              </div>
            ))}
      </div>
      
      <div className="flex justify-center">
        <Button
          onClick={loadMore}
          variant="outline"
          size="lg"
          disabled={loading}
        >
          {loading ? "Loading..." : "Load More Properties"}
        </Button>
      </div>
    </div>
  );
};

export default Properties;
