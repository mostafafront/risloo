import Image from "next/image";
import HeroSection from "./components/organism/heroSection";
import Psychologies from "./components/template/psychologies";

export default function Home() {
  return (
    <main>
      <section className="flex flex-col gap-4 justify-center items-center">
        <HeroSection />
        <div className="container m-auto">
          <Psychologies />
        </div>
      </section>
    </main>
  );
}
