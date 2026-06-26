'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { IoTrophy } from 'react-icons/io5';
import SectionDelimiter from './util/section-delimiter';
import { awards } from '@/constants/awards';

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

export default function AwardsSection() {
  return (
    <div
      className="w-full min-h-screen my-20 lg:my-8 flex items-center justify-center"
      id="awards"
    >
      <div className="w-full max-w-4xl px-6 md:px-8 flex flex-col gap-y-4">
        <SectionDelimiter title="Awards" number="02" />

        <motion.div
          className="space-y-8 mt-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {awards.map((award) => (
            <AwardCard key={award.title} {...award} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function AwardCard({
  title,
  event,
  issuer,
  issuerLink,
  date,
  imageUrl,
  description,
  tags,
}: {
  title: string;
  event: string;
  issuer: string;
  issuerLink: string;
  date: string;
  imageUrl: string;
  description: string[];
  tags: string[];
}) {
  return (
    <motion.div
      variants={itemVariants}
      className="group relative w-full flex flex-col lg:flex-row gap-8 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-background-300/80 to-background-400/60 border border-border-700/60 hover:border-blue-500/40 transition-colors duration-300 overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute -inset-px bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

      {/* Award image */}
      <div className="w-full lg:w-2/5 shrink-0">
        <motion.div
          className="relative aspect-[3/2] flex items-center justify-center rounded-xl bg-gradient-to-br from-background-200/60 to-background-500/60 border border-border-700/50 p-4 overflow-hidden"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={imageUrl}
            alt={`${event} - ${title}`}
            fill
            className="object-contain p-2 drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="flex flex-col grow justify-center">
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <IoTrophy className="text-sm" />
            {date}
          </span>
          <div className="h-px bg-gradient-to-r from-blue-500/40 to-transparent flex-1" />
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-primary-text-100 group-hover:text-blue-400 transition-colors duration-300">
          {title}
        </h3>

        <div className="flex flex-wrap items-center gap-x-2 mt-1 text-secondary-text-500">
          <span className="text-lg">{event}</span>
          <span className="text-border-300">&middot;</span>
          <Link
            href={issuerLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 text-lg hover:text-blue-400 transition-colors duration-300"
          >
            {issuer}
          </Link>
        </div>

        <div className="flex flex-col gap-y-3 mt-4">
          {description.map((paragraph, index) => (
            <p
              key={index}
              className="text-secondary-text-300 text-base md:text-lg leading-relaxed text-justify sm:text-start"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mt-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-blue-900/30 border border-blue-700/40 text-blue-400 text-xs font-medium hover:bg-blue-800/40 hover:border-blue-600/60 transition-colors duration-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
