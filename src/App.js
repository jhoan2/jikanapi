import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import AnimeList from "./components/AnimeList";
import "bootstrap/dist/css/bootstrap.min.css";
import Pages from "./components/Pages";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <Pages />
      <AnimeList />
    </div>
  );
}

export default App;
