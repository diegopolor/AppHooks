import { soundsNameActions } from "../actions/nameActions"

const { addSound, deleteSound } = soundsNameActions

export const soundsReducer = (state, { type, payload={} } = {})=> {
    switch(type){
        case addSound:
            return[ ...state, payload ]
        case deleteSound:
            return state.filter(({ id }) => id != payload)
        default:
            return state
    }
}

