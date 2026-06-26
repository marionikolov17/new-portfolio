import SectionDelimiter from './util/section-delimiter';
import ExperienceCard from './experience-card';
import { experienceCards } from '@/constants/experience-cards';

export default function ExperienceSection() {
  return (
    <div
      className="w-full min-h-screen my-20 lg:my-8 flex items-center justify-center"
      id="experience"
    >
      <div className="w-full max-w-4xl px-6 md:px-8 flex flex-col gap-y-4">
        <SectionDelimiter title="Experience" number="03" />

        {/* Timeline container */}
        <div className="relative mt-8">
          {/* Timeline line - positioned to left of content */}
          <div className="hidden md:block absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/40 via-blue-400/20 to-blue-500/40" />

          <div className="space-y-4">
            {experienceCards.map((card) => (
              <div key={card.period} className="relative">
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-2 top-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-background-400 z-10" />

                {/* Experience card */}
                <div className="md:ml-12">
                  <ExperienceCard {...card} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
