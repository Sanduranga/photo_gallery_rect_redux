import { dark_mode_toggle } from "./btnActionTypes";


const initialState = {
    darkMode: false,
}


export function btnReduser(state = initialState, action) {
    switch (action.type) {
        case dark_mode_toggle:
            return {
                darkMode: !state.darkMode
            }
    
        default:
            return state
    }
}