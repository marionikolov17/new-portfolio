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
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-full text-green-400 text-sm font-medium"
              variants={itemVariants}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
              </span>
              Open to job opportunities
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-text-500 leading-tight"
              variants={itemVariants}
            >
              Ready to join your{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                team
              </span>{' '}
              as a developer
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-secondary-text-500 max-w-2xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Experienced full-stack developer seeking new challenges. I bring
              passion for clean code, modern technologies, and collaborative
              problem-solving to every team I join.
            </motion.p>
          </div>

          {/* Primary CTA */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <motion.a
              href="mailto:marionikolovdev@gmail.com?subject=Job Opportunity"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <IoMail className="text-xl" />
              Let&apos;s Talk Opportunities
              <FiArrowUpRight className="text-lg" />
            </motion.a>

            <p className="text-secondary-text-600 text-sm">
              Quick to respond • Available for interviews
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
