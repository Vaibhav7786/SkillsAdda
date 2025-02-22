import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  BookOpen, 
  Users, 
  Award, 
  Briefcase, 
  Target, 
  Laptop 
} from "lucide-react";

const reasons = [
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "Industry-Relevant Curriculum",
    description: "Our courses are designed and updated regularly with input from industry experts.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Expert Mentorship",
    description: "Learn from experienced professionals who guide you throughout your journey.",
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Recognized Certification",
    description: "Earn certificates that are valued by top companies in the industry.",
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: "Placement Support",
    description: "Get comprehensive placement assistance and connect with our hiring partners.",
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Practical Learning",
    description: "Gain hands-on experience through real-world projects and assignments.",
  },
  {
    icon: <Laptop className="w-8 h-8" />,
    title: "Flexible Learning",
    description: "Choose between online and offline modes with lifetime access to resources.",
  },
];

const cardVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

export default function WhySection() {
  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-background via-accent/5 to-background">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text"
        >
          Why Choose Skills Adda?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              variants={cardVariants}
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full backdrop-blur-sm bg-card/90 border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mb-4 text-cyan-400">{reason.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground">{reason.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
