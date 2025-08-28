import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, Award, Star, Clock, Flag, Heart, Target, 
  Calendar, Trophy, Sunrise, BookOpen, Shield
} from "lucide-react";
import assemblyImage from "@/assets/school-assembly.png";
import campusImage from "@/assets/school-building.png";
import groundsImage from "@/assets/school-grounds.png";

const SchoolLife = () => {
  const dailyActivities = [
    {
      icon: Sunrise,
      title: "Morning Assembly",
      time: "7:30 AM",
      description: "Daily morning assembly with prayers, national anthem, and important announcements",
      image: assemblyImage
    },
    {
      icon: BookOpen,
      title: "Academic Sessions",
      time: "8:00 AM - 1:00 PM",
      description: "Structured learning sessions with smart classes and interactive teaching methods"
    },
    {
      icon: Trophy,
      title: "Sports & Activities",
      time: "After School",
      description: "Physical education, sports training, and extracurricular activities"
    },
    {
      icon: Star,
      title: "Special Programs",
      time: "Weekly",
      description: "Cultural programs, competitions, and skill development sessions"
    }
  ];

  const schoolValues = [
    {
      icon: Flag,
      title: "Discipline & Respect",
      description: "Students learn the importance of discipline, punctuality, and respect for teachers and peers"
    },
    {
      icon: Heart,
      title: "Unity & Brotherhood",
      description: "Morning assemblies foster unity among students from diverse backgrounds"
    },
    {
      icon: Target,
      title: "Character Building",
      description: "Focus on moral values and character development alongside academic excellence"
    },
    {
      icon: Shield,
      title: "Leadership Skills",
      description: "Students take turns leading assemblies, developing confidence and leadership qualities"
    }
  ];

  const campusHighlights = [
    {
      image: campusImage,
      title: "Beautiful Campus Architecture",
      description: "Traditional Indian architecture with modern educational facilities"
    },
    {
      image: groundsImage,
      title: "Lush Green Environment",
      description: "2 acres of beautifully landscaped campus with gardens and open spaces"
    }
  ];

  return (
    <section id="school-life" className="py-16 sm:py-20 md:py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <Badge variant="secondary" className="mb-4 sm:mb-6 text-base sm:text-lg px-4 sm:px-6 py-2">School Life & Culture</Badge>
            <h2 className="mobile-section-title font-bold text-foreground mb-6 sm:mb-8 animate-fade-in">
              A Day in the Life at <span className="text-gradient">Gyandeep</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
              Experience the vibrant school culture where 1500 students come together every day for 
              learning, growth, and character development.
            </p>
          </div>

          {/* Featured Morning Assembly */}
          <div className="glass-card rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-12 mb-16 sm:mb-20 md:mb-24 relative overflow-hidden animate-on-scroll">
            <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
            <div className="relative z-10 grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
              <div>
                <Badge variant="outline" className="mb-4 sm:mb-6 text-base sm:text-lg px-4 py-2">Daily Tradition</Badge>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6 flex items-center">
                  <Flag className="w-8 h-8 sm:w-10 sm:h-10 text-accent mr-3 sm:mr-4" />
                  Morning Assembly
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 sm:mb-8">
                  Every day begins with our inspiring morning assembly where all 1500 students gather 
                  in perfect discipline. Students in crisp white uniforms participate in prayers, 
                  national anthem, and receive important announcements from the school leadership.
                </p>
                <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                  <div className="text-center p-3 sm:p-4 bg-primary/10 rounded-xl">
                    <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="text-lg sm:text-xl font-bold text-primary mb-1">7:30 AM</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Daily Start</div>
                  </div>
                  <div className="text-center p-3 sm:p-4 bg-accent/10 rounded-xl">
                    <Users className="w-6 h-6 text-accent mx-auto mb-2" />
                    <div className="text-lg sm:text-xl font-bold text-accent mb-1">1500+</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Students</div>
                  </div>
                </div>
                <Button variant="hero" size="lg" className="text-base sm:text-lg">
                  Experience Our Culture
                </Button>
              </div>
              <div className="relative">
                <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-hero">
                  <img
                    src={assemblyImage}
                    alt="Gyandeep Public School Morning Assembly"
                    className="w-full h-80 sm:h-96 object-cover"
                  />
                </div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-accent text-accent-foreground">
                    <Star className="w-4 h-4 mr-2" />
                    Live from Campus
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Daily Activities */}
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">Daily School Activities</h3>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              A structured day filled with learning, activities, and character development.
            </p>
          </div>

          <div className="mobile-grid gap-4 sm:gap-6 md:gap-8 mb-16 sm:mb-20">
            {dailyActivities.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <Card key={index} className="glass-card border-none interactive-card group animate-on-scroll" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardContent className="mobile-card-padding">
                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-accent rounded-2xl flex items-center justify-center group-hover:scale-110 smooth-transition">
                        <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-accent-foreground" />
                      </div>
                      <Badge variant="outline" className="text-xs sm:text-sm">{activity.time}</Badge>
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4 group-hover:text-accent smooth-transition">
                      {activity.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{activity.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Campus Highlights */}
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">Our Beautiful Campus</h3>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Authentic photos of our stunning 2-acre campus showcasing the perfect blend of 
              traditional architecture and modern facilities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 mb-16 sm:mb-20">
            {campusHighlights.map((highlight, index) => (
              <Card key={index} className="glass-card border-none overflow-hidden interactive-card group animate-on-scroll" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="relative">
                  <img
                    src={highlight.image}
                    alt={highlight.title}
                    className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 smooth-transition"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                    <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">{highlight.title}</h4>
                    <p className="text-white/90 text-sm sm:text-base">{highlight.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* School Values */}
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">Values We Instill</h3>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Through daily assemblies and school activities, we build character and instill lifelong values.
            </p>
          </div>

          <div className="mobile-grid gap-4 sm:gap-6 md:gap-8">
            {schoolValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="glass-card border-none interactive-card group animate-on-scroll" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardContent className="mobile-card-padding text-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-hero rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 smooth-transition">
                      <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary-foreground" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4 group-hover:text-primary smooth-transition">
                      {value.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolLife;