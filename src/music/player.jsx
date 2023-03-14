import React, { useEffect } from "react";
import PlayerDetails from "./playerdetails";
import { MusicPass } from "../contexts/musicContext";

function Player() {
  const {
    golden,
    currentSongIndex,
    setCurrentSongIndex,
    isPlaying,
    setIsPlaying,
    setDuration,
    setCurrentTime,
    setPercentage,
    playerAudio6Ref,
    repeat,
    shuffle,
    PlayerBoxRef,
  } = MusicPass();

  useEffect(() => {
    // if (isPlaying) {
      // setTimeout(() => {
      playerAudio6Ref.current.play();
    // }, 500);
    // } else {
      
    //     playerAudio6Ref.current.pause();
    // }
  });

  const getCurrDuration = (e) => {
    const percent = (
      (e.currentTarget.currentTime / e.currentTarget.duration) *
      100
    ).toFixed(2);
    const time = e.currentTarget.currentTime;

    setPercentage(+percent);
    setCurrentTime(time.toFixed(2));

    console.log(percent);

    if (percent > 99.5) {
      setCurrentSongIndex(() => {
        let temp = currentSongIndex;
        temp = Math.floor(Math.random() * golden.length - 1);

        return temp;
      });
    }

    if (percent < 5.00) {
      PlayerBoxRef.current.style.display = "block"
      
    } else {
      PlayerBoxRef.current.style.display = "none"

    }
  }

  return (
    <div className="absolute bottom-2 lg:left-[55%] left-[3%]">
      <audio
        src={golden[currentSongIndex].audio}
        ref={playerAudio6Ref}
        onTimeUpdate={getCurrDuration}
        onLoadedData={(e) => {
          setDuration(e.currentTarget.duration.toFixed(2));
        }}
        autoPlay
      ></audio>

      <div className="flex flex-row items-center justify-between mx-2 my-4">
        <PlayerDetails song={golden[currentSongIndex]} className="w-[50%]" />
      </div>
    </div>
  );
}

export default Player;
