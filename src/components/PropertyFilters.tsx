
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { PropertyType } from "@/lib/types";

export interface FilterValues {
  location: string;
  propertyType: PropertyType | "";
  priceRange: number[];
  bedrooms: string;
  bathrooms: string;
}

interface PropertyFiltersProps {
  filters: FilterValues;
  onChange: (filters: FilterValues) => void;
  onReset: () => void;
  onSearch: () => void;
}

const PropertyFilters = ({
  filters,
  onChange,
  onReset,
  onSearch,
}: PropertyFiltersProps) => {
  const updateFilter = (key: keyof FilterValues, value: any) => {
    onChange({
      ...filters,
      [key]: value,
    });
  };

  return (
    <div className="bg-card border rounded-lg p-6 mb-8 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            placeholder="City, zip code, or address"
            value={filters.location}
            onChange={(e) => updateFilter("location", e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="property-type">Property Type</Label>
          <Select 
            value={filters.propertyType} 
            onValueChange={(value) => updateFilter("propertyType", value)}
          >
            <SelectTrigger id="property-type">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">Any</SelectItem>
              <SelectItem value="house">House</SelectItem>
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="condo">Condo</SelectItem>
              <SelectItem value="townhouse">Townhouse</SelectItem>
              <SelectItem value="land">Land</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Price Range</Label>
          <div className="pt-6">
            <Slider
              defaultValue={filters.priceRange}
              max={2000000}
              step={10000}
              value={filters.priceRange}
              onValueChange={(value) => updateFilter("priceRange", value)}
            />
          </div>
          <div className="flex justify-between text-sm text-muted-foreground mt-1">
            <span>${filters.priceRange[0].toLocaleString()}</span>
            <span>${filters.priceRange[1].toLocaleString()}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="bedrooms">Beds</Label>
            <Select 
              value={filters.bedrooms} 
              onValueChange={(value) => updateFilter("bedrooms", value)}
            >
              <SelectTrigger id="bedrooms">
                <SelectValue placeholder="Any" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Any</SelectItem>
                <SelectItem value="1">1+</SelectItem>
                <SelectItem value="2">2+</SelectItem>
                <SelectItem value="3">3+</SelectItem>
                <SelectItem value="4">4+</SelectItem>
                <SelectItem value="5">5+</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="bathrooms">Baths</Label>
            <Select 
              value={filters.bathrooms} 
              onValueChange={(value) => updateFilter("bathrooms", value)}
            >
              <SelectTrigger id="bathrooms">
                <SelectValue placeholder="Any" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Any</SelectItem>
                <SelectItem value="1">1+</SelectItem>
                <SelectItem value="2">2+</SelectItem>
                <SelectItem value="3">3+</SelectItem>
                <SelectItem value="4">4+</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mt-6">
        <Button onClick={onSearch} className="flex-1">Search Properties</Button>
        <Button variant="outline" onClick={onReset}>Reset Filters</Button>
      </div>
    </div>
  );
};

export default PropertyFilters;
