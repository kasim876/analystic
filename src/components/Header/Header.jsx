import { useContext } from "react";

import styles from "./Header.module.scss";

import { UserContext } from "../../index";

const Header = (props) => {
  const {user} = useContext(UserContext)

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{props.title}</h1>
      <div className={styles.rightGroup}>
        <button className={'btn-reset' + ' ' + styles.notice}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
            <g clipPath="url(#a)">
              <path fill="#0A2463" d="m22.555 13.662-1.9-6.836A9.321 9.321 0 0 0 2.576 7.3l-1.471 6.615A5 5 0 0 0 5.986 20H7.1a5 5 0 0 0 9.8 0h.838a5 5 0 0 0 4.818-6.338h-.001ZM12 22a3 3 0 0 1-2.816-2h5.632A3 3 0 0 1 12 22Zm8.126-5.185A2.977 2.977 0 0 1 17.737 18H5.986a2.999 2.999 0 0 1-2.928-3.651l1.47-6.616a7.321 7.321 0 0 1 14.2-.372l1.9 6.836a2.978 2.978 0 0 1-.502 2.618Z"/>
              <circle cx="22" cy="2" r="2" fill="#D8315B" />
            </g>
            <defs>
              <clipPath id="a">
                <path fill="#fff" d="M0 0h24v24H0z"/>
              </clipPath>
            </defs>
          </svg>
        </button>
        <p className={'text-xs' + ' ' + styles.user}>Добро пожаловать,<br/><span>{user.user.fullName}</span></p>
      </div>
    </header>
  )
}

export default Header
