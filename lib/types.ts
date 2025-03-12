
export interface PropertyType {
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
}

export type UserRole = "buyer" | "seller" | "renter" | "landlord" | "agent" | "admin";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}
