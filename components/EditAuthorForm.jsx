'use client'

import { useRouter } from 'next/navigation'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { CustomFormField } from './FormComponents'
import ImageUpload from './ImageUpload'
import {
  useEditAuthorMutation,
  useGetSingleAuthorQuery,
} from '@/redux/features/authors/authorsApi'
import { toast } from 'sonner'
import { useState } from 'react'

export const createAndEditAuthorSchema = z.object({
  name: z.string().min(2, {
    message: 'name must be at least 2 characters',
  }),
  description: z.string().min(2, {
    message: 'description must be at least 2 characters.',
  }),
  image: z.array(z.string()),
})

const EditAuthorForm = ({ id }) => {
  const { data: singleAuthor } = useGetSingleAuthorQuery(id)

  const [editAuthor, { isLoading, isSuccess, isError }] =
    useEditAuthorMutation()

  const [previousImage, setPreviousImage] = useState(null)

  const form = useForm({
    resolver: zodResolver(createAndEditAuthorSchema),
    defaultValues: {
      name: singleAuthor?.name || '',
      description: singleAuthor?.description || '',
      image: singleAuthor?.image || [],
    },
  })

  const router = useRouter()

  function onSubmit(values) {
    const updatedData = { ...values }
    if (values.image.length === 0) {
      updatedData.image = previousImage
    }
    editAuthor({ id, data: JSON.stringify(updatedData) })
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

  if (!isLoading && !isError && singleAuthor?._id) {
    content = (
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='p-8 rounded bg-muted'
        >
          <h2 className='mb-6 text-4xl font-semibold capitalize'>
            edit author
          </h2>
          <div className='grid items-start gap-4 md:grid-cols-2 lg:grid-cols-2'>
            <CustomFormField name='name' control={form.control} />
            <CustomFormField name='description' control={form.control} />
            <ImageUpload name='image' control={form.control} form={form} />
            {errors.image && <p>{errors.image.message}</p>}
            <Button
              type='submit'
              className='self-end capitalize'
              disabled={isLoading}
            >
              {isLoading ? 'loading...' : 'edit author'}
            </Button>
            {/* {isSuccess && toast('Author has been edited successfully ')} */}
            {isSuccess && alert('Author has been edited successfully ')}
          </div>
        </form>
      </Form>
    )
  }

  return content
}

export default EditAuthorForm
