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

    await connectDB()

    const categoriesData = {
      ...result,
      createdByUserId: userId,
      createdByUserName: name,
    }

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

export async function GET() {
  try {
    await connectDB()
    const categories = await Categories.find()
    const queryObject = {}

    if (categories.length === 0) {
      return NextResponse.json(
        { message: 'No Categories Found' },
        { status: 404 }
      )
    }
    const totalCategories = await Categories.countDocuments(queryObject)
    return NextResponse.json({ totalCategories, categories })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { message: `Internal Server Error: ${error.message}` },
      { status: 500 }
    )
  }
}
