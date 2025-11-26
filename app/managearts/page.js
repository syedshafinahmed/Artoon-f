"use client";

import React, { useEffect, useState, useContext } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { UserContext } from "@/context/UserContext";
import ProtectedRoute from "../components/ui/ProtectedRoute";
import { MdEditSquare } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";

const ManageArts = () => {
  const { user } = useContext(UserContext);
  const [arts, setArts] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!user) return;

    fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/arts?artist=${encodeURIComponent(
        user.displayName
      )}`,
      { cache: "no-store" }
    )
      .then((res) => res.json())
      .then((data) => {
        setArts(data);
        setLoading(false);
      });
  }, [user]);

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: "#e3342f",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/arts/${id}`, {
          method: "DELETE",
        });
        if (res.ok) {
          setArts(arts.filter((art) => art._id !== id));
          Swal.fire("Deleted!", "Your art has been deleted.", "success");
        } else {
          throw new Error("Failed to delete art");
        }
      } catch (err) {
        console.error(err);
        Swal.fire("Error", err.message, "error");
      }
    }
  };

  return (
    <ProtectedRoute>
      <div className="py-20 max-w-7xl mx-auto px-4">
        <h3 className="text-4xl md:text-5xl text-center font-black bg-linear-to-b from-blue-400 to-blue-600 bg-clip-text text-transparent mb-20">
          Manage Your Artworks
        </h3>

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
                className="bg-gray-200 dark:bg-gray-900 rounded-xl overflow-hidden border border-blue-500/50 shadow-md cursor-pointer"
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

                  <div className="flex gap-3 mb-2">
                    <p className="text-blue-500 px-2 badge bg-base-200 text-sm mt-1">
                      {art.category}
                    </p>
                    <p className="text-base-200 px-2 badge bg-blue-500 text-sm mt-1">
                      {art.style}
                    </p>
                  </div>

                  <p className="mt-3 font-semibold text-sm text-gray-500 italic">
                    Price: ${art.price}
                  </p>

                  <div className="flex gap-2 mt-4">
                    <button
                      onClick={() => router.push(`/editarts/${art._id}`)}
                      className="btn w-1/2 bg-base-200 text-blue-500 border border-blue-500/50 hover:text-base-200 hover:bg-blue-500"
                    >
                      {" "}
                      <MdEditSquare />
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(art._id)}
                      className="btn w-1/2 bg-base-200 text-blue-500 border border-blue-500/50 hover:text-base-200 hover:bg-blue-500"
                    >
                      {" "}
                      <AiFillDelete />
                      Delete
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </ProtectedRoute>
  );
};

export default ManageArts;
