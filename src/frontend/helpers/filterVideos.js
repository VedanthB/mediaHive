export const filterVideosByCategory = (videos, filterCategory) => {
  if (filterCategory === "All" || filterCategory === null) {
    return videos;
  }

  return videos.filter((video) => video.category === filterCategory);
};
