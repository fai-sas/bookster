import EditAuthorForm from '@/components/EditAuthorForm'

const EditAuthorPage = ({ params }) => {
  const { id } = params
  return (
    <>
      <EditAuthorForm id={id} />
    </>
  )
}
export default EditAuthorPage
