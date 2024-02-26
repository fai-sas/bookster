'use client'

import { useGetAuthorsQuery } from '@/redux/features/authors/authorsApi'
import Image from 'next/image'
import Link from 'next/link'

const AuthorsPage = () => {
  const { data, isLoading } = useGetAuthorsQuery()

  if (isLoading) {
    return <h1 className='p-8 text-4xl font-bold'>Loading.........</h1>
  }

  return (
    <>
      <main className='container grid grid-cols-1 p-8 mx-auto md:grid-cols-3 '>
        {data?.authors?.map((author) => {
          const image = author?.image?.[0]
          return (
            <div key={author?._id} className='m-8 bg-gray-100 '>
              <div className='p-8 mx-auto '>
                <Link href={`/authors/${author?._id}`}>
                  <div className='p-2 duration-150 bg-white rounded-lg shadow cursor-pointer hover:scale-105 hover:shadow-md'>
                    <Image
                      src={image}
                      alt={author?.name}
                      width={500}
                      height={200}
                    />
                    <p className='my-4 ml-4 text-xl font-semibold text-gray-800'>
                      {author?.name}
                    </p>

                    <p className='pl-4 my-4 font-bold text-gray-500'>
                      {author?.description}
                    </p>
                    <div className='flex justify-between p-4 '>
                      <Link href='/add-author'>
                        <p>Edit</p>
                      </Link>

                      <p>Delete</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          )
        })}
      </main>
    </>
  )
}
export default AuthorsPage
