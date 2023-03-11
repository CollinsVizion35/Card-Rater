import React, { useRef, useEffect, useState, useContext } from "react";

// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai/index";
import defaultImg from "./imgs/default-icon.png";

import { AppPass } from "../contexts/AppContext";
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import CardImg from "./imgs/carder.png.png";
import countryImg from "./imgs/Flag-Argentina.webp";
import clubImg from "./imgs/psgLogo.png";
import playerImg from "./imgs/messiP2.png";

import {
  onSnapshot,
  collection,
  addDoc,
  doc,
  query,
  where,
  getDocs,
  updateDoc,
  setDoc,
  documentId,
} from "firebase/firestore";
import { db } from "../firebase";

function ImageUpdate() {

    
  const {

    save2Ref,
    confirmedRef,
    unconfirmedRef,
    nationRef,
    skillSetRef,
    clubNationRef,
    bundesligaRef,
    laLigaRef,
    ligue1Ref,
    eplRef,
    serieARef,
    rotwRef,
    teamsRef,
    imagesRef,
    infoRef,
    raterLgRef,
    raterSmRef,

    name,
    setName,
    PassCode,
    setPassCode,
    none,
    setNone,
    block,
    setBlock,
    url,
    setUrl,
    uploader,
    images,
    setImages,
    handleImageChange,

    Nation,
    setNation,
    Team,
    setTeam,
    Position,
    setPosition,
    Acceleration,
    setAcceleration,
    Aggression,
    setAggression,
    Agility,
    setAgility,
    AttackingPosition,
    setAttackingPosition,
    Awareness,
    setAwareness,
    Balance,
    setBalance,
    BallControl,
    setBallControl,
    Composure,
    setComposure,
    Crossing,
    setCrossing,
    Curve,
    setCurve,
    Defending,
    setDefending,
    Dribbling,
    setDribbling,
    Finishing,
    setFinishing,
    FreeKick,
    setFreeKick,
    Heading,
    setHeading,
    Interceptions,
    setInterceptions,
    Jumping,
    setJumping,
    LongPassing,
    setLongPassing,
    LongShot,
    setLongShot,
    Marking,
    setMarking,
    Pace,
    setPace,
    Passing,
    setPassing,
    Penalties,
    setPenalties,
    Physical,
    setPhysical,
    Positioning,
    setPositioning,
    Reactions,
    setReactions,
    Shooting,
    setShooting,
    ShortPassing,
    setShortPassing,
    ShotPower,
    setShotPower,
    SlidingTackle,
    setSlidingTackle,
    SprintSpeed,
    setSprintSpeed,
    Stamina,
    setStamina,
    StandingTackle,
    setStandingTackle,
    Strength,
    setStrength,
    Vision,
    setVision,
    Volleys,
    setVolleys,

    handleBack2HomeBtn,
    handleBack2NationBtn,
    handleBack2NationTeamBtn,
    handleBack2TeamBtn,
    handleBack2ImgBtn,
    handleEditBtn1st,
    handleEditBtnBund,
    handleEditBtnLaLiga,
    handleEditBtnLig1,
    handleEditBtnEpl,
    handleEditBtnSerA,
    handleEditBtnRotw,
    handleEditBtnteams,
    openRemoveBg,
    handleSkillSetBtn,
    audio,
    playBallAudio,
  } = AppPass();


  return (
    <>
    
      {/* select image */}
      <div
        ref={imagesRef}
        className="major-Bg clubNation h-[100vh] w-screen text-white font-extrabold text-center hidden"
      >
        <div className="flex flex-col content-center justify-center w-screen">
          <div className=" lg:text-7xl text-3xl mb-10">
            Remove Image/Potrait background
          </div>
          <button
            onClick={() => {
              openRemoveBg();
            }}
            className=" w-max lg:h-[6rem] bg-[#01112B] rounded-tl-[20px] rounded-br-[20px] mx-auto text-base border-[5px] border-[#34FEF8] text-[#34FEF8] mb-2 lg:mt-16 p-3 pl-4 pt-0"
          >
            <div className="lg:text-4xl text-2xl">Remove Background</div>
            <div className="text-[0.8em]">Powered by remove.bg</div>
          </button>
        </div>
        <div className="relative flex flex-col justify-center items-center mb-4 mt-10">
          <div className=" lg:text-7xl text-3xl lg:mb-16">
            Add Potrait to Card
          </div>

          <div className="flex lg:flex-row flex-col">
            <div className="rounded-[50%] h-36 mx-auto  lg:mb-10 w-36 border flex justify-center items-center bg-white">
              {images && (
                <img
                  className="h-36 w-36 rounded-[50%]"
                  // src={photoURL}
                  src={images}
                  alt="Avatar"
                />
              )}
            </div>

            <div className="flex flex-row lg:ml-32 mr-auto">
              <button
                className=" w-max h-[4rem] bg-[#01112B] mr-6 rounded-tl-[20px] rounded-br-[20px] mx-auto text-base border-[3px] border-[#34FEF8] text-[#34FEF8] mb-2 mt-20 p-3 pl-4 pt-0"
                onClick={handleSkillSetBtn}
              >
                Next
              </button>

              <button
                className=" w-max h-[4rem] bg-[#01112B] rounded-tl-[20px] rounded-br-[20px] mx-auto text-base border-[3px] border-[#34FEF8] text-[#34FEF8] mb-2 mt-20 p-3 pl-4 pt-0"
                onClick={handleBack2TeamBtn}
              >
                Back
              </button>
            </div>
          </div>
          <input
            type="file"
            onChange={handleImageChange}
            id="select-img"
            hidden
          />
          {/* {Object.keys(user).length > 0 ? */}
          <label
            htmlFor="select-img"
            className="cursor-pointer rounded-[50%] w-6 h-6 text-center bg-white absolute lg:bottom-10 lg:left-[42%] left-[63%] text-sm text-[#6B6B6B]"
          >
            +
          </label>
          {/* : */}
          {/* <label htmlFor='select-img' className='cursor-pointer'>Add Portrait to Card</label> */}
          {/* } */}
        </div>
      </div>
    </>
  )
}

export default ImageUpdate