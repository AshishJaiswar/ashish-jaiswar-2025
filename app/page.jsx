import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Highlights from "@/components/Highlights";
import SelectedWork from "@/components/SelectedWork";

export default function Home() {
  return (
    <div className="text-gray-800">
      <NavBar />
      <Hero />
      <Highlights />
      <SelectedWork />
    </div>
  );
}
