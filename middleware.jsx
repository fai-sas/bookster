import { authMiddleware } from '@clerk/nextjs'

export default authMiddleware({
  publicRoutes: [
    '/',
    '/api/authors',
    '/api/authors/(.*)',
    '/api/categories',
    '/api/categories/(.*)',
    '/api/books',
    '/api/books/(.*)',
  ],
})

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
