'use client'

import { useGetAuthorsQuery } from '@/redux/features/authors/authorsApi'

const Playground = () => {
  const { data, isLoading } = useGetAuthorsQuery()
  console.log(data)

  if (isLoading) {
    return <h1 className='p-8 text-4xl font-bold'>Loading.........</h1>
  }

  return (
    <main className='container p-8 mx-auto '>
      {data?.map((author) => {
        return (
          <li className='p-2' key={author?.id}>
            {author?.name}
          </li>
        )
      })}
    </main>
  )
}
export default Playground
