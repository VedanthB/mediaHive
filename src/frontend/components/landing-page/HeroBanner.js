import React from 'react';

const HeroBanner = () => {
  return (
    <div className="p-5">
      <img
        src="https://res.cloudinary.com/supertramp69420/image/upload/v1649247526/mediaHive/slider-badag_gcnfmj.jpg"
        alt="hero banner"
        style={{ width: '100%', height: '100%', border: '2px solid grey' }}
        className="shadow-3xl"
      />

      <span
        style={{ bottom: '10rem', left: '1rem' }}
        className="relative text-3xl font-semibold text-white">
        One stop solution for watching videos
      </span>
    </div>
  );
};

export default HeroBanner;
