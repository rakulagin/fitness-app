import React from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { AnyAction } from 'redux';
import { RootState } from '../../redux/rootReducer';
import { toggleModal } from '../../redux/slices/trainingDaySlice';

import styles from './editSetModal.module.scss'
import clsx from 'clsx'

const EditSetModal = () => {
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> = useDispatch();

  const handleCloseButton = () => {
    dispatch(toggleModal(false))
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.modal}>
        <div className={styles.filters}>
          <input type="number" />
          <input type="number" />
        </div>
        <div className={styles.buttons}>
          <button className={clsx(styles.button, styles.buttonOk)}>OK</button>
          <button className={clsx(styles.button, styles.buttonCancel)} onClick={handleCloseButton}>Отмена</button>
        </div>
      </div>
    </div>
  )
}

export default EditSetModal