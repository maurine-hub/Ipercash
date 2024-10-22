import Image from "next/image";
import Hero from "./pages/hero";
import About from "./pages/about";
import Features from "./pages/features";

export default function Home() {
  return (
    <div className="">
      <Hero/>
      <About/>
      <Features/>
    </div>
  );
}
