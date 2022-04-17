import { watchLaterActions } from "../context/constants";
import {
  addVideoToWatchLaterService,
  getAllWatchLaterVideosService,
  removeVideoToWatchLaterService,
} from "../services";

export const getAllWatchLaterVideos = async (token, watchLaterDispatch) => {
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

      console.log("get all watch later");
    }
  } catch (error) {
    watchLaterDispatch({
      type: watchLaterActions.ERROR,
      payload: error,
    });
  }
};

export const addVideoToWatchLater = async (
  token,
  video,
  watchLaterDispatch
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

      console.log("added to watch later");
    }
  } catch (error) {
    watchLaterDispatch({
      type: watchLaterActions.ERROR,
      payload: error,
    });
  }
};

export const removeVideoToWatchLater = async (
  token,
  videoId,
  watchLaterDispatch
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
    }
  } catch (error) {
    watchLaterDispatch({
      type: watchLaterActions.ERROR,
      payload: error,
    });
  }
};
