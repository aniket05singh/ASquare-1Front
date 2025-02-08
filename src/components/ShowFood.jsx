import React from 'react'

const ShowFood = (foodName,quantity) => {
  return (
    <div>
        <div className='flex justify-between'>
            <div>{foodName}</div>
            <div>{quantity}</div>
        </div>
    </div>
  )
}

export default ShowFood
