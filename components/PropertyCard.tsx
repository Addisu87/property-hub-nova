
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, MapPin, BedDouble, Bath, SquareFeet } from "lucide-react";

interface PropertyCardProps {
  id: string;
  title: string;
  price: number;
  pricePerSqFt?: number;
  address: string;
  description?: string;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  images: string[];
  type: "sale" | "rent";
  isNew?: boolean;
  onFavoriteToggle?: (id: string) => void;
  isFavorite?: boolean;
}

export default function PropertyCard({
  id,
  title,
  price,
  pricePerSqFt,
  address,
  bedrooms,
  bathrooms,
  squareFeet,
  images,
  type,
  isNew = false,
  isFavorite = false,
  onFavoriteToggle,
}: PropertyCardProps) {
  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="relative">
        <Link href={`/properties/${id}`}>
          <div className="aspect-[16/9] overflow-hidden">
            <Image
              src={images[0] || "/placeholder.svg"}
              alt={title}
              width={640}
              height={360}
              className="h-full w-full object-cover transition-transform hover:scale-105"
            />
          </div>
        </Link>

        {/* Favorite button */}
        {onFavoriteToggle && (
          <button
            onClick={() => onFavoriteToggle(id)}
            className="absolute right-3 top-3 rounded-full bg-white p-1.5 shadow-md transition-colors hover:bg-gray-100"
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            <Heart
              className={`h-5 w-5 ${
                isFavorite ? "fill-red-500 text-red-500" : "text-gray-500"
              }`}
            />
          </button>
        )}

        {/* Status badge */}
        {isNew && (
          <Badge className="absolute left-3 top-3" variant="secondary">
            New
          </Badge>
        )}
      </div>

      <CardContent className="p-4">
        <div className="mb-2 flex items-baseline justify-between">
          <h3 className="text-xl font-semibold tracking-tight">
            {formatCurrency(price)}
            {type === "rent" && <span className="text-sm text-muted-foreground">/mo</span>}
          </h3>
          {pricePerSqFt && (
            <p className="text-sm text-muted-foreground">
              {formatCurrency(pricePerSqFt)}/sqft
            </p>
          )}
        </div>
        
        <Link href={`/properties/${id}`} className="hover:underline">
          <h4 className="mb-1 font-medium">{title}</h4>
        </Link>
        
        <div className="mb-4 flex items-center text-sm text-muted-foreground">
          <MapPin className="mr-1 h-3.5 w-3.5" />
          <span>{address}</span>
        </div>

        <div className="flex justify-between">
          <div className="flex items-center text-sm">
            <BedDouble className="mr-1 h-4 w-4" />
            <span className="mr-3">{bedrooms} Beds</span>
          </div>
          <div className="flex items-center text-sm">
            <Bath className="mr-1 h-4 w-4" />
            <span className="mr-3">{bathrooms} Baths</span>
          </div>
          <div className="flex items-center text-sm">
            <SquareFeet className="mr-1 h-4 w-4" />
            <span>{squareFeet} sqft</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
