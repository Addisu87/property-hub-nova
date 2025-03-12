
import { Card, CardContent } from "@/components/ui/card";
import { Search, Home, Key } from "lucide-react";

const steps = [
  {
    title: "Search Properties",
    description:
      "Browse our extensive catalog of properties. Use filters to narrow down your search based on your preferences.",
    icon: Search,
  },
  {
    title: "Connect With Agents",
    description:
      "Get in touch with our experienced real estate agents who will guide you through the entire process.",
    icon: Home,
  },
  {
    title: "Close The Deal",
    description:
      "Complete the transaction seamlessly with our support. Move into your new home with ease.",
    icon: Key,
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-secondary py-16">
      <div className="container">
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-3xl font-bold tracking-tight">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Our simple three-step process to find your perfect property
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <Card key={index} className="border-none bg-white">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                  <step.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
