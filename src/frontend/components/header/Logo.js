import React from "react";

import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex  align-items-center">
      <span className="text-xl font-semibold">mediaHive</span>
      <img
        src="https://res.cloudinary.com/supertramp69420/image/upload/v1649247985/mediaHive/icons8-hive-80_vomej9.png"
        alt="mediaHive-logo"
        className="h-10 w-10"
      />
    </Link>
  );
};

export default Logo;
