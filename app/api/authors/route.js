import Authors from '@/Models/Authors'
import connectDB from '@/lib/connectDB'
import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const result = await request.json()

    if (!result.image) {
      return NextResponse.json(
        { message: 'Image is required' },
        { status: 400 }
      )
    }

    await connectDB()

    await Authors.create(result)

    return NextResponse.json({ message: 'Author Created' }, { status: 201 })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    await connectDB()
    const authors = await Authors.find()

    if (authors.length === 0) {
      return NextResponse.json({ message: 'No Author Found' }, { status: 404 })
    }

    return NextResponse.json(authors)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
