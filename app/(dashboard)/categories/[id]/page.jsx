'use client'

import { useGetSingleCategoryQuery } from '@/redux/features/categories/categoriesApi'

const SingleCategoryPage = ({ params }) => {
  const { id } = params
  const { data, isLoading } = useGetSingleCategoryQuery(id)
  console.log(data)

  if (isLoading) {
    return <h1 className='p-8 text-4xl font-bold'>Loading.........</h1>
  }

  return (
    <>
      <li className='p-2 text-4xl font-bold '>{data?.name}</li>
    </>
  )
}
export default SingleCategoryPage
