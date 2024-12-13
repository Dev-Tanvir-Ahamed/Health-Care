import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import HowItWorks from "@/components/UI/HomePage/HowItWorks/HowItWorks";
import Specialists from "@/components/UI/HomePage/Specialist/Specialists";
import TopRatedDoctors from "@/components/UI/HomePage/TopRatedDoctors/TopRatedDoctors";
import WhyUs from "@/components/UI/HomePage/WhyUs/WhyUs";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Specialists />
      <TopRatedDoctors />
      <WhyUs />
      <HowItWorks />
    </div>
  );
};

export default HomePage;
