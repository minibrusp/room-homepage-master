import style from '../scss/module/HeroImage.module.scss'

const HeroImage = ({heroData, navigator }) => {

  console.log('hero image rendered')

  return ( 
    <div className={style.article__hero__image__container}>
        {/* {heroData && <img src={heroData[navigator].image.mobile} alt="Flowers" />} */}
        {
        heroData &&
        <picture>
          <source media="(max-width: 639px)" srcSet={heroData[navigator].image.mobile} />
          <source media="(min-width: 640px)" srcSet={heroData[navigator].image.desktop} />
          <img src={heroData[navigator].image.mobile} alt="" />
        </picture>
        }
      </div>
   );
}
 
export default HeroImage;