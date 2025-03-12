
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { 
  MapPinIcon, 
  BedIcon, 
  BathIcon, 
  RulerIcon, 
  HeartIcon, 
  CalendarIcon, 
  HomeIcon,
  ArrowLeftIcon,
  PhoneIcon,
  MailIcon
} from "lucide-react";
import { Property } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";

// Mock property data - same as in Properties.tsx
const mockProperties: Property[] = [
  {
    id: "1",
    title: "Modern Apartment with Ocean View",
    description: "Beautiful apartment with stunning ocean views and modern amenities. This spacious apartment features large windows that provide abundant natural light and breathtaking views of the ocean. The open floor plan creates a seamless flow between the living, dining, and kitchen areas, perfect for entertaining guests. The kitchen is equipped with high-end stainless steel appliances, quartz countertops, and ample cabinet space. The master bedroom includes a walk-in closet and an en-suite bathroom with a glass shower and soaking tub. The second bedroom is spacious and can also serve as a home office if needed. Additional amenities include in-unit laundry, central air conditioning, and access to the building's pool, gym, and concierge service.",
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
    amenities: ["Pool", "Gym", "Parking", "Elevator", "Security"],
    yearBuilt: 2019,
    createdAt: new Date("2023-06-15").toISOString(),
  },
  {
    id: "2",
    title: "Luxury Townhouse in City Center",
    description: "Spacious townhouse located in the heart of the city with premium finishes. This elegant townhouse offers the perfect blend of luxury and convenience, situated just minutes away from downtown's best dining, shopping, and entertainment venues. The main floor features a gourmet kitchen with granite countertops, custom cabinetry, and a large island perfect for casual dining. The adjacent living room boasts high ceilings, a gas fireplace, and large windows that fill the space with natural light. The upper level includes a primary suite with a spa-like bathroom and two additional bedrooms. The finished basement provides extra living space that can be used as a home theater, office, or guest suite. The private backyard offers a peaceful retreat with a stone patio and professional landscaping.",
    price: 750000,
    pricePerSqft: 500,
    address: "456 Main Street, Denver, CO",
    type: "townhouse",
    status: "for-sale",
    bedrooms: 3,
    bathrooms: 2.5,
    area: 1500,
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    featured: true,
    amenities: ["Fireplace", "Backyard", "Garage", "Hardwood Floors"],
    yearBuilt: 2015,
    createdAt: new Date("2023-07-02").toISOString(),
  },
  {
    id: "3",
    title: "Cozy Studio for Rent",
    description: "Fully furnished studio apartment available for immediate move-in. This charming studio offers modern living in a compact, well-designed space. The unit features a comfortable sleeping area, a functional kitchenette with essential appliances, and a clean, updated bathroom. The large windows provide excellent natural light and city views. Utilities are included in the rent, making budgeting easier for tenants. The building offers secure entry, on-site laundry facilities, and is pet-friendly (with deposit). Located just blocks from public transportation, shops, and restaurants, this rental is perfect for young professionals or students looking for convenience and comfort.",
    price: 1200,
    pricePerSqft: 2,
    address: "789 Park Avenue, New York, NY",
    type: "apartment",
    status: "for-rent",
    bedrooms: 0,
    bathrooms: 1,
    area: 500,
    images: ["/placeholder.svg", "/placeholder.svg"],
    featured: false,
    amenities: ["Furnished", "Utilities Included", "Laundry"],
    yearBuilt: 2000,
    createdAt: new Date("2023-07-10").toISOString(),
  },
  {
    id: "4",
    title: "Family Home with Backyard",
    description: "Spacious family house with large backyard and modern kitchen. This beautiful family home offers the perfect combination of comfort, style, and functionality. The heart of the home is the recently renovated kitchen featuring stainless steel appliances, custom cabinetry, and a large island with breakfast bar. The open-concept main floor includes a dining area and a comfortable living room with a fireplace. Upstairs, you'll find four bedrooms including a primary suite with a walk-in closet and ensuite bathroom. The finished basement provides additional living space perfect for a playroom or home theater. Outside, the large fenced backyard offers plenty of space for children to play, gardening enthusiasts to create their dream garden, or for entertaining guests during summer barbecues.",
    price: 550000,
    pricePerSqft: 275,
    address: "101 Family Lane, Austin, TX",
    type: "house",
    status: "for-sale",
    bedrooms: 4,
    bathrooms: 3,
    area: 2000,
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    featured: true,
    amenities: ["Backyard", "Garage", "Updated Kitchen", "Basement"],
    yearBuilt: 2005,
    createdAt: new Date("2023-06-20").toISOString(),
  },
  {
    id: "5",
    title: "Downtown Loft",
    description: "Industrial chic loft in the arts district with high ceilings. This stunning loft apartment brings together industrial heritage and modern living in the city's vibrant arts district. The open floor plan features soaring 14-foot ceilings, exposed brick walls, and large factory windows that flood the space with natural light. The kitchen is equipped with stainless steel appliances, concrete countertops, and a breakfast bar. The living area is spacious enough to accommodate both living and dining furniture, while the sleeping area can be partially separated for privacy. The bathroom features a walk-in shower with rainfall showerhead and modern fixtures. Additional features include in-unit laundry, polished concrete floors, and custom lighting throughout.",
    price: 2200,
    pricePerSqft: 2.75,
    address: "222 Arts District, Portland, OR",
    type: "apartment",
    status: "for-rent",
    bedrooms: 1,
    bathrooms: 1,
    area: 800,
    images: ["/placeholder.svg", "/placeholder.svg"],
    featured: false,
    amenities: ["High Ceilings", "Exposed Brick", "Large Windows", "Stainless Appliances"],
    yearBuilt: 1925,
    createdAt: new Date("2023-07-05").toISOString(),
  },
  {
    id: "6",
    title: "Beachfront Condo",
    description: "Stunning beachfront condo with panoramic views and resort amenities. This luxurious beachfront condo offers an unparalleled coastal living experience with breathtaking ocean views from every room. The open-concept living space features floor-to-ceiling windows and a private balcony perfect for enjoying sunrise coffee or sunset cocktails. The gourmet kitchen includes high-end appliances, quartz countertops, and a breakfast bar. The primary suite offers a king-sized bed, walk-in closet, and an ensuite bathroom with a soaking tub and separate shower. The second bedroom is ideal for guests or can function as a home office. The building provides resort-style amenities including a beachfront pool, hot tub, fitness center, and 24-hour concierge service, making every day feel like a vacation.",
    price: 850000,
    pricePerSqft: 850,
    address: "333 Beach Road, San Diego, CA",
    type: "condo",
    status: "for-sale",
    bedrooms: 2,
    bathrooms: 2,
    area: 1000,
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    featured: true,
    amenities: ["Pool", "Hot Tub", "Beach Access", "Gym", "Concierge"],
    yearBuilt: 2018,
    createdAt: new Date("2023-06-28").toISOString(),
  }
];

