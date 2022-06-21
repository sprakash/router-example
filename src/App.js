import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Main Clothing Store</h1>
      <Link to="/about">About</Link>
      <Link to="/list">Clothing List</Link>
      <Link to="/search">Search</Link>
    </div>
  );
}

export default App;
