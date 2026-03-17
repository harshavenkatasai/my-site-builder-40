import { BarChart3, Clock, Database, Code } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

const dataAnalyticsSyllabus = [
  {
    category: "MySQL",
    topics: [
      "MySQL Workbench Installation and Importing Workbench tables",
      "Introduction to databases, SQL",
      "Select, From, Where",
      "Logic Operators, Arithmetic Operators",
      "Range and Membership Operators",
      "Alias, Distinct & Limit - Data types",
      "String functions - Numeric Functions",
      "Temporal functions - Like/not like and wildcards - Primary & Foreign key",
      "Joins - Inner-Left-Right",
      "Aggregate functions - Order by - Group by - Having",
    ],
  },
  {
    category: "Advance SQL",
    topics: [
      "Create Database & Tables",
      "INSERT, ALTER, UPDATE, DROP, DELETE, TRUNCATE",
      "Regular expressions, Conditional logic",
      "Subqueries, Temporary tables, Windows function",
      "Index, Common table expressions (CTE), Stored procedures (basics), Views",
    ],
  },
  {
    category: "Python",
    topics: [
      "Introduction to Python",
      "Fundamentals, Variables",
      "String Formatting",
      "Conditionals, loops in Python",
      "Data Types/Structures in Python",
      "Python Functions, Class and inheritance, Important Modules",
      "PySpark Introduction and Demo (basic to intermediate functions)",
    ],
  },
  {
    category: "Power BI",
    topics: [
      "Getting Started with Power BI with Intro (2 components), Dashboard vs Report",
      "Install Power BI Desktop, Import data, Frontend overview",
      "Create a Sample report, exploring the visuals, Save & Publish, Visuals Basics",
      "Charts (Bar, Column, Line, Area, Combination, Ribbon, Pie, Doughnut), DAX (CM, CC)",
      "Maps, Gauge, Card, Table, Matrices, R-Script Visuals, KPI (What, Why, When)",
      "Report Components in PPT (Refresh failures, Gateways, ODBC, other Components - DAX Studio, Tabular Editor)",
    ],
  },
  {
    category: "Azure (PPT Explanation and Demo)",
    topics: [
      "ADF (Azure Data Factory)",
      "Databricks",
      "Azure DB",
      "Azure Blob Storage, Azure Blob Storage Gen2, OneLake",
      "Azure VM",
      "Fabric (Data Factory, Data Engineering, Data Warehouse, and different Data tools - DFgen1, DFgen2, Dashboard, Scorecard, Report, Pipeline, Lakehouse, CosmosDB, KQL, Semantic Model, SQL Database, Notebook etc.)",
    ],
  },
];

const courses = [
  {
    icon: BarChart3,
    title: "Data Analytics",
    description:
      "A comprehensive program covering Power BI, SQL, Python, and Azure Data Tools. Master end-to-end data analysis from data collection to actionable insights.",
    hasSyllabus: true,
  },
  {
    icon: Clock,
    title: "Power BI",
    description:
      "Build interactive dashboards, create DAX measures, and transform raw data into stunning visual reports for business decision-making.",
    hasSyllabus: false,
  },
  {
    icon: Database,
    title: "SQL",
    description:
      "Learn to write complex queries, manage relational databases, and perform data manipulation to extract meaningful insights from large datasets.",
    hasSyllabus: false,
  },
  {
    icon: Code,
    title: "Python with PySpark",
    description:
      "Master Python programming and PySpark for big data processing, automation, and scalable data engineering pipelines.",
    hasSyllabus: false,
  },
];

const CoursesSection = () => {
  const [syllabusOpen, setSyllabusOpen] = useState(false);

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
              <h3 className="text-lg font-bold text-foreground mb-3">
                {course.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                {course.description}
              </p>
              <button
                onClick={() => {
                  if (course.hasSyllabus) setSyllabusOpen(true);
                }}
                className="inline-block px-6 py-2 border border-foreground/20 rounded-full text-sm font-medium text-foreground hover:bg-muted transition-colors"
              >
                View Course
              </button>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={syllabusOpen} onOpenChange={setSyllabusOpen}>
        <DialogContent className="max-w-2xl max-h-[85vh]">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-foreground">
              Data Analytics — Full Syllabus
            </DialogTitle>
          </DialogHeader>
          <ScrollArea className="h-[60vh] pr-4">
            <div className="space-y-6">
              {dataAnalyticsSyllabus.map((section) => (
                <div key={section.category}>
                  <h3 className="text-base font-semibold text-primary mb-2">
                    {section.category}
                  </h3>
                  <ul className="space-y-1.5 ml-4">
                    {section.topics.map((topic, i) => (
                      <li
                        key={i}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CoursesSection;
