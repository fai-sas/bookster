'use client'

import * as React from 'react'
import { CaretSortIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { useGetCategoriesQuery } from '@/redux/features/categories/categoriesApi'
import Link from 'next/link'

export default function MobileDropdown2() {
  const [isOpen, setIsOpen] = React.useState(false)

  const { data: categories } = useGetCategoriesQuery()

  return (
    <>
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className='h-auto space-y-4 '
      >
        <div className='flex items-center justify-between px-4 space-x-4'>
          <h4 className='my-4 text-xl font-bold'>Categories</h4>
          <CollapsibleTrigger asChild>
            <Button variant='ghost' size='sm'>
              <CaretSortIcon className='w-6 h-6' />
              <span className='sr-only'>Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>

        <CollapsibleContent className='space-y-2 CollapsibleContent'>
          <ul className='flex flex-col items-start gap-2 '>
            {categories?.categories?.map((category) => (
              <Button
                variant=' outline'
                className='my-2 ml-8 font-bold rounded-md bg-muted'
                key={category?._id}
              >
                <Link
                  variant='outline'
                  className='font-bold '
                  href={`/categories/${category?._id}`}
                >
                  {category?.name}
                </Link>
              </Button>
            ))}
          </ul>
        </CollapsibleContent>
      </Collapsible>
    </>
  )
}
