import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className='container flex items-center justify-center p-8 mx-auto '>
      <div className='space-y-4 '>
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>

        <Button>
          <Link href='/'>Return Home</Link>
        </Button>
      </div>
    </div>
  )
}
