import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import AnimeList from "./components/AnimeList";
import "bootstrap/dist/css/bootstrap.min.css";
import Pages from "./components/Pages";
import MoreInfo from "./components/MoreInfo";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <SearchBar />
        <Pages />
        <AnimeList />
        <Switch>
          <Route path="/anime/:id">
            <MoreInfo />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
