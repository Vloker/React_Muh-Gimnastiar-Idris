import React from 'react'
import './App.css'
import Tagline from './component/molekul/Tagline'
import FormData from './component/organisms/FormData'


function App() {
  return (
      <div className='container mt-5'>
        <div className='row justify-content-center'>
        <Tagline />
        <FormData />
        </div>
      </div>
  )
}
export default App