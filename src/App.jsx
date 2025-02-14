import "./App.css";
import FAQSection from "./components/FAQSection";
import FeaturesSlider from "./components/FeaturesSpecial";
import Footer from "./components/Footer";
import PricingSection from "./components/PricingSection";
import ScrollToTop from "./components/ScrollToTop";
import TutorSection from "./components/TutorSection";
import { LearningPlatform } from "./components/LearningPlatform";
import { FeatureHighlight } from "./components/FeatureHighlight";
import { Sponsor } from "./components/Sponsor";

function App() {
  return (
    <div className="bg-[#F4F4F4]">
      <div className="container mx-auto max-w-[1440px] min-h-screen">
        <LearningPlatform />
        <Sponsor />
        <FeaturesSlider />
        <FeatureHighlight />
        <TutorSection />
        <PricingSection />
        <FAQSection />
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
}

export default App;
