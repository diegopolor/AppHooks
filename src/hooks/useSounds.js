import { useReducer } from "react"
import { addSoundAction, deleteSoundAction } from "../actions/soundsActions"
import { soundsReducer } from "../reducer/soundsReducer"

const init = () => JSON.parse(localStorage.getItem('sounds')) || []
const isObjectValuesVoid = (object)=> Object.values(object).every(value => value.trim && value.trim() == '' )



export const useSounds = (initialSounds)=> {
            
    const [ sounds, dispatch ] = useReducer(soundsReducer, initialSounds, init)

    const onAddSong = (newSound)=> {
        if(isObjectValuesVoid(newSound)) return
        dispatch( addSoundAction(newSound))
    }

    const onDeleteSond = (id)=> {
        dispatch(deleteSoundAction(id))
    }

    return {
        sounds,
        onAddSong,
        onDeleteSond
    }


}
