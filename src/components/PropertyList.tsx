
import { Property } from "@/lib/types";
import PropertyCard from "@/components/PropertyCard";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

interface PropertyListProps {
  properties: Property[];
  loading: boolean;
  onLoadMore: () => void;
  allPropertiesLoaded: boolean;
}

const PropertyList = ({ 
  properties, 
  loading, 
  onLoadMore, 
  allPropertiesLoaded 
}: PropertyListProps) => {
  if (properties.length === 0 && !loading) {
    return (
      <div className="text-center py-10">
        <h3 className="text-xl font-semibold mb-2">No properties found</h3>
        <p className="text-muted-foreground mb-6">Try adjusting your filters to find properties.</p>
      </div>
    );
  }

  return (
    <>
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
          onClick={onLoadMore}
          variant="outline"
          size="lg"
          disabled={loading || allPropertiesLoaded}
        >
          {loading ? "Loading..." : "Load More Properties"}
        </Button>
      </div>
    </>
  );
};

export default PropertyList;
