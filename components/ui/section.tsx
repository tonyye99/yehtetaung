import * as React from 'react'
import { cn, heading } from '@/lib/utils'

function Section({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return <section className={cn('w-full py-12 md:py-24', className)} {...props} />
}

function SectionContainer({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('container max-w-5xl px-4 md:px-6 mx-auto', className)} {...props} />
}

function SectionHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('space-y-4 text-center mb-10', className)} {...props} />
}

function SectionTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 className={cn(heading('text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'), className)} {...props} />
  )
}

function SectionDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn('mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400', className)}
      {...props}
    />
  )
}

function SectionContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('', className)} {...props} />
}

export { Section, SectionContainer, SectionHeader, SectionTitle, SectionDescription, SectionContent }
