import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhySection from "@/components/WhySection";
import FAQSection from "@/components/FAQSection";

export default function About() {
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
              About Skills Adda
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="prose prose-invert max-w-none"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                Skills Adda is a premier educational technology platform dedicated to empowering individuals with cutting-edge skills for the digital age. Our mission is to bridge the gap between traditional education and industry demands through innovative learning experiences.
              </p>
            </motion.div>
          </div>
        </section>
        <WhySection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
