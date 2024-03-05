import * as React from 'react'

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

import image1 from '@/public/887_generated.jpg'
import image2 from '@/public/878_generated.jpg'
import image3 from '@/public/925_generated.jpg'
import Image from 'next/image'

const images = [image1, image2, image3]

export default function Banner() {
  return (
    <Carousel className='w-full '>
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <Card>
              <CardContent className='p-0'>
                <Image src={image} alt={index} />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
