import React from 'react'
import { useParams } from 'react-router-dom'

export default function Section() {
  const params = useParams()
  return (
    <div>{params.section} Section</div>
  )
}
