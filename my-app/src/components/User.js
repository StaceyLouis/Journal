
import React from 'react'
import logo from './form-photo.jpg';
import '../App.css'

function User({ values }) {
  

  return (
    <div className='user-container'>
      <img id="avatar" src={logo}/>
      <h2 id="valueName">{values.name}</h2>
      <p id="valueTitle">{values.email}</p>
      <p id="valuePost">{values.password}</p>
    
      
    </div>
  )
}

export default User