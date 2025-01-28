import React, { useState } from 'react'

const AddFoods = () => {
    const [food, setFood] = useState('');
  return (
    <div className='w-full h-[100vh] bg-blue-800 relative'>
      <div className='absolute border-2 border-black w-[80%] mt-50 ml-20 flex justify-center items-center bg-green-800'>
        <form className='flex gap-4 bg-red-200 justify-evenly items-center w-full'>
            <input type="text" placeholder='Add Food' className='p-4 bg-yellow-400'
            value={food} onChange={(e)=> setFood(e.target.value)}/>
            <input type="number"  className='p-4 bg-yellow-400'/>
            <button  className='p-4 bg-yellow-400'>Add</button>
        </form>
      </div>
    </div>
  )
}

export default AddFoods
