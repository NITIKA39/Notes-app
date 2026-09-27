import React from 'react'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
        <form className='flex justify-between items-start p-10'>
            <div className='flex gap-4 w-1/2 items-start flex-col'>
              <input type="text"
            placeholder='Enter notes heading' 
            className='px-5 w-full py-2 border-2 rounded'
            />
            <input type="text" 
            className='px-5 w-full h-20 py-2 border-2 rounded' 
            placeholder='Write details'/>
            <button className='bg-white w-full w-1/2 text-black px-5 py-2 rounded'>Add Notes</button>
            </div>
            <img className='h-52' src="https://i.pinimg.com/736x/ff/f2/d2/fff2d25cfecdcc597bc8bfb5e31195f3.jpg" alt="" srcset="" />
        </form>
    </div>
  )
}

export default App