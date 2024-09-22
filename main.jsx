import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Question1 from './question1.jsx';
import Question2 from './question2.jsx';
import Question3 from './question3.jsx';
import Question4 from './question4.jsx';
import Question5 from './question5.jsx';
import LoginSignup from './Signup.jsx';


  const router=createBrowserRouter([{
    path:"/", element:<App/>,children:[
      {
        path:"/" ,element:<LoginSignup/>},
        {path:"/question1" , element:<Question1/>},
        {path:"/question2" , element:<Question2/>},
        {path:"/question3" , element:<Question3/>},
        {path:"/question4" , element:<Question4/>},
        {path:"/question5" , element:<Question5/>}
      
     
      
    ]
  }])

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider  router={router}/>
     
    </React.StrictMode>,
  )
