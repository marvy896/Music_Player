import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "../../components/sidebar/sidebar";
import Feed from "../feed/feed";
import Library from "../library/library";
import Player from "../player/player";
import Favourites from "../favourires/favourites";
import Trending from "../trending/trending";
import './home.css'
import Login from "../auth/login";
import { setClientToken } from "../../spotify";

export default function Home() {

  const [token, setToken] = useState("");

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";
    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token);
    } else {
      if (token !== null){
        setToken(token);
        setClientToken(token);
      }
    }
  }, []);

  return !token ? (
    <Login />
  ) : (
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


