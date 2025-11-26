"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaPaintBrush,
  FaPlusCircle,
  FaEdit,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules"; // ✅ Correct import
import "swiper/css";
import "swiper/css/pagination";

const features = [
  {
    title: "Showcase Arts",
    description: "Explore and display artworks beautifully in our gallery.",
    button: "Explore",
    icon: <FaPaintBrush />,
    link: "/arts",
    gradient: "from-blue-400 to-blue-600",
  },
  {
    title: "Add Arts",
    description: "Upload your artwork to share it with the community.",
    button: "Upload",
    icon: <FaPlusCircle />,
    link: "/addarts",
    gradient: "from-blue-500 to-blue-700",
  },
  {
    title: "Manage Arts",
    description: "Edit, update, or remove your artworks anytime.",
    button: "Manage",
    icon: <FaEdit />,
    link: "/managearts",
    gradient: "from-blue-600 to-blue-800",
  },
];

const images = [
  "/art1.jpg",
  "/art2.jpg",
  "/art3.jpg",
  "/art4.jpg",
  "/art5.jpg",
  "/art6.jpg",
  "/art7.jpg",
  "/art8.jpg",
  "/art9.jpg",
  "/art10.jpg",
];

const topArtists = [
  {
    name: "Sophia Reynolds",
    specialty: "Digital Abstract Art",
    experience: "8 years",
    tagline: "Transforming imagination into vibrant visuals.",
    description:
      "Sophia creates digital art that blends abstract patterns with vivid colors, bringing emotions to life.",
    image: "/1.jpg",
    social: {
      instagram:
        "https://www.instagram.com/__shafin__ahmed?igsh=mta0agj0odbqawv2yq==",
      twitter: "#",
      linkedin: "https://www.linkedin.com/in/syed-shafin-ahmed/",
    },
  },
  {
    name: "Liam Turner",
    specialty: "Contemporary Surrealism",
    experience: "10 years",
    tagline: "Where surreal meets minimalism.",
    description:
      "Liam's paintings explore surreal concepts with a minimalist touch, making every piece a story.",
    image: "/2.jpg",
    social: {
      instagram:
        "https://www.instagram.com/__shafin__ahmed?igsh=mta0agj0odbqawv2yq==",
      twitter: "#",
      linkedin: "https://www.linkedin.com/in/syed-shafin-ahmed/",
    },
  },
  {
    name: "Aria Mitchell",
    specialty: "Illustration & Concept Art",
    experience: "6 years",
    tagline: "Unique concepts for modern storytelling.",
    description:
      "Aria combines illustration with conceptual design to produce immersive visual experiences.",
    image: "/3.png",
    social: {
      instagram:
        "https://www.instagram.com/__shafin__ahmed?igsh=mta0agj0odbqawv2yq==",
      twitter: "#",
      linkedin: "https://www.linkedin.com/in/syed-shafin-ahmed/",
    },
  },
];

