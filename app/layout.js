import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import StoreProvider from './StoreProvider'

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
          <body className={inter.className}>{children}</body>
        </html>
      </StoreProvider>
    </ClerkProvider>
  )
}
