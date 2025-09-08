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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div
      className="w-full min-h-screen flex items-center justify-center relative overflow-hidden pb-4"
      id="about"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background-500 via-background-400 to-background-300 opacity-50" />

      {/* Floating background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl animate-pulse delay-1000" />

      <div className="w-full px-8 sm:px-0 sm:w-[70%] xl:w-1/2 flex flex-col relative z-10">
        <SectionDelimiter title="About Me" number="01" />

        <motion.div
          className="w-full flex flex-col-reverse md:flex-row gap-y-8 mt-8 sm:mt-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="grow shrink-0 max-w-full md:max-w-[60%] flex flex-col md:pe-12"
            variants={itemVariants}
          >
            <motion.p
              className="text-secondary-text-300 text-justify text-lg leading-relaxed"
              variants={itemVariants}
            >
              Hello! I am{' '}
              <span className="text-primary-text-100 font-semibold">
                Mario Nikolov
              </span>
              . I enjoy solving problems and learning new things along the way.
              My passion is designing systems and developing ready to use
              products that are <span className="text-blue-400">scalable</span>{' '}
              and <span className="text-blue-400">easy to maintain</span>.
            </motion.p>

            <motion.p
              className="text-secondary-text-300 mt-6 text-justify text-lg leading-relaxed"
              variants={itemVariants}
            >
              I always look for new challenges and opportunities to grow. My
              biggest goal is to become a person that can be{' '}
              <span className="text-green-400">trusted</span> and everyone can
              rely on.
            </motion.p>

            <motion.p
              className="text-secondary-text-300 mt-6 text-justify text-lg leading-relaxed"
              variants={itemVariants}
            >
              Here are the technologies I work with:
            </motion.p>

            <motion.div
              className="mt-8 w-full flex items-center gap-3 flex-wrap"
              variants={itemVariants}
            >
              <SkillCard skill="JavaScript" icon="🟨" />
              <SkillCard skill="TypeScript" icon="🔷" />
              <SkillCard skill="React" icon="⚛️" />
              <SkillCard skill="Next.js" icon="▲" />
              <SkillCard skill="Node.js" icon="🟢" />
              <SkillCard skill="Tailwind CSS" icon="🎨" />
            </motion.div>
          </motion.div>

          <motion.div
            className="grow shrink-0 relative flex justify-center md:justify-start"
            variants={itemVariants}
          >
            {/* Decorative background elements */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-2xl animate-pulse" />
            </div>

            <motion.div
              className="w-64 h-64 z-10 flex items-center justify-center overflow-hidden rounded-2xl relative bg-gradient-to-br from-background-300 to-background-400 shadow-2xl border border-border-300"
              initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
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

              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/30 to-purple-500/30 opacity-0 hover:opacity-100 transition-opacity duration-300 blur-sm -z-10" />
            </motion.div>

            {/* Floating decorative elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-60"
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full opacity-60"
              animate={{
                y: [0, 10, 0],
                scale: [1, 0.9, 1],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

function SkillCard({ skill, icon }: { skill: string; icon: string }) {
  return (
    <motion.div
      className="group py-3 px-6 rounded-full bg-gradient-to-r from-background-300 to-background-400 flex items-center justify-center gap-2 border border-border-500 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
      whileHover={{
        scale: 1.05,
        y: -2,
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <span className="text-lg group-hover:scale-110 transition-transform duration-300">
        {icon}
      </span>
      <span className="text-primary-text-300 text-sm font-medium group-hover:text-primary-text-100 transition-colors duration-300">
        {skill}
      </span>

      {/* Subtle glow effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10" />
    </motion.div>
  );
}
