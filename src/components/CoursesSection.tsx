import { BarChart3, Clock, Database, Code } from "lucide-react";

const courses = [
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "A comprehensive program covering Power BI, SQL, Python, and Azure Data Tools. Master end-to-end data analysis from data collection to actionable insights.",
  },
  {
    icon: Clock,
    title: "Power BI",
    description: "Build interactive dashboards, create DAX measures, and transform raw data into stunning visual reports for business decision-making.",
  },
  {
    icon: Database,
    title: "SQL",
    description: "Learn to write complex queries, manage relational databases, and perform data manipulation to extract meaningful insights from large datasets.",
  },
  {
    icon: Code,
    title: "Python with PySpark",
    description: "Master Python programming and PySpark for big data processing, automation, and scalable data engineering pipelines.",
  },
];

const CoursesSection = () => {
  return (
    <section id="courses" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
          LEARN DATA SKILLS, BUILD YOUR FUTURE
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
