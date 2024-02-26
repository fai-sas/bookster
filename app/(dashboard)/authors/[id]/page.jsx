const AuthorDetailsPage = ({ params }) => {
  const { id, name } = params

  return (
    <div className='container p-8 mx-auto text-4xl font-bold'>
      AuthorDetailsPage : {id}
      <h1>{name}</h1>
    </div>
  )
}
export default AuthorDetailsPage
