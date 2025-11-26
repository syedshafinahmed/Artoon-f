"use client";
import { useEffect, useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { useParams, useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { UserContext } from "@/context/UserContext";

export default function EditArtPage({ params }) {
  const { id } = useParams();
  const { user } = useContext(UserContext);
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/arts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        reset(data);
        setLoading(false);
      });
  }, [id, reset]);

  const onSubmit = async (data) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/arts/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      Swal.fire({
        icon: "success",
        title: "Updated!",
        text: "Your artwork has been updated successfully.",
        timer: 1500,
        showConfirmButton: false,
      });

      setTimeout(() => router.push("/managearts"), 1500);
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to update artwork.",
      });
    }
  };

  if (loading)
    return (
      <div className="flex justify-center min-h-screen py-10">
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-xl">
      <h1 className="text-4xl bg-linear-to-b from-blue-400 to-blue-600 bg-clip-text text-transparent font-black text-center mb-6">
        Edit Art
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 border bg-blue-600/10 p-10 mb-40 rounded-xl"
      >
        <div>
          <label className="font-bold text-gray-500">Title</label>
          <input
            {...register("title", { required: true })}
            className="border border-blue-600/50 p-2 w-full rounded"
          />
        </div>

        <div>
          <label className="font-bold text-gray-500">Artist</label>
          <input
            {...register("artist")}
            className="border border-blue-600/50 p-2 w-full rounded bg-gray-100"
            readOnly
          />
        </div>

        <div>
          <label className="font-bold text-gray-500">Category</label>
          <input
            {...register("category", { required: true })}
            className="border border-blue-600/50 p-2 w-full rounded"
          />
        </div>

        <div>
          <label className="font-bold text-gray-500">Style</label>
          <input
            {...register("style", { required: true })}
            className="border border-blue-600/50 p-2 w-full rounded"
          />
        </div>

        <div className="md:col-span-2">
          <label className="font-bold text-gray-500">Description</label>
          <textarea
            {...register("description", { required: true })}
            className="border border-blue-600/50 p-2 w-full rounded"
            rows="4"
          />
        </div>

        <div>
          <label className="font-bold text-gray-500">Price</label>
          <input
            type="number"
            {...register("price", { required: true, valueAsNumber: true })}
            className="border border-blue-600/50 p-2 w-full rounded"
          />
        </div>

        <div>
          <label className="font-bold text-gray-500">Stock</label>
          <input
            type="number"
            {...register("stock", { required: true, valueAsNumber: true })}
            className="border border-blue-600/50 p-2 w-full rounded"
          />
        </div>

        <div className="md:col-span-2">
          <label className="font-bold text-gray-500">Image URL</label>
          <input
            {...register("image", { required: true })}
            className="border border-blue-600/50 p-2 w-full rounded"
          />
        </div>

        <button
          type="submit"
          className="md:col-span-2 w-full py-3 rounded-xl font-bold text-white
             bg-linear-to-b from-blue-400 to-blue-600
             hover:opacity-90 transition duration-300 shadow-lg"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}
