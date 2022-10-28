import React from 'react'
import { useSelector } from 'react-redux'
import MenuItem from './MenuItem.component'

export default function MenuDirectory() {
  const sections = useSelector(state => state.directory)
  
  return (
    <div className='parent-container menu-directory'>
      {sections.map(section => {
        return <MenuItem section={section} key={section.id}/>
      })}
    </div>
  )
}
