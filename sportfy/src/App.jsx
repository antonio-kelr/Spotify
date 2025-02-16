import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Songs from "./components/pages/songs";
import HomeRouter from "./components/pages/HomeRouter";
import Song from "./components/pages/Song";
import Artist from "./components/pages/Artist";
import Artists from "./components/pages/Artists";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomeRouter/>} />
          <Route path="/artists" element={< Artists/>} />
          <Route path="/artist/:id" element={<Artist/>} />
          <Route path="/songs" element={<Songs/>} />
          <Route path="/song/:id" element={<Song/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
