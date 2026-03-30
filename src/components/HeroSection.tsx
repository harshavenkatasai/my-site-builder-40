import { motion } from "framer-motion";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[500px] md:min-h-[600px] flex items-center">
      <div className="absolute inset-0">
        <img src={heroBanner} alt="Students learning data skills" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero/60" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-40"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight max-w-2xl">
          DATA SKILLS <span className="font-light opacity-80">FOR THE</span>
          <br />
          <span className="font-extrabold">NEXT GENERATION</span>
        </h1>
        <p className="mt-4 text-primary-foreground/80 text-base md:text-lg max-w-md">
          Empowering Gen Z with cutting-edge data skills for a tech-driven future
        </p>
        <div className="flex gap-4 mt-8">
          <a href="https://forms.gle/2QxkPazAorFYsQKF9" target="_blank" rel="noopener noreferrer" className="px-7 py-3 bg-primary text-primary-foreground rounded-full font-semibold text-sm hover:opacity-90 transition-opacity">
            ENROLL NOW
          </a>
          <a href="https://chat.whatsapp.com/DV7HpnTSRWo5MpqaUYDLxy" target="_blank" rel="noopener noreferrer" className="px-7 py-3 bg-secondary text-foreground rounded-full font-semibold text-sm hover:opacity-90 transition-opacity">
            CONTACT US
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
