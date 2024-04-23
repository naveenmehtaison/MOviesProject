import React from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import axios from 'axios';
import { useEffect,useState } from 'react';

function App() {
  const[movies,setMovies]=useState([])
  // const dummyMovies = [
  //   {
  //     id: 1,
  //     title: 'Some Dummy Movie',
  //     openingText: 'This is the opening text of the movie',
  //     releaseDate: '2021-05-18',
  //   },
  //   {
  //     id: 2,
  //     title: 'Some Dummy Movie 2',
  //     openingText: 'This is the second opening text of the movie',
  //     releaseDate: '2021-05-19',
  //   },
  // ];
  useEffect(handleButtonSubmit,[])
  async function handleButtonSubmit(){
 
    const response = await axios.get('https://crudcrud.com/api/d8eecc9113194f9cafaeda9696f88951/movieee')
    console.log(response.data)
    setMovies(response.data)

  }

  return (
    <React.Fragment>
      <section>
        <button onClick={()=>{handleButtonSubmit()}}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
