
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import PropertyFilters from "@/components/PropertyFilters";
import PropertyList from "@/components/PropertyList";
import { usePropertyFilters } from "@/hooks/usePropertyFilters";
import { mockProperties } from "@/data/mockProperties";

const Properties = () => {
  const [loading, setLoading] = useState(false);
  const [properties, setProperties] = useState(mockProperties);
  
  const { 
    filters, 
    filteredProperties, 
    setFilters, 
    resetFilters, 
    applyFilters 
  } = usePropertyFilters(properties);

  const loadMore = () => {
    setLoading(true);
    // Simulate loading more properties
    setTimeout(() => {
      // Only add more properties if there are no filters applied
      const isDefaultFilters = 
        !filters.location && 
        !filters.propertyType && 
        filters.bedrooms === "" && 
        filters.bathrooms === "" &&
        filters.priceRange[0] === 0 && 
        filters.priceRange[1] === 1000000;
      
      if (isDefaultFilters) {
        const newProperties = [...properties, ...mockProperties.slice(0, 3)];
        setProperties(newProperties);
      }
      setLoading(false);
    }, 1000);
  };

  const hasMoreProperties = 
    !loading && 
    filteredProperties.length > 0 && 
    filteredProperties.length % 3 === 0;

  const noResults = filteredProperties.length === 0 && !loading;

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Available Properties</h1>
      
      <PropertyFilters 
        filters={filters}
        onChange={setFilters}
        onReset={resetFilters}
        onSearch={applyFilters}
      />
      
      {noResults ? (
        <div className="text-center py-10">
          <h3 className="text-xl font-semibold mb-2">No properties found</h3>
          <p className="text-muted-foreground mb-6">Try adjusting your filters to find properties.</p>
          <Button onClick={resetFilters}>Reset Filters</Button>
        </div>
      ) : (
        <PropertyList 
          properties={filteredProperties}
          loading={loading}
          onLoadMore={loadMore}
          hasMoreProperties={hasMoreProperties}
        />
      )}
    </div>
  );
};

export default Properties;
