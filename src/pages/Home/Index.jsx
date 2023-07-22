import React from 'react'
import Banner from '../../components/Banner/Index'
import Gallery from '../../components/Gallery/Index'
import bannerImage from '../../Assets/banner1.jpg'

function Home() {
  return (
    <div>
      <Banner
        urlImage={bannerImage}
        text="Chez vous, partout et ailleurs"
      />
      <Gallery />
    </div>
  )
}

export default Home
