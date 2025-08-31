import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Camera, Play, Download, ExternalLink, Image as ImageIcon, Video,
  Award, Trophy, Star, Users, Calendar, BookOpen
} from "lucide-react";
import AnimatedCampusCard from "@/components/AnimatedCampusCard";

const Gallery = () => {
  const realPhotos = [
    {
      image: "/lovable-uploads/5793a2d7-39eb-47f1-8378-cf6688e3fc63.png",
      title: "Morning Assembly - Discipline & Unity",
      description: "1500 students in perfect formation during daily morning assembly showcasing our values of discipline and unity.",
      category: "School Culture",
      featured: true
    },
    {
      image: "/lovable-uploads/759d8b35-7caa-44ea-a405-bbd7d9d07a26.png",
      title: "Beautiful Campus & Sports Facilities",
      description: "Our magnificent 2-acre campus with basketball court, landscaped grounds, and modern architecture.",
      category: "Campus Life",
      featured: true
    },
    {
      image: "/lovable-uploads/8b4b7aed-88f9-4ea8-9a81-19b5e3c9137b.png",
      title: "Traditional School Architecture",
      description: "Multi-story building with traditional Indian design elements and modern educational facilities.",
      category: "Infrastructure"
    },
    {
      image: "/lovable-uploads/a01561ee-2798-4641-8400-95961985d26a.png",
      title: "Lush Green Environment",
      description: "Beautifully maintained gardens and green spaces providing a peaceful learning environment.",
      category: "Campus Beauty"
    }
  ];

  const galleryStats = [
    { icon: Camera, number: "1000+", text: "Real Photos" },
    { icon: Video, number: "50+", text: "Campus Videos" },
    { icon: Award, number: "25+", text: "Events Documented" },
    { icon: Users, number: "1500", text: "Students Featured" }
  ];

  const categories = ["All", "School Culture", "Campus Life", "Infrastructure", "Campus Beauty", "Events", "Achievements"];

  const campusPhoto = realPhotos.find(p => p.title === "Beautiful Campus & Sports Facilities");

  return (
    <section id="gallery" className="py-16 sm:py-20 md:py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <Camera className="w-6 h-6 sm:w-8 sm:h-8 text-orange-vibrant mr-2 sm:mr-3" />
              <Badge variant="secondary" className="text-base sm:text-lg px-4 sm:px-6 py-2">Authentic Memories</Badge>
            </div>
            <h2 className="mobile-section-title font-bold text-foreground mb-6 sm:mb-8 animate-fade-in">
              Real Campus <span className="text-gradient">Gallery</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
              Authentic photographs showcasing the vibrant life, beautiful campus, and rich culture 
              of Gyandeep Public School.
            </p>
          </div>

          {campusPhoto ? (
            <div className="flex justify-center mb-12 sm:mb-16">
              <AnimatedCampusCard
                image={campusPhoto.image}
                title={campusPhoto.title}
                description={campusPhoto.description}
                category={campusPhoto.category}
              />
            </div>
          ) : null}

          {/* Featured Photos */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20 md:mb-24">
            {realPhotos.filter(photo => photo.featured).map((photo, index) => (
              <Card key={index} className="glass-card border-none overflow-hidden interactive-card group animate-on-scroll" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="relative">
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-64 sm:h-80 md:h-96 object-cover group-hover:scale-105 smooth-transition"
                  />
                  {(photo.category === "Campus Life" || photo.category === "School Culture") && (
                    <div className="rcg-outer">
                      <div className="rcg-dot" />
                      <div className="rcg-card">
                        <div className="rcg-ray" />
                        <div className="rcg-text">750k</div>
                        <div>Views</div>
                        <div className="rcg-line rcg-topl" />
                        <div className="rcg-line rcg-leftl" />
                        <div className="rcg-line rcg-bottoml" />
                        <div className="rcg-line rcg-rightl" />
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <Badge className="saffron-gradient text-white">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      Featured
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                    <Badge variant="outline" className="mb-2 sm:mb-3 text-white border-white/30 bg-white/10 backdrop-blur-sm">
                      {photo.category}
                    </Badge>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-3">{photo.title}</h3>
                    <p className="text-white/90 text-sm sm:text-base leading-relaxed">{photo.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 sm:mb-16">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className={`smooth-transition ${category === "All" ? "hero-gradient text-primary-foreground" : "hover:saffron-gradient hover:text-white"}`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* All Photos Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-16 sm:mb-20">
            {realPhotos.map((photo, index) => (
              <Card key={index} className="glass-card border-none overflow-hidden interactive-card group animate-on-scroll" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="relative">
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 smooth-transition"
                  />
                  {(photo.category === "Campus Life" || photo.category === "School Culture") && (
                    <div className="rcg-outer">
                      <div className="rcg-dot" />
                      <div className="rcg-card">
                        <div className="rcg-ray" />
                        <div className="rcg-text">750k</div>
                        <div>Views</div>
                        <div className="rcg-line rcg-topl" />
                        <div className="rcg-line rcg-leftl" />
                        <div className="rcg-line rcg-bottoml" />
                        <div className="rcg-line rcg-rightl" />
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 smooth-transition flex items-center justify-center">
                    <Button
                      variant="outline"
                      size="sm"
                      className="opacity-0 group-hover:opacity-100 smooth-transition bg-white/20 backdrop-blur-md border-white/30 text-white hover:bg-white/30"
                    >
                      <ImageIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      View
                    </Button>
                  </div>
                  <div className="absolute top-3 left-3">
                    <Badge variant="secondary" className="text-xs bg-white/90 text-foreground">
                      <ImageIcon className="w-3 h-3 mr-1" />
                      Photo
                    </Badge>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <Badge variant="outline" className="text-xs text-white border-white/50 bg-black/30 backdrop-blur-sm">
                      {photo.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-3 sm:p-4">
                  <h4 className="text-sm sm:text-base font-bold text-foreground mb-1 sm:mb-2 group-hover:text-primary smooth-transition line-clamp-2">
                    {photo.title}
                  </h4>
                  <p className="text-muted-foreground text-xs sm:text-sm line-clamp-2">
                    {photo.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-16 sm:mb-20">
            {galleryStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="glass-card border-none text-center animate-on-scroll" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardContent className="mobile-card-padding">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 saffron-gradient rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-orange-vibrant mb-1 sm:mb-2">{stat.number}</div>
                    <p className="text-muted-foreground font-medium text-sm sm:text-base">{stat.text}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="glass-card rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-12 text-center animate-on-scroll">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
                Experience Gyandeep Public School
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                These authentic photos showcase our commitment to providing a beautiful, disciplined, 
                and nurturing environment for all our 1500 students.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="default" size="lg" className="hero-gradient text-primary-foreground orange-glow">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Schedule Campus Visit
                </Button>
                <Button variant="outline" size="lg" className="hover:saffron-gradient hover:text-white smooth-transition">
                  <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Download School Brochure
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
