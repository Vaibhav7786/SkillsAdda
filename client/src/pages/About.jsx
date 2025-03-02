import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const testimonials = [
  {
    name: "Rahul Sharma",
    company: "Google",
    package: "24 LPA",
    image: "https://i.pravatar.cc/150?img=11",
  },
  {
    name: "Priya Patel",
    company: "Microsoft",
    package: "28 LPA",
    image: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "Amit Kumar",
    company: "Amazon",
    package: "26 LPA",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Neha Singh",
    company: "Meta",
    package: "30 LPA",
    image: "https://i.pravatar.cc/150?img=3",
  },
  {
    name: "Vikas Verma",
    company: "Adobe",
    package: "22 LPA",
    image: "https://i.pravatar.cc/150?img=15",
  },
  {
    name: "Vikas Verma",
    company: "Adobe",
    package: "22 LPA",
    image: "https://i.pravatar.cc/150?img=15",
  },
  {
    name: "Vikas Verma",
    company: "Adobe",
    package: "22 LPA",
    image: "https://i.pravatar.cc/150?img=15",
  },
  {
    name: "Vikas Verma",
    company: "Adobe",
    package: "22 LPA",
    image: "https://i.pravatar.cc/150?img=15",
  },
  {
    name: "Vikas Verma",
    company: "Adobe",
    package: "22 LPA",
    image: "https://i.pravatar.cc/150?img=15",
  },
  {
    name: "Vikas Verma",
    company: "Adobe",
    package: "22 LPA",
    image: "https://i.pravatar.cc/150?img=15",
  },
];

const teachingProcess = [
  {
    title: "Foundation Building",
    description: "Master the core concepts with our structured curriculum",
    icon: "🎯",
  },
  {
    title: "Hands-on Practice",
    description: "Apply learning through real-world projects",
    icon: "💻",
  },
  {
    title: "Industry Mentorship",
    description: "Learn from experienced professionals",
    icon: "👨‍🏫",
  },
  {
    title: "Placement Preparation",
    description: "Get ready for your dream role",
    icon: "🚀",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Navbar />
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_100%)]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto text-center px-4"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
            About Skills Adda
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Founded in 2020, Skills Adda has been transforming careers through
            cutting-edge technology education. Our mission is to bridge the gap
            between traditional education and industry demands.
          </p>
          <Link to="/courses">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600"
            >
              Get Started
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* Teaching Process Section */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
            Our Teaching Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teachingProcess.map((process, index) => (
              <motion.div
                key={process.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-500/50 transition-all"
              >
                <div className="text-4xl mb-4">{process.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
                <p className="text-muted-foreground">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 overflow-hidden bg-gradient-to-b from-background via-accent/5 to-background">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
            Success Stories
          </h2>

          <div className="w-full py-6 overflow-hidden relative">
            <motion.div
              className="flex gap-8 whitespace-nowrap"
              animate={{ x: ["0%", "-100%"] }}
              transition={{
                repeat: Infinity,
                duration: 30,
                ease: "linear",
              }}
            >
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-card/90 backdrop-blur-sm p-6 rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 transition-all w-64 flex-shrink-0"
                >
                  <div className="flex flex-col items-center text-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-24 h-24 rounded-full mb-4 border-2 border-cyan-500/50"
                    />
                    <h3 className="text-xl font-semibold mb-2">
                      {testimonial.name}
                    </h3>
                    <p className="text-cyan-400">{testimonial.company}</p>
                    <p className="text-muted-foreground">
                      {testimonial.package}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>
      <Footer />
    </div>
  );
}