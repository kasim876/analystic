import styles from "./Input.module.scss"

const Input = (props) => {
  return (
    <input
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.change}
      className={props.className ? 'input-reset text-md' + ' ' + styles.input + ' ' + props.className : 'input-reset text-md' + ' ' + styles.input} />
  )
}

export default Input
