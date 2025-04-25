'use client';
import { motion } from 'framer-motion';

export default function SectionDelimiter({
  title,
  number,
}: {
  title: string;
  number: string;
}) {
  return (
    <div className="w-full flex items-center h-12 sm:mb-8">
      <div className="flex items-end">
        <motion.span
          className="text-blue-500 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {number}.
        </motion.span>
        <motion.h3
          className="ms-6 text-xl sm:text-3xl text-primary-text-500 font-bold"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h3>
      </div>
      <div className="grow md:grow-0 sm:w-64 h-[1px] ms-4 my-auto bg-gray-700"></div>
    </div>
  );
}
