import React, { FC } from 'react'

import styles from './set.module.scss'

interface I_Set {
  weight: number;
  reps: number;
  work: boolean;
  notice: string;
  id: number;
  index: number
  deleteSet: any
  toggleWork: any
}

const Set: FC<I_Set> = ({ weight, reps, work, notice, id, deleteSet, index, toggleWork }) => {

  const setNumber = index + 1

  return (
    <div className={styles.setWrapper}>
      <h4 className={styles.title}>{setNumber} подход</h4>
      <div className={styles.set}>
        <div className={styles.try}>
          <div className={styles.weight}>{weight}kg</div>
          <div className={styles.weight}>{reps} reps</div>
        </div>
        <div className={styles.footer}>
          <button className={styles.notice}>?</button>
          <button
            className={styles.notice}
            onClick={() => toggleWork(id)}
          >
            {work ? 'W' : 'T'}
          </button>
          <button
            className={styles.deleteSetBtn}
            onClick={() => deleteSet(id)}
          >
            X
          </button>
        </div>
      </div>
    </div>
  )
}

export default Set