import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import GlobalConnection from "../components/GlobalConnection";
import IndustriesSection from './../components/IndustriesSection';
import WhyChooseUs from "../components/WhyChooseUs";
import GlobalReach from "../components/GlobalReach";

const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <ServicesSection />
      <GlobalConnection />
      <IndustriesSection />
      <WhyChooseUs />
       <GlobalReach />
    </main>
  );
};

export default Home;