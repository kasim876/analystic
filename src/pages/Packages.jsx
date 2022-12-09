import styles from "./Packages.module.scss";

import NavBar from "../components/NavBar/NavBar";
import Header from "../components/Header/Header";
import Button from "../components/Button/Button";

const Packages = () => {
  return (
    <div className="container">
      <NavBar></NavBar>
      <div className="content">
        <Header title="Пакеты услуг" />
        <main>
          <ul className={'list-reset' + ' ' + styles.content}>
            <li>
              <div className={styles.card + ' ' + styles.card_silver}>
                <div className={styles.header}>
                  <h3 className={styles.name}>Silver</h3>
                  <p className={'text-md' + ' ' + styles.price}>1.000 тнг/разово</p>
                </div>
                <ul className={'list-reset' + ' ' + styles.list}>
                  <li className="text-md">Что входит в пакет</li>
                  <li className="text-md">Что входит в пакет</li>
                  <li className="text-md">Что входит в пакет</li>
                </ul>
              </div>
              <Button className={styles.btn}>Приобрести пакет</Button>
            </li>
            <li>
              <div className={styles.card + ' ' + styles.card_gold}>
                <div className={styles.header}>
                  <h3 className={styles.name}>Gold</h3>
                  <p className={'text-md' + ' ' + styles.price}>5.000 тнг/5 отчетов</p>
                </div>
                <ul className={'list-reset' + ' ' + styles.list}>
                  <li className="text-md">Что входит в пакет</li>
                  <li className="text-md">Что входит в пакет</li>
                  <li className="text-md">Что входит в пакет</li>
                  <li className="text-md">Что входит в пакет</li>
                  <li className="text-md">Что входит в пакет</li>
                  <li className="text-md">Что входит в пакет</li>
                  <li className="text-md">Что входит в пакет</li>
                </ul>
              </div>
              <Button className={styles.btn}>Приобрести пакет</Button>
            </li>
            <li>
              <div className={styles.card + ' ' + styles.card_platinum}>
                <div className={styles.header}>
                  <h3 className={styles.name}>Platinum</h3>
                  <p className={'text-md' + ' ' + styles.price}>25.000 тнг/10 отчетов</p>
                </div>
                <ul className={'list-reset' + ' ' + styles.list}>
                  <li className="text-md">Что входит в пакет</li>
                  <li className="text-md">Что входит в пакет</li>
                  <li className="text-md">Что входит в пакет</li>
                  <li className="text-md">Что входит в пакет</li>
                  <li className="text-md">Что входит в пакет</li>
                  <li className="text-md">Что входит в пакет</li>
                  <li className="text-md">Что входит в пакет</li>
                  <li className="text-md">Что входит в пакет</li>
                  <li className="text-md">Что входит в пакет</li>
                </ul>
              </div>
              <Button className={styles.btn}>Приобрести пакет</Button>
            </li>
          </ul>
        </main>
      </div>
    </div>
  )
}

export default Packages
