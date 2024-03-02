import React, { FC } from 'react'

import styles from './exerciseButtons.module.scss'

interface I_ExerciseButtons {
  addSet: any
}

const ExerciseButtons: FC<I_ExerciseButtons> = ({addSet}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.button}>ok</div>
      <div
      className={styles.button}
      onClick={addSet}
      >+</div>
    </div>
  )
}

export default ExerciseButtons