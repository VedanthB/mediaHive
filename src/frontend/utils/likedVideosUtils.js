import { likeVideosActions } from "../context/constants";
import {
  addVideoToLikedVideosService,
  getAllLikedVideosService,
  removeVideoFromLikedVideosService,
} from "../services";

export const getAllLikedVideos = async (
  token,
  likedVideosDispatch,
  showToast
) => {
  try {
    likedVideosDispatch({ type: likeVideosActions.LOADING });

    const {
      data: { likes },
      status,
    } = await getAllLikedVideosService(token);

    if (status >= 200 && status < 300) {
      likedVideosDispatch({
        type: likeVideosActions.GET_ALL_LIKED_VIDEOS,
        payload: likes,
      });

      showToast("Get all liked videos successfully!", "success");
    }
  } catch (error) {
    likedVideosDispatch({
      type: likeVideosActions.ERROR,
      payload: error,
    });

    showToast(`${error}`, "error");
  }
};

export const addVideoToLikedVideos = async (
  token,
  video,
  likedVideosDispatch,
  showToast
) => {
  try {
    likedVideosDispatch({ type: likeVideosActions.LOADING });

    const {
      data: { likes },
      status,
    } = await addVideoToLikedVideosService(token, video);

    if (status >= 200 && status < 300) {
      likedVideosDispatch({
        type: likeVideosActions.ADD_VIDEO_TO_LIKED_VIDEOS,
        payload: likes,
      });

      showToast("Added video to liked videos successfully!", "success");
    }
  } catch (error) {
    likedVideosDispatch({
      type: likeVideosActions.ERROR,
      payload: error,
    });

    showToast(`${error}`, "error");
  }
};

export const removeVideoFromLikedVideos = async (
  token,
  videoId,
  likedVideosDispatch,
  showToast
) => {
  try {
    likedVideosDispatch({ type: likeVideosActions.LOADING });

    const {
      data: { likes },
      status,
    } = await removeVideoFromLikedVideosService(token, videoId);

    if (status >= 200 && status < 300) {
      likedVideosDispatch({
        type: likeVideosActions.REMOVE_VIDEO_FROM_LIKED_VIDEOS,
        payload: likes,
      });

      showToast("Removed video from liked videos successfully!", "success");
    }
  } catch (error) {
    likedVideosDispatch({
      type: likeVideosActions.ERROR,
      payload: error,
    });

    showToast(`${error}`, "error");
  }
};
