import { useState } from "react";

import styles from "./Profile.module.scss";

import NavBar from "../components/NavBar/NavBar";
import Header from "../components/Header/Header";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";

const ProfileEdit = () => {
  const [fullName, setFullName] = useState('Лукашенко Максим Валентинович');
  const [company, setCompany] = useState('');
  const [post, setPost] = useState('');
  const [email, setEmail] = useState('ustyugov.i@mail.com');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  return (
    <div className="container">
      <NavBar></NavBar>
      <div className="content">
        <Header title="Личный кабинет" />
        <main>
          <form className={styles.section}>
            <h2 className="subtitle">Данные о пользователе</h2>
            <div className={styles.row}>
              <div className={styles.field}>
                <span className={'text-md' + ' ' + styles.label}>Ф.И.О.:<span>*</span></span>
                <Input type="text" name="fullName" value={fullName} placeholder="Введите Ф.И.О." change={(e) => setFullName(e.target.value)} />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.field}>
                <span className={'text-md' + ' ' + styles.label}>Название компании:<span>*</span></span>
                <Input type="text" name="company" value={company} placeholder="Введите название компании" change={(e) => setCompany(e.target.value)} />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.field}>
                <span className={'text-md' + ' ' + styles.label}>Должность:<span>*</span></span>
                <Input type="text" name="post" value={post} placeholder="Введите должность" change={(e) => setPost(e.target.value)} />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.field}>
                <span className={'text-md' + ' ' + styles.label}>E-mail:<span>*</span></span>
                <Input type="email" name="email" value={email} placeholder="Введите e-mail" change={(e) => setEmail(e.target.value)} />
              </div>
            </div>
            <span className={'text-xs' + ' ' + styles.warning}><span>*</span> обязательно для заполнения</span>
            <div className={styles.row}>
              <div className={styles.field}>
                <span className={'text-md' + ' ' + styles.label}>Сменить пароль:</span>
                <div className={styles.row}>
                  <Input type="password" name="password" value={password} placeholder="Введите новый пароль" change={(e) => setPassword(e.target.value)} />
                  <Input type="password" name="password" value={passwordRepeat} placeholder="Повторите новый пароль" change={(e) => setPasswordRepeat(e.target.value)} />
                </div>
              </div>
            </div>
            <Button>Сохранить</Button>
          </form>
        </main>
      </div>
    </div>
  )
}

export default ProfileEdit
