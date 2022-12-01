import styles from "./NavBar.module.scss";

import logo from "../../assets/logo.png";
import sprite from "./sprite.svg";

import navItems from "./data";

const NavList = () => {
  return (
    <nav>
      <ul className={'list-reset' + ' ' + styles.list}>
        {navItems.map(el => (
          <li key={el.link} className={styles.item}>
            <a href={el.link} className={'text-md' + ' ' + styles.link}>
              <svg width="24" height="24" className={styles.icon}>
                <use xlinkHref={[sprite, el.icon].join("")}></use>
              </svg>
              <span>{el.text}</span>
            </a>  
          </li>
        ))}
      </ul>
    </nav>
  )
}

const NavBar = () => {
  return (
    <aside className={styles.nav}>
      <a className={styles.logo} href="/"><img src={logo} alt="logo" /></a>
      <NavList />
      <button className={'btn-reset text-md' + ' ' + styles.logout}>
        <svg width="24" height="24" className={styles.icon}>
          <use xlinkHref={[sprite, "#exit"].join("")}></use>
        </svg>
        <span>Выйти</span>
      </button>
    </aside>
  )
}

export default NavBar
