import './App.css';
import Rows from'./Rows';
import requests from './requests';
import Banner from './Banner'
import NavBar from './NavBar'

function App() {
  return (
    <div className="App">

     <NavBar/> 
     
     <Banner/>

     <Rows title = "NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals} isLarge> </Rows>

     <Rows title = "Trending Now" fetchURL={requests.fetchTrending}> </Rows>
     <Rows title = "Top Rated" fetchURL={requests.fetchTopRated}> </Rows>
     <Rows title = "Action Movies" fetchURL={requests.fetchActionMovie}> </Rows>
     <Rows title = "Comedy Movies" fetchURL={requests.fetchComedyMovie}> </Rows>
     <Rows title = "Horrow Movies" fetchURL={requests.fetchHorrorMovie}> </Rows>
     <Rows title = "Romance Movies" fetchURL={requests.fetchRomanceMovie}> </Rows>
     <Rows title = "Documentaries" fetchURL={requests.fetchDocumentaries}> </Rows>


    </div>
  );
}

export default App;
