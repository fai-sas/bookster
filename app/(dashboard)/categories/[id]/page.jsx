'use client'

import BooksByAuthor from '@/components/BooksByAuthor'
import Title from '@/components/Title'
import { useGetBooksQuery } from '@/redux/features/books/booksApi'
import { useGetSingleCategoryQuery } from '@/redux/features/categories/categoriesApi'

const SingleCategoryPage = ({ params }) => {
  const { id } = params
  const { data: categories, isLoading } = useGetSingleCategoryQuery(id)

  const { data: books } = useGetBooksQuery()

  const categoryName = categories?.name

  const booksByCategory = books?.books

  const matchingBooks = booksByCategory?.filter(
    (book) => book?.category === categoryName
  )

  if (isLoading) {
    return <h1 className='p-8 text-4xl font-bold'>Loading.........</h1>
  }

  return (
    <>
      <Title title={categories?.name} />
      <BooksByAuthor matchingBooks={matchingBooks} />
    </>
  )
}
export default SingleCategoryPage
