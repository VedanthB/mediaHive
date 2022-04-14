import React from "react";
import { FiltersDropdownSelect } from "../components";
import VideoDisplayCard from "../components/explore-page/VideoDisplayCard";
import { useFilters } from "../context/providers";

const ExplorePage = () => {
  const { filteredVideos } = useFilters();

  return (
    <div className="explorePage__container">
      {/* drop down to select categories  */}
      <div className="mt-10 flex justify-start">
        <FiltersDropdownSelect />
      </div>
      {/* video cards mapped */}
      <div className="videoCard__container">
        {filteredVideos &&
          filteredVideos.map((video) => (
            <VideoDisplayCard video={video} key={video._id} />
          ))}
      </div>
    </div>
  );
};

export default ExplorePage;
