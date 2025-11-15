import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import heroBanner from "../assets/banner.jpg";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "The No.1 Choice for Pure Premium Basmati Rice",
      subtitle: "Experience the Premium Quality of India Gate",
      description: "From our fields to your family, discover the finest basmati rice that brings authentic Indian flavors to your dining table.",
      image: heroBanner,
      cta: "Explore Our Range"
    },
    {
      title: "Premium Basmati Collection",
      subtitle: "Taste the Heritage of Authentic Indian Rice",
      description: "Each grain tells a story of tradition, quality, and excellence. Choose from our exclusive range of premium basmati rice varieties.",
      image: heroBanner,
      cta: "Shop Premium Range"
    },
    {
      title: "Your Choice Defines Who You Are",
      subtitle: "Discover Your Perfect Rice Match", 
      description: "Take our interactive quiz to find the perfect basmati rice variety that matches your cooking style and taste preferences.",
      image: heroBanner,
      cta: "Take the Quiz"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={slides[currentSlide].image}
          alt="Hero Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {slides[currentSlide].title}
          </h1>
          <h2 className="text-xl md:text-2xl mb-6 text-primary-glow font-medium">
            {slides[currentSlide].subtitle}
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed opacity-90">
            {slides[currentSlide].description}
          </p>
          <Button variant="luxury" size="xl" className="animate-luxury-glow">
            {slides[currentSlide].cta}
          </Button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="hero"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="hero"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? "bg-primary-glow" 
                : "bg-white/40 hover:bg-white/60"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;