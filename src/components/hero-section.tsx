'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import useFloatingBackground from '@/hooks/useFloatingBackground';

export default function HeroSection() {
  const { containerRef } = useFloatingBackground();

  return (
    <div
      className="w-full h-screen flex items-center justify-center relative"
      id="hero"
    >
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        ref={containerRef}
      />
      <div className="w-full px-8 sm:px-0 sm:w-[70%] lg:w-1/2 flex flex-col gap-y-4">
        <p className="text-secondary-text-500 text-lg mb-2 sm:mb-4">
          Hi, my name is
        </p>
        <motion.h1
          className="text-primary-text-500 text-4xl sm:text-6xl lg:text-7xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Mario Nikolov
        </motion.h1>
        <motion.h2
          className="text-secondary-text-400 text-3xl sm:text-5xl lg:text-6xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Junior Software Engineer
        </motion.h2>
        <motion.p
          className="max-w-96 text-secondary-text-700 mt-2 sm:mt-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          I specialize in designing and developing of complex systems and
          applications. I always try to look for what is happening behind the
          scenes.
        </motion.p>
        <Link href="#about" className="flex items-center gap-x-4 mt-8 group">
          <p className="text-primary-text-500 capitalize group-hover:underline text-sm">
            See more about me
          </p>
          <Image
            src="/icons/arrow-right.svg"
            alt="arrow-right"
            width={30}
            height={30}
            className="arrow"
          />
        </Link>
      </div>
    </div>
  );
}
