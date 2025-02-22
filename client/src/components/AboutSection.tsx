import { motion } from "framer-motion";
import { Card } from "./ui/card";

interface AboutSectionProps {
  // Add props if needed
}

export default function AboutSection({}: AboutSectionProps) {
  return (
    <section className="py-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container"
      >
        <Card className="p-8">
          <h2 className="text-3xl font-bold mb-6">About Us</h2>
          <p className="text-lg text-muted-foreground">
            // Add your about content here
          </p>
        </Card>
      </motion.div>
    </section>
  );
}