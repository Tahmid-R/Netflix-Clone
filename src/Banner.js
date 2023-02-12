import React, {useState,useEffect} from 'react'
import './Banner.css'
import requests from './requests'
import axios from './axios'



function Banner() {

    const [movie, setMovies] = useState([])

    //everytime row loads, this piece of code will run exactly once, because of [] (no dependancy)
    useEffect(() => {

      //async call
        async function fetchData(){

            //waits until it gets info, and uses axios file to get fetchURL in appjs to append to base URL
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovies(request.data.results[Math.floor(Math.random() * request.data.results.length-1)]);
            return request

        }

        fetchData()

    },[])

    console.log(movie)

    function truncate(str,n){
        return str?.length > n ? str.substr(0,n-1) + "..." : str;
    }


  return (
    //Header w background image
    <header className="banner"
    style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: "center center"

    }}
    
    >


        <div className = "banner_contents">

            <h1 className="banner_title"> {movie?.title || movie?.name || movie?.original_name}</h1>

            <div className = "banner_buttons">

                <button className = "banner_button">
                    Play
                </button>

                <button className = "banner_button">
                    My List
                </button>

                
            </div>

            <h1 className="banner_description">
                {truncate(movie?.overview,150)}
            </h1>





        </div>

        <div className="banner--fadeBottom"/>


        


    </header>


    //title


    //two buttons - play and my list


    //description
  )
}

export default Banner