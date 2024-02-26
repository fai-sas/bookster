import { UserButton } from '@clerk/nextjs'
import AuthorDropdown from './AuthorDropdown'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between px-4 py-4 bg-muted sm:px-16 lg:px-24'>
      <div>
        <h1 className='text-lg font-bold '>Bookster</h1>
      </div>
      <AuthorDropdown />
      <div className='flex items-center gap-x-4'>
        <UserButton showName afterSignOutUrl='/' />
      </div>
    </nav>
  )
}
export default Navbar
