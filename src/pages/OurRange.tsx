import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Award, Leaf } from "lucide-react";
import heroImage from "@/assets/banner.jpg";
import classicImage from "@/assets/classic-basmati.jpg";
import superImage from "@/assets/super-basmati.jpg";
import dubarImage from "@/assets/dubar-basmati.jpg";
import tibarImage from "@/assets/product-biryani.jpg";
import biryaniImage from "@/assets/biryani-special.jpg";

const OurRange = () => {
  const products = [
    {
      name: "Supreme Basmati Rice ",
      description: "Traditional aromatic long grain basmati rice with authentic fragrance and taste. Perfect for everyday cooking and special occasions.",
      image: classicImage,
      features: ["Extra Long Grain", "Aromatic", "Premium Quality"],
      badge: "Premium",
      badgeColor: "bg-blue-500"
    },
    {
      name: "Classic Basmati Rice ",
      description: "Specially selected basmati rice perfect for biryani preparation. Each grain cooks to perfection with excellent texture.",
      image: biryaniImage,
      features: ["Long Grain", "Perfect Texture", "Non-Sticky"],
      badge: "Best Seller",
      badgeColor: "bg-orange-500"
    },
    {
      name: "Royal Basmati Rice ",
      description: "Specially selected basmati rice perfect for biryani preparation. Each grain cooks to perfection with excellent texture.",
      image: tibarImage,
      features: ["Medium Grain", "Perfect Texture", "Non-Sticky"],
      badge: "Best Seller",
      badgeColor: "bg-orange-500"
    },
    {
      name: "Daily Basmati Rice ",
      description: "Premium extra-long grain basmati rice with exceptional aroma and delicate flavor. Ideal for festive meals and grand occasions.",
      image: superImage,
      features: ["Long Grain", "Superior Aroma", "Festive Quality"],
      badge: "Best Seller",
      badgeColor: "bg-yellow-500"
    },
    {
      name: "Special Basmati Rice ",
      description: "Royal quality basmati rice with distinctive taste and texture. A perfect choice for traditional Indian cuisine and royal feasts.",
      image: dubarImage,
      features: ["Medium Grain", "Rich Texture", "Traditional"],
      badge: "Special",
      badgeColor: "bg-purple-500"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <img 
          src={heroImage} 
          alt="Our Premium Rice Range" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-6">OUR RANGE</h1>
            <p className="text-2xl max-w-4xl mx-auto px-4">
              Discover our premium collection of authentic basmati rice varieties, each crafted to perfection
            </p>
          </div>
        </div>
      </section>

      {/* Quality Highlights */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Award className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-muted-foreground">Award-winning basmati rice with authentic aroma and taste</p>
            </div>
            <div className="flex flex-col items-center">
              <Star className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Trusted Brand</h3>
              <p className="text-muted-foreground">Decades of excellence in bringing you the finest rice</p>
            </div>
            <div className="flex flex-col items-center">
              <Leaf className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Natural & Pure</h3>
              <p className="text-muted-foreground">100% natural with no artificial additives or preservatives</p>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Element */}
      <div className="flex justify-center py-12">
        <div className="w-32 h-px bg-gradient-primary"></div>
      </div>

      {/* Products Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-primary">Our Premium Collection</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Each variety is carefully selected and processed to maintain the highest standards of quality and authenticity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <Badge className={`absolute top-4 right-4 ${product.badgeColor} text-white`}>
                  {product.badge}
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-primary">
                  {product.name}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature, featureIndex) => (
                    <span 
                      key={featureIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary">
            Experience the Difference
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our range of premium basmati rice varieties and elevate your culinary experience with authentic flavors and aromas.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurRange;