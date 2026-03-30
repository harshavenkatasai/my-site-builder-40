import { GraduationCap, Building2, Target, Award } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: GraduationCap,
    title: "Expert Instructors",
    description: "Learn from industry experts and experienced data collaborators.",
  },
  {
    icon: Building2,
    title: "Hands-On Training",
    description: "Gain practical, real-world experience with live projects and assignments.",
  },
  {
    icon: Target,
    title: "Career-Focused",
    description: "Develop skills to land top tech roles in data and cloud industries.",
  },
  {
    icon: Award,
    title: "Certification",
    description: "Get certified for careers in data engineering, Power BI and Azure.",
  },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12"
        >
          WHY DATAGENZ ACADEMY?
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-primary/10 flex items-center justify-center">
                <reason.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-base font-bold text-foreground mb-2">{reason.title}</h3>
              <p className="text-muted-foreground text-sm">{reason.description}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="#enroll"
            className="inline-block px-8 py-3 bg-accent text-accent-foreground rounded-full font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            GET STARTED
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
