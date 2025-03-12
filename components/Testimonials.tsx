
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { StarIcon } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "First-time Homebuyer",
    content:
      "EstateHub made finding my first home incredibly easy. The interface was intuitive, and the mortgage calculator helped me understand exactly what I could afford.",
    avatar: "/placeholder.svg",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Property Investor",
    content:
      "As someone who regularly invests in real estate, I appreciate the detailed market analytics EstateHub provides. It's helped me make informed decisions.",
    avatar: "/placeholder.svg",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Relocated for Work",
    content:
      "When I had to relocate for work, EstateHub connected me with a great agent who understood my needs. I found the perfect place within two weeks!",
    avatar: "/placeholder.svg",
    rating: 4,
  },
  {
    id: 4,
    name: "Robert Smith",
    role: "Sold Home",
    content:
      "Selling my home was much less stressful with EstateHub. The valuation tool was accurate, and the platform attracted serious buyers quickly.",
    avatar: "/placeholder.svg",
    rating: 5,
  },
];

export default function Testimonials() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <section className="container py-16">
      <div className="mb-10 text-center">
        <h2 className="mb-2 text-3xl font-bold tracking-tight">
          What Our Clients Say
        </h2>
        <p className="text-lg text-muted-foreground">
          Trusted by thousands of satisfied customers
        </p>
      </div>

      <Carousel className="mx-auto max-w-5xl">
        <CarouselContent>
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
              <Card className="h-full border-none shadow-sm">
                <CardContent className="p-6">
                  <div className="mb-4 flex">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <StarIcon
                        key={index}
                        className={`h-5 w-5 ${
                          index < testimonial.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "fill-gray-300 text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="mb-6 text-muted-foreground">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <div className="relative mr-4 h-12 w-12 overflow-hidden rounded-full">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center gap-2 mt-8">
          <CarouselPrevious className="relative inset-auto translate-y-0" />
          <CarouselNext className="relative inset-auto translate-y-0" />
        </div>
      </Carousel>
    </section>
  );
}
