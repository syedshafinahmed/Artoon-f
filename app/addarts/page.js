"use client";

import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { UserContext } from "@/context/UserContext";
import ProtectedRoute from "../components/ui/ProtectedRoute";

const AddArtForm = () => {
  const { user } = useContext(UserContext);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      artist: user?.displayName || "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/arts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, likes: 0 }),
      });

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Art Added!",
          text: "Your artwork has been successfully added.",
          timer: 1500,
          showConfirmButton: false,
        });
        reset();
        setTimeout(() => router.push("/arts"), 1500);
      } else {
        throw new Error("Failed to add art");
      }
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: err.message,
      });
    }
  };

  return (
    <ProtectedRoute>
      <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-xl">
        <h1 className="text-2xl bg-linear-to-b from-blue-400 to-blue-600 bg-clip-text text-transparent font-black text-center mb-6">
          Add New Art
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 border bg-blue-600/10 p-10 mb-40 rounded-xl"
        >
          <div className="flex flex-col">
            <Label htmlFor="title" className="text-gray-500 font-bold mb-2">
              Title
            </Label>
            <Input
              id="title"
              className="border border-blue-600/50"
              {...register("title", { required: "Title is required" })}
            />
            {errors.title && (
              <span className="text-red-500">{errors.title.message}</span>
            )}
          </div>

          <div className="flex flex-col">
            <Label htmlFor="artist" className="text-gray-500 font-bold mb-2">
              Artist
            </Label>
            <Input
              id="artist"
              className="border border-blue-600/50 bg-gray-100 cursor-not-allowed"
              {...register("artist", { required: "Artist is required" })}
              value={user?.displayName || ""}
              readOnly
            />
            {errors.artist && (
              <span className="text-red-500">{errors.artist.message}</span>
            )}
          </div>

          <div className="flex flex-col">
            <Label htmlFor="category" className="text-gray-500 font-bold mb-2">
              Category
            </Label>
            <Input
              id="category"
              className="border border-blue-600/50"
              {...register("category", { required: "Category is required" })}
            />
            {errors.category && (
              <span className="text-red-500">{errors.category.message}</span>
            )}
          </div>

          <div className="flex flex-col">
            <Label htmlFor="style" className="text-gray-500 font-bold mb-2">
              Style
            </Label>
            <Input
              id="style"
              className="border border-blue-600/50"
              {...register("style", { required: "Style is required" })}
            />
            {errors.style && (
              <span className="text-red-500">{errors.style.message}</span>
            )}
          </div>

          <div className="flex flex-col col-span-1 md:col-span-2">
            <Label
              htmlFor="description"
              className="text-gray-500 font-bold mb-2"
            >
              Description
            </Label>
            <textarea
              id="description"
              className="border border-blue-600/50 rounded-xl"
              rows={4}
              {...register("description", {
                required: "Description is required",
              })}
            />
            {errors.description && (
              <span className="text-red-500">{errors.description.message}</span>
            )}
          </div>

          <div className="flex flex-col">
            <Label htmlFor="price" className="text-gray-500 font-bold mb-2">
              Price
            </Label>
            <Input
              id="price"
              className="border border-blue-600/50"
              type="number"
              {...register("price", {
                required: "Price is required",
                valueAsNumber: true,
              })}
            />
            {errors.price && (
              <span className="text-red-500">{errors.price.message}</span>
            )}
          </div>

          <div className="flex flex-col">
            <Label htmlFor="stock" className="text-gray-500 font-bold mb-2">
              Stock
            </Label>
            <Input
              id="stock"
              className="border border-blue-600/50"
              type="number"
              {...register("stock", {
                required: "Stock is required",
                valueAsNumber: true,
              })}
            />
            {errors.stock && (
              <span className="text-red-500">{errors.stock.message}</span>
            )}
          </div>

          <div className="flex flex-col col-span-1 md:col-span-2">
            <Label htmlFor="image" className="text-gray-500 font-bold mb-2">
              Image URL
            </Label>
            <Input
              id="image"
              className="border border-blue-600/50"
              {...register("image", { required: "Image URL is required" })}
            />
            {errors.image && (
              <span className="text-red-500">{errors.image.message}</span>
            )}
          </div>

          <div className="col-span-1 md:col-span-2">
            <Button
              type="submit"
              className="w-full bg-linear-to-b from-blue-400 to-blue-600 text-white"
            >
              Add Art
            </Button>
          </div>
        </form>
      </div>
    </ProtectedRoute>
  );
};

export default AddArtForm;
