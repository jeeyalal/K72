import React from "react";
import myVideo from "../../assets/HomeVideo.mp4"; // adjust path

const Video = () => {
  return (
    <video
      src={myVideo}
      autoPlay
      loop
      muted
      className="w-full h-full object-cover"
    />
  );
};

export default Video;
