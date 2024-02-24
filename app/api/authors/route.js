import Authors from '@/Models/Authors'
import connectDB from '@/lib/connectDB'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function POST(request) {
  const { name, age } = await request.json()
  await connectDB()
  await Authors.create({ name, age })
  return NextResponse.json({ message: 'Author Created' }, { status: 201 })
}

export async function GET() {
  await connectDB()
  const authors = await Authors.find()
  return NextResponse.json(authors)
}
