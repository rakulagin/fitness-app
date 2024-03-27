import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
	modal: {
		isOpenModal: true,
	},
	exercises: [
		{
			id: 1,
			weight: 50,
			reps: 16,
			work: true,
			notice: '',
		},
		{
			id: 2,
			weight: 45,
			reps: 14,
			work: true,
			notice: '',
		},
		{
			id: 3,
			weight: 60,
			reps: 10,
			work: false,
			notice: '1',
		},
	],
};

const trainingDaySlice = createSlice({
	name: 'training123',
	initialState,
	reducers: {
		toggleModal: (state, action) => {
			console.log('work');
			//@ts-ignore
			state.modal.isOpenModal = action.payload;
		},
		deleteSet: (state, action) => {
			console.log('id = ', action.payload);
			state.exercises = state.exercises.filter(
				set => set.id !== action.payload
			);
		},
		toggleWork: (state, action) => {
			const exercise = state.exercises.find(
				exercise => exercise.id === action.payload
			);

			if (exercise) {
				exercise.work = !exercise.work;
			}
		},
		addSet: (state) => {
			const newSet = {
				id: Math.random(),
				weight: 0,
				reps: 0,
				work: true,
				notice: '',
			};
      if (state.exercises.length > 0) {
        newSet.weight = state.exercises[state.exercises.length - 1].weight
        newSet.reps = state.exercises[state.exercises.length - 1].reps
      }
      state.exercises.push(newSet)
		},

	},
});

export const { toggleModal, deleteSet, toggleWork, addSet } = trainingDaySlice.actions;
export const trainingReducer = trainingDaySlice.reducer;
