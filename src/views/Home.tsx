import Header from '@/layouts/Header'
import Hero from '@/layouts/Hero'
import Products from '@/layouts/Products';
import Sidebar from '@/layouts/Sidebar';
import React from 'react'

const Home : React.FC = () => {
  return (
    <div>
        <Sidebar />
        <Header />
        <Hero />
        <Products />
    </div>
  )
}

export default Home