

import { fetchImages, loadErr, loadImages } from "./photoActionsTypes";
import axios from "axios";


function load_images(isLoading) {
    return {
        type: loadImages,
        payload: isLoading,
    }
}

function fetch_images(result) {
    return {
        type: fetchImages,
        payload: result,
    }
}

function load_Err() {
    return {
        type: loadErr,
        payload: 'xx',
    }
}


export function fetchPhotos(page = 1){
   
    return async function(dispatch, getState){
        dispatch(load_images(true))
        const result = await axios.get(`https://picsum.photos/v2/list?limit=9&page=${page}`)
        dispatch(fetch_images(result.data))
        dispatch(load_images(false))

    }
}
