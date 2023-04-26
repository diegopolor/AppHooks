import { useEffect, useState } from 'react'

export const useFetch = (url, method='GET', body={})=> {

    const [stateFetch, setStateFetch] = useState({
        data: {},
        error: null,
        loader: false
    })

    const UpdateStateFetch = ( keyValue )=> {
        setStateFetch((oldState) => 
            ({ 
                ...oldState, 
                ...keyValue
            })
        )
    }

    const changeError = (error)=>{
        UpdateStateFetch({ error })
    } 

    const getRequest = async() => {
       try{
           UpdateStateFetch({ loader: true })
           const response = await fetch(url, {
               method,
               headers:{
                   'Content-Type': 'application/json'
               },
               body: method !== 'GET' ? JSON.stringify(body) : undefined
           })
           const data = await response.json()
           UpdateStateFetch({ data }) 
           UpdateStateFetch({ loader: false }) 
       }
       catch(err){
           console.log(err)
           changeError(
               'Se produjo un error al obtener los datos. Por favor, inténtalo de nuevo más tarde.'
           ) 
        }
    }

    useEffect(()=> {
        getRequest()
    }, [url]) // eslint-disable-line
   
    return {
        ...stateFetch,
        changeError
    }

} 