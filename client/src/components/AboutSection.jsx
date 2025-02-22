import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import BookDemoDialog from "./BookDemoDialog";
import { useEffect, useState } from "react";

const backgroundImages = [
  "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=2000&q=80", // AI circuit
  "https://images.unsplash.com/photo-1675187409865-b13f6394d7c8?auto=format&fit=crop&w=2000&q=80", // Digital brain
  "https://images.unsplash.com/photo-1675187404643-3395b40a5f60?auto=format&fit=crop&w=2000&q=80", // Neural network
  "https://images.unsplash.com/photo-1674029435164-c10f8c58dad3?auto=format&fit=crop&w=2000&q=80", // AI visualization
  "https://images.unsplash.com/photo-1676371825819-b8a6c3011885?auto=format&fit=crop&w=2000&q=80", // Tech landscape
  "https://images.unsplash.com/photo-1675426513194-5c10f9f73db0?auto=format&fit=crop&w=2000&q=80", // Digital waves
  "https://images.unsplash.com/photo-1677442137299-4e072f0f2ba2?auto=format&fit=crop&w=2000&q=80", // AI patterns
  "https://images.unsplash.com/photo-1675265396241-901fcc9adbf7?auto=format&fit=crop&w=2000&q=80", // Tech grid
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } }
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function AboutSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setNextImageIndex((prevIndex) =>
        (prevIndex + 1) % backgroundImages.length
      );
      setTimeout(() => {
        setCurrentImageIndex(nextImageIndex);
      }, 1000); // Delay to ensure smooth transition
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [nextImageIndex]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video background with overlay */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full opacity-40"
        >
          <source
            src="https://cdn.pixabay.com/vimeo/505977547/students-68271.mp4?width=1280&hash=f0d783c9d5dad00e3cd46b1c458f5e54f43f00df"
            type="video/mp4"
          />
        </video>
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.6,
            filter: 'brightness(1.3) contrast(1.2) saturate(1.2)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        {/* Preload next image */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${backgroundImages[nextImageIndex]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0,
            filter: 'brightness(1.3) contrast(1.2) saturate(1.2)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-purple-900/30 to-cyan-900/30" />
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 md:px-8 py-20">
        <motion.div
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={textVariants}
            className="text-primary-foreground/90 text-lg mb-4"
          >
            Premier Skills Development Platform
          </motion.p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              Forge Your Future in{" "}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text"
            >
              Professional{" "}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="text-cyan-400"
            >
              Skills
            </motion.span>
          </h1>
          <motion.p
            variants={textVariants}
            className="text-primary-foreground/80 text-lg md:text-xl mb-8"
          >
            Master industry-relevant skills with our comprehensive learning platform.
            Join the next generation of professionals.
          </motion.p>

          <motion.div
            variants={textVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white hover:opacity-90 transform transition hover:scale-105"
              onClick={() => window.location.href = '/courses'}
            >
              Start Your Journey
            </Button>
            <BookDemoDialog />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}