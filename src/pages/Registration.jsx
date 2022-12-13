import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import Input from "../components/Input/Input"
import Button from "../components/Button/Button"
import Radio from "../components/Radio/Radio";

import { UserContext } from "../index";

import styles from "./Auth.module.scss";

import { registration } from "../http/userAPI";

import logo from "../assets/logo.png";
import userIcon from "../assets/svg/user.svg"
import mail from "../assets/svg/mail.svg";
import lock from "../assets/svg/lock.svg";

const Registration = () => {
  const {user} = useContext(UserContext);
  
  const [isCompany, setIsCompany] = useState(null);
  const [company, setCompany] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const emailPattern = /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})$/;

    if (
      isCompany !== null &&
      (!isCompany || company) &&
      emailPattern.test(email) &&
      password.length > 3 &&
      password === passwordRepeat
    ) {
      return setDisabled(false)
    }

    setDisabled(true)
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
  
    try {
      const data = await registration(email, password, isCompany, company, fullName)

      user.setIsAuth(true);
      user.setUser(data);
    } catch (err) {
      setError(err.response.data.message)
    }
  }
  
  return (
    <div className={'container' + ' ' + styles.container}>
      <a href="/"><img src={logo} alt="logo" /></a>
      <h1 className={styles.title}>Регистрация</h1>
      <form className={error ? styles.form + ' ' + styles.wrongForm : styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <Radio
            name="is-company"
            value="true"
            caption="Юридическое лицо"
            change={ (e) => {
              setIsCompany(Boolean(e.target.value))
              setError('')
            }}
          />
          <Radio
            name="is-company"
            value=""
            caption="Физическое лицо" 
            change={ (e) => {
              setIsCompany(Boolean(e.target.value))
              setCompany(null)
              setError('')
            }}
          />
        </div>
        <label className={isCompany ? styles.field : styles.field + ' ' + styles.disabledField}>
          <img src={userIcon} aria-hidden="true" />
          <Input
            type="text"
            placeholder="Название компании"
            name="company"
            value={company}
            change={ (e) => {
              setCompany(e.target.value)
              setError('')
            }}
            className={styles.input}
            disabled={!isCompany}
          />
        </label>
        <label className={styles.field}>
          <img src={userIcon} aria-hidden="true" />
          <Input
            type="text"
            placeholder="Ф.И.О."
            name="name"
            value={fullName}
            change={ (e) => {
              setFullName(e.target.value)
              setError('')
            }}
            className={styles.input}
          />
        </label>
        <label className={styles.field}>
          <img src={mail} aria-hidden="true" />
          <Input
            type="email"
            placeholder="E-mail"
            name="email"
            value={email}
            change={ (e) => {
              setEmail(e.target.value)
              setError('')
            }}
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
            change={ (e) => {
              setPassword(e.target.value)
              setError('')
            }}
            className={styles.input}
          />
        </label>
        <label className={styles.field}>
          <img src={lock} aria-hidden="true" />
          <Input
            type="password"
            placeholder="Повторите пароль"
            name="password"
            value={passwordRepeat}
            change={ (e) => {
              setPasswordRepeat(e.target.value)
              setError('')
            }}
            className={styles.input}
          />
        </label>
        <span className={'text-md' + ' ' + styles.warning}>{error}</span>
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
