"use client";
import { PauseIcon, PlayIcon } from "@heroicons/react/24/outline";
import { useState, useRef } from "react";
import VideoThumbnail from "@/public/VideoThumnail.svg";

const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    const video: any = videoRef.current;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative w-4/5">
      <video
        ref={videoRef}
        poster={VideoThumbnail}
        src="https://res.cloudinary.com/duyspylge/video/upload/v1687795638/CARGOEMP4_uchpff.mp4"
        className="w-full h-auto border-4 bg-white rounded-48 relative shadow-xl shadow-shadowGray"
      >
        Your browser does not support the video tag.
      </video>
      <button
        className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-accent border-none w-12 h-12 rounded-full text-secondary text-xl flex justify-center items-center"
        onClick={handlePlayPause}
      >
        {isPlaying ? (
          <PauseIcon className="w-6 h-6" />
        ) : (
          <PlayIcon className="w-6 h-6" />
        )}
      </button>
    </div>
  );
};

export default VideoPlayer;
