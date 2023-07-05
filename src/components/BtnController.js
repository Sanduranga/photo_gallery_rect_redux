
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { darkModeToggle, nextPage, previousPage } from '../redux/buttons/btnActions'

export default function BtnController() {

    const dispatch = useDispatch()

    const handleClick = (next) => {
        next == 'next'? dispatch(nextPage()) : dispatch(previousPage())
        
    }
    const handleTheme = () => {
        dispatch(darkModeToggle())
    }

    const dark = useSelector((state) => state.button.darkMode)

  return (
    <div className='flex justify-center font-mono cursor-pointer'>
        <div onClick={handleTheme} className={`flex my-5 mx-3 py-2 px-5 border rounded-md font-bold ${dark ? ' text-white border-white' : ' text-black border-black' }`}>
            <div>{dark?'Light':'Dark'}</div>
            <div>{dark?'☀️':'🌙'}</div>
        </div>
        <button className='bg-blue-200 px-5 py-2 mx-3 my-5 border rounded-md' onClick={() => handleClick()}>previous</button>
        <button className='bg-blue-200 px-5 py-2 mx-3 my-5 border rounded-md' onClick={() => handleClick('next')}>next</button>
    </div>
  )
}
