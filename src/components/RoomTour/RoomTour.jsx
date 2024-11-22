import React, { useRef } from 'react';
import style from './RoomTour.module.css';

const RoomTour = () => {
  // Using ref to control the video element
  const videoRef = useRef(null);

  // Function to play the video
  const playVideo = () => {
    videoRef.current.play();
  };

  // Function to pause the video
  const pauseVideo = () => {
    videoRef.current.pause();
  };

  // Function to restart the video
  const restartVideo = () => {
    videoRef.current.currentTime = 0;
    videoRef.current.play();
  };

  // Function to skip ahead 10 seconds
  const skipAhead = () => {
    videoRef.current.currentTime += 10;
  };

  // Function to go back 10 seconds
  const goBack = () => {
    videoRef.current.currentTime -= 10;
  };

  return (
    <div className={style.roomTourContainer}>
      <h1>Room Tour Video</h1>
      
      <video ref={videoRef} width="600" className={style.roomTourVideoContainer} controls>
        <source src={`${process.env.PUBLIC_URL}/test.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default RoomTour;
