import EditCategoryForm from '@/components/EditCategoryForm'

const EditAuthorPage = ({ params }) => {
  const { id } = params
  return (
    <>
      <EditCategoryForm id={id} />
    </>
  )
}
export default EditAuthorPage
