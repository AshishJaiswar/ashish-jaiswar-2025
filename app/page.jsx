import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Highlights from "@/components/Highlights";

export default function Home() {
  return (
    <div className="text-gray-800">
      <NavBar />
      <Hero />
      <Highlights />
    </div>
  );
}
