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
    console.log('userId:', userId)
    console.log('name:', name)
    const result = await request.json()

    console.log('Received request data:', result)

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

    console.log('Data to be saved:', authorData)

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
