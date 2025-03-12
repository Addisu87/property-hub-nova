
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, PiggyBank, BarChart, Users } from "lucide-react";

export default function PropertySearchSection() {
  return (
    <section className="container py-16">
      <div className="grid gap-12 md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
            Find Your Dream Property With Confidence
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            EstateHub helps you navigate the real estate market with ease. Whether you're buying, 
            selling, or renting, our platform provides all the tools you need.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <Building2 className="mb-2 h-8 w-8 text-primary" />
                <h3 className="mb-1 font-medium">Extensive Listings</h3>
                <p className="text-sm text-muted-foreground">
                  Access to millions of properties nationwide
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <PiggyBank className="mb-2 h-8 w-8 text-primary" />
                <h3 className="mb-1 font-medium">Financing Options</h3>
                <p className="text-sm text-muted-foreground">
                  Mortgage pre-approval and loan calculators
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <BarChart className="mb-2 h-8 w-8 text-primary" />
                <h3 className="mb-1 font-medium">Market Insights</h3>
                <p className="text-sm text-muted-foreground">
                  Property values and neighborhood analytics
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <Users className="mb-2 h-8 w-8 text-primary" />
                <h3 className="mb-1 font-medium">Expert Agents</h3>
                <p className="text-sm text-muted-foreground">
                  Connect with top real estate professionals
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="relative hidden md:block">
          <div className="absolute -right-6 -top-6 z-10 h-[85%] w-[85%] rounded-lg bg-muted">
            <Image
              src="/placeholder.svg"
              alt="Modern house interior"
              fill
              className="rounded-lg object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 z-0 h-[85%] w-[85%] rounded-lg bg-primary/10">
            <Image
              src="/placeholder.svg"
              alt="Modern apartment exterior"
              fill
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
