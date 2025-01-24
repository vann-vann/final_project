
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({
  id,
  title,
  overview,
  release_date,
  backdropPath,
  voteAverage,
  voteCount,
}) => {
  const fallbackImage =
    "https://via.placeholder.com/400x300?text=No+Image+Available";

  return (
  //  <section  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    <div className="w-full  max-w-sm rounded-lg shadow dark:bg-gray-800 bg-red-950 dark:border-gray-700 overflow-hidden ">
 
      <Link to={`/movie/${id}`}>
        <img
          className="rounded-t-lg hover:scale-x-125 transition duration-[.4s]   "
          src={backdropPath || fallbackImage}
          alt={title || "Movie Poster"}
        />
      </Link>
      <div className="px-5 pb-5">
        <Link to={`/movie/${id}`}>
          <h5 className="text-lg font-bold tracking-tight text-gray-100 dark:text-white line-clamp-1 pt-5">
            {title || "Untitled"}
          </h5>
          <p className="text-lg text-gray-300 dark:text-gray-200 line-clamp-2">
            {overview || "No overview available."}
          </p>
          <p className="text-lg text-gray-100 dark:text-gray-400">
            {release_date || "Release date not available."}
          </p>
        </Link>
        <div className="flex items-center mt-2.5 mb-5">
          <span className="bg-yellow-400 text-white text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-yellow-400 ms-3">
            {voteAverage || "N/A"}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xl font-medium text-gray-300 dark:text-white">
            {voteCount ? `${voteCount} votes` : "No votes yet"}
          </span>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  overview: PropTypes.string,
  release_date: PropTypes.string,
  backdropPath: PropTypes.string,
  voteAverage: PropTypes.number,
  voteCount: PropTypes.number,
};

Card.defaultProps = {
  title: "No Title",
  overview: "No overview available.",
  release_date: "Unknown release date",
  backdropPath: "",
  voteAverage: 0,
  voteCount: 0,
};

export default Card;
