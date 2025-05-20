import { ProjectCard } from './ProjectCard'
import {
  Section,
  SectionContainer,
  SectionHeader,
  SectionTitle,
  SectionDescription,
  SectionContent,
} from '@/components/ui/section'

export default function Projects() {
  const projects = [
    {
      title: 'E-commerce Platform',
      description:
        'A full-stack e-commerce platform with React, Node.js, and MongoDB. Features include product listings, shopping cart, user authentication, and payment integration.',
      image: '/next.svg',
      link: '/projects/ecommerce',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    },
    {
      title: 'Portfolio Website',
      description:
        'A responsive portfolio website built with Next.js and Tailwind CSS. Showcases projects, skills, and contact information with a clean and modern design.',
      image: '/vercel.svg',
      link: '/projects/portfolio',
      tags: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    },
    {
      title: 'Task Management App',
      description:
        'A productivity app for managing tasks and projects with real-time updates. Includes features like task creation, assignment, status tracking, and deadline notifications.',
      image: '/next.svg',
      link: '/projects/task-manager',
      tags: ['React', 'Firebase', 'Material UI'],
    },
    {
      title: 'Weather Dashboard',
      description:
        'Interactive weather dashboard using OpenWeather API and Chart.js. Displays current weather conditions, forecasts, and historical data with intuitive visualizations.',
      image: '/vercel.svg',
      link: '/projects/weather',
      tags: ['JavaScript', 'API Integration', 'Chart.js'],
    },
  ]

  return (
    <Section className="py-16">
      <SectionContainer>
        <SectionHeader className="mb-12">
          <SectionTitle>My Projects</SectionTitle>
          <SectionDescription>Check out some of my recent work</SectionDescription>
        </SectionHeader>
        <SectionContent className="flex flex-col gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </SectionContent>
      </SectionContainer>
    </Section>
  )
}
