import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/food-festivals-hero.jpg";
import durgaPujaImage from "@/assets/durga-puja.jpg";
import onamImage from "@/assets/onam-festival.jpg";
import ganeshImage from "@/assets/ganesh-festival.jpg";

const FoodAndFestivals = () => {
  const festivals = [
    {
      title: "Durga Pooja- Reverence of the 'shakti' within",
      description: "In Kumartuli (the potter colony in Northern Calcutta) potters are frantically giving the right profile to the...",
      image: durgaPujaImage,
      link: "#"
    },
    {
      title: "Onam-It's all about the experience",
      description: "Kerala is a state where beauty rules and serenity stays not only in the heart of the...",
      image: onamImage,
      link: "#"
    },
    {
      title: "Lord Ganesha – The God with a sweet tooth",
      description: "One God who never compromises on good food and never gives up on his love for sweets...",
      image: ganeshImage,
      link: "#"
    },
    {
      title: "The Chhath Puja – Celebrate while the sun shines",
      description: "Chhath Puja is a primeval festival that continues to be celebrated with traditional fervour and simplicity. Chhath...",
      image: durgaPujaImage,
      link: "#"
    },
    {
      title: "Diwali – Let there be light everywhere",
      description: "When beauty surrounds you and the light commands you; When aromas cherish the soul and happiness define...",
      image: onamImage,
      link: "#"
    },
    {
      title: "Makar Sakranti and the Khichdi Affair",
      description: "Not all festivals are about scale and magnificence, some are about depth and significance. Makar Sakranti falls...",
      image: ganeshImage,
      link: "#"
    },
    {
      title: "What's cooking on Gudi Padwa? – The Goody Times",
      description: "Gudi Padwa is celebrated in the western part of India and comes from two words with 'Gudi'...",
      image: durgaPujaImage,
      link: "#"
    },
    {
      title: "The once-a-year fast and feast – Karwa Chauth",
      description: "Widely celebrated in the northern part of India mainly Punjab, Haryana, Uttar Pradesh, Rajasthan and Himachal Pradesh...",
      image: onamImage,
      link: "#"
    },
    {
      title: "Rakshabandhan – The best food combo you could have asked for",
      description: "From the smells of delicious cuisines to the aartis and door seva, everything is perfect for the...",
      image: ganeshImage,
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <img 
          src={heroImage} 
          alt="Indian Food and Festivals" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">FOOD & FESTIVAL</h1>
            <p className="text-xl max-w-4xl mx-auto px-4">
              Celebrations are intrinsic to Indian way of life. Explore India's diverse culture and cuisine in this section and find out the stories behind what we eat
            </p>
          </div>
        </div>
      </section>

      {/* Decorative Element */}
      <div className="flex justify-center py-8">
        <div className="w-32 h-px bg-gradient-primary"></div>
      </div>

      {/* Festivals Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {festivals.map((festival, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={festival.image} 
                  alt={festival.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary group-hover:text-primary/80 transition-colors">
                  {festival.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {festival.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FoodAndFestivals;