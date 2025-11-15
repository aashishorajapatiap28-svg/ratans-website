import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Globe, Heart } from "lucide-react";
import aboutusimage from "../assets/about-us.png"

const AboutUs = () => {
  const values = [
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We maintain the highest standards in rice quality, sourcing only the finest grains for our customers."
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Our customers are at the heart of everything we do, driving us to continuously improve and innovate."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "From local markets to international destinations, we bring authentic Indian rice worldwide."
    },
    {
      icon: Heart,
      title: "Tradition & Heritage",
      description: "We honor the rich tradition of Indian rice cultivation while embracing modern quality standards."
    }
  ];

  const milestones = [
    { year: "1976", event: "Founded KRBL Limited with a vision to bring premium rice to every table" },
    { year: "1990", event: "Launched India Gate brand, becoming a household name across India" },
    { year: "2000", event: "Expanded internationally, bringing authentic Basmati rice to global markets" },
    { year: "2010", event: "Achieved leadership position in premium Basmati rice segment" },
    { year: "2020", event: "Continued innovation with new product lines and sustainable practices" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-8">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">About Ratan's Basmati Rice</h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              For over four decades, we have been committed to bringing you the finest quality Basmati rice, 
              preserving tradition while embracing innovation to serve families worldwide.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-primary mb-6">Our Story</h2>
                <div className="space-y-4 text-lg leading-relaxed">
                  <p>
                    Ratan’s Basmati Rice began with a vision to bring the pure, premium taste of authentic Indian Basmati to every family. Founded in 2025 by Aashish Prajapati, Ratan’s Foods started its journey with a simple dream: to deliver rice that reflects the tradition, richness, and pride of India’s culinary heritage.
Though new in the industry, Ratan’s stands firm on its commitment to quality, purity, and customer satisfaction. Every grain is carefully chosen to ensure the finest taste and aroma reach your table.
Today, Ratan’s Foods represents more than just rice — it is a promise of authenticity, excellence, and trust, built on the vision of its founder, Aashish Prajapati.
                  </p>
                 
                </div>
              </div>
              <div className="bg-gradient-subtle rounded-2xl p-8">
                <img 
                  src={aboutusimage} 
                  alt="India Gate rice fields"
                  className="w-full h-80 object-cover rounded-xl shadow-card"
                />
                <h3 className="text-lg text-center mt-2 font-semibold mb-2">Managing Director : Aashish Prajapati</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-primary mb-12">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="border-0 shadow-card hover:shadow-luxury transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <value.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        {/* <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-primary mb-12">Our Journey</h2>
            <div className="max-w-4xl mx-auto">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start mb-8 last:mb-0">
                  <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center font-bold text-sm mr-6 flex-shrink-0">
                    {milestone.year}
                  </div>
                  <div className="pt-3">
                    <p className="text-lg leading-relaxed">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Mission & Vision */}
        <section className="py-16 bg-gradient-luxury text-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-white">Our Mission</h3>
                  <p className="text-white/90 leading-relaxed">
                    To provide the highest quality Basmati rice and food products while preserving 
                    the authentic taste and nutritional value that our customers trust and love. 
                    We are committed to sustainable farming practices and supporting our farming communities.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-white">Our Vision</h3>
                  <p className="text-white/90 leading-relaxed">
                    To be the world's most trusted and preferred brand for premium rice and food products, 
                    bringing families together through the joy of authentic, nutritious meals while 
                    contributing to a sustainable future.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;