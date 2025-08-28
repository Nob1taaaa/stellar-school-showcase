import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Award, BookOpen } from "lucide-react";

const GyandeepHero = () => {
  return (
    <section className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full"></div>
        <div className="absolute top-40 right-20 w-20 h-20 bg-orange-vibrant/20 rounded-lg rotate-12"></div>
        <div className="absolute bottom-40 left-20 w-16 h-16 bg-emerald-vibrant/30 rounded-full shadow-emerald"></div>
        <div className="absolute bottom-20 right-40 w-24 h-24 bg-white/10 rounded-lg rotate-45"></div>
      </div>

      <div className="container mx-auto px-6 pt-20 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content Card */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-hero animate-fade-in">
            <div className="mb-8">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-6">
                Nurturing minds,
                <span className="block text-blue-primary">building futures</span>
                <span className="block text-accent">at Gyandeep</span>
              </h1>
              
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Educational Excellence</p>
                  <p className="text-lg text-foreground font-medium">Since 1999</p>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Excellence in education through innovative teaching methods, 
                personalized attention, and holistic development for every child 
                at Gyandeep Public School, Varanasi.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-primary hover:bg-blue-deep text-white px-8 py-6 text-lg rounded-2xl shadow-button">
                About Our School
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="button-gradient text-white border-0 px-8 py-6 text-lg rounded-2xl shadow-button hover:shadow-glow"
              >
                Our Story
              </Button>
            </div>

            {/* School Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-100">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-primary/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <Users className="w-6 h-6 text-blue-primary" />
                </div>
                <div className="text-2xl font-bold text-blue-primary">2000+</div>
                <div className="text-sm text-muted-foreground">Students</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <BookOpen className="w-6 h-6 text-accent" />
                </div>
                <div className="text-2xl font-bold text-accent">25+</div>
                <div className="text-sm text-muted-foreground">Years</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-emerald-force rounded-xl flex items-center justify-center mx-auto mb-2 shadow-emerald">
                  <Award className="w-6 h-6 text-emerald-force" style={{color: 'hsl(160 84% 39)'}} />
                </div>
                <div className="text-2xl font-bold text-emerald-force" style={{color: 'hsl(160 84% 39)'}}>98%</div>
                <div className="text-sm text-muted-foreground">Success</div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative animate-fade-in animate-delay-200">
            <div className="relative">
              <img 
                src="/lovable-uploads/759d8b35-7caa-44ea-a405-bbd7d9d07a26.png" 
                alt="Gyandeep Public School Campus" 
                className="w-full rounded-3xl shadow-hero"
              />
              {/* Contact Info Card */}
              <div className="absolute top-6 right-6 bg-white rounded-2xl p-4 shadow-card">
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-primary">+91-8010200666</div>
                  <div className="text-sm text-muted-foreground">Monday - Friday, 9:00 AM - 6:00 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GyandeepHero;