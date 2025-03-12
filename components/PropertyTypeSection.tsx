
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Home, 
  Building2, 
  Trees, 
  Building 
} from "lucide-react";

const propertyTypes = [
  {
    name: "Houses",
    description: "Single-family homes with private land",
    icon: Home,
    href: "/properties/buy?type=house",
  },
  {
    name: "Apartments",
    description: "Multi-unit residential buildings",
    icon: Building2,
    href: "/properties/buy?type=apartment",
  },
  {
    name: "Land",
    description: "Vacant lots ready for development",
    icon: Trees,
    href: "/properties/buy?type=land",
  },
  {
    name: "Commercial",
    description: "Office spaces and retail properties",
    icon: Building,
    href: "/properties/buy?type=commercial",
  },
];

export default function PropertyTypeSection() {
  return (
    <section className="container py-16">
      <div className="mb-10 text-center">
        <h2 className="mb-2 text-3xl font-bold tracking-tight">
          Explore Property Types
        </h2>
        <p className="text-lg text-muted-foreground">
          Find the perfect property that fits your needs
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
        {propertyTypes.map((type) => (
          <Link href={type.href} key={type.name}>
            <Card className="h-full transition-all hover:shadow-md">
              <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-3">
                  <type.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{type.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {type.description}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
