import React from 'react'
import './customInput.scss'

export const CustomInput = ({handleChange, ...otherProps}) => {
  return (
    <div className='group'>
        <input className='form-input' onChange={handleChange} {...otherProps}/>
    </div>
  )
}
