import { useState } from 'react'

export const useForm = (initialFormState = {}) => {
    const [formState, setFormState ] = useState(initialFormState)

    const onInputValueForm = ({ target })=> {
        const { name, value } = target

        setFormState(current => ({
            ...current,
            [ name ] : value  
        }))    
    }

    const onResetForm = (e)=> {
        e.preventDefault()
        setFormState(initialFormState)
    }

    return {
        ...formState,
        setFormState,
        onInputValueForm,
        onResetForm
    }
}
