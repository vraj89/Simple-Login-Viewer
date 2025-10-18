import { useState } from 'react'
import { createContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './header.jsx'
import './App.css'

export const mycontext=createContext();

function App() {
  let [name,setName]=useState('');
  let [user,setUser]=useState('false')

  return (
    <>
     <mycontext.Provider value={{name,setName,user,setUser}}>
       <Header></Header>
     </mycontext.Provider>
     
      
    </>
  )
}

export default App
