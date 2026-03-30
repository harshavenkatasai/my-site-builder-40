import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-nav text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img src={logo} alt="DataGenZ Academy Logo" className="w-8 h-8 rounded-lg object-contain" />
            <div className="leading-tight">
              <span className="font-bold text-sm tracking-wide">DataGenZ</span>
              <span className="block text-[10px] tracking-[0.25em] uppercase opacity-80">Academy</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#courses" className="flex items-center gap-1 hover:opacity-80 transition-opacity">Courses <ChevronDown className="w-3 h-3" /></a>
            <a href="#why-us" className="flex items-center gap-1 hover:opacity-80 transition-opacity">Why Us <ChevronDown className="w-3 h-3" /></a>
            <button onClick={() => setAboutOpen(true)} className="hover:opacity-80 transition-opacity">About</button>
            <a href="#contact" className="hover:opacity-80 transition-opacity">Contact</a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="https://forms.gle/2QxkPazAorFYsQKF9" target="_blank" rel="noopener noreferrer" className="px-5 py-2 bg-secondary text-foreground rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">ENROLL NOW</a>
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
            <button onClick={() => { setAboutOpen(true); setMobileOpen(false); }} className="block text-sm font-medium text-left">About</button>
            <a href="#contact" className="block text-sm font-medium">Contact</a>
            <div className="flex gap-3 pt-2">
              <a href="https://forms.gle/2QxkPazAorFYsQKF9" target="_blank" rel="noopener noreferrer" className="px-5 py-2 bg-secondary text-foreground rounded-full text-sm font-semibold">ENROLL NOW</a>
              <a href="https://chat.whatsapp.com/DV7HpnTSRWo5MpqaUYDLxy" target="_blank" rel="noopener noreferrer" className="px-5 py-2 bg-accent text-accent-foreground rounded-full text-sm font-semibold">CONTACT US</a>
            </div>
          </div>
        )}
      </nav>

      <Sheet open={aboutOpen} onOpenChange={setAboutOpen}>
        <SheetContent side="right" className="w-full sm:max-w-lg">
          <SheetHeader>
            <SheetTitle className="text-xl font-bold text-foreground">About Us – DataGenz Academy</SheetTitle>
          </SheetHeader>
          <ScrollArea className="h-[calc(100vh-100px)] pr-4 mt-4">
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                DataGenz Academy is a modern training institute focused on empowering the next generation with industry-ready data skills. Our mission is to help students and working professionals, especially from non-IT backgrounds, successfully transition into high-demand IT roles.
              </p>
              <p>
                We specialize in practical, job-oriented training in <strong className="text-foreground">Data Analytics, Power BI, and Microsoft Azure</strong>, designed to match real industry requirements. Our programs are structured to take you from beginner to job-ready with hands-on projects, real-time case studies, and expert guidance.
              </p>
              <p>
                At DataGenz Academy, we believe that anyone can build a successful tech career with the right skills and support. That's why we focus on:
              </p>
              <ul className="space-y-2 ml-1">
                <li>✔ Easy-to-understand teaching (no coding background required)</li>
                <li>✔ Real-world project experience</li>
                <li>✔ Career guidance & interview preparation</li>
                <li>✔ Affordable learning for everyone</li>
              </ul>
              <p className="font-semibold text-foreground">Our goal is simple:</p>
              <p>👉 To help All generations and non-IT learners build a successful career in the data industry.</p>
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Navbar;
