"use client"
import Header from '@/components/Organisms/Header'
import style from './page.module.css'
import Hero from '@/components/Pages/Hero'
import AboutSection from '@/components/Pages/AboutSection'

export default function Home() {
  return (
    <main className={style.body}>
      <Header /> 
      <Hero /> 
      <AboutSection />
    </main>
  )
}
