'use client';
import { useNavigation } from '@/context/navigation-context';
import Navigation from './navigation';
import FloatingElements from './floating-elements';
import HeroSection from './hero-section';
import AboutSection from './about-section';
import ExperienceSection from './experience-section';
import ProjectsSection from './projects-section';
import ContactSection from './contact-section';
import Footer from './footer';

export default function LayoutHome() {
  const { isNavOpen } = useNavigation();

  return (
    <main className="w-full min-h-screen overflow-x-hidden scrollbar-hidden flex items-start bg-background-500">
      <Navigation />
      <FloatingElements />
      <div
        className={`w-full min-h-screen overflow-x-hidden transition-all duration-300 ease-in-out ${isNavOpen ? 'translate-x-32 blur-xs' : ''}`}
      >
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
