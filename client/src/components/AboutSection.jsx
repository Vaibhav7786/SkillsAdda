import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import BookDemoDialog from "@/components/BookDemoDialog";
import { useEffect, useState } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [backgroundImages, setBackgroundImages] = useState([]);
  const [isOpen,setIsOpen]=useState(false);

  useEffect(() => {
    async function loadImages() {
      const images = [];
      for (let i = 1; i <= 25; i++) {
        try {
          const img = await import(`./images/${i}.png`);
          images.push(img.default);
        } catch (error) {
          console.error(`Error importing image${i}.png:`, error);
          images.push("/images/placeholder.png");
        }
      }
      setBackgroundImages(images);
    }

    loadImages();
  }, []);

  useEffect(() => {
    if (backgroundImages.length > 0) {
      const interval = setInterval(() => {
        setNextImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
        setTimeout(() => {
          setCurrentImageIndex(nextImageIndex);
        }, 1000);
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [nextImageIndex, backgroundImages]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-1">
        {backgroundImages.length > 0 && (
          <>
            <motion.div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
                backgroundSize: "100%", // Zoom in
                backgroundPosition: "center",
                opacity: 0.1,
                filter: "brightness(1.5)", // Increased brightness
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${backgroundImages[nextImageIndex]})`,
                backgroundPosition: "center",
                opacity: 0,
                filter: "brightness(2.0)", // Increased brightness
              }}
            />
          </>
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-purple-900/30 to-cyan-900/30" />
      </div>

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
            Master industry-relevant skills with our comprehensive learning platform. <br />
            Join the next generation of professionals.
          </motion.p>

          <motion.div
            variants={textVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white hover:opacity-90 transform transition hover:scale-105"
              onClick={() => (window.location.href = "/courses")}
            >
              Start Your Journey
            </Button>
            <Button
                onClick={() => setIsOpen(true)}
                className="mt-0 mx-5 px-5 ml-8 py-[1.5em] bg-gradient-to-r from-purple-500 to-cyan-500 text-white hover:opacity-90 transform transition hover:scale-105"
              >
                Book Demo
            </Button>
           {
            isOpen &&(  
            <BookDemoDialog isOpen={isOpen} setIsOpen={setIsOpen} courses={''}  />)
}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}