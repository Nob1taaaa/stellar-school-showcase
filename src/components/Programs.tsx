import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, BookOpen, Star } from "lucide-react";
import programsImage from "@/assets/programs-illustration.jpg";

const Programs = () => {
  const programs = [
    {
      category: "Undergraduate",
      title: "Bachelor of Computer Science",
      duration: "4 Years",
      students: "2,500+",
      rating: 4.9,
      description: "Cutting-edge curriculum covering AI, machine learning, and software engineering.",
      highlights: ["AI & Machine Learning", "Software Engineering", "Cybersecurity", "Data Science"],
      badge: "Most Popular"
    },
    {
      category: "Graduate",
      title: "Master of Business Administration",
      duration: "2 Years",
      students: "1,200+",
      rating: 4.8,
      description: "Transform your career with our internationally recognized MBA program.",
      highlights: ["Leadership", "Strategy", "Finance", "Global Business"],
      badge: "Executive Track"
    },
    {
      category: "Professional",
      title: "Digital Marketing Certificate",
      duration: "6 Months",
      students: "3,000+",
      rating: 4.7,
      description: "Master modern digital marketing strategies and tools in this intensive program.",
      highlights: ["SEO/SEM", "Social Media", "Analytics", "Content Strategy"],
      badge: "Fast Track"
    }
  ];

  return (
    <section id="programs" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-gradient">Programs</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose from our diverse range of programs designed to prepare you for 
              success in today's competitive world.
            </p>
          </div>

          {/* Hero Program Showcase */}
          <div className="glass-card rounded-2xl p-8 mb-16 relative overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <Badge variant="secondary" className="mb-4">Featured Program</Badge>
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  Future-Ready Education
                </h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Our programs are designed in collaboration with industry leaders to ensure 
                  you graduate with the skills and knowledge that employers demand.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Industry Partnerships", "Real Projects", "Mentorship", "Career Support"].map((feature) => (
                    <Badge key={feature} variant="outline">{feature}</Badge>
                  ))}
                </div>
                <Button variant="hero">
                  Explore All Programs
                </Button>
              </div>
              <div className="relative">
                <img
                  src={programsImage}
                  alt="Academic Programs at Elite Academy"
                  className="w-full h-80 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Programs Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl hover:shadow-elegant smooth-transition group"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline">{program.category}</Badge>
                  {program.badge && (
                    <Badge className="accent-gradient text-accent-foreground">
                      {program.badge}
                    </Badge>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary smooth-transition">
                  {program.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {program.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-1 mb-6">
                  {program.highlights.map((highlight) => (
                    <Badge key={highlight} variant="secondary" className="text-xs">
                      {highlight}
                    </Badge>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <Clock className="w-4 h-4 text-accent mx-auto mb-1" />
                    <div className="text-sm font-medium">{program.duration}</div>
                  </div>
                  <div className="text-center">
                    <Users className="w-4 h-4 text-accent mx-auto mb-1" />
                    <div className="text-sm font-medium">{program.students}</div>
                  </div>
                  <div className="text-center">
                    <Star className="w-4 h-4 text-accent mx-auto mb-1" />
                    <div className="text-sm font-medium">{program.rating}</div>
                  </div>
                </div>

                {/* CTA */}
                <Button variant="outline" className="w-full group-hover:variant-hero smooth-transition">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Learn More
                </Button>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Can't find the right program?
            </h3>
            <p className="text-muted-foreground mb-6">
              We offer over 200+ programs across various disciplines. 
              Explore our complete catalog or speak with an advisor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                View All Programs
              </Button>
              <Button variant="outline" size="lg">
                Speak with Advisor
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;