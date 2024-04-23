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
 
    const response = await axios.get('https://crudcrud.com/api/9b7c25395d8245519155f71b66e4b2b0/movieee')
    console.log(response.data)
    setMovies(response.data)

  }
  const handleaddmovie=()=>{
    setmodal(!modal)


  }
  async function handleaddmovie2(data){
    setmodal(!modal)
    const response = await axios.post('https://crudcrud.com/api/9b7c25395d8245519155f71b66e4b2b0/movieee',data)
    setMovies([...movies,response.data])
    

  }
  async function handledel(data){
    console.log(data)
    const response = await axios.delete(`https://crudcrud.com/api/9b7c25395d8245519155f71b66e4b2b0/movieee/${data}`)
    const response2 = await axios.get('https://crudcrud.com/api/9b7c25395d8245519155f71b66e4b2b0/movieee')
    setMovies(response2.data)

  }


  return (
    <React.Fragment>
      {modal && <Form onAdd={handleaddmovie2} />}
      <section>
        <button onClick={()=>{handleButtonSubmit()}}>Fetch Movies</button>
        <button onClick={()=>{handleaddmovie()}}>Add Movies</button>
      </section>
      <section>
        <MoviesList  ondel={handledel} movies={movies} />
      </section>
      
    </React.Fragment>
  );
}

export default App;
