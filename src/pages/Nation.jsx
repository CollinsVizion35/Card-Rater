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
import 'animate.css';

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

function Nations() {
    
    
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
    {/* select Nation */}
    <div
    ref={nationRef}
    className="major-Bg nation h-[100vh] w-screen text-white font-extrabold text-center"
  >
    <div className=" lg:text-7xl text-4xl">Select Nation</div>

    <div className="h-[50vh] lg:pt-[10vh] pt-[5vh]">
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={90}
        totalSlides={200}
        // isIntrinsicHeight={true}
      >
        <Slider className="max-h-[50vh]">
          <Slide index={0}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Flag_of_Afghanistan_%282013%E2%80%932021%29.svg/480px-Flag_of_Afghanistan_%282013%E2%80%932021%29.svg.png"
                alt="afghanistan"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Afghanistan
              </p>
            </div>
          </Slide>
          <Slide index={1}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Flag_of_Albania.svg/480px-Flag_of_Albania.svg.png"
                alt="Albania"
              />
              <p className="legend text-3xl pt-6 cursor-default">Albania</p>
            </div>
          </Slide>
          <Slide index={2}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Algeria.svg/480px-Flag_of_Algeria.svg.png"
                alt="Algeria"
              />
              <p className="legend text-3xl pt-6 cursor-default">Algeria</p>
            </div>
          </Slide>
          <Slide index={3}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Andorra.svg/480px-Flag_of_Andorra.svg.png"
                alt="Andorra"
              />
              <p className="legend text-3xl pt-6 cursor-default">Andorra</p>
            </div>
          </Slide>
          <Slide index={4}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Andorra.svg/480px-Flag_of_Andorra.svg.png"
                alt="Angola"
              />
              <p className="legend text-3xl pt-6 cursor-default">Angola</p>
            </div>
          </Slide>
          <Slide index={5}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Flag_of_Antigua_and_Barbuda.svg/480px-Flag_of_Antigua_and_Barbuda.svg.png"
                alt="Antigua and Barbuda"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Antigua and Barbuda
              </p>
            </div>
          </Slide>
          <Slide index={6}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/480px-Flag_of_Argentina.svg.png"
                alt="Argentina"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Argentina
              </p>
            </div>
          </Slide>
          <Slide index={7}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Armenia.svg/480px-Flag_of_Armenia.svg.png"
                alt="Armenia"
              />
              <p className="legend text-3xl pt-6 cursor-default">Armenia</p>
            </div>
          </Slide>
          <Slide index={8}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Australia.svg/480px-Flag_of_Australia.svg.png"
                alt="Australia"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Australia
              </p>
            </div>
          </Slide>
          <Slide index={9}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Austria.svg/480px-Flag_of_Austria.svg.png"
                alt="Austria"
              />
              <p className="legend text-3xl pt-6 cursor-default">Austria</p>
            </div>
          </Slide>
          <Slide index={10}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Azerbaijan.svg/480px-Flag_of_Azerbaijan.svg.png"
                alt="Azerbaijan"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Azerbaijan
              </p>
            </div>
          </Slide>
          <Slide index={11}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Flag_of_the_Bahamas.svg/480px-Flag_of_the_Bahamas.svg.png"
                alt="Bahamas"
              />
              <p className="legend text-3xl pt-6 cursor-default">Bahamas</p>
            </div>
          </Slide>
          <Slide index={12}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Bahrain.svg/480px-Flag_of_Bahrain.svg.png"
                alt="Bahrain"
              />
              <p className="legend text-3xl pt-6 cursor-default">Bahrain</p>
            </div>
          </Slide>
          <Slide index={13}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/480px-Flag_of_Bangladesh.svg.png"
                alt="Bangladesh"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Bangladesh
              </p>
            </div>
          </Slide>
          <Slide index={14}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Flag_of_Barbados.svg/480px-Flag_of_Barbados.svg.png"
                alt="Barbados"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Barbados
              </p>
            </div>
          </Slide>
          <Slide index={15}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Flag_of_Belarus.svg/480px-Flag_of_Belarus.svg.png"
                alt="Belarus"
              />
              <p className="legend text-3xl pt-6 cursor-default">Belarus</p>
            </div>
          </Slide>
          <Slide index={16}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Belgium.svg/480px-Flag_of_Belgium.svg.png"
                alt="Belgium"
              />
              <p className="legend text-3xl pt-6 cursor-default">Belgium</p>
            </div>
          </Slide>
          <Slide index={17}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Flag_of_Belize.svg/480px-Flag_of_Belize.svg.png"
                alt="Belize"
              />
              <p className="legend text-3xl pt-6 cursor-default">Belize</p>
            </div>
          </Slide>
          <Slide index={18}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_Benin.svg/480px-Flag_of_Benin.svg.png"
                alt="Benin"
              />
              <p className="legend text-3xl pt-6 cursor-default">Benin</p>
            </div>
          </Slide>
          <Slide index={19}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Flag_of_Bhutan.svg/480px-Flag_of_Bhutan.svg.png"
                alt="Bhutan"
              />
              <p className="legend text-3xl pt-6 cursor-default">Bhutan</p>
            </div>
          </Slide>
          <Slide index={20}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Bandera_de_Bolivia_%28Estado%29.svg/480px-Bandera_de_Bolivia_%28Estado%29.svg.png"
                alt="Bolivia"
              />
              <p className="legend text-3xl pt-6 cursor-default">Bolivia</p>
            </div>
          </Slide>
          <Slide index={21}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flag_of_Bosnia_and_Herzegovina.svg/480px-Flag_of_Bosnia_and_Herzegovina.svg.png"
                alt="	Bosnia and Herzegovina"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                {" "}
                Bosnia and Herzegovina
              </p>
            </div>
          </Slide>
          <Slide index={22}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_Botswana.svg/480px-Flag_of_Botswana.svg.png"
                alt="Botswana"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Botswana
              </p>
            </div>
          </Slide>
          <Slide index={23}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/480px-Flag_of_Brazil.svg.png"
                alt="Brazil"
              />
              <p className="legend text-3xl pt-6 cursor-default">Brazil</p>
            </div>
          </Slide>
          <Slide index={24}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Brunei.svg/480px-Flag_of_Brunei.svg.png"
                alt="Brunei"
              />
              <p className="legend text-3xl pt-6 cursor-default">Brunei</p>
            </div>
          </Slide>
          <Slide index={25}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Bulgaria.svg/480px-Flag_of_Bulgaria.svg.png"
                alt="Bulgaria"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Bulgaria
              </p>
            </div>
          </Slide>
          <Slide index={26}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Flag_of_Burkina_Faso.svg/480px-Flag_of_Burkina_Faso.svg.png"
                alt="Burkina Faso"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Burkina Faso
              </p>
            </div>
          </Slide>
          <Slide index={27}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Flag_of_Burundi.svg/480px-Flag_of_Burundi.svg.png"
                alt="Burundi"
              />
              <p className="legend text-3xl pt-6 cursor-default">Burundi</p>
            </div>
          </Slide>
          <Slide index={28}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_C%C3%B4te_d%27Ivoire.svg/480px-Flag_of_C%C3%B4te_d%27Ivoire.svg.png"
                alt="Côte d’Ivoire"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Côte d’Ivoire
              </p>
            </div>
          </Slide>
          <Slide index={29}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flag_of_Cape_Verde.svg/480px-Flag_of_Cape_Verde.svg.png"
                alt="Cape Verde"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Cape Verde
              </p>
            </div>
          </Slide>
          <Slide index={30}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_Cambodia.svg/480px-Flag_of_Cambodia.svg.png"
                alt="Cambodia"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Cambodia
              </p>
            </div>
          </Slide>
          <Slide index={31}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Flag_of_Cameroon.svg/480px-Flag_of_Cameroon.svg.png"
                alt="Cameroon"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Cameroon
              </p>
            </div>
          </Slide>
          <Slide index={32}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/480px-Flag_of_Canada_%28Pantone%29.svg.png"
                alt="Canada"
              />
              <p className="legend text-3xl pt-6 cursor-default">Canada</p>
            </div>
          </Slide>
          <Slide index={33}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Flag_of_the_Central_African_Republic.svg/480px-Flag_of_the_Central_African_Republic.svg.png"
                alt="Central African Republic"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Central African Republic
              </p>
            </div>
          </Slide>
          <Slide index={34}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Flag_of_Chad.svg/480px-Flag_of_Chad.svg.png"
                alt="Chad"
              />
              <p className="legend text-3xl pt-6 cursor-default">Chad</p>
            </div>
          </Slide>
          <Slide index={35}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/480px-Flag_of_Chile.svg.png"
                alt="Chile"
              />
              <p className="legend text-3xl pt-6 cursor-default">Chile</p>
            </div>
          </Slide>
          <Slide index={36}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/480px-Flag_of_the_People%27s_Republic_of_China.svg.png"
                alt="China"
              />
              <p className="legend text-3xl pt-6 cursor-default">China</p>
            </div>
          </Slide>
          <Slide index={37}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/480px-Flag_of_Colombia.svg.png"
                alt="Colombia"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Colombia
              </p>
            </div>
          </Slide>
          <Slide index={38}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Flag_of_the_Comoros.svg/480px-Flag_of_the_Comoros.svg.png"
                alt="Comoros"
              />
              <p className="legend text-3xl pt-6 cursor-default">Comoros</p>
            </div>
          </Slide>
          <Slide index={39}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_the_Republic_of_the_Congo.svg/480px-Flag_of_the_Republic_of_the_Congo.svg.png"
                alt="Congo-Brazzaville"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Congo-Brazzaville
              </p>
            </div>
          </Slide>
          <Slide index={40}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Costa_Rica_%28state%29.svg/480px-Flag_of_Costa_Rica_%28state%29.svg.png"
                alt="Costa Rica"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Costa Rica
              </p>
            </div>
          </Slide>
          <Slide index={41}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/480px-Flag_of_Croatia.svg.png"
                alt="Croatia"
              />
              <p className="legend text-3xl pt-6 cursor-default">Croatia</p>
            </div>
          </Slide>
          <Slide index={42}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Flag_of_Cuba.svg/480px-Flag_of_Cuba.svg.png"
                alt="Cuba"
              />
              <p className="legend text-3xl pt-6 cursor-default">Cuba</p>
            </div>
          </Slide>
          <Slide index={43}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Cyprus.svg/480px-Flag_of_Cyprus.svg.png"
                alt="Cyprus"
              />
              <p className="legend text-3xl pt-6 cursor-default">Cyprus</p>
            </div>
          </Slide>
          <Slide index={44}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/480px-Flag_of_the_Czech_Republic.svg.png"
                alt="Czechia"
              />
              <p className="legend text-3xl pt-6 cursor-default">Czechia</p>
            </div>
          </Slide>
          <Slide index={45}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Flag_of_the_Democratic_Republic_of_the_Congo.svg/480px-Flag_of_the_Democratic_Republic_of_the_Congo.svg.png"
                alt="Democratic Republic of the Congo"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Democratic Republic of the Congo
              </p>
            </div>
          </Slide>
          <Slide index={45}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/480px-Flag_of_Denmark.svg.png"
                alt="Denmark"
              />
              <p className="legend text-3xl pt-6 cursor-default">Denmark</p>
            </div>
          </Slide>
          <Slide index={47}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Flag_of_Djibouti.svg/480px-Flag_of_Djibouti.svg.png"
                alt="Djibouti"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Djibouti
              </p>
            </div>
          </Slide>
          <Slide index={48}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Flag_of_Dominica.svg/480px-Flag_of_Dominica.svg.png"
                alt="Dominica"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Dominica
              </p>
            </div>
          </Slide>
          <Slide index={49}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_the_Dominican_Republic.svg/480px-Flag_of_the_Dominican_Republic.svg.png"
                alt="Dominican Republic"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Dominican Republic
              </p>
            </div>
          </Slide>
          <Slide index={50}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Flag_of_Ecuador.svg/480px-Flag_of_Ecuador.svg.png"
                alt="Ecuador"
              />
              <p className="legend text-3xl pt-6 cursor-default">Ecuador</p>
            </div>
          </Slide>
          <Slide index={51}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/480px-Flag_of_Egypt.svg.png"
                alt="Egypt"
              />
              <p className="legend text-3xl pt-6 cursor-default">Egypt</p>
            </div>
          </Slide>
          <Slide index={52}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Flag_of_El_Salvador.svg/480px-Flag_of_El_Salvador.svg.png"
                alt="El Salvador"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                El Salvador
              </p>
            </div>
          </Slide>
          <Slide index={53}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/480px-Flag_of_England.svg.png"
                alt="England"
              />
              <p className="legend text-3xl pt-6 cursor-default">England</p>
            </div>
          </Slide>
          <Slide index={54}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Flag_of_Equatorial_Guinea.svg/480px-Flag_of_Equatorial_Guinea.svg.png"
                alt="Equatorial Guinea"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Equatorial Guinea
              </p>
            </div>
          </Slide>
          <Slide index={55}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Flag_of_Eritrea.svg/480px-Flag_of_Eritrea.svg.png"
                alt="Eritrea"
              />
              <p className="legend text-3xl pt-6 cursor-default">Eritrea</p>
            </div>
          </Slide>
          <Slide index={56}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flag_of_Estonia.svg/480px-Flag_of_Estonia.svg.png"
                alt="Estonia"
              />
              <p className="legend text-3xl pt-6 cursor-default">Estonia</p>
            </div>
          </Slide>
          <Slide index={57}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Flag_of_Eswatini.svg/480px-Flag_of_Eswatini.svg.png"
                alt="Eswatini "
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Eswatini
              </p>
            </div>
          </Slide>
          <Slide index={58}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Flag_of_Ethiopia.svg/480px-Flag_of_Ethiopia.svg.png"
                alt="Ethiopia"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Ethiopia
              </p>
            </div>
          </Slide>
          <Slide index={59}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Fiji.svg/480px-Flag_of_Fiji.svg.png"
                alt="Fiji"
              />
              <p className="legend text-3xl pt-6 cursor-default">Fiji</p>
            </div>
          </Slide>
          <Slide index={60}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/480px-Flag_of_Finland.svg.png"
                alt="Finland"
              />
              <p className="legend text-3xl pt-6 cursor-default">Finland</p>
            </div>
          </Slide>
          <Slide index={61}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg/480px-Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg.png"
                alt="France"
              />
              <p className="legend text-3xl pt-6 cursor-default">France</p>
            </div>
          </Slide>
          <Slide index={62}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Flag_of_Gabon.svg/480px-Flag_of_Gabon.svg.png"
                alt="Gabon"
              />
              <p className="legend text-3xl pt-6 cursor-default">Gabon</p>
            </div>
          </Slide>
          <Slide index={63}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_The_Gambia.svg/480px-Flag_of_The_Gambia.svg.png"
                alt="Gambia"
              />
              <p className="legend text-3xl pt-6 cursor-default">Gambia</p>
            </div>
          </Slide>
          <Slide index={64}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Georgia.svg/480px-Flag_of_Georgia.svg.png"
                alt="Georgia"
              />
              <p className="legend text-3xl pt-6 cursor-default">Georgia</p>
            </div>
          </Slide>
          <Slide index={65}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/480px-Flag_of_Germany.svg.png"
                alt="Germany"
              />
              <p className="legend text-3xl pt-6 cursor-default">Germany</p>
            </div>
          </Slide>
          <Slide index={66}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Ghana.svg/480px-Flag_of_Ghana.svg.png"
                alt="Ghana"
              />
              <p className="legend text-3xl pt-6 cursor-default">Ghana</p>
            </div>
          </Slide>
          <Slide index={67}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/480px-Flag_of_Greece.svg.png"
                alt="Greece"
              />
              <p className="legend text-3xl pt-6 cursor-default">Greece</p>
            </div>
          </Slide>
          <Slide index={68}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Grenada.svg/480px-Flag_of_Grenada.svg.png"
                alt="Grenada"
              />
              <p className="legend text-3xl pt-6 cursor-default">Grenada</p>
            </div>
          </Slide>
          <Slide index={69}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Flag_of_Guatemala.svg/480px-Flag_of_Guatemala.svg.png"
                alt="Guatemala"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Guatemala
              </p>
            </div>
          </Slide>
          <Slide index={70}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Flag_of_Guinea.svg/480px-Flag_of_Guinea.svg.png"
                alt="Guinea"
              />
              <p className="legend text-3xl pt-6 cursor-default">Guinea</p>
            </div>
          </Slide>
          <Slide index={71}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Guinea-Bissau.svg/480px-Flag_of_Guinea-Bissau.svg.png"
                alt="Guinea-Bissau"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Guinea-Bissau
              </p>
            </div>
          </Slide>
          <Slide index={72}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_Guyana.svg/480px-Flag_of_Guyana.svg.png"
                alt="Guyana"
              />
              <p className="legend text-3xl pt-6 cursor-default">Guyana</p>
            </div>
          </Slide>
          <Slide index={73}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Flag_of_Haiti.svg/480px-Flag_of_Haiti.svg.png"
                alt="Haiti"
              />
              <p className="legend text-3xl pt-6 cursor-default">Haiti</p>
            </div>
          </Slide>
          <Slide index={74}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Flag_of_Honduras.svg/480px-Flag_of_Honduras.svg.png"
                alt="Honduras"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Honduras
              </p>
            </div>
          </Slide>
          <Slide index={75}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Flag_of_Hungary.svg/480px-Flag_of_Hungary.svg.png"
                alt="Hungary"
              />
              <p className="legend text-3xl pt-6 cursor-default">Hungary</p>
            </div>
          </Slide>
          <Slide index={76}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/480px-Flag_of_Iceland.svg.png"
                alt="Iceland"
              />
              <p className="legend text-3xl pt-6 cursor-default">Iceland</p>
            </div>
          </Slide>
          <Slide index={77}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_India.svg/480px-Flag_of_India.svg.png"
                alt="India"
              />
              <p className="legend text-3xl pt-6 cursor-default">India</p>
            </div>
          </Slide>
          <Slide index={78}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/480px-Flag_of_Indonesia.svg.png"
                alt="Indonesia"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Indonesia
              </p>
            </div>
          </Slide>
          <Slide index={79}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Flag_of_Iran.svg/480px-Flag_of_Iran.svg.png"
                alt="Iran"
              />
              <p className="legend text-3xl pt-6 cursor-default">Iran</p>
            </div>
          </Slide>
          <Slide index={80}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Flag_of_Iraq.svg/480px-Flag_of_Iraq.svg.png"
                alt="Iraq"
              />
              <p className="legend text-3xl pt-6 cursor-default">Iraq</p>
            </div>
          </Slide>
          <Slide index={81}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Flag_of_Ireland.svg/480px-Flag_of_Ireland.svg.png"
                alt="Ireland"
              />
              <p className="legend text-3xl pt-6 cursor-default">Ireland</p>
            </div>
          </Slide>
          <Slide index={82}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Israel.svg/480px-Flag_of_Israel.svg.png"
                alt="Israel"
              />
              <p className="legend text-3xl pt-6 cursor-default">Israel</p>
            </div>
          </Slide>
          <Slide index={83}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/480px-Flag_of_Italy.svg.png"
                alt="Italy"
              />
              <p className="legend text-3xl pt-6 cursor-default">Italy</p>
            </div>
          </Slide>
          <Slide index={84}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_Jamaica.svg/480px-Flag_of_Jamaica.svg.png"
                alt="Jamaica"
              />
              <p className="legend text-3xl pt-6 cursor-default">Jamaica</p>
            </div>
          </Slide>
          <Slide index={85}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Flag_of_Japan_%28Pantone%29.svg/480px-Flag_of_Japan_%28Pantone%29.svg.png"
                alt="Japan"
              />
              <p className="legend text-3xl pt-6 cursor-default">Japan</p>
            </div>
          </Slide>
          <Slide index={86}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Flag_of_Jordan.svg/480px-Flag_of_Jordan.svg.png"
                alt="Jordan"
              />
              <p className="legend text-3xl pt-6 cursor-default">Jordan</p>
            </div>
          </Slide>
          <Slide index={87}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Kazakhstan.svg/480px-Flag_of_Kazakhstan.svg.png"
                alt="Kazakhstan"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Kazakhstan
              </p>
            </div>
          </Slide>
          <Slide index={88}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Kenya.svg/480px-Flag_of_Kenya.svg.png"
                alt="Kenya"
              />
              <p className="legend text-3xl pt-6 cursor-default">Kenya</p>
            </div>
          </Slide>
          <Slide index={89}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Kiribati.svg/480px-Flag_of_Kiribati.svg.png"
                alt="Kiribati"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Kiribati
              </p>
            </div>
          </Slide>
          <Slide index={90}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Flag_of_Kuwait.svg/480px-Flag_of_Kuwait.svg.png"
                alt="Kuwait"
              />
              <p className="legend text-3xl pt-6 cursor-default">Kuwait</p>
            </div>
          </Slide>
          <Slide index={91}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Flag_of_Kyrgyzstan.svg/480px-Flag_of_Kyrgyzstan.svg.png"
                alt="Kyrgyzstan"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Kyrgyzstan
              </p>
            </div>
          </Slide>
          <Slide index={92}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Flag_of_Laos.svg/480px-Flag_of_Laos.svg.png"
                alt="Laos"
              />
              <p className="legend text-3xl pt-6 cursor-default">Laos</p>
            </div>
          </Slide>
          <Slide index={93}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Latvia.svg/480px-Flag_of_Latvia.svg.png"
                alt="Latvia"
              />
              <p className="legend text-3xl pt-6 cursor-default">Latvia</p>
            </div>
          </Slide>
          <Slide index={94}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Flag_of_Lebanon.svg/480px-Flag_of_Lebanon.svg.png"
                alt="Lebanon"
              />
              <p className="legend text-3xl pt-6 cursor-default">Lebanon</p>
            </div>
          </Slide>
          <Slide index={95}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Flag_of_Lesotho.svg/480px-Flag_of_Lesotho.svg.png"
                alt="Lesotho"
              />
              <p className="legend text-3xl pt-6 cursor-default">Lesotho</p>
            </div>
          </Slide>
          <Slide index={96}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Flag_of_Liberia.svg/480px-Flag_of_Liberia.svg.png"
                alt="Liberia"
              />
              <p className="legend text-3xl pt-6 cursor-default">Liberia</p>
            </div>
          </Slide>
          <Slide index={97}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Libya.svg/480px-Flag_of_Libya.svg.png"
                alt="Libya"
              />
              <p className="legend text-3xl pt-6 cursor-default">Libya</p>
            </div>
          </Slide>
          <Slide index={98}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Flag_of_Liechtenstein.svg/480px-Flag_of_Liechtenstein.svg.png"
                alt="Liechtenstein"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Liechtenstein
              </p>
            </div>
          </Slide>
          <Slide index={99}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Lithuania.svg/480px-Flag_of_Lithuania.svg.png"
                alt="Lithuania"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Lithuania
              </p>
            </div>
          </Slide>
          <Slide index={100}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Flag_of_Luxembourg.svg/480px-Flag_of_Luxembourg.svg.png"
                alt="Luxembourg"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Luxembourg
              </p>
            </div>
          </Slide>
          <Slide index={101}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Madagascar.svg/480px-Flag_of_Madagascar.svg.png"
                alt="Madagascar"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Madagascar
              </p>
            </div>
          </Slide>
          <Slide index={102}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Flag_of_Malawi.svg/480px-Flag_of_Malawi.svg.png"
                alt="Malawi"
              />
              <p className="legend text-3xl pt-6 cursor-default">Malawi</p>
            </div>
          </Slide>
          <Slide index={103}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Flag_of_Malaysia.svg/480px-Flag_of_Malaysia.svg.png"
                alt="Malaysia"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Malaysia
              </p>
            </div>
          </Slide>
          <Slide index={104}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Maldives.svg/480px-Flag_of_Maldives.svg.png"
                alt="Maldives"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Maldives
              </p>
            </div>
          </Slide>
          <Slide index={105}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_Mali.svg/480px-Flag_of_Mali.svg.png"
                alt="Mali"
              />
              <p className="legend text-3xl pt-6 cursor-default">Mali</p>
            </div>
          </Slide>
          <Slide index={106}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Malta.svg/480px-Flag_of_Malta.svg.png"
                alt="Malta"
              />
              <p className="legend text-3xl pt-6 cursor-default">Malta</p>
            </div>
          </Slide>
          <Slide index={107}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flag_of_the_Marshall_Islands.svg/480px-Flag_of_the_Marshall_Islands.svg.png"
                alt="Marshall Islands"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Marshall Islands
              </p>
            </div>
          </Slide>
          <Slide index={108}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Flag_of_Mauritania.svg/480px-Flag_of_Mauritania.svg.png"
                alt="Mauritania"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Mauritania
              </p>
            </div>
          </Slide>
          <Slide index={109}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Mauritius.svg/480px-Flag_of_Mauritius.svg.png"
                alt="Mauritius"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Mauritius
              </p>
            </div>
          </Slide>
          <Slide index={110}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/480px-Flag_of_Mexico.svg.png"
                alt="Mexico"
              />
              <p className="legend text-3xl pt-6 cursor-default">Mexico</p>
            </div>
          </Slide>
          <Slide index={111}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Flag_of_the_Federated_States_of_Micronesia.svg/480px-Flag_of_the_Federated_States_of_Micronesia.svg.png"
                alt="Micronesia"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Micronesia
              </p>
            </div>
          </Slide>
          <Slide index={112}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Moldova.svg/480px-Flag_of_Moldova.svg.png"
                alt="Moldova"
              />
              <p className="legend text-3xl pt-6 cursor-default">Moldova</p>
            </div>
          </Slide>
          <Slide index={113}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Flag_of_Monaco.svg/480px-Flag_of_Monaco.svg.png"
                alt="Monaco"
              />
              <p className="legend text-3xl pt-6 cursor-default">Monaco</p>
            </div>
          </Slide>
          <Slide index={114}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Mongolia.svg/480px-Flag_of_Mongolia.svg.png"
                alt="Mongolia"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Mongolia
              </p>
            </div>
          </Slide>
          <Slide index={115}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Flag_of_Montenegro.svg/480px-Flag_of_Montenegro.svg.png"
                alt="Montenegro"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Montenegro
              </p>
            </div>
          </Slide>
          <Slide index={116}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Morocco.svg/480px-Flag_of_Morocco.svg.png"
                alt="Morocco"
              />
              <p className="legend text-3xl pt-6 cursor-default">Morocco</p>
            </div>
          </Slide>
          <Slide index={117}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flag_of_Mozambique.svg/480px-Flag_of_Mozambique.svg.png"
                alt="Mozambique"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Mozambique
              </p>
            </div>
          </Slide>
          <Slide index={118}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Flag_of_Myanmar.svg/480px-Flag_of_Myanmar.svg.png"
                alt="Myanmar "
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Myanmar
              </p>
            </div>
          </Slide>
          <Slide index={119}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_Namibia.svg/480px-Flag_of_Namibia.svg.png"
                alt="Namibia"
              />
              <p className="legend text-3xl pt-6 cursor-default">Namibia</p>
            </div>
          </Slide>
          <Slide index={120}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Emblem_of_Nepal.svg/480px-Emblem_of_Nepal.svg.png"
                alt="Nepal"
              />
              <p className="legend text-3xl pt-6 cursor-default">Nepal</p>
            </div>
          </Slide>
          <Slide index={121}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/480px-Flag_of_the_Netherlands.svg.png"
                alt="Netherlands"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Netherlands
              </p>
            </div>
          </Slide>
          <Slide index={122}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/480px-Flag_of_New_Zealand.svg.png"
                alt="New Zealand"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                New Zealand
              </p>
            </div>
          </Slide>
          <Slide index={123}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Flag_of_Nauru.svg/480px-Flag_of_Nauru.svg.png"
                alt="Nauru"
              />
              <p className="legend text-3xl pt-6 cursor-default">Nauru</p>
            </div>
          </Slide>
          <Slide index={124}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Nicaragua.svg/480px-Flag_of_Nicaragua.svg.png"
                alt="Nicaragua"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Nicaragua
              </p>
            </div>
          </Slide>
          <Slide index={125}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Flag_of_Niger.svg/480px-Flag_of_Niger.svg.png"
                alt="Niger"
              />
              <p className="legend text-3xl pt-6 cursor-default">Niger</p>
            </div>
          </Slide>
          <Slide index={126}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_Nigeria.svg/480px-Flag_of_Nigeria.svg.png"
                alt="Nigeria"
              />
              <p className="legend text-3xl pt-6 cursor-default">Nigeria</p>
            </div>
          </Slide>
          <Slide index={127}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Flag_of_North_Korea.svg/480px-Flag_of_North_Korea.svg.png"
                alt="North Korea"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                North Korea
              </p>
            </div>
          </Slide>
          <Slide index={128}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_North_Macedonia.svg/480px-Flag_of_North_Macedonia.svg.png"
                alt="North Macedonia"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                North Macedonia
              </p>
            </div>
          </Slide>
          <Slide index={129}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/480px-Flag_of_Norway.svg.png"
                alt="Norway"
              />
              <p className="legend text-3xl pt-6 cursor-default">Norway</p>
            </div>
          </Slide>
          <Slide index={130}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Oman.svg/480px-Flag_of_Oman.svg.png"
                alt="Oman"
              />
              <p className="legend text-3xl pt-6 cursor-default">Oman</p>
            </div>
          </Slide>
          <Slide index={131}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Pakistan.svg/480px-Flag_of_Pakistan.svg.png"
                alt="Pakistan"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Pakistan
              </p>
            </div>
          </Slide>
          <Slide index={132}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Palau.svg/480px-Flag_of_Palau.svg.png"
                alt="Palau"
              />
              <p className="legend text-3xl pt-6 cursor-default">Palau</p>
            </div>
          </Slide>
          <Slide index={133}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_Palestine.svg/480px-Flag_of_Palestine.svg.png"
                alt="Palestine"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Palestine
              </p>
            </div>
          </Slide>
          <Slide index={134}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Flag_of_Panama.svg/480px-Flag_of_Panama.svg.png"
                alt="Panama"
              />
              <p className="legend text-3xl pt-6 cursor-default">Panama</p>
            </div>
          </Slide>
          <Slide index={135}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Flag_of_Papua_New_Guinea.svg/480px-Flag_of_Papua_New_Guinea.svg.png"
                alt="Papua New Guinea"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Papua New Guinea
              </p>
            </div>
          </Slide>
          <Slide index={136}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Paraguay.svg/480px-Flag_of_Paraguay.svg.png"
                alt="Paraguay"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Paraguay
              </p>
            </div>
          </Slide>
          <Slide index={137}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Flag_of_Peru_%28state%29.svg/480px-Flag_of_Peru_%28state%29.svg.png"
                alt="Peru"
              />
              <p className="legend text-3xl pt-6 cursor-default">Peru</p>
            </div>
          </Slide>
          <Slide index={138}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_the_Philippines.svg/480px-Flag_of_the_Philippines.svg.png"
                alt="Philippines"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Philippines
              </p>
            </div>
          </Slide>
          <Slide index={139}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Flag_of_Poland.svg/480px-Flag_of_Poland.svg.png"
                alt="Poland"
              />
              <p className="legend text-3xl pt-6 cursor-default">Poland</p>
            </div>
          </Slide>
          <Slide index={140}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/480px-Flag_of_Portugal.svg.png"
                alt="Portugal"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Portugal
              </p>
            </div>
          </Slide>
          <Slide index={141}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Qatar.svg/480px-Flag_of_Qatar.svg.png"
                alt="Qatar"
              />
              <p className="legend text-3xl pt-6 cursor-default">Qatar</p>
            </div>
          </Slide>
          <Slide index={142}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Romania.svg/480px-Flag_of_Romania.svg.png"
                alt="Romania"
              />
              <p className="legend text-3xl pt-6 cursor-default">Romania</p>
            </div>
          </Slide>
          <Slide index={143}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/480px-Flag_of_Russia.svg.png"
                alt="Russia"
              />
              <p className="legend text-3xl pt-6 cursor-default">Russia</p>
            </div>
          </Slide>
          <Slide index={144}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Flag_of_Rwanda.svg/480px-Flag_of_Rwanda.svg.png"
                alt="Rwanda"
              />
              <p className="legend text-3xl pt-6 cursor-default">Rwanda</p>
            </div>
          </Slide>
          <Slide index={145}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Saint_Kitts_and_Nevis.svg/480px-Flag_of_Saint_Kitts_and_Nevis.svg.png"
                alt="Saint Kitts and Nevis"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Saint Kitts and Nevis
              </p>
            </div>
          </Slide>
          <Slide index={146}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Saint_Lucia.svg/480px-Flag_of_Saint_Lucia.svg.png"
                alt="Saint Lucia"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Saint Lucia
              </p>
            </div>
          </Slide>
          <Slide index={147}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Flag_of_Saint_Vincent_and_the_Grenadines.svg/480px-Flag_of_Saint_Vincent_and_the_Grenadines.svg.png"
                alt="Saint Vincent and the Grenadines"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Saint Vincent and the Grenadines
              </p>
            </div>
          </Slide>
          <Slide index={148}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Flag_of_Samoa.svg/480px-Flag_of_Samoa.svg.png"
                alt="Samoa"
              />
              <p className="legend text-3xl pt-6 cursor-default">Samoa</p>
            </div>
          </Slide>
          <Slide index={149}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Flag_of_San_Marino.svg/480px-Flag_of_San_Marino.svg.png"
                alt="San Marino"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                San Marino
              </p>
            </div>
          </Slide>
          <Slide index={150}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_S%C3%A3o_Tom%C3%A9_and_Pr%C3%ADncipe.svg/480px-Flag_of_S%C3%A3o_Tom%C3%A9_and_Pr%C3%ADncipe.svg.png"
                alt="São Tomé and Principe"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                São Tomé and Principe
              </p>
            </div>
          </Slide>
          <Slide index={151}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/480px-Flag_of_Saudi_Arabia.svg.png"
                alt="Saudi Arabia"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Saudi Arabia
              </p>
            </div>
          </Slide>
          <Slide index={152}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Flag_of_Scotland.svg/480px-Flag_of_Scotland.svg.png"
                alt="Scotland"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Scotland
              </p>
            </div>
          </Slide>
          <Slide index={153}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Flag_of_Senegal.svg/480px-Flag_of_Senegal.svg.png"
                alt="Senegal"
              />
              <p className="legend text-3xl pt-6 cursor-default">Senegal</p>
            </div>
          </Slide>
          <Slide index={154}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Flag_of_Serbia.svg/480px-Flag_of_Serbia.svg.png"
                alt="Serbia"
              />
              <p className="legend text-3xl pt-6 cursor-default">Serbia</p>
            </div>
          </Slide>
          <Slide index={155}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Seychelles.svg/480px-Flag_of_Seychelles.svg.png"
                alt="Seychelles"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Seychelles
              </p>
            </div>
          </Slide>
          <Slide index={156}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Flag_of_Sierra_Leone.svg/480px-Flag_of_Sierra_Leone.svg.png"
                alt="Sierra Leone"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Sierra Leone
              </p>
            </div>
          </Slide>
          <Slide index={157}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Singapore.svg/480px-Flag_of_Singapore.svg.png"
                alt="Singapore"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Singapore
              </p>
            </div>
          </Slide>
          <Slide index={158}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Slovakia.svg/480px-Flag_of_Slovakia.svg.png"
                alt="Slovakia"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Slovakia
              </p>
            </div>
          </Slide>
          <Slide index={159}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Flag_of_Slovenia.svg/480px-Flag_of_Slovenia.svg.png"
                alt="Slovenia"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Slovenia
              </p>
            </div>
          </Slide>
          <Slide index={160}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Flag_of_the_Solomon_Islands.svg/480px-Flag_of_the_Solomon_Islands.svg.png"
                alt="Solomon Islands"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Solomon Islands
              </p>
            </div>
          </Slide>
          <Slide index={161}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Flag_of_Somalia.svg/480px-Flag_of_Somalia.svg.png"
                alt="Somalia"
              />
              <p className="legend text-3xl pt-6 cursor-default">Somalia</p>
            </div>
          </Slide>
          <Slide index={162}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_South_Africa.svg/480px-Flag_of_South_Africa.svg.png"
                alt="South Africa"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                South Africa
              </p>
            </div>
          </Slide>
          <Slide index={163}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/480px-Flag_of_South_Korea.svg.png"
                alt="South Korea"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                South Korea
              </p>
            </div>
          </Slide>
          <Slide index={164}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Flag_of_South_Sudan.svg/480px-Flag_of_South_Sudan.svg.png"
                alt="South Sudan"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                South Sudan
              </p>
            </div>
          </Slide>
          <Slide index={165}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/480px-Bandera_de_Espa%C3%B1a.svg.png"
                alt="Spain"
              />
              <p className="legend text-3xl pt-6 cursor-default">Spain</p>
            </div>
          </Slide>
          <Slide index={166}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Sri_Lanka.svg/480px-Flag_of_Sri_Lanka.svg.png"
                alt="Sri Lanka"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Sri Lanka
              </p>
            </div>
          </Slide>
          <Slide index={167}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Sudan.svg/480px-Flag_of_Sudan.svg.png"
                alt="Sudan"
              />
              <p className="legend text-3xl pt-6 cursor-default">Sudan</p>
            </div>
          </Slide>
          <Slide index={168}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Flag_of_Suriname.svg/480px-Flag_of_Suriname.svg.png"
                alt="Suriname"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Suriname
              </p>
            </div>
          </Slide>
          <Slide index={169}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Sweden.svg/480px-Flag_of_Sweden.svg.png"
                alt="Sweden"
              />
              <p className="legend text-3xl pt-6 cursor-default">Sweden</p>
            </div>
          </Slide>
          <Slide index={170}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Switzerland.svg/480px-Flag_of_Switzerland.svg.png"
                alt="Switzerland"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Switzerland
              </p>
            </div>
          </Slide>
          <Slide index={171}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Flag_of_Syria.svg/480px-Flag_of_Syria.svg.png"
                alt="Syria"
              />
              <p className="legend text-3xl pt-6 cursor-default">Syria</p>
            </div>
          </Slide>
          <Slide index={172}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flag_of_Tajikistan.svg/480px-Flag_of_Tajikistan.svg.png"
                alt="Tajikistan"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Tajikistan
              </p>
            </div>
          </Slide>
          <Slide index={173}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flag_of_Tanzania.svg/480px-Flag_of_Tanzania.svg.png"
                alt="Tanzania"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Tanzania
              </p>
            </div>
          </Slide>
          <Slide index={174}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/480px-Flag_of_Thailand.svg.png"
                alt="Thailand"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Thailand
              </p>
            </div>
          </Slide>
          <Slide index={175}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Flag_of_East_Timor.svg/480px-Flag_of_East_Timor.svg.png"
                alt="Timor-Leste"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Timor-Leste
              </p>
            </div>
          </Slide>
          <Slide index={176}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Flag_of_Togo.svg/480px-Flag_of_Togo.svg.png"
                alt="Togo"
              />
              <p className="legend text-3xl pt-6 cursor-default">Togo</p>
            </div>
          </Slide>
          <Slide index={177}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Tonga.svg/480px-Flag_of_Tonga.svg.png"
                alt="Tonga"
              />
              <p className="legend text-3xl pt-6 cursor-default">Tonga</p>
            </div>
          </Slide>
          <Slide index={178}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Flag_of_Trinidad_and_Tobago.svg/480px-Flag_of_Trinidad_and_Tobago.svg.png"
                alt="Trinidad and Tobago"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Trinidad and Tobago
              </p>
            </div>
          </Slide>
          <Slide index={179}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Tunisia.svg/480px-Flag_of_Tunisia.svg.png"
                alt="Tunisia"
              />
              <p className="legend text-3xl pt-6 cursor-default">Tunisia</p>
            </div>
          </Slide>
          <Slide index={180}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/480px-Flag_of_Turkey.svg.png"
                alt="Turkey"
              />
              <p className="legend text-3xl pt-6 cursor-default">Turkey</p>
            </div>
          </Slide>
          <Slide index={181}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Turkmenistan.svg/480px-Flag_of_Turkmenistan.svg.png"
                alt="Turkmenistan"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Turkmenistan
              </p>
            </div>
          </Slide>
          <Slide index={182}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flag_of_Tuvalu.svg/480px-Flag_of_Tuvalu.svg.png"
                alt="Tuvalu"
              />
              <p className="legend text-3xl pt-6 cursor-default">Tuvalu</p>
            </div>
          </Slide>
          <Slide index={183}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Flag_of_Uganda.svg/480px-Flag_of_Uganda.svg.png"
                alt="Uganda"
              />
              <p className="legend text-3xl pt-6 cursor-default">Uganda</p>
            </div>
          </Slide>
          <Slide index={184}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/480px-Flag_of_Ukraine.svg.png"
                alt="Ukraine"
              />
              <p className="legend text-3xl pt-6 cursor-default">Ukraine</p>
            </div>
          </Slide>
          <Slide index={185}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/480px-Flag_of_the_United_Arab_Emirates.svg.png"
                alt="United Arab Emirates"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                United Arab Emirates
              </p>
            </div>
          </Slide>
          <Slide index={186}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/480px-Flag_of_the_United_States.svg.png"
                alt="United States of America"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                United States of America
              </p>
            </div>
          </Slide>
          <Slide index={187}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/480px-Flag_of_Uruguay.svg.png"
                alt="Uruguay"
              />
              <p className="legend text-3xl pt-6 cursor-default">Uruguay</p>
            </div>
          </Slide>
          <Slide index={188}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/480px-Flag_of_Uzbekistan.svg.png"
                alt="Uzbekistan"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Uzbekistan
              </p>
            </div>
          </Slide>
          <Slide index={189}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Vanuatu.svg/480px-Flag_of_Vanuatu.svg.png"
                alt="Vanuatu"
              />
              <p className="legend text-3xl pt-6 cursor-default">Vanuatu</p>
            </div>
          </Slide>
          <Slide index={190}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_the_Vatican_City.svg/480px-Flag_of_the_Vatican_City.svg.png"
                alt="Vatican"
              />
              <p className="legend text-3xl pt-6 cursor-default">Vatican City</p>
            </div>
          </Slide>
          <Slide index={191}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Venezuela.svg/480px-Flag_of_Venezuela.svg.png"
                alt="Venezuela"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Venezuela
              </p>
            </div>
          </Slide>
          <Slide index={192}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/480px-Flag_of_Vietnam.svg.png"
                alt="Vietnam"
              />
              <p className="legend text-3xl pt-6 cursor-default">Vietnam</p>
            </div>
          </Slide>
          <Slide index={193}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Flag_of_Wales.svg/480px-Flag_of_Wales.svg.png"
                alt="Wales"
              />
              <p className="legend text-3xl pt-6 cursor-default">Wales</p>
            </div>
          </Slide>
          <Slide index={194}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Flag_of_Yemen.svg/480px-Flag_of_Yemen.svg.png"
                alt="Yemen"
              />
              <p className="legend text-3xl pt-6 cursor-default">Yemen</p>
            </div>
          </Slide>
          <Slide index={195}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Zambia.svg/480px-Flag_of_Zambia.svg.png"
                alt="Zambia"
              />
              <p className="legend text-3xl pt-6 cursor-default">Zambia</p>
            </div>
          </Slide>
          <Slide index={196}>
            <div className="flex flex-col items-center content-center justify-center">
              <img
                onClick={(e) => {
                  handleEditBtn1st();
                  setNation(e.target.src);
                }}
                className="h-[200px] w-[300px] cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Flag_of_Zimbabwe.svg/480px-Flag_of_Zimbabwe.svg.png"
                alt="Zimbabwe	"
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Zimbabwe{" "}
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
        className=" w-max h-[4rem] bg-[#01112B] rounded-tl-[20px] rounded-br-[20px] mx-auto text-base border-[3px] border-[#34FEF8] text-[#34FEF8] mb-2 mt-20 p-3 pl-4 pt-0 animate__animated animate__tada"
        onClick={handleBack2HomeBtn}
      >
        Back
      </button>
    </div>
  </div>
  </>
  )
}

export default Nations