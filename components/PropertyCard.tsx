
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { HeartIcon, BedIcon, BathIcon, RulerIcon } from "lucide-react";
import { Property } from "@/lib/types";

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
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
    <Link href={`/properties/${id}`} className="group">
      <div className="rounded-lg overflow-hidden border bg-card transition-all hover:shadow-md">
        <div className="relative">
          <Image
            src={images[0] || "/placeholder.svg"}
            alt={title}
            width={500}
            height={300}
            className="h-56 w-full object-cover transition-transform group-hover:scale-105"
          />
          <Badge
            variant="outline"
            className={`absolute top-3 left-3 ${statusColors[status]}`}
          >
            {statusLabel[status]}
          </Badge>
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
          <p className="text-muted-foreground text-sm mb-4 truncate">{address}</p>
          
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
}
