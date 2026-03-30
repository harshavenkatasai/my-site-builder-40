import { useState } from "react";
import logo from "@/assets/logo.png";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";

const Footer = () => {
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <>
      <footer className="bg-footer text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src={logo} alt="DataGenZ Academy Logo" className="w-8 h-8 rounded-lg object-contain" />
                <span className="font-bold">DataGenZ Academy</span>
              </div>
              <p className="text-sm text-primary-foreground/60 max-w-xs">
                Empowering the next generation with data skills for a tech-driven future.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-sm mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/60">
                <li><a href="#courses" className="hover:text-primary-foreground transition-colors">Courses</a></li>
                <li><button onClick={() => setAboutOpen(true)} className="hover:text-primary-foreground transition-colors">About</button></li>
                <li><a href="https://chat.whatsapp.com/DV7HpnTSRWo5MpqaUYDLxy" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-sm mb-4">Courses</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/60">
                <li><a href="#courses" className="hover:text-primary-foreground transition-colors">Data Analytics</a></li>
                <li><a href="#courses" className="hover:text-primary-foreground transition-colors">Power BI</a></li>
                <li><a href="#courses" className="hover:text-primary-foreground transition-colors">SQL</a></li>
                <li><a href="#courses" className="hover:text-primary-foreground transition-colors">Python with PySpark</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10">
          <div className="max-w-7xl mx-auto px-6 py-6 text-center text-xs text-primary-foreground/40">
            © 2026 DataGenZ Academy. All rights reserved.
          </div>
        </div>
      </footer>

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

export default Footer;
