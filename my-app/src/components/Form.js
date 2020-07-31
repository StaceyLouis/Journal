import React from 'react'
import '../App.css'
import {Link} from 'react-router-dom'

function Form (props) {
    console.log(props)
    const {
      changeOnInput,
       disabled,
        errors,
         submit,
           value } = props;

    const inputChange = e => {
        const name = e.target.name;
        const value = e.target.value;

        changeOnInput(name , value);
    }
   

    const onSubmit = e => {
        e.preventDefault()
        submit()
    }
  return (
    <div>
    <Link to ='/'><button id ="homeButton">Home</button></Link>
    <form onSubmit={onSubmit}>
      <div className="form-wrapper">
        <div className="form-content" >

          <label htmlFor="name"> Name <br /> </label>
          <input
            name='name'
            type='text'
            id='name'
            placeholder='Enter Name'
            value={value.name}
            onChange={inputChange} />

          <p>
            <label htmlFor="title">Title<br /></label>
            <input
              name='title'
              type='text'
              value={value.email}
              onChange={inputChange}
            />

          </p>

          <p>
            <label htmlFor="post"> Add Post <br /></label>

            <textarea
              name='post'
              type='text'
              cols='60'
              rows="15"
              value={value.password}
              onChange={inputChange}
            />

          </p>
            <p>
            <button disabled={disabled} >Submit</button>
          </p>

          <div className="errors">
            <div>{errors.name}</div>
            <div>{errors.title}</div>
            <div>{errors.post}</div>
          </div>


        </div>
      </div>
    </form>
    </div>

  )
}

export default Form;