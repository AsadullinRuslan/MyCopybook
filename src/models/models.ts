export interface IToDo {
    completed: boolean
    id: number
    todo: string
    userId: number
}

export interface IServerResponse<T> {
    limit: number
    skip: number
    todos: T[]
}


