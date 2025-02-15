import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Artist from "./components/pages/artist";
import Songs from "./components/pages/songs";
import HomeRouter from "./components/pages/HomeRouter";
import Artists from "./components/pages/Artists";
import Song from "./components/pages/Song";

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
