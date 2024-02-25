'use client'

import { useGetAuthorsQuery } from '@/redux/features/authors/authorsApi'
import { useAuth } from '@clerk/nextjs'

const Playground = () => {
  const { isLoaded, userId, sessionId, getToken } = useAuth()
  const { data, isLoading } = useGetAuthorsQuery()
  console.log(data, userId)

  if (isLoading) {
    return <h1 className='p-8 text-4xl font-bold'>Loading.........</h1>
  }

  return (
    <>
      <div className='container p-8 mx-auto'>
        Hello, {userId} your current active session is {sessionId}
      </div>
      <main className='container p-8 mx-auto '>
        {data?.map((author) => {
          return (
            <li className='p-2' key={author?._id}>
              {author?.name}
            </li>
          )
        })}
      </main>
    </>
  )
}
export default Playground
