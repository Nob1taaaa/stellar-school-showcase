import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Download, ExternalLink, Bell, TrendingUp } from "lucide-react";

const NoticeBoard = () => {
  const notices = [
    {
      title: "Admission open for the classes 1 to 9 & 11 for 2024-25",
      date: "2024-01-15",
      type: "Admission",
      priority: "high",
      description: "Applications are now being accepted for admission to classes 1-9 and 11 for the academic year 2024-25."
    },
    {
      title: "Annual Sports Day - March 2024",
      date: "2024-02-20",
      type: "Event",
      priority: "medium",
      description: "Annual Sports Day will be conducted in March 2024. Participation forms available in the office."
    },
    {
      title: "Parent-Teacher Meeting Schedule",
      date: "2024-02-10",
      type: "Meeting",
      priority: "medium",
      description: "Quarterly parent-teacher meetings scheduled for all classes. Check individual class timings."
    },
    {
      title: "Summer Vacation Schedule 2024",
      date: "2024-01-30",
      type: "Holiday",
      priority: "low",
      description: "Summer vacation dates and important instructions for students and parents."
    },
    {
      title: "Board Examination Guidelines",
      date: "2024-01-25",
      type: "Academic",
      priority: "high",
      description: "Important guidelines and schedule for CBSE board examinations 2024."
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-destructive text-destructive-foreground";
      case "medium": return "bg-accent text-accent-foreground";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Admission": return "🎓";
      case "Event": return "🎉";
      case "Meeting": return "👥";
      case "Holiday": return "🏖️";
      case "Academic": return "📚";
      default: return "📢";
    }
  };

  const getBlobColor = (type: string) => {
    switch (type) {
      case "Event": return "linear-gradient(135deg, #ff7a18, #ffd166)";
      case "Meeting": return "linear-gradient(135deg, #3b82f6, #22d3ee)";
      case "Holiday": return "linear-gradient(135deg, #22c55e, #a3e635)";
      case "Academic": return "linear-gradient(135deg, #a855f7, #60a5fa)";
      default: return "linear-gradient(135deg, #fb7185, #f472b6)";
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Bell className="w-8 h-8 text-accent mr-3" />
              <Badge variant="secondary" className="text-lg px-6 py-2">Latest Updates</Badge>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Notice <span className="text-gradient">Board</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay updated with the latest announcements, events, and important information from Gyandeep Public School.
            </p>
          </div>

          {/* Featured Notice */}
          <div className="glass-card rounded-2xl p-8 mb-12 relative overflow-hidden border border-accent/20">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-accent opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <Badge className={getPriorityColor("high")}>🚨 Important</Badge>
                <span className="text-sm text-muted-foreground">Latest Update</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {notices[0].title}
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                {notices[0].description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg">
                  <Download className="w-5 h-5 mr-2" />
                  Download Application Form
                </Button>
                <Button variant="outline" size="lg">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  View Details
                </Button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {notices.slice(1).map((notice, index) => (
              <div key={index} className="nb-anim">
                <div className="card">
                  <div className="bg">
                    <div className="flex items-center justify-between mb-3 px-4 pt-4">
                      <Badge className={getPriorityColor(notice.priority)} variant="secondary">
                        {getTypeIcon(notice.type)} {notice.type}
                      </Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(notice.date).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="px-4">
                      <h4 className="text-lg font-bold text-foreground mb-2">{notice.title}</h4>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{notice.description}</p>
                    </div>
                    <div className="px-4 pb-4 mt-auto">
                      <Button variant="outline" className="w-full">Read More</Button>
                    </div>
                  </div>
                  <div className="blob" style={{ background: getBlobColor(notice.type) }} />
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="glass-card p-6 rounded-xl text-center">
              <div className="text-2xl font-bold text-primary mb-2">15+</div>
              <p className="text-sm text-muted-foreground">Active Notices</p>
            </div>
            <div className="glass-card p-6 rounded-xl text-center">
              <div className="text-2xl font-bold text-accent mb-2">5</div>
              <p className="text-sm text-muted-foreground">This Week</p>
            </div>
            <div className="glass-card p-6 rounded-xl text-center">
              <div className="text-2xl font-bold text-success mb-2">98%</div>
              <p className="text-sm text-muted-foreground">Read Rate</p>
            </div>
            <div className="glass-card p-6 rounded-xl text-center">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <p className="text-sm text-muted-foreground">Updated Daily</p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Don't miss any important updates!
            </h3>
            <p className="text-muted-foreground mb-6">
              Subscribe to our notifications to receive instant updates about school announcements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                <Bell className="w-5 h-5 mr-2" />
                Subscribe to Notifications
              </Button>
              <Button variant="outline" size="lg">
                View All Notices
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoticeBoard;
