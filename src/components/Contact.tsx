import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Youtube, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "School Address",
      details: [
        "Gyandeep Public School",
        "Dharsauna, Cholapur",
        "Varanasi - 221101",
        "Uttar Pradesh, India"
      ]
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        "Helpline: 0542-2612080",
        "Mobile: 7309433152",
        "Mobile: 9839173720"
      ]
    },
    {
      icon: Mail,
      title: "Email Address",
      details: [
        "info@gyandeeppublicschool.org",
        "admissions@gyandeeppublicschool.org",
        "principal@gyandeeppublicschool.org"
      ]
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "Monday - Friday: 8:00 AM - 4:00 PM",
        "Saturday: 8:00 AM - 2:00 PM",
        "Sunday: Closed"
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, name: "Facebook", color: "text-blue-600" },
    { icon: Twitter, name: "Twitter", color: "text-blue-400" },
    { icon: Instagram, name: "Instagram", color: "text-pink-600" },
    { icon: Youtube, name: "YouTube", color: "text-red-600" }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 text-lg px-6 py-2">Get in Touch</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Contact <span className="text-gradient">Gyandeep</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're here to help and answer any questions you might have. 
              We look forward to hearing from you and welcoming you to our school family.
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            {/* Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                const borders = [
                  "1px solid rgba(31, 82, 185, 1)",
                  "1px solid rgba(36, 9, 245, 0.38)",
                  "1px solid rgba(165, 33, 51, 1)",
                  "1px solid rgba(72, 120, 209, 1)",
                ];
                return (
                  <Card key={index} className="glass-card border-none hover:shadow-elegant smooth-transition">
                    <CardContent className="p-6" style={{ border: borders[index % borders.length] }}>
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-hero rounded-2xl flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-foreground mb-2">{info.title}</h4>
                          <div className="space-y-1">
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="text-muted-foreground">{detail}</p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}

              {/* Social Media */}
              <div>
                <h4 className="text-xl font-bold text-foreground mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <Button
                        key={index}
                        variant="outline"
                        size="icon"
                        className="hover:shadow-glow smooth-transition"
                      >
                        <Icon className={`w-5 h-5 ${social.color}`} />
                      </Button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card rounded-2xl p-8" style={{ border: "1px solid rgba(245, 11, 109, 0.3)" }}>
              <h3 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name *
                    </label>
                    <Input placeholder="Enter your first name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name *
                    </label>
                    <Input placeholder="Enter your last name" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input type="email" placeholder="Enter your email address" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input placeholder="Enter your phone number" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <Input placeholder="What is this regarding?" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea 
                    placeholder="Please tell us how we can help you..."
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button variant="hero" size="lg" className="w-full">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Visit Our Campus</h3>
            <div className="bg-muted rounded-xl h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-accent mx-auto mb-4" />
                <h4 className="text-xl font-bold text-foreground mb-2">Interactive Map</h4>
                <p className="text-muted-foreground">
                  Dharsauna, Cholapur, Varanasi - 221101
                </p>
                <Button variant="outline" className="mt-4">
                  Open in Google Maps
                </Button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-16 pt-8 border-t border-border">
            <p className="text-muted-foreground">
              © Copyright 2024 Gyandeep Public School, Cholapur, Varanasi | 
              All Rights Reserved | Powered by Advanced Web Technologies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
