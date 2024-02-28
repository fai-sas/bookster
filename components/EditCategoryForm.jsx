'use client'

import { useRouter } from 'next/navigation'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { CustomFormField } from './FormComponents'

import {
  useEditCategoryMutation,
  useGetSingleCategoryQuery,
} from '@/redux/features/categories/categoriesApi'
import { toast } from 'sonner'
import { useState } from 'react'

export const createAndEditCategorySchema = z.object({
  name: z.string().min(2, {
    message: 'name must be at least 2 characters',
  }),
})

const EditCategoryForm = ({ id }) => {
  const { data: singleCategory } = useGetSingleCategoryQuery(id)

  const [editCategory, { isLoading, isSuccess, isError }] =
    useEditCategoryMutation()

  const form = useForm({
    resolver: zodResolver(createAndEditCategorySchema),
    defaultValues: {
      name: singleCategory?.name || '',
    },
  })

  function onSubmit(values) {
    editCategory({ id, data: JSON.stringify(values) })

    form.reset()
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='p-8 rounded bg-muted'
      >
        <h2 className='mb-6 text-4xl font-semibold capitalize'>
          edit category
        </h2>
        <div className='grid items-start gap-4 md:grid-cols-2 lg:grid-cols-2'>
          <CustomFormField name='name' control={form.control} />
          <Button
            type='submit'
            className='self-end capitalize'
            disabled={isLoading}
          >
            {isLoading ? 'loading...' : 'edit category'}
          </Button>
          {isSuccess && toast('Category has been edited')}
        </div>
      </form>
    </Form>
  )
}
export default EditCategoryForm
