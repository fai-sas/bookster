import { UserButton } from '@clerk/nextjs'
import NavbarDropdown from '@/components/NavbarDropdown'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between px-4 py-4 sm:px-16 lg:px-24'>
      <div>
        <h1 className='text-lg font-bold '>Bookster</h1>
      </div>
      <NavbarDropdown />
      <div className='flex items-center gap-x-4'>
        <UserButton showName afterSignOutUrl='/' />
      </div>
    </nav>
  )
}
export default Navbar
