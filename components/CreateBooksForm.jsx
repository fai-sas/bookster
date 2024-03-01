'use client'

import { useRouter } from 'next/navigation'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { CustomFormField, CustomFormSelect } from './FormComponents'
import ImageUpload from './ImageUpload'
import { useGetAuthorsQuery } from '@/redux/features/authors/authorsApi'
import { toast } from 'sonner'
import { useAddBookMutation } from '@/redux/features/books/booksApi'
import { useGetCategoriesQuery } from '@/redux/features/categories/categoriesApi'
import { DatePicker } from './DatePicker'
import { createAndEditBooksSchema } from '@/lib/formSchema'

const defaultFormValues = {
  name: '',
  description: '',
  image: [],
  author: '',
  isbn: '',
  edition: 1,
  category: 'Fiction',
  language: '',
  format: 'Paperback',
  pages: 0,
  stock: 1,
  price: 11,
}

const CreateBooksForm = () => {
  const { data: categories } = useGetCategoriesQuery()
  const { data: authors } = useGetAuthorsQuery()

  const categoryNames = categories?.categories?.map((category) => category.name)
  const authorNames = authors?.authors?.map((author) => author.name)

  const formats = ['Hardcover', 'Paperback', 'Audiobook', 'E-book']

  const [addBook, { isLoading, isSuccess, isError }] = useAddBookMutation()

  const form = useForm({
    resolver: zodResolver(createAndEditBooksSchema),
    defaultValues: defaultFormValues,
  })

  function onSubmit(values) {
    console.log(values)
    addBook(values)
    // router.push('/books')
    // form.reset()
  }

  const { errors } = form.formState

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='p-8 rounded bg-muted'
      >
        <h2 className='mb-6 text-4xl font-semibold capitalize'>add books</h2>
        <div className='grid items-start gap-4 md:grid-cols-2 lg:grid-cols-2'>
          <CustomFormField name='name' control={form.control} />
          <CustomFormSelect
            name='author'
            control={form.control}
            items={authorNames}
          />
          <CustomFormField name='isbn' control={form.control} />
          <CustomFormField name='edition' control={form.control} />
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

          <CustomFormField name='pages' control={form.control} type='number' />
          <CustomFormField name='stock' control={form.control} type='number' />
          <CustomFormField name='price' control={form.control} type='number' />
          <CustomFormField name='description' control={form.control} />
          <ImageUpload name='image' control={form.control} form={form} />
          {errors.image && <p>{errors.image.message}</p>}
          <Button
            type='submit'
            className='self-end capitalize'
            disabled={isLoading}
          >
            {isLoading ? 'loading...' : 'add book'}
          </Button>
          {isSuccess && toast('Books has been created')}
        </div>
      </form>
    </Form>
  )
}

export default CreateBooksForm
