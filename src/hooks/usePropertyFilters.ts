
import { useState, useEffect } from "react";
import { Property } from "@/lib/types";
import { FilterValues } from "@/components/PropertyFilters";

export const usePropertyFilters = (properties: Property[]) => {
  const [loading, setLoading] = useState(false);
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(properties);
  
  const [filters, setFilters] = useState<FilterValues>({
    location: "",
    propertyType: "",
    priceRange: [0, 1000000],
    bedrooms: "",
    bathrooms: "",
  });

  const applyFilters = () => {
    setLoading(true);
    
    // Simulate loading delay
    setTimeout(() => {
      const filtered = properties.filter((property) => {
        // Filter by property type
        if (filters.propertyType && property.type !== filters.propertyType) {
          return false;
        }
        
        // Filter by price range
        if (
          property.price < filters.priceRange[0] ||
          property.price > filters.priceRange[1]
        ) {
          return false;
        }
        
        // Filter by bedrooms
        if (
          filters.bedrooms &&
          property.bedrooms < parseInt(filters.bedrooms, 10)
        ) {
          return false;
        }
        
        // Filter by bathrooms
        if (
          filters.bathrooms &&
          property.bathrooms < parseInt(filters.bathrooms, 10)
        ) {
          return false;
        }
        
        // Filter by location (case-insensitive partial match)
        if (
          filters.location &&
          !property.address
            .toLowerCase()
            .includes(filters.location.toLowerCase())
        ) {
          return false;
        }
        
        return true;
      });
      
      setFilteredProperties(filtered);
      setLoading(false);
    }, 500);
  };

  const resetFilters = () => {
    setFilters({
      location: "",
      propertyType: "",
      priceRange: [0, 1000000],
      bedrooms: "",
      bathrooms: "",
    });
    setFilteredProperties(properties);
  };

  // Apply filters when filters change
  useEffect(() => {
    // Don't apply filters on initial load
    if (JSON.stringify(filters) !== JSON.stringify({
      location: "",
      propertyType: "",
      priceRange: [0, 1000000],
      bedrooms: "",
      bathrooms: "",
    })) {
      applyFilters();
    }
  }, [filters, properties]);

  return {
    loading,
    filters,
    filteredProperties,
    setFilters,
    resetFilters,
    applyFilters
  };
};
