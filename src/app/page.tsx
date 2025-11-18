"use client";
import { Header } from "@/app/_components/Header";
import { FirstSection } from "./_components/FirstSection";
import { SecondSection } from "./_components/SecondSection";
import { ThirdSection } from "./_components/ThirdSection";
import { FourthSection } from "./_components/FourthSection";
import { FifthSection } from "./_components/FifthSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
    </div>
  );
}
