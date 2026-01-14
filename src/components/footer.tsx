'use client';
import { motion } from 'framer-motion';
import { IoArrowUp } from 'react-icons/io5';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-background-400 border-t border-border-600">
      <div className="max-w-6xl mx-auto px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary-text-600 text-sm">
            © 2025 Mario Nikolov. All rights reserved.
          </p>

          <motion.button
            onClick={scrollToTop}
            className="flex items-center cursor-pointer gap-2 px-4 py-2 bg-background-300 hover:bg-background-200 border border-border-500 rounded-lg transition-all duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-secondary-text-500 text-sm group-hover:text-primary-text-500">
              Back to top
            </span>
            <IoArrowUp className="text-secondary-text-500 group-hover:text-primary-text-500" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
