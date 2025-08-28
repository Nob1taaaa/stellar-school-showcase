import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Users, Award, BookOpen, Globe, TrendingUp, Download } from "lucide-react";
import heroImage from "@/assets/gyandeep-hero.jpg";

const GyandeepHero = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden pt-32">
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
        <div className="absolute top-20 left-10 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-primary-glow/30 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-32 h-32 bg-accent-glow/20 rounded-full blur-xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-20 h-20 bg-primary/30 rounded-full blur-lg animate-pulse delay-500"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Prestigious Badge */}
          <div className="inline-flex items-center gap-3 glass-card px-6 py-3 rounded-full mb-8 glow-effect">
            <Star className="w-5 h-5 text-accent" />
            <span className="text-primary-foreground font-semibold">
              A Co-Educational Senior Secondary School | CBSE Affiliated | Since 1999
            </span>
            <Globe className="w-5 h-5 text-accent" />
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-bold text-primary-foreground mb-8 leading-tight">
            <span className="block">GYANDEEP</span>
            <span className="block text-gradient glow-effect text-7xl md:text-9xl">
              PUBLIC SCHOOL
            </span>
          </h1>

          {/* Location */}
          <div className="text-2xl md:text-3xl text-primary-foreground/90 mb-4 font-medium">
            Dharsauna, Cholapur, Varanasi - 221101
          </div>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            "Empowering students to acquire, demonstrate, articulate, and value knowledge and skills 
            that will support them as life-long learners to participate and contribute globally."
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button variant="accent" size="lg" className="text-xl px-10 py-6 glow-effect">
              <BookOpen className="w-6 h-6 mr-3" />
              Explore Admissions
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
            <Button variant="glass" size="lg" className="text-xl px-10 py-6">
              <Star className="w-6 h-6 mr-3" />
              Virtual Campus Tour
            </Button>
          </div>

          {/* Achievement Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="glass-card p-8 rounded-2xl text-center hover:shadow-glow smooth-transition group">
              <div className="flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-accent mr-3 group-hover:scale-110 smooth-transition" />
                <span className="text-4xl font-bold text-primary-foreground">2000+</span>
              </div>
              <p className="text-primary-foreground/80 font-medium">Happy Students</p>
            </div>
            
            <div className="glass-card p-8 rounded-2xl text-center hover:shadow-glow smooth-transition group">
              <div className="flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-accent mr-3 group-hover:scale-110 smooth-transition" />
                <span className="text-4xl font-bold text-primary-foreground">25+</span>
              </div>
              <p className="text-primary-foreground/80 font-medium">Years Legacy</p>
            </div>
            
            <div className="glass-card p-8 rounded-2xl text-center hover:shadow-glow smooth-transition group">
              <div className="flex items-center justify-center mb-4">
                <TrendingUp className="w-8 h-8 text-accent mr-3 group-hover:scale-110 smooth-transition" />
                <span className="text-4xl font-bold text-primary-foreground">98%</span>
              </div>
              <p className="text-primary-foreground/80 font-medium">Success Rate</p>
            </div>
            
            <div className="glass-card p-8 rounded-2xl text-center hover:shadow-glow smooth-transition group">
              <div className="flex items-center justify-center mb-4">
                <BookOpen className="w-8 h-8 text-accent mr-3 group-hover:scale-110 smooth-transition" />
                <span className="text-4xl font-bold text-primary-foreground">Pre-K to 11</span>
              </div>
              <p className="text-primary-foreground/80 font-medium">Class Range</p>
            </div>
          </div>

          {/* Quick Access Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
            <div className="glass-card p-6 rounded-xl hover:shadow-elegant smooth-transition group cursor-pointer">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 smooth-transition">
                  <BookOpen className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold text-primary-foreground mb-2">E-Campus Login</h3>
                <p className="text-primary-foreground/70">Access your smart campus portal</p>
              </div>
            </div>
            
            <div className="glass-card p-6 rounded-xl hover:shadow-elegant smooth-transition group cursor-pointer">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 smooth-transition">
                  <Download className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold text-primary-foreground mb-2">Download App</h3>
                <p className="text-primary-foreground/70">Get our mobile application</p>
              </div>
            </div>
            
            <div className="glass-card p-6 rounded-xl hover:shadow-elegant smooth-transition group cursor-pointer">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 smooth-transition">
                  <Award className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold text-primary-foreground mb-2">Academic Excellence</h3>
                <p className="text-primary-foreground/70">Explore our programs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GyandeepHero;