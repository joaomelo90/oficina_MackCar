import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WorkCarousel from "@/components/WorkCarousel";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <WorkCarousel />
      <Testimonials />
      <Location />
      <Footer />
    </div>
  );
};

export default Index;
