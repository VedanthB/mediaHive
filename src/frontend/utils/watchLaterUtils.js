import { watchLaterActions } from "../context/constants";
import {
  addVideoToWatchLaterService,
  getAllWatchLaterVideosService,
  removeVideoToWatchLaterService,
} from "../services";

export const getAllWatchLaterVideos = async (
  token,
  watchLaterDispatch,
  showToast
) => {
  try {
    watchLaterDispatch({ type: watchLaterActions.LOADING });

    const {
      data: { watchlater },
      status,
    } = await getAllWatchLaterVideosService(token);

    if (status >= 200 && status < 300) {
      watchLaterDispatch({
        type: watchLaterActions.GET_ALL_WATCH_LATER_VIDEOS,
        payload: watchlater,
      });
      showToast("Get all watch later videos successfully!", "success");
    }
  } catch (error) {
    watchLaterDispatch({
      type: watchLaterActions.ERROR,
      payload: error,
    });

    showToast(`${error}`, "error");
  }
};

export const addVideoToWatchLater = async (
  token,
  video,
  watchLaterDispatch,
  showToast
) => {
  try {
    watchLaterDispatch({ type: watchLaterActions.LOADING });

    const {
      data: { watchlater },
      status,
    } = await addVideoToWatchLaterService(token, video);

    if (status >= 200 && status < 300) {
      watchLaterDispatch({
        type: watchLaterActions.ADD_VIDEO_TO_WATCH_LATER,
        payload: watchlater,
      });
      showToast("Added video to watch later successfully!", "success");
    }
  } catch (error) {
    watchLaterDispatch({
      type: watchLaterActions.ERROR,
      payload: error,
    });

    showToast(`${error}`, "error");
  }
};

export const removeVideoToWatchLater = async (
  token,
  videoId,
  watchLaterDispatch,
  showToast
) => {
  try {
    watchLaterDispatch({ type: watchLaterActions.LOADING });

    const {
      data: { watchlater },
      status,
    } = await removeVideoToWatchLaterService(token, videoId);

    if (status >= 200 && status < 300) {
      watchLaterDispatch({
        type: watchLaterActions.REMOVE_VIDEO_TO_WATCH_LATER,
        payload: watchlater,
      });

      showToast("Remove video from watch later successfully!", "success");
    }
  } catch (error) {
    watchLaterDispatch({
      type: watchLaterActions.ERROR,
      payload: error,
    });

    showToast(`${error}`, "error");
  }
};
