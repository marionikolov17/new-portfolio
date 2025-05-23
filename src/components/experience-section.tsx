import SectionDelimiter from './util/section-delimiter';
import ExperienceCard from './experience-card';
import { experienceCards } from '@/constants/experience-cards';

export default function ExperienceSection() {
  return (
    <div
      className="w-full min-h-screen my-20 lg:my-8 flex items-center justify-center"
      id="experience"
    >
      <div className="w-full px-8 md:px-0 md:w-[750px] flex flex-col gap-y-4 overflow-x-hidden">
        <SectionDelimiter title="Experience" number="02" />
        {experienceCards.map((card) => (
          <ExperienceCard key={card.period} {...card} />
        ))}
      </div>
    </div>
  );
}
