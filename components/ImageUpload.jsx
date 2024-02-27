import { CldUploadWidget } from 'next-cloudinary'
import { useFormContext } from 'react-hook-form'

const ImageUpload = ({ control, onSuccess, form }) => {
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
          type='button'
          className='p-2 bg-purple-300 rounded-md btn btn-primary '
          onClick={() => open()}
        >
          Upload Images
        </button>
      )}
    </CldUploadWidget>
  )
}
export default ImageUpload
