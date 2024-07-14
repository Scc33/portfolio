import { Recursive } from 'next/font/google'

const recursive = Recursive({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
      <div className={recursive.className}>
        {children}
      </div>
  )
}