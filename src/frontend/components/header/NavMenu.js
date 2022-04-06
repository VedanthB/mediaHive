import React from 'react';
import { Link } from 'react-router-dom';

const navMenuItems = [
  {
    src: 'https://res.cloudinary.com/supertramp69420/image/upload/v1649247525/mediaHive/home-icon_k7h1r6.svg',
    name: 'HOME',
    navigateTo: '/'
  },
  {
    src: 'https://res.cloudinary.com/supertramp69420/image/upload/v1649247524/mediaHive/search-icon_cko8a0.svg',
    name: 'EXPLORE',
    navigateTo: '/explore'
  },
  {
    src: 'https://res.cloudinary.com/supertramp69420/image/upload/v1649247523/mediaHive/watchlist-icon_wn8lku.svg',
    name: 'PLAYLISTS',
    navigateTo: '/playlists'
  },
  {
    src: 'https://res.cloudinary.com/supertramp69420/image/upload/v1649247525/mediaHive/original-icon_cvaqru.svg',
    name: 'LIKED VIDEOS',
    navigateTo: '/likedVideos'
  },
  {
    src: 'https://res.cloudinary.com/supertramp69420/image/upload/v1649247522/mediaHive/movie-icon_dqan64.svg',
    name: 'HISTORY',
    navigateTo: '/history'
  },
  {
    src: 'https://res.cloudinary.com/supertramp69420/image/upload/v1649247523/mediaHive/series-icon_u6hoel.svg',
    name: 'WATCH LATER',
    navigateTo: '/watchLater'
  }
];

const NavMenu = () => {
  return (
    <div className="nav__menu">
      {navMenuItems.map((item, i) => (
        <NavMenuItem imgSrc={item.src} text={item.name} navigateTo={item.navigateTo} key={i} />
      ))}
    </div>
  );
};

const NavMenuItem = ({ imgSrc, text, navigateTo }) => {
  return (
    <Link to={navigateTo} className="nav__links  cursor-pointer">
      <img alt={imgSrc} src={imgSrc} />
      <span className="nav__link__text">{text}</span>
    </Link>
  );
};
export default NavMenu;
