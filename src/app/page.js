import LatestNews from './latest/page'
import Technology from './technology/page'
import BlogPostsThreePage from './BlogPostsThree/page'
import BlogPostsFourPage from './BlogPostsFour/page'

export default function Home() {
  return (
    <main className='bg-gray-100'>
      <LatestNews />
      <Technology />
      <BlogPostsThreePage />
      <BlogPostsFourPage />
    </main>
  )
}
