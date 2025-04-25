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
    <div className="w-full h-max flex flex-col gap-y-4 sm:flex-row p-2 lg:p-6 rounded-lg hover:bg-background-300 transition-all duration-300">
      <div className="w-52 shrink-0 flex ps-2">
        <p className="text-secondary-text-500 text-sm">{period}</p>
      </div>
      <div className="flex flex-col grow px-2">
        <div className="flex items-center">
          <h3 className="text-primary-text-500 text-base sm:text-lg font-bold">
            {jobTitle}
          </h3>
          <Link
            href={companyLink}
            className="ms-2 text-blue-500 text-sm sm:text-lg hover:text-blue-600 transition-all duration-300"
          >
            {companyName}
          </Link>
        </div>
        <p
          className="text-secondary-text-500 text-sm mt-4"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <div className="flex flex-wrap gap-2 mt-4">
          {links &&
            links.length > 0 &&
            links.map((link) => <LinkCard key={link.name} {...link} />)}
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
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
    <div
      className="w-max h-max flex items-center py-1 px-4 rounded-full"
      style={{ backgroundColor: '#1a365d' }}
    >
      <p className="text-blue-500 text-xs font-medium">{name}</p>
    </div>
  );
}

function LinkCard({ name, link }: { name: string; link: string }) {
  return (
    <Link
      href={link}
      className="text-primary-text-500 text-sm flex items-center hover:text-blue-500 transition-all duration-300"
    >
      <svg
        className="w-5 h-5"
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
      <span className="ms-2">{name}</span>
    </Link>
  );
}
