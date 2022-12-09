import styles from "./Reports.module.scss";

import NavBar from "../components/NavBar/NavBar";
import Header from "../components/Header/Header";
import Button from "../components/Button/Button";

const ReportsCreate = () => {
  return (
    <div className="container">
      <NavBar></NavBar>
      <div className="content">
        <Header title="Создание отчета" />
        <main>
          <h2 className="subtitle">Загрузите данные</h2>
          <Button className={styles.btn}>Выбрать файл на компьютере</Button>
        </main>
      </div>
    </div>
  )
}

export default ReportsCreate
