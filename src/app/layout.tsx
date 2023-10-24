import SideBar from '@/components/SideBar'
import './globals.css'
import { Figtree } from 'next/font/google'
import SuperbaseProvider from '../../providers/SuperbaseProvider'
import UserProvider from '../../providers/UserProvider'
import ModalProvider from '../../providers/ModalProvider'
import ToasterProvider from '../../providers/ToasterProvider'
import getSongsByUserId from '../../actions/getSongsByIUserId'

const figtree = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: 'MiDy <Dev>',
  description: 'Listen to music without ads in one place!',
}

export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const userSongs = await getSongsByUserId();
  return (
    <html lang="en">
      <body className={figtree.className}>
        <ToasterProvider />
        <SuperbaseProvider>
          <UserProvider>
            <ModalProvider />
            <SideBar songs={userSongs}>
              {children}
            </SideBar>
          </UserProvider>
        </SuperbaseProvider>
      </body>
    </html>
  )
}
