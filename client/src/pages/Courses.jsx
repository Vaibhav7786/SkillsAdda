import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import dataAnalyticsImg from "./Images/DA.png";
import fullStackImg from "./Images/FS.png";
import excelAIImg from "./Images/AE.png";
import digitalMarketingImg from "./Images/DM.png";
import pythonImg from "./Images/Python.png";
import dataScienceImg from "./Images/DS.png";


const courses = [
  {
    id: "data-analytics",
    title: "Data Analytics",
    description: "Master AI-driven data analytics and visualization techniques.",
    duration: "6 Months",
    image: dataAnalyticsImg,
  },
  {
    id: "full-stack-development",
    title: "Full Stack Development", 
    description: "Learn to build and deploy modern web applications.",
    duration: "6 Months",
    image: fullStackImg,
  },
  {
    id: "advanced-excel-with-ai",
    title: "Advance Excel with AI",
    description: "Enhance Excel skills with AI-powered automation.",
    duration: "2 Months",
    image: excelAIImg,
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "Learn modern digital marketing strategies and tools.",
    duration: "6 Months",
    image: digitalMarketingImg,
  },
  {
    id: "python",
    title: "Python",
    description: "Master Python programming with AI-powered coding.",
    duration: "2 Months",
    image: pythonImg,
  },
  {
    id: "data-science",
    title: "Data Science",
    description: "Explore AI-driven data processing and machine learning.",
    duration: "9 Months",
    image: dataScienceImg,
  },
];

export default function Courses() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <section className="py-20 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text"
            >
             <span className="-mt-12 block"> Our Courses </span> 
            </motion.h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course) => (
                <Link key={course.id} href={`/courses/${course.id}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="cursor-pointer"
                  >
                    <Card className="overflow-hidden h-full bg-card/90 backdrop-blur-sm border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300">
                      <CardHeader className="p-0">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110 hover:brightness-125"
                        />
                      </CardHeader>
                      <CardContent className="p-6">
                        <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
                        <p className="text-muted-foreground mb-4">{course.description}</p>
                        <Badge variant="secondary" className="bg-cyan-500/10 text-cyan-400">
                          {course.duration}
                        </Badge>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}