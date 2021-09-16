import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useQuery } from "../hooks/useQuery";

export function Search() {
  const query = useQuery();
  const search = query.get("search");

  const [searchText, setSearchText] = useState("");
  const history = useHistory();

  // Limpiamos el search al actualizar
  useEffect(() => {
    setSearchText(search || "");
  }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/?search=" + searchText);
  };

  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        {/* Capturamos el valor de input para modificar el estado y poder incluirlo en la ruta */}
        <input
          className={styles.searchInput}
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className={styles.searchBtn} type="submit">
          <FaSearch size={25} />
        </button>
      </div>
    </form>
  );
}
