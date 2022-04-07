export const filterVideosByCategory = (videos, filterCategory) => {
  if (filterCategory === "All") {
    return videos;
  }

  return videos.filter((video) => video.category === filterCategory);
};
