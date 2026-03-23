import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import EventsSection from "@/components/EventsSection";
import SubscribeSection from "@/components/SubscribeSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ReviewsCarousel />
      <EventsSection />
      <SubscribeSection />
      <Footer />
    </div>
  );
};

export default Index;
