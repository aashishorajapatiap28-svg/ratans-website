import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "OUR RANGE", href: "/our-range" },
    { name: "RECIPES", href: "/recipes" },
    { name: "FOOD & FESTIVALS", href: "/food-festivals" },
    { name: "ABOUT US", href: "/about-us" },
    { name: "CONTACT US", href: "/contact-us" }
  ];

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-start justify-center flex-col">
            <div className="h-10 w-32 flex items-center justify-center">
              {/* <span className="text-2xl font-bold text-primary-foreground">IG</span> */}
              <img src={logo}/>
            </div>
            <div className="hidden md:block float-start">
              <p className="text-xs text-muted-foreground">Basmati Rice</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              item.href.startsWith('/') ? (
                <Link
                  key={index}
                  to={item.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-300"
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={index}
                  href={item.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-300"
                >
                  {item.name}
                </a>
              )
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border">
            <div className="space-y-2">
              {navItems.map((item, index) => (
                item.href.startsWith('/') ? (
                  <Link
                    key={index}
                    to={item.href}
                    className="block py-2 px-4 text-sm font-medium text-foreground hover:text-primary hover:bg-muted transition-colors duration-300 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={index}
                    href={item.href}
                    className="block py-2 px-4 text-sm font-medium text-foreground hover:text-primary hover:bg-muted transition-colors duration-300 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                )
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;