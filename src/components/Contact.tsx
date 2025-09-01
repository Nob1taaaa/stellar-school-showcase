import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Youtube, Send, Users } from "lucide-react";

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
              Connect with us for admissions, inquiries, or to schedule a campus visit.
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="cute-border facility-anim facility-shimmer">
                  <Card className="glass-card border-none interactive-card group">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-14 h-14 bg-gradient-accent rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 smooth-transition">
                          <Icon className="w-7 h-7 text-accent-foreground" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent smooth-transition">{info.title}</h4>
                          <div className="text-muted-foreground">
                            <p className="font-medium">{info.details[0]}</p>
                            {info.details.length > 1 && (
                              <p className="text-sm">{info.details[1]}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}

              {/* Social Media */}
              <div className="cute-border facility-shimmer">
                <div className="glass-card border-none p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-4">Follow Us</h4>
                  <div className="flex justify-center space-x-3">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <Button
                          key={index}
                          variant="outline"
                          size="icon"
                          className="hover:shadow-glow smooth-transition w-12 h-12 rounded-xl"
                        >
                          <Icon className={`w-5 h-5 ${social.color}`} />
                        </Button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
        <div className="cute-border facility-shimmer">
          <div className="glass-card rounded-2xl p-8 border-none">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Send className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Get in Touch</h3>
            </div>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input placeholder="First Name *" className="rounded-xl" />
                <Input placeholder="Last Name *" className="rounded-xl" />
              </div>
              <Input type="email" placeholder="Email Address *" className="rounded-xl" />
              <Input placeholder="Phone Number" className="rounded-xl" />
              <Input placeholder="Subject *" className="rounded-xl" />
              <Textarea 
                placeholder="Your message..."
                className="min-h-[100px] rounded-xl"
              />
              <Button variant="hero" size="lg" className="w-full rounded-xl">
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
          </div>

          {/* Map Section */}
          <div className="cute-border facility-shimmer">
            <div className="glass-card rounded-2xl p-8 border-none">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Visit Our Campus</h3>
                <p className="text-muted-foreground">Gyandeep Public School, Varanasi</p>
              </div>
              <div className="bg-gradient-subtle rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.7234567890123!2d83.0123456789!3d25.3123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sGyandeep%20Public%20School%2C%20Dharsauna%2C%20Cholapur%2C%20Varanasi!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Gyandeep Public School Location"
                ></iframe>
              </div>
              <div className="mt-4 text-center">
                <Button 
                  variant="outline" 
                  className="rounded-xl hover:shadow-glow smooth-transition"
                  onClick={() => window.open('https://maps.google.com/?q=Gyandeep+Public+School+Dharsauna+Cholapur+Varanasi', '_blank')}
                >
                  <MapPin className="w-4 h-4 mr-2" />
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
