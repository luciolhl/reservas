import React from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import Reservas from "./pages/Reservas";
import Header from "./Components/Header";

export default function App() {
  return(
    <>
      <Router>
        <Header />
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/reservas" element={<Reservas/>}/>
          </Routes>
      </Router>
    </>
  );
}