import styles from './CurrencySelect.module.css'
import { useEffect, useState } from 'react'
import { useInput } from '../Hooks/useInput';

export function CurrencySelect({ currencyList, money }) {

  const [currencyBuy, setCurrencyBuy] = useState('')
  const [currencySelect, setCurrencySelect] = useInput(Object.keys(currencyList)[0]);


  const arr = []

  for (let key in currencyList) {
    arr.push(
      <option value={key} key={key} >{key}</option>
    )
  }

  useEffect(() => {
    setCurrencyBuy(Math.floor(money * currencyList[currencySelect]))
  }, [money, currencySelect])


  return (
    <div className={styles.Contain}>
      <label>
        Я ХОЧУ КУПИТЬ :
        <select value={currencySelect} onChange={setCurrencySelect}>
          {arr}
        </select>
      </label>
      <p>ВЫ МОЖЕТЕ КУПИТЬ <span>{currencyBuy} {currencySelect}</span></p>
    </div>
  )
}