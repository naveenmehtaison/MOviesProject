import React from 'react';

import classes from './Movie.module.css';
import axios from 'axios';

const Movie = (props) => {
  // async function deleteHandler(){
  //   axios
  // }
  const handledel=()=>{
    console.log('hii',props)
    props.ondel()

  }

  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      <button onClick={()=>{handledel()}}>Delete</button>
    </li>
  );
};

export default Movie;
