import { Link } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import ClothingItem from "./components/ClothingItem";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <h1>Clothing Store</h1>
      <Link to="/about">About</Link>
      <Link to="/list">Clothing List</Link>
      <Link to="/search">Search</Link>
    </div>
  );
}

export default App;
