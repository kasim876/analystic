import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Input from "../components/Input/Input"
import Button from "../components/Button/Button"

import styles from "./Auth.module.scss";

import logo from "../assets/logo.png";
import mail from "../assets/svg/mail.svg";
import lock from "../assets/svg/lock.svg";

const Login = () => {
  const [email, setEmail] = useState('max.lukashenko2017@gmail.com');
  const [password, setPassword] = useState('1234');
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    const emailPattern = /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})$/;
    
    if (emailPattern.test(email) && password.length > 3) {
      return setDisabled(false)
    }
    
    setDisabled(true)
  })
  
  return (
    <div className={'container' + ' ' + styles.container}>
      <Link to="/"><img src={logo} alt="logo" /></Link>
      <h1 className={styles.title}>Вход</h1>
      <form className={styles.form}>
        <label className={styles.field}>
          <img src={mail} aria-hidden="true" />
          <Input
            type="email"
            placeholder="E-mail"
            name="email" value={email}
            change={ (e) => setEmail(e.target.value) }
            className={styles.input}
          />
        </label>
        <label className={styles.field}>
          <img src={lock} aria-hidden="true" />
          <Input
            type="password"
            placeholder="Пароль"
            name="password"
            value={password}
            change={ (e) => setPassword(e.target.value) }
            className={styles.input}
          />
        </label>
        <Button type="submit" disabled={disabled}>Войти</Button>
      </form>
      <div className={styles.bottom}>
          <span className="text-md">Вы не зарегестрированы?</span>
          <Link to="/registration" className={'text-md' + ' ' + styles.link}>Регистрация</Link>
      </div>
    </div>
  )
}

export default Login
