import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Calendar, Clock, Star, Award, Lightbulb, Music, Palette, Calculator } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      icon: BookOpen,
      title: "Nursery & Pre-Primary",
      age: "Age 3-5",
      duration: "Play-based Learning",
      features: ["Motor Skills", "Social Development", "Basic Literacy", "Creative Play"],
      description: "Foundation building with play-based learning approach focusing on essential skill development and early childhood education.",
      badge: "Early Years"
    },
    {
      icon: Calculator,
      title: "Primary Education",
      age: "Age 6-10",
      duration: "Classes I-V",
      features: ["Smart Classes", "Abacus Training", "Science Lab", "Art & Craft"],
      description: "Comprehensive curriculum with focus on core subjects and creative activities to build strong academic foundation.",
      badge: "Foundation"
    },
    {
      icon: Lightbulb,
      title: "Middle School",
      age: "Age 11-13",
      duration: "Classes VI-VIII",
      features: ["3D Learning", "Project Work", "Technology", "Co-curricular"],
      description: "Advanced learning with technology integration and skill-based education preparing students for higher studies.",
      badge: "Growth"
    },
    {
      icon: Award,
      title: "Secondary School",
      age: "Age 14-16",
      duration: "Classes IX-X",
      features: ["CBSE Board", "Career Guidance", "Practical Labs", "Competitions"],
      description: "CBSE board preparation with comprehensive academic training and practical learning experiences.",
      badge: "Excellence"
    }
  ];

  const specialPrograms = [
    {
      icon: Calculator,
      title: "Abacus Classes",
      description: "Mental math development through structured abacus training"
    },
    {
      icon: Music,
      title: "Music & Dance",
      description: "Cultural development through performing arts and creative expression"
    },
    {
      icon: Palette,
      title: "Art & Craft",
      description: "Creative skills development through various artistic mediums"
    },
    {
      icon: Star,
      title: "Smart Classes",
      description: "Educom technology with 3D learning and interactive education"
    }
  ];

  return (
    <section id="programs" className="py-16 sm:py-20 md:py-24 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-hero mx-auto max-w-4xl animate-fade-in">
              <Badge variant="outline" className="mb-4 sm:mb-6 text-base sm:text-lg px-4 sm:px-6 py-2 border-blue-primary text-blue-primary">Academic Programs</Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 sm:mb-8">
                Our <span className="text-blue-primary">Educational Programs</span>
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                From nursery to 10th grade with comprehensive curriculum designed to nurture young minds 
                and prepare them for future challenges with modern teaching methods.
              </p>
            </div>
          </div>

          {/* Programs Grid */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20 md:mb-24">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <Card key={index} className="bg-white border-none shadow-card interactive-card group animate-on-scroll" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardContent className="p-6 sm:p-8">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                      <Badge className="button-gradient text-white border-0">{program.badge}</Badge>
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 smooth-transition">
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-blue-primary" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4 group-hover:text-blue-primary smooth-transition">
                      {program.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                      {program.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                      {program.features.map((feature) => (
                        <Badge key={feature} variant="outline" className="text-xs sm:text-sm border-blue-primary/30 text-blue-primary">
                          {feature}
                        </Badge>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-3 bg-blue-primary/5 rounded-xl">
                        <Users className="w-4 h-4 text-blue-primary mx-auto mb-1" />
                        <div className="text-sm font-medium text-blue-primary">{program.age}</div>
                      </div>
                      <div className="text-center p-3 bg-accent/5 rounded-xl">
                        <Calendar className="w-4 h-4 text-accent mx-auto mb-1" />
                        <div className="text-sm font-medium text-accent">{program.duration}</div>
                      </div>
                    </div>

                    {/* CTA */}
                    <Button className="w-full bg-blue-primary hover:bg-blue-deep text-white rounded-2xl">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Special Programs */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-hero mx-auto max-w-4xl">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">Special Programs</h3>
              <p className="text-lg text-muted-foreground mb-8">
                Additional programs designed to enhance creativity, mental abilities, and overall personality development.
              </p>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {specialPrograms.map((program, index) => {
                  const Icon = program.icon;
                  return (
                    <div key={index} className="text-center p-4 hover:bg-accent/5 rounded-xl smooth-transition group">
                      <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 smooth-transition">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <h4 className="text-lg font-bold text-foreground mb-2">{program.title}</h4>
                      <p className="text-sm text-muted-foreground">{program.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-hero mx-auto max-w-4xl">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Ready to Begin Your Child's Educational Journey?
              </h3>
              <p className="text-muted-foreground mb-6 text-lg">
                Join over 1500 students at Gyandeep Public School and experience quality education 
                with modern teaching methods.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-primary hover:bg-blue-deep text-white px-8 py-6 text-lg rounded-2xl">
                  Apply for Admission
                </Button>
                <Button variant="outline" size="lg" className="button-gradient text-white border-0 px-8 py-6 text-lg rounded-2xl">
                  Download Prospectus
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;