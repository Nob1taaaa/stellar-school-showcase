import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! Welcome to Gyandeep Public School. How can I help you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const quickReplies = [
    "Admission Process",
    "Fee Structure", 
    "School Timings",
    "Contact Information",
    "Academic Programs"
  ];

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: getBotResponse(inputValue),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const getBotResponse = (userMessage: string) => {
    const msg = userMessage.toLowerCase();
    if (msg.includes('admission')) {
      return "For admission inquiries, please visit our school during office hours or call us at +91-XXXXXXXXXX. Our admission team will be happy to assist you!";
    } else if (msg.includes('fee')) {
      return "Our fee structure varies by class. Please contact our office for detailed fee information and available payment options.";
    } else if (msg.includes('timing')) {
      return "School timings vary by season:\n• Summer: 7:30 AM - 11:30 AM\n• Regular: 7:45 AM - 1:00 PM\n• Winter: 8:30 AM - 1:40 PM";
    } else if (msg.includes('contact')) {
      return "You can reach us at:\nPhone: +91-XXXXXXXXXX\nEmail: info@gyandeeppublic.com\nAddress: Dharsauna, Varanasi";
    } else {
      return "Thank you for your query! For specific information, please contact our office or visit the school. Our staff will be happy to help you.";
    }
  };

  const handleQuickReply = (reply: string) => {
    setInputValue(reply);
    handleSendMessage();
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 border-2 border-white/20"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-primary-foreground" />
          ) : (
            <div className="relative">
              <img 
                src="/lovable-uploads/06790a85-251d-4190-b057-98a49dbc2040.png" 
                alt="Gyandeep School Logo"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full animate-pulse"></div>
            </div>
          )}
        </Button>
      </div>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-80 sm:w-96">
          <Card className="shadow-2xl border-none bg-white/95 backdrop-blur-lg animate-scale-in">
            <CardHeader className="bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-t-lg p-4">
              <div className="flex items-center space-x-3">
                <img 
                  src="/lovable-uploads/06790a85-251d-4190-b057-98a49dbc2040.png" 
                  alt="Gyandeep School Logo"
                  className="w-8 h-8 rounded-full object-cover border-2 border-white/30"
                />
                <div>
                  <CardTitle className="text-lg font-bold">Gyandeep Assistant</CardTitle>
                  <p className="text-xs opacity-90">Online • Ready to help</p>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="p-0">
              {/* Messages Area */}
              <ScrollArea className="h-80 p-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                    >
                      <div
                        className={`max-w-xs px-4 py-2 rounded-2xl ${
                          message.isBot
                            ? 'bg-muted text-foreground'
                            : 'bg-gradient-to-r from-primary to-accent text-primary-foreground'
                        } animate-fade-in`}
                      >
                        <p className="text-sm whitespace-pre-line">{message.text}</p>
                        <p className="text-xs opacity-70 mt-1">
                          {message.timestamp.toLocaleTimeString([], { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                          })}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>

              {/* Quick Replies */}
              <div className="p-3 border-t bg-muted/30">
                <div className="flex flex-wrap gap-2 mb-3">
                  {quickReplies.map((reply) => (
                    <Button
                      key={reply}
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuickReply(reply)}
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {reply}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Input Area */}
              <div className="p-4 border-t bg-white">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Type your message..."
                    className="flex-1 px-3 py-2 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                  />
                  <Button
                    onClick={handleSendMessage}
                    size="sm"
                    className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity rounded-xl"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default Chatbot;