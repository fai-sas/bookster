import Authors from '@/Models/Authors'
import connectDB from '@/lib/connectDB'
import { NextResponse } from 'next/server'

export async function GET(request, { params }) {
  const { id } = params

  try {
    await connectDB()

    const author = await Authors.findOne({ _id: id })

    if (!author) {
      return NextResponse.json(
        { message: `No author found with id : ${id}` },
        { status: 404 }
      )
    }

    return NextResponse.json(author, { status: 200 })
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
    const updatedAuthor = await request.json()

    await connectDB()

    const result = await Authors.findByIdAndUpdate(id, { ...updatedAuthor })

    if (!result) {
      return NextResponse.json(
        { message: `No author found with id : ${id}` },
        { status: 404 }
      )
    }

    return NextResponse.json({ message: 'Author updated' }, { status: 200 })
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
    const deletedAuthor = await Authors.findByIdAndDelete(id)

    if (!deletedAuthor) {
      return NextResponse.json(
        { message: `No author found with id: ${id}` },
        { status: 404 }
      )
    }

    return NextResponse.json(
      { message: `Author deleted with id: ${id}` },
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
