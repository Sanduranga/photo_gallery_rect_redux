import { next_page, previous_page } from "../buttons/btnActionTypes";
import { fetchImages, loadErr, loadImages } from "./photoActionsTypes";

const initialState = {
    photos: [],
    isLoading: false,
    errors: null,
    page: 1,
}

export function photoReduser(state = initialState, action) {
    switch (action.type) {
        case loadImages:
            return {
                ...state,
                isLoading: action.payload,
            } 
    
        case fetchImages:
            return {
                ...state,
                photos: action.payload,
            } 
    
        case loadErr:
            return {
                ...state,
                errors: action.payload,
            }
    
        case next_page:
            return {
                ...state,
                page: state.page + action.payload,
            } 
    
        case previous_page:
            return {
                ...state,
                page: state.page - action.payload,
            } 
    
        default:
            return state
    }
}