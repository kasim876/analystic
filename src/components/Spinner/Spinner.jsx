import styles from './Spinner.module.scss';

const Spinner = () => {
  return (
    <div className={styles.root}>
      <span className={styles.circle}></span>
      <span className={styles.caption}>Loading...</span>
    </div>
  )
}

export default Spinner