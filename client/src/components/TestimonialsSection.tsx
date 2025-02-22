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
    avatar: "https://images.unsplash.com/photo-1708860028064-3303a016e88f",
  },
  {
    name: "Alex Chen",
    role: "Web Development Student",
    content: "The instructors are incredibly knowledgeable and supportive. The hands-on projects gave me real-world experience.",
    avatar: "https://images.unsplash.com/photo-1708860028233-10da73ede2a0",
  },
  {
    name: "Sarah Johnson",
    role: "Business Leadership Graduate",
    content: "The leadership program helped me develop crucial management skills. I was promoted within months of completing the course.",
    avatar: "https://images.unsplash.com/photo-1711980012199-2697edfc8794",
  },
  {
    name: "Raj Patel",
    role: "Data Science Alumni",
    content: "The data science course provided me with the perfect blend of theory and practical applications. Highly recommended!",
    avatar: "https://images.unsplash.com/photo-1708860027560-bf3c060b26f4",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-4 md:px-8 bg-accent/5">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Student Success Stories
        </motion.h2>
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <Card className="bg-card/50">
                    <CardContent className="p-6 text-center">
                      <Avatar className="w-20 h-20 mx-auto mb-4">
                        <AvatarImage
                          src={testimonial.avatar}
                          alt={testimonial.name}
                        />
                        <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                      </Avatar>
                      <p className="text-lg mb-4">"{testimonial.content}"</p>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-muted-foreground">{testimonial.role}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
