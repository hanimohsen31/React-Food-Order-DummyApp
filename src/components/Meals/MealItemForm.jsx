import React from 'react'
import Input from './Input'
import styles from './MealItemForm.module.css'
export default function MealItemForm(props) {
  return (
    <>
    <form className={styles.form} action="">
      <Input label='Amount' input={{id:'amount_'+ props.id,type:'number',min:'1',max:'5',defaultValue:'1'}}  />
      <button className={styles.button}>+Add</button>
    </form>
    </>
  )
}
