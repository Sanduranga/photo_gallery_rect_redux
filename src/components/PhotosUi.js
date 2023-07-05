import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPhotos } from '../redux/photoGallery/photosActions';

export default function PhotosUi() {

    const dispatch = useDispatch();
    const {photos, isLoading, Error, page} = useSelector((state) => state.photoGallery)
    

    useEffect(() => {
        dispatch(fetchPhotos(page))
    }, [dispatch,page])

    
    // const albemData = photos.map((elements) => {
    //     return  <img src={elements.download_url}/> 
    // })
    const abc = "https://picsum.photos/id/0/5000/3333"

    return (
        <div className='grid grid-cols-3 gap-4'>

            {photos.map((img) =>(
                <img src={img.download_url}/>
            ))}

        </div>
    )
}