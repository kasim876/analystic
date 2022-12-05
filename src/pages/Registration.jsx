import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Input from "../components/Input/Input"
import Button from "../components/Button/Button"

import styles from "./Auth.module.scss";

import logo from "../assets/logo.png";
import user from "../assets/svg/user.svg"
import mail from "../assets/svg/mail.svg";
import lock from "../assets/svg/lock.svg";

const Registration = () => {
  const [isCompany, setIsCompany] = useState(false);
  const [company, setCompany] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    const emailPattern = /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})$/;
    
    if (
      (!isCompany || company.length > 1) &&
      fullName.length > 3 &&
      emailPattern.test(email) &&
      password.length > 3 &&
      password === passwordRepeat
    ) {
      return setDisabled(false)
    }
    
    setDisabled(true)
  })
  
  return (
    <div className={'container' + ' ' + styles.container}>
      <a href="/"><img src={logo} alt="logo" /></a>
      <h1 className={styles.title}>Регистрация</h1>
      <form className={styles.form}>
        <label className={styles.field}>
          <img src={user} aria-hidden="true" />
          <Input type="text" placeholder="Название компании" name="company" value={company} change={(e) => setCompany(e.target.value)} className={styles.input} />
        </label>
        <label className={styles.field}>
          <img src={user} aria-hidden="true" />
          <Input type="text" placeholder="Ф.И.О." name="full-name" value={fullName} change={(e) => setFullName(e.target.value)} className={styles.input} />
        </label>
        <label className={styles.field}>
          <img src={mail} aria-hidden="true" />
          <Input type="email" placeholder="E-mail" name="email" value={email} change={(e) => setEmail(e.target.value)} className={styles.input} />
        </label>
        <label className={styles.field}>
          <img src={lock} aria-hidden="true" />
          <Input type="password" placeholder="Пароль" name="password" value={password} change={(e) => setPassword(e.target.value)} className={styles.input} />
        </label>
        <label className={styles.field}>
          <img src={lock} aria-hidden="true" />
          <Input type="password" placeholder="Повторите пароль" name="password" value={passwordRepeat} change={(e) => setPasswordRepeat(e.target.value)} className={styles.input} />
        </label>
        <Button type="submit" disabled={disabled}>Зарегестрироваться</Button>
      </form>
      <div className={styles.bottom}>
          <span className="text-md">Вы зарегестрированы?</span>
          <Link to="/login" className={'text-md' + ' ' + styles.link}>Войти</Link>
      </div>
    </div>
  )
}

export default Registration
