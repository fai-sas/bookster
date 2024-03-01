import * as z from 'zod'

export const createAndEditCategorySchema = z.object({
  name: z.string().min(2, {
    message: 'name must be at least 2 characters',
  }),
})

export const createAndEditAuthorSchema = z.object({
  name: z.string().min(2, {
    message: 'name must be at least 2 characters',
  }),
  description: z.string().min(2, {
    message: 'description must be at least 2 characters.',
  }),
  image: z.array(z.string()),
})

export const createAndEditBooksSchema = z.object({
  name: z.string().min(2, {
    message: 'name must be at least 2 characters',
  }),
  author: z.string().min(2, {
    message: 'Author name must be at least 2 character long.',
  }),
  isbn: z.string().regex(/^(?:ISBN(?:-10)?:? )?([0-9]{10}|[0-9]{13})$/i, {
    message:
      'Invalid ISBN format. Please provide a valid ISBN-10 or ISBN-13 number.',
  }),
  edition: z.number(),
  description: z.string().min(10, {
    message: 'Description must be at least 10 characters long.',
  }),
  category: z.enum([
    'Fiction',
    'Non-Fiction',
    'Science Fiction',
    'Fantasy',
    'Mystery',
    'Thriller',
    'Romance',
    'Historical Fiction',
    'Biography',
    'Self-Help',
    'Children',
  ]),
  language: z.string(),
  format: z.enum(['Hardcover', 'Paperback', 'Audiobook', 'E-book']),
  pages: z.number().int().positive(),
  stock: z.number().int().nonnegative(),
  price: z.number().positive(),
  image: z.array(z.string()).nonempty({
    message: 'At least one image must be uploaded.',
  }),
})
