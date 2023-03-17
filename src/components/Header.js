import { useState } from "react";
import Burger from "./Burger";
import NavList from "./NavList";
import style from '../scss/module/Header.module.scss'


const Header = ({children}) => {
  const [isBurgerOpen, setBurger] = useState(false)
  return ( 
    <header className={style.header}>
      <nav className={style.header__nav}>
        <Burger isBurgerOpen={isBurgerOpen} setBurger={setBurger}/>
        {children}
        <NavList isBurgerOpen={isBurgerOpen} setBurger={setBurger}/>
      </nav>
    </header>
   );
}
 
export default Header;