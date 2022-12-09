import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";

import styles from "./NavBar.module.scss";

import logo from "../../assets/logo.png";
import sprite from "./sprite.svg";

import navItems from "./data";

import { UserContext } from "../../App";

const NavList = () => {
  return (
    <nav>
      <ul className={'list-reset' + ' ' + styles.list}>
        {navItems.map(el => (
          <li key={el.link} className={styles.item}>
            <NavLink to={el.link} className={({ isActive }) => isActive ? 'text-md' + ' ' + styles.link + ' ' + styles.activeLink : 'text-md' + ' ' + styles.link}>
              <svg width="24" height="24" className={styles.icon}>
                <use xlinkHref={[sprite, el.icon].join("")}></use>
              </svg>
              <span>{el.text}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

const NavBar = () => {
  const {user} = useContext(UserContext);
  
  const logout = () => {
    localStorage.removeItem("token");

    user.setIsAuth(false);
    user.setUser(null);
  }

  return (
    <aside className={styles.nav}>
      <Link className={styles.logo} to="/"><img src={logo} alt="logo" /></Link>
      <NavList />
      <button className={'btn-reset text-md' + ' ' + styles.logout} onClick={logout}>
        <svg width="24" height="24" className={styles.icon}>
          <use xlinkHref={[sprite, "#exit"].join("")}></use>
        </svg>
        <span>Выйти</span>
      </button>
    </aside>
  )
}

export default NavBar
