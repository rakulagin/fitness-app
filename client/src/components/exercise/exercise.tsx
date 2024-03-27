import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { AnyAction } from 'redux';
import { RootState } from '../../redux/rootReducer';

import Set from '../set/set'
import ExerciseButtons from '../exerciseButtons/exerciseButtons'

import styles from './exercise.module.scss'

const Exercise = () => {

  const { exercises } = useSelector((state: any) => state.trainingDay)

  return (
    <>
      <h2>title</h2>
      <div className={styles.exercise}>
        {exercises.map((el: any, index: any) => (
          <Set
            key={el.id}
            weight={el.weight}
            reps={el.reps}
            work={el.work}
            notice={el.notice}
            id={el.id}
            index={index}
          />
        ))} 
        <ExerciseButtons />
      </div>
    </>
  )
}

export default Exercise