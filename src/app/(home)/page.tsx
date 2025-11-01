import Footer from "@/components/sections/Footer";
import IntroSection from "@/components/sections/IntroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import SolutionSection from "@/components/sections/SolutionSection";
import CommunitySection from "@/components/sections/CommunitySection";

export default function HomePage() {
  return (
    <main className="flex flex-col flex-1">
      <IntroSection />
      <FeaturesSection />
      <SolutionSection />
      <CommunitySection />
      <Footer />
    </main>
  );
}
