import React from 'react'
import { ItemData } from '../../../data'

const Orange = () => {
  return (
    <div style={{textAlign:"center"}}>
    <img src={ItemData[0][2].image} alt={ItemData[0][2].title} />
    </div>
  )
}

export default Orange