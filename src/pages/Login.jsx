import { useState } from "react";

import Input from "../components/Input/Input"
import Button from "../components/Button/Button"

import styles from "./Auth.module.scss";

import logo from "../assets/logo.png";
import mail from "../assets/svg/mail.svg";
import lock from "../assets/svg/lock.svg";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  return (
    <div className={'container' + ' ' + styles.container}>
      <a href="/"><img src={logo} alt="logo" /></a>
      <h1 className={styles.title}>Вход</h1>
      <form className={styles.form}>
        <label className={styles.field}>
          <img src={mail} aria-hidden="true" />
          <Input type="email" placeholder="E-mail" name="email" value={email} change={(e) => setEmail(e.target.value)} className={styles.input} />
        </label>
        <label className={styles.field}>
          <img src={lock} aria-hidden="true" />
          <Input type="password" placeholder="Пароль" name="password" value={password} change={(e) => setPassword(e.target.value)} className={styles.input} />
        </label>
        <Button type="submit">Войти</Button>
      </form>
      <div className={styles.bottom}>
          <span className="text-md">Вы не зарегестрированы?</span>
          <a href="/" className={'text-md' + ' ' + styles.link}>Регистрация</a>
      </div>
    </div>
  )
}

export default Login