const cardVariant = {
  initial: { opacity: 0, y: 50, scale: 0.95 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
  whileHover: { scale: 1.03, transition: { duration: 0.2 } },
};

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* hero */}
      <section className="w-full bg-base-200 mt-10 relative rounded-xl overflow-hidden">
        <motion.div
          className="absolute -top-32 -left-32 w-96 h-96 bg-blue-400 rounded-full blur-3xl"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col-reverse md:flex-row items-center gap-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex-1 flex flex-col space-y-6 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Discover Stunning{" "}
              <span className="font-black bg-linear-to-b from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Artworks
              </span>
            </h1>

            <p className="text-gray-700 text-lg md:text-xl">
              Explore, upload, and showcase your creativity on a modern platform
              built for artists and creators.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 font-black text-base-200 rounded-xl bg-linear-to-r from-blue-400 to-blue-600 shadow-lg hover:shadow-2xl transition-all duration-300 self-center md:self-start"
            >
              Explore Now
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex-1 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/banner.jpg"
                alt="Artwork"
                width={600}
                height={500}
                className="object-cover"
              />
            </div>

            {/* Small floating card for modern effect */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-8 right-20 bg-linear-to-r from-blue-400 to-blue-600 text-white rounded-2xl px-6 py-3 shadow-xl"
            >
              Featured Art
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* features */}
      <section className="py-20 mt-10 bg-base-200">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black mb-16 bg-linear-to-b from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Features
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={`relative rounded-3xl p-10 cursor-pointer bg-linear-to-br ${feature.gradient} text-white shadow-lg overflow-hidden`}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="w-20 h-20 flex items-center justify-center rounded-full bg-white/20 mb-6 shadow-lg"
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut",
                  }}
                >
                  {feature.icon}
                </motion.div>

                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="mb-8 text-white/90">{feature.description}</p>

                <Link href={feature.link}>
                  <button className="px-6 py-3 border-2 border-white rounded-lg font-semibold text-white hover:bg-white hover:text-blue-700 transition-colors duration-300">
                    {feature.button}
                  </button>
                </Link>

                {/* Decorative floating circle */}
                <motion.div
                  className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* gallery */}
      <section className="w-full mt-10 bg-base-200 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black bg-linear-to-b from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Art Gallery
          </h2>
          <p className="text-xl text-gray-500 text-center pt-5 pb-20 px-5 md:px-0">
            Discover a curated collection of vibrant artworks from talented
            creators worldwide. Browse, explore, and immerse yourself in a
            gallery where every piece tells a unique story and sparks
            imagination.
          </p>

          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            autoplay={{ delay: 1000 }}
            loop
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="relative overflow-hidden rounded-2xl shadow-lg mb-10">
                  <Image
                    src={src}
                    alt={`Art ${index + 1}`}
                    width={400}
                    height={400}
                    className="object-cover w-full h-64 md:h-72 lg:h-64 hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* top artists */}
      <section className="w-full bg-base-200 py-20 mb-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold bg-linear-to-b from-blue-400 to-blue-600 bg-clip-text text-transparent text-center tracking-tight"
          >
            Top Artists
          </motion.h2>
          <p className="text-xl text-gray-500 text-center pt-5 pb-20 px-5 md:px-0">
            Meet the visionaries shaping the modern art world. Our top artists
            combine creativity, technique, and passion to produce stunning works
            that inspire and captivate. Explore their stories, specialties, and
            signature styles.
          </p>
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            {topArtists.map((artist, idx) => (
              <motion.div
                key={idx}
                variants={cardVariant}
                initial="initial"
                whileInView="animate"
                whileHover="whileHover"
                viewport={{ once: true }}
                className="flex max-w-md h-48 bg-linear-to-r from-blue-400/80 to-blue-600/80 rounded-xl shadow-xl overflow-hidden group"
              >
                <div className="w-1/2 h-full relative overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.12 }}
                    transition={{ duration: 0.3 }}
                    className="h-full"
                  >
                    <Image
                      src={artist.image}
                      alt={artist.name}
                      width={800}
                      height={800}
                      className="object-cover w-full h-full"
                    />
                  </motion.div>
                </div>

                <div className="w-2/3 p-4 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-extrabold text-base-200">
                      {artist.name}
                    </h3>

                    <p className="text-blue-400 text-xs badge px-3 bg-base-200 mt-2 mb-2">
                      {artist.specialty}
                    </p>

                    <p className="text-base-100 text-sm">{artist.tagline}</p>
                    <p className="text-base-100 text-xs">
                      Experience: {artist.experience}
                    </p>
                  </div>

                  <div className="flex space-x-3 items-center">
                    <motion.a
                      href={artist.social.instagram}
                      whileHover={{ scale: 1.2 }}
                      className="text-blue-100 hover:text-white transition"
                    >
                      <FaInstagram size={20} />
                    </motion.a>

                    <motion.a
                      href={artist.social.linkedin}
                      whileHover={{ scale: 1.2 }}
                      className="text-blue-100 hover:text-white transition"
                    >
                      <FaLinkedin size={20} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-blue-200/50 border border-blue-200  py-20 mb-20 rounded-xl">
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <h2 className="text-4xl md:text-5xl font-black bg-linear-to-b from-blue-400 to-blue-600 bg-clip-text text-transparent mb-4">
            Stay Inspired with Art
          </h2>
          <p className="text-blue-600 mb-8 text-lg md:text-xl">
            Subscribe to our newsletter and get the latest artworks, artist
            stories, and creative updates delivered directly to your inbox.
          </p>

          <div className="flex relative w-full flex-col sm:flex-row justify-center items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full text-left  bg-gray-200 sm:w-auto pl-5 pr-100 py-3 rounded-full focus:outline-none text-gray-800 placeholder-gray-400"
            />
            <button className="btn absolute left-156 border border-blue-600 py-3 bg-white text-blue-600 font-bold rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300">
              Subscribe
            </button>
          </div>

          <p className="text-blue-600 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>
    </div>
  );
}
