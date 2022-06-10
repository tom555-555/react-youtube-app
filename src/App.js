import React from "react";
import Top from "./Pages/Top";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Search from "./Pages/Search";
import Watch from "./Pages/Watch";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Top />}></Route>
        <Route exact path="/search" element={<Search />}></Route>
        <Route exact path="/watch" element={<Watch />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
