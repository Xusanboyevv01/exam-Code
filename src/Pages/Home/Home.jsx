import React from 'react'
import Header from '../../components/Header/Header'
import Hero from '../../components/hero/Hero'
import Explore from '../../components/explore/Explore'
import Services from '../../components/services/Services'
import Faq from '../../components/faq/Faq'
import Download from '../../components/download/Download'
import Footer from '../../components/Footer/Footer'
function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Explore />
      <Services />
      <Faq />
      <Download />
      <Footer />
    </div>
  )
}

export default Home
