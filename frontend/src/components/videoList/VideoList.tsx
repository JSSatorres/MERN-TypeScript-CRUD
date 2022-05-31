import React, { useEffect, useState } from "react";
import { getVideos } from "../../services/services";
import { Video } from "../../utils";

const VideoList = () => {
  const [videos, setVideos] = useState<Array<Video>>([]);

  const loadVideos = async () => {
    const resp = await getVideos();
    setVideos(resp.data.data)
  };

  useEffect(() => {
    loadVideos();
  }, []);

  return (
    <div className="text-dark mt-5 pt-5">
      {videos.map((video, index) => {
        return (
          <div
            className="card text-white bg-dark mb-3 col-md-4  px-1  border border-warning rounded-5"
            key={index}
          >
            <div className="card-header">{video.title}</div>
            <div className="card-body">
              {/* <img src={url} alt={title} /> */}
              <p> {video.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default VideoList;
