'use client'

import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import { Button } from './ui/button'
import { usePathname } from 'next/navigation'

const links = [
  {
    href: '/books',
    label: 'Books',
  },
  {
    href: '/authors',
    label: 'Authors',
  },
  {
    href: '/add-author',
    label: 'Add Author',
  },
  {
    href: '/categories',
    label: 'Categories',
  },
]

const NavDashboard = () => {
  const pathName = usePathname()
  return (
    <nav className='flex items-center justify-between px-4 py-4 bg-muted sm:px-16 lg:px-24'>
      <div>
        <h1 className='text-lg font-bold '>Bookster</h1>
      </div>
      {links.map((link) => {
        return (
          <Button
            asChild
            key={link?.href}
            variant={pathName === link?.href ? 'default' : 'link'}
          >
            <Link href={link?.href} className='flex items-center gap-x-2 '>
              {link?.icon} <span className='capitalize'>{link?.label}</span>
            </Link>
          </Button>
        )
      })}

      <div className='flex items-center gap-x-4'>
        <UserButton showName afterSignOutUrl='/' />
      </div>
    </nav>
  )
}
export default NavDashboard
