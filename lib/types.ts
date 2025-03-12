
export type PropertyStatus = "for-sale" | "for-rent" | "sold" | "pending";

export type PropertyType = "house" | "apartment" | "condo" | "townhouse" | "land";

export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  pricePerSqft: number;
  address: string;
  type: PropertyType;
  status: PropertyStatus;
  bedrooms: number;
  bathrooms: number;
  area: number;
  images: string[];
  featured: boolean;
  amenities: string[];
  yearBuilt: number;
  createdAt: string;
}

export interface Agent {
  id: string;
  name: string;
  email: string;
  phone: string;
  photo: string;
  title: string;
  bio: string;
  listings: number;
  rating: number;
  reviews: number;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  role: string;
  content: string;
  rating: number;
}
