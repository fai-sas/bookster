'use client'

import * as React from 'react'
import Link from 'next/link'
import { UserButton } from '@clerk/nextjs'

import { cn } from '@/lib/utils'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { useGetCategoriesQuery } from '@/redux/features/categories/categoriesApi'
import { useGetAuthorsQuery } from '@/redux/features/authors/authorsApi'

export default function NavbarDropdown() {
  const { data: categories } = useGetCategoriesQuery()
  const { data: authors } = useGetAuthorsQuery()

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className='text-lg font-bold '>
            Authors
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]  '>
              {authors?.authors?.map((author) => (
                <ListItem
                  key={author?._id}
                  href={`/authors/${author?._id}`}
                  className='font-bold '
                >
                  {author?.name}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className='text-lg font-bold '>
            Categories
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] '>
              {categories?.categories?.map((category) => (
                <ListItem
                  key={category?._id}
                  className='font-bold '
                  href={`/categories/${category?._id}`}
                >
                  {category?.name}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className
            )}
            {...props}
          >
            <div className='text-sm font-medium leading-none'>{title}</div>
            <p className='text-sm leading-snug line-clamp-2 text-muted-foreground'>
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  }
)
ListItem.displayName = 'ListItem'
