import { Button } from "@/components/ui/button";
import { Target, Lightbulb, Heart, Trophy } from "lucide-react";
import studentsImage from "@/assets/students-learning.jpg";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for the highest standards in education and personal development."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Embracing cutting-edge teaching methods and technology for modern learning."
    },
    {
      icon: Heart,
      title: "Community",
      description: "Building strong relationships and fostering a supportive learning environment."
    },
    {
      icon: Trophy,
      title: "Achievement",
      description: "Celebrating success and empowering students to reach their full potential."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About <span className="text-gradient">Elite Academy</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              For over 50 years, we've been at the forefront of educational excellence, 
              shaping leaders and innovators who make a difference in the world.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-elegant">
                <img
                  src={studentsImage}
                  alt="Students collaborating at Elite Academy"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Years of Excellence</div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Empowering Tomorrow's Leaders
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At Elite Academy, we believe education is more than just acquiring knowledge—it's 
                about developing critical thinking, creativity, and character. Our innovative 
                curriculum combines traditional academic rigor with modern practical applications.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                With state-of-the-art facilities, world-class faculty, and a diverse student body 
                from over 80 countries, we create an environment where every student can thrive 
                and reach their full potential.
              </p>
              <Button variant="hero" size="lg">
                Learn More About Us
              </Button>
            </div>
          </div>

          {/* Values Grid */}
          {/* Mobile Horizontal Scroll */}
          <div className="lg:hidden overflow-x-auto pb-4">
            <div className="flex space-x-4 w-max">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="text-center p-6 glass-card rounded-xl hover:shadow-elegant smooth-transition w-72 flex-shrink-0"
                  >
                    <div className="w-16 h-16 accent-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-accent-foreground" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground mb-3">{value.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Desktop Grid */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 glass-card rounded-xl hover:shadow-elegant smooth-transition"
                >
                  <div className="w-16 h-16 accent-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-3">{value.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;