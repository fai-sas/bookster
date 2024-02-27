import Authors from '@/Models/Authors'
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

    const authorData = {
      ...result,
      createdByUserId: userId,
      createdByUserName: name,
    }

    await Authors.create(authorData)

    return NextResponse.json({ message: 'Author Created' }, { status: 201 })
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
    const authors = await Authors.find()
    const queryObject = {}

    if (authors.length === 0) {
      return NextResponse.json({ message: 'No Author Found' }, { status: 404 })
    }
    const totalAuthors = await Authors.countDocuments(queryObject)
    return NextResponse.json({ totalAuthors, authors })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { message: `Internal Server Error: ${error.message}` },
      { status: 500 }
    )
  }
}
