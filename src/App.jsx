import { useEffect, useState } from "react";
import { Link } from "react-router";
import Card from "./components/utils/Card/Card";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


    console.log("This is ID: ", movies[0]?.id)
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=1`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setMovies(data.results);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return <div className="text-center text-xl">Loading movies...</div>;
  }

  if (error) {
    return <div className="text-center text-xl text-red-500">Error: {error}</div>;
  }

  return (
    <>
  {/* New Release */}
    <h2 className="pt-10 text-[50px] font-bold text-center text-white bg-[#2D0505]"> New Release <p className="text-[25px] text-gray-300">Start your binge before the new season begins!</p></h2>
    <div className="container min-w-full mx-auto px-40 pt-20 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-[#2D0505]">
    
      {movies.map((movie) => (
        <Link key={movie.id} to={`/movie/${movie.id}`}>
          <Card 
          id={movie.id}
            title={movie.title}
            overview={movie.overview}
            release_date={movie.release_date}
            backdropPath={
              movie.backdrop_path
                ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
                : ""
            }
            voteAverage={movie.vote_average}
            voteCount={movie.vote_count}
          />
        </Link>
      ))}
    </div>
    {/* popular */}
    <h2 className="pt-10 text-[50px] font-bold text-center text-white bg-[#2D0505]">popular <p className="text-[25px] text-gray-300">The most-loved movies by fans everywhere!</p></h2>
    <div className="container min-w-full mx-auto px-40 pt-20 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-[#2D0505]">
    {movies.map((movie) => (
      <Link key={movie.id} to={`/movie/${movie.id}`}>
        <Card 
          id={movie.id}
          title={movie.title}
          overview={movie.overview}
          release_date={movie.release_date}
          backdropPath={
            movie.backdrop_path
              ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
              : ""
          }
          voteAverage={movie.vote_average}
          voteCount={movie.vote_count}
        />
      </Link>
    ))}
  </div>
  {/* Upcoming */}
  <h2 className="pt-10 text-[50px] font-bold text-center text-white bg-[#2D0505]">Upcoming <p className="text-[25px] text-gray-300">Get ready for the movies hitting screens soon!</p></h2>
    <div className="container min-w-full mx-auto px-40 pt-20 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-[#2D0505]">
    {movies.map((movie) => (
      <Link key={movie.id} to={`/movie/${movie.id}`}>
        <Card 
         id={movie.id}
          title={movie.title}
          overview={movie.overview}
          release_date={movie.release_date}
          backdropPath={
            movie.backdrop_path
              ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
              : ""
          }
          voteAverage={movie.vote_average}
          voteCount={movie.vote_count}
        />
      </Link>
    ))}
  </div>
  {/* Upcoming */}
  <h2 className="pt-10 text-[50px] font-bold text-center text-white bg-[#2D0505]">Top Rated <p className="text-[25px] text-gray-300">Movies that critics and fans agree are a must-watch!</p></h2>
    <div className="container min-w-full mx-auto px-40 pt-20 pb-20 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-[#2D0505]">
    {movies.map((movie) => (
      <Link key={movie.id} to={`/movie/${movie.id}`}>
        <Card 
         id={movie.id}
          title={movie.title}
          overview={movie.overview}
          release_date={movie.release_date}
          backdropPath={
            movie.backdrop_path
              ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
              : ""
          }
          voteAverage={movie.vote_average}
          voteCount={movie.vote_count}
        />
      </Link>
    ))}
  </div>
    </>
  );
};

export default App;
