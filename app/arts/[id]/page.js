"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { FaMoneyCheckAlt, FaShoppingCart } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";

export default function ArtDetails() {
  const { id } = useParams();
  const [art, setArt] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/arts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setArt(data);
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return (
      <div className="h-screen flex justify-center items-center">
        <div className="animate-spin h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full"></div>
      </div>
    );

  return (
    <div className="max-w-5xl mx-auto px-5 py-16">
      <motion.img
        src={art.image}
        alt={art.title}
        className="w-full h-[500px] object-cover rounded-xl shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />

      <h1 className="text-4xl font-black mt-8 bg-linear-to-b from-blue-400 to-blue-600 bg-clip-text text-transparent">
        {art.title}
      </h1>

      <p className="text-gray-700 dark:text-gray-300 text-xl font-semibold">
        <strong>Artist:</strong> {art.artist}
      </p>

      <div className="flex gap-3 mt-3">
        <p className="text-blue-500 px-2 badge bg-base-200 text-sm">
          {art.category}
        </p>
        <p className="text-white px-2 badge bg-blue-500 text-sm">{art.style}</p>
      </div>

      <p className="mt-6 text-gray-700 dark:text-gray-400 leading-relaxed text-lg">
        {art.description || "No description available."}
      </p>

      <div className="flex gap-5">
        <p className="mt-6 text-sm font-bold badge bg-base-200 px-5 text-blue-500 border border-blue-500">
          <FaMoneyCheckAlt />${art.price}
        </p>
        <p className="mt-6 text-sm font-bold badge bg-base-200 px-5 text-blue-500 border border-blue-500">
          <AiFillLike />
          {art.likes}
        </p>
        <p className="mt-6 text-sm font-bold badge bg-base-200 px-5 text-blue-500 border border-blue-500">
          <FaShoppingCart />
          {art.stock}
        </p>
      </div>

      <button className="btn bg-blue-600 border-none rounded-xl text-white font-semibold px-8 mt-8">
        Buy Now
      </button>
    </div>
  );
}
