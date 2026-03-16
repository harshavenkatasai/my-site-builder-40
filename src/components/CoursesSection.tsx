import { BarChart3, Clock, Cloud } from "lucide-react";

const courses = [
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Master data analysis techniques and create compelling visualizations.",
  },
  {
    icon: Clock,
    title: "Power BI",
    description: "Learn to build interactive dashboards and real-time visualizations.",
  },
  {
    icon: Cloud,
    title: "Microsoft Azure",
    description: "Gain expertise in cloud computing and Azure data services.",
  },
];

const CoursesSection = () => {
  return (
    <section id="courses" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
          LEARN DATA SKILLS, BUILD YOUR FUTURE
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.title}
              className="bg-card border border-border rounded-xl p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <course.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">{course.title}</h3>
              <p className="text-muted-foreground text-sm mb-6">{course.description}</p>
              <a
                href="#"
                className="inline-block px-6 py-2 border border-foreground/20 rounded-full text-sm font-medium text-foreground hover:bg-muted transition-colors"
              >
                View Course
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
