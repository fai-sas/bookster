'use client'

import { createAndEditBooksSchema } from '@/lib/formSchema'
import {
  useEditBookMutation,
  useGetSingleBookQuery,
} from '@/redux/features/books/booksApi'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { Button } from './ui/button'
import { CustomFormField, CustomFormSelect } from './FormComponents'
import ImageUpload from './ImageUpload'
import { Form } from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { useGetCategoriesQuery } from '@/redux/features/categories/categoriesApi'
import { useGetAuthorsQuery } from '@/redux/features/authors/authorsApi'
import { toast } from 'sonner'

const EditBookForm = ({ id }) => {
  const { data: categories } = useGetCategoriesQuery()
  const { data: authors } = useGetAuthorsQuery()

  const categoryNames = categories?.categories?.map((category) => category.name)
  const authorNames = authors?.authors?.map((author) => author.name)
  const formats = ['Hardcover', 'Paperback', 'Audiobook', 'E-book']

  const { data: singleBook } = useGetSingleBookQuery(id)

  const [editBooks, { isLoading, isSuccess, isError }] = useEditBookMutation()

  const [previousImage, setPreviousImage] = useState(null)

  const form = useForm({
    resolver: zodResolver(createAndEditBooksSchema),
    defaultValues: {
      name: singleBook?.name || '',
      author: singleBook?.author || '',
      isbn: singleBook?.isbn || '',
      edition: singleBook?.edition || '',
      description: singleBook?.description || '',
      category: singleBook?.category || '',
      language: singleBook?.language || '',
      format: singleBook?.format || '',
      pages: singleBook?.pages || '',
      stock: singleBook?.stock || '',
      price: singleBook?.price || '',
      image: singleBook?.image || [],
    },
  })

  function onSubmit(values) {
    const updatedData = { ...values }
    if (values.image.length === 0) {
      updatedData.image = previousImage
    }
    editBooks({ id, data: JSON.stringify(updatedData) })
    console.log(id, updatedData)
    form.reset()
  }

  const { errors } = form.formState

  let content = null

  if (isLoading) {
    content = <h1>Loading...</h1>
  }

  if (!isLoading && isError) {
    content = (
      <>
        <h1 className='font-bold text-red-400 '>There was an error occurred</h1>
      </>
    )
  }

  if (!isLoading && !isError && singleBook?._id) {
    content = (
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='p-8 rounded bg-muted'
        >
          <h2 className='mb-6 text-4xl font-semibold capitalize'>edit books</h2>
          <div className='grid items-start gap-4 md:grid-cols-2 lg:grid-cols-2'>
            <CustomFormField name='name' control={form.control} />
            <CustomFormSelect
              name='author'
              control={form.control}
              items={authorNames}
            />
            <CustomFormField name='isbn' control={form.control} />
            <CustomFormField
              name='edition'
              type='number'
              control={form.control}
            />
            <CustomFormSelect
              name='category'
              control={form.control}
              items={categoryNames}
            />
            <CustomFormSelect
              name='format'
              control={form.control}
              items={formats}
            />

            <CustomFormField name='language' control={form.control} />

            <CustomFormField
              name='pages'
              control={form.control}
              type='number'
            />
            <CustomFormField
              name='stock'
              control={form.control}
              type='number'
            />
            <CustomFormField
              name='price'
              control={form.control}
              type='number'
            />
            <CustomFormField name='description' control={form.control} />
            <ImageUpload name='image' control={form.control} form={form} />
            {errors.image && <p>{errors.image.message}</p>}
            <Button
              type='submit'
              className='self-end capitalize'
              disabled={isLoading}
            >
              {isLoading ? 'loading...' : 'edit book'}
            </Button>
            {isSuccess && toast('Book has been edited')}
          </div>
        </form>
      </Form>
    )
  }

  return content
}

export default EditBookForm
