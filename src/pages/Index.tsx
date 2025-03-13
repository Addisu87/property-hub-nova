
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building, Search, Home, Key } from "lucide-react";

const Index = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-gray-50 dark:bg-gray-900 py-20 md:py-32">
        <div className="container mx-auto px-4 text-center md:text-left md:max-w-screen-xl">
          <div className="md:w-3/5">
            <h1 className="text-4xl font-bold mb-4 md:text-5xl lg:text-6xl">Find Your Perfect Property</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 md:pr-12">
              Discover thousands of properties for sale and rent across the country with our easy-to-use platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg">
                <Link to="/properties">
                  <Search className="mr-2 h-5 w-5" />
                  Browse Properties
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link to="/contact">Contact an Agent</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* How it works section */}
      <div className="py-16 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-primary/10 dark:bg-primary/5 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Search Properties</h3>
              <p className="text-muted-foreground">
                Browse our extensive collection of properties with advanced filters.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-primary/10 dark:bg-primary/5 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Tour Homes</h3>
              <p className="text-muted-foreground">
                Schedule viewings of your favorite properties at your convenience.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-primary/10 dark:bg-primary/5 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Key className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Close the Deal</h3>
              <p className="text-muted-foreground">
                Get expert guidance through the entire buying or renting process.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Properties CTA */}
      <div className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Discover Our Featured Properties</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Explore our handpicked selection of premium properties in top locations
          </p>
          <Button asChild size="lg">
            <Link to="/properties">
              <Building className="mr-2 h-5 w-5" />
              View All Properties
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Index;
