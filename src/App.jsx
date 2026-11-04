import Navbar from "./components/layout/Navbar";
import CustomCursor from "./components/common/CustomCursor";
import Hero from "./components/home/Hero";
import DestinationShowcase from "./components/home/DestinationShowcase";
import WhyChooseUs from "./components/home/WhyChooseUs";
import HowItWorks from "./components/home/HowItWorks";
import Testimonials from "./components/home/Testimonials";

function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />

      <main>
        <Hero />
        <DestinationShowcase />
        <WhyChooseUs />
        <HowItWorks />
        <Testimonials />
      </main>

    </>
  );
}

export default App;
