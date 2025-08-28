import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, Users, Award, Star, Clock, Calendar, Trophy, Target,
  Palette, Music, Microscope, Gamepad2, Monitor, Calculator, GraduationCap
} from "lucide-react";
import programsImage from "@/assets/gyandeep-activities.jpg";

const GyandeepAcademic = () => {
  const academicPrograms = [
    {
      category: "Early Years",
      title: "Nursery & Pre-Primary",
      icon: Star,
      description: "Foundation building with play-based learning and essential skill development.",
      features: ["Creative Learning", "Motor Skills", "Social Development", "Basic Literacy"],
      timing: "7:30 AM - 11:30 AM (Summer)",
      badge: "Age 3-5"
    },
    {
      category: "Primary",
      title: "Classes I to V",
      icon: BookOpen,
      description: "Comprehensive curriculum with focus on core subjects and extracurricular activities.",
      features: ["Smart Classes", "Abacus Training", "Science Lab", "Art & Craft"],
      timing: "7:45 AM - 1:00 PM (Regular)",
      badge: "Age 6-10"
    },
    {
      category: "Middle School",
      title: "Classes VI to VIII",
      icon: Monitor,
      description: "Advanced learning with technology integration and skill-based education.",
      features: ["Educom Smart Classes", "3D Learning", "Project Work", "Co-curricular"],
      timing: "8:30 AM - 1:40 PM (Winter)",
      badge: "Age 11-13"
    },
    {
      category: "Secondary",
      title: "Classes IX to X",
      icon: GraduationCap,
      description: "CBSE board preparation with comprehensive academic and practical training.",
      features: ["Board Prep", "Practical Labs", "Career Guidance", "Competitions"],
      timing: "Varies by Season",
      badge: "Age 14-16"
    }
  ];

  const modernFacilities = [
    {
      icon: Monitor,
      title: "Educom Smart Classes",
      description: "Latest teaching tools with graphic animation, simulations, and 3D images"
    },
    {
      icon: Calculator,
      title: "Abacus Classes",
      description: "Mental math development and cognitive skill enhancement"
    },
    {
      icon: Microscope,
      title: "Science Laboratory",
      description: "Fully equipped lab for hands-on practical learning"
    },
    {
      icon: Palette,
      title: "Art & Craft Studio",
      description: "Creative expression through various artistic mediums"
    },
    {
      icon: Music,
      title: "Music & Dance",
      description: "Cultural development through performing arts"
    },
    {
      icon: Gamepad2,
      title: "Sports Facilities",
      description: "Physical fitness and team building activities"
    }
  ];

  const cocurricular = [
    { name: "Quiz Competitions", icon: Trophy },
    { name: "Debate Competitions", icon: Users },
    { name: "Writing Competitions", icon: BookOpen },
    { name: "Drawing Competitions", icon: Palette },
    { name: "Rakhi Making", icon: Star },
    { name: "Rangoli Making", icon: Award },
    { name: "Singing Classes", icon: Music },
    { name: "Dancing Classes", icon: Target }
  ];

  const schoolTimings = [
    { period: "1st April to 15th May", time: "7:30 AM to 11:30 AM", season: "Summer" },
    { period: "1st July to 30th November", time: "7:45 AM to 1:00 PM", season: "Regular" },
    { period: "1st December to Last March", time: "8:30 AM to 1:40 PM", season: "Winter" }
  ];

  return (
    <section id="academic" className="py-16 sm:py-20 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <Badge variant="secondary" className="mb-4 sm:mb-6 text-base sm:text-lg px-4 sm:px-6 py-2">Academic Excellence</Badge>
            <h2 className="mobile-section-title font-bold text-foreground mb-6 sm:mb-8 animate-fade-in">
              Comprehensive <span className="text-gradient">Education System</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
              From nursery to 10th grade with 30+ activities for holistic development using latest 
              teaching techniques and modern educational tools.
            </p>
          </div>

          {/* Academic Programs */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20 md:mb-24">
            {academicPrograms.map((program, index) => {
              const Icon = program.icon;
              return (
                <Card key={index} className="glass-card border-none interactive-card group animate-on-scroll" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <Badge className="bg-gradient-accent text-accent-foreground">{program.badge}</Badge>
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-hero rounded-2xl flex items-center justify-center group-hover:scale-110 smooth-transition">
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground" />
                      </div>
                    </div>
                    <div className="text-sm text-accent font-medium mb-2">{program.category}</div>
                    <CardTitle className="text-xl sm:text-2xl group-hover:text-primary smooth-transition">
                      {program.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 sm:space-y-6">
                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                      {program.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {program.features.map((feature, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs sm:text-sm">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center text-sm text-muted-foreground pt-2 border-t border-border">
                      <Clock className="w-4 h-4 mr-2" />
                      {program.timing}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Modern Teaching Methods */}
          <div className="glass-card rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-12 mb-16 sm:mb-20 md:mb-24 relative overflow-hidden animate-on-scroll">
            <div className="absolute inset-0 bg-gradient-accent opacity-5"></div>
            <div className="relative z-10 grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
              <div>
                <Badge variant="outline" className="mb-4 sm:mb-6 text-base sm:text-lg px-4 py-2">Modern Learning</Badge>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
                  Latest Teaching Techniques
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 sm:mb-8">
                  We use cutting-edge educational technology including Educom smart classes, graphic animation, 
                  simulations, 3D images, and video clips in addition to traditional chalk and talk methods.
                </p>
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <div className="text-center p-3 sm:p-4 bg-primary/10 rounded-xl">
                    <div className="text-xl sm:text-2xl font-bold text-primary mb-1">30+</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Activities</div>
                  </div>
                  <div className="text-center p-3 sm:p-4 bg-accent/10 rounded-xl">
                    <div className="text-xl sm:text-2xl font-bold text-accent mb-1">Smart</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Classes</div>
                  </div>
                </div>
                <Button variant="hero" size="lg" className="text-base sm:text-lg">
                  Explore Our Methods
                </Button>
              </div>
              <div className="relative">
                <img
                  src={programsImage}
                  alt="Modern Teaching at Gyandeep"
                  className="w-full h-80 sm:h-96 object-cover rounded-xl sm:rounded-2xl shadow-elegant"
                />
              </div>
            </div>
          </div>

          {/* Modern Facilities */}
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">Modern Learning Facilities</h3>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              State-of-the-art facilities that blend traditional teaching with modern technology.
            </p>
          </div>

          <div className="mobile-grid gap-4 sm:gap-6 md:gap-8 mb-16 sm:mb-20">
            {modernFacilities.map((facility, index) => {
              const Icon = facility.icon;
              return (
                <Card key={index} className="glass-card border-none interactive-card group animate-on-scroll" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardContent className="mobile-card-padding text-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-accent rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 smooth-transition">
                      <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-accent-foreground" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4 group-hover:text-accent smooth-transition">
                      {facility.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{facility.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Co-curricular Activities */}
          <div className="glass-card rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-12 mb-16 sm:mb-20 animate-on-scroll">
            <div className="text-center mb-8 sm:mb-12">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">Co-curricular Activities</h3>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Various activities including competitions, festivals, and hobby classes for complete personality development.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
              {cocurricular.map((activity, index) => {
                const Icon = activity.icon;
                return (
                  <div key={index} className="text-center p-4 sm:p-6 hover:bg-accent/5 rounded-xl smooth-transition group">
                    <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-accent mx-auto mb-2 sm:mb-3 group-hover:scale-110 smooth-transition" />
                    <p className="text-sm sm:text-base font-medium text-foreground">{activity.name}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* School Timings */}
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">School Timings</h3>
            <p className="text-base sm:text-lg text-muted-foreground">
              Our schedule varies by season to ensure optimal learning conditions throughout the year.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-16 sm:mb-20">
            {schoolTimings.map((timing, index) => (
              <Card key={index} className="glass-card border-none text-center animate-on-scroll" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="mobile-card-padding">
                  <Badge variant="outline" className="mb-3 sm:mb-4">{timing.season}</Badge>
                  <h4 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">{timing.period}</h4>
                  <div className="flex items-center justify-center text-accent font-semibold text-base sm:text-lg">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    {timing.time}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 sm:mb-4">
              Ready to Join Our Academic Excellence?
            </h3>
            <p className="text-muted-foreground mb-6 sm:mb-8 text-base sm:text-lg">
              Experience quality education with modern teaching methods and comprehensive development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="text-base sm:text-lg">
                Apply for Admission
              </Button>
              <Button variant="outline" size="lg" className="text-base sm:text-lg">
                Download Prospectus
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GyandeepAcademic;