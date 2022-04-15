import React from 'react';

const NavMenu = () => {
  return (
    <div className="nav__menu">
      <a href="/home" className="nav__links  cursor-pointer">
        <img
          src="https://res.cloudinary.com/supertramp69420/image/upload/v1649247525/mediaHive/home-icon_k7h1r6.svg"
          alt="HOME"
        />
        <span className="nav__link__text">HOME</span>
      </a>
      <a className="nav__links cursor-pointer">
        <img
          src="https://res.cloudinary.com/supertramp69420/image/upload/v1649247524/mediaHive/search-icon_cko8a0.svg"
          alt="EXPLORE"
        />
        <span className="nav__link__text">EXPLORE</span>
      </a>
      <a className="nav__links  cursor-pointer">
        <img
          src="https://res.cloudinary.com/supertramp69420/image/upload/v1649247523/mediaHive/watchlist-icon_wn8lku.svg"
          alt="playlists"
        />
        <span className="nav__link__text">PLAYLISTS</span>
      </a>
      <a className="nav__links  cursor-pointer">
        <img
          src="https://res.cloudinary.com/supertramp69420/image/upload/v1649247525/mediaHive/original-icon_cvaqru.svg"
          alt="liked"
        />
        <span className="nav__link__text">LIKED VIDEOS</span>
      </a>
      <a className="nav__links  cursor-pointer">
        <img
          src="https://res.cloudinary.com/supertramp69420/image/upload/v1649247522/mediaHive/movie-icon_dqan64.svg"
          alt="History"
        />
        <span className="nav__link__text">HISTORY</span>
      </a>
      <a className="nav__links cursor-pointer">
        <img
          src="https://res.cloudinary.com/supertramp69420/image/upload/v1649247523/mediaHive/series-icon_u6hoel.svg"
          alt="Watch Later"
        />
        <span className="nav__link__text">WATCH LATER</span>
      </a>
    </div>
  );
};

export default NavMenu;
