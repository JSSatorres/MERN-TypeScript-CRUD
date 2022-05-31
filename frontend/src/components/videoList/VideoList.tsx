import axios from "axios";
import React, { useEffect, useState } from "react";

interface Video {
  createdAt: String;
  description: String;
  title: String;
  updatedAt: String;
  url: String;
  _id: String;
}

const VideoList = () => {
  const [videos, setVideos] = useState<Array<Video>>([]);
  const loadVideos = async () => {
    const res = await axios.get("http://localhost:4000/videos");
    setVideos(res.data.data);
  };
  useEffect(() => {
    loadVideos();
  }, []);

  return (
    <div className="text-dark mt-5 pt-5">
      {videos.map((video, index) => {
        return <div key={index}> {video.title} </div>;
      })}
    </div>
  );
};

export default VideoList;
