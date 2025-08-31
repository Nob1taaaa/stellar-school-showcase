import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Download, User } from "lucide-react";
import schoolLogo from "/lovable-uploads/eee98edb-6bfe-4a7e-b26b-21d9bc08b5a4.png";

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
      <div className="bg-gradient-hero text-primary-foreground py-2 md:py-3 text-sm shadow-golden">
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
      <nav className="sticky top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-golden-accent/20 shadow-golden">
        <div className="container mx-auto px-4" style={{ border: '1px solid rgba(113, 138, 120, 1)' }}>
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="h-10 sm:h-12 md:h-16 lg:h-20 flex-shrink-0">
                <img
                  src={schoolLogo}
                  alt="Gyandeep Public School Logo"
                  className="h-full w-auto object-contain"
                />
              </div>
              <div className="min-w-0 flex-1">
                <h1 className="text-xs sm:text-sm md:text-lg lg:text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent truncate">
                  Gyandeep Public School
                </h1>
                <p className="text-xs md:text-sm text-foreground/70 font-medium hidden md:block truncate">
                  Dharsauna, Cholapur, Varanasi-221101
                </p>
                <p className="text-xs text-foreground/60 hidden xl:block font-medium truncate">
                  Affiliated to CBSE (10+2) New Delhi | School Code: 71458
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center space-x-6 lg:space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary smooth-transition font-semibold relative group text-lg"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-hero group-hover:w-full smooth-transition rounded-full shadow-golden"></span>
                </a>
              ))}
              <Button variant="default" size="lg" className="bg-gradient-hero text-primary-foreground font-semibold shadow-golden hover:shadow-glow px-4 lg:px-6 py-2 lg:py-3">
                <Download className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">Admission Form</span>
                <span className="sm:hidden">Apply</span>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="xl:hidden">
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
            <div className="xl:hidden py-4 border-t border-golden-accent/20 animate-slide-up bg-white/95">
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="mobile-nav-item text-foreground hover:text-primary smooth-transition hover:bg-gradient-accent/10 rounded-lg font-semibold"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <Button variant="default" size="lg" className="w-fit mt-4 mx-6 bg-gradient-hero text-primary-foreground font-semibold shadow-golden">
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
