import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Section, SectionContainer } from '@/components/ui/section'
import { heading } from '@/lib/utils'

export default function Hero() {
  return (
    <Section className="lg:py-24 px-2">
      <SectionContainer>
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="mx-auto lg:mx-0 flex items-center justify-center order-first lg:order-last">
            <div className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px] overflow-hidden rounded-full border-4 border-gray-200 dark:border-gray-800 flex items-center justify-center bg-gray-100 dark:bg-gray-900">
              <Image
                src="/vercel.svg"
                alt="Yehtet Aung"
                width={200}
                height={200}
                className="object-contain p-8"
                priority
              />
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4 order-last lg:order-first text-center lg:text-left">
            <div className="space-y-5">
              <h1 className={heading('text-3xl font-bold tracking-tighter sm:text-5xl')}>Hi, I&apos;m Yehtet Aung</h1>
              <p className="max-w-[600px] mx-auto lg:mx-0 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                I&apos;m a passionate software developer specializing in creating beautiful and functional web
                applications. With a strong background in frontend development, I deliver clean, efficient code and
                exceptional user experiences.
              </p>
            </div>
            <div className="flex flex-col gap-4 min-[400px]:flex-row mt-5 justify-center lg:justify-start">
              <Button asChild variant="default">
                <a href="/contact">Contact Me</a>
              </Button>
              <Button asChild variant="outline">
                <a href="/resume.pdf" download>
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </SectionContainer>
    </Section>
  )
}
