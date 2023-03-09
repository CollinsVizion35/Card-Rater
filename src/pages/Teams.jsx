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

function Teams() {

    
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
    
      {/* select team */}
      <div
        ref={teamsRef}
        className="major-Bg clubNation h-[100vh] w-screen text-white font-extrabold text-center hidden"
      >
        <div className="flex flex-col">
          <div className=" lg:text-7xl text-4xl">Select Team</div>

          <div
            ref={bundesligaRef}
            className="h-[50vh] lg:pt-[10vh] pt-[5vh] hidden"
          >
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={90}
              totalSlides={18}
              // isIntrinsicHeight={true}
            >
              <Slider className="max-h-[50vh]">
                <Slide index={0}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/FC_Augsburg_logo.svg/140px-FC_Augsburg_logo.svg.png"
                      alt="FC Augsburg"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      FC Augsburg
                    </p>
                  </div>
                </Slide>
                <Slide index={1}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Hertha_BSC_Logo_2012.svg/190px-Hertha_BSC_Logo_2012.svg.png"
                      alt="Hertha BSC"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Hertha BSC
                    </p>
                  </div>
                </Slide>
                <Slide index={2}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/1._FC_Union_Berlin_Logo.svg/220px-1._FC_Union_Berlin_Logo.svg.png"
                      alt="Union Berlin"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Union Berlin
                    </p>
                  </div>
                </Slide>
                <Slide index={3}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/VfL_Bochum_logo.svg/170px-VfL_Bochum_logo.svg.png"
                      alt="VfL Bochum"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      VfL Bochum
                    </p>
                  </div>
                </Slide>
                <Slide index={4}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/SV-Werder-Bremen-Logo.svg/150px-SV-Werder-Bremen-Logo.svg.png"
                      alt="Werder Bremen"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Werder Bremen
                    </p>
                  </div>
                </Slide>
                <Slide index={5}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Borussia_Dortmund_logo.svg/185px-Borussia_Dortmund_logo.svg.png"
                      alt="Borussia Dortmund"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Borussia Dortmund
                    </p>
                  </div>
                </Slide>
                <Slide index={6}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Eintracht_Frankfurt_Logo.svg/180px-Eintracht_Frankfurt_Logo.svg.png"
                      alt="Eintracht Frankfurt"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Eintracht Frankfurt
                    </p>
                  </div>
                </Slide>
                <Slide index={7}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/SC_Freiburg_logo.svg/150px-SC_Freiburg_logo.svg.png"
                      alt="SC Freiburg"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      SC Freiburg
                    </p>
                  </div>
                </Slide>
                <Slide index={8}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Logo_TSG_Hoffenheim.svg/160px-Logo_TSG_Hoffenheim.svg.png"
                      alt="1899 Hoffenheim"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      1899 Hoffenheim
                    </p>
                  </div>
                </Slide>
                <Slide index={9}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/5/53/FC_Cologne_logo.svg/180px-FC_Cologne_logo.svg.png"
                      alt="1. FC Köln"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      1. FC Köln
                    </p>
                  </div>
                </Slide>
                <Slide index={10}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/RB_Leipzig_2014_logo.svg/280px-RB_Leipzig_2014_logo.svg.png"
                      alt="RB Leipzig"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      RB Leipzig
                    </p>
                  </div>
                </Slide>
                <Slide index={11}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/5/59/Bayer_04_Leverkusen_logo.svg/220px-Bayer_04_Leverkusen_logo.svg.png"
                      alt="Bayer Leverkusen"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Bayer Leverkusen
                    </p>
                  </div>
                </Slide>
                <Slide index={12}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Logo_Mainz_05.svg/190px-Logo_Mainz_05.svg.png"
                      alt="Mainz 05"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Mainz 05
                    </p>
                  </div>
                </Slide>
                <Slide index={13}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Borussia_M%C3%B6nchengladbach_logo.svg/140px-Borussia_M%C3%B6nchengladbach_logo.svg.png"
                      alt="Borussia Mönchengladbach"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Borussia Mönchengladbach
                    </p>
                  </div>
                </Slide>
                <Slide index={14}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/180px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png"
                      alt="Bayern Munich"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Bayern Munich
                    </p>
                  </div>
                </Slide>
                <Slide index={15}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/FC_Schalke_04_Logo.svg/180px-FC_Schalke_04_Logo.svg.png"
                      alt="Schalke 04"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Schalke 04
                    </p>
                  </div>
                </Slide>
                <Slide index={16}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/VfB_Stuttgart_1893_Logo.svg/180px-VfB_Stuttgart_1893_Logo.svg.png"
                      alt="VfB Stuttgart"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      VfB Stuttgart
                    </p>
                  </div>
                </Slide>
                <Slide index={17}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/VfL_Wolfsburg_Logo.svg/190px-VfL_Wolfsburg_Logo.svg.png"
                      alt="VfL Wolfsburg"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      VfL Wolfsburg
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
              onClick={handleBack2NationTeamBtn}
            >
              Back
            </button>
          </div>

          <div
            ref={laLigaRef}
            className="h-[50vh] lg:pt-[10vh] pt-[5vh] hidden"
          >
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={90}
              totalSlides={20}
              // isIntrinsicHeight={true}
            >
              <Slider className="max-h-[50vh]">
                <Slide index={0}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/1/13/UD_Almer%C3%ADa_logo.png/140px-UD_Almer%C3%ADa_logo.png"
                      alt="Almería"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Almería
                    </p>
                  </div>
                </Slide>
                <Slide index={1}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Club_Athletic_Bilbao_logo.svg/150px-Club_Athletic_Bilbao_logo.svg.png"
                      alt="Athletic Bilbao"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Athletic Bilbao
                    </p>
                  </div>
                </Slide>
                <Slide index={2}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Atletico_Madrid_2017_logo.svg/150px-Atletico_Madrid_2017_logo.svg.png"
                      alt="Atlético Madrid"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Atlético Madrid
                    </p>
                  </div>
                </Slide>
                <Slide index={3}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/190px-FC_Barcelona_%28crest%29.svg.png"
                      alt="Barcelona"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Barcelona
                    </p>
                  </div>
                </Slide>
                <Slide index={4}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/5/58/C%C3%A1diz_CF_logo.svg/120px-C%C3%A1diz_CF_logo.svg.png"
                      alt="Cádiz"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">Cádiz</p>
                  </div>
                </Slide>
                <Slide index={5}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/RC_Celta_de_Vigo_logo.svg/110px-RC_Celta_de_Vigo_logo.svg.png"
                      alt="Celta Vigo"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Celta Vigo
                    </p>
                  </div>
                </Slide>
                <Slide index={6}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Elche_CF_logo.svg/150px-Elche_CF_logo.svg.png"
                      alt="Elche"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">Elche</p>
                  </div>
                </Slide>
                <Slide index={7}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d6/Rcd_espanyol_logo.svg/140px-Rcd_espanyol_logo.svg.png"
                      alt="Espanyol"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Espanyol
                    </p>
                  </div>
                </Slide>
                <Slide index={8}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/4/46/Getafe_logo.svg/170px-Getafe_logo.svg.png"
                      alt="Getafe"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Getafe
                    </p>
                  </div>
                </Slide>
                <Slide index={9}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Girona_FC_new_logo.png/190px-Girona_FC_new_logo.png"
                      alt="Girona"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Girona
                    </p>
                  </div>
                </Slide>
                <Slide index={10}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Rcd_mallorca.svg/150px-Rcd_mallorca.svg.png"
                      alt="Mallorca"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Mallorca
                    </p>
                  </div>
                </Slide>
                <Slide index={11}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/d/db/Osasuna_logo.svg/150px-Osasuna_logo.svg.png"
                      alt="Osasuna"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Osasuna
                    </p>
                  </div>
                </Slide>
                <Slide index={12}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Rayo_Vallecano_logo.png/180px-Rayo_Vallecano_logo.png"
                      alt="Rayo Vallecano"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Rayo Vallecano
                    </p>
                  </div>
                </Slide>
                <Slide index={13}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/1/13/Real_betis_logo.svg/200px-Real_betis_logo.svg.png"
                      alt="Real Betis"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Real Betis
                    </p>
                  </div>
                </Slide>
                <Slide index={14}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/150px-Real_Madrid_CF.svg.png"
                      alt="Real Madrid"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Real Madrid
                    </p>
                  </div>
                </Slide>
                <Slide index={15}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/Real_Sociedad_logo.svg/170px-Real_Sociedad_logo.svg.png"
                      alt="Real Sociedad"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Real Sociedad
                    </p>
                  </div>
                </Slide>
                <Slide index={16}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Sevilla_FC_logo.svg/150px-Sevilla_FC_logo.svg.png"
                      alt="Sevilla"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Sevilla
                    </p>
                  </div>
                </Slide>
                <Slide index={17}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Valenciacf.svg/160px-Valenciacf.svg.png"
                      alt="Valencia"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Valencia
                    </p>
                  </div>
                </Slide>
                <Slide index={18}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Shield_of_Real_Valladolid.png/150px-Shield_of_Real_Valladolid.png"
                      alt="Valladolid"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Valladolid
                    </p>
                  </div>
                </Slide>
                <Slide index={19}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Villarreal_CF_logo-en.svg/160px-Villarreal_CF_logo-en.svg.png"
                      alt="Villarreal"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Villarreal
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
              onClick={handleBack2NationTeamBtn}
            >
              Back
            </button>
          </div>

          <div
            ref={ligue1Ref}
            className="h-[50vh] lg:pt-[10vh] pt-[5vh] hidden"
          >
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={90}
              totalSlides={20}
              // isIntrinsicHeight={true}
            >
              <Slider className="max-h-[50vh]">
                <Slide index={0}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/AC_Ajaccio_logo.svg/130px-AC_Ajaccio_logo.svg.png"
                      alt="Ajaccio"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Ajaccio
                    </p>
                  </div>
                </Slide>
                <Slide index={1}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/6/6c/Angers_SCO.png/150px-Angers_SCO.png"
                      alt="Angers"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Angers
                    </p>
                  </div>
                </Slide>
                <Slide index={2}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/5/51/AJAuxerreLogo.svg/140px-AJAuxerreLogo.svg.png"
                      alt="Auxerre"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Auxerre
                    </p>
                  </div>
                </Slide>
                <Slide index={3}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Stade_Brestois_29_logo.svg/150px-Stade_Brestois_29_logo.svg.png"
                      alt="Brest"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">Brest</p>
                  </div>
                </Slide>
                <Slide index={4}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Clermont_Foot_logo.svg/140px-Clermont_Foot_logo.svg.png"
                      alt="Clermont Foot"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Clermont Foot
                    </p>
                  </div>
                </Slide>
                <Slide index={5}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/RC_Lens_logo.svg/135px-RC_Lens_logo.svg.png"
                      alt="RC Lens"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      RC Lens
                    </p>
                  </div>
                </Slide>
                <Slide index={6}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3f/Lille_OSC_2018_logo.svg/170px-Lille_OSC_2018_logo.svg.png"
                      alt="Lille OSC"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Lille OSC
                    </p>
                  </div>
                </Slide>
                <Slide index={7}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/FC_Lorient_logo.svg/130px-FC_Lorient_logo.svg.png"
                      alt="Lorient"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Lorient
                    </p>
                  </div>
                </Slide>
                <Slide index={8}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/1/12/Logo_Olympique_Lyonnais_2022.png"
                      alt="Olympique Lyonnais"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Olympique Lyonnais
                    </p>
                  </div>
                </Slide>
                <Slide index={9}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Olympique_Marseille_logo.svg/170px-Olympique_Marseille_logo.svg.png"
                      alt="Olympique de Marseille "
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Olympique de Marseille
                    </p>
                  </div>
                </Slide>
                <Slide index={10}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/LogoASMonacoFC2021.svg/120px-LogoASMonacoFC2021.svg.png"
                      alt="AS Monaco FC"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      AS Monaco FC
                    </p>
                  </div>
                </Slide>
                <Slide index={11}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a8/Montpellier_HSC_logo.svg/170px-Montpellier_HSC_logo.svg.png"
                      alt="Montpellier HSC"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Montpellier HSC
                    </p>
                  </div>
                </Slide>
                <Slide index={12}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Logo_FC_Nantes_%28avec_fond%29_-_2019.svg/140px-Logo_FC_Nantes_%28avec_fond%29_-_2019.svg.png"
                      alt="FC Nantes"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      FC Nantes
                    </p>
                  </div>
                </Slide>
                <Slide index={13}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/OGC_Nice_logo.svg/150px-OGC_Nice_logo.svg.png"
                      alt="OGC Nice"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      OGC Nice
                    </p>
                  </div>
                </Slide>
                <Slide index={14}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Paris_Saint-Germain_F.C..svg/180px-Paris_Saint-Germain_F.C..svg.png"
                      alt="Paris Saint-Germain F.C."
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Paris Saint-Germain F.C.
                    </p>
                  </div>
                </Slide>
                <Slide index={15}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/1/19/Stade_de_Reims_logo.svg/100px-Stade_de_Reims_logo.svg.png"
                      alt="Stade de Reims"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Stade de Reims
                    </p>
                  </div>
                </Slide>
                <Slide index={16}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Stade_Rennais_FC.svg/170px-Stade_Rennais_FC.svg.png"
                      alt="Stade Rennais F.C."
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Stade Rennais F.C.
                    </p>
                  </div>
                </Slide>
                <Slide index={17}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Racing_Club_de_Strasbourg_logo.svg/170px-Racing_Club_de_Strasbourg_logo.svg.png"
                      alt="RC Strasbourg"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      RC Strasbourg
                    </p>
                  </div>
                </Slide>
                <Slide index={18}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/6/63/Toulouse_FC_2018_logo.svg/170px-Toulouse_FC_2018_logo.svg.png"
                      alt="Toulouse FC"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Toulouse FC
                    </p>
                  </div>
                </Slide>
                <Slide index={19}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/ES_Troyes_AC.svg/140px-ES_Troyes_AC.svg.png"
                      alt="Troyes"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Troyes
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
              onClick={handleBack2NationTeamBtn}
            >
              Back
            </button>
          </div>

          <div ref={eplRef} className="h-[50vh] lg:pt-[10vh] pt-[5vh] hidden">
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={90}
              totalSlides={20}
              // isIntrinsicHeight={true}
            >
              <Slider className="max-h-[50vh]">
                <Slide index={0}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Arsenal_FC.svg/170px-Arsenal_FC.svg.png"
                      alt="Arsenal"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Arsenal
                    </p>
                  </div>
                </Slide>
                <Slide index={1}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Aston_Villa_FC_crest_%282016%29.svg/140px-Aston_Villa_FC_crest_%282016%29.svg.png"
                      alt="Aston Villa"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Aston Villa
                    </p>
                  </div>
                </Slide>
                <Slide index={2}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e5/AFC_Bournemouth_%282013%29.svg/150px-AFC_Bournemouth_%282013%29.svg.png"
                      alt="AFC Bournemouth"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      AFC Bournemouth
                    </p>
                  </div>
                </Slide>
                <Slide index={3}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Brentford_FC_crest.svg/180px-Brentford_FC_crest.svg.png"
                      alt="Brentford"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Brentford
                    </p>
                  </div>
                </Slide>
                <Slide index={4}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Brighton_%26_Hove_Albion_logo.svg/195px-Brighton_%26_Hove_Albion_logo.svg.png"
                      alt="Brighton & Hove Albion"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Brighton & Hove Albion
                    </p>
                  </div>
                </Slide>
                <Slide index={5}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/180px-Chelsea_FC.svg.png"
                      alt="Chelsea"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Chelsea
                    </p>
                  </div>
                </Slide>
                <Slide index={6}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/Crystal_Palace_FC_logo_%282022%29.svg/170px-Crystal_Palace_FC_logo_%282022%29.svg.png"
                      alt="Crystal Palace"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Crystal Palace
                    </p>
                  </div>
                </Slide>
                <Slide index={7}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7c/Everton_FC_logo.svg/195px-Everton_FC_logo.svg.png"
                      alt="Everton"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Everton
                    </p>
                  </div>
                </Slide>
                <Slide index={8}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Fulham_FC_%28shield%29.svg/146px-Fulham_FC_%28shield%29.svg.png"
                      alt="Fulham"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Fulham
                    </p>
                  </div>
                </Slide>
                <Slide index={9}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/5/54/Leeds_United_F.C._logo.svg/160px-Leeds_United_F.C._logo.svg.png"
                      alt="Leeds United "
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Leeds United
                    </p>
                  </div>
                </Slide>
                <Slide index={10}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/2/2d/Leicester_City_crest.svg/180px-Leicester_City_crest.svg.png"
                      alt="Leicester City"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Leicester City
                    </p>
                  </div>
                </Slide>
                <Slide index={11}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/180px-Liverpool_FC.svg.png"
                      alt="Liverpool"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Liverpool
                    </p>
                  </div>
                </Slide>
                <Slide index={12}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/180px-Manchester_City_FC_badge.svg.png"
                      alt="Manchester City"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Manchester City
                    </p>
                  </div>
                </Slide>
                <Slide index={13}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/190px-Manchester_United_FC_crest.svg.png"
                      alt="Manchester United"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Manchester United
                    </p>
                  </div>
                </Slide>
                <Slide index={14}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Newcastle_United_Logo.svg/200px-Newcastle_United_Logo.svg.png"
                      alt="Newcastle United"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Newcastle United
                    </p>
                  </div>
                </Slide>
                <Slide index={15}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e5/Nottingham_Forest_F.C._logo.svg/110px-Nottingham_Forest_F.C._logo.svg.png"
                      alt="Nottingham Forest"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Nottingham Forest
                    </p>
                  </div>
                </Slide>
                <Slide index={16}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/FC_Southampton.svg/180px-FC_Southampton.svg.png"
                      alt="Southampton"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Southampton
                    </p>
                  </div>
                </Slide>
                <Slide index={17}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Tottenham_Hotspur.svg/120px-Tottenham_Hotspur.svg.png"
                      alt="Tottenham Hotspur"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Tottenham Hotspur
                    </p>
                  </div>
                </Slide>
                <Slide index={18}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/West_Ham_United_FC_logo.svg/165px-West_Ham_United_FC_logo.svg.png"
                      alt="West Ham United"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      West Ham United
                    </p>
                  </div>
                </Slide>
                <Slide index={19}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/f/fc/Wolverhampton_Wanderers.svg/190px-Wolverhampton_Wanderers.svg.png"
                      alt="Wolverhampton Wanderers"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Wolverhampton Wanderers
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
              onClick={handleBack2NationTeamBtn}
            >
              Back
            </button>
          </div>

          <div
            ref={serieARef}
            className="h-[50vh] lg:pt-[10vh] pt-[5vh] hidden"
          >
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={90}
              totalSlides={20}
              // isIntrinsicHeight={true}
            >
              <Slider className="max-h-[50vh]">
                <Slide index={0}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/6/66/AtalantaBC.svg/130px-AtalantaBC.svg.png"
                      alt="Atalanta"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Atalanta
                    </p>
                  </div>
                </Slide>
                <Slide index={1}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/5/5b/Bologna_F.C._1909_logo.svg/130px-Bologna_F.C._1909_logo.svg.png"
                      alt="Bologna"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Bologna
                    </p>
                  </div>
                </Slide>
                <Slide index={2}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/US_Cremonese_logo.svg/190px-US_Cremonese_logo.svg.png"
                      alt="Cremonese"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Cremonese
                    </p>
                  </div>
                </Slide>
                <Slide index={3}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/Empoli_F.C._logo_%282021%29.png/150px-Empoli_F.C._logo_%282021%29.png"
                      alt="Empoli"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Empoli
                    </p>
                  </div>
                </Slide>
                <Slide index={4}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/2022_ACF_Fiorentina_logo.svg/200px-2022_ACF_Fiorentina_logo.svg.png"
                      alt="Fiorentina"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Fiorentina
                    </p>
                  </div>
                </Slide>
                <Slide index={5}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/9/92/Hellas_Verona_FC_logo_%282020%29.svg/170px-Hellas_Verona_FC_logo_%282020%29.svg.png"
                      alt="Hellas Verona"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Hellas Verona
                    </p>
                  </div>
                </Slide>
                <Slide index={6}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/FC_Internazionale_Milano_2021.svg/180px-FC_Internazionale_Milano_2021.svg.png"
                      alt="Inter Milan"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Inter Milan
                    </p>
                  </div>
                </Slide>
                <Slide index={7}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Juventus_FC_2017_icon_%28black%29.svg/110px-Juventus_FC_2017_icon_%28black%29.svg.png"
                      alt="Juventus"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Juventus
                    </p>
                  </div>
                </Slide>
                <Slide index={8}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/S.S._Lazio_badge.svg/220px-S.S._Lazio_badge.svg.png"
                      alt="Lazio"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">Lazio</p>
                  </div>
                </Slide>
                <Slide index={9}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/8/85/Us_lecce.svg/150px-Us_lecce.svg.png"
                      alt="Lecce"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">Lecce</p>
                  </div>
                </Slide>
                <Slide index={10}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Logo_of_AC_Milan.svg/130px-Logo_of_AC_Milan.svg.png"
                      alt="A.C. Milan"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      A.C. Milan
                    </p>
                  </div>
                </Slide>
                <Slide index={11}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/A.C._Monza_logo_%282019%29.svg/150px-A.C._Monza_logo_%282019%29.svg.png"
                      alt="A.C. Monza"
                    />
                    <p className="legend text-3xl pt-6 cursor-default"></p>
                  </div>
                </Slide>
                <Slide index={12}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/SSC_Neapel.svg/170px-SSC_Neapel.svg.png"
                      alt="S.S.C. Napoli"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      S.S.C. Napoli
                    </p>
                  </div>
                </Slide>
                <Slide index={13}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/AS_Roma_logo_%282017%29.svg/155px-AS_Roma_logo_%282017%29.svg.png"
                      alt="A.S. Roma"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      A.S. Roma
                    </p>
                  </div>
                </Slide>
                <Slide index={14}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/8/85/US_Salernitana_1919_logo.svg/170px-US_Salernitana_1919_logo.svg.png"
                      alt="U.S. Salernitana 1919"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      U.S. Salernitana 1919
                    </p>
                  </div>
                </Slide>
                <Slide index={15}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/U.C._Sampdoria_logo.svg/140px-U.C._Sampdoria_logo.svg.png"
                      alt="U.C. Sampdoria"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      U.C. Sampdoria
                    </p>
                  </div>
                </Slide>
                <Slide index={16}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/US_Sassuolo_Calcio_logo.svg/170px-US_Sassuolo_Calcio_logo.svg.png"
                      alt="U.S. Sassuolo Calcio"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      U.S. Sassuolo Calcio
                    </p>
                  </div>
                </Slide>
                <Slide index={17}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Spezia_Calcio.svg/180px-Spezia_Calcio.svg.png"
                      alt="Spezia Calcio"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Spezia Calcio
                    </p>
                  </div>
                </Slide>
                <Slide index={18}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/Torino_FC_Logo.svg/150px-Torino_FC_Logo.svg.png"
                      alt="Torino F.C."
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Torino F.C.
                    </p>
                  </div>
                </Slide>
                <Slide index={19}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Udinese_Calcio_logo.svg/180px-Udinese_Calcio_logo.svg.png"
                      alt="Udinese Calcio"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Udinese Calcio
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
              onClick={handleBack2NationTeamBtn}
            >
              Back
            </button>
          </div>

          <div ref={rotwRef} className="h-[50vh] lg:pt-[10vh] pt-[5vh] hidden">
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={90}
              totalSlides={12}
              // isIntrinsicHeight={true}
            >
              <Slider className="max-h-[50vh]">
                <Slide index={0}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Logo_Al-Nassr.png/180px-Logo_Al-Nassr.png"
                      alt="Al Nassr"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Al Nassr
                    </p>
                  </div>
                </Slide>
                <Slide index={1}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Celtic_FC.svg/180px-Celtic_FC.svg.png"
                      alt="Celtic F.C."
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Celtic F.C.
                    </p>
                  </div>
                </Slide>
                <Slide index={2}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/4/43/Rangers_FC.svg/180px-Rangers_FC.svg.png"
                      alt="Rangers F.C."
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Rangers F.C.
                    </p>
                  </div>
                </Slide>
                <Slide index={3}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/BesiktasJK-Logo.svg/180px-BesiktasJK-Logo.svg.png"
                      alt="Beşiktaş J.K."
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Beşiktaş J.K.
                    </p>
                  </div>
                </Slide>
                <Slide index={4}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/Enyimba_International_F.C._logo.png/180px-Enyimba_International_F.C._logo.png"
                      alt="Enyimba F.C."
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Enyimba F.C.
                    </p>
                  </div>
                </Slide>
                <Slide index={5}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Al_Ahly_SC_logo.png/170px-Al_Ahly_SC_logo.png"
                      alt="Al Ahly SC"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Al Ahly SC
                    </p>
                  </div>
                </Slide>
                <Slide index={6}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/5/55/The_logo_of_Mamelodi_Sundowns_F.C.png/220px-The_logo_of_Mamelodi_Sundowns_F.C.png"
                      alt="Mamelodi Sundowns F.C."
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Mamelodi Sundowns F.C.
                    </p>
                  </div>
                </Slide>
                <Slide index={7}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Escudo_del_C_A_River_Plate.svg/130px-Escudo_del_C_A_River_Plate.svg.png"
                      alt="Club Atlético River Plate"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Club Atlético River Plate
                    </p>
                  </div>
                </Slide>
                <Slide index={8}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Boca_Juniors_logo18.svg/150px-Boca_Juniors_logo18.svg.png"
                      alt="Boca Juniors"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Boca Juniors
                    </p>
                  </div>
                </Slide>
                <Slide index={9}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flamengo_braz_logo.svg/150px-Flamengo_braz_logo.svg.png"
                      alt="Flamengo"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Flamengo
                    </p>
                  </div>
                </Slide>
                <Slide index={10}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Los_Angeles_Galaxy_logo.svg/180px-Los_Angeles_Galaxy_logo.svg.png"
                      alt="LA Galaxy"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      LA Galaxy
                    </p>
                  </div>
                </Slide>
                <Slide index={11}>
                  <div className="flex flex-col items-center content-center justify-center">
                    <img
                      onClick={(e) => {
                        handleEditBtnteams();
                        setTeam(e.target.src);
                      }}
                      className="h-[200px] w-[300px] cursor-pointer"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Palmeiras_logo.svg/190px-Palmeiras_logo.svg.png"
                      alt="Palmeiras"
                    />
                    <p className="legend text-3xl pt-6 cursor-default">
                      Palmeiras
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
              onClick={handleBack2NationTeamBtn}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Teams