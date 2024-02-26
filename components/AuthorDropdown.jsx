import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { AlignLeft } from 'lucide-react'
import { Button } from './ui/button'
import Link from 'next/link'

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

const AuthorDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className=''>
        <Button variant='outline'>
          <p>Authors</p>
          {/* <AlignLeft /> */}
          <span className='sr-only'>Toggle links</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-52 ' align='start' sideOffset={25}>
        {links.map((link) => {
          return (
            <DropdownMenuItem key={link.href}>
              <Link href={link.href} className='flex items-center gap-x-2 '>
                {link.icon} <span className='capitalize'>{link.label}</span>
              </Link>
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
export default AuthorDropdown
