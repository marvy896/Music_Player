import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "../../components/sidebar/sidebar";
import Feed from "../feed";
import Library from "../library";
import Player from "../player";
import Favourites from "../favourites";
import Trending from "../trending";
import './home.css'

export default function Home() {
  return (
    <Router>
      <div className="main-Home">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Library />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/player" element={<Player />} />
          <Route path="/favorites" element={<Favourites />} />
        </Routes>
      </div>
    </Router>
  );
}
