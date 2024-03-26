"use client";
import Header from "@/components/Organisms/Header";
import style from "./style.module.css";
import Hero from "@/components/Pages/LandingPage/HeroSection";
import AboutSection from "@/components/Pages/LandingPage/AboutSection";
import OverviewSection from "@/components/Pages/LandingPage/OverviewSection";
import TeamSection from "@/components/Pages/LandingPage/TeamSection";
import Testimonials from "@/components/Pages/LandingPage/Testimonials";
import Footer from "@/components/Organisms/Footer";
import { useState } from "react";

export default function Home() {
  const [heroData, setHeroData] = useState<{ Users: number; total_content: number } | null>(null);

  const receiveDataFromOverview = (data: { Users: number; total_content: number }) => {
    setHeroData(data);
  };
  
  return (
    <main className={style.body}>
      <Header />
      <Hero data={heroData} />
      <AboutSection />
      <TeamSection />
      <OverviewSection onDataReceived={receiveDataFromOverview} />
      <Testimonials />
      <Footer />
    </main>
  );
}
