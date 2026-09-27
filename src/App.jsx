import React from 'react'
import {useState} from 'react'

const App = () => {


  //for two binding 
  //heading
  const [heading, setheading] = useState('')
  //detailed
  const [detailed, setdetailed] = useState('')

  //preventing defult habit of form of getting self reloaded
  const submitHandler = (e)=>{
    e.preventDefault()
    console.log("form submitted")
    setheading("")
  }

  return (
    <div className='h-screen lg:flex bg-black text-white'>
        <form onSubmit={(e)=>(
          submitHandler(e)
        )} className='flex gap-4 lg:w-1/2 flex-col items-start p-10'>
              <h1 className='text-4xl font-bold'>Add notes</h1>

              {/* heading section */}
              <input //two way binding
              value={heading}
              onChange={(e)=>{
                setheading(e.target.value)
              }}
              type="text"
            placeholder='Enter notes heading' 
            className='px-5 w-full font-medium py-2 border-2 outline-none rounded'
            />

            {/* writing notes section */}
            <textarea 
            value={detailed}
              onChange={(e)=>{
                setdetailed(e.target.value)
              }}
            type="text" 
            className='px-5 w-full font-medium h-32 py-2 flex items-start flex-row border-2 outline-none rounded' 
            placeholder='Write details'/>
            <button className='bg-white font-medium outline-none w-full text-black px-5 py-2 rounded'>Add Notes</button>
    
            {/* <img className='h-52' src="https://i.pinimg.com/736x/ff/f2/d2/fff2d25cfecdcc597bc8bfb5e31195f3.jpg" alt="" srcset="" /> */}
        </form>
        <div className=' lg:w-1/2 lg:border-l-2 p-10'>
        <h1 className='text-4xl font-bold'>Recent notes</h1>
        <div className='flex flex-wrap gap-5 mt-5 h-full overflow-auto'>
          <div className="h-52 w-40 rounded-2xl bg-white"></div>
          <div className="h-52 w-40 rounded-2xl bg-white"></div>
          <div className="h-52 w-40 rounded-2xl bg-white"></div>
        </div>
        </div>
    </div>
  )
}

export default App