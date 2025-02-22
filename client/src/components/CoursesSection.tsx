import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const courses = [
  {
    title: "Digital Marketing Mastery",
    description: "Learn modern digital marketing strategies and tools",
    duration: "12 weeks",
    image: "https://images.unsplash.com/photo-1557804483-ef3ae78eca57",
  },
  {
    title: "Business Leadership",
    description: "Develop essential leadership and management skills",
    duration: "8 weeks",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
  },
  {
    title: "Web Development",
    description: "Master full-stack web development",
    duration: "16 weeks",
    image: "https://images.unsplash.com/photo-1526676537331-7747bf8278fc",
  },
  {
    title: "Data Science Fundamentals",
    description: "Learn data analysis and machine learning",
    duration: "14 weeks",
    image: "https://images.unsplash.com/photo-1521312639858-5b042542f2a5",
  },
  {
    title: "Social Media Strategy",
    description: "Create effective social media campaigns",
    duration: "6 weeks",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48",
  },
  {
    title: "Content Creation",
    description: "Master content writing and strategy",
    duration: "10 weeks",
    image: "https://images.unsplash.com/photo-1522204538344-922f76ecc041",
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

interface CoursesSectionProps {
  // Add props if needed
}

export default function CoursesSection({}: CoursesSectionProps) {
  return (
    <section className="py-16">
      <div className="container">
        <motion.div
          variants={cardVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <Card className="p-8">
            <h2 className="text-3xl font-bold mb-6">Our Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <motion.div
                  key={course.title}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="overflow-hidden h-full">
                    <CardHeader className="p-0">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-48 object-cover"
                      />
                    </CardHeader>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2">
                        {course.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {course.description}
                      </p>
                      <Badge variant="secondary">{course.duration}</Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}