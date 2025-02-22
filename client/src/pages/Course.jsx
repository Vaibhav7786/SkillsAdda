import { motion } from "framer-motion";
import { useParams } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BookDemoDialog from "@/components/BookDemoDialog";

const courseDetails = {
  "digital-marketing": {
    title: "Digital Marketing Mastery",
    description: "Master the art of digital marketing with our comprehensive course. Learn SEO, social media marketing, content strategy, and more.",
    duration: "12 weeks",
    image: "https://images.unsplash.com/photo-1557804483-ef3ae78eca57?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Social Media Marketing",
      "Search Engine Optimization",
      "Content Marketing",
      "Email Marketing",
      "Analytics and Reporting",
    ],
  },
  // Add more courses as needed
};

export default function Course() {
  const { id } = useParams();
  const course = courseDetails[id] || {};

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <section className="py-20 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-[400px] object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-lg" />
              </div>
              <div className="space-y-6">
                <motion.h1
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text"
                >
                  {course.title}
                </motion.h1>
                <Badge variant="secondary" className="bg-cyan-500/10 text-cyan-400">
                  {course.duration}
                </Badge>
                <p className="text-lg text-muted-foreground">
                  {course.description}
                </p>
                <div className="flex space-x-4">
                  <BookDemoDialog />
                  <Button variant="outline">Download Syllabus</Button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-16"
            >
              <Card className="backdrop-blur-sm bg-card/90 border-cyan-500/20">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
                    Course Highlights
                  </h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {course.highlights?.map((highlight, index) => (
                      <motion.li
                        key={highlight}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-2 text-muted-foreground"
                      >
                        <span className="w-2 h-2 bg-cyan-400 rounded-full" />
                        <span>{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
