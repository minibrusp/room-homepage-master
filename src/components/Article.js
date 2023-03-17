import Hero from './Hero'
import style from '../scss/module/Article.module.scss'
import HeroDescCta from './HeroDescCta';

const Article = ({children}) => {
  return ( 
    <article className={style.article}>

      

      <Hero>
        <HeroDescCta />
      </Hero>
      

      {children}


    </article>
  );
}
 
export default Article;