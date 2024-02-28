'use client'

import { useGetCategoriesQuery } from '@/redux/features/categories/categoriesApi'

const AllCategories = () => {
  const { data, isLoading } = useGetCategoriesQuery()

  if (isLoading) {
    return <h1 className='p-8 text-4xl font-bold'>Loading.........</h1>
  }

  return (
    <div className='container p-8 mx-auto '>
      <h1 className='text-4xl font-bold '>All Categories</h1>
      {data?.categories?.map((category) => {
        return (
          <li key={category?._id} className='p-2 my-8 text-2xl '>
            {category?.name}
          </li>
        )
      })}
    </div>
  )
}
export default AllCategories
