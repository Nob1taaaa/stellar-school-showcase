import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Award, BookOpen } from "lucide-react";

const GyandeepHero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden" style={{marginTop: '0px'}}>
      {/* School Background Image */}
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/759d8b35-7caa-44ea-a405-bbd7d9d07a26.png"
          alt="Gyandeep Public School Campus"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-accent/70"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      {/* Beautiful Floating Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/20 rounded-full backdrop-blur-sm border border-white/30 shadow-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-20 h-20 bg-white/15 rounded-2xl rotate-12 backdrop-blur-sm border border-white/20 shadow-lg"></div>
        <div className="absolute bottom-40 left-20 w-16 h-16 bg-white/25 rounded-full backdrop-blur-sm border border-white/40 shadow-glow"></div>
        <div className="absolute bottom-20 right-40 w-24 h-24 bg-white/15 rounded-2xl rotate-45 backdrop-blur-sm border border-white/30 shadow-xl"></div>
        <div className="absolute top-1/3 left-1/4 w-8 h-8 bg-white/30 rounded-full shadow-md"></div>
        <div className="absolute bottom-1/3 right-1/4 w-12 h-12 bg-white/20 rounded-lg rotate-12 shadow-lg"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 pt-4 sm:pt-8 md:pt-16 lg:pt-20 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-12 items-center min-h-[60vh]">
          {/* Content Card */}
          <div className="card-3d-parent order-2 md:order-1">
            <div className="card-3d bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30 animate-fade-in">
              <div className="card-3d-glass bg-gradient-to-br from-white/40 to-white/20"></div>
              <div className="card-3d-logo">
                <span className="card-3d-circle card-3d-circle1 bg-primary/20"></span>
                <span className="card-3d-circle card-3d-circle2 bg-accent/20"></span>
                <span className="card-3d-circle card-3d-circle3 bg-primary/30"></span>
                <span className="card-3d-circle card-3d-circle4 bg-accent/30"></span>
                <span className="card-3d-circle card-3d-circle5 bg-gradient-to-br from-primary to-accent shadow-xl">
                  <Award className="w-5 h-5 text-white" />
                </span>
              </div>
              <div className="card-3d-content p-3 sm:p-4 md:p-6 lg:p-8 xl:p-12">
                <div className="mb-8">
                  <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-foreground leading-tight mb-4 md:mb-6">
                    Nurturing minds,
                    <span className="block text-primary">building futures</span>
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

                  <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed mb-4 md:mb-6 lg:mb-8">
                    Excellence in education through innovative teaching and holistic development.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-white px-4 md:px-6 lg:px-8 py-3 md:py-4 lg:py-6 text-sm md:text-base lg:text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">About Our School
                    <ArrowRight className="ml-2 w-3 md:w-4 lg:w-5 h-3 md:h-4 lg:h-5" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="bg-white/20 backdrop-blur-sm text-primary border-primary/30 border-2 px-4 md:px-6 lg:px-8 py-3 md:py-4 lg:py-6 text-sm md:text-base lg:text-lg rounded-2xl shadow-lg hover:bg-white/30 hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    Our Story
                  </Button>
                </div>

                {/* School Stats */}
                <div className="grid grid-cols-3 gap-3 md:gap-4 lg:gap-6 mt-6 md:mt-8 lg:mt-12 pt-4 md:pt-6 lg:pt-8 border-t border-gray-100">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-lg md:text-xl lg:text-2xl font-bold text-primary">2000+</div>
                    <div className="text-xs md:text-sm text-muted-foreground">Students</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                      <BookOpen className="w-6 h-6 text-accent" />
                    </div>
                    <div className="text-lg md:text-xl lg:text-2xl font-bold text-primary">25+</div>
                    <div className="text-xs md:text-sm text-muted-foreground">Years</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-lg md:text-xl lg:text-2xl font-bold text-primary">98%</div>
                    <div className="text-xs md:text-sm text-muted-foreground">Success</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info Cards */}
          <div className="relative animate-fade-in animate-delay-200 order-1 md:order-2 -mt-2 sm:-mt-4">
            <div className="space-y-4">
              {/* Contact Info Card */}
              <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-4 md:p-6 shadow-2xl border border-white/30">
                <div className="text-center">
                  <div className="text-lg md:text-xl lg:text-2xl font-bold text-primary mb-2">Contact Us</div>
                  <div className="text-sm md:text-base font-semibold text-foreground">+91-8010200666</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Monday - Friday, 9:00 AM - 6:00 PM</div>
                </div>
              </div>
              
              {/* School Info Card */}
              <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-4 md:p-6 shadow-2xl border border-white/30">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-3">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-sm md:text-base font-semibold text-foreground mb-1">Academic Excellence</div>
                  <div className="text-xs md:text-sm text-muted-foreground">CBSE Affiliated School</div>
                </div>
              </div>
              
              {/* Achievement Card */}
              <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-4 md:p-6 shadow-2xl border border-white/30">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-sm md:text-base font-semibold text-foreground mb-1">Happy Students</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Growing Every Day</div>
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
