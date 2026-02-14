'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import useFloatingBackground from '@/hooks/useFloatingBackground';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.25, 0, 1],
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: [0.25, 0.25, 0, 1],
    },
  },
};

export default function HeroSection() {
  const { containerRef } = useFloatingBackground();

  return (
    <div
      className="w-full h-screen flex items-center justify-center relative overflow-hidden"
      id="hero"
    >
      {/* Floating background elements */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        ref={containerRef}
      />

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-background-500 via-background-400 to-background-600 opacity-50" />

      {/* Main content */}
      <motion.div
        className="w-full px-8 sm:px-0 sm:w-[70%] lg:w-1/2 flex flex-col gap-y-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          className="text-secondary-text-500 text-lg mb-2 sm:mb-4 font-medium"
          variants={itemVariants}
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          className="text-4xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary-text-500 to-secondary-text-300 bg-clip-text text-transparent"
          variants={titleVariants}
        >
          Mario Nikolov
        </motion.h1>

        <motion.h2
          className="text-secondary-text-400 text-3xl sm:text-5xl lg:text-6xl font-bold"
          variants={itemVariants}
        >
          <span className="text-blue-400">Software</span> Developer
        </motion.h2>

        <motion.p
          className="max-w-xl text-secondary-text-700 mt-2 sm:mt-4 text-lg leading-relaxed"
          variants={itemVariants}
        >
          I specialize in designing and developing complex systems and
          applications. I always try to look for what is happening behind the
          scenes, creating scalable solutions that make a difference.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-8"
          variants={itemVariants}
        >
          <Link
            href="#about"
            className="inline-flex items-center justify-center gap-x-2 px-6 py-3 bg-gradient-to-r from-blue-700 to-purple-800 hover:from-blue-800 hover:to-purple-900 rounded-lg transition-all duration-300 group shadow-lg hover:shadow-xl hover:scale-105 transform relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            <span className="text-white font-medium relative z-10">
              Explore My Work
            </span>
            <Image
              src="/icons/arrow-right.svg"
              alt="arrow-right"
              width={18}
              height={18}
              className="filter brightness-0 invert transition-transform duration-300 group-hover:translate-x-1 relative z-10"
            />
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <span className="text-secondary-text-600 text-sm">
          Scroll to explore
        </span>
        <motion.div
          className="w-6 h-10 border-2 border-secondary-text-600 rounded-full flex justify-center"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-secondary-text-600 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
