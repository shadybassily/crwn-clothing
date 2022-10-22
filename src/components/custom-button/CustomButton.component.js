import React from 'react'
import './custom-button.styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
const googleIcon = <FontAwesomeIcon icon={faGoogle} />

export default function CustomButton(props) {
  if(props.google){
     return <button type='submit' className='custom-button google'><span className='brand-icon'>{googleIcon}</span>{props.children}</button>
  }
  return (
    <button type='submit' className='custom-button'>{props.children} </button>
  )
}
