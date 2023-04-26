import { useEffect, useState } from 'react'

export const useFetch = (url, method='GET', body={})=> {
    const [ data, setData ] = useState({})
    const [ error, setError] = useState(null)
    const [ loader, setLoader ] = useState(false)

    const  changeError = (err)=> setError(err)

    useEffect(()=> {
        setLoader(true)
        fetch(url, {
            method,
            headers:{
                'Content-Type': 'application/json'
            },
            body: method !== 'GET' ? JSON.stringify(body) : undefined
        })
        .then((response) =>response.json())
        .then((json)=> setData(json))
        .catch((err) => { 
            console.log(err)
            changeError('Se produjo un error al obtener los datos. Por favor, inténtalo de nuevo más tarde.') 
        })
        .finally(()=> { setLoader(false) })
    }, [url]) // eslint-disable-line
   
    return {
        data, 
        error,
        loader,
        changeError
    }

} 