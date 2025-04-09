import Image from "next/image";
import HeroSection from "./components/organism/heroSection";

export default function Home() {
  return (
    <main>
      <section className="flex flex-col gap-4 justify-center items-center">
        <HeroSection />
        <div></div>
      </section>
    </main>
  );
}
