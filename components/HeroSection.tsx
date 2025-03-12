
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState("buy");

  return (
    <div className="relative">
      {/* Hero background image */}
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full bg-gradient-to-r from-blue-600 to-indigo-700 opacity-90"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 flex flex-col items-center justify-center pt-12 pb-24 text-center md:min-h-[500px] md:pt-16 md:pb-32">
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
          Find Your Perfect Property
        </h1>
        <p className="mt-4 max-w-xl text-lg text-white/80 md:text-xl">
          Connecting you with over a million homes, apartments, and properties
          across the country.
        </p>

        {/* Property search tabs */}
        <div className="mt-10 w-full max-w-3xl">
          <Tabs defaultValue="buy" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="buy">Buy</TabsTrigger>
              <TabsTrigger value="rent">Rent</TabsTrigger>
              <TabsTrigger value="sell">Sell</TabsTrigger>
            </TabsList>

            <div className="bg-white rounded-lg shadow-lg p-4">
              <div className="flex flex-wrap gap-2 md:flex-nowrap">
                <Input 
                  className="flex-grow" 
                  placeholder={`Enter a location to ${activeTab === "sell" ? "get home value" : "search properties"}`}
                />
                <Button className="gap-2">
                  <Search className="h-4 w-4" />
                  {activeTab === "buy" && "Find Homes"}
                  {activeTab === "rent" && "Find Rentals"}
                  {activeTab === "sell" && "Get Estimate"}
                </Button>
              </div>
            </div>
          </Tabs>
        </div>

        {/* Stats */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-white">
          <div>
            <p className="text-3xl font-bold">1M+</p>
            <p className="text-white/70">Properties</p>
          </div>
          <div>
            <p className="text-3xl font-bold">50K+</p>
            <p className="text-white/70">Satisfied Customers</p>
          </div>
          <div>
            <p className="text-3xl font-bold">60+</p>
            <p className="text-white/70">Cities Covered</p>
          </div>
        </div>
      </div>
    </div>
  );
}
