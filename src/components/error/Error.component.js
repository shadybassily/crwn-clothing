import React from 'react'
import './error.styles.css'
export default function Error({message}) {
  return (
    <p className='error'>{message}</p>
  )
}
