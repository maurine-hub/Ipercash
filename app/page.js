import Image from "next/image";
import Hero from "./pages/hero";
import About from "./pages/about";
import Features from "./pages/features";
import Checkout from "./pages/checkout";
import Learn from "./pages/learn";

export default function Home() {
  return (
    <div className="">
      <Hero/>
      <About/>
      <Features/>
      <Checkout/>
      <Learn/>
    </div>
  );
}
