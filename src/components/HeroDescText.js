const HeroDescText = ({heroData, navigator}) => {


  return ( 
    <div className="article__hero__desc__text">
      {heroData && <h1>{heroData[navigator].title}</h1> }
      {heroData && <p>{heroData[navigator].description}</p> }
    </div>
   );
}
 
export default HeroDescText;