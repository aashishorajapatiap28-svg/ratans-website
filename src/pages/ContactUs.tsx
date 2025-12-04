import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, MessageSquare, Users } from "lucide-react";

const ContactUs = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Head Office",
      details: [
        "P-228, Priyanka Nagar, Bhopal – 462042 ,Madhya Pradesh,India",
      ]
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        "+91 92019-22840",
      ]
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: [
        "customercare@ratansfoods.com",
      ]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 2:00 PM",
        "Sunday: Closed"
      ]
    }
  ];

  const offices = [
    {
      city: "Mumbai",
      address: "1st Floor, A Wing, Times Square, Andheri-Kurla Road, Andheri (E), Mumbai - 400059",
      phone: "+91-22-6799-3300"
    },
    {
      city: "Chennai",
      address: "No. 24, Venkatesa Agraharam Street, Mylapore, Chennai - 600004",
      phone: "+91-44-2499-4567"
    },
    {
      city: "Kolkata",
      address: "P-36, Taratola Road, Kolkata - 700088",
      phone: "+91-33-2416-5678"
    },
    {
      city: "Bangalore",
      address: "No. 45, Richmond Road, Bangalore - 560025",
      phone: "+91-80-4112-8900"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-8">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              We'd love to hear from you. Get in touch with us for any queries, feedback, 
              or partnership opportunities.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-primary mb-12">Get In Touch</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-0 shadow-card hover:shadow-luxury transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <info.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">{info.title}</h3>
                    <div className="space-y-1">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground text-sm">{detail}</p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form and Map */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="border-0 shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <MessageSquare className="w-6 h-6 text-primary" />
                    Send us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Your first name" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Your last name" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" placeholder="+91 98765 43210" />
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="What is this regarding?" />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Please describe your query in detail..."
                      className="min-h-[120px]"
                    />
                  </div>
                  <Button className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300">
                    Send Message
                  </Button>
                </CardContent>
              </Card>

              {/* Company Info */}
              <div className="space-y-8">
                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center gap-2">
                      <Users className="w-6 h-6 text-primary" />
                      Customer Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Our dedicated customer support team is here to help you with any questions 
                      about our products, orders, or services. We strive to respond to all inquiries 
                      within 24 hours.
                    </p>
                    <div className="space-y-2">
                      <p><span className="font-semibold">Customer Care:</span>+91 9201922840</p>
                      <p><span className="font-semibold">Email:</span> customercare@ratansfoods.com</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <CardTitle className="text-xl">Business Inquiries</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      For partnership opportunities, bulk orders, or distribution inquiries, 
                      please reach out to our business development team.
                    </p>
                    <div className="space-y-2">
                      <p><span className="font-semibold">Sales:</span> customercare@ratansfoods.com</p>
                      <p><span className="font-semibold">Partnerships:</span> customercare@ratansfoods.com</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-primary mb-12">Our Regional Offices</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {offices.map((office, index) => (
                <Card key={index} className="border-0 shadow-card hover:shadow-luxury transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary mb-3">{office.city}</h3>
                    <div className="space-y-2">
                      <p className="text-muted-foreground flex items-start gap-2">
                        <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                        {office.address}
                      </p>
                      <p className="text-muted-foreground flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        {office.phone}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

     
        <section className="py-16 bg-gradient-luxury text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Connect?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              We're here to help and answer any questions you might have. 
              We look forward to hearing from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Call Us Now
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Email Us
              </Button>
            </div>
          </div>
        </section> */}
        
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;