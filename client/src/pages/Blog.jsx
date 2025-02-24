import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import blogPosts from "@/data/blogPosts";
const POSTS_PER_PAGE = 10;
import { useState } from "react";
import { Link } from "wouter";

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);

  const paginatedPosts = blogPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );
  const handlePageChange = (direction) => {
    if (direction === "next" && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else if (direction === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main className="pt-20">
        <section className="py-20 px-4 md:px-8">
          {/* Center everything within this container */}
          <div className="max-w-6xl mx-auto text-center">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: -50, opacity: 1 }}
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
            >
              Latest Updates
            </motion.h1>

            {/* Blog Listing */}
            <div className="space-y-8">
              {paginatedPosts.map((post, index) => (
                <motion.div
                  key={post.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  // The listing itself can be left-aligned; if you want it centered,
                  // wrap each item in a container or apply flex justification.
                  className="flex items-stretch gap-4 p-4 bg-neutral-900 rounded-lg text-left"
                >
                  {/* Left: Image */}
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-32 h-32 object-cover rounded-lg"
                  />

                  {/* Right: Text Content */}
                  <div className="flex-1 flex flex-col justify-between text-white">
                    <div>
                      <Link href={`/blog/${post?.id}`}>
                        <h2 className="text-xl font-bold mb-2 hover:underline">
                          {post.title}
                        </h2>
                      </Link>
                      <p className="text-gray-300">{post.excerpt}</p>
                    </div>
                    <p className="text-sm text-gray-500 mt-4">{post.date}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="mt-8 flex items-center justify-between">
              <button
                onClick={() => handlePageChange("prev")}
                disabled={currentPage === 1}
                className="bg-cyan-500 text-white px-4 py-2 rounded disabled:opacity-50"
              >
                Previous
              </button>

              {/* Page Indicator */}
              <span className="text-white">
                Page {currentPage} of {totalPages}
              </span>

              <button
                onClick={() => handlePageChange("next")}
                disabled={currentPage === totalPages}
                className="bg-cyan-500 text-white px-4 py-2 rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
