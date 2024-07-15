import { Recursive } from 'next/font/google'
import Navbar from './components/Navbar'

const recursive = Recursive({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
      <div className={recursive.className}>
        <Navbar />
        {children}
      </div>
  )
}