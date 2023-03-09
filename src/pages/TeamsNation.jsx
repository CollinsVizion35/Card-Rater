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

function TeamsNation() {
    
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
    image,
    setImage,
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
    
      {/* select club's nation */}
      <div
        ref={clubNationRef}
        className="major-Bg clubNation h-[100vh] w-screen text-white font-extrabold text-center hidden"
      >
        <div className=" lg:text-7xl text-4xl">Select Team's Nation</div>

        <div className="h-[50vh] lg:pt-[10vh] pt-[5vh]">
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={90}
            totalSlides={6}
            // isIntrinsicHeight={true}
          >
            <Slider className="max-h-[50vh]">
              <Slide index={0}>
                <div className="flex flex-col items-center content-center justify-center">
                  <img
                    onClick={() => {
                      handleEditBtnBund();
                    }}
                    className="h-[200px] w-[300px] cursor-pointer"
                    src="https://seekflag.com/app/uploads/2021/11/Flag-of-Germany-01-1.png"
                    alt="Bundesliga"
                  />
                  <p className="legend text-3xl pt-6 cursor-default">
                    Bundesliga
                  </p>
                </div>
              </Slide>
              <Slide index={1}>
                <div className="flex flex-col items-center content-center justify-center">
                  <img
                    onClick={() => {
                      handleEditBtnLaLiga();
                    }}
                    className="h-[200px] w-[300px] cursor-pointer"
                    src="https://seekflag.com/app/uploads/2021/12/Flag-of-Spain-01-1.png"
                    alt="La Liga"
                  />
                  <p className="legend text-3xl pt-6 cursor-default">La Liga</p>
                </div>
              </Slide>
              <Slide index={2}>
                <div className="flex flex-col items-center content-center justify-center">
                  <img
                    onClick={() => {
                      handleEditBtnLig1();
                    }}
                    className="h-[200px] w-[300px] cursor-pointer"
                    src="https://seekflag.com/app/uploads/2021/11/Flag-of-France-01-1.png"
                    alt="Ligue 1"
                  />
                  <p className="legend text-3xl pt-6 cursor-default">Ligue 1</p>
                </div>
              </Slide>
              <Slide index={3}>
                <div className="flex flex-col items-center content-center justify-center">
                  <img
                    onClick={() => {
                      handleEditBtnEpl();
                    }}
                    className="h-[200px] w-[300px] cursor-pointer"
                    src="https://seekflag.com/app/uploads/2022/01/England-01-1.png"
                    alt="Premier league"
                  />
                  <p className="legend text-3xl pt-6 cursor-default">
                    Premier league
                  </p>
                </div>
              </Slide>
              <Slide index={4}>
                <div className="flex flex-col items-center content-center justify-center">
                  <img
                    onClick={() => {
                      handleEditBtnSerA();
                    }}
                    className="h-[200px] w-[300px] cursor-pointer"
                    src="https://seekflag.com/app/uploads/2021/12/Flag-of-Italy-01-1.png"
                    alt="Serie A"
                  />
                  <p className="legend text-3xl pt-6 cursor-default">Serie A</p>
                </div>
              </Slide>
              <Slide index={5}>
                <div className="flex flex-col items-center content-center justify-center">
                  <img
                    onClick={() => {
                      handleEditBtnRotw();
                    }}
                    className="h-[200px] w-[300px] cursor-pointer"
                    src="https://upload.wikimedia.org/wikipedia/commons/d/d2/Earth_Flag.png?20110207142854"
                    alt="Rest of the World"
                  />
                  <p className="legend text-3xl pt-6 cursor-default">
                    Rest of the World
                  </p>
                </div>
              </Slide>
            </Slider>
            <ButtonBack
              onClick={() => {
                playBallAudio();
              }}
              className=" hover:scale-150 absolute top-50 left-10"
            >
              <AiOutlineLeft className="text-2xl" />
            </ButtonBack>
            <ButtonNext
              onClick={() => {
                playBallAudio();
              }}
              className=" hover:scale-150 absolute top-50 right-10"
            >
              <AiOutlineRight className="text-2xl" />
            </ButtonNext>
          </CarouselProvider>

          <button
            className=" w-max h-[4rem] bg-[#01112B] rounded-tl-[20px] rounded-br-[20px] mx-auto text-base border-[3px] border-[#34FEF8] text-[#34FEF8] mb-2 mt-20 p-3 pl-4 pt-0"
            onClick={handleBack2NationBtn}
          >
            Back
          </button>
        </div>
      </div>
    </>
  )
}

export default TeamsNation