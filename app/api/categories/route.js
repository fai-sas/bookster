import Categories from '@/Models/Categories'
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

    console.log(user)

    console.log('Received request data:', result)

    console.log('userId:', userId)
    console.log('name:', name)

    await connectDB()

    const categoriesData = {
      ...result,
      createdByUserId: userId,
      createdByUserName: name,
    }

    console.log('Data to be saved:', categoriesData)

    await Categories.create(categoriesData)

    return NextResponse.json({ message: 'Category Created' }, { status: 201 })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { message: `Internal Server Error: ${error.message}` },
      { status: 500 }
    )
  }
}
