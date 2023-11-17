import React from 'react'
import Profile from './components/Profile'
import Article from './components/Article'
import Footer from './components/Footer'
import Navbar from './components/Navbr'
import ButtonPrimary from './components/utils/ButtonPrimary'

export default function App() {
  const title = "Check out";
  return (
    <div>
      <Navbar />
      <Article />
      <Footer />
      <ButtonPrimary title={title}/>
      <Profile />
    </div>
  )
}
