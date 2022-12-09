import styles from "./Reports.module.scss";

import NavBar from "../components/NavBar/NavBar";
import Header from "../components/Header/Header";
import Button from "../components/Button/Button";

const ReportsPublic = () => {
  return (
    <div className="container">
      <NavBar></NavBar>
      <div className="content">
        <Header title="Общедоступные отчеты" />
        <main>
          <ul className={'list-reset' + ' ' + styles.list}>
            <li className={styles.row}>
              <Button className={styles.btn}>Материалы</Button>
              <div className={styles.warning}>
                <span className="text-md">Доступно при покупке “название”</span>
                <a href="/" className="text-xs">Приобрести</a>
              </div>
            </li>
            <li className={styles.row}>
              <Button className={styles.btn}>Баланс</Button>
              <div className={styles.warning}>
                <span className="text-md">Доступно при покупке “название”</span>
                <a href="/" className="text-xs">Приобрести</a>
              </div>
            </li>
            <li className={styles.row + ' ' + styles.disableRow}>
              <Button className={styles.btn}>Продажи</Button>
              <div className={styles.warning}>
                <span className="text-md">Доступно при покупке “название”</span>
                <a href="/" className="text-xs">Приобрести</a>
              </div>
            </li>
            <li className={styles.row + ' ' + styles.disableRow}>
              <Button className={styles.btn}>Баланс</Button>
              <div className={styles.warning}>
                <span className="text-md">Доступно при покупке “название”</span>
                <a href="/" className="text-xs">Приобрести</a>
              </div>
            </li>
          </ul>
        </main>
      </div>
    </div>
  )
}

export default ReportsPublic
