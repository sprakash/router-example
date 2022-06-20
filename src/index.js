import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Search from "./components/Search";
import ClothingList from "./components/ClothingList";
import ClothingItem from "./components/ClothingItem";
import BadMatch from "./components/BadMatch";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<Search />} />
        <Route path="/list" element={<ClothingList />}>
          <Route path=":item" element={<ClothingItem />} />
        </Route>
        <Route path="*" element={<BadMatch />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
