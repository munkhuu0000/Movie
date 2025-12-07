"use client";
import { Header } from "@/app/_components/Header";
import { FirstSection } from "./_components/FirstSection";
import { FifthSection } from "./_components/FifthSection";
import { MovieSections } from "./_components/MovieSections";

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <FirstSection />
      <MovieSections />
    </div>
  );
}
