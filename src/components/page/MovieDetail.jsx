import  { useEffect, useState } from "react";
import { data, useParams } from "react-router";

const MovieDetail = () => {
  const { id } = useParams(); // Get the movie ID from the URL
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setMovie(data?.results);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchMovieDetail();
  
  }, [id]);
  console.log(movie)

  if (loading) {
    return <div className="text-center text-xl">Loading movie details...</div>;
  }

  if (error) {
    return <div className="text-center text-xl text-red-500">Error: {error}</div>;
  }

  return (
    <main>
      {movie?.slice(0,1).map(item=>(
        <>
        <div className=" w-full p-20 text-center bg-[#2D0505]" key={item?.key}>
      <h1 className="text-6xl font-bold text-white pb-4">{item.name}</h1>
      {/* <p className="text-lg my-4">{item.overview}</p> */ }
      <p className="text-lg mt-2 text-gray-200 pb-2">Release Date: {item.published_at}</p>
      <p className="text-lg mt-2 text-gray-300 pb-10">Site: {item?.site}</p>
      
      {/* 
       */}
      <iframe className="flex justify-center align-center m-auto" width="800" height="500" allowFullScreen src={`https://www.youtube.com/embed/${item?.key}`} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowfullscreen></iframe>
      {/* <p className="text-md">Rating: {item.vote_average} / 10</p>
      
      <img
        className="w-full mt-4"
        src={
          movie.backdrop_path
            ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
            : "https://via.placeholder.com/500x300?text=No+Image+Available"
        }
        alt={item.name}
      /> */}
    </div>
        </>
      ))}
    </main>
  );
};

export default MovieDetail;
