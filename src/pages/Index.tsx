import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CoursesSection from "@/components/CoursesSection";
import WhyUsSection from "@/components/WhyUsSection";
import MomentsSection from "@/components/MomentsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <CoursesSection />
      <WhyUsSection />
      <MomentsSection />
      <Footer />
    </div>
  );
};

export default Index;
