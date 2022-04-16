import React from "react";
import { FiltersDropdownSelect, VideoDisplayCard } from "../components";
import { useFilters } from "../context/providers";

const ExplorePage = () => {
  const { filteredVideos } = useFilters();

  return (
    <div className="explorePage__container">
      <div className="mt-10 flex justify-start">
        <FiltersDropdownSelect />
      </div>
      <div className="spacer-3rem"></div>

      <div className="videoCard__container grid">
        {filteredVideos &&
          filteredVideos.map((video) => (
            <VideoDisplayCard video={video} key={video._id} />
          ))}
      </div>

      <div className="spacer-3rem"></div>
      <div className="spacer-3rem"></div>
      <div className="spacer-3rem"></div>
    </div>
  );
};

export default ExplorePage;
