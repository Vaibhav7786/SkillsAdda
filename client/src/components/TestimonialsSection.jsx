import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Priya Shah",
    role: "Digital Marketing Graduate",
    content: "Skills Adda transformed my career. The practical approach and industry-relevant curriculum helped me land my dream job.",
    avatar: "https://images.unsplash.com/photo-1708860028064-3303a016e88f?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Alex Chen",
    role: "Web Development Student",
    content: "The instructors are incredibly knowledgeable and supportive. The hands-on projects gave me real-world experience.",
    avatar: "https://images.unsplash.com/photo-1708860028233-10da73ede2a0?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Sarah Johnson",
    role: "Business Leadership Graduate",
    content: "The leadership program helped me develop crucial management skills. I was promoted within months of completing the course.",
    avatar: "https://images.unsplash.com/photo-1711980012199-2697edfc8794?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Raj Patel",
    role: "Data Science Alumni",
    content: "The data science course provided me with the perfect blend of theory and practical applications. Highly recommended!",
    avatar: "https://images.unsplash.com/photo-1708860027560-bf3c060b26f4?auto=format&fit=crop&w=800&q=80",
  },
];

const cardVariants = {
  initial: {
    opacity: 0,
    scale: 0.9,
    y: 20,
    rotateX: -5
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  hover: {
    scale: 1.02,
    rotateX: 5,
    rotateY: 5,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-accent/5 via-background to-accent/5">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text"
        >
          Student Success Stories
        </motion.h2>
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <motion.div
                  variants={cardVariants}
                  initial="initial"
                  whileInView="animate"
                  whileHover="hover"
                  style={{ perspective: 1000 }}
                >
                  <Card className="bg-card/50 backdrop-blur-sm border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <Avatar className="w-20 h-20 mx-auto mb-4 ring-2 ring-cyan-500/50 hover:ring-4 transition-all duration-300">
                          <AvatarImage
                            src={testimonial.avatar}
                            alt={testimonial.name}
                          />
                          <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                        </Avatar>
                      </motion.div>
                      <motion.p 
                        className="text-lg mb-4 leading-relaxed italic text-muted-foreground"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        "{testimonial.content}"
                      </motion.p>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        <h3 className="font-semibold bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
                          {testimonial.name}
                        </h3>
                        <p className="text-muted-foreground">{testimonial.role}</p>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="border-cyan-500/20 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-colors duration-300" />
          <CarouselNext className="border-cyan-500/20 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-colors duration-300" />
        </Carousel>
      </div>
    </section>
  );
}