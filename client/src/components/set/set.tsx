import React, { ChangeEvent, FC } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { AnyAction } from 'redux';
import { RootState } from '../../redux/rootReducer';
import { toggleModal, deleteSet, toggleWork } from '../../redux/slices/trainingDaySlice';


import clsx from "clsx";
import styles from './set.module.scss'

interface I_Set {
  weight: number;
  reps: number;
  work: boolean;
  notice: string;
  id: number;
  index: number
}

const Set: FC<I_Set> = ({ weight, reps, work, notice, id, index }) => {

  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> = useDispatch();

  const setNumber = index + 1

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    console.log('name', name)
    console.log('value', value)
  }

  const handleEditClick = () => {
    dispatch(toggleModal(true))
  }

  const handleDeleteSet = (id: number) => {
    dispatch(deleteSet(id))
  }

  const handleToggleWork = (id: number) => {
    dispatch(toggleWork(id))
  }

  return (
    <div className={styles.setWrapper}>
      <h4 className={styles.title}>{setNumber} подход</h4>
      <div className={styles.set}>
        <div className={styles.try} onClick={handleEditClick}>
          <div className={styles.weight}>{weight}kg</div>
          <div className={styles.weight}>{reps} reps</div>
        </div>
        <div className={styles.footer}>
          <button className={styles.notice} disabled={!notice.length}>?</button>
          <button
            className={styles.notice}
            onClick={() => handleToggleWork(id)}
          >
            {work ? 'W' : 'T'}
          </button>
          <button
            className={styles.deleteSetBtn}
            onClick={() => handleDeleteSet(id)}
          >
            X
          </button>
        </div>
      </div>
    </div>
  )
}

export default Set