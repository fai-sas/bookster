import Books from '@/Models/Books'
import connectDB from '@/lib/connectDB'
import { NextResponse } from 'next/server'

export async function GET(request, { params }) {
  const { id } = params

  try {
    await connectDB()

    const books = await Books.findOne({ _id: id })

    if (!books) {
      return NextResponse.json(
        { message: `No book found with id : ${id}` },
        { status: 404 }
      )
    }

    return NextResponse.json(books, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { message: `Internal Server Error: ${error.message}` },
      { status: 500 }
    )
  }
}
