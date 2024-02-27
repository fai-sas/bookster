import Categories from '@/Models/Categories'
import connectDB from '@/lib/connectDB'
import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs'

export async function GET(request, { params }) {
  const { id } = params

  try {
    await connectDB()

    const category = await Categories.findOne({ _id: id })

    if (!category) {
      return NextResponse.json(
        { message: `No Categories found with id : ${id}` },
        { status: 404 }
      )
    }

    return NextResponse.json(category, { status: 200 })
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
    const updatedCategory = await request.json()

    await connectDB()

    const result = await Categories.findByIdAndUpdate(id, {
      ...updatedCategory,
    })

    if (!result) {
      return NextResponse.json(
        { message: `No Category found with id : ${id}` },
        { status: 404 }
      )
    }

    return NextResponse.json({ message: 'Category updated' }, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { message: `Internal Server Error: ${error.message}` },
      { status: 500 }
    )
  }
}
