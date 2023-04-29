import { soundsNameActions } from "./nameActions"

export const addSoundAction = (newSound)=> ( {
    type: soundsNameActions.addSound,
    payload: newSound
})

export const deleteSoundAction = (id)=> ({
    type : soundsNameActions.deleteSound,
    payload: id
})