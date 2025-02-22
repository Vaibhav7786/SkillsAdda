import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What makes Skills Adda different?",
    answer: "Skills Adda offers industry-aligned curriculum, hands-on projects, and personalized mentorship from experts, ensuring you're job-ready upon completion.",
  },
  {
    question: "How are the courses structured?",
    answer: "Our courses combine live sessions, practical assignments, and real-world projects. We focus on both theoretical knowledge and practical implementation.",
  },
  {
    question: "Do you provide placement assistance?",
    answer: "Yes, we offer comprehensive placement support including resume building, mock interviews, and direct connections with our industry partners.",
  },
  {
    question: "Are there any prerequisites for joining?",
    answer: "Most courses are designed for beginners, but some advanced courses may require basic knowledge. Our counselors can guide you to the right course.",
  },
  {
    question: "What is the mode of learning?",
    answer: "We offer hybrid learning with both online and offline options. You can choose the mode that best suits your schedule and learning style.",
  },
  {
    question: "Do you provide certification?",
    answer: "Yes, upon course completion, you receive an industry-recognized certification that validates your skills to potential employers.",
  },
];

const sectionVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, staggerChildren: 0.1 },
  },
};

const itemVariants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
};

export default function FAQSection() {
  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-accent/5 to-background">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text"
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.div
          variants={sectionVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <Card className="backdrop-blur-sm bg-card/90 border-cyan-500/20">
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    custom={index}
                  >
                    <AccordionItem value={`item-${index}`} className="border-cyan-500/20">
                      <AccordionTrigger className="text-left hover:text-cyan-400 transition-colors">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
