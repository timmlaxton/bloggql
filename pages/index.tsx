import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {

const posts = [
  {title: 'React Testing', excerpt: 'Learn react testing'},
  {title: 'React with Tailwind', excerpt: 'Learn react with tailwind'},
  
]

  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Blog</title>
        </Head>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                  {posts.map((post, index) => (
            <div>
              {post.title}
            {post.excerpt}
            </div>
          ))}
        </div>
        <div className='lg:col-span8 col-span-1'>
          <div className='lg:sticky relative top-8'>

          </div>
        </div>
  </div>
  )
}

export default Home
