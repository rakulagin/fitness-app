import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { AnyAction } from 'redux';
import { RootState } from '../../redux/rootReducer';
import { addSet } from '../../redux/slices/trainingDaySlice';

import styles from './exerciseButtons.module.scss'

const ExerciseButtons = () => {
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> = useDispatch();

  const handleAddSet = () => {
    dispatch(addSet())
  }

  const handleConfirmSet = () => {

  }

  return (
    <div className={styles.wrapper}>
      <div
      className={styles.button}
      onClick={handleConfirmSet}
      >ok</div>
      <div
      className={styles.button}
      onClick={handleAddSet}
      >+</div>
    </div>
  )
}

export default ExerciseButtons