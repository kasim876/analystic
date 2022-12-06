import styles from './Radio.module.scss';

const Radio = (props) => {
  return (
    <label className={styles.radio}>
      <input type="radio" name={props.name} value={props.value} className={styles.input} onChange={props.change} />
      <span className={'text-md' + ' ' + styles.caption}>{props.caption}</span>
    </label>
  )
}

export default Radio