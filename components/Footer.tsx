import Link from 'next/link'
import { Separator } from '@/components/ui/separator'

export default function Footer() {
  return (
    <footer className="max-w-5xl border-t mx-auto w-full py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Yehtet Aung</h3>
            <p className="text-sm text-muted-foreground">
              Software developer specializing in creating beautiful and functional web applications.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Pages</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:underline hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:underline hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/tonyye99"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:underline hover:text-primary"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:underline hover:text-primary"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:underline hover:text-primary"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">
                <a href="mailto:yehtetaung@gmail.com" className="hover:underline hover:text-primary">
                  yehtetaung@gmail.com
                </a>
              </li>
              <li className="text-sm text-muted-foreground">Bangkok, Thailand</li>
            </ul>
          </div>
        </div>
        <div className="mt-10">
          <Separator className="mb-6" />
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Yehtet Aung. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
