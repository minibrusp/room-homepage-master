import burgerClose from '../images/icon-hamburger.svg'
import burgerOpen from '../images/icon-close.svg'
import style from '../scss/module/Burger.module.scss'

const Burger = ({...props}) => {
  const { setBurger, isBurgerOpen } = props
  return ( 
    <div 
      className={style.header__nav__burger__container}
      onClick={() => setBurger(!isBurgerOpen)}
    >
      <img
        className="header__nav__burger__icon" 
        alt="burgerIcon"
        src={isBurgerOpen ? burgerOpen : burgerClose} 
        
      />
    </div>
   );
}
 
export default Burger;