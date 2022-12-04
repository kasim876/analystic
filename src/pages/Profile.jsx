import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Profile.module.scss";

import NavBar from "../components/NavBar/NavBar";
import Header from "../components/Header/Header";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";

const Profile = () => {
  const [email, setEmail] = useState('');
  
  return (
    <div className="container">
      <NavBar></NavBar>
      <div className="content">
        <Header title="Личный кабинет" name="Лукашенко Максим" />
        <main>
          <div className={styles.section}>
            <h2 className="subtitle">Пакеты услуг</h2>
            <div className={styles.field}>
              <span className={'text-md' + ' ' + styles.label}>Ваш пакет:</span>
              <input className={'input-reset text-md' + ' ' + styles.input} value="Ваш пакет" placeholder="Информация отсутствует" disabled />
              <Link to="/packages" className={'text-md' + ' ' + styles.link}>Перейти к пакетам</Link>
            </div>
          </div>
          <div className={styles.section}>
            <h2 className="subtitle">Ваши данные</h2>
            <div className={styles.row}>
              <div className={styles.field}>
                <span className={'text-md' + ' ' + styles.label}>Ф.И.О.:</span>
                <input className={'input-reset text-md' + ' ' + styles.input} value="Лукашенко Максим Валентинович" placeholder="Информация отсутствует" disabled />
              </div>
              <div className={styles.field}>
                <span className={'text-md' + ' ' + styles.label}>Название компании:</span>
                <input className={'input-reset text-md' + ' ' + styles.input} value="" placeholder="Информация отсутствует" disabled />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.field}>
                <span className={'text-md' + ' ' + styles.label}>Должность:</span>
                <input className={'input-reset text-md' + ' ' + styles.input} value="" placeholder="Информация отсутствует" disabled />
              </div>
              <div className={styles.field}>
                <span className={'text-md' + ' ' + styles.label}>E-mail:</span>
                <input className={'input-reset text-md' + ' ' + styles.input} value="ustyugov.i@mail.com" placeholder="Информация отсутствует" disabled />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.field}>
                <span className={'text-md' + ' ' + styles.label}>Юридический адрес:</span>
                <input className={'input-reset text-md' + ' ' + styles.input} value="РК, 050000, г. Алматы, Турксибский р-н, пр. Суюнбая, д. 2" placeholder="Информация отсутствует" disabled />
              </div>
              <div className={styles.field}>
                <span className={'text-md' + ' ' + styles.label}>РНН</span>
                <input className={'input-reset text-md' + ' ' + styles.input} value="600 400 615 711" placeholder="Информация отсутствует" disabled />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.field}>
                <span className={'text-md' + ' ' + styles.label}>Адрес для корреспонденции:</span>
                <input className={'input-reset text-md' + ' ' + styles.input} value="РК, 050000, г. Алматы, Турксибский р-н, пр. Суюнбая, д. 2" placeholder="Информация отсутствует" disabled />
              </div>
              <div className={styles.field}>
                <span className={'text-md' + ' ' + styles.label}>БИН</span>
                <input className={'input-reset text-md' + ' ' + styles.input} value="100 240 019 701" placeholder="Информация отсутствует" disabled />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.field}>
                <span className={'text-md' + ' ' + styles.label}>Расчетный счет:</span>
                <input className={'input-reset text-md' + ' ' + styles.input} value="KZ 45914398914BC34692KZT" placeholder="Информация отсутствует" disabled />
              </div>
              <div className={styles.field}>
                <span className={'text-md' + ' ' + styles.label}>Банк</span>
                <input className={'input-reset text-md' + ' ' + styles.input} value='Дочерний Банк АО "Сбербанк"' placeholder="Информация отсутствует" disabled />
              </div>
            </div>
            <Button>Редактировать</Button>
          </div>
          <div className={styles.section}>
            <h2 className="subtitle">Пользователи</h2>
            <div className={styles.row}>
              <Input type="email" name="email" placeholder="Введите e-mail" value={email} change={(e) => setEmail(e.target.value)}></Input>
              <Button>Добавить пользователя</Button>
            </div>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Ф.И.О.</th>
                  <th>E-mail</th>
                  <th>Должность</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Лукьянов Юрий Андреевич</td>
                  <td>lukyaniv.yu@gmail.com</td>
                  <td>Бухгалтер</td>
                  <td><button className={'btn-reset text-md' + ' ' + styles.link}>Удалить</button></td>
                </tr>
                <tr>
                  <td>Лукьянов Юрий Андреевич</td>
                  <td>lukyaniv.yu@gmail.com</td>
                  <td>Ст. специалист</td>
                  <td><button className={'btn-reset text-md' + ' ' + styles.link}>Удалить</button></td>
                </tr>
                <tr>
                  <td>Лукьянов Юрий Андреевич</td>
                  <td>lukyaniv.yu@gmail.com</td>
                  <td>Младший специалист</td>
                  <td><button className={'btn-reset text-md' + ' ' + styles.link}>Удалить</button></td>
                </tr>
                <tr>
                  <td>Лукьянов Юрий Андреевич</td>
                  <td>lukyaniv.yu@gmail.com</td>
                  <td>Директор по отрасли</td>
                  <td><button className={'btn-reset text-md' + ' ' + styles.link}>Удалить</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Profile
