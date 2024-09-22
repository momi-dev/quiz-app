import { useState,useEffect,useRef } from 'react'

import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Name from './name'
import Question1 from './question1'
import Question2 from './question2'
import { Outlet } from 'react-router-dom';
import { Quiz } from './assets/quizstore'
import LoginSignup from './Signup'


function App() {
    const  [marks,setmarks]=useState(0);

    const marks1 = () => {
      setmarks((marks) => marks + 1)
    }
  /*  const[color,setstate]=useState("white");
const click = color=>{
  setstate(color)
}*/




  return (
    <Quiz.Provider value={{


      marks1:marks1,
      marks:marks,
      



    }}>
  <div className='background'>

  <Name/>
 
  <Outlet/>
  
 

  </div>
  
  </Quiz.Provider>
  )
}

export default App
