import imageDark from '../images/image-about-dark.jpg'
import imageLight from '../images/image-about-light.jpg'

import style from '../scss/module/About.module.scss'

const About = () => {
  console.log(`About rendered`)
  return ( 
    <section className={style.article__about}>

      <div className={style.article__about__image__top__container}>
        <img src={imageDark} alt="image about dark" />
      </div>


      <div className={style.article__about__desc__container}>
        <h2>About our furniture</h2>
        <p>Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.</p>
      </div>

      <div className={style.article__about__image__bot__container}>
        <img src={imageLight} alt="image about light" />
      </div>

      </section>
   );
}
 
export default About;