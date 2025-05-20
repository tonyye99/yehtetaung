import {
  Section,
  SectionContainer,
  SectionHeader,
  SectionTitle,
  SectionDescription,
  SectionContent,
} from '@/components/ui/section'
import { heading } from '@/lib/utils'

interface ExperienceItem {
  title: string
  company: string
  period: string
  description: string
  skills: string[]
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      title: 'Senior Frontend Developer',
      company: 'Tech Solutions Inc.',
      period: '2021 - Present',
      description:
        'Led development of multiple client projects using React and Next.js. Implemented responsive designs and optimized performance for enterprise applications.',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    },
    {
      title: 'Web Developer',
      company: 'Digital Creations',
      period: '2018 - 2021',
      description:
        'Built and maintained various web applications for clients. Worked closely with designers to implement pixel-perfect interfaces.',
      skills: ['JavaScript', 'React', 'Node.js', 'CSS'],
    },
    {
      title: 'Junior Developer',
      company: 'StartUp Innovations',
      period: '2016 - 2018',
      description:
        'Started as an intern and grew into a full-time role. Assisted in developing web applications and learned modern development practices.',
      skills: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    },
  ]

  return (
    <Section className="py-16">
      <SectionContainer>
        <SectionHeader className="mb-12">
          <SectionTitle>Experience</SectionTitle>
          <SectionDescription>My professional journey</SectionDescription>
        </SectionHeader>
        <SectionContent>
          <div className="relative">
            <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gray-200 dark:bg-gray-800 transform md:-translate-x-1/2"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="absolute left-[15px] md:left-1/2 top-[-5px] w-[30px] h-[30px] bg-background border-4 border-primary rounded-full transform -translate-x-1/2 flex items-center justify-center">
                    <span className="w-[14px] h-[14px] bg-primary rounded-full"></span>
                  </div>

                  <div className="ml-12 md:ml-0 md:hidden mb-3 text-sm font-medium text-gray-500 dark:text-gray-400">
                    {exp.period}
                  </div>

                  <div className="w-full md:w-[calc(50%-30px)] ml-1 mt-4 md:ml-0 md:px-6">
                    <div className="p-5 bg-background border rounded-lg shadow-sm">
                      <div className="hidden md:block mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                        {exp.period}
                      </div>

                      <h3 className={heading('text-lg font-bold')}>{exp.title}</h3>
                      <p className="text-gray-500 dark:text-gray-400 mb-3">{exp.company}</p>
                      <p className="mb-4">{exp.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-100"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionContent>
      </SectionContainer>
    </Section>
  )
}
