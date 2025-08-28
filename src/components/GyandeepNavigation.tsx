import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Download, User } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Academic", href: "#academic" },
    { name: "Admissions", href: "#admissions" },
    { name: "Facilities", href: "#facilities" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Top Header */}
      <div className="bg-primary text-primary-foreground py-2 text-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Helpline: 0542-2612080, 7309433152, 9839173720</span>
                <span className="sm:hidden">Call: 0542-2612080</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-primary-foreground/80 text-xs sm:text-sm px-2 sm:px-3">
                <User className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                <span className="hidden sm:inline">Student App</span>
                <span className="sm:hidden">Student</span>
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-primary-foreground/80 text-xs sm:text-sm px-2 sm:px-3">
                <User className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                <span className="hidden sm:inline">Teacher App</span>
                <span className="sm:hidden">Teacher</span>
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-primary-foreground/80 text-xs sm:text-sm px-2 sm:px-3 hidden sm:flex">
                Online Classes
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="fixed top-12 left-0 right-0 z-50 glass-card border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-hero flex items-center justify-center shadow-glow">
                <span className="text-lg sm:text-2xl font-bold text-primary-foreground">G</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl sm:text-2xl font-bold text-gradient">Gyandeep Public School</h1>
                <p className="text-xs sm:text-sm text-muted-foreground">Dharsauna, Cholapur, Varanasi-221101</p>
                <p className="text-xs text-muted-foreground hidden md:block">Affiliated to CBSE (10+2) New Delhi | School Code: 71458</p>
              </div>
              <div className="sm:hidden">
                <h1 className="text-lg font-bold text-gradient">Gyandeep</h1>
                <p className="text-xs text-muted-foreground">Public School</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary smooth-transition font-medium relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-hero group-hover:w-full smooth-transition"></span>
                </a>
              ))}
              <Button variant="hero" size="sm" className="text-sm sm:text-base px-3 sm:px-4">
                <Download className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">Admission Form</span>
                <span className="sm:hidden">Apply</span>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X /> : <Menu />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden py-4 border-t border-white/10 animate-slide-up">
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="mobile-nav-item text-foreground hover:text-primary smooth-transition hover:bg-accent/10 rounded-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <Button variant="hero" size="sm" className="w-fit mt-4 mx-6">
                  <Download className="w-4 h-4 mr-2" />
                  Admission Form
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;