"use client";
import { Header } from "@/app/_components/Header";
import { FirstSection } from "./_components/FirstSection";
import { SecondSection } from "./_components/SecondSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <Header />
      <FirstSection />
      <SecondSection />
    </div>
  );
}
