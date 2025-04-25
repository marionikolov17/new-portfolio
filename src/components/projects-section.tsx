/* eslint-disable @typescript-eslint/no-unused-vars */
import Link from 'next/link';
import SectionDelimiter from './util/section-delimiter';
import { DemoArrowSvg, GithubSvg } from './constants/tech-icons';
import { projects } from '@/constants/projects';

export default function ProjectsSection() {
  return (
    <div
      className="w-full min-h-screen my-8 flex items-center justify-center"
      id="projects"
    >
      <div className="w-full px-8 lg:px-0 lg:w-[75%] xl:w-[65%] 2xl:w-1/2 flex flex-col gap-y-4 overflow-x-hidden">
        <SectionDelimiter title="Projects" number="03" />
        {projects.map((project, index) => (
          <ProjectCard key={index} index={index} {...project} />
        ))}
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
    <div
      className={`w-full min-h-[350px] gap-4 lg:gap-0 mb-10 sm:mb-20 flex flex-col sm:flex-row overflow-x-hidden ${shouldInvert ? 'flex-col-reverse sm:flex-row-reverse' : ''}`}
    >
      <div className="w-full sm:w-1/2 lg:w-[55%] grow shrink-0 overflow-hidden rounded-lg h-[300px] sm:h-[350px]">
        <div className="w-full h-full bg-primary-text-500"></div>
      </div>
      <div
        className={`w-full sm:w-[45%] grow shrink-0 ${shouldInvert ? 'text-left' : 'text-right'} relative h-max flex flex-col justify-center items-end ${shouldInvert ? 'items-start' : ''}`}
      >
        <h4 className="text-blue-500 text-base">{type}</h4>
        <h1 className="text-3xl font-bold text-primary-text-500 mt-2">
          {title}
        </h1>
        <div className="mt-8 relative px-0 py-4 lg:px-4 h-max">
          <p className="text-sm text-primary-text-500 z-10 relative">
            {description}
          </p>
          <div
            className={`absolute hidden lg:flex z-0 top-0 w-[400px] lg:w-[500px] h-full bg-background-200 rounded-lg ${shouldInvert ? 'left-0' : 'right-0'}`}
          ></div>
        </div>
        <div
          className={`mt-8 flex gap-4 flex-wrap ${shouldInvert ? 'justify-start' : 'justify-end'}`}
        >
          {technologies.map((technology, index) => (
            <span key={index} className="text-sm text-secondary-text-500">
              {technology}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-4 mt-8">
          <Link
            className="text-primary-text-500 hover:text-blue-500 transition-all duration-300"
            href={links.github}
          >
            <GithubSvg className="w-6 h-6" />
          </Link>
          <Link
            className="text-primary-text-500 hover:text-blue-500 transition-all duration-300"
            href={links.demo}
          >
            <DemoArrowSvg className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </div>
  );
}
