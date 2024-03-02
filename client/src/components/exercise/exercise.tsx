import React, { useState } from 'react'

import Set from '../set/set'
import ExerciseButtons from '../exerciseButtons/exerciseButtons'

import styles from './exercise.module.scss'

const Exercise = () => {

  const [sets, setSets] = useState([
    {
      id: 1,
      weight: 50,
      reps: 15,
      work: true,
      notice: ''
    },
    {
      id: 2,
      weight: 45,
      reps: 14,
      work: true,
      notice: ''
    },
    {
      id: 3,
      weight: 60,
      reps: 10,
      work: false,
      notice: ''
    },
  ])

  const deleteSet = (id: number) => {
    setSets(sets.filter((set) => set.id !== id))
  }

  const addSet = () => {
    const newSet = {
      id: Math.random(),
      weight: 0,
      reps: 0,
      work: true,
      notice: ''
    }
    if (sets.length > 0) {
      newSet.weight = sets[sets.length - 1].weight
      newSet.reps = sets[sets.length - 1].reps
    }

    setSets((prev) => [...prev, newSet])
  }

  const toggleWork = (id: any) => {
    setSets(prevSets =>
      prevSets.map((set: any) => (
        set.id === id ? { ...set, work: !set.work } : set
      ))
    )
  }

  return (
    <>
      <h2>title</h2>
      <div className={styles.exercise}>
        {sets.map((el, index) => (
          <Set
            key={el.id}
            weight={el.weight}
            reps={el.reps}
            work={el.work}
            notice={el.notice}
            id={el.id}
            index={index}
            deleteSet={deleteSet}
            toggleWork={toggleWork}
          />
        ))}
        <ExerciseButtons
          addSet={addSet}
        />
      </div>
    </>
  )
}

export default Exercise