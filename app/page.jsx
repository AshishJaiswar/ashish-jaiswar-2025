import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import SelectedWork from "@/components/SelectedWork";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <Highlights />
      <SelectedWork />
      <Contact />
      <Footer />
    </div>
  );
}
