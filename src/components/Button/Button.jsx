import styles from "./Button.module.scss";

const Button = (props) => {
  return (
    <button
      className={props.className ? 'btn-reset text-md' + ' ' + styles.btn + ' ' + props.className : 'btn-reset text-md' + ' ' + styles.btn}
      type={props.type}
      onClick={props.click}
    >
      {props.children}
    </button>
  )
}

export default Button
