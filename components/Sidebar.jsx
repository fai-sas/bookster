'use client'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

import Link from 'next/link'
import { Button } from './ui/button'
import { usePathname } from 'next/navigation'

const SHEET_SIDES = ['left']

const links = [
  {
    href: '/books',
    label: 'all books',
  },
  {
    href: '/add-book',
    label: 'add book',
  },
  {
    href: '/authors',
    label: 'all authors',
  },
  {
    href: '/add-author',
    label: 'add author',
  },
  {
    href: '/categories',
    label: 'all categories',
  },
  {
    href: '/add-category',
    label: 'add category',
  },
]

const Sidebar = () => {
  const pathName = usePathname()

  return (
    <>
      <aside className=''>
        <div className='flex justify-end'>
          {SHEET_SIDES.map((side) => (
            <Sheet key={side}>
              <SheetTrigger asChild>
                <Button>Menu</Button>
              </SheetTrigger>
              <SheetContent className='flex flex-col ' side={side}>
                {links.map((link) => {
                  return (
                    <Button
                      className='py-4'
                      asChild
                      key={link?.href}
                      variant={pathName === link?.href ? 'default' : 'link'}
                    >
                      <Link
                        href={link?.href}
                        className='flex items-center gap-x-2 '
                      >
                        {link?.icon}{' '}
                        <span className='capitalize'>{link?.label}</span>
                      </Link>
                    </Button>
                  )
                })}
              </SheetContent>
            </Sheet>
          ))}
        </div>
      </aside>
    </>
  )
}
export default Sidebar
