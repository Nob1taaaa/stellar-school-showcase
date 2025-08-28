import GyandeepNavigation from "@/components/GyandeepNavigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BookOpen, Users, Award, GraduationCap } from "lucide-react";
import heroImage from "@/assets/school-campus-main.png";
import studentsImage from "@/assets/students-learning.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <GyandeepNavigation />
      
      {/* Hero Section with Background Image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
        </div>
        
        {/* Content Overlay */}
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl mb-4 text-blue-secondary font-medium">GYANDEEP ACADEMY</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Together We'll
              <br />
              <span className="text-gradient bg-gradient-to-r from-blue-secondary to-purple-vibrant bg-clip-text text-transparent">
                Shape Bright Futures
              </span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
              We believe every student deserves the opportunity to excel through quality education and innovative learning approaches.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-blue-primary hover:bg-blue-deep text-white px-8 py-3 text-lg shadow-hero">
                Explore Programs
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-primary px-8 py-3 text-lg">
                About Our School
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-16 bg-background relative -mt-20 z-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white shadow-card hover:shadow-hero transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-blue-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Academic Excellence</h3>
                <p className="text-muted-foreground mb-4">
                  Gyandeep Academy was established with a commitment to academic excellence and holistic development.
                </p>
                <Button variant="ghost" className="text-blue-primary hover:text-blue-deep">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-card hover:shadow-hero transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-orange-vibrant/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-orange-vibrant" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Student Life</h3>
                <p className="text-muted-foreground mb-4">
                  Our vibrant campus community fosters growth, friendship, and memorable experiences for every student.
                </p>
                <Button variant="ghost" className="text-orange-vibrant hover:text-orange-light">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-card hover:shadow-hero transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-vibrant/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-purple-vibrant" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Educational Excellence</h3>
                <p className="text-muted-foreground mb-4">
                  Our innovative teaching methods and comprehensive curriculum ensure outstanding educational outcomes.
                </p>
                <Button variant="ghost" className="text-purple-vibrant">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="relative">
              <div className="relative">
                <img 
                  src={studentsImage} 
                  alt="Students learning at Gyandeep Academy" 
                  className="rounded-2xl shadow-hero w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-primary/20 to-transparent rounded-2xl"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-vibrant/20 rounded-full blur-xl"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-orange-vibrant/20 rounded-full blur-lg"></div>
            </div>
            
            <div className="text-white">
              <p className="text-blue-secondary font-medium mb-4">About Gyandeep</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Excellence in
                <br />
                <span className="text-gradient bg-gradient-to-r from-orange-vibrant to-purple-vibrant bg-clip-text text-transparent">
                  Various Academic
                </span>
                <br />
                Disciplines
              </h2>
              <p className="text-lg text-gray-200 mb-8">
                Not only can our academy offer an environment rich in academic and cultural experiences, but we also provide comprehensive support for every student's journey.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-secondary rounded-full mr-4"></div>
                  <span className="text-gray-200">Access to all our premium courses</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-vibrant rounded-full mr-4"></div>
                  <span className="text-gray-200">Learn the latest educational methodologies</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-vibrant rounded-full mr-4"></div>
                  <span className="text-gray-200">Build strong foundation for future success</span>
                </div>
              </div>
              
              <Button className="bg-orange-vibrant hover:bg-orange-light text-white px-8 py-3 text-lg shadow-button">
                Read More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-blue-primary" />
              </div>
              <div className="text-3xl font-bold text-blue-primary mb-2">25+</div>
              <div className="text-sm text-muted-foreground">Years of Quality<br />Education Experience</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-vibrant/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-orange-vibrant" />
              </div>
              <div className="text-3xl font-bold text-orange-vibrant mb-2">2000+</div>
              <div className="text-sm text-muted-foreground">Qualified Teachers<br />and Language Experts</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-vibrant/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-vibrant" />
              </div>
              <div className="text-3xl font-bold text-purple-vibrant mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Success Rate<br />in Academic Excellence</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-deep/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-blue-deep" />
              </div>
              <div className="text-3xl font-bold text-blue-deep mb-2">5000+</div>
              <div className="text-sm text-muted-foreground">Learners Enrolled in<br />Educational Courses</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;