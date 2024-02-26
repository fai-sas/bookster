'use client'

import { CldUploadWidget } from 'next-cloudinary'
import { useRouter } from 'next/navigation'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, useFormContext } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { CustomFormField, CustomFormSelect } from './FormComponents'

export const createAndEditAuthorSchema = z.object({
  name: z.string().min(2, {
    message: 'name must be at least 2 characters',
  }),
  description: z.string().min(2, {
    message: 'description must be at least 2 characters.',
  }),
  image: z.array(z.string()).nonempty({
    message: 'At least one image must be uploaded.',
  }),
})

const defaultFormValues = {
  name: '',
  description: '',
  image: [],
}

const MultipleImageUpload = ({ control, onSuccess, form }) => {
  const { setValue } = useFormContext()

  const handleUploadSuccess = async (results) => {
    console.log(results)
    if (!Array.isArray(results)) {
      results = [results]
    }
    const imageUrls = await Promise.all(
      results.map((result) => result.info.url)
    )
    const currentImages = form.getValues('image')
    setValue('image', currentImages.concat(imageUrls))
  }

  return (
    <CldUploadWidget
      name='image'
      control={control}
      uploadPreset='bfouecxf'
      multiple
      onSuccess={onSuccess || handleUploadSuccess}
    >
      {({ open }) => (
        <button
          className='p-2 bg-purple-300 rounded-md btn btn-primary '
          onClick={() => open()}
        >
          Upload Images
        </button>
      )}
    </CldUploadWidget>
  )
}

const CreateAuthorForm = () => {
  const form = useForm({
    resolver: zodResolver(createAndEditAuthorSchema),
    defaultValues: defaultFormValues,
  })

  const router = useRouter()

  function onSubmit(values) {
    console.log(values)
  }

  const { errors } = form.formState

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='p-8 rounded bg-muted'
      >
        <h2 className='mb-6 text-4xl font-semibold capitalize'>add author</h2>
        <div className='grid items-start gap-4 md:grid-cols-2 lg:grid-cols-3'>
          <CustomFormField name='name' control={form.control} />

          <CustomFormField name='description' control={form.control} />

          {/* Multiple image upload with optional behavior */}
          <MultipleImageUpload control={form.control} form={form} />
          {errors.image && <p>{errors.image.message}</p>}
          <Button type='submit' className='self-end capitalize'>
            add author
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default CreateAuthorForm
