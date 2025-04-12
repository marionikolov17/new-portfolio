import FloatingElements from "./floating-elements";
import HeroSection from "./hero-section";

export default function LayoutHome() {
    return (
        <main className="w-full min-h-screen overflow-x-hidden bg-background-500">
            <FloatingElements />
            <HeroSection />
        </main>
    )
}