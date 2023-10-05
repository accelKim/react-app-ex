import  {useState, useEffect} from 'react';
import Movie from '../components/Movie';

function Home() {
  let [isLoading, setIsLoading] = useState(true);
  let [movies, setMovies] = useState([]);
  const getMovies = async() => {
    const response = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year")
    const json = await response.json();
    setMovies(json.data.movies);
    console.log(json.data.movies);
    setIsLoading(false);
  };
  
  useEffect(() => {
   getMovies();
  } ,[]);
    
  return (
    <div>
      <h1>Movie App!</h1>
      <hr />
      {isLoading ? <p>Loading...</p> : null}
      {
        movies.map((movie) => (
                  <Movie 
                    key={movie.id}
                    id = {movie.id}
                    coverImage={movie.medium_cover_image}
                    title = {movie.title}
                    genres = {movie.genres}
                    summary = {movie.summary}
                  />
        ))
      }
    </div>
  );
}

export default Home;
