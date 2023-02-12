import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Top from "./pages/Top";
import Search from "./pages/Search";
import Watch from "./pages/Watch";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={`/`} element={<Top />} />
        <Route path={`/search`} element={<Search />} />
        <Route path={`/Watch`} element={<Watch />} />
      </Routes>
    </Router>
  );
}

export default App;
