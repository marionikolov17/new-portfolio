import FloatingElements from "./floating-elements";
import HeroSection from "./hero-section";
import AboutSection from "./about-section";
import ExperienceSection from "./experience-section";

export default function LayoutHome() {
    return (
        <main className="w-full min-h-screen overflow-x-hidden bg-background-500 scrollbar-hidden">
            <FloatingElements />
            <HeroSection />
            <AboutSection />
            <ExperienceSection />
        </main>
    )
}