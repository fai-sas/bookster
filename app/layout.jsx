import { Inter, Nunito } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { Toaster } from '@/components/ui/sonner'
import StoreProvider from './StoreProvider'
import Navbar from '@/components/Navbar'
import Providers from './providers'

const inter = Inter({ subsets: ['latin'] })
const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Bookster',
  description: 'Where Bookworms Meet',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <StoreProvider>
        <html lang='en'>
          <body className={nunito.className}>
            <Providers>
              <Navbar />
              {/* <div className='lg:col-span-4'> */}
              {/* {children} */}
              <div className='px-4 py-8 sm:px-8 lg:px-16'>{children}</div>
              {/* </div> */}
              <Toaster />
            </Providers>
          </body>
        </html>
      </StoreProvider>
    </ClerkProvider>
  )
}
