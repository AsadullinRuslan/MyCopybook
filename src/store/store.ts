import { configureStore, combineReducers } from "@reduxjs/toolkit";
import toDoReducer from './slices/toDoSlice'

const rootReducer = combineReducers({
    toDo: toDoReducer
})

export function setupStore() {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']