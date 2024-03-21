"use client";
import Header from "@/components/Organisms/Header";
import style from "./style.module.css";
import Hero from "@/components/Pages/LandingPage/HeroSection";
import AboutSection from "@/components/Pages/LandingPage/AboutSection";
import OverviewSection from "@/components/Pages/LandingPage/OverviewSection";
import TeamSection from "@/components/Pages/LandingPage/TeamSection";
import Testimonials from "@/components/Pages/LandingPage/Testimonials";
import Footer from "@/components/Organisms/Footer";

export default function Home() {
  return (
    <main className={style.body}>
      <Header />
      <Hero />
      <AboutSection />
      <TeamSection />
      <OverviewSection />
      <Testimonials />
      <Footer />
    </main>
  );
}
