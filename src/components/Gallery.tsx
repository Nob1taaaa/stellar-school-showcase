import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, Play, Download, ExternalLink, Image as ImageIcon, Video } from "lucide-react";
import activitiesImage from "@/assets/gyandeep-activities.jpg";

const Gallery = () => {
  const mediaItems = [
    {
      type: "video",
      title: "Gyandeep Public School Annual Function 2024",
      thumbnail: activitiesImage,
      description: "Highlights from our spectacular annual cultural function featuring student performances.",
      duration: "8:45",
      category: "Events"
    },
    {
      type: "image",
      title: "Science Exhibition Winners",
      thumbnail: activitiesImage,
      description: "Our brilliant students showcasing their innovative science projects.",
      category: "Academic"
    },
    {
      type: "image",
      title: "Sports Day Championship",
      thumbnail: activitiesImage,
      description: "Athletic excellence and team spirit displayed during our annual sports day.",
      category: "Sports"
    },
    {
      type: "image",
      title: "Cultural Heritage Celebration",
      thumbnail: activitiesImage,
      description: "Students celebrating Indian culture through traditional dance and music.",
      category: "Cultural"
    },
    {
      type: "video",
      title: "Campus Life at Gyandeep",
      thumbnail: activitiesImage,
      description: "A day in the life of our students showcasing the vibrant campus environment.",
      duration: "5:20",
      category: "Campus"
    },
    {
      type: "image",
      title: "Achievement Awards Ceremony",
      thumbnail: activitiesImage,
      description: "Recognizing outstanding academic and extracurricular achievements.",
      category: "Achievements"
    }
  ];

  const categories = ["All", "Events", "Academic", "Sports", "Cultural", "Campus", "Achievements"];

  return (
    <section id="gallery" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Camera className="w-8 h-8 text-accent mr-3" />
              <Badge variant="secondary" className="text-lg px-6 py-2">Memories & Moments</Badge>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Photo & Video <span className="text-gradient">Gallery</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore the vibrant life at Gyandeep Public School through our collection of memorable moments, 
              achievements, and celebrations.
            </p>
          </div>

          {/* Featured Video */}
          <div className="glass-card rounded-2xl p-8 mb-16 relative overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="relative group">
                <img
                  src={activitiesImage}
                  alt="Featured School Video"
                  className="w-full h-80 object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-black/40 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 smooth-transition">
                  <Button variant="glass" size="lg" className="text-white">
                    <Play className="w-8 h-8 mr-3" />
                    Watch Video
                  </Button>
                </div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-accent text-accent-foreground">
                    <Video className="w-4 h-4 mr-2" />
                    Featured Video
                  </Badge>
                </div>
                <div className="absolute bottom-4 right-4">
                  <Badge variant="secondary">8:45</Badge>
                </div>
              </div>
              <div>
                <Badge variant="outline" className="mb-4">Latest Upload</Badge>
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  Gyandeep Public School - A Journey of Excellence
                </h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Take a virtual tour through our beautiful campus and witness the vibrant student life, 
                  state-of-the-art facilities, and the passion for learning that defines Gyandeep Public School.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" size="lg">
                    <Play className="w-5 h-5 mr-2" />
                    Watch Full Video
                  </Button>
                  <Button variant="outline" size="lg">
                    <Download className="w-5 h-5 mr-2" />
                    Download Media Kit
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "hero" : "outline"}
                size="sm"
                className="smooth-transition"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Media Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {mediaItems.map((item, index) => (
              <Card key={index} className="glass-card border-none hover:shadow-elegant smooth-transition group overflow-hidden">
                <div className="relative">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-105 smooth-transition"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 smooth-transition flex items-center justify-center">
                    <Button
                      variant="glass"
                      size="sm"
                      className="opacity-0 group-hover:opacity-100 smooth-transition"
                    >
                      {item.type === "video" ? (
                        <Play className="w-4 h-4 mr-2" />
                      ) : (
                        <ImageIcon className="w-4 h-4 mr-2" />
                      )}
                      View
                    </Button>
                  </div>
                  <div className="absolute top-3 left-3">
                    <Badge variant={item.type === "video" ? "default" : "secondary"}>
                      {item.type === "video" ? (
                        <Video className="w-3 h-3 mr-1" />
                      ) : (
                        <ImageIcon className="w-3 h-3 mr-1" />
                      )}
                      {item.type}
                    </Badge>
                  </div>
                  {item.duration && (
                    <div className="absolute top-3 right-3">
                      <Badge variant="secondary">{item.duration}</Badge>
                    </div>
                  )}
                  <div className="absolute bottom-3 left-3">
                    <Badge variant="outline">{item.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary smooth-transition">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="glass-card p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <p className="text-sm text-muted-foreground">Photos</p>
            </div>
            <div className="glass-card p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-accent mb-2">50+</div>
              <p className="text-sm text-muted-foreground">Videos</p>
            </div>
            <div className="glass-card p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-success mb-2">25+</div>
              <p className="text-sm text-muted-foreground">Events Covered</p>
            </div>
            <div className="glass-card p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-foreground mb-2">Monthly</div>
              <p className="text-sm text-muted-foreground">Updates</p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Want to see more memories?
            </h3>
            <p className="text-muted-foreground mb-6">
              Follow us on social media for daily updates and behind-the-scenes moments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                <ExternalLink className="w-5 h-5 mr-2" />
                View Complete Gallery
              </Button>
              <Button variant="outline" size="lg">
                <Download className="w-5 h-5 mr-2" />
                Download School Brochure
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;