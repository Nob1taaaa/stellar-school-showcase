import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Award, BookOpen } from "lucide-react";

const GyandeepHero = () => {
  return (
    <section className="min-h-screen bg-gradient-hero relative overflow-hidden" style={{marginTop: '0px'}}>
      {/* Decorative Elements */}
      <div className="hidden md:block absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full"></div>
        <div className="absolute top-40 right-20 w-20 h-20 bg-orange-vibrant/20 rounded-lg rotate-12"></div>
        <div className="absolute bottom-40 left-20 w-16 h-16 bg-purple-vibrant/30 rounded-full shadow-purple glow-effect"></div>
        <div className="absolute bottom-20 right-40 w-24 h-24 bg-white/10 rounded-lg rotate-45"></div>
      </div>

      <div className="container mx-auto px-3 md:px-6 pt-2 sm:pt-4 md:pt-8 lg:pt-12 pb-6 md:pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-8 lg:gap-12 items-center min-h-[50vh] md:min-h-[60vh]">
          {/* Content Card */}
          <div className="card-3d-parent order-2 md:order-1">
            <div className="card-3d bg-white rounded-3xl shadow-hero animate-fade-in">
              <div className="card-3d-glass"></div>
              <div className="card-3d-logo">
                <span className="card-3d-circle card-3d-circle1"></span>
                <span className="card-3d-circle card-3d-circle2"></span>
                <span className="card-3d-circle card-3d-circle3"></span>
                <span className="card-3d-circle card-3d-circle4"></span>
                <span className="card-3d-circle card-3d-circle5">
                  <Award className="w-5 h-5 text-white" />
                </span>
              </div>
              <div className="card-3d-content p-3 sm:p-4 md:p-6 lg:p-8">
                <div className="mb-4 md:mb-8">
                  <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-foreground leading-tight mb-2 md:mb-4 lg:mb-6">
                    Nurturing minds,
                    <span className="block text-primary">building futures</span>
                    <span className="block text-accent">at Gyandeep</span>
                  </h1>
                  
                  <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-6">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-accent rounded-full flex items-center justify-center">
                      <Award className="w-4 h-4 md:w-6 md:h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-xs md:text-sm text-muted-foreground">Educational Excellence</p>
                      <p className="text-sm md:text-lg text-foreground font-medium">Since 1999</p>
                    </div>
                  </div>

                  <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed mb-3 md:mb-6 lg:mb-8">
                    Excellence in education through innovative teaching and holistic development.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
                  <Button size="lg" className="bg-gradient-hero text-primary-foreground px-3 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 text-sm md:text-base rounded-2xl shadow-golden hover:shadow-glow">About Our School
                    <ArrowRight className="ml-2 w-3 md:w-4 lg:w-5 h-3 md:h-4 lg:h-5" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="bg-primary text-primary-foreground border-0 px-3 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 text-sm md:text-base rounded-2xl shadow-button hover:shadow-glow"
                  >
                    Our Story
                  </Button>
                </div>

                {/* School Stats */}
                <div className="grid grid-cols-3 gap-2 md:gap-4 lg:gap-6 mt-4 md:mt-8 lg:mt-12 pt-3 md:pt-6 lg:pt-8 border-t border-gray-100">
                  <div className="text-center">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-1 md:mb-2">
                      <Users className="w-4 h-4 md:w-6 md:h-6 text-primary" />
                    </div>
                    <div className="text-sm md:text-lg lg:text-2xl font-bold text-primary">2000+</div>
                    <div className="text-xs md:text-sm text-muted-foreground">Students</div>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-1 md:mb-2">
                      <BookOpen className="w-4 h-4 md:w-6 md:h-6 text-primary" />
                    </div>
                    <div className="text-sm md:text-lg lg:text-2xl font-bold text-primary">25+</div>
                    <div className="text-xs md:text-sm text-muted-foreground">Years</div>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-1 md:mb-2">
                      <Award className="w-4 h-4 md:w-6 md:h-6 text-primary" />
                    </div>
                    <div className="text-sm md:text-lg lg:text-2xl font-bold text-primary">98%</div>
                    <div className="text-xs md:text-sm text-muted-foreground">Success</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative animate-fade-in animate-delay-200 order-1 md:order-2 mb-2 sm:mb-0">
            <div className="relative hero-anim-border">
              <div className="blob-card">
                <div className="blob-bg"></div>
                <div className="blob"></div>
                <img
                  src="/lovable-uploads/759d8b35-7caa-44ea-a405-bbd7d9d07a26.png"
                  alt="Gyandeep Public School Campus"
                  className="w-full h-full object-cover rounded-lg relative z-10"
                />
              </div>
              {/* Contact Info Card */}
              <div className="absolute top-1 sm:top-2 md:top-4 lg:top-6 right-1 sm:right-2 md:right-4 lg:right-6 bg-white rounded-lg sm:rounded-xl md:rounded-2xl p-1 sm:p-2 md:p-3 lg:p-4 shadow-card">
                <div className="text-right">
                  <div className="text-xs sm:text-sm md:text-lg lg:text-xl font-bold text-primary">+91-8010200666</div>
                  <div className="text-xs md:text-sm text-muted-foreground hidden md:block">Mon-Fri, 9AM-6PM</div>
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
