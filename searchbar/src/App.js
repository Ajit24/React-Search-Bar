import './App.css';
import SearchBar from "./Components/SearchBar";
import BookData from "./Data.json";

function App() {
  return (
    <div className="App">
     <h2>Search-bar ...</h2>

     <SearchBar placeholder="Enter a Book Name..." data={BookData} />

    </div>
  );
}

export default App;
