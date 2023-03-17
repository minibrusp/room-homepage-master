import style from '../scss/module/NavList.module.scss'

const NavList = ({ isBurgerOpen, setBurger }) => {

  const listDisplay = isBurgerOpen ? 'flex' : 'none'

  return ( 
    <>
    <div 
      className={style.header__nav__list__effect}
      onClick={() => setBurger(!isBurgerOpen)}
      style={{display: listDisplay}}
    />
    <ul 
      className={style.header__nav__list}
      style={{display: listDisplay}}
      // style={{display: 'none'}}
    >
      <li className={style.header__nav__list__item}>
        <a href="#">home</a>
      </li>
      <li className={style.header__nav__list__item}>
        <a href="#">shop</a>
      </li>
      <li className={style.header__nav__list__item}>
        <a href="#">about</a>
      </li>
      <li className={style.header__nav__list__item}>
        <a href="#">contact</a>
      </li>
    </ul>
    </>

    
   );
}
 
export default NavList;