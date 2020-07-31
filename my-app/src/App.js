import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form'
import formSchema from './validation/formSchema'
import axios from 'axios'
import User from './components/User'
import * as yup from 'yup'
import {  Route  } from 'react-router-dom';
import Home from './components/Home'

const initialForm ={
 
name : '',
title:"",
post: "",


}
const initialFormErrors = {
  name : '',
  title:"",
  post: "",
 
}



function App() {
const [user, setUser] = useState([]);
const [originalFormValues, setFormValues] = useState(initialForm);
const [formErrors, setErrors]=useState(initialFormErrors);
const [disabled, setDisabledStatus]=useState(true);



const postUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
      
        setUser([res.data, ...user])
        setFormValues(initialForm)
      })
      .catch(err => {
        console.log(err)
      })
  }

const changeOnInput = (name, value) =>{
  yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        setErrors({
          ...formErrors,
          [name]: "",
        })
      })
      
      .catch(err => {
        setErrors({
          ...formErrors,
          [name]: err.errors[0],
        })
      })

  setFormValues({
    ...originalFormValues,
    [name]:value
  })

}

const onSubmit = () => {

const newUser = {
  name: originalFormValues.name.trim(),
  email: originalFormValues.title.trim(),
  password: originalFormValues.post.trim()
}
postUser(newUser);
}



useEffect(() => {
  formSchema.isValid(originalFormValues).then(valid => {
    setDisabledStatus(!valid)
  })
}, [originalFormValues])

  return (
    <div className="App">
    <Route exact path='/addPost'>
   
      <header className="App-header">
        <Form 
        changeOnInput={changeOnInput}
         value={originalFormValues}
          submit={onSubmit}
           errors={formErrors} 
           disabled={disabled} />
      
      </header>
      </Route>
    <Route exact path='/'>
      <Home />
    </Route>
      
      {
        user.map(user=> {
          return (
            <User key={user.id} values={user} />
          )
        })
      }
    </div>
  );
}

export default App;

