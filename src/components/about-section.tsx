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
            className="w-full flex flex-col-reverse md:flex-row md:items-center gap-y-10 md:gap-x-12 mt-8"
            variants={containerVariants}
          >
            <motion.div
              className="grow shrink-0 max-w-full md:max-w-[58%] flex flex-col"
              variants={itemVariants}
            >
              <motion.p
                className="text-secondary-text-500 text-lg leading-relaxed text-justify sm:text-start"
                variants={itemVariants}
              >
                Hello! I am{' '}
                <span className="text-primary-text-500 font-semibold">
                  Mario Nikolov
                </span>
                , a software developer at{' '}
                <span className="text-blue-400">SAP</span>. I build custom{' '}
                <span className="text-blue-400">enterprise applications</span>{' '}
                and <span className="text-blue-400">agentic systems</span> that
                bring AI into core business processes. What drives me is solving
                problems with real business value, in a structured and
                deliberate way.
              </motion.p>

              <motion.p
                className="text-secondary-text-700 mt-6 text-lg leading-relaxed text-justify sm:text-start"
                variants={itemVariants}
              >
                I care about understanding the <em>why</em> behind a problem
                before writing code - and I learn fast, which is what lets me
                move quickly in collaborative, high-stakes engineering
                environments.
              </motion.p>
            </motion.div>

            <motion.div
              className="grow shrink-0 relative flex justify-center md:justify-end"
              variants={itemVariants}
            >
              <motion.div
                className="group relative"
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.25, 0.25, 0, 1] }}
              >
                {/* Soft ambient glow */}
                <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 to-purple-600/20 blur-2xl rounded-3xl opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Offset accent frame */}
                <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border border-blue-400/30 hidden sm:block" />

                {/* Portrait */}
                <div className="relative z-10 w-60 sm:w-72 aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-br from-background-300 to-background-400 shadow-2xl border border-border-600">
                  <Image
                    src="/images/mario-headshot-2026.png"
                    alt="Mario Nikolov"
                    width={576}
                    height={720}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle bottom fade to blend with theme */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background-500/40 to-transparent pointer-events-none" />
                </div>
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
