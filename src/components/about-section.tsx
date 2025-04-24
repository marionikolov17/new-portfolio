import SectionDelimiter from './util/section-delimiter';

export default function AboutSection() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="w-full px-8 sm:px-0 sm:w-[70%] xl:w-1/2 flex flex-col">
        <SectionDelimiter title="About Me" number="01" />
        <div className="w-full flex flex-col-reverse md:flex-row gap-y-8">
          <div className="grow shrink-0 max-w-full md:max-w-[60%] flex flex-col md:pe-12">
            <p className="text-secondary-text-500 text-justify">
              Hello! I am Mario Nikolov. I enjoy solving problems and learning
              new things along the way. My passion is designing systems and
              developing ready to use products that are scalable and easy to
              maintain.
            </p>
            <p className="text-secondary-text-500 mt-4 text-justify">
              I always look for new challenges and opportunities to grow. My
              biggest goal is to become a person that can be trusted and
              everyone can rely on.
            </p>
            <p className="text-secondary-text-500 mt-4 text-justify">
              Here are the technologies I work with:
            </p>
            <div className="mt-8 w-full flex items-center gap-4 flex-wrap">
              <SkillCard skill="JavaScript" />
              <SkillCard skill="TypeScript" />
              <SkillCard skill="React" />
              <SkillCard skill="Next.js" />
              <SkillCard skill="Node.js" />
              <SkillCard skill="Tailwind CSS" />
            </div>
          </div>
          <div className="grow shrink-0 relative flex justify-center md:justify-start">
            <div className="w-64 h-64 z-10 flex items-center justify-center overflow-hidden rounded-lg relative bg-primary-text-500"></div>
            {/* <div className="w-64 h-64 rounded-lg border-2 border-blue-500 absolute right-24 top-6 z-0"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

function SkillCard({ skill }: { skill: string }) {
  return (
    <div className="py-2 px-6 rounded-full bg-gray-800 flex items-center justify-center">
      <span className="text-primary-text-500 text-sm">{skill}</span>
    </div>
  );
}
