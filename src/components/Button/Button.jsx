import styles from "./Button.module.scss";

const Button = (props) => {
  return (
    <button
      className={props.className ? 'btn-reset text-md' + ' ' + styles.root + ' ' + props.className : 'btn-reset text-md' + ' ' + styles.root}
      type={props.type}
      onClick={props.click}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  )
}

export default Button
