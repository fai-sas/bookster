import Books from '@/Models/Books'
import connectDB from '@/lib/connectDB'
import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs'

export async function POST(request) {
  try {
    const { userId } = auth()
    const user = await currentUser()

    const name = user?.firstName

    const result = await request.json()

    if (!result?.image?.length === 0) {
      return NextResponse.json(
        { message: 'Image is required' },
        { status: 400 }
      )
    }

    await connectDB()

    const bookData = {
      ...result,
      createdByUserId: userId,
      createdByUserName: name,
    }

    await Books.create(bookData)

    return NextResponse.json({ message: 'Book Created' }, { status: 201 })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { message: `Internal Server Error: ${error.message}` },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    await connectDB()
    const books = await Books.find()
    const queryObject = {}

    if (books.length === 0) {
      return NextResponse.json({ message: 'No Books Found' }, { status: 404 })
    }
    const totalBooks = await Books.countDocuments(queryObject)
    return NextResponse.json({ totalBooks, books })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { message: `Internal Server Error: ${error.message}` },
      { status: 500 }
    )
  }
}
