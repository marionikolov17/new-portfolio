'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SectionDelimiter from './util/section-delimiter';

export default function AboutSection() {
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
        duration: 0.6,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  };

  return (
    <div
      className="w-full min-h-screen flex items-center justify-center relative overflow-hidden py-20"
      id="about"
    >
      <div className="w-full px-8 sm:px-0 sm:w-[70%] xl:w-1/2 flex flex-col relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={itemVariants}>
            <SectionDelimiter title="About Me" number="01" />
          </motion.div>

          <motion.div
            className="w-full flex flex-col-reverse md:flex-row gap-y-8 mt-8"
            variants={containerVariants}
          >
            <motion.div
              className="grow shrink-0 max-w-full md:max-w-[60%] flex flex-col md:pe-12"
              variants={itemVariants}
            >
              <motion.p
                className="text-secondary-text-500 text-lg leading-relaxed"
                variants={itemVariants}
              >
                Hello! I am{' '}
                <span className="text-primary-text-500 font-semibold">
                  Mario Nikolov
                </span>
                . I enjoy solving problems and learning new things along the
                way. My passion is designing systems and developing ready to use
                products that are{' '}
                <span className="text-blue-400">scalable</span> and{' '}
                <span className="text-blue-400">easy to maintain</span>.
              </motion.p>

              <motion.p
                className="text-secondary-text-700 mt-6 text-lg leading-relaxed"
                variants={itemVariants}
              >
                I always look for new challenges and opportunities to grow. My
                biggest goal is to become a person that can be{' '}
                <span className="text-blue-400">trusted</span> and everyone can
                rely on.
              </motion.p>
            </motion.div>

            <motion.div
              className="grow shrink-0 relative flex justify-center md:justify-start"
              variants={itemVariants}
            >
              <motion.div
                className="w-64 h-64 z-10 flex items-center justify-center overflow-hidden rounded-2xl relative bg-gradient-to-br from-background-300 to-background-400 shadow-2xl border border-border-600"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.25, 0.25, 0, 1] }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              >
                <Image
                  src="/images/mario-for-portfolio.png"
                  alt="Mario Nikolov"
                  width={256}
                  height={256}
                  className="w-full h-full object-contain filter drop-shadow-lg"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

/* function SkillCard({ skill, icon }: { skill: string; icon: string }) {
  return (
    <div className="group py-3 px-6 rounded-full bg-gradient-to-r from-background-300 to-background-400 flex items-center justify-center gap-2 border border-border-600 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer relative">
      <span className="text-lg group-hover:scale-105 transition-transform duration-200">
        {icon}
      </span>
      <span className="text-primary-text-500 text-sm font-medium group-hover:text-primary-text-300 transition-colors duration-200">
        {skill}
      </span>
    </div>
  );
} */
