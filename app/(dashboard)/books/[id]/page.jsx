'use client'

import { useGetSingleBookQuery } from '@/redux/features/books/booksApi'
import Image from 'next/image'
const BooksDetailPage = ({ params }) => {
  const { id } = params
  const { data, isLoading } = useGetSingleBookQuery(id)
  console.log(data)

  if (isLoading) {
    return <h1 className='p-8 text-4xl font-bold'>Loading.........</h1>
  }

  return (
    <div className='relative w-full max-w-md min-w-0 mx-auto mt-16 mb-6 break-words bg-white shadow-lg md:max-w-2xl rounded-xl'>
      <div className='px-6'>
        <div className='flex flex-wrap justify-center'>
          <div className='flex justify-center w-full'>
            <div className='relative'>
              <Image
                src={data?.image[0]}
                alt={data?.name}
                width={250}
                height={150}
                className='block object-cover rounded-full'
              />
            </div>
          </div>
        </div>
        <div className='mt-2 text-center'>
          <h3 className='mb-1 text-2xl font-bold leading-normal text-slate-700'>
            {data?.name}
          </h3>
        </div>
        <div className='py-6 mt-6 text-center border-t border-slate-200'>
          <div className='flex flex-wrap justify-center'>
            <div className='w-full px-4'>
              <p className='mb-4 font-light leading-relaxed text-slate-600'>
                {data?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BooksDetailPage
