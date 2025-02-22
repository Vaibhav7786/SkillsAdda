import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const blogPosts = [
  {
    title: "The Future of AI in Education",
    date: "February 15, 2025",
    excerpt: "Exploring how artificial intelligence is revolutionizing the learning experience.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Essential Skills for 2025",
    date: "February 10, 2025",
    excerpt: "A comprehensive guide to the most in-demand professional skills.",
    image: "https://images.unsplash.com/photo-1675187409865-b13f6394d7c8?auto=format&fit=crop&w=800&q=80",
  },
  // Add more blog posts as needed
];

export default function Blog() {
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
              Latest Updates
            </motion.h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={post.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
                    <CardHeader className="p-0">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover"
                      />
                    </CardHeader>
                    <CardContent className="p-6">
                      <h2 className="text-xl font-semibold mb-2 bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
                        {post.title}
                      </h2>
                      <p className="text-sm text-muted-foreground mb-4">{post.date}</p>
                      <p className="text-muted-foreground">{post.excerpt}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
