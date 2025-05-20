import Header from '@/components/Header'
import Projects from '@/components/Projects'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects | Yehtet Aung Portfolio',
  description: 'Explore my projects and work as a software developer.',
}

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="space-y-4 mb-10">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Projects</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                Browse through my portfolio of work and personal projects
              </p>
            </div>
          </div>
        </section>
        <Projects />
      </main>
      <Footer />
    </div>
  )
}
