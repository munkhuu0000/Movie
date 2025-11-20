"use client";
import { Header } from "@/app/_components/Header";
import { FirstSection } from "./_components/FirstSection";
import { SecondSection } from "./_components/unUsed/SecondSection";
import { ThirdSection } from "./_components/unUsed/ThirdSection";
import { FourthSection } from "./_components/unUsed/FourthSection";
import { FifthSection } from "./_components/FifthSection";
import { UpComing } from "./_components/UpComing";
import { Popular } from "./_components/Popular";
import { TopRated } from "./_components/TopRated";

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <Header />
      <FirstSection />
      <TopRated />
      <Popular />
      <UpComing />
      <FifthSection />
    </div>
  );
}
