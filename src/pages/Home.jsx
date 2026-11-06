
import Hero from "../components/home/Hero";
import DestinationShowcase from "../components/home/DestinationShowcase";
import WhyChooseUs from "../components/home/WhyChooseUs";
import HowItWorks from "../components/home/HowItWorks";
import Testimonials from "../components/home/Testimonials";
import FinalCTA from "../components/home/FinalCTA";

function Home() {
  return (
    <main id="home">
      <Hero />
      <DestinationShowcase />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <FinalCTA />
    </main>
  );
}

export default Home;
