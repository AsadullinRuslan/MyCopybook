import { Dispatch } from '@reduxjs/toolkit'
import axios from '../../axios/index'
import { IServerResponse, IToDo } from '../../models/models'
import { toDoSlice } from '../slices/toDoSlice'

export const fetchToDo = (): any => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch(toDoSlice.actions.fetching())
            const res = await axios.get<IServerResponse<IToDo>>('todos')
            dispatch(toDoSlice.actions.fetchSuccess(res.data.todos))
        } catch (e) {
            dispatch(toDoSlice.actions.fetchError(e as Error))
        }
    }
}
