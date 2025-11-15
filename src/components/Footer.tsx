import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import logo from "../assets/logo-white.png"
const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-start flex-col justify-center">
            <div className="h-10 w-32 flex items-center justify-center">
              <img src={logo}/>
            </div>
            <div className="hidden md:block float-start">
              <p className="text-xs text-slate-200">Basmati Rice</p>
            </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Pure Premium Basmati Rice, from our fields to your family with authentic Indian heritage.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-primary/20">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/20">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/20">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/20">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {['Our Range', 'Recipes', 'Food & Festivals', 'About Us', 'Contact Us'].map((link) => (
                <li key={link}>
                  <a 
                    href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Product Categories</h4>
            <ul className="space-y-2">
              {['Perfectionist Range', 'Quality Seeker Range', 'Taste Champion Range', 'Smart Shopper Range', 'Organic Rice', 'Ready to Cook'].map((category) => (
                <li key={category}>
                  <a 
                    href="#our-range"
                    className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors duration-300"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Stay Connected</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm">+91 92019-22840</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm">customercare@ratansfoods.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm">P-228, Priyanka Nagar, Bhopal – 462042 ,Madhya Pradesh, India</span>
              </div>
            </div>
            
            
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm opacity-80">
              © 2025 Ratan's Basmati rice. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#privacy" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Privacy Policy
              </a>
              <a href="#terms" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Terms of Service
              </a>
              <a href="#cookies" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;