import { getVideosService } from "../../services";
import { videoActions } from "../constants";

export const videosReducer = async (videosDispatch) => {
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
    }
  } catch (error) {
    videosDispatch({ type: videoActions.ERROR, payload: error });
  }
};
