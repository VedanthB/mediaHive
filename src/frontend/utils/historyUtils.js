import { historyActions } from "../context/constants";
import {
  addVideoToHistoryService,
  deleteAllHistoryService,
  getAllHistoryService,
  removeVideoFromHistoryService,
} from "../services";

export const getAllHistory = async (token, historyDispatch) => {
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

      console.log("get all history");
    }
  } catch (error) {
    historyDispatch({
      type: historyActions.ERROR,
      payload: error,
    });
  }
};

export const deleteAllHistory = async (token, historyDispatch) => {
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

      console.log("delete all history");
    }
  } catch (error) {
    historyDispatch({
      type: historyActions.ERROR,
      payload: error,
    });
  }
};

export const addVideoToHistory = async (token, video, historyDispatch) => {
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

      console.log("added to history");
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
  historyDispatch
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
    }
  } catch (error) {
    historyDispatch({
      type: historyActions.ERROR,
      payload: error,
    });
  }
};
