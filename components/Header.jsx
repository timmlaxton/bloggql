import React, {useContext} from 'react'

import Link from 'next/Link'
import Categories from './Categories'

const categories = [{name: 'React', slug: 'react'}, {name:'Web development', slug: 'Web-Def'}]

const Header = () => {
  return (
    <div className='container mx-auto px=10 mb-8'>
      <div className='border-b w-full inline-block border-blue-400 py-8'>
        <div className='md:float-left block'>
          <Link href="/">
            <span className='cursor-pointer font-bold text-4xl text-white'>
              Pop
            </span>
          </Link>
        </div>
        <div className='hidden md:float-left md:contents'>
        {categories.map((category) => (
          <Link key={category.slug} href={`/category/$category.slug}`}>
            <span className='md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>
              {category.name}
            </span>
          </Link>
        ))}
        </div>
      </div>
      </div>
  )
}

export default Header