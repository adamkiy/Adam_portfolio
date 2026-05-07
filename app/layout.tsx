import './globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://example.com'),
  title: 'Adam Portfolio',
  description: 'A modern, fast portfolio built with Next.js, Tailwind, and MDX.',
  openGraph: {
    title: 'Adam Portfolio',
    description: 'A modern, fast portfolio built with Next.js, Tailwind, and MDX.',
    type: 'website'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="min-h-dvh">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
<Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
