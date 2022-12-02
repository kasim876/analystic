import styles from "./Home.module.scss";

import NavBar from "../components/NavBar/NavBar"
import Header from "../components/Header/Header";
import NewsArticle from "../components/NewsArticle/NewsArticle";

const Home = () => {
  return (
    <div className="container">
      <NavBar></NavBar>
      <div className="content">
        <Header title="Главная" name="Лукашенко Максим" />
        <ul className={'list-reset' + ' ' + styles.list}>
          <li className={styles.item}>
            <h2 className={styles.subtitle}>Личный кабинет</h2>
            <a href="/" className={'text-md' + ' ' + styles.link}>Перейти в личный кабинет</a>
          </li>
          <li className={styles.item + ' ' + styles.activeItem}>
            <h2 className={styles.subtitle}>Новости</h2>
            <NewsArticle title="Название новости" date="22.01.2022" datetime="2022-01-22" className={styles.article}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus magnis mattis volutpat id magna enim dui, ornare sagittis.<br/>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus magnis mattis volutpat id magna enim dui, ornare sagittis.
            </NewsArticle>
            <a href="/" className={'text-md' + ' ' + styles.link}>Перейти ко всем новостям</a>
          </li>
          <li className={styles.item}>
            <h2 className={styles.subtitle}>Отчёты</h2>
            <a href="/" className={'text-md' + ' ' + styles.link}>Создать общедоступный отчет</a>
            <a href="/" className={'text-md' + ' ' + styles.link}>Создать индивидуальный отчет</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Home
