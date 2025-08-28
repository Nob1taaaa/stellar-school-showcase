import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Users, Award, BookOpen, Globe, TrendingUp, Download } from "lucide-react";
import heroImage from "@/assets/gyandeep-hero.jpg";

const GyandeepHero = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden pt-16 sm:pt-20 md:pt-32">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Gyandeep Public School Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-accent/80"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-4 sm:left-10 w-16 sm:w-24 h-16 sm:h-24 bg-accent/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-8 sm:right-20 w-12 sm:w-16 h-12 sm:h-16 bg-primary-glow/30 rounded-full blur-lg animate-glow-pulse"></div>
        <div className="absolute bottom-40 left-8 sm:left-20 w-20 sm:w-32 h-20 sm:h-32 bg-accent-glow/20 rounded-full blur-xl animate-bounce-slow"></div>
        <div className="absolute bottom-20 right-4 sm:right-10 w-16 sm:w-20 h-16 sm:h-20 bg-primary/30 rounded-full blur-lg animate-float"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Prestigious Badge */}
          <div className="inline-flex items-center gap-2 sm:gap-3 glass-card px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-6 sm:mb-8 glow-effect animate-scale-in">
            <Star className="w-4 sm:w-5 h-4 sm:h-5 text-accent animate-pulse" />
            <span className="text-primary-foreground font-semibold text-xs sm:text-sm md:text-base text-center">
              A Co-Educational Senior Secondary School | CBSE Affiliated | Since 1999
            </span>
            <Globe className="w-4 sm:w-5 h-4 sm:h-5 text-accent animate-pulse" />
          </div>

          {/* Main Heading */}
          <h1 className="mobile-hero-text font-bold text-primary-foreground mb-6 sm:mb-8 leading-tight animate-slide-up">
            <span className="block animate-delay-100">GYANDEEP</span>
            <span className="block text-gradient glow-effect animate-delay-200">
              PUBLIC SCHOOL
            </span>
          </h1>

          {/* Location */}
          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-primary-foreground/90 mb-3 sm:mb-4 font-medium animate-fade-in animate-delay-300">
            Dharsauna, Cholapur, Varanasi - 221101
          </div>

          {/* Tagline */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-foreground/90 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0 animate-fade-in animate-delay-400">
            "Empowering students to acquire, demonstrate, articulate, and value knowledge and skills 
            that will support them as life-long learners to participate and contribute globally."
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16 px-4 sm:px-0 animate-scale-in animate-delay-500">
            <Button variant="accent" size="lg" className="text-lg sm:text-xl px-8 sm:px-10 py-4 sm:py-6 glow-effect hover-glow touch-target">
              <BookOpen className="w-5 sm:w-6 h-5 sm:h-6 mr-2 sm:mr-3" />
              Explore Admissions
              <ArrowRight className="w-5 sm:w-6 h-5 sm:h-6 ml-2 sm:ml-3" />
            </Button>
            <Button variant="glass" size="lg" className="text-lg sm:text-xl px-8 sm:px-10 py-4 sm:py-6 touch-target">
              <Star className="w-5 sm:w-6 h-5 sm:h-6 mr-2 sm:mr-3" />
              Virtual Campus Tour
            </Button>
          </div>

          {/* Achievement Stats */}
          <div className="mobile-grid gap-4 sm:gap-6 max-w-6xl mx-auto px-4 sm:px-0 mb-12 sm:mb-16">
            <div className="glass-card mobile-card-padding rounded-2xl text-center interactive-card group animate-on-scroll gpu-accelerated">
              <div className="flex items-center justify-center mb-3 sm:mb-4">
                <Users className="w-6 sm:w-8 h-6 sm:h-8 text-accent mr-2 sm:mr-3 group-hover:scale-110 smooth-transition" />
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground">2000+</span>
              </div>
              <p className="text-primary-foreground/80 font-medium text-sm sm:text-base">Happy Students</p>
            </div>
            
            <div className="glass-card mobile-card-padding rounded-2xl text-center interactive-card group animate-on-scroll animate-delay-100 gpu-accelerated">
              <div className="flex items-center justify-center mb-3 sm:mb-4">
                <Award className="w-6 sm:w-8 h-6 sm:h-8 text-accent mr-2 sm:mr-3 group-hover:scale-110 smooth-transition" />
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground">25+</span>
              </div>
              <p className="text-primary-foreground/80 font-medium text-sm sm:text-base">Years Legacy</p>
            </div>
            
            <div className="glass-card mobile-card-padding rounded-2xl text-center interactive-card group animate-on-scroll animate-delay-200 gpu-accelerated">
              <div className="flex items-center justify-center mb-3 sm:mb-4">
                <TrendingUp className="w-6 sm:w-8 h-6 sm:h-8 text-accent mr-2 sm:mr-3 group-hover:scale-110 smooth-transition" />
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground">98%</span>
              </div>
              <p className="text-primary-foreground/80 font-medium text-sm sm:text-base">Success Rate</p>
            </div>
            
            <div className="glass-card mobile-card-padding rounded-2xl text-center interactive-card group animate-on-scroll animate-delay-300 gpu-accelerated">
              <div className="flex items-center justify-center mb-3 sm:mb-4">
                <BookOpen className="w-6 sm:w-8 h-6 sm:h-8 text-accent mr-2 sm:mr-3 group-hover:scale-110 smooth-transition" />
                <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground">Pre-K to 11</span>
              </div>
              <p className="text-primary-foreground/80 font-medium text-sm sm:text-base">Class Range</p>
            </div>
          </div>

          {/* Quick Access Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto px-4 sm:px-0">
            <div className="glass-card mobile-card-padding rounded-xl interactive-card group cursor-pointer animate-on-scroll animate-delay-100 gpu-accelerated">
              <div className="text-center">
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 smooth-transition">
                  <BookOpen className="w-6 sm:w-8 h-6 sm:h-8 text-accent-foreground" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-primary-foreground mb-2">E-Campus Login</h3>
                <p className="text-primary-foreground/70 text-sm sm:text-base">Access your smart campus portal</p>
              </div>
            </div>
            
            <div className="glass-card mobile-card-padding rounded-xl interactive-card group cursor-pointer animate-on-scroll animate-delay-200 gpu-accelerated">
              <div className="text-center">
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 smooth-transition">
                  <Download className="w-6 sm:w-8 h-6 sm:h-8 text-accent-foreground" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-primary-foreground mb-2">Download App</h3>
                <p className="text-primary-foreground/70 text-sm sm:text-base">Get our mobile application</p>
              </div>
            </div>
            
            <div className="glass-card mobile-card-padding rounded-xl interactive-card group cursor-pointer animate-on-scroll animate-delay-300 gpu-accelerated">
              <div className="text-center">
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 smooth-transition">
                  <Award className="w-6 sm:w-8 h-6 sm:h-8 text-accent-foreground" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-primary-foreground mb-2">Academic Excellence</h3>
                <p className="text-primary-foreground/70 text-sm sm:text-base">Explore our programs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GyandeepHero;