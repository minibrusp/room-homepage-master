import { useEffect } from 'react';
import style from '../scss/module/HeroImage.module.scss'

const HeroImage = ({heroData, navigator, heroImageRef }) => {


  


  return ( 
    <div className={style.article__hero__image__container}>

        {
        heroData &&
        <picture>
          <source media="(max-width: 639px)" srcSet={heroData[navigator].image.mobile} />
          <source media="(min-width: 640px)" srcSet={heroData[navigator].image.desktop} />
          <img src={heroData[navigator].image.mobile} alt="hero image" ref={heroImageRef} />
        </picture>
        }
      </div>
   );
}
 
export default HeroImage;