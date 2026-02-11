import Header from "./components/Header";
import Footer from "./components/Footer";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./sections/Hero"), {
  loading: () => <div className="min-h-screen bg-black" />
});
const Concept = dynamic(() => import("./sections/Concept"));
const Service = dynamic(() => import("./sections/Service"));
const Menu = dynamic(() => import("./sections/Menu"));
const Access = dynamic(() => import("./sections/Access"));
const Contact = dynamic(() => import("./sections/Contact"));

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-accent selection:text-black">
      <Header />
      <Hero />
      <Concept />
      <Service />
      <Menu />
      <Access />
      <Contact />
      <Footer />
    </main>
  );
}

