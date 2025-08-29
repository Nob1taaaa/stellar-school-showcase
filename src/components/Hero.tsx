import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Award } from "lucide-react";
import heroImage from "@/assets/hero-campus.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Elite Academy Campus"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 hero-gradient opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6">
            <Star className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-primary-foreground">
              #1 Educational Excellence 2024
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Shape Your
            <span className="block text-gradient glow-effect">
              Extraordinary Future
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Where innovation meets tradition. Join thousands of students who have
            transformed their dreams into reality at Elite Academy.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="accent" size="lg" className="text-lg px-8 py-4">
              Explore Programs
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="glass" size="lg" className="text-lg px-8 py-4">
              Virtual Campus Tour
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="glass-card p-6 rounded-xl text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-6 h-6 text-accent mr-2" />
                <span className="text-2xl font-bold text-primary-foreground">50K+</span>
              </div>
              <p className="text-primary-foreground/80">Active Students</p>
            </div>
            <div className="glass-card p-6 rounded-xl text-center">
              <div className="flex items-center justify-center mb-2">
                <Award className="w-6 h-6 text-accent mr-2" />
                <span className="text-2xl font-bold text-primary-foreground">95%</span>
              </div>
              <p className="text-primary-foreground/80">Job Placement</p>
            </div>
            <div className="glass-card p-6 rounded-xl text-center">
              <div className="flex items-center justify-center mb-2">
                <Star className="w-6 h-6 text-accent mr-2" />
                <span className="text-2xl font-bold text-primary-foreground">200+</span>
              </div>
              <p className="text-primary-foreground/80">Partner Companies</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default Hero;