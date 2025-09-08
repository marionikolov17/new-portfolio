import Link from 'next/link';

interface InputProps {
  period: string;
  jobTitle: string;
  companyName: string;
  companyLink: string;
  description: string;
  technologies: string[];
  links?: {
    name: string;
    link: string;
  }[];
}

export default function ExperienceCard({
  period,
  jobTitle,
  companyName,
  companyLink,
  description,
  technologies,
  links,
}: InputProps) {
  return (
    <div className="w-full flex flex-col sm:flex-row gap-4 p-4 rounded-lg hover:bg-background-300/50 transition-all duration-300">
      {/* Period */}
      <div className="w-full sm:w-48 shrink-0">
        <p className="text-secondary-text-500 text-sm font-medium">{period}</p>
      </div>

      {/* Content */}
      <div className="flex flex-col grow">
        {/* Job title and company */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
          <h3 className="text-primary-text-500 text-lg font-bold">
            {jobTitle}
          </h3>
          <Link
            href={companyLink}
            className="text-blue-500 text-base hover:text-blue-400 transition-colors duration-300 w-fit"
            target="_blank"
            rel="noopener noreferrer"
          >
            {companyName}
          </Link>
        </div>

        {/* Description */}
        <p
          className="text-secondary-text-500 text-sm mt-3 leading-6"
          dangerouslySetInnerHTML={{ __html: description }}
        />

        {/* Links */}
        {links && links.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {links.map((link) => (
              <LinkCard key={link.name} {...link} />
            ))}
          </div>
        )}

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mt-3">
          {technologies.map((technology) => (
            <TechnologyCard key={technology} name={technology} />
          ))}
        </div>
      </div>
    </div>
  );
}

function TechnologyCard({ name }: { name: string }) {
  return (
    <div className="px-3 py-1 rounded-full bg-blue-900/30 border border-blue-700/40 hover:bg-blue-800/40 hover:border-blue-600/60 transition-colors duration-200">
      <p className="text-blue-400 text-xs font-medium">{name}</p>
    </div>
  );
}

function LinkCard({ name, link }: { name: string; link: string }) {
  return (
    <Link
      href={link}
      className="group/linkcard inline-flex items-center px-3 py-2 rounded-lg bg-gradient-to-r from-background-300/60 to-background-400/40 border border-border-600/40 text-primary-text-400 text-sm font-medium hover:text-blue-300 hover:border-blue-500/40 hover:from-blue-900/20 hover:to-blue-800/20 transition-all duration-300 hover:shadow-md hover:shadow-blue-500/10"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        className="w-4 h-4 group-hover/linkcard:text-blue-400 transition-colors duration-300"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13.213 9.787a3.391 3.391 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961"
        />
      </svg>
      <span className="ml-2">{name}</span>
      <svg
        className="w-3 h-3 ml-1 opacity-0 group-hover/linkcard:opacity-100 transform translate-x-0 group-hover/linkcard:translate-x-0.5 transition-all duration-300"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </Link>
  );
}
