import { BookOpen, Users, Trophy, User, Menu, X, Home, BarChart3, Briefcase, Settings } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", icon: Home, href: "/" },
    { name: "Learn", icon: BookOpen, href: "/learn" },
    { name: "Dashboard", icon: BarChart3, href: "/dashboard" },
    { name: "Projects", icon: Trophy, href: "/projects" },
    { name: "Community", icon: Users, href: "/community" },
    { name: "Portfolio", icon: Briefcase, href: "/portfolio" },
    { name: "Profile", icon: User, href: "/profile" },
    { name: "Admin", icon: Settings, href: "/admin" }
  ];

  return (
    <>
      {/* Particles Background */}
      <div className="particles-bg" />
      
      <nav className="fixed top-0 left-0 right-0 z-50 glass-nav transition-theme">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-soft">
                <BookOpen className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">SkillForge</h1>
                <p className="text-xs text-muted-foreground">Growth Hub</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="glass-button px-4 py-2 rounded-xl flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-all duration-300 text-sm font-medium"
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </a>
              ))}
            </div>

            {/* Desktop Auth Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <ThemeToggle />
              <Button variant="ghost" className="glass-button text-muted-foreground hover:text-foreground" asChild>
                <a href="/signin">Sign In</a>
              </Button>
              <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground shadow-soft border-0">
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center space-x-3 lg:hidden">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                className="glass-button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden mt-6 pb-6 border-t border-white/10 animate-fade-in">
              <div className="flex flex-col space-y-3 mt-6">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="glass-button p-3 rounded-xl flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-all duration-300"
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </a>
                ))}
                <div className="flex flex-col space-y-3 mt-6 pt-3 border-t border-white/10">
                  <Button variant="ghost" className="glass-button text-muted-foreground hover:text-foreground justify-start" asChild>
                    <a href="/signin">Sign In</a>
                  </Button>
                  <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground justify-start border-0">
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;