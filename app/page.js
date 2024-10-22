import Image from "next/image";
import Hero from "./pages/hero";
import About from "./pages/about";

export default function Home() {
  return (
    <div className="">
      <Hero/>
      <About/>
    </div>
  );
}
