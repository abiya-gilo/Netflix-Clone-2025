// 1. Import React and hooks
import React, { useEffect, useState } from "react";

// 2. Import axios instance (configured for TMDB API)
import axios from "../../../utils/axios";

// 3. Import CSS for styling this component
import "./Row.css";

// 4. Import movie-trailer package (finds YouTube trailers by movie name)
import movieTrailer from "movie-trailer";

// 5. Import YouTube component (embeds YouTube videos in React)
import YouTube from "react-youtube";

// 6. Define the Row component, receiving props:
//    - title: the row title (e.g. "Trending Now")
//    - fetchUrl: the API endpoint for this category
//    - isLargeRow: optional flag to make posters bigger
const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  // 7. State to hold the list of movies fetched from TMDB
  const [movies, setMovies] = useState([]);

  // 8. State to hold the YouTube trailer video ID
  const [trailerUrl, setTrailerUrl] = useState("");

  // 9. useEffect runs when the component loads or when fetchUrl changes
  useEffect(() => {
    async function fetchData() {
      try {
        // 10. Call TMDB API using axios with the given fetchUrl
        const request = await axios.get(fetchUrl);

        // 11. Save the results (array of movies) into state
        setMovies(request.data.results || []);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setMovies([]); // fallback to empty array if error
      }
    }

    // 12. Run the fetchData function
    fetchData();
  }, [fetchUrl]); // dependency: re-run if fetchUrl changes

  // 13. Function to handle clicking on a poster
  const handleClick = (movie) => {
    if (trailerUrl) {
      // 14. If a trailer is already open, close it
      setTrailerUrl("");
    } else {
      // 15. Use movie-trailer to search YouTube for the trailer
      movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
        .then((url) => {
          // 16. Extract the "v" parameter (video ID) from the YouTube URL
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.error("Trailer not found:", error));
    }
  };

  // 17. Options for the YouTube player
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1, // auto-play when loaded
    },
  };

  // 18. JSX returned by the component
  return (
    <div className="row">
      {/* 19. Row title */}
      <h2 className="row__title">{title}</h2>

      {/* 20. Posters container */}
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id} // 21. Unique key for React
            onClick={() => handleClick(movie)} // 22. Click handler
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={
              movie.poster_path || movie.backdrop_path
                ? `https://image.tmdb.org/t/p/w500${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`
                : "/fallback.jpg" // 23. Fallback image if missing
            }
            alt={movie.name || movie.title}
          />
        ))}
      </div>

      {/* 24. Trailer embed (only shows if trailerUrl is set) */}
      {trailerUrl && (
        <div className="row__trailer">
          <YouTube videoId={trailerUrl} opts={opts} />
        </div>
      )}
    </div>
  );
};

// 25. Export the Row component so it can be used in other files
export default Row;
