import { useParams } from "react-router";
import styles from "./MovieInfo.module.css";
import { useEffect, useState } from "react";
import { getRequest } from "../utils/HttpClient";
import { Loader } from "../components/Loader";

export function MovieInfo() {
  // Capturamos el id con useParams
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState(null);

  // Llamamos de forma asincrona a la pelicula con el identificador seleccionado
  useEffect(() => {
    setIsLoading(true);
    getRequest("/movie/" + movieId).then((data) => {
      setIsLoading(false);
      setMovie(data);
    });
  }, [movieId]);

  if (isLoading) {
    return <Loader />;
  }

  if (!movie) {
    return null;
  }

  const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;

  return (
    <div className={styles.infoContainer}>
      <img
        className={`${styles.column} ${styles.moviePoster}`}
        src={imageUrl}
        alt={movie.title}
      />
      <div className={`${styles.column} ${styles.movieInfo}`}>
        <p className={styles.firstInfo}>
          <strong>Title:</strong> {movie.title}
        </p>
        <p>
          <strong>Genres:</strong>{" "}
          {movie.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p>
          <strong>Overview:</strong> {movie.overview}
        </p>
      </div>
    </div>
  );
}
