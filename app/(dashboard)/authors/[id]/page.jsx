'use client'

import { useGetSingleAuthorQuery } from '@/redux/features/authors/authorsApi'
import Image from 'next/image'

const AuthorDetailsPage = ({ params }) => {
  const { id } = params
  const { data, isLoading } = useGetSingleAuthorQuery(id)

  if (isLoading) {
    return <h1 className='p-8 text-4xl font-bold'>Loading.........</h1>
  }

  return (
    <>
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
                  An artist of considerable range, Mike is the name taken by
                  Melbourne-raised, Brooklyn-based Nick Murphy writes, performs
                  and records all of his own music, giving it a warm.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default AuthorDetailsPage
