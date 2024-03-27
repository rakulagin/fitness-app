import React from 'react'

import { useDispatch, useSelector } from 'react-redux';

import Exercise from '../../components/exercise/exercise'
import EditSetModal from '../../components/editSetModal/editSetModal'

const TrainingDayPage = () => {

  const { isOpenModal } = useSelector((state: any) => state.trainingDay.modal)

  return (
    <>
      <Exercise />
      {isOpenModal && <EditSetModal />}
    </>
  )
}

export default TrainingDayPage