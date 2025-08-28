import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Target, Lightbulb, Globe, Users, BookOpen, Award, Star } from "lucide-react";
import studentsImage from "@/assets/gyandeep-students.jpg";
import missionImage from "@/assets/gyandeep-mission.jpg";

const GyandeepAbout = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence in Education",
      description: "Creating high standards of learning experiences for all children with positive attitude and ambition to succeed."
    },
    {
      icon: Heart,
      title: "Cultural Heritage",
      description: "Drawing the best from Indian culture and tradition while embracing modern educational approaches."
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "Preparing students to participate and contribute globally as life-long learners."
    },
    {
      icon: Lightbulb,
      title: "Holistic Development",
      description: "Combining educational dimensions with nationalism and culturalism for complete personality development."
    }
  ];

  const achievements = [
    { icon: Users, number: "25+", text: "Years of Excellence" },
    { icon: BookOpen, number: "2000+", text: "Alumni Success Stories" },
    { icon: Award, number: "100+", text: "Awards & Recognitions" },
    { icon: Star, number: "98%", text: "Student Satisfaction" }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <Badge variant="secondary" className="mb-6 text-lg px-6 py-2">About Our Institution</Badge>
            <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-8">
              Legacy of <span className="text-gradient">Educational Excellence</span>
            </h2>
            <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Since 1999, Gyandeep Public School has been nurturing young minds in the holy city of Varanasi,
              carrying forward the glorious tradition of purposeful schooling.
            </p>
          </div>

          {/* Vision & Mission */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            {/* Image */}
            <div className="relative group">
              <div className="rounded-3xl overflow-hidden shadow-hero">
                <img
                  src={studentsImage}
                  alt="Gyandeep Students in Learning Environment"
                  className="w-full h-[500px] object-cover group-hover:scale-105 smooth-transition"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 glass-card p-8 rounded-2xl shadow-glow">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">1999</div>
                  <div className="text-muted-foreground font-medium">Established</div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-4xl font-bold text-foreground mb-6 flex items-center">
                  <Target className="w-10 h-10 text-accent mr-4" />
                  Our Vision
                </h3>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  Gyandeep Public School has been formulated to empower students to acquire, demonstrate, 
                  articulate, and value knowledge and skills that will support them as life-long learners 
                  to participate and contribute globally.
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-foreground mb-6 flex items-center">
                  <Lightbulb className="w-10 h-10 text-accent mr-4" />
                  Our Mission
                </h3>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  We aim at creating high standards of learning experiences for all children by providing 
                  an environment that facilitates positive attitude and the ambition to succeed, combining 
                  traditional values with modern educational excellence.
                </p>
              </div>

              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                Learn More About Our Heritage
              </Button>
            </div>
          </div>

          {/* Achievement Stats */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card key={index} className="glass-card border-none hover:shadow-glow smooth-transition group">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-gradient-accent rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 smooth-transition">
                      <Icon className="w-10 h-10 text-accent-foreground" />
                    </div>
                    <div className="text-4xl font-bold text-foreground mb-2">{achievement.number}</div>
                    <p className="text-muted-foreground font-medium">{achievement.text}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Legacy Story */}
          <div className="glass-card rounded-3xl p-12 mb-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="outline" className="mb-6 text-lg px-4 py-2">Our Heritage</Badge>
                <h3 className="text-4xl font-bold text-foreground mb-6">
                  The Mission: Educational Legacy
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Over a century and decade of education legacy was bequeathed to the holy city of Varanasi 
                  when Gyandeep English School announced the starting of its session in 1999. The torch of 
                  learning has been passed from generation to generation, and we have grown to such dimensions 
                  qualitatively and numerically that the name of Gyandeep mesmerizes academicians.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Gyandeep is a unique co-educational school for children from pre-nursery to XI. It is designed 
                  to impart integrated education, drawing the best from Indian culture and tradition while 
                  embracing modern pedagogical approaches.
                </p>
                <Button variant="accent" size="lg">
                  Read Our Complete Story
                </Button>
              </div>
              <div className="relative">
                <img
                  src={missionImage}
                  alt="Gyandeep Mission and Values"
                  className="w-full h-96 object-cover rounded-2xl shadow-elegant"
                />
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-foreground mb-4">Our Core Values</h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The foundation pillars that guide our educational philosophy and shape our students' character.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="glass-card border-none hover:shadow-elegant smooth-transition group cursor-pointer"
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-gradient-hero rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 smooth-transition">
                      <Icon className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary smooth-transition">
                      {value.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
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

export default GyandeepAbout;