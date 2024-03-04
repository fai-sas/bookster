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
import Image from 'next/image'
import Link from 'next/link'
import Title from './Title'
import { useGetAuthorsQuery } from '@/redux/features/authors/authorsApi'

export default function AuthorCarousel() {
  const { data, isLoading } = useGetAuthorsQuery()

  if (isLoading) {
    return <h1 className='p-8 text-4xl font-bold'>Loading.........</h1>
  }

  return (
    <>
      <Title title={'Popular Authors'} />

      <Carousel
        opts={{
          align: 'start',
        }}
        // className='w-full max-w-sm'
        className='container p-8 '
      >
        <CarouselContent>
          {data?.authors?.map((author) => (
            <CarouselItem
              key={author?._id}
              className='md:basis-1/2 lg:basis-1/4'
            >
              <div className='p-1'>
                <Card>
                  <CardContent className='flex items-center justify-center p-2 bg-muted aspect-square'>
                    <Link href={`/authors/${author?._id}`}>
                      <div className='p-2 duration-150 rounded-lg cursor-pointer hover:scale-105 hover:shadow-md'>
                        <Image
                          src={author?.image?.[0]}
                          alt={author?.name}
                          width={300}
                          height={200}
                          className='mx-auto rounded-full '
                        />
                        <p className='my-4 ml-4 text-xl font-semibold text-center text-gray-800'>
                          {author?.name}
                        </p>
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
