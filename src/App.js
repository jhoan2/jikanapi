import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import AnimeList from "./components/AnimeList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <AnimeList />
    </div>
  );
}

export default App;
