
    //  Файл не используется, он пробный!!!

import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import axios from "../axios";

export function useFetching() {

    const [todo, setTodo] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    const fetchToDo = async () => {
        try {
            setLoading(true)
            setError('')
            const res = await axios.get('www.qweqwe.ru')
            setTodo(res.data)
        }   
        catch (e:unknown) {
            const error = e as AxiosError
            setLoading(false)
            setError(error.message)
        }
    }

    useEffect(() => {
        fetchToDo()
    }, [])

    return {
        todo, loading, error
    }
}