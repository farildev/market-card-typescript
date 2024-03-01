import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Detail from "./views/Detail";
import Favorites from "./views/Favorites";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/:id" element={<Detail />} />
    </Routes>
  )
}

export default App
