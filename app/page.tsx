import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 max-w-5xl mx-auto w-full">
        <Hero />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}
