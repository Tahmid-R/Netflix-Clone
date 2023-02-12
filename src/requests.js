const API_KEY = "545b9a66e8f75fc1cd33526697588499";


const requests = {

    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: '/discover/tv?api_key=545b9a66e8f75fc1cd33526697588499&with_networks=213',
    fetchTopRated: '/movie/top_rated?api_key=545b9a66e8f75fc1cd33526697588499&language=en-US',
    fetchActionMovie: 'discover/movie?api_key=545b9a66e8f75fc1cd33526697588499&with_genres=28',
    fetchComedyMovie: 'discover/movie?api_key=545b9a66e8f75fc1cd33526697588499&with_genres=35',
    fetchHorrorMovie: 'discover/movie?api_key=545b9a66e8f75fc1cd33526697588499&with_genres=27',
    fetchRomanceMovie: 'discover/movie?api_key=545b9a66e8f75fc1cd33526697588499&with_genres=10749',
    fetchDocumentaries: 'discover/movie?api_key=545b9a66e8f75fc1cd33526697588499&with_genres=99',


};


export default requests;

