
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Building, Facebook, Twitter, Instagram, Linkedin, Mail, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-secondary dark:bg-secondary/40 mt-auto">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2 font-bold text-xl mb-4">
              <Building className="h-6 w-6" />
              <span>EstateHub</span>
            </Link>
            <p className="text-muted-foreground mb-4 text-sm">
              Finding your perfect property is our mission. Connect with us to
              start your real estate journey.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Twitter">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-muted-foreground hover:text-foreground">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/press" className="text-muted-foreground hover:text-foreground">
                  Press
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/guides" className="text-muted-foreground hover:text-foreground">
                  Buying Guides
                </Link>
              </li>
              <li>
                <Link to="/market" className="text-muted-foreground hover:text-foreground">
                  Market Insights
                </Link>
              </li>
              <li>
                <Link to="/help" className="text-muted-foreground hover:text-foreground">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">Subscribe</h4>
            <p className="text-muted-foreground mb-4 text-sm">
              Join our newsletter to stay up to date on features and releases.
            </p>
            <div className="flex space-x-2">
              <Input placeholder="Enter your email" className="max-w-[220px]" />
              <Button>
                <Send className="h-4 w-4 mr-2" />
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              By subscribing you agree to with our Privacy Policy.
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} EstateHub. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link to="/terms" className="hover:underline">
                Terms
              </Link>
              <Link to="/privacy" className="hover:underline">
                Privacy
              </Link>
              <Link to="/cookies" className="hover:underline">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
