import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import FeaturedArticles from './FeaturedArticles'
import Footer from './Footer'
import CommendOrLike from './CommendOrLike'
import RecentArticles from './RecentArticles'

function Hero() {
  return (
    <div className='bg-gray-50 font-sans text-gray-800'>
 
        <Header/>
        <FeaturedArticles/>
        <CommendOrLike/>
        <RecentArticles/>
  
      
    </div>
  )
}

export default Hero
