'use client'

import {
  useDeleteCategoryMutation,
  useGetCategoriesQuery,
} from '@/redux/features/categories/categoriesApi'
import Link from 'next/link'
import { Button } from './ui/button'
import { toast } from 'sonner'

const AllCategories = () => {
  const { data, isLoading } = useGetCategoriesQuery()
  const [deleteCategory, { isSuccess }] = useDeleteCategoryMutation()

  const handleDelete = (categoryId) => {
    if (categoryId) {
      deleteCategory(categoryId)
    }
  }

  if (isLoading) {
    return <h1 className='p-8 text-4xl font-bold'>Loading.........</h1>
  }

  return (
    <div className='container p-8 mx-auto '>
      <h1 className='text-4xl font-bold '>All Categories</h1>
      {data?.categories?.map((category) => {
        return (
          <li key={category?._id} className='p-2 my-8 text-2xl '>
            <Link href={`/categories/${category?._id}`}>{category?.name}</Link>
            <div className='flex gap-4 p-4 '>
              <Link href={`/edit-category/${category?._id}`}>
                <Button>Edit</Button>
              </Link>
              <Button
                variant='destructive'
                type='button'
                onClick={() => handleDelete(category?._id)}
              >
                Delete
              </Button>
              {isSuccess && toast('Category has been deleted')}
            </div>
          </li>
        )
      })}
    </div>
  )
}
export default AllCategories
