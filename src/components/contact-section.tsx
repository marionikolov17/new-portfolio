'use client';
import { motion } from 'framer-motion';
import SectionDelimiter from './util/section-delimiter';
import { IoMail } from 'react-icons/io5';
import { FiArrowUpRight } from 'react-icons/fi';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.25, 0, 1],
    },
  },
};

export default function ContactSection() {
  return (
    <div
      className="w-full min-h-screen flex items-center justify-center py-20"
      id="contact"
    >
      <motion.div
        className="w-full px-8 lg:px-0 lg:w-[750px] flex flex-col gap-y-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.div variants={itemVariants}>
          <SectionDelimiter title="Get In Touch" number="04" />
        </motion.div>

        {/* Hero Call to Action */}
        <motion.div className="text-center space-y-8" variants={itemVariants}>
          <div className="space-y-6">
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-text-500 leading-tight"
              variants={itemVariants}
            >
              Want to{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                talk?
              </span>{' '}
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-secondary-text-500 max-w-2xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Have a project in mind or just want to chat? I&apos;d love to hear
              from you. Feel free to reach out for collaborations, questions, or
              just to say hello.
            </motion.p>
          </div>

          {/* Primary CTA */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <motion.a
              href="mailto:marionikolovdev@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/25 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              whileTap={{ scale: 0.95 }}
            >
              <IoMail className="text-xl" />
              Say Hello
              <FiArrowUpRight className="text-lg" />
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
