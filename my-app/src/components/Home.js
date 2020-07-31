import React from 'react'
import {  Link  } from 'react-router-dom';

function Home(){
    return (
        <div id="home">
            <h1>Stacey's Journal</h1>
          <Link to="/addPost"><button id="postButton">Add Post</button></Link>  
        </div>
    )
}

export default Home; 