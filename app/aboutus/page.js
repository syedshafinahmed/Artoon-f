"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Palette, Users, Heart } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-200">
      <section className="relative h-[420px] flex items-center justify-center overflow-hidden rounded-b-3xl">
        <Image src="/about22.avif" alt="banner" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-5xl md:text-7xl font-black text-base-200 drop-shadow-xl"
        >
          About Artoon
        </motion.h1>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold text-gray-900">
            Welcome to{" "}
            <span className="font-black bg-linear-to-b from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Artoon
            </span>
          </h2>
          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            A platform built to celebrate creativity, imagination, and the
            limitless world of digital art.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="p-8 rounded-3xl bg-white shadow-lg border border-gray-200"
          >
            <Sparkles size={40} className="text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Creative Freedom</h3>
            <p className="text-gray-600">
              A space where imagination thrives and artists control their own
              narrative.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.04 }}
            className="p-8 rounded-3xl bg-white shadow-lg border border-gray-200"
          >
            <Palette size={40} className="text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Artwork Showcase</h3>
            <p className="text-gray-600">
              Upload, organize and present artwork in an elegant and
              professional way.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.04 }}
            className="p-8 rounded-3xl bg-white shadow-lg border border-gray-200"
          >
            <Users size={40} className="text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
            <p className="text-gray-600">
              Built for creators, supported by a growing global art-loving
              community.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-black bg-linear-to-b from-blue-400 to-blue-600 bg-clip-text text-transparent text-center mb-10">
          Explore Visual Moments
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="grid gap-4">
            <div className="overflow-hidden rounded-xl">
              <Image
                className="h-auto max-w-full object-cover rounded-xl transition-transform duration-300 hover:scale-105"
                width={400}
                height={300}
                src="/about1.avif"
                alt=""
              />
            </div>
            <div className="overflow-hidden rounded-xl">
              <Image
                className="h-auto max-w-full object-cover rounded-xl transition-transform duration-300 hover:scale-105"
                width={400}
                height={300}
                src="/about2.jpg"
                alt=""
              />
            </div>
            <div className="overflow-hidden rounded-xl">
              <Image
                className="h-auto max-w-full object-cover rounded-xl transition-transform duration-300 hover:scale-105"
                width={400}
                height={300}
                src="/about10.avif"
                alt=""
              />
            </div>
          </div>

          <div className="grid gap-4">
            <div className="overflow-hidden rounded-xl">
              <Image
                className="h-auto max-w-full object-cover rounded-xl transition-transform duration-300 hover:scale-105"
                width={400}
                height={300}
                src="/about9.jpg"
                alt=""
              />
            </div>
            <div className="overflow-hidden rounded-xl">
              <Image
                className="h-auto max-w-full object-cover rounded-xl transition-transform duration-300 hover:scale-105"
                width={400}
                height={300}
                src="/about13.jpg"
                alt=""
              />
            </div>
            <div className="overflow-hidden rounded-xl">
              <Image
                className="h-auto max-w-full object-cover rounded-xl transition-transform duration-300 hover:scale-105"
                width={400}
                height={300}
                src="/about8.avif"
                alt=""
              />
            </div>
          </div>

          <div className="grid gap-4">
            <div className="overflow-hidden rounded-xl">
              <Image
                className="h-auto max-w-full object-cover rounded-xl transition-transform duration-300 hover:scale-105"
                width={400}
                height={300}
                src="/about7.avif"
                alt=""
              />
            </div>
            <div className="overflow-hidden rounded-xl">
              <Image
                className="h-auto max-w-full object-cover rounded-xl transition-transform duration-300 hover:scale-105"
                width={400}
                height={300}
                src="/about6.avif"
                alt=""
              />
            </div>
            <div className="overflow-hidden rounded-xl">
              <Image
                className="h-auto max-w-full object-cover rounded-xl transition-transform duration-300 hover:scale-105"
                width={400}
                height={300}
                src="/about3.avif"
                alt=""
              />
            </div>
          </div>

          <div className="grid gap-4">
            <div className="overflow-hidden rounded-xl">
              <Image
                className="h-auto max-w-full object-cover rounded-xl transition-transform duration-300 hover:scale-105"
                width={400}
                height={300}
                src="/about12.jpg"
                alt=""
              />
            </div>
            <div className="overflow-hidden rounded-xl">
              <Image
                className="h-auto max-w-full object-cover rounded-xl transition-transform duration-300 hover:scale-105"
                width={400}
                height={300}
                src="/about11.jpg"
                alt=""
              />
            </div>
            <div className="overflow-hidden rounded-xl">
              <Image
                className="h-auto max-w-full object-cover rounded-xl transition-transform duration-300 hover:scale-105"
                width={400}
                height={300}
                src="/about5.avif"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white rounded-t-3xl shadow-inner">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl font-bold text-gray-900 mb-6"
          >
            Our Mission 
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-lg text-gray-700 leading-relaxed mb-10"
          >
            To empower artists by giving them tools to showcase their work,
            connect with other creators, and extend their reach beyond borders.
            Artoon isn't just a platform — it's a stage for expression.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-10">
            <motion.div whileHover={{ scale: 1.03 }} className="h-full">
              <div className="p-8 rounded-3xl bg-linear-to-br from-purple-50 to-blue-100 shadow border border-blue-200 h-full flex flex-col">
                <Heart className="text-blue-600 mb-4" size={36} />
                <h3 className="text-xl font-semibold mb-2">Our Values</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Creativity above everything</li>
                  <li>• Simplicity in every interaction</li>
                  <li>• Respect for originality</li>
                </ul>
              </div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} className="h-full">
              <div className="p-8 rounded-3xl bg-linear-to-br from-blue-50 to-blue-100 shadow border border-blue-200 h-full flex flex-col">
                <Palette className="text-blue-600 mb-4" size={36} />
                <h3 className="text-xl font-semibold mb-2">Why Artoon?</h3>
                <p className="text-gray-700">
                  Because every artist deserves a platform that highlights their
                  talent beautifully. Artoon makes creativity visible.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
