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

export async function PUT(request, { params }) {
  try {
    const { id } = params
    const updatedBook = await request.json()

    await connectDB()

    const result = await Books.findByIdAndUpdate(id, { ...updatedBook })

    if (!result) {
      return NextResponse.json(
        { message: `No book found with id : ${id}` },
        { status: 404 }
      )
    }

    return NextResponse.json({ message: 'Book updated' }, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { message: `Internal Server Error: ${error.message}` },
      { status: 500 }
    )
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = params

    await connectDB()
    const deletedBook = await Books.findByIdAndDelete(id)

    if (!deletedBook) {
      return NextResponse.json(
        { message: `No book found with id: ${id}` },
        { status: 404 }
      )
    }

    return NextResponse.json(
      { message: `Book deleted with id: ${id}` },
      { status: 200 }
    )
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { message: `Internal Server Error: ${error.message}` },
      { status: 500 }
    )
  }
}
