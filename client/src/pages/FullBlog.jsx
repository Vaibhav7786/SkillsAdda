import { useParams } from "wouter";
import { motion } from "framer-motion";
import blogPosts from "@/data/blogPosts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function FullBlogView() {
  const { id } = useParams();
  const post = blogPosts.find((blog) => blog.id === parseInt(id));
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-20">
        <section className="py-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            {post ? (
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: -50 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
                  {post.title}
                </h1>

                <p className="text-center text-gray-400">{post.date}</p>

                {post.image && (
                  <div className="flex justify-center">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full max-w-2xl h-auto rounded-lg shadow-md object-cover my-6"
                    />
                  </div>
                )}

                {/* Excerpt */}
                {post.excerpt && (
                  <p className="leading-relaxed text-gray-300">
                    {post.excerpt}
                  </p>
                )}

                {/* Full Description */}
                <p className="leading-relaxed text-gray-300">
                  {post.fullDescription || "Full description not available."}
                </p>
              </motion.article>
            ) : (
              <p className="text-center">Post not found</p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
