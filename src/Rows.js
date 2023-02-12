import React ,{useState, useEffect} from 'react';
import instance from './axios';
import './Rows.css';
import movieTrailer from 'movie-trailer';


const base_URL = "https://image.tmdb.org/t/p/original";

function Rows({title, fetchURL, isLarge}) {


    //decalring variables
    const [movies, setMovies] = useState([])
    const[trailerURL, setTrailerURL] = useState("")

    //everytime row loads, this piece of code will run exactly once, because of [] (no dependancy)
    useEffect(() => {

      //async call
        async function fetchData(){

            //waits until it gets info, and uses axios file to get fetchURL in appjs to append to base URL
            const request = await instance.get(fetchURL);
            setMovies(request.data.results);
            return request

        }

        fetchData()

    },[fetchURL])
    //if you use a variable outside the block, it must be used in the array as it is now a dependancy, if it changes the useEffect must change too
    

    const handleClick = (movie) => {
      if(trailerURL){
        setTrailerURL("");
        
      }
      else{
        movieTrailer(movie?.title|| movie?.name || movie?.original_name|| "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerURL(urlParams.get('v'));
        })
        .catch((error) => console.log(error))
      }
    }

  return (

    <div className="row">

      <h2> {title}</h2>


      <div className="row_posters">

        {movies.map(movie=>(
          <img className={`row_poster ${isLarge && "row_posterLarge"}`}
               key={movie.id} 
               onClick={() => handleClick(movie)}
               src= {`${base_URL}${isLarge ? movie.poster_path : movie.backdrop_path}`} 
               alt={movie.name}/>

        ))}
       </div>

       <div className="ratio ratio-16x9">
        {trailerURL &&<iframe title="YouTube video" src={`https://www.youtube.com/embed/${trailerURL}`} autoplay={1}
        height="390" width="100%" allowFullScreen></iframe>}
       </div>
     </div>

   







    
  )
}

export default Rows