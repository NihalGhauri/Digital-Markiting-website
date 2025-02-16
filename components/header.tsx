"use client";


import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { 
  Menu, X, Home, Briefcase, 
  Users, PhoneCall, Sun, Moon, 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const navigation: NavItem[] = [
  { 
    label: "Home", 
    href: "#home", 
    icon: <Home className="w-5 h-5" /> 
  },
  { 
    label: "Services", 
    href: "#services", 
    icon: <Briefcase className="w-5 h-5" />
  },
  { 
    label: "About", 
    href: "#about", 
    icon: <Users className="w-5 h-5" /> 
  },
  { 
    label: "Contact", 
    href: "#contact", 
    icon: <PhoneCall className="w-5 h-5" /> 
  }
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (href: string) => {
    setIsOpen(false);
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const MotionLink = motion(Link);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-background border-b border-border transition-all duration-300",
        {
          "shadow-lg py-2 backdrop-blur-md": isScrolled,
          "py-4": !isScrolled,
        }
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <MotionLink
            href="/"
            className="relative group flex items-center space-x-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative text-lg md:text-xl font-bold">
              Viral Spark Media Agency
            </span>
          </MotionLink>

          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <button
                key={item.label}
                onClick={() => handleScrollTo(item.href)}
                className="px-4 py-2 flex items-center space-x-2 group relative"
              >
                {item.icon}
                <span className="text-sm font-medium">{item.label}</span>
                <motion.div
                  className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary origin-left rounded-full"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full hover:bg-primary/10 transition-colors"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={isOpen ? "close" : "open"}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </motion.div>
                  </AnimatePresence>
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="w-80 p-0 bg-white text-black">
                <div className="bg-primary/90 p-6">
                  <h2 className="text-xl font-bold text-primary-foreground">
                    Viral Spark Media Agency
                  </h2>
                </div>
                
                <nav className="p-4 bg-white">
                  {navigation.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => handleScrollTo(item.href)}
                      className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-primary/10 transition-colors"
                    >
                      {item.icon}
                      <span className="font-medium">{item.label}</span>
                    </button>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}