import { UserButton } from '@clerk/nextjs'
import NavbarDropdown from '@/components/NavbarDropdown'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='container flex items-center justify-between p-8'>
      <div>
        <Link href='/'>
          <h1 className='text-lg font-bold '>Bookster</h1>
        </Link>
      </div>
      <NavbarDropdown />
      <div className='flex items-center gap-x-4'>
        <UserButton showName afterSignOutUrl='/' />
      </div>
    </nav>
  )
}
export default Navbar
