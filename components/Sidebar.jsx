'use client'

import Link from 'next/link'
import { Button } from './ui/button'
import { usePathname } from 'next/navigation'

const links = [
  {
    href: '/author1',
    label: 'Author1',
  },
  {
    href: 'author2',
    label: 'Author2',
  },
  {
    href: 'author3',
    label: 'Author3',
  },
]

const Sidebar = () => {
  const pathName = usePathname()

  return (
    <aside className='h-full px-8 py-4 rounded-md bg-muted'>
      {/* <h1>Bookster</h1> */}
      <div className='flex flex-col mt-20 gap-y-4'>
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
      </div>
    </aside>
  )
}
export default Sidebar
