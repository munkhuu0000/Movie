"use client";
import { FirstSection } from "./_components/FirstSection";
import { MovieSections } from "./_components/MovieSections";

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <FirstSection />
      <MovieSections />
    </div>
  );
}
