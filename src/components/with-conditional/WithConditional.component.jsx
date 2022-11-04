import React from 'react'
import Loader from '../loader/Loader.commponent'

export const withConditional = (Component) => props => {
    if(props.isLoading) return <Loader />
    return <Component {...props}/>
}