import { useEffect, useState } from "react";
import { useQuery } from "../hooks/useQuery";
import { getRequest } from "../utils/HttpClient";
import { Loader } from "./Loader";
import { MovieCard } from "./MovieCard";
import styles from "./MoviesGrid.module.css";

export function MoviesGrid() {
  // Estado de las peliculas
  const [movies, setMovies] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const query = useQuery();
  const search = query.get("search");

  useEffect(() => {
    setisLoading(true);
    const searchUrl = search
      ? "/search/movie?query=" + search
      : "/discover/movie";
    // Hacemos la peticion a la API
    getRequest(searchUrl).then((data) => {
      setMovies(data.results);
      setisLoading(false);
    });
  }, [search]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
