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
                src="https://seekflag.com/app/uploads/2021/11/flag-of-afghanistan-01.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Albania-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/11/Flag-of-Algeria-01.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Andorra-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/11/flag-of-angola-01.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Antigua-and-Barbuda-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/11/flag-of-Argentina-01.png"
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
                src="https://seekflag.com/app/uploads/2021/11/flag-of-Armenia-01-2.png"
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
                src="https://seekflag.com/app/uploads/2021/11/flag-of-Australia-01.png"
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
                src="https://seekflag.com/app/uploads/2021/11/Flag-of-Austria-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/11/Flag-of-Azerbaijani-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/11/Flag-of-Bahamas-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/11/Flag-of-Bahrain-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/11/Flag-of-Bangladesh-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/11/flag-of-Barbados-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/11/Flag-of-Belarus-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/11/Flag-of-Belgian-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/11/Flag-of-Belize-01-2.png"
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
                src="https://seekflag.com/app/uploads/2021/11/Flag-of-Benin-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/11/Flag-of-Bhutan-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/11/Flag-of-Bolivian-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/11/Flag-of-Bosnia-and-Herzegovina-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/11/Flag-of-Botswana-01-6.png"
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
                src="https://seekflag.com/app/uploads/2021/11/Flag-of-Brazil-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/11/Flag-of-Brunei-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/11/Flag-of-Bulgaria-01.png"
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
                src="https://seekflag.com/app/uploads/2021/11/Flag-of-Burkina-Faso-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/11/Flag-of-Burundi-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/cote-divoire-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/11/Flag-of-Cape-Verde-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/11/Flag-of-cambodia-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/11/Flag-of-Cameroonian-01-3.png"
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
                src="https://seekflag.com/app/uploads/2021/11/Flag-of-Canada-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/11/Flag-of-central-Africa-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/11/Flag-of-Chad-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/11/Flaf-of-CHILEAN-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/11/Flag-of-China-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/11/Flag-of-Colombia-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/11/Flag-of-Comoros-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/11/Flag-of-congo-brazzaville-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/11/Flag-of-Costa-Rica-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/11/Flag-of-Croatia-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/11/Flag-of-Cuba-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/11/Flag-of-Cyprus-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/11/Flag-of-Czech-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/11/Flag-of-Congo-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/11/Flag-of-Denmark-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/11/Flag-of-Djibouti-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/11/Flag-of-Dominica-01.png"
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
                src="https://seekflag.com/app/uploads/2021/11/Flag-of-Dominican-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/11/Flag-of-Ecuador-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/11/Flag-of-Egypt-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/11/Flag-of-El-Salvador-01-1.png"
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
                src="https://seekflag.com/app/uploads/2022/01/England-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/11/Flag-of-Equatorial-Guinea-01.png"
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
                src="https://seekflag.com/app/uploads/2021/11/Flag-of-Eritrea-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/11/Flag-of-Estonia-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Eswatini-01-1.png"
                alt="Eswatini "
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Eswatini{" "}
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
                src="https://seekflag.com/app/uploads/2021/11/Flag-of-Ethiopia-01.png"
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
                src="https://seekflag.com/app/uploads/2021/11/Flag-of-Fiji-01.png"
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
                src="https://seekflag.com/app/uploads/2021/11/Flag-of-Finland-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/11/Flag-of-France-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/11/Flag-of-Gabon-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/11/Flag-of-Gambia-01.png"
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
                src="https://seekflag.com/app/uploads/2021/11/Flag-of-Georgia-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/11/Flag-of-Germany-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/11/Flag-of-Ghana-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/11/Flag-of-Greece-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/11/Flag-of-Grenada-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/11/Flag-of-Guatemala-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/11/Flag-of-Guinean-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/11/Flag-of-Guinea-Bissau-01-2.png"
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
                src="https://seekflag.com/app/uploads/2021/11/Flag-of-Guyana-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/11/Flag-of-Haiti-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/11/Flag-of-Honduras-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/11/Flag-of-Hungary-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/11/Flag-of-iceland-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/11/Flag-of-India-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Flag-of-Indonesia-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Flag-of-Iran-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Flag-of-iraq-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Flag-of-Ireland-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Flag-of-israel-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Flag-of-Italy-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Flag-of-Jamaica-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Flag-of-japan-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Flag-of-Jordan-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Flag-of-kazakhstan-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Flag-of-kenya-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Flag-of-kiribati-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Flag-ofA-kuwait-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Flag-of-kyrgyzstan-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Flag-of-Laos-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Flag-of-latvia-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Flag-of-latvia-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Flag-of-Lesotho-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Flag-of-Liberia-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Flag-of-Libya-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Flag-of-Liechtenstein-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Flag-of-Lithuania-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/luxembourg-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Madagascar-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Malawia-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Malaysia-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Maldives-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Mali-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Malta-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Marshall-Islands-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Mauritania-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Mauritius-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Mexico-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/micronesia-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Moldova-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Monaco-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/mongolia-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Montenegro-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Morocco-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Mozambique-Mozambique-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Myanmar-01-1.png"
                alt="Myanmar "
              />
              <p className="legend text-3xl pt-6 cursor-default">
                Myanmar{" "}
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
                src="https://seekflag.com/app/uploads/2021/12/Namibia-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/nepal-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Netherlands-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/New-Zealand-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/nauru-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Nicaragua-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Niger-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Nigeria-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/north-korea-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/macedonia-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Norway-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Oman-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Flag-of-Pakistan-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Palau-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Palestine-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Panama-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/papua-new-guinea-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/paraguay-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/peru-01-3.png"
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
                src="https://seekflag.com/app/uploads/2021/12/philippines-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Poland-01-2.png"
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
                src="https://seekflag.com/app/uploads/2021/12/portugal-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/qatar-01-2.png"
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
                src="https://seekflag.com/app/uploads/2021/12/romania-01-2.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Russia-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Rwanda-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Saint-Kitts-and-Nevis-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Saint-Lucia-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Saint-Vincent-01-2.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Samoa-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/San-Marino-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Sao-Tome-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Saudi-Arabia-01-1.png"
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
                src="https://seekflag.com/app/uploads/2022/01/Scotland-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Senegal-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Serbia-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Seychelles-01-4.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Sierra-Leone-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Singapore-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/fSlovakia-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Slovenia-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Solomon-Islands-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Somalia-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/South-Africa-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/South-Korea-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/South-Sudan-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Flag-of-Spain-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Sri-Lankan-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Sudan-01-2.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Suriname-01-6.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Swedish-01-2.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Swaziland-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Syria-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Tajikistan-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Tanzania-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/thailand-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Timor-Leste-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Togo-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Tonga-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Trinidad-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Tunisia-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Turkey-01-4.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Turkmenistan-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Tuvalu-01-3.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Uganda-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Ukraine-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/United-Arab-Emirates-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/America-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Uruguay-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Uzbekistan-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Vanuatu-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Vatican-01-1.png"
                alt="Vatican"
              />
              <p className="legend text-3xl pt-6 cursor-default">Vatican</p>
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
                src="https://seekflag.com/app/uploads/2021/12/Venezuela-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Vietnam-01-1.png"
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
                src="https://seekflag.com/app/uploads/2022/01/Welsh-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Yemen-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/zambia-01-1.png"
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
                src="https://seekflag.com/app/uploads/2021/12/Zimbabwe-01.png"
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
        className=" w-max h-[4rem] bg-[#01112B] rounded-tl-[20px] rounded-br-[20px] mx-auto text-base border-[3px] border-[#34FEF8] text-[#34FEF8] mb-2 mt-20 p-3 pl-4 pt-0"
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