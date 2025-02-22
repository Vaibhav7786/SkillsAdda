import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const courses = [
  {
    id: "digital-marketing",
    title: "Digital Marketing Mastery",
    description: "Learn modern digital marketing strategies and tools",
    duration: "12 weeks",
    image: "https://images.unsplash.com/photo-1557804483-ef3ae78eca57?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "business-leadership",
    title: "Business Leadership",
    description: "Develop essential leadership and management skills",
    duration: "8 weeks",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80",
  },
  // ... other courses ...
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
              Our Courses
            </motion.h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course) => (
                <Link key={course.id} href={`/courses/${course.id}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.02 }}
                    className="cursor-pointer"
                  >
                    <Card className="overflow-hidden h-full bg-card/90 backdrop-blur-sm border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300">
                      <CardHeader className="p-0">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="w-full h-48 object-cover"
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
