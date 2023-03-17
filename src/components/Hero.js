import desktopHeroImage1 from '../images/desktop-image-hero-1.jpg'
import desktopHeroImage2 from '../images/desktop-image-hero-2.jpg'
import desktopHeroImage3 from '../images/desktop-image-hero-3.jpg'
import mobileHeroImage1 from '../images/mobile-image-hero-1.jpg'
import mobileHeroImage2 from '../images/mobile-image-hero-2.jpg'
import mobileHeroImage3 from '../images/mobile-image-hero-3.jpg'

import btnIconLeft from '../images/icon-angle-left.svg'
import btnIconRight from '../images/icon-angle-right.svg'


import style from '../scss/module/Hero.module.scss'
import { LeftButton, RightButton } from './Button'
import { useEffect, useState } from 'react'
import HeroImage from './HeroImage'
import HeroDescText from './HeroDescText'

const heroInitial = [
  {
    image: {
      mobile: mobileHeroImage1,
      desktop: desktopHeroImage1,
    },
    title: "Discover innovative ways to decorate",
    description: "We provide unmatched quality, comfort, and style for property owners across the country.Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
  },
  {
    image: {
      mobile: mobileHeroImage2,
      desktop: desktopHeroImage2,
    },
    title: "We are available all across the globe",
    description: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
  },
  {
    image: {
      mobile: mobileHeroImage3,
      desktop: desktopHeroImage3,
    },
    title: "Manufactured with the best materials",
    description: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
  },
 
]

const Hero = ({children}) => {
  const [heroData, setHeroData] = useState(null)
  const [navigator, setNavigator] = useState(0)

  useEffect(() => {
    setHeroData(heroInitial)
  }, [])

  const handleButtonClick = (direction) => {
    if(direction === 'left') {
      if(navigator == 0) return
      setNavigator(prevValue => prevValue - 1)
    }
    if(direction === 'right') {
      if(navigator == 2) return
      setNavigator(prevValue => prevValue + 1)
    }
  }

  return (
    <section className={style.article__hero}>

        <HeroImage heroData={heroData} navigator={navigator} />

        <div className={style.article__hero__btn__container}>
          <LeftButton imgUrl={btnIconLeft} handleButtonClick={handleButtonClick}  />
          <RightButton imgUrl={btnIconRight} handleButtonClick={handleButtonClick}   />
        </div>

        <div className={style.article__hero__desc__container}>

          <HeroDescText heroData={heroData} navigator={navigator} />

          {children}

        </div>


      </section>
  );
}
 
export default Hero;