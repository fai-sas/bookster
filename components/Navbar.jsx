import { UserButton } from '@clerk/nextjs'
import NavbarDropdown from '@/components/NavbarDropdown'
import Link from 'next/link'
import MobileMenu from './MobileMenu'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  return (
    <nav className='container flex items-center justify-between p-8'>
      <div>
        <Link href='/'>
          <h1 className='text-lg font-bold '>Bookster</h1>
        </Link>
      </div>
      <div>
        <NavbarDropdown />
      </div>

      <div className='flex items-center gap-x-4'>
        <UserButton showName afterSignOutUrl='/' />
        <div className='hidden md:block'>
          <ThemeToggle />
        </div>
      </div>

      <MobileMenu />
    </nav>
  )
}
export default Navbar
