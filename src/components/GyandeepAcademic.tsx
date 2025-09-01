import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen, Users, Award, Star, Clock, Trophy, Target,
  Palette, Music, Microscope, Gamepad2, Monitor, Calculator
} from "lucide-react";

const GyandeepAcademic = () => {
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

  const getSeasonBlobColor = (season: string) => {
    switch (season) {
      case "Summer":
        return "linear-gradient(135deg, #ffd166, #ff7a18)";
      case "Winter":
        return "linear-gradient(135deg, #60a5fa, #a855f7)";
      case "Regular":
      default:
        return "linear-gradient(135deg, #22d3ee, #3b82f6)";
    }
  };

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
              From nursery to 10th grade with modern teaching techniques and comprehensive development.
            </p>
          </div>

          {/* Modern Facilities */}
          <div className="text-center mb-2">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight">Modern Learning Facilities</h3>
          </div>
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              State-of-the-art facilities that blend traditional teaching with modern technology.
            </p>
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
              <div key={index} className="nb-anim animate-on-scroll" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="card">
                  <div className="bg">
                    <div className="mobile-card-padding text-center">
                      <Badge
                        variant="outline"
                        className="mb-3 sm:mb-4"
                        style={{
                          color:
                            timing.season === "Summer"
                              ? "rgba(214, 25, 25, 1)"
                              : timing.season === "Winter"
                              ? "rgba(51, 125, 195, 1)"
                              : "rgba(55, 149, 123, 1)",
                          border: timing.season === "Winter" ? undefined : "1px solid rgba(38, 58, 99, 1)",
                        }}
                      >
                        {timing.season}
                      </Badge>
                      <h4
                        className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3"
                        style={{
                          color:
                            timing.season === "Summer"
                              ? "rgba(70, 22, 22, 1)"
                              : timing.season === "Winter"
                              ? "rgba(194, 42, 121, 1)"
                              : "rgba(47, 138, 90, 1)",
                        }}
                      >
                        {timing.period}
                      </h4>
                      <div className="flex items-center justify-center text-accent font-semibold text-base sm:text-lg">
                        <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                        {timing.time}
                      </div>
                    </div>
                  </div>
                  <div className="blob" style={{ background: getSeasonBlobColor(timing.season) }} />
                </div>
              </div>
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
