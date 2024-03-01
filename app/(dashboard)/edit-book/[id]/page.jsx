import EditBookForm from '@/components/EditBookForm'

const EditBookPage = ({ params }) => {
  const { id } = params
  return (
    <>
      <EditBookForm id={id} />
    </>
  )
}
export default EditBookPage
