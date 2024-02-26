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
      <div className='container p-8 mx-auto text-4xl font-bold'>
        AuthorDetailsPage : {id}
      </div>
      <h1>{data?.name}</h1>
      <Image src={data?.image[0]} alt={data?.name} width={500} height={200} />
    </>
  )
}
export default AuthorDetailsPage
