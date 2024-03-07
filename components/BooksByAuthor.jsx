import Link from 'next/link'
import Image from 'next/image'

const BooksByAuthor = ({ matchingBooks }) => {
  console.log(matchingBooks)

  if (matchingBooks?.length === 0) {
    return <h1 className='p-8 text-4xl font-bold'>No Books Found</h1>
  }

  return (
    <main className='container grid grid-cols-1 p-8 mx-auto md:grid-cols-3 '>
      {matchingBooks?.map((book) => {
        const image = book?.image?.[0]
        return (
          <div key={book?._id} className='m-8 bg-gray-100 '>
            <div className='p-8 mx-auto '>
              <Link href={`/books/${book?._id}`}>
                <div className='p-2 duration-150 bg-white rounded-lg shadow cursor-pointer hover:scale-105 hover:shadow-md'>
                  <Image
                    src={image}
                    alt={book?.name}
                    width={500}
                    height={200}
                  />
                  <p className='my-4 ml-4 text-xl font-semibold text-gray-800'>
                    {book?.name}
                  </p>

                  <p className='pl-4 my-4 font-bold text-gray-500'>
                    {(book?.description || '').slice(0, 30)}...
                  </p>
                </div>
              </Link>
            </div>
          </div>
        )
      })}
    </main>
  )
}
export default BooksByAuthor
