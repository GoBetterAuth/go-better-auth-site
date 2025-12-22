import Footer from "@/components/sections/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ArchitectureSection from "@/components/sections/ArchitectureSection";
import ConfigurationSection from "@/components/sections/ConfigurationSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import HooksSection from "@/components/sections/HooksSection";
import PluginSection from "@/components/sections/PluginSection";
import DeveloperExperienceSection from "@/components/sections/DeveloperExperienceSection";
import CommunitySection from "@/components/sections/CommunitySection";

export default function HomePage() {
  return (
    <main className="flex flex-col flex-1">
      <HeroSection />
      <ArchitectureSection />
      <ConfigurationSection />
      <FeaturesSection />
      <ComparisonSection />
      <HooksSection />
      <PluginSection />
      <DeveloperExperienceSection />
      <CommunitySection />
      <Footer />
    </main>
  );
}
