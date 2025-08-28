import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User, 
  Phone, 
  Mail, 
  Clock,
  MapPin,
  GraduationCap,
  BookOpen,
  Users,
  Calendar
} from "lucide-react";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "🙏 Welcome to Gyandeep Public School! I'm here to help you with admissions, school information, and any questions you may have.",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');

  const quickQuestions = [
    { icon: GraduationCap, text: "Admission Process", response: "Admissions are open for classes 1-9 & 11 for 2024-25. Please visit our office with required documents or call +91-8010200666 for more details." },
    { icon: BookOpen, text: "Academic Programs", response: "We offer comprehensive education from Nursery to Class 10 with CBSE curriculum, smart classes, and 30+ extracurricular activities." },
    { icon: Users, text: "School Timings", response: "Summer: 7:30 AM-11:30 AM (Apr-May), Regular: 7:45 AM-1:00 PM (Jul-Nov), Winter: 8:30 AM-1:40 PM (Dec-Mar)" },
    { icon: Phone, text: "Contact Information", response: "📞 Helpline: +91-8010200666\n📧 Email: info@gyandeeppublicschool.com\n📍 Address: Paharsauna, Varanasi, Uttar Pradesh" },
    { icon: Calendar, text: "School Events", response: "We regularly conduct morning assemblies, sports day, cultural programs, quiz competitions, and parent-teacher meetings. Check our notice board for latest events!" },
    { icon: MapPin, text: "Campus Tour", response: "We welcome campus visits! Our beautiful 2-acre campus features modern classrooms, smart boards, science labs, sports facilities, and lush green environment." }
  ];

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Simple bot response logic
    setTimeout(() => {
      let botResponse = "Thank you for your question! For detailed information, please contact our admission office at +91-8010200666 or visit our campus at Paharsauna, Varanasi.";
      
      if (inputText.toLowerCase().includes('admission')) {
        botResponse = "Admissions are currently open for classes 1-9 & 11 for academic year 2024-25. Required documents: Birth certificate, previous school records, passport photos. Visit our office for form submission.";
      } else if (inputText.toLowerCase().includes('fee')) {
        botResponse = "For fee structure details, please visit our admission office or call +91-8010200666. We offer affordable education with comprehensive facilities.";
      } else if (inputText.toLowerCase().includes('timing')) {
        botResponse = "School timings vary by season:\n🌅 Summer (Apr-May): 7:30 AM - 11:30 AM\n🌞 Regular (Jul-Nov): 7:45 AM - 1:00 PM\n❄️ Winter (Dec-Mar): 8:30 AM - 1:40 PM";
      }

      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    }, 1000);

    setInputText('');
  };

  const handleQuickQuestion = (question: any) => {
    const userMessage: Message = {
      id: messages.length + 1,
      text: question.text,
      isBot: false,
      timestamp: new Date()
    };

    const botMessage: Message = {
      id: messages.length + 2,
      text: question.response,
      isBot: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage, botMessage]);
  };

  return (
    <>
      {/* Chatbot Trigger Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className={`${!isOpen ? 'scale-100' : 'scale-0'} smooth-transition w-16 h-16 rounded-full bg-gradient-hero text-primary-foreground shadow-elegant hover:shadow-glow p-0 overflow-hidden`}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {/* School Logo Background */}
            <img 
              src="/lovable-uploads/db34c759-b7d4-425e-894e-d268e0e36bd0.png" 
              alt="Gyandeep Public School Logo" 
              className="absolute inset-0 w-full h-full object-cover rounded-full opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-hero/20 rounded-full"></div>
            <MessageCircle className="relative z-10 w-6 h-6 text-white drop-shadow-lg" />
          </div>
        </Button>
        
        {/* Notification Badge */}
        <div className={`${!isOpen ? 'scale-100' : 'scale-0'} smooth-transition absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full flex items-center justify-center`}>
          <span className="text-xs font-bold text-accent-foreground">1</span>
        </div>
      </div>

      {/* Chatbot Window */}
      <div className={`${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'} smooth-transition fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-3rem)]`}>
        <Card className="glass-card border-none shadow-hero overflow-hidden">
          {/* Header */}
          <CardHeader className="bg-gradient-hero text-primary-foreground p-4 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <img 
                src="/lovable-uploads/db34c759-b7d4-425e-894e-d268e0e36bd0.png" 
                alt="School Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/db34c759-b7d4-425e-894e-d268e0e36bd0.png" 
                    alt="Gyandeep Logo" 
                    className="w-8 h-8 rounded-full object-cover"
                  />
                </div>
                <div>
                  <CardTitle className="text-lg text-white">Gyandeep Assistant</CardTitle>
                  <div className="flex items-center gap-2 text-white/90 text-sm">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    Online
                  </div>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 p-2"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>

          {/* Messages */}
          <CardContent className="p-0">
            <ScrollArea className="h-80">
              <div className="p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-3 ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  >
                    {message.isBot && (
                      <div className="w-8 h-8 rounded-full bg-gradient-accent flex items-center justify-center flex-shrink-0">
                        <img 
                          src="/lovable-uploads/db34c759-b7d4-425e-894e-d268e0e36bd0.png" 
                          alt="Bot" 
                          className="w-6 h-6 rounded-full object-cover"
                        />
                      </div>
                    )}
                    <div
                      className={`max-w-[75%] px-3 py-2 rounded-2xl text-sm ${
                        message.isBot
                          ? 'bg-secondary text-secondary-foreground rounded-bl-md'
                          : 'bg-gradient-hero text-primary-foreground rounded-br-md'
                      }`}
                    >
                      <p className="whitespace-pre-line">{message.text}</p>
                      <div className={`text-xs mt-1 ${message.isBot ? 'text-muted-foreground' : 'text-white/70'}`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </div>
                    </div>
                    {!message.isBot && (
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                        <User className="w-4 h-4 text-primary-foreground" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Quick Questions */}
            <div className="p-4 border-t border-border">
              <p className="text-sm text-muted-foreground mb-3">Quick Questions:</p>
              <div className="grid grid-cols-2 gap-2">
                {quickQuestions.map((question, index) => {
                  const Icon = question.icon;
                  return (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuickQuestion(question)}
                      className="text-xs h-auto p-2 justify-start"
                    >
                      <Icon className="w-3 h-3 mr-1 flex-shrink-0" />
                      <span className="truncate">{question.text}</span>
                    </Button>
                  );
                })}
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border">
              <div className="flex gap-2">
                <Input
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Ask about admissions, fees, timings..."
                  className="text-sm"
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <Button
                  onClick={handleSendMessage}
                  size="sm"
                  className="bg-gradient-hero text-primary-foreground px-3"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Chatbot;