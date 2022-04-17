import { videoActions } from "../context/constants";
import { getVideosService } from "../services";

export const getVideos = async (videosDispatch, showToast) => {
  try {
    videosDispatch({ type: videoActions.LOADING });

    const {
      data: { videos },
      status,
    } = await getVideosService();

    if (status >= 200 && status < 300) {
      videosDispatch({
        type: videoActions.GET_VIDEOS_SUCCESS,
        payload: videos,
      });

      showToast("Get all videos successfully!", "success");
    }
  } catch (error) {
    videosDispatch({
      type: videoActions.ERROR,
      payload: error,
    });

    showToast(`${error}`, "error");
  }
};
