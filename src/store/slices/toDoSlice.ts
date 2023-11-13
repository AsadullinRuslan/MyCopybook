import { IToDo } from '../../models/models'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ToDoState {
    isLoading: boolean
    error: string
    ToDos: IToDo[]
}

const initialState: ToDoState = {
    isLoading: false,
    error: '',
    ToDos: [],
}

export const toDoSlice = createSlice({
    name: 'ToDo',
    initialState,
    reducers: {
        fetching(state) {
            state.isLoading = true
        },
        fetchSuccess(state, action: PayloadAction<IToDo[]>) {
            state.isLoading = false
            state.ToDos = action.payload
        },
        fetchError(state, action: PayloadAction<Error>) {
            state.isLoading = false
            state.error = action.payload.message
        },
    },
})

export default toDoSlice.reducer
