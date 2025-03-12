
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="w-full bg-secondary py-12">
      <div className="container grid grid-cols-1 gap-10 md:grid-cols-4">
        <div className="flex flex-col">
          <h3 className="text-xl font-bold mb-4">EstateHub</h3>
          <p className="text-muted-foreground mb-4">
            Finding your perfect property is our mission. Connect with us to
            start your real estate journey.
          </p>
          <div className="flex space-x-4">
            <Link href="#" aria-label="Facebook">
              <Button variant="ghost" size="icon">
                FB
              </Button>
            </Link>
            <Link href="#" aria-label="Twitter">
              <Button variant="ghost" size="icon">
                TW
              </Button>
            </Link>
            <Link href="#" aria-label="Instagram">
              <Button variant="ghost" size="icon">
                IG
              </Button>
            </Link>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="text-muted-foreground hover:text-foreground">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/careers" className="text-muted-foreground hover:text-foreground">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/press" className="text-muted-foreground hover:text-foreground">
                Press
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Resources</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/guides" className="text-muted-foreground hover:text-foreground">
                Buying Guides
              </Link>
            </li>
            <li>
              <Link href="/market" className="text-muted-foreground hover:text-foreground">
                Market Insights
              </Link>
            </li>
            <li>
              <Link href="/help" className="text-muted-foreground hover:text-foreground">
                Help Center
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Subscribe</h4>
          <p className="text-muted-foreground mb-4">
            Join our newsletter to stay up to date on features and releases.
          </p>
          <div className="flex space-x-2">
            <Input placeholder="Enter your email" className="max-w-[220px]" />
            <Button>Subscribe</Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            By subscribing you agree to with our Privacy Policy.
          </p>
        </div>
      </div>

      <div className="container mt-10 pt-6 border-t">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} EstateHub. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link href="/terms" className="hover:underline">
              Terms
            </Link>
            <Link href="/privacy" className="hover:underline">
              Privacy
            </Link>
            <Link href="/cookies" className="hover:underline">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
