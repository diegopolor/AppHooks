import { useEffect } from 'react'
import { useFetch } from './useFetch'

const URL = 'https://jsonplaceholder.typicode.com/todos'

export const useTodos = (_id)=> {
    const { data, loader, error, changeError } = useFetch(`${URL}/${_id}`)
    const { id = '', title = '', completed='' } = data || {}

    useEffect(()=> {
        if(_id > 200 || _id <= 0) changeError('El id es incorrecto')
        else changeError(null)
    }, [_id]) // eslint-disable-line

    return {
        id,
        title, 
        completed, 
        loader,
        error
    }
}