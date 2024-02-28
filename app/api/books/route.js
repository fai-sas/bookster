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
