import React from 'react'
import {useState} from 'react'

const App = () => {


  //for two binding 
  //heading
  const [heading, setheading] = useState('')
  //detailed
  const [detailed, setdetailed] = useState('')


  //task mapping in recent notes
  const [task, settask] = useState([])

  //preventing defult habit of form of getting self reloaded
  const submitHandler = (e)=>{
    e.preventDefault()
    const copyTask = [...task] //copied task to keep intact(stays there until not deleted) with old one while making new one (task is probably an array containing all existing tasks.The spread operator ... creates a copy of the task array.)
    copyTask.push({heading,detailed}) //Adds a new task to the copied array.
    console.log(copyTask)
    settask(copyTask) //Updates the React state. So now the new task list becomes the current task. (the new task will not be saved into the React state.)
    setheading("") //Clears the heading/title input.
    setdetailed("")
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
            <button className='bg-white font-medium outline-none w-full text-black px-5 py-2 rounded active:scale-95 active:bg-gray-300 cursor-pointer'>Add Notes</button>
    
            {/* <img className='h-52' src="https://i.pinimg.com/736x/ff/f2/d2/fff2d25cfecdcc597bc8bfb5e31195f3.jpg" alt="" srcset="" /> */}
        </form>
        <div className=' lg:w-1/2 lg:border-l-2 p-10'>
        <h1 className='text-4xl font-bold'>Recent notes</h1>
        <div className='flex flex-wrap gap-5 mt-5 h-full overflow-auto'>
          {task.map(function(elem,idx){//.map() goes thoough the array one elem at a time and idx simply means index 
             //we passed elem.title because elem is an object stored in task array with both values title and detiled and we just want heading to be printed in recent notes 
             //react uses key to identify individual elem in the list 
             return<div key={idx} className="h-52 w-40 rounded-2xl text-black p-4 bg-white"><h3 className='leading-tight text-xl font-bold'>{elem.heading}</h3></div>
          })}
        </div>
        </div>
    </div>
  )
}

export default App