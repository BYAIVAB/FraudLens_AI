import React, { useState, useEffect, useRef } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import { Shield, Home } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [pinned, setPinned] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActive(null);
        setPinned(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  const handleSetActive = (item: string | null) => {
    if (!pinned) {
      setActive(item);
    }
  };

  const handleItemClick = (item: string) => {
    if (active === item && pinned) {
      setPinned(false);
      setActive(null);
    } else {
      setActive(item);
      setPinned(true);
    }
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <div
      ref={navRef}
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        { "bg-[#000000]/80 backdrop-blur-sm shadow-lg": scrolled },
        className
      )}
    >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
            {/* Left: Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl">
              <Shield className="h-8 w-8 text-white" />
            </div>
                <span className="text-2xl font-bold text-white">
                FraudLens
            </span>
          </div>
          
            {/* Center: Navlinks Pill (Absolutely Centered) */}
            <div className="absolute left-1/2 -translate-x-1/2">
                <div className="flex items-center bg-gray-900/50 backdrop-blur-sm rounded-full border border-white/20 shadow-lg p-2">
                    {/* Home Button */}
                    <Button 
                      variant="ghost" 
                      className="text-white hover:bg-gray-700/50 rounded-full px-4 py-2"
                      onClick={handleHomeClick}
                    >
                      <Home className="h-4 w-4 mr-2" />
                      
                    </Button>
                    
                    <Menu setActive={handleSetActive} className="bg-transparent dark:bg-transparent border-none shadow-none !px-4 !py-2">
                        <MenuItem setActive={handleSetActive} onClick={handleItemClick} active={active} item="Features">
                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink to="/check">Transaction Form</HoveredLink>
                            <HoveredLink to="/#transaction-checker">Transaction Checker</HoveredLink>
                            <HoveredLink to="/#transaction-explanation">Transaction Explanation</HoveredLink>
                        </div>
                        </MenuItem>
                        <MenuItem setActive={handleSetActive} onClick={handleItemClick} active={active} item="Solutions">
                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink to="/#dashboard">Dashboard</HoveredLink>
                            <HoveredLink to="/#result-panel">Result Panel</HoveredLink>
                        </div>
                        </MenuItem>
                        <MenuItem setActive={handleSetActive} onClick={handleItemClick} active={active} item="Pricing">
                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink to="/#individual-business">Individual Business</HoveredLink>
                            <HoveredLink to="/#enterprise-business">Enterprise Business</HoveredLink>
          </div>
                        </MenuItem>
                    </Menu>
          </div>
        </div>

            {/* Right: Actions Pill */}
            <div className="flex items-center space-x-2 bg-gray-900/50 backdrop-blur-sm rounded-full border border-white/20 shadow-lg p-2">
                <Button variant="ghost" className="text-white hover:bg-gray-700/50 rounded-full">
                Sign In
                </Button>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-4 py-2 h-auto shadow-lg hover:shadow-xl transition-all duration-200 rounded-full">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
  );
}

export default Navbar;