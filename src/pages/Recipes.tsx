import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";
import heroImage from "@/assets/recipes-hero.jpg";
import biryaniImage from "@/assets/biryani-recipe.jpg";
import indianImage from "@/assets/indian-recipe.jpg";
import globalImage from "@/assets/global-recipe.jpg";
import healthyImage from "@/assets/healthy-recipe.jpg";

const Recipes = () => {
  const recipeCategories = [
    {
      title: "BIRYANI",
      description: "Aromatic and flavorful biryani recipes with premium basmati rice",
      image: biryaniImage,
      link: "#biryani-recipes"
    },
    {
      title: "INDIAN",
      description: "Traditional Indian rice dishes and authentic regional cuisines",
      image: indianImage,
      link: "#indian-recipes"
    },
    {
      title: "GLOBAL",
      description: "International rice recipes and fusion cuisine inspirations",
      image: globalImage,
      link: "#global-recipes"
    },
    {
      title: "HEALTHY",
      description: "Nutritious and wholesome rice-based recipes for wellness",
      image: healthyImage,
      link: "#healthy-recipes"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <img 
          src={heroImage} 
          alt="Delicious Rice Recipes" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-6">RECIPES</h1>
            <p className="text-2xl max-w-3xl mx-auto px-4">
              Make lip-smacking dishes with our award winning products
            </p>
          </div>
        </div>
      </section>

      {/* Decorative Element */}
      <div className="flex justify-center py-12">
        <div className="w-32 h-px bg-gradient-primary"></div>
      </div>

      {/* Recipe Categories Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {recipeCategories.map((category, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden bg-white">
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Video Play Button Overlay */}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Play className="w-8 h-8 text-primary ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-3 text-primary tracking-wide">
                  {category.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {category.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary">
            Discover Amazing Flavors
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore our collection of tried and tested recipes that bring out the best in every grain of rice
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-6 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Video Tutorials
            </span>
            <span className="px-6 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Step-by-step Guides
            </span>
            <span className="px-6 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Chef Tips
            </span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Recipes;