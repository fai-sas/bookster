import AuthorCarousel from '@/components/AuthorCarousel'
import Banner from '@/components/Banner'
import BooksCarousel from '@/components/BooksCarousel'

export default function Home() {
  return (
    <>
      <Banner />
      <BooksCarousel />
      <AuthorCarousel />
    </>
  )
}
