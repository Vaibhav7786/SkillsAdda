import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BookDemoDialog from "@/components/BookDemoDialog";
import { useState } from "react";

const courses = [
  {
    title: "Digital Marketing Mastery",
    description: "Learn modern digital marketing strategies and tools",
    duration: "12 weeks",
    image:
      "https://images.unsplash.com/photo-1557804483-ef3ae78eca57?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Business Leadership",
    description: "Develop essential leadership and management skills",
    duration: "8 weeks",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Web Development",
    description: "Master full-stack web development",
    duration: "16 weeks",
    image:
      "https://images.unsplash.com/photo-1526676537331-7747bf8278fc?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Data Science Fundamentals",
    description: "Learn data analysis and machine learning",
    duration: "14 weeks",
    image:
      "https://images.unsplash.com/photo-1521312639858-5b042542f2a5?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Social Media Strategy",
    description: "Create effective social media campaigns",
    duration: "6 weeks",
    image:
      "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Content Creation",
    description: "Master content writing and strategy",
    duration: "10 weeks",
    image:
      "https://images.unsplash.com/photo-1522204538344-922f76ecc041?auto=format&fit=crop&w=800&q=80",
  },
];

const cardVariants = {
  initial: {
    opacity: 0,
    y: 20,
    rotateX: -10,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.05,
    rotateY: 5,
    rotateX: 5,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

export default function CoursesSection() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isOpen,setIsOpen]=useState(false);

  const handleBookDemo = (course) => {
    setSelectedCourse(course);
    setIsOpen(true);
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-background via-accent/5 to-background">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text"
        >
          Our Courses
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              variants={cardVariants}
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              viewport={{ once: true }}
              style={{ perspective: 1000 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full bg-card/90 backdrop-blur-sm border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300">
                <CardHeader className="p-0">
                  <div className="relative group overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-48 object-cover transform transition-all duration-500 group-hover:scale-110 group-hover:brightness-125"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text transform transition-all duration-300 group-hover:scale-105">
                    {course.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2 transition-colors duration-300 group-hover:text-white/90">
                    {course.description}
                  </p>
                  <Badge
                    variant="secondary"
                    className="bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 transition-colors duration-300"
                  >
                    {course.duration}
                  </Badge>
                  <button
                    onClick={() => handleBookDemo(course)}
                    className="mt-4 text-cyan-500"
                  >
                    Book Demo
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      {selectedCourse && (
            <BookDemoDialog isOpen={isOpen} setIsOpen={setIsOpen}  />
          )}
    </section>
  );
}
