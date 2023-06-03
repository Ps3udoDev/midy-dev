import SideBar from '@/components/SideBar'
import './globals.css'
import { Figtree } from 'next/font/google'

const figtree = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: 'MiDy <Dev>',
  description: 'Listen to music without ads in one place!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={figtree.className}>
        <SideBar>
          {children}
        </SideBar>
      </body>
    </html>
  )
}
