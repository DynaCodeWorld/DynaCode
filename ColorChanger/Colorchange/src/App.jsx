
import { useState } from 'react'
import './App.css'

function App() {
  const[color,setcolor]=useState("grey")
  const[txt,settxt]=useState("Empty")
  const[clr,setclr]=useState("default")

const changecolor=(e)=>{
  if(e.target.id==="red"){
    setcolor("red")
    settxt("RED")
    setclr("yellow")
  }
  // else if (e.target.id==="blue"){
  //   setcolor(e.target.id)
  // }
  else if (e.target.id==="green"){
    setcolor(e.target.id)
    setclr("pink")
    settxt("GREEN")
   

  }
}

  return (
    <>
      <div  style={{backgroundColor :color}} className=' px-72 py-96'>
        <h2 style={{color:clr}} className='m-10' >color :: <b>{txt}</b></h2>
      <label className='bg-white px-5 py-2 rounded-3xl m-2'>
      <button onClick={changecolor} id='red' className='bg-red-600 text-white px-5 rounded-3xl m-2'>red</button>
      <button  onClick={(e)=>{setcolor(e.target.id) ;settxt("BLUE");setclr("white")}} id='blue'  className='bg-blue-600 text-white px-5 rounded-3xl m-2'>blue</button>
      <button onClick={changecolor} id='green' className='bg-green-600 text-white px-5 rounded-3xl m-2'>green</button>
      <button onClick={(e)=>{
        setcolor(e.target.id);settxt("YELLOW");setclr('red')
      }} className='bg-yellow-300 text-white px-5 rounded-3xl m-2' id='yellow'>yellow</button>
      <button onClick={(e)=>{setcolor(e.target.id);setclr("black");settxt("PINK")} }id="pink" className='bg-pink-600 text-white px-5 rounded-3xl m-2'>pink</button></label>
      </div>
    </>
  )
}

export default App
