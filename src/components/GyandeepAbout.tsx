import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, Target, Lightbulb, Globe, Users, BookOpen, Award, Star, 
  MapPin, Clock, UserCheck, GraduationCap, Building, TreePine
} from "lucide-react";
import studentsImage from "@/assets/gyandeep-students.jpg";
import missionImage from "@/assets/gyandeep-mission.jpg";

const GyandeepAbout = () => {
  const facilities = [
    { icon: TreePine, title: "Big Green Campus", description: "2 acres of sprawling green campus for healthy learning environment" },
    { icon: Building, title: "Spacious Classrooms", description: "Well-ventilated classrooms designed for comfortable learning" },
    { icon: UserCheck, title: "Day Boarding Classes", description: "Special support classes for students who need extra attention" },
    { icon: BookOpen, title: "Smart Classes", description: "Educom smart classes with graphic animation and 3D images" },
    { icon: Star, title: "Abacus Classes", description: "Mental math development through structured abacus training" },
    { icon: Heart, title: "Hobby Classes", description: "Dance, Music, Craft, and Sports for creative development" },
    { icon: Award, title: "Science Laboratory", description: "Fully equipped lab for practical science learning" },
    { icon: Globe, title: "Transportation", description: "Safe and reliable transport facility for students" }
  ];

  const values = [
    {
      icon: Target,
      title: "Quality Education",
      description: "We believe in quality education with a friendly and educational learning environment for students."
    },
    {
      icon: Heart,
      title: "Etiquette Before Education",
      description: "Our motto emphasizes character building and values alongside academic excellence."
    },
    {
      icon: Globe,
      title: "Holistic Development", 
      description: "30+ activities conducted by the school for overall student development and growth."
    },
    {
      icon: Lightbulb,
      title: "Modern Teaching Methods",
      description: "Latest teaching techniques with smart classes, simulations, and traditional methods combined."
    }
  ];

  const achievements = [
    { icon: Users, number: "1500", text: "Students Enrolled" },
    { icon: BookOpen, number: "2003", text: "Established" },
    { icon: Award, number: "30+", text: "Activities & Programs" },
    { icon: Star, number: "2", text: "Acres Campus" }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-hero mx-auto max-w-4xl animate-fade-in">
              <Badge variant="outline" className="mb-4 sm:mb-6 text-base sm:text-lg px-4 sm:px-6 py-2 border-blue-primary text-blue-primary">About Our Institution</Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 sm:mb-8">
                We Are An <span className="text-blue-primary">Awesome Team</span>
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                Gyandeep Public School is a private co-educational English medium school located at 
                Dharsauna Cholapur Varanasi, sprawling across 2 acres of green land.
              </p>
            </div>
          </div>

          {/* Leadership & Foundation */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center mb-16 sm:mb-20 md:mb-24">
            {/* Image */}
            <div className="relative group animate-on-scroll">
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-hero">
                <img
                  src={studentsImage}
                  alt="Gyandeep Students in Learning Environment"
                  className="w-full h-80 sm:h-96 md:h-[500px] object-cover group-hover:scale-105 smooth-transition"
                />
              </div>
              <div className="absolute -bottom-4 sm:-bottom-8 -right-4 sm:-right-8 glass-card p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-glow">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 sm:mb-2">2003</div>
                  <div className="text-xs sm:text-sm text-muted-foreground font-medium">Founded</div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6 sm:space-y-8 animate-on-scroll animate-delay-200">
              <div>
                <Badge variant="outline" className="mb-3 sm:mb-4 text-sm sm:text-base">Leadership</Badge>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6 flex items-center">
                  <UserCheck className="w-8 h-8 sm:w-10 sm:h-10 text-accent mr-3 sm:mr-4" />
                  Founded by Mr. Manoj Kumar Jaiswal
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 sm:mb-8">
                  The school was started in 2003 and was the first English medium school in the area. 
                  Under the visionary leadership of Mr. Manoj Kumar Jaiswal, we have grown to become 
                  a leading educational institution in the region.
                </p>
              </div>

              <div>
                <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 sm:mb-4 flex items-center">
                  <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-accent mr-2 sm:mr-3" />
                  Strategic Location
                </h4>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 sm:mb-8">
                  Located on Azamgarh Road, just 14 km from Pandeypur, our school provides easy 
                  accessibility while maintaining a peaceful learning environment away from city chaos.
                </p>
              </div>

              <Button variant="hero" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
                Learn More About Our Legacy
              </Button>
            </div>
          </div>

          {/* Achievement Stats */}
          <div className="mobile-grid gap-4 sm:gap-6 md:gap-8 mb-16 sm:mb-20 md:mb-24">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card key={index} className="glass-card border-none interactive-card group animate-on-scroll gpu-accelerated" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardContent className="mobile-card-padding text-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-accent rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 smooth-transition">
                      <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-accent-foreground" />
                    </div>
                    <div className="text-3xl sm:text-4xl font-bold text-foreground mb-2">{achievement.number}</div>
                    <p className="text-muted-foreground font-medium text-sm sm:text-base">{achievement.text}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* School Mission */}
          <div className="glass-card rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-12 mb-16 sm:mb-20 md:mb-24 relative overflow-hidden animate-on-scroll">
            <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
            <div className="relative z-10 grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
              <div>
                <Badge variant="outline" className="mb-4 sm:mb-6 text-base sm:text-lg px-4 py-2">Our Mission</Badge>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
                  "Etiquette Before Education"
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 sm:mb-8">
                  We believe in quality education and provide a friendly and educational learning environment 
                  to students. Our strength of 1500 students is supported by committed and qualified teachers 
                  who ensure each child receives personalized attention.
                </p>
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  <div className="text-center p-3 sm:p-4 bg-accent/10 rounded-xl">
                    <div className="text-xl sm:text-2xl font-bold text-accent mb-1">1500</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Students</div>
                  </div>
                  <div className="text-center p-3 sm:p-4 bg-primary/10 rounded-xl">
                    <div className="text-xl sm:text-2xl font-bold text-primary mb-1">N-10</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Classes</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src={missionImage}
                  alt="Gyandeep Mission and Values"
                  className="w-full h-80 sm:h-96 object-cover rounded-xl sm:rounded-2xl shadow-elegant"
                />
              </div>
            </div>
          </div>

          {/* School Facilities */}
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">School Facilities</h3>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              State-of-the-art facilities designed to provide the best learning environment for our students.
            </p>
          </div>

          <div className="mobile-grid gap-4 sm:gap-6 md:gap-8 mb-16 sm:mb-20">
            {facilities.map((facility, index) => {
              const Icon = facility.icon;
              return (
                <Card
                  key={index}
                  className="glass-card border-none interactive-card group cursor-pointer animate-on-scroll"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <CardContent className="mobile-card-padding text-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-hero rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 smooth-transition">
                      <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary-foreground" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4 group-hover:text-primary smooth-transition">
                      {facility.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{facility.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Core Values */}
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">Our Core Values</h3>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              The foundation pillars that guide our educational philosophy and shape our students' character.
            </p>
          </div>

          <div className="mobile-grid gap-4 sm:gap-6 md:gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="glass-card border-none interactive-card group cursor-pointer animate-on-scroll"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
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

export default GyandeepAbout;