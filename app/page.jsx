import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Highlights from "@/components/Highlights";
import SelectedWork from "@/components/SelectedWork";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="text-gray-800">
      <NavBar />
      <Hero />
      <Highlights />
      <SelectedWork />
      <Contact />
      <Footer />
    </div>
  );
}
