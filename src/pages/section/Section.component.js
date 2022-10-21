import React from 'react'
import { useParams } from 'react-router-dom'

export default function Section() {
  const params = useParams()
  console.log(params)
  return (
    <div>{params.section} Section</div>
  )
}
