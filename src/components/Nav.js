import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  const [show, setshow] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      // console.log("window_scrollY", window.scrollY);
      if (window.scrollY > 50) {
        setshow(true);
      } else {
        setshow(false);
      }
    });
    return () => {
      // console.log("useEffect unmount!");
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`);
  };
  
  return (
    <nav className={`nav ${show && "nav__black"}`}>
      {/* console.log('start nav') */}
      <img
        alt="Netflix logo"
        src="https://pngimg.com/uploads/netflix/netflix_PNG14.png"
        className="nav__logo"
        onClick={() => window.location.reload()}
      />
      <input
        value={searchValue}
        onChange={handleChange}
        className="nav__input"
        type="text"
        placeholder="영화를 검색해주세요."
      />
      <img
        alt="User logged"
        src="https://cdn3.emoji.gg/emojis/netflixthonk.png"
        className="nav__avatar"
      />
    </nav>
  );
}
