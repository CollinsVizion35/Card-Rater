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
      <div ref={PlayerBoxRef} className="hidden flex-Col items-center absolute left-[30%] bottom-0  z-[999999999999999999999999999]">
        
        <i className=" w-max h-[3rem] bg-[#01112B] rounded-tl-[20px] rounded-tr-[20px] mx-auto text-base border-[3px] border-[#34FEF8] text-[#34FEF8] ml-6 p-3 pl-4 pt-0">Now Playing --- </i>
        <div className="flex flex-row w-[40vw] h-[3rem] bg-[#01112B] rounded-tl-[20px] rounded-br-[20px] mx-auto text-base border-[3px] border-[#34FEF8] text-[#34FEF8] mt-2 p-3 pl-4 pt-0">
          <h3 ref={playerArtist6Ref} className="text-[0.9em]">
            {golden[currentSongIndex].artist} - 
          </h3>
          <h3 ref={playerName6Ref} className="text-[1.1em]">
             {golden[currentSongIndex].name}
          </h3>
        </div>
      </div>
    );
  }
  
  export default PlayerDetails;