'use client'

import * as React from 'react'

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { useGetBooksQuery } from '@/redux/features/books/booksApi'
import Image from 'next/image'
import Link from 'next/link'
import Title from './Title'

export default function BooksCarousel() {
  const { data, isLoading } = useGetBooksQuery()

  if (isLoading) {
    return <h1 className='p-8 text-4xl font-bold'>Loading.........</h1>
  }

  return (
    <>
      <Title title={'Popular Books'} />

      <Carousel
        opts={{
          align: 'start',
        }}
        // className='w-full max-w-sm'
        className='container p-8 '
      >
        <CarouselContent>
          {data?.books?.map((book) => (
            <CarouselItem key={book?._id} className='md:basis-1/2 lg:basis-1/3'>
              <div className='p-1  w-96'>
                <Card>
                  <CardContent className='flex items-center justify-center p-2 aspect-square'>
                    <Link href={`/books/${book?._id}`}>
                      <div className='p-2 duration-150 bg-white rounded-lg shadow cursor-pointer dark:bg-slate-900 hover:scale-105 hover:shadow-md'>
                        <Image
                          src={book?.image?.[0]}
                          alt={book?.name}
                          width={300}
                          height={200}
                          placeholder='blur'
                          blurDataURL='true'
                          className='mx-auto '
                          style={
                            {
                              // width: '100%',
                              // height: 'auto',
                              // objectFit: 'cover',
                            }
                          }
                        />
                        <p className='my-4 ml-4 text-xl font-semibold text-gray-800'>
                          {book?.name}
                        </p>
                        <p className='pl-4 my-4 font-bold text-gray-500'>
                          {(book?.description || '').slice(0, 30)}...
                        </p>
                        <div className='flex gap-4 '>
                          <p className='my-4 ml-4 font-semibold text-gray-800'>
                            $ {book?.price}
                          </p>
                          <p className='my-4 ml-4 font-semibold text-gray-800'>
                            in stock {book?.stock}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  )
}
