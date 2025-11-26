"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Page = () => {
  const [arts, setArts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/arts`, { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        setArts(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="py-20 max-w-7xl mx-auto px-4">
      <h3 className="text-4xl md:text-5xl text-center font-black bg-linear-to-b from-blue-400 to-blue-600 bg-clip-text text-transparent mb-4">
        Explore Captivating Artworks
      </h3>

      <p className="text-gray-500 font-medium text-center max-w-2xl mx-auto mb-10">
        Discover a curated collection of stunning pieces created by talented
        artists from around the world. Browse, admire, and get inspired.
      </p>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
        <input
          type="text"
          placeholder="Search artworks..."
          className="w-full md:w-1/2 px-4 py-2 border rounded-lg shadow-sm
          focus:ring-2 focus:ring-blue-400 outline-none"
        />

        <select
          className="px-4 py-2 border rounded-lg shadow-sm
          focus:ring-2 focus:ring-blue-400 outline-none"
        >
          <option value="">Filter by Category</option>
          <option value="painting">Painting</option>
          <option value="drawing">Drawing</option>
          <option value="digital">Digital Art</option>
          <option value="sculpture">Sculpture</option>
        </select>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="animate-pulse bg-white border rounded-xl shadow-sm"
            >
              <div className="h-64 bg-gray-300 rounded-t-xl"></div>
              <div className="p-4 space-y-3">
                <div className="h-5 bg-gray-300 rounded"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                <div className="h-3 bg-gray-300 rounded w-3/4"></div>
                <div className="h-3 bg-gray-300 rounded w-2/3"></div>
                <div className="h-4 bg-gray-300 rounded w-1/3 mt-3"></div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {arts.map((art, i) => (
            <motion.div
              key={art._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
              }}
              className="bg-gray-200  dark:bg-gray-900 rounded-xl overflow-hidden border border-blue-500/50 shadow-md cursor-pointer"
            >
              <div className="overflow-hidden">
                <motion.img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-64 object-cover rounded-t-xl"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              <div className="p-4">
                <h2 className="text-2xl font-black bg-linear-to-b from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  {art.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 font-black">
                  {art.artist}
                </p>

                <div className="flex gap-3">
                  <p className="text-blue-500 px-2 badge bg-base-200 text-sm mt-1">
                    {art.category}
                  </p>
                  <p className="text-base-200 px-2 badge bg-blue-500 text-sm mt-1">
                    {art.style}
                  </p>
                </div>

                {/* <p className="mt-2 text-gray-700 dark:text-gray-300">
                  {art.description}
                </p> */}

                <p className="mt-3 font-semibold text-sm text-gray-500 italic">
                  Price: ${art.price}
                </p>
                <Link
                  href={`/arts/${art._id}`}
                  className="btn w-full bg-linear-to-b from-blue-400 to-blue-600 text-white border-none font-medium mt-5"
                >
                  View Art
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;
