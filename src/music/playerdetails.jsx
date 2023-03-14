import React, {useEffect} from "react";
import { MusicPass } from "../contexts/musicContext";

function PlayerDetails() {
    const {
      golden,
      currentSongIndex,
      playerImage6Ref,
      playerName6Ref,
      playerArtist6Ref,
      PlayerBoxRef,
      isPlaying,
    } = MusicPass();

    // useEffect(() => {
      
    // if (!isPlaying) {
    //   PlayerBoxRef.current.style.display = "block"
    // }

    //   setTimeout(() => {
    //     PlayerBoxRef.current.style.display = "none"
        
    //   }, 9000);
    // }, [])
    
  
    return (
      <div ref={PlayerBoxRef} className="hidden flex-Col items-center absolute lg:left-[30%] bottom-0  z-[999999999999999999999999999]">
        
        <i className=" w-max h-[3rem] bg-[#01112B] rounded-tl-[20px] rounded-tr-[20px] mx-auto text-base border-[3px] border-[#34FEF8] text-[#34FEF8] ml-6 p-2 pl-2 lg:p-3 lg:pl-4  text-[0.5em]">Now Playing --- </i>
        <div className="flex flex-row lg:w-[40vw] w-[90vw] h-[3rem] bg-[#01112B] rounded-tl-[20px] rounded-br-[20px] lg:mx-auto text-base border-[3px] border-[#34FEF8] text-[#34FEF8] lg:mt-2 mt-0 p-2 pl-2 lg:p-3 lg:pl-4">
          <h3 ref={playerArtist6Ref} className="lg:text-[0.9em] text-[0.5em]">
            {golden[currentSongIndex].artist} - 
          </h3>
          <h3 ref={playerName6Ref} className="lg:text-[1.1em] text-[0.6em]">
             {golden[currentSongIndex].name}
          </h3>
        </div>
      </div>
    );
  }
  
  export default PlayerDetails;