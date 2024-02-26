import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { Toaster } from '@/components/ui/sonner'
import StoreProvider from './StoreProvider'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bookster',
  description: 'Where Bookworms Meet',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <StoreProvider>
        <html lang='en'>
          <body className={inter.className}>
            <div className='lg:col-span-4'>
              <Navbar />
              <div className='px-4 py-16 sm:px-8 lg:px-16'>{children}</div>
            </div>
            <Toaster />
          </body>
        </html>
      </StoreProvider>
    </ClerkProvider>
  )
}
