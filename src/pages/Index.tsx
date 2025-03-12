
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="text-center p-6">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Real Estate Platform</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">Discover your dream home today!</p>
        <Button asChild size="lg">
          <Link href="/properties">Browse Properties</Link>
        </Button>
      </div>
    </div>
  );
};

export default Index;
