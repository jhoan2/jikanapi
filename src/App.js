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
        <Switch>
          <Route exact path="/">
            <Header />
            <SearchBar />
            <Pages />
            <AnimeList />
          </Route>
          <Route path="/anime/:id" children={<MoreInfo />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
