'use client'

import { useRouter } from 'next/navigation'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { CustomFormField } from './FormComponents'
import { useAddCategoryMutation } from '@/redux/features/categories/categoriesApi'
import { toast } from 'sonner'

export const createAndEditAuthorSchema = z.object({
  name: z.string().min(2, {
    message: 'name must be at least 2 characters',
  }),
})

const defaultFormValues = {
  name: '',
  description: '',
  image: [],
  userId: '',
  fullName: '',
}

const CreateCategoriesForm = () => {
  const [addCategory, { isLoading, isSuccess, isError }] =
    useAddCategoryMutation()

  const form = useForm({
    resolver: zodResolver(createAndEditAuthorSchema),
    defaultValues: defaultFormValues,
  })

  const router = useRouter()

  function onSubmit(values) {
    console.log(values)
    addCategory(values)
    form.reset()
  }

  const { errors } = form.formState

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='p-8 rounded bg-muted'
      >
        <h2 className='mb-6 text-4xl font-semibold capitalize'>add category</h2>
        <div className='grid items-start gap-4 md:grid-cols-2 lg:grid-cols-2'>
          <CustomFormField name='name' control={form.control} />
          <Button
            type='submit'
            className='self-end capitalize'
            disabled={isLoading}
          >
            {isLoading ? 'loading...' : 'add category'}
          </Button>
          {isSuccess && toast('Category has been created')}
        </div>
      </form>
    </Form>
  )
}

export default CreateCategoriesForm
