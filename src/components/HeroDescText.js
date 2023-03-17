const HeroDescText = ({heroData, navigator, heroHeaderRef, heroDescRef}) => {


  return ( 
    <div className="article__hero__desc__text">
      {heroData && <h1 ref={heroHeaderRef}>{heroData[navigator].title}</h1> }
      {heroData && <p ref={heroDescRef}>{heroData[navigator].description}</p> }
    </div>
   );
}
 
export default HeroDescText;