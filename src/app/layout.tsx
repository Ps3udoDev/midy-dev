import SideBar from '@/components/SideBar'
import './globals.css'
import { Figtree } from 'next/font/google'
import SuperbaseProvider from '../../providers/SuperbaseProvider'
import UserProvider from '../../providers/UserProvider'
import ModalProvider from '../../providers/ModalProvider'

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
        <SuperbaseProvider>
          <UserProvider>
            <ModalProvider />
            <SideBar>
              {children}
            </SideBar>
          </UserProvider>
        </SuperbaseProvider>
      </body>
    </html>
  )
}
