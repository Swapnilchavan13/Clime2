import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import WhyCarbonSection from "@/components/landing/WhyCarbonSection";
import PlatformSection from "@/components/landing/PlatformSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import WhoUsesSection from "@/components/landing/WhoUsesSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import StatsSection from "@/components/landing/StatsSection";
import ReportsSection from "@/components/landing/ReportsSection";
import CarbonCreditsSection from "@/components/landing/CarbonCreditsSection";
import PricingSection from "@/components/landing/PricingSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <WhyCarbonSection />
      <PlatformSection />
      <HowItWorksSection />
      <WhoUsesSection />
      <FeaturesSection />
      <StatsSection />
      <ReportsSection />
      <CarbonCreditsSection />
      <PricingSection />
      <Footer />
    </div>
  );
};

export default Index;
