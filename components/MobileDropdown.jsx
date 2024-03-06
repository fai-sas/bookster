'use client'

import * as React from 'react'
import { CaretSortIcon } from '@radix-ui/react-icons'

import { Button } from '@/components/ui/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { useGetAuthorsQuery } from '@/redux/features/authors/authorsApi'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function MobileDropdown() {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathName = usePathname()

  const { data: authors } = useGetAuthorsQuery()

  return (
    <>
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className='h-auto space-y-2 '
      >
        <div className='flex items-center justify-between px-4 space-x-4'>
          <h4 className='my-2 text-xl font-bold'>Authors</h4>
          <CollapsibleTrigger>
            <Button variant='ghost' size='sm'>
              <CaretSortIcon className='w-6 h-6' />
              <span className='sr-only'>Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>

        <CollapsibleContent className='space-y-2 '>
          <ul className='flex flex-col items-start gap-2 '>
            {authors?.authors?.map((author) => (
              <Button
                // variant=' outline'
                variant={pathName === author?.name ? 'default' : 'link'}
                className='my-2 ml-8 font-bold rounded-md bg-muted'
                key={author?._id}
              >
                <Link
                  variant='outline'
                  className='font-bold '
                  href={`/authors/${author?._id}`}
                >
                  {author?.name}
                </Link>
              </Button>
            ))}
          </ul>
        </CollapsibleContent>
      </Collapsible>
    </>
  )
}
