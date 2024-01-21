import styles from './CurrencyInput.module.css'

export function CurrencyInput({ handler, money }) {
  return (
    <div className={styles.inputContain}>
      <p>У МЕНЯ ЕСТЬ: </p>
      <div className={styles.InputWrap}>
        <input type="number" value={money} onChange={handler} />
        <span>RUB</span>
      </div>
    </div>
  )
}