import logoIcon from '../images/logo.svg'
import style from '../scss/module/Logo.module.scss'
const Logo = () => {
  return ( 
    <a 
      className={style.header__nav__logo__container}
      href='#'
    >
      <img
        className="header__nav__logo__img"
        src={logoIcon} 
        alt="Room logo" 
      />
    </a>
   );
}
 
export default Logo;