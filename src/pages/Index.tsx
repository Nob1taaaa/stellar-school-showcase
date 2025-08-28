import GyandeepNavigation from "@/components/GyandeepNavigation";
import GyandeepHero from "@/components/GyandeepHero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, Users, Award, Star, ArrowRight, 
  GraduationCap, Clock, Target, Heart, Trophy,
  Building, TreePine, Monitor, Palette
} from "lucide-react";

const Index = () => {
  const keyFeatures = [
    {
      icon: GraduationCap,
      title: "Quality Education",
      description: "CBSE affiliated school with modern teaching methods and comprehensive curriculum from Nursery to Class 10."
    },
    {
      icon: Users,
      title: "Experienced Faculty",
      description: "Qualified and dedicated teachers committed to providing personalized attention to each student."
    },
    {
      icon: Monitor,
      title: "Smart Learning",
      description: "Educom smart classes with 3D images, animations, and interactive digital content for effective learning."
    }
  ];

  const facilities = [
    { icon: TreePine, title: "2 Acres Campus", count: "Green Environment" },
    { icon: Building, title: "Smart Classes", count: "Modern Technology" },
    { icon: Palette, title: "30+ Activities", count: "Holistic Development" },
    { icon: Trophy, title: "25+ Years", count: "Educational Excellence" }
  ];

  const quickStats = [
    { number: "1500+", label: "Happy Students", icon: Users },
    { number: "25+", label: "Years of Excellence", icon: Award },
    { number: "98%", label: "Success Rate", icon: Target },
    { number: "N-10", label: "Classes Offered", icon: BookOpen }
  ];

  return (
    <div className="min-h-screen">
      <GyandeepNavigation />
      <GyandeepHero />
      
      {/* Key Features Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <Badge variant="outline" className="mb-4 border-blue-primary text-blue-primary">Why Choose Gyandeep</Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Excellence in Every <span className="text-blue-primary">Aspect</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Discover what makes Gyandeep Public School the preferred choice for quality education in Varanasi.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {keyFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="shadow-card border-none interactive-card group animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-blue-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 smooth-transition">
                        <Icon className="w-8 h-8 text-blue-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-blue-primary smooth-transition">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {quickStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center p-6 bg-gradient-hero rounded-2xl text-white animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                    <Icon className="w-8 h-8 mx-auto mb-3 opacity-80" />
                    <div className="text-2xl lg:text-3xl font-bold mb-1">{stat.number}</div>
                    <div className="text-sm opacity-90">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-hero">
                <Badge variant="outline" className="mb-6 border-blue-primary text-blue-primary">About Gyandeep</Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  "Etiquette Before <span className="text-blue-primary">Education</span>"
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Founded in 2003 by Mr. Manoj Kumar Jaiswal, Gyandeep Public School has been 
                  providing quality education with a focus on character building and moral values. 
                  Located on a sprawling 2-acre green campus in Dharsauna, Cholapur, Varanasi.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="text-center p-4 bg-blue-primary/10 rounded-xl">
                    <div className="text-2xl font-bold text-blue-primary mb-1">2003</div>
                    <div className="text-sm text-muted-foreground">Established</div>
                  </div>
                  <div className="text-center p-4 bg-accent/10 rounded-xl">
                    <div className="text-2xl font-bold text-accent mb-1">CBSE</div>
                    <div className="text-sm text-muted-foreground">Affiliated</div>
                  </div>
                </div>

                <Button className="bg-blue-primary hover:bg-blue-deep text-white px-8 py-6 text-lg rounded-2xl">
                  Learn More About Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>

              <div className="space-y-6">
                {facilities.map((facility, index) => {
                  const Icon = facility.icon;
                  return (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold">{facility.title}</h3>
                          <p className="text-white/80">{facility.count}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to Join Our <span className="text-blue-primary">School Family</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Give your child the best foundation for future success with our comprehensive 
              education program and nurturing environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-primary hover:bg-blue-deep text-white px-8 py-6 text-lg rounded-2xl shadow-button">
                <BookOpen className="mr-2 w-5 h-5" />
                Apply for Admission
              </Button>
              <Button variant="outline" size="lg" className="button-gradient text-white border-0 px-8 py-6 text-lg rounded-2xl shadow-button">
                <Clock className="mr-2 w-5 h-5" />
                Schedule Campus Visit
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;