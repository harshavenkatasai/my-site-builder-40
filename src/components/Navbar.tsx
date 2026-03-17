import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-nav text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center font-bold text-sm text-foreground">D</div>
          <div className="leading-tight">
            <span className="font-bold text-sm tracking-wide">DataGenZ</span>
            <span className="block text-[10px] tracking-[0.25em] uppercase opacity-80">Academy</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#courses" className="flex items-center gap-1 hover:opacity-80 transition-opacity">Courses <ChevronDown className="w-3 h-3" /></a>
          <a href="#why-us" className="flex items-center gap-1 hover:opacity-80 transition-opacity">Why Us <ChevronDown className="w-3 h-3" /></a>
          <a href="#about" className="hover:opacity-80 transition-opacity">About</a>
          <a href="#contact" className="hover:opacity-80 transition-opacity">Contact</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#enroll" className="px-5 py-2 bg-secondary text-foreground rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">ENROLL NOW</a>
          <a href="https://chat.whatsapp.com/DV7HpnTSRWo5MpqaUYDLxy" target="_blank" rel="noopener noreferrer" className="px-5 py-2 bg-accent text-accent-foreground rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">CONTACT US</a>
        </div>

        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-nav border-t border-primary-foreground/10 px-6 py-4 space-y-3">
          <a href="#courses" className="block text-sm font-medium">Courses</a>
          <a href="#why-us" className="block text-sm font-medium">Why Us</a>
          <a href="#about" className="block text-sm font-medium">About</a>
          <a href="#contact" className="block text-sm font-medium">Contact</a>
          <div className="flex gap-3 pt-2">
            <a href="#enroll" className="px-5 py-2 bg-secondary text-foreground rounded-full text-sm font-semibold">ENROLL NOW</a>
            <a href="#contact" className="px-5 py-2 bg-accent text-accent-foreground rounded-full text-sm font-semibold">CONTACT US</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
