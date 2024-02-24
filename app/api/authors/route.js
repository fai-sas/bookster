import Authors from '@/Models/Authors'
import connectDB from '@/lib/connectDB'
import { NextResponse } from 'next/server'

export async function POST(request) {
  const { name, age } = await request.json()
  await connectDB()
  await Authors.create({ name, age })
  return NextResponse.json({ message: 'Author Created' }, { status: 201 })
}
