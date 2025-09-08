import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SectionDelimiter from './util/section-delimiter';
import { DemoArrowSvg, GithubSvg } from './constants/tech-icons';
import { projects } from '@/constants/projects';

export default function ProjectsSection() {
  return (
    <div
      className="w-full min-h-screen my-8 flex items-center justify-center"
      id="projects"
    >
      <div className="w-full px-8 lg:px-0 lg:w-[75%] xl:w-[65%] 2xl:w-1/2 flex flex-col gap-y-12">
        <SectionDelimiter title="Projects" number="04" />
        <div className="space-y-20">
          {projects.map((project, index) => (
            <ProjectCard key={index} index={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({
  index,
  type,
  title,
  description,
  imageUrl,
  technologies,
  links,
}: {
  index: number;
  type: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  links: {
    github: string;
    demo: string;
  };
}) {
  const shouldInvert = index % 2 !== 0;

  return (
    <motion.div
      className={`group w-full flex flex-col lg:flex-row gap-8 relative ${shouldInvert ? 'lg:flex-row-reverse' : ''}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Project Image Section */}
      <div className="w-full lg:w-1/2 relative">
        <motion.div
          className="relative aspect-video overflow-hidden rounded-xl shadow-2xl"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />

          {/* Subtle overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Floating project type badge */}
          <div className="absolute top-4 left-4 transform -translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <span className="px-3 py-1 bg-blue-500/90 backdrop-blur-sm text-white text-xs font-medium rounded-full">
              {type}
            </span>
          </div>

          {/* Quick action buttons */}
          <div className="absolute top-4 right-4 flex gap-2 transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
            {links.github && (
              <Link
                href={links.github}
                target="_blank"
                className="p-2 bg-black/70 backdrop-blur-sm rounded-lg hover:bg-blue-500/80 transition-colors duration-200"
              >
                <GithubSvg className="w-4 h-4 text-white" />
              </Link>
            )}
            <Link
              href={links.demo}
              target="_blank"
              className="p-2 bg-black/70 backdrop-blur-sm rounded-lg hover:bg-blue-500/80 transition-colors duration-200"
            >
              <DemoArrowSvg className="w-4 h-4 text-white" />
            </Link>
          </div>
        </motion.div>

        {/* Decorative element */}
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
      </div>

      {/* Project Content Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6 relative">
        <motion.div
          className="space-y-3"
          initial={{ opacity: 0, x: shouldInvert ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center gap-3">
            <span className="text-blue-500 text-sm font-semibold uppercase tracking-widest">
              {type}
            </span>
            <div className="h-px bg-gradient-to-r from-blue-500/50 to-transparent flex-1"></div>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-primary-text-100 group-hover:text-blue-400 transition-colors duration-300">
            {title}
          </h2>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-secondary-text-300 text-lg leading-relaxed relative z-10">
            {description}
          </p>

          {/* Subtle background card */}
          <div className="absolute inset-0 bg-background-200/30 backdrop-blur-sm rounded-lg p-4 -m-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
        </motion.div>

        {/* Technology Stack */}
        <motion.div
          className="flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {technologies.map((technology, techIndex) => (
            <motion.span
              key={techIndex}
              className="px-4 py-2 text-sm font-medium text-secondary-text-300 bg-background-300/80 border border-border-500/30 rounded-full hover:border-blue-500/50 hover:text-blue-300 hover:bg-blue-500/10 transition-all duration-200 cursor-default"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 + techIndex * 0.05 }}
              whileHover={{ scale: 1.05 }}
            >
              {technology}
            </motion.span>
          ))}
        </motion.div>

        {/* Action Links */}
        <motion.div
          className="flex items-center gap-6 pt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {links.github && (
            <Link
              href={links.github}
              target="_blank"
              className="group/link inline-flex items-center gap-2 text-primary-text-300 hover:text-blue-400 transition-all duration-200"
            >
              <GithubSvg className="w-5 h-5 group-hover/link:scale-110 transition-transform duration-200" />
              <span className="font-medium">View Code</span>
              <div className="h-px bg-blue-500 w-0 group-hover/link:w-full transition-all duration-300"></div>
            </Link>
          )}

          <Link
            href={links.demo}
            target="_blank"
            className="group/demo inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200 relative overflow-hidden"
          >
            <span className="font-medium relative z-10">Live Demo</span>
            <DemoArrowSvg className="w-4 h-4 group-hover/demo:translate-x-1 transition-transform duration-200 relative z-10" />

            {/* Animated background on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 translate-x-full group-hover/demo:translate-x-0 transition-transform duration-300"></div>
          </Link>
        </motion.div>

        {/* Decorative accent line */}
        <div className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </motion.div>
  );
}
