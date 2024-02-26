import NavDashboard from '@/components/NavDashboard'
import Sidebar from '@/components/Sidebar'

const layout = ({ children }) => {
  return (
    <main className='grid lg:grid-cols-5'>
      {/* first-col hide on small screen */}
      <div className='hidden lg:block lg:col-span-1 lg:min-h-screen'>
        <Sidebar />
      </div>
      {/* second-col hide dropdown on big screen */}

      <div className='lg:col-span-4'>
        <NavDashboard />
        <div className='px-4 py-16 sm:px-8 lg:px-16'>{children}</div>
      </div>
    </main>
  )
}
export default layout
