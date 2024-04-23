import React from 'react';
import Form from './components/Form';
import MoviesList from './components/MoviesList';
import './App.css';
import axios from 'axios';
import { useEffect,useState,useMemo } from 'react';

function App() {
  const[movies,setMovies]=useState([])
  const [modal , setmodal]= useState(false)
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
  const handleaddmovie=()=>{
    setmodal(!modal)


  }

  return (
    <React.Fragment>
      {modal && <Form onAdd={handleaddmovie}/>}
      <section>
        <button onClick={()=>{handleButtonSubmit()}}>Fetch Movies</button>
        <button onClick={()=>{handleaddmovie()}}>Add Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
      
    </React.Fragment>
  );
}

export default App;
