import styles from "./Input.module.scss"

const Input = (props) => {
  return (
    <input
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.change}
      className={props.className ? 'input-reset text-md' + ' ' + styles.root + ' ' + props.className : 'input-reset text-md' + ' ' + styles.root}
      disabled={props.disabled}
    />
  )
}

export default Input
