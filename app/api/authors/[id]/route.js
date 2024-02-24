import Authors from '@/Models/Authors'
import connectDB from '@/lib/connectDB'
import { NextResponse } from 'next/server'

export async function GET(request, { params }) {
  const { id } = params
  await connectDB()
  const author = await Authors.findOne({ _id: id })
  return NextResponse.json(author, { status: 200 })
}
