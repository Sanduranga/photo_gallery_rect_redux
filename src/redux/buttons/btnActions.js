import { dark_mode_toggle, next_page, previous_page } from "./btnActionTypes.js"



export function darkModeToggle() {
    return {
        type: dark_mode_toggle,
        payload: ''
    }
}

export function nextPage() {
    return {
        type: next_page,
        payload: 1,
    }
}

export function previousPage() {
    return {
        type: previous_page,
        payload: 1,
    }
}