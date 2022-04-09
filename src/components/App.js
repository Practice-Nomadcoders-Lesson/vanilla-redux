import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../routers/Home";
import Detail from "../routers/Detail";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />}></Route>
      <Route path="/:id" element={<Detail />}></Route>
    </Routes>
  );
}

export default App;
