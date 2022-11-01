import React from "react";
import { HistoryPageCard } from "../components";
import { useAuth, useHistory } from "../context/providers";
import { useToast } from "../hooks";
import { deleteAllHistory } from "../utils";

const History = () => {
  const {
    historyState: { history },
    historyDispatch,
  } = useHistory();

  const {
    authState: { encodedToken },
  } = useAuth();

  const { showToast } = useToast();

  console.log(history);

  return (
    <div className="historyPage_container">
      <div className="flex justify-end">
        <button
          onClick={() =>
            deleteAllHistory(encodedToken, historyDispatch, showToast)
          }
          className="btn btn-solid-amber shadow-lg text-white"
        >
          clear history
        </button>
      </div>

      <div className="text-center">
        {history.length === 0 && (
          <h4>please start watching videos to see them in your history</h4>
        )}
      </div>

      <div
        style={{ gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }}
        className="grid"
      >
        {history &&
          history.map((video, i) => <HistoryPageCard video={video} key={i} />)}
      </div>
    </div>
  );
};

export default History;
