import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

// Import product images
import productClassic from "@/assets/biryani-special.jpg";
import productBiryani from "@/assets/classic-basmati.jpg";
import productSuper from "@/assets/dubar-basmati.jpg";
import productDubar from "@/assets/product-biryani.jpg";
import productTibar from "@/assets/super-basmati.jpg";

const ProductGrid = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Perfectionist", "Quality Seeker", "Taste Champion"];

  const products = [
    {
      id: 3,
      name: "Supreme Basmati Rice ",
      category: "Taste Champion",
      image: productBiryani,
      description: "Specially curated for perfect biryani with extra-long grains.",
      features: ["Extra Long Grain", "Biryani Special", "Rich Flavor"],
    },
    {
      id: 2,
      name: "Classic Basmati Rice ",
      category: "Quality Seeker",
      image: productClassic,
      description: "Premium quality basmati rice with authentic taste and aroma.",
      features: ["Long Grain", "Rich Aroma", "Fluffy Texture"],
    },
    {
      id: 5,
      name: "Royal Basmati Rice ",
      category: "Quality Seeker",
      image: productDubar,
      description: "Royal quality basmati rice with exceptional grain length.",
      features: ["Medium Grain", "Long Grain", "Premium Taste"],
    },
    {
      id: 4,
      name: "Special Basmati Rice ",
      category: "Perfectionist",
      image: productSuper,
      description: "The ultimate choice for rice connoisseurs seeking perfection.",
      features: ["Medium Grain", "Aged Rice", "Superior Quality"],
    },
    {
      id: 6,
      name: " Daily Basmati Rice ",
      category: "Perfectionist",
      image: productTibar,
      description: "Three times sorted premium basmati rice for discerning palates.",
      features: ["Short Grain", "Premium Grade", "Consistent Quality"],
    },
  ];

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section className="py-16 bg-gradient-subtle" id="our-range">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Basmati Rice
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our premium collection of basmati rice varieties, each crafted to perfection for different cooking needs and taste preferences.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "luxury" : "elegant"}
              onClick={() => setActiveCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-luxury transition-all duration-500 hover:scale-105 overflow-hidden bg-card border-border"
            >
              <div className="relative">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <Badge className={`absolute top-4 right-4 text-white`}>
                  {product.category}
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {product.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.map((feature, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>

              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;