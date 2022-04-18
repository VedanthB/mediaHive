import { historyActions } from "../context/constants";
import {
  addVideoToHistoryService,
  deleteAllHistoryService,
  getAllHistoryService,
  removeVideoFromHistoryService,
} from "../services";

export const getAllHistory = async (token, historyDispatch, showToast) => {
  try {
    historyDispatch({ type: historyActions.LOADING });

    const {
      data: { history },
      status,
    } = await getAllHistoryService(token);

    if (status >= 200 && status < 300) {
      historyDispatch({
        type: historyActions.GET_ALL_HISTORY,
        payload: history,
      });

      showToast("Get all history successfully!", "success");
    }
  } catch (error) {
    historyDispatch({
      type: historyActions.ERROR,
      payload: error,
    });

    showToast(`${error}`, "error");
  }
};

export const deleteAllHistory = async (token, historyDispatch, showToast) => {
  try {
    historyDispatch({ type: historyActions.LOADING });

    const {
      data: { history },
      status,
    } = await deleteAllHistoryService(token);

    if (status >= 200 && status < 300) {
      historyDispatch({
        type: historyActions.GET_ALL_HISTORY,
        payload: history,
      });

      showToast("Delete all history successfully!", "success");
    }
  } catch (error) {
    historyDispatch({
      type: historyActions.ERROR,
      payload: error,
    });

    showToast(`${error}`, "error");
  }
};

export const addVideoToHistory = async (
  token,
  video,
  historyDispatch,
  showToast
) => {
  try {
    historyDispatch({ type: historyActions.LOADING });

    const {
      data: { history },
      status,
    } = await addVideoToHistoryService(token, video);

    if (status >= 200 && status < 300) {
      historyDispatch({
        type: historyActions.ADD_VIDEO_TO_HISTORY,
        payload: history,
      });

      showToast("Added to history successfully!", "success");
    }
  } catch (error) {
    historyDispatch({
      type: historyActions.ERROR,
      payload: error,
    });
  }
};

export const removeVideoFromHistory = async (
  token,
  videoId,
  historyDispatch,
  showToast
) => {
  try {
    historyDispatch({ type: historyActions.LOADING });

    const {
      data: { history },
      status,
    } = await removeVideoFromHistoryService(token, videoId);

    if (status >= 200 && status < 300) {
      historyDispatch({
        type: historyActions.REMOVE_VIDEO_FROM_HISTORY,
        payload: history,
      });

      showToast("Remove video from history successfully!", "success");
    }
  } catch (error) {
    historyDispatch({
      type: historyActions.ERROR,
      payload: error,
    });

    showToast(`${error}`, "error");
  }
};
