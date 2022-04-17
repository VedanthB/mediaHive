import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  useAuth,
  useCategory,
  useLikedVideos,
  useWatchLater,
} from "../../context/providers";
import { getCategoryImg } from "../../helpers";
import { useToast } from "../../hooks";
import {
  addVideoToLikedVideos,
  addVideoToWatchLater,
  removeVideoFromLikedVideos,
  removeVideoToWatchLater,
} from "../../utils";
import AddToPlaylist from "../explore-page/AddToPlaylist";
import Modal from "../Modal";

const LikedVideoCard = ({ video }) => {
  const [showModal, setShowModal] = useState(false);

  const {
    categoryState: { categories },
  } = useCategory();

  const {
    authState: { encodedToken },
  } = useAuth();

  const {
    watchLaterState: { watchLater },
    watchLaterDispatch,
  } = useWatchLater();

  const {
    likedVideosState: { likedVideos },
    likedVideosDispatch,
  } = useLikedVideos();

  const { showToast } = useToast();

  const categoryImage = getCategoryImg(video.category, categories);

  const isInWatchLater = watchLater.find((item) => item._id === video._id);
  const isInLikedVideos = likedVideos.find((item) => item._id === video._id);
  return (
    <>
      <div className="videoCard">
        <Link to={`/explore/${video._id}`} className="videoCard__hero__img">
          <i className="absolute text-6xl text-amber-500 cursor-pointer fa-solid fa-play"></i>
          <img src={video.img} alt="" />
        </Link>

        <div className="videoCard__body">
          <h3 className="mb-2">{video.title}</h3>

          <div className="flex align-items-center mb-2">
            <img
              className="rounded-full h-10 w-10"
              src={categoryImage ? categoryImage : ""}
              alt="category-img"
            />

            <h4 className="text-amber-500"> {video.category} </h4>
          </div>

          <p> {video.desc} </p>

          <div className="videoCard__actions flex justify-between mt-4">
            <i
              onClick={() => setShowModal(true)}
              className="text-2xl text-hover-amber-500 cursor-pointer fa-solid fa-circle-plus"
            ></i>
            <div>
              {isInWatchLater ? (
                <i
                  onClick={() =>
                    encodedToken
                      ? removeVideoToWatchLater(
                          encodedToken,
                          video._id,
                          watchLaterDispatch,
                          showToast
                        )
                      : showToast("Please login first!", "error")
                  }
                  className="text-2xl text-amber-500  cursor-pointer  mr-3 fa-solid fa-clock"
                ></i>
              ) : (
                <i
                  onClick={() =>
                    encodedToken
                      ? addVideoToWatchLater(
                          encodedToken,
                          video,
                          watchLaterDispatch,
                          showToast
                        )
                      : showToast("Please login first!", "error")
                  }
                  className="text-2xl text-hover-amber-500 cursor-pointer  mr-3 fa-solid fa-clock"
                ></i>
              )}
              {isInLikedVideos ? (
                <i
                  onClick={() =>
                    encodedToken
                      ? removeVideoFromLikedVideos(
                          encodedToken,
                          video._id,
                          likedVideosDispatch,
                          showToast
                        )
                      : showToast("Please login first!", "error")
                  }
                  className="text-2xl text-amber-500  cursor-pointer  mr-3 fa-solid fa-heart-circle-bolt"
                ></i>
              ) : (
                <i
                  onClick={() =>
                    encodedToken
                      ? addVideoToLikedVideos(
                          encodedToken,
                          video,
                          likedVideosDispatch,
                          showToast
                        )
                      : showToast("Please login first!", "error")
                  }
                  className="text-2xl text-hover-amber-500 cursor-pointer  mr-3 fa-solid fa-heart-circle-bolt"
                ></i>
              )}
            </div>
          </div>
        </div>
      </div>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        modalBody={<AddToPlaylist video={video} />}
        modalTitle={"Add to Playlist"}
      />
    </>
  );
};

export default LikedVideoCard;
