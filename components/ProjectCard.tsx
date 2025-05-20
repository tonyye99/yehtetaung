import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { heading } from '@/lib/utils'

interface ProjectCardProps {
  title: string
  description: string
  image: string
  link: string
  tags: string[]
}

export function ProjectCard({ title, description, image, link, tags }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden group hover:shadow-md transition-all duration-300">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-2/5 shrink-0 md:px-3">
          <div className="relative aspect-video sm:aspect-auto md:h-full overflow-hidden bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
            <Image
              src={image}
              alt={title}
              width={300}
              height={300}
              className="object-contain p-8 transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>
        <div className="flex flex-col flex-1 md:py-2 mt-8">
          <CardHeader className="pb-2">
            <CardTitle className={heading('text-xl md:text-2xl')}>{title}</CardTitle>
            <CardDescription className="text-sm md:text-base">{description}</CardDescription>
          </CardHeader>
          <CardContent className="pb-2">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          </CardContent>
          <CardFooter className="mt-auto pt-4">
            <Button variant="link" asChild className="p-0 group-hover:underline">
              <Link href={link} className="flex items-center text-sm font-medium">
                View Project
                <svg
                  className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </Link>
            </Button>
          </CardFooter>
        </div>
      </div>
    </Card>
  )
}