const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Simulate fetching property data
    setLoading(true);
    setTimeout(() => {
      const foundProperty = mockProperties.find(p => p.id === id);
      if (foundProperty) {
        setProperty(foundProperty);
      }
      setLoading(false);
    }, 500);
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto py-8 px-4 md:px-6 max-w-7xl">
        <div className="mb-4">
          <Skeleton className="h-8 w-48 mb-2" />
          <Skeleton className="h-6 w-full max-w-2xl" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Skeleton className="h-96 w-full rounded-lg mb-4" />
            <div className="grid grid-cols-3 gap-2">
              <Skeleton className="h-24 w-full rounded-md" />
              <Skeleton className="h-24 w-full rounded-md" />
              <Skeleton className="h-24 w-full rounded-md" />
            </div>
          </div>
          <div>
            <Skeleton className="h-64 w-full rounded-lg mb-4" />
            <Skeleton className="h-10 w-full rounded-md mb-4" />
            <Skeleton className="h-10 w-full rounded-md" />
          </div>
        </div>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="container mx-auto py-8 px-4 md:px-6 text-center">
        <h1 className="text-3xl font-bold mb-4">Property Not Found</h1>
        <p className="mb-8">The property you're looking for doesn't exist or has been removed.</p>
        <Button onClick={() => navigate("/properties")}>
          <ArrowLeftIcon className="mr-2" />
          Back to Properties
        </Button>
      </div>
    );
  }

  const formatPrice = (price: number, isRent = property.status === "for-rent") => {
    return isRent
      ? `$${price.toLocaleString()}/mo`
      : `$${price.toLocaleString()}`;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    toast({
      title: isFavorite ? "Removed from favorites" : "Added to favorites",
      description: isFavorite ? "Property removed from your saved list" : "Property saved to your favorites",
      duration: 3000,
    });
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
    <div className="container mx-auto py-8 px-4 md:px-6 max-w-7xl">
      {/* Breadcrumb */}
      <nav className="flex mb-6 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-primary flex items-center">
          <HomeIcon className="w-4 h-4 mr-1" /> Home
        </Link>
        <span className="mx-2">/</span>
        <Link to="/properties" className="hover:text-primary">
          Properties
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground font-medium truncate max-w-[200px]">
          {property.title}
        </span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left column - Images and details */}
        <div className="lg:col-span-2">
          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <h1 className="text-3xl md:text-4xl font-bold">{property.title}</h1>
              <Button 
                variant="outline" 
                size="icon"
                className={`rounded-full ${isFavorite ? 'text-red-500 hover:text-red-600' : 'text-muted-foreground hover:text-primary'}`}
                onClick={toggleFavorite}
              >
                <HeartIcon className="h-5 w-5" fill={isFavorite ? "currentColor" : "none"} />
              </Button>
            </div>
            <div className="flex items-center mb-2">
              <MapPinIcon className="h-5 w-5 text-muted-foreground mr-1" />
              <span className="text-lg">{property.address}</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[property.status]}`}>
                {statusLabel[property.status]}
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-secondary text-secondary-foreground">
                {property.type.charAt(0).toUpperCase() + property.type.slice(1)}
              </span>
            </div>
          </div>

          {/* Main image */}
          <div className="mb-3 rounded-lg overflow-hidden bg-muted h-[400px]">
            <img 
              src={property.images[0]} 
              alt={property.title} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Image thumbnails */}
          {property.images.length > 1 && (
            <div className="grid grid-cols-4 gap-3 mb-8">
              {property.images.slice(1).map((image, index) => (
                <div key={index} className="relative rounded-md overflow-hidden bg-muted aspect-square">
                  <img 
                    src={image} 
                    alt={`${property.title} view ${index + 2}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Property details */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Property Details</h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
              <div className="bg-card rounded-lg p-4 border">
                <div className="flex flex-col items-center text-center">
                  <BedIcon className="h-6 w-6 text-primary mb-2" />
                  <span className="text-sm text-muted-foreground">Bedrooms</span>
                  <span className="font-bold text-lg">{property.bedrooms}</span>
                </div>
              </div>
              <div className="bg-card rounded-lg p-4 border">
                <div className="flex flex-col items-center text-center">
                  <BathIcon className="h-6 w-6 text-primary mb-2" />
                  <span className="text-sm text-muted-foreground">Bathrooms</span>
                  <span className="font-bold text-lg">{property.bathrooms}</span>
                </div>
              </div>
              <div className="bg-card rounded-lg p-4 border">
                <div className="flex flex-col items-center text-center">
                  <RulerIcon className="h-6 w-6 text-primary mb-2" />
                  <span className="text-sm text-muted-foreground">Area</span>
                  <span className="font-bold text-lg">{property.area} sqft</span>
                </div>
              </div>
              <div className="bg-card rounded-lg p-4 border">
                <div className="flex flex-col items-center text-center">
                  <CalendarIcon className="h-6 w-6 text-primary mb-2" />
                  <span className="text-sm text-muted-foreground">Year Built</span>
                  <span className="font-bold text-lg">{property.yearBuilt}</span>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Description</h3>
              <p className="text-muted-foreground">{property.description}</p>
            </div>
            
            {property.amenities.length > 0 && (
              <div>
                <h3 className="text-xl font-bold mb-2">Amenities</h3>
                <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {property.amenities.map((amenity, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                      {amenity}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Right column - Price and contact */}
        <div className="lg:col-span-1">
          <div className="bg-card rounded-lg border p-6 sticky top-4">
            <div className="mb-4">
              <h2 className="text-3xl font-bold text-primary">{formatPrice(property.price)}</h2>
              <p className="text-muted-foreground">
                ${property.pricePerSqft} per sqft • Listed on {formatDate(property.createdAt)}
              </p>
            </div>
            
            <div className="space-y-4 mb-6">
              <Button className="w-full text-base h-12">
                Schedule Viewing
              </Button>
              <Button variant="outline" className="w-full text-base h-12">
                Request Info
              </Button>
            </div>
            
            <div className="pt-4 border-t">
              <h3 className="font-semibold mb-2">Contact Agent</h3>
              <div className="flex flex-col space-y-3">
                <Button variant="ghost" className="justify-start">
                  <PhoneIcon className="mr-2" /> (555) 123-4567
                </Button>
                <Button variant="ghost" className="justify-start">
                  <MailIcon className="mr-2" /> agent@example.com
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
