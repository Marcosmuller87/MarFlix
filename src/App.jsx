import styles from "./App.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MovieInfo } from "./pages/MovieInfo";
import { HomePage } from "./pages/HomePage";

export function App() {
  return (
    <Router>
      <header>
        <Link to="/">
          <h1 className={styles.title}>MarFlix</h1>
        </Link>
        <h3 className={styles.subtitle}>All your movies in one place</h3>
      </header>
      <main>
        <Switch>
          <Route exact path="/movies/:movieId">
            <MovieInfo />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}
