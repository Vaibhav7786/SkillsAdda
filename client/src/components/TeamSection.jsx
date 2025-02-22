import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "David Chen",
    role: "Head of Education",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Emily Rodriguez",
    role: "Lead Instructor",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Michael Lee",
    role: "Technical Director",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Amanda Foster",
    role: "Student Success Manager",
    image: "https://images.unsplash.com/photo-1516880711640-ef7db81be3e1?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "James Wilson",
    role: "Curriculum Developer",
    image: "https://images.unsplash.com/photo-1521830101529-057b1dfd9784?auto=format&fit=crop&w=800&q=80",
  },
];

const cardVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.95,
    rotateX: -10
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  hover: {
    scale: 1.05,
    rotateX: 5,
    rotateY: 5,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

export default function TeamSection() {
  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-accent/5 to-background">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text"
        >
          Meet Our Team
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover="hover"
              variants={cardVariants}
              style={{ perspective: 1000 }}
            >
              <Card className="overflow-hidden hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 backdrop-blur-sm bg-card/90">
                <CardContent className="p-6 text-center">
                  <Avatar className="w-32 h-32 mx-auto mb-4 ring-2 ring-cyan-500/50">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback>{member.name[0]}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}