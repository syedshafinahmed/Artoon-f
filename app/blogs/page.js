"use client";

import React from "react";
import { motion } from "framer-motion";

const blogs = [
  {
    id: 1,
    name: "Sophia Rivera",
    title: "Exploring the Beauty of Contemporary Art",
    image: "/blog1.jpg",
    description:
      "Contemporary art is constantly evolving, reflecting society's dynamic nature. In this blog, we explore how modern artists blend traditional techniques with digital innovation, creating immersive experiences that challenge conventional perspectives. From interactive installations to thought-provoking sculptures, contemporary art invites viewers to interpret meaning in unique ways.",
  },
  {
    id: 2,
    name: "Liam Chen",
    title: "The Revival of Abstract Expressionism",
    image: "/blog2.jpg",
    description:
      "Abstract Expressionism, which emerged in the mid-20th century, has seen a resurgence among new artists seeking freedom in color, form, and emotion. This article delves into the techniques, philosophies, and influential works that define the movement, and how contemporary artists are reinventing abstraction to convey personal and societal narratives in visually striking ways.",
  },
  {
    id: 3,
    name: "Amara Patel",
    title: "Digital Art: Bridging Creativity and Technology",
    image: "/blog3.jpg",
    description:
      "Digital art has transformed the way artists create and share their work. Using tools like tablets, software, and AI-assisted designs, modern creators can produce intricate visuals that were once impossible. This blog examines the evolution of digital artistry, its impact on traditional art forms, and how digital platforms are democratizing access to creative expression worldwide.",
  },
  {
    id: 4,
    name: "Ethan Williams",
    title: "Street Art and Its Cultural Impact",
    image: "/blog4.jpg",
    description:
      "Street art has grown from underground expression to a celebrated art form influencing culture, politics, and urban design. In this post, we explore the stories behind iconic murals, the artists shaping city landscapes, and how street art communicates powerful messages to a diverse audience. Beyond aesthetics, street art challenges norms and inspires community engagement, redefining public spaces around the world.",
  },
];

const BlogsPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-black bg-linear-to-b from-blue-400 to-blue-600 bg-clip-text text-transparent mb-4">
          Our Blogs
        </h1>
        <p className="text-gray-600 text-lg">
          Stay updated with the latest insights, tutorials, and stories from our
          expert bloggers.
        </p>
      </div>

      <div className="space-y-8">
        {blogs.map((blog, index) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="w-full flex flex-col md:flex-row items-center bg-white shadow-lg rounded-2xl overflow-hidden"
          >
            {/* Text Left */}
            <div className="w-full md:w-2/3 p-6">
              <h2 className="text-2xl font-black bg-linear-to-b from-blue-400 to-blue-600 bg-clip-text text-transparent mb-2">
                {blog.title}
              </h2>
              <p className="text-gray-500 mb-4">{blog.description}</p>
              <span className="text-gray-800 font-medium">- {blog.name}</span>
            </div>

            {/* Image Right */}
            <div className="w-full md:w-1/3 flex justify-center p-6">
              <img
                src={blog.image}
                alt={blog.name}
                className="w-full max-w-xs h-52 object-cover rounded-xl"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
