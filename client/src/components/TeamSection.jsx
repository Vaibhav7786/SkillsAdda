import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const teamMembers = [
  { name: "Alice Johnson", role: "Project Manager", image: "https://randomuser.me/api/portraits/women/44.jpg", theme: "bg-gradient-to-r from-orange-600 to-red-600 hover:from-red-600 hover:to-orange-600 border-orange-700" },
  { name: "Michael Smith", role: "Software Engineer", image: "https://randomuser.me/api/portraits/men/46.jpg", theme: "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-cyan-600 hover:to-blue-600 border-blue-700" },
  { name: "Emma Brown", role: "UI/UX Designer", image: "https://randomuser.me/api/portraits/women/48.jpg", theme: "bg-gradient-to-r from-pink-600 to-purple-600 hover:from-purple-600 hover:to-pink-600 border-pink-700" },
  { name: "David Wilson", role: "Backend Developer", image: "https://randomuser.me/api/portraits/men/50.jpg", theme: "bg-gradient-to-r from-green-600 to-teal-600 hover:from-teal-600 hover:to-green-600 border-green-700" }
];

export default function TeamSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextMember = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
  };

  const previousMember = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + teamMembers.length) % teamMembers.length);
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text"
        >
          Meet Our Team
        </motion.h2>
        <div className="flex justify-center items-center">
          <Button onClick={previousMember} variant="outline" className="transition-transform duration-300 hover:scale-110">
            <ArrowLeft />
          </Button>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            <Card className={`mx-4 overflow-hidden w-80 border-2 ${teamMembers[currentIndex].theme} transition-all duration-500 transform hover:scale-105 hover:shadow-xl` }>
              <CardContent className="p-6 text-center">
                <Avatar className="w-32 h-32 mx-auto mb-4">
                  <AvatarImage src={teamMembers[currentIndex].image} alt={teamMembers[currentIndex].name} />
                  <AvatarFallback>{teamMembers[currentIndex].name[0]}</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {teamMembers[currentIndex].name}
                </h3>
                <p className="text-gray-300">{teamMembers[currentIndex].role}</p>
              </CardContent>
            </Card>
          </motion.div>
          <Button onClick={nextMember} variant="outline" className="transition-transform duration-300 hover:scale-110">
            <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
}
