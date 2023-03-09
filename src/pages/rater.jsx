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
import { MdPhotoCamera } from "react-icons/md/index";
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
import Nations from "./Nation";
import TeamsNation from "./TeamsNation";
import Teams from "./Teams";
import ImageUpdate from "./ImageUpdate";

function Rater() {
  useEffect(() => {
    document.title = "VCR - Create your Idea Footballing Rater";
  }, []);

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

  const [usersInfo, setUsersInfo] = useState([]);

  const data = {
    name: name,
    Nation: Nation,
    Team: Team,
    Position: Position,
    Acceleration: Acceleration,
    Aggression: Aggression,
    Agility: Agility,
    AttackingPosition: AttackingPosition,
    Awareness: Awareness,
    Balance: Balance,
    BallControl: BallControl,
    Composure: Composure,
    Crossing: Crossing,
    Curve: Curve,
    Defending: Defending,
    Dribbling: Dribbling,
    Finishing: Finishing,
    FreeKick: FreeKick,
    Heading: Heading,
    Interceptions: Interceptions,
    Jumping: Jumping,
    LongPassing: LongPassing,
    LongShot: LongShot,
    Marking: Marking,
    Pace: Pace,
    Passing: Passing,
    Penalties: Penalties,
    Physical: Physical,
    Positioning: Positioning,
    Reactions: Reactions,
    Shooting: Shooting,
    ShortPassing: ShortPassing,
    ShotPower: ShotPower,
    SlidingTackle: SlidingTackle,
    SprintSpeed: SprintSpeed,
    Stamina: Stamina,
    StandingTackle: StandingTackle,
    Strength: Strength,
    Vision: Vision,
    Volleys: Volleys,
  };

  const [photoURL, setPhotoURL] = useState(defaultImg);

  useEffect(() => {
    console.log(data);
  }, [data]);

  console.log(data);

  async function handleEditBtn2(e) {
    save2Ref.current.style.display = "flex";
  }

  async function handleEditBtn() {
    //   e.preventDefault();
    try {
      // setError(false);

      await setDoc(doc(db, "Card Rating", PassCode), data);
      storeInformationToDB();
      confirmedRef.current.style.display = "flex";
      setTimeout(() => {
        confirmedRef.current.style.display = "none";
      }, 2000);
    } catch (e) {
      //   setError(true);
      console.log(e.message);
      unconfirmedRef.current.style.display = "flex";
      setTimeout(() => {
        unconfirmedRef.current.style.display = "none";
      }, 2000);
    }
    save2Ref.current.style.display = "none";

    setTimeout(() => {
      async function fetchData() {
        const q = query(
          collection(db, "Card Rating"),
          where(documentId(), "==", "oNoMvAKb3ljxnfznGeOu")
        );

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          setUsersInfo(
            querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
          );
        });
      }
      fetchData();
      infoRef.current.style.display = "none";
      raterSmRef.current.style.height ="100vh";

    }, 6000);
    localStorage.clear();
  }

  async function storeInformationToDB() {
    try {
      await updateProfile({
        displayName: undefined || {},

        data,
      });
    } catch (e) {
      console.log(e.message);
    }
  }

  const handleEditBtn3 = () => {
    save2Ref.current.style.display = "none";
  };

  useEffect(() => {
    save2Ref.current.style.display = "none";
  }, []);

  return (
    <>
      {/* main */}

      <Nations />
      <TeamsNation />
      <Teams />
      <ImageUpdate />

      {/*  lg:flex lg:flex-row flex-col  */}
      <div
        ref={skillSetRef}
        className="major-Bg text-center
      
       overflow-visible hidden lg:flex-row flex-col"
      >
        {usersInfo.length > 0 ? (
          usersInfo.map((info, index) => {
            return (
              <div ref={raterSmRef} className="relative carder2 lg:hidden">
                <div className="carder-sm fixed lg:hidden h-[50vh] w-[100vw]">
                  <div className="sticky top-[10vh] pr-[90px] text-2xl text-[#3E361D]">
                  {Math.ceil((parseInt(info.Acceleration) +
                        parseInt(info.Aggression) +
                        parseInt(info.Agility) +
                        parseInt(info.AttackingPosition) +
                        parseInt(info.Awareness) +
                        parseInt(info.Balance) +
                        parseInt(info.BallControl) +
                        parseInt(info.Composure) +
                        parseInt(info.Crossing) +
                        parseInt(info.Curve) +
                        parseInt(info.Defending) +
                        parseInt(info.Dribbling) +
                        parseInt(info.Finishing) +
                        parseInt(info.FreeKick) +
                        parseInt(info.Heading) +
                        parseInt(info.Interceptions) +
                        parseInt(info.Jumping) +
                        parseInt(info.LongPassing) +
                        parseInt(info.LongShot) +
                        parseInt(info.Marking) +
                        parseInt(info.Pace) +
                        parseInt(info.Passing) +
                        parseInt(info.Penalties) +
                        parseInt(info.Physical) +
                        parseInt(info.Positioning) +
                        parseInt(info.Reactions) +
                        parseInt(info.Shooting) +
                        parseInt(info.ShortPassing) +
                        parseInt(info.ShotPower) +
                        parseInt(info.SlidingTackle) +
                        parseInt(info.SprintSpeed) +
                        parseInt(info.Stamina) +
                        parseInt(info.StandingTackle) +
                        parseInt(info.Strength) +
                        parseInt(info.Vision) +
                        parseInt(info.Volleys)) /
                        36)}
                  </div>
                  <div className="sticky top-[15.5vh] pr-[90px]  text-[18px] text-[#3E361D]">
                    {info.Position}
                  </div>
                  <div className="relative flex boy content-center justify-center ">
                    <div className="absolute top-[-2.5em]">
                      <img
                        src={info.Nation}
                        alt="country"
                        className="w-[20px] h-[15px] top-[20.5vh] sticky z-[99999999999]"
                      />
                      <img
                        src={info.Team}
                        alt="club"
                        className="w-[17px] h-[17px] top-[23.2vh] sticky z-[99999999999]"
                      />
                      <img
                        src={image}
                        alt="player"
                        className="w-[110px] h-[100px] bottom-[0vh] pl-[2em] static"
                      />
                    </div>
                  </div>
                  <div className="sticky top-[27vh]  text-2xl text-[#3E361D]">
                    {info.name}
                  </div>
                  <div className="sticky top-[32vh] pr-[100px]  text-[18px] text-[#3E361D]">
                    {info.Pace}
                  </div>
                  <div className="sticky top-[35.5vh] pr-[100px]  text-[18px] text-[#3E361D]">
                    {info.Shooting}
                  </div>
                  <div className="sticky top-[39vh] pr-[100px]  text-[18px] text-[#3E361D]">
                    {info.Passing}
                  </div>
                  <div className="sticky top-[32vh]  pl-[50px] text-[18px] text-[#3E361D]">
                    {info.Dribbling}
                  </div>
                  <div className="sticky top-[35.5vh]  pl-[50px] text-[18px] text-[#3E361D]">
                    {info.Defending}
                  </div>
                  <div className="sticky  pl-[50px] text-[18px] text-[#3E361D]">
                    {info.Physical}
                  </div>
                  <div className="sticky text-[8px] font-extrabold left-[46%] p-1 rounded-[50%] text-[#3E361D] bg-[#D6C26C] w-max h-max">
                    VCR
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <></>
        )}

        <MdPhotoCamera className="text-4xl p-2 rounded-[50%] bg-inherit border-[2px] border-white text-white" onClick={() => capture()}/>

        <div ref={infoRef} className="class lg:w-[50vw]  flex flex-col pt-[55vh]  lg:pt-10">
          <div className="class w-[50vw] mx-auto py-3">
            <label className="mb-3 text-md text-[#34FEF8] font-bold uppercase">
              Player's NAME
            </label>
            <br />
            <input
              type="text"
              placeholder="Firstname"
              onChange={(e) => setName(e.target.value)}
              className="rounder border-[5px] lg:w-[10rem] w-auto h-[6rem] bg-[#01112B] p-2 text-sm border border-[#34FEF8] text-[#34FEF8]"
            />
          </div>

          <div>
            <label className="mb text-md text-[#34FEF8] font-bold uppercase">
              Position
            </label>
            <br />
            <div
              className="z-[1000]"
              //  style={{transform: 'translate(-50%, -50%)'}}
            >
              <div className="rounded-lg border-[#34FEF8] px-6">
                <select
                  onChange={(e) => {
                    // selectedClass();
                    setPosition(e.target.value);
                  }}
                  className="rounder resize-none w-full h-[6rem] bg-[#01112B] text-base border-[5px] border-[#34FEF8] text-[#34FEF8] mb-2 mt-2 p-3 pl-4 pt-0 placeholder-opacity-60 placeholder-[#34FEF8]"
                >
                  <option
                    value="Select a Category"
                    selected
                    className="block"
                    disabled
                  >
                    Select your Preferred Playing Position
                  </option>
                  <option className="py-2" value="GK">
                    GoalKeeper
                  </option>
                  <option className="py-2" value="RB">
                    Right Back
                  </option>
                  <option className="py-2" value="RCB">
                    Right Center Back
                  </option>
                  <option className="py-2" value="CB">
                    Center Back
                  </option>
                  <option className="py-2" value="LCB">
                    Left Center Back
                  </option>
                  <option className="py-2" value="LB">
                    Left Back
                  </option>
                  <option className="py-2" value="RWB">
                    Right Wing Back
                  </option>
                  <option className="py-2" value="LWB">
                    Left Wing Back
                  </option>
                  <option className="py-2" value="RDM">
                    Right Defensive Midfielder
                  </option>
                  <option className="py-2" value="DM">
                    Defensive Midfielder
                  </option>
                  <option className="py-2" value="LDM">
                    Left Defensive Midfielder
                  </option>
                  <option className="py-2" value="RM">
                    Right Midfielder
                  </option>
                  <option className="py-2" value="RCM">
                    Right Center Midfielder
                  </option>
                  <option className="py-2" value="CM">
                    Center Midfielder
                  </option>
                  <option className="py-2" value="LCM">
                    Left Center Midfielder
                  </option>
                  <option className="py-2" value="LM">
                    Left Midfielder
                  </option>
                  <option className="py-2" value="RAM">
                    Right Attacking Midfielder
                  </option>
                  <option className="py-2" value="AM">
                    Attacking Midfielder
                  </option>
                  <option className="py-2" value="LAM">
                    Left Attacking Midfielder
                  </option>
                  <option className="py-2" value="RW">
                    Right Winger
                  </option>
                  <option className="py-2" value="LW">
                    Left Winger
                  </option>
                  <option className="py-2" value="SS">
                    Second Striker
                  </option>
                  <option className="py-2" value="RS">
                    Right Striker
                  </option>
                  <option className="py-2" value="LS">
                    Left Striker
                  </option>
                  <option className="py-2" value="CF">
                    Center Foward
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <label className="mb text-md text-[#34FEF8] font-bold uppercase">
              Acceleration
            </label>
            <br />
            <div
              className="z-[1000]"
              //  style={{transform: 'translate(-50%, -50%)'}}
            >
              <div className="rounded-lg border-[#34FEF8] px-6">
                <select
                  onChange={(e) => {
                    // selectedClass();
                    setAcceleration(e.target.value);
                  }}
                  className="rounder resize-none w-full h-[6rem] bg-[#01112B] text-base border-[5px] border-[#34FEF8] text-[#34FEF8] mb-2 mt-2 p-3 pl-4 pt-0 placeholder-opacity-60 placeholder-[#34FEF8]"
                >
                  <option
                    value="Select a Category"
                    selected
                    className="block"
                    disabled
                  >
                    Select a rating
                  </option>
                  <option className="py-2" value="99">
                    99
                  </option>
                  <option className="py-2" value="98">
                    98
                  </option>
                  <option className="py-2" value="97">
                    97
                  </option>
                  <option className="py-2" value="96">
                    96
                  </option>
                  <option className="py-2" value="95">
                    95
                  </option>
                  <option className="py-2" value="94">
                    94
                  </option>
                  <option className="py-2" value="93">
                    93
                  </option>
                  <option className="py-2" value="92">
                    92
                  </option>
                  <option className="py-2" value="91">
                    91
                  </option>
                  <option className="py-2" value="90">
                    90
                  </option>
                  <option className="py-2" value="89">
                    89
                  </option>
                  <option className="py-2" value="88">
                    88
                  </option>
                  <option className="py-2" value="87">
                    87
                  </option>
                  <option className="py-2" value="86">
                    86
                  </option>
                  <option className="py-2" value="85">
                    85
                  </option>
                  <option className="py-2" value="84">
                    84
                  </option>
                  <option className="py-2" value="83">
                    83
                  </option>
                  <option className="py-2" value="82">
                    82
                  </option>
                  <option className="py-2" value="81">
                    81
                  </option>
                  <option className="py-2" value="80">
                    80
                  </option>
                  <option className="py-2" value="79">
                    79
                  </option>
                  <option className="py-2" value="78">
                    78
                  </option>
                  <option className="py-2" value="77">
                    77
                  </option>
                  <option className="py-2" value="76">
                    76
                  </option>
                  <option className="py-2" value="75">
                    75
                  </option>
                  <option className="py-2" value="74">
                    74
                  </option>
                  <option className="py-2" value="73">
                    73
                  </option>
                  <option className="py-2" value="72">
                    72
                  </option>
                  <option className="py-2" value="71">
                    71
                  </option>
                  <option className="py-2" value="70">
                    70
                  </option>
                  <option className="py-2" value="69">
                    69
                  </option>
                  <option className="py-2" value="68">
                    68
                  </option>
                  <option className="py-2" value="67">
                    67
                  </option>
                  <option className="py-2" value="66">
                    66
                  </option>
                  <option className="py-2" value="65">
                    65
                  </option>
                  <option className="py-2" value="64">
                    64
                  </option>
                  <option className="py-2" value="63">
                    63
                  </option>
                  <option className="py-2" value="62">
                    62
                  </option>
                  <option className="py-2" value="61">
                    61
                  </option>
                  <option className="py-2" value="60">
                    60
                  </option>
                  <option className="py-2" value="59">
                    59
                  </option>
                  <option className="py-2" value="58">
                    58
                  </option>
                  <option className="py-2" value="57">
                    57
                  </option>
                  <option className="py-2" value="56">
                    56
                  </option>
                  <option className="py-2" value="55">
                    55
                  </option>
                  <option className="py-2" value="54">
                    54
                  </option>
                  <option className="py-2" value="53">
                    53
                  </option>
                  <option className="py-2" value="52">
                    52
                  </option>
                  <option className="py-2" value="51">
                    51
                  </option>
                  <option className="py-2" value="50">
                    50
                  </option>
                  <option className="py-2" value="49">
                    49
                  </option>
                  <option className="py-2" value="48">
                    48
                  </option>
                  <option className="py-2" value="47">
                    47
                  </option>
                  <option className="py-2" value="46">
                    46
                  </option>
                  <option className="py-2" value="45">
                    45
                  </option>
                  <option className="py-2" value="44">
                    44
                  </option>
                  <option className="py-2" value="43">
                    43
                  </option>
                  <option className="py-2" value="42">
                    42
                  </option>
                  <option className="py-2" value="41">
                    41
                  </option>
                  <option className="py-2" value="40">
                    40
                  </option>
                  <option className="py-2" value="39">
                    39
                  </option>
                  <option className="py-2" value="38">
                    38
                  </option>
                  <option className="py-2" value="37">
                    37
                  </option>
                  <option className="py-2" value="36">
                    36
                  </option>
                  <option className="py-2" value="35">
                    35
                  </option>
                  <option className="py-2" value="34">
                    34
                  </option>
                  <option className="py-2" value="33">
                    33
                  </option>
                  <option className="py-2" value="32">
                    32
                  </option>
                  <option className="py-2" value="31">
                    31
                  </option>
                  <option className="py-2" value="30">
                    30
                  </option>
                  <option className="py-2" value="29">
                    29
                  </option>
                  <option className="py-2" value="28">
                    28
                  </option>
                  <option className="py-2" value="27">
                    27
                  </option>
                  <option className="py-2" value="26">
                    26
                  </option>
                  <option className="py-2" value="25">
                    25
                  </option>
                  <option className="py-2" value="24">
                    24
                  </option>
                  <option className="py-2" value="23">
                    23
                  </option>
                  <option className="py-2" value="22">
                    22
                  </option>
                  <option className="py-2" value="21">
                    21
                  </option>
                  <option className="py-2" value="20">
                    20
                  </option>
                  <option className="py-2" value="19">
                    19
                  </option>
                  <option className="py-2" value="18">
                    18
                  </option>
                  <option className="py-2" value="17">
                    17
                  </option>
                  <option className="py-2" value="16">
                    16
                  </option>
                  <option className="py-2" value="15">
                    15
                  </option>
                  <option className="py-2" value="14">
                    14
                  </option>
                  <option className="py-2" value="13">
                    13
                  </option>
                  <option className="py-2" value="12">
                    12
                  </option>
                  <option className="py-2" value="11">
                    11
                  </option>
                  <option className="py-2" value="10">
                    10
                  </option>
                  <option className="py-2" value="9">
                    9
                  </option>
                  <option className="py-2" value="8">
                    8
                  </option>
                  <option className="py-2" value="7">
                    7
                  </option>
                  <option className="py-2" value="6">
                    6
                  </option>
                  <option className="py-2" value="5">
                    5
                  </option>
                  <option className="py-2" value="4">
                    4
                  </option>
                  <option className="py-2" value="3">
                    3
                  </option>
                  <option className="py-2" value="2">
                    2
                  </option>
                  <option className="py-2" value="1">
                    1
                  </option>
                  <option className="py-2" value="0">
                    0
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <label className="mb text-md text-[#34FEF8] font-bold uppercase">
              Aggression
            </label>
            <br />
            <div
              className="z-[1000]"
              //  style={{transform: 'translate(-50%, -50%)'}}
            >
              <div className="rounded-lg border-[#34FEF8] px-6">
                <select
                  onChange={(e) => {
                    // selectedClass();
                    setAggression(e.target.value);
                  }}
                  className="rounder resize-none w-full h-[6rem] bg-[#01112B] text-base border-[5px] border-[#34FEF8] text-[#34FEF8] mb-2 mt-2 p-3 pl-4 pt-0 placeholder-opacity-60 placeholder-[#34FEF8]"
                >
                  <option
                    value="Select a Category"
                    selected
                    className="block"
                    disabled
                  >
                    Select a rating
                  </option>
                  <option className="py-2" value="99">
                    99
                  </option>
                  <option className="py-2" value="98">
                    98
                  </option>
                  <option className="py-2" value="97">
                    97
                  </option>
                  <option className="py-2" value="96">
                    96
                  </option>
                  <option className="py-2" value="95">
                    95
                  </option>
                  <option className="py-2" value="94">
                    94
                  </option>
                  <option className="py-2" value="93">
                    93
                  </option>
                  <option className="py-2" value="92">
                    92
                  </option>
                  <option className="py-2" value="91">
                    91
                  </option>
                  <option className="py-2" value="90">
                    90
                  </option>
                  <option className="py-2" value="89">
                    89
                  </option>
                  <option className="py-2" value="88">
                    88
                  </option>
                  <option className="py-2" value="87">
                    87
                  </option>
                  <option className="py-2" value="86">
                    86
                  </option>
                  <option className="py-2" value="85">
                    85
                  </option>
                  <option className="py-2" value="84">
                    84
                  </option>
                  <option className="py-2" value="83">
                    83
                  </option>
                  <option className="py-2" value="82">
                    82
                  </option>
                  <option className="py-2" value="81">
                    81
                  </option>
                  <option className="py-2" value="80">
                    80
                  </option>
                  <option className="py-2" value="79">
                    79
                  </option>
                  <option className="py-2" value="78">
                    78
                  </option>
                  <option className="py-2" value="77">
                    77
                  </option>
                  <option className="py-2" value="76">
                    76
                  </option>
                  <option className="py-2" value="75">
                    75
                  </option>
                  <option className="py-2" value="74">
                    74
                  </option>
                  <option className="py-2" value="73">
                    73
                  </option>
                  <option className="py-2" value="72">
                    72
                  </option>
                  <option className="py-2" value="71">
                    71
                  </option>
                  <option className="py-2" value="70">
                    70
                  </option>
                  <option className="py-2" value="69">
                    69
                  </option>
                  <option className="py-2" value="68">
                    68
                  </option>
                  <option className="py-2" value="67">
                    67
                  </option>
                  <option className="py-2" value="66">
                    66
                  </option>
                  <option className="py-2" value="65">
                    65
                  </option>
                  <option className="py-2" value="64">
                    64
                  </option>
                  <option className="py-2" value="63">
                    63
                  </option>
                  <option className="py-2" value="62">
                    62
                  </option>
                  <option className="py-2" value="61">
                    61
                  </option>
                  <option className="py-2" value="60">
                    60
                  </option>
                  <option className="py-2" value="59">
                    59
                  </option>
                  <option className="py-2" value="58">
                    58
                  </option>
                  <option className="py-2" value="57">
                    57
                  </option>
                  <option className="py-2" value="56">
                    56
                  </option>
                  <option className="py-2" value="55">
                    55
                  </option>
                  <option className="py-2" value="54">
                    54
                  </option>
                  <option className="py-2" value="53">
                    53
                  </option>
                  <option className="py-2" value="52">
                    52
                  </option>
                  <option className="py-2" value="51">
                    51
                  </option>
                  <option className="py-2" value="50">
                    50
                  </option>
                  <option className="py-2" value="49">
                    49
                  </option>
                  <option className="py-2" value="48">
                    48
                  </option>
                  <option className="py-2" value="47">
                    47
                  </option>
                  <option className="py-2" value="46">
                    46
                  </option>
                  <option className="py-2" value="45">
                    45
                  </option>
                  <option className="py-2" value="44">
                    44
                  </option>
                  <option className="py-2" value="43">
                    43
                  </option>
                  <option className="py-2" value="42">
                    42
                  </option>
                  <option className="py-2" value="41">
                    41
                  </option>
                  <option className="py-2" value="40">
                    40
                  </option>
                  <option className="py-2" value="39">
                    39
                  </option>
                  <option className="py-2" value="38">
                    38
                  </option>
                  <option className="py-2" value="37">
                    37
                  </option>
                  <option className="py-2" value="36">
                    36
                  </option>
                  <option className="py-2" value="35">
                    35
                  </option>
                  <option className="py-2" value="34">
                    34
                  </option>
                  <option className="py-2" value="33">
                    33
                  </option>
                  <option className="py-2" value="32">
                    32
                  </option>
                  <option className="py-2" value="31">
                    31
                  </option>
                  <option className="py-2" value="30">
                    30
                  </option>
                  <option className="py-2" value="29">
                    29
                  </option>
                  <option className="py-2" value="28">
                    28
                  </option>
                  <option className="py-2" value="27">
                    27
                  </option>
                  <option className="py-2" value="26">
                    26
                  </option>
                  <option className="py-2" value="25">
                    25
                  </option>
                  <option className="py-2" value="24">
                    24
                  </option>
                  <option className="py-2" value="23">
                    23
                  </option>
                  <option className="py-2" value="22">
                    22
                  </option>
                  <option className="py-2" value="21">
                    21
                  </option>
                  <option className="py-2" value="20">
                    20
                  </option>
                  <option className="py-2" value="19">
                    19
                  </option>
                  <option className="py-2" value="18">
                    18
                  </option>
                  <option className="py-2" value="17">
                    17
                  </option>
                  <option className="py-2" value="16">
                    16
                  </option>
                  <option className="py-2" value="15">
                    15
                  </option>
                  <option className="py-2" value="14">
                    14
                  </option>
                  <option className="py-2" value="13">
                    13
                  </option>
                  <option className="py-2" value="12">
                    12
                  </option>
                  <option className="py-2" value="11">
                    11
                  </option>
                  <option className="py-2" value="10">
                    10
                  </option>
                  <option className="py-2" value="9">
                    9
                  </option>
                  <option className="py-2" value="8">
                    8
                  </option>
                  <option className="py-2" value="7">
                    7
                  </option>
                  <option className="py-2" value="6">
                    6
                  </option>
                  <option className="py-2" value="5">
                    5
                  </option>
                  <option className="py-2" value="4">
                    4
                  </option>
                  <option className="py-2" value="3">
                    3
                  </option>
                  <option className="py-2" value="2">
                    2
                  </option>
                  <option className="py-2" value="1">
                    1
                  </option>
                  <option className="py-2" value="0">
                    0
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <label className="mb text-md text-[#34FEF8] font-bold uppercase">
              Agility
            </label>
            <br />
            <div
              className="z-[1000]"
              //  style={{transform: 'translate(-50%, -50%)'}}
            >
              <div className="rounded-lg border-[#34FEF8] px-6">
                <select
                  onChange={(e) => {
                    // selectedClass();
                    setAgility(e.target.value);
                  }}
                  className="rounder resize-none w-full h-[6rem] bg-[#01112B] text-base border-[5px] border-[#34FEF8] text-[#34FEF8] mb-2 mt-2 p-3 pl-4 pt-0 placeholder-opacity-60 placeholder-[#34FEF8]"
                >
                  <option
                    value="Select a Category"
                    selected
                    className="block"
                    disabled
                  >
                    Select a rating
                  </option>
                  <option className="py-2" value="99">
                    99
                  </option>
                  <option className="py-2" value="98">
                    98
                  </option>
                  <option className="py-2" value="97">
                    97
                  </option>
                  <option className="py-2" value="96">
                    96
                  </option>
                  <option className="py-2" value="95">
                    95
                  </option>
                  <option className="py-2" value="94">
                    94
                  </option>
                  <option className="py-2" value="93">
                    93
                  </option>
                  <option className="py-2" value="92">
                    92
                  </option>
                  <option className="py-2" value="91">
                    91
                  </option>
                  <option className="py-2" value="90">
                    90
                  </option>
                  <option className="py-2" value="89">
                    89
                  </option>
                  <option className="py-2" value="88">
                    88
                  </option>
                  <option className="py-2" value="87">
                    87
                  </option>
                  <option className="py-2" value="86">
                    86
                  </option>
                  <option className="py-2" value="85">
                    85
                  </option>
                  <option className="py-2" value="84">
                    84
                  </option>
                  <option className="py-2" value="83">
                    83
                  </option>
                  <option className="py-2" value="82">
                    82
                  </option>
                  <option className="py-2" value="81">
                    81
                  </option>
                  <option className="py-2" value="80">
                    80
                  </option>
                  <option className="py-2" value="79">
                    79
                  </option>
                  <option className="py-2" value="78">
                    78
                  </option>
                  <option className="py-2" value="77">
                    77
                  </option>
                  <option className="py-2" value="76">
                    76
                  </option>
                  <option className="py-2" value="75">
                    75
                  </option>
                  <option className="py-2" value="74">
                    74
                  </option>
                  <option className="py-2" value="73">
                    73
                  </option>
                  <option className="py-2" value="72">
                    72
                  </option>
                  <option className="py-2" value="71">
                    71
                  </option>
                  <option className="py-2" value="70">
                    70
                  </option>
                  <option className="py-2" value="69">
                    69
                  </option>
                  <option className="py-2" value="68">
                    68
                  </option>
                  <option className="py-2" value="67">
                    67
                  </option>
                  <option className="py-2" value="66">
                    66
                  </option>
                  <option className="py-2" value="65">
                    65
                  </option>
                  <option className="py-2" value="64">
                    64
                  </option>
                  <option className="py-2" value="63">
                    63
                  </option>
                  <option className="py-2" value="62">
                    62
                  </option>
                  <option className="py-2" value="61">
                    61
                  </option>
                  <option className="py-2" value="60">
                    60
                  </option>
                  <option className="py-2" value="59">
                    59
                  </option>
                  <option className="py-2" value="58">
                    58
                  </option>
                  <option className="py-2" value="57">
                    57
                  </option>
                  <option className="py-2" value="56">
                    56
                  </option>
                  <option className="py-2" value="55">
                    55
                  </option>
                  <option className="py-2" value="54">
                    54
                  </option>
                  <option className="py-2" value="53">
                    53
                  </option>
                  <option className="py-2" value="52">
                    52
                  </option>
                  <option className="py-2" value="51">
                    51
                  </option>
                  <option className="py-2" value="50">
                    50
                  </option>
                  <option className="py-2" value="49">
                    49
                  </option>
                  <option className="py-2" value="48">
                    48
                  </option>
                  <option className="py-2" value="47">
                    47
                  </option>
                  <option className="py-2" value="46">
                    46
                  </option>
                  <option className="py-2" value="45">
                    45
                  </option>
                  <option className="py-2" value="44">
                    44
                  </option>
                  <option className="py-2" value="43">
                    43
                  </option>
                  <option className="py-2" value="42">
                    42
                  </option>
                  <option className="py-2" value="41">
                    41
                  </option>
                  <option className="py-2" value="40">
                    40
                  </option>
                  <option className="py-2" value="39">
                    39
                  </option>
                  <option className="py-2" value="38">
                    38
                  </option>
                  <option className="py-2" value="37">
                    37
                  </option>
                  <option className="py-2" value="36">
                    36
                  </option>
                  <option className="py-2" value="35">
                    35
                  </option>
                  <option className="py-2" value="34">
                    34
                  </option>
                  <option className="py-2" value="33">
                    33
                  </option>
                  <option className="py-2" value="32">
                    32
                  </option>
                  <option className="py-2" value="31">
                    31
                  </option>
                  <option className="py-2" value="30">
                    30
                  </option>
                  <option className="py-2" value="29">
                    29
                  </option>
                  <option className="py-2" value="28">
                    28
                  </option>
                  <option className="py-2" value="27">
                    27
                  </option>
                  <option className="py-2" value="26">
                    26
                  </option>
                  <option className="py-2" value="25">
                    25
                  </option>
                  <option className="py-2" value="24">
                    24
                  </option>
                  <option className="py-2" value="23">
                    23
                  </option>
                  <option className="py-2" value="22">
                    22
                  </option>
                  <option className="py-2" value="21">
                    21
                  </option>
                  <option className="py-2" value="20">
                    20
                  </option>
                  <option className="py-2" value="19">
                    19
                  </option>
                  <option className="py-2" value="18">
                    18
                  </option>
                  <option className="py-2" value="17">
                    17
                  </option>
                  <option className="py-2" value="16">
                    16
                  </option>
                  <option className="py-2" value="15">
                    15
                  </option>
                  <option className="py-2" value="14">
                    14
                  </option>
                  <option className="py-2" value="13">
                    13
                  </option>
                  <option className="py-2" value="12">
                    12
                  </option>
                  <option className="py-2" value="11">
                    11
                  </option>
                  <option className="py-2" value="10">
                    10
                  </option>
                  <option className="py-2" value="9">
                    9
                  </option>
                  <option className="py-2" value="8">
                    8
                  </option>
                  <option className="py-2" value="7">
                    7
                  </option>
                  <option className="py-2" value="6">
                    6
                  </option>
                  <option className="py-2" value="5">
                    5
                  </option>
                  <option className="py-2" value="4">
                    4
                  </option>
                  <option className="py-2" value="3">
                    3
                  </option>
                  <option className="py-2" value="2">
                    2
                  </option>
                  <option className="py-2" value="1">
                    1
                  </option>
                  <option className="py-2" value="0">
                    0
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <label className="mb text-md text-[#34FEF8] font-bold uppercase">
              Attacking Position
            </label>
            <br />
            <div
              className="z-[1000]"
              //  style={{transform: 'translate(-50%, -50%)'}}
            >
              <div className="rounded-lg border-[#34FEF8] px-6">
                <select
                  onChange={(e) => {
                    // selectedClass();
                    setAttackingPosition(e.target.value);
                  }}
                  className="rounder resize-none w-full h-[6rem] bg-[#01112B] text-base border-[5px] border-[#34FEF8] text-[#34FEF8] mb-2 mt-2 p-3 pl-4 pt-0 placeholder-opacity-60 placeholder-[#34FEF8]"
                >
                  <option
                    value="Select a Category"
                    selected
                    className="block"
                    disabled
                  >
                    Select a rating
                  </option>
                  <option className="py-2" value="99">
                    99
                  </option>
                  <option className="py-2" value="98">
                    98
                  </option>
                  <option className="py-2" value="97">
                    97
                  </option>
                  <option className="py-2" value="96">
                    96
                  </option>
                  <option className="py-2" value="95">
                    95
                  </option>
                  <option className="py-2" value="94">
                    94
                  </option>
                  <option className="py-2" value="93">
                    93
                  </option>
                  <option className="py-2" value="92">
                    92
                  </option>
                  <option className="py-2" value="91">
                    91
                  </option>
                  <option className="py-2" value="90">
                    90
                  </option>
                  <option className="py-2" value="89">
                    89
                  </option>
                  <option className="py-2" value="88">
                    88
                  </option>
                  <option className="py-2" value="87">
                    87
                  </option>
                  <option className="py-2" value="86">
                    86
                  </option>
                  <option className="py-2" value="85">
                    85
                  </option>
                  <option className="py-2" value="84">
                    84
                  </option>
                  <option className="py-2" value="83">
                    83
                  </option>
                  <option className="py-2" value="82">
                    82
                  </option>
                  <option className="py-2" value="81">
                    81
                  </option>
                  <option className="py-2" value="80">
                    80
                  </option>
                  <option className="py-2" value="79">
                    79
                  </option>
                  <option className="py-2" value="78">
                    78
                  </option>
                  <option className="py-2" value="77">
                    77
                  </option>
                  <option className="py-2" value="76">
                    76
                  </option>
                  <option className="py-2" value="75">
                    75
                  </option>
                  <option className="py-2" value="74">
                    74
                  </option>
                  <option className="py-2" value="73">
                    73
                  </option>
                  <option className="py-2" value="72">
                    72
                  </option>
                  <option className="py-2" value="71">
                    71
                  </option>
                  <option className="py-2" value="70">
                    70
                  </option>
                  <option className="py-2" value="69">
                    69
                  </option>
                  <option className="py-2" value="68">
                    68
                  </option>
                  <option className="py-2" value="67">
                    67
                  </option>
                  <option className="py-2" value="66">
                    66
                  </option>
                  <option className="py-2" value="65">
                    65
                  </option>
                  <option className="py-2" value="64">
                    64
                  </option>
                  <option className="py-2" value="63">
                    63
                  </option>
                  <option className="py-2" value="62">
                    62
                  </option>
                  <option className="py-2" value="61">
                    61
                  </option>
                  <option className="py-2" value="60">
                    60
                  </option>
                  <option className="py-2" value="59">
                    59
                  </option>
                  <option className="py-2" value="58">
                    58
                  </option>
                  <option className="py-2" value="57">
                    57
                  </option>
                  <option className="py-2" value="56">
                    56
                  </option>
                  <option className="py-2" value="55">
                    55
                  </option>
                  <option className="py-2" value="54">
                    54
                  </option>
                  <option className="py-2" value="53">
                    53
                  </option>
                  <option className="py-2" value="52">
                    52
                  </option>
                  <option className="py-2" value="51">
                    51
                  </option>
                  <option className="py-2" value="50">
                    50
                  </option>
                  <option className="py-2" value="49">
                    49
                  </option>
                  <option className="py-2" value="48">
                    48
                  </option>
                  <option className="py-2" value="47">
                    47
                  </option>
                  <option className="py-2" value="46">
                    46
                  </option>
                  <option className="py-2" value="45">
                    45
                  </option>
                  <option className="py-2" value="44">
                    44
                  </option>
                  <option className="py-2" value="43">
                    43
                  </option>
                  <option className="py-2" value="42">
                    42
                  </option>
                  <option className="py-2" value="41">
                    41
                  </option>
                  <option className="py-2" value="40">
                    40
                  </option>
                  <option className="py-2" value="39">
                    39
                  </option>
                  <option className="py-2" value="38">
                    38
                  </option>
                  <option className="py-2" value="37">
                    37
                  </option>
                  <option className="py-2" value="36">
                    36
                  </option>
                  <option className="py-2" value="35">
                    35
                  </option>
                  <option className="py-2" value="34">
                    34
                  </option>
                  <option className="py-2" value="33">
                    33
                  </option>
                  <option className="py-2" value="32">
                    32
                  </option>
                  <option className="py-2" value="31">
                    31
                  </option>
                  <option className="py-2" value="30">
                    30
                  </option>
                  <option className="py-2" value="29">
                    29
                  </option>
                  <option className="py-2" value="28">
                    28
                  </option>
                  <option className="py-2" value="27">
                    27
                  </option>
                  <option className="py-2" value="26">
                    26
                  </option>
                  <option className="py-2" value="25">
                    25
                  </option>
                  <option className="py-2" value="24">
                    24
                  </option>
                  <option className="py-2" value="23">
                    23
                  </option>
                  <option className="py-2" value="22">
                    22
                  </option>
                  <option className="py-2" value="21">
                    21
                  </option>
                  <option className="py-2" value="20">
                    20
                  </option>
                  <option className="py-2" value="19">
                    19
                  </option>
                  <option className="py-2" value="18">
                    18
                  </option>
                  <option className="py-2" value="17">
                    17
                  </option>
                  <option className="py-2" value="16">
                    16
                  </option>
                  <option className="py-2" value="15">
                    15
                  </option>
                  <option className="py-2" value="14">
                    14
                  </option>
                  <option className="py-2" value="13">
                    13
                  </option>
                  <option className="py-2" value="12">
                    12
                  </option>
                  <option className="py-2" value="11">
                    11
                  </option>
                  <option className="py-2" value="10">
                    10
                  </option>
                  <option className="py-2" value="9">
                    9
                  </option>
                  <option className="py-2" value="8">
                    8
                  </option>
                  <option className="py-2" value="7">
                    7
                  </option>
                  <option className="py-2" value="6">
                    6
                  </option>
                  <option className="py-2" value="5">
                    5
                  </option>
                  <option className="py-2" value="4">
                    4
                  </option>
                  <option className="py-2" value="3">
                    3
                  </option>
                  <option className="py-2" value="2">
                    2
                  </option>
                  <option className="py-2" value="1">
                    1
                  </option>
                  <option className="py-2" value="0">
                    0
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <label className="mb text-md text-[#34FEF8] font-bold uppercase">
              Awareness
            </label>
            <br />
            <div
              className="z-[1000]"
              //  style={{transform: 'translate(-50%, -50%)'}}
            >
              <div className="rounded-lg border-[#34FEF8] px-6">
                <select
                  onChange={(e) => {
                    // selectedClass();
                    setAwareness(e.target.value);
                  }}
                  className="rounder resize-none w-full h-[6rem] bg-[#01112B] text-base border-[5px] border-[#34FEF8] text-[#34FEF8] mb-2 mt-2 p-3 pl-4 pt-0 placeholder-opacity-60 placeholder-[#34FEF8]"
                >
                  <option
                    value="Select a Category"
                    selected
                    className="block"
                    disabled
                  >
                    Select a rating
                  </option>
                  <option className="py-2" value="99">
                    99
                  </option>
                  <option className="py-2" value="98">
                    98
                  </option>
                  <option className="py-2" value="97">
                    97
                  </option>
                  <option className="py-2" value="96">
                    96
                  </option>
                  <option className="py-2" value="95">
                    95
                  </option>
                  <option className="py-2" value="94">
                    94
                  </option>
                  <option className="py-2" value="93">
                    93
                  </option>
                  <option className="py-2" value="92">
                    92
                  </option>
                  <option className="py-2" value="91">
                    91
                  </option>
                  <option className="py-2" value="90">
                    90
                  </option>
                  <option className="py-2" value="89">
                    89
                  </option>
                  <option className="py-2" value="88">
                    88
                  </option>
                  <option className="py-2" value="87">
                    87
                  </option>
                  <option className="py-2" value="86">
                    86
                  </option>
                  <option className="py-2" value="85">
                    85
                  </option>
                  <option className="py-2" value="84">
                    84
                  </option>
                  <option className="py-2" value="83">
                    83
                  </option>
                  <option className="py-2" value="82">
                    82
                  </option>
                  <option className="py-2" value="81">
                    81
                  </option>
                  <option className="py-2" value="80">
                    80
                  </option>
                  <option className="py-2" value="79">
                    79
                  </option>
                  <option className="py-2" value="78">
                    78
                  </option>
                  <option className="py-2" value="77">
                    77
                  </option>
                  <option className="py-2" value="76">
                    76
                  </option>
                  <option className="py-2" value="75">
                    75
                  </option>
                  <option className="py-2" value="74">
                    74
                  </option>
                  <option className="py-2" value="73">
                    73
                  </option>
                  <option className="py-2" value="72">
                    72
                  </option>
                  <option className="py-2" value="71">
                    71
                  </option>
                  <option className="py-2" value="70">
                    70
                  </option>
                  <option className="py-2" value="69">
                    69
                  </option>
                  <option className="py-2" value="68">
                    68
                  </option>
                  <option className="py-2" value="67">
                    67
                  </option>
                  <option className="py-2" value="66">
                    66
                  </option>
                  <option className="py-2" value="65">
                    65
                  </option>
                  <option className="py-2" value="64">
                    64
                  </option>
                  <option className="py-2" value="63">
                    63
                  </option>
                  <option className="py-2" value="62">
                    62
                  </option>
                  <option className="py-2" value="61">
                    61
                  </option>
                  <option className="py-2" value="60">
                    60
                  </option>
                  <option className="py-2" value="59">
                    59
                  </option>
                  <option className="py-2" value="58">
                    58
                  </option>
                  <option className="py-2" value="57">
                    57
                  </option>
                  <option className="py-2" value="56">
                    56
                  </option>
                  <option className="py-2" value="55">
                    55
                  </option>
                  <option className="py-2" value="54">
                    54
                  </option>
                  <option className="py-2" value="53">
                    53
                  </option>
                  <option className="py-2" value="52">
                    52
                  </option>
                  <option className="py-2" value="51">
                    51
                  </option>
                  <option className="py-2" value="50">
                    50
                  </option>
                  <option className="py-2" value="49">
                    49
                  </option>
                  <option className="py-2" value="48">
                    48
                  </option>
                  <option className="py-2" value="47">
                    47
                  </option>
                  <option className="py-2" value="46">
                    46
                  </option>
                  <option className="py-2" value="45">
                    45
                  </option>
                  <option className="py-2" value="44">
                    44
                  </option>
                  <option className="py-2" value="43">
                    43
                  </option>
                  <option className="py-2" value="42">
                    42
                  </option>
                  <option className="py-2" value="41">
                    41
                  </option>
                  <option className="py-2" value="40">
                    40
                  </option>
                  <option className="py-2" value="39">
                    39
                  </option>
                  <option className="py-2" value="38">
                    38
                  </option>
                  <option className="py-2" value="37">
                    37
                  </option>
                  <option className="py-2" value="36">
                    36
                  </option>
                  <option className="py-2" value="35">
                    35
                  </option>
                  <option className="py-2" value="34">
                    34
                  </option>
                  <option className="py-2" value="33">
                    33
                  </option>
                  <option className="py-2" value="32">
                    32
                  </option>
                  <option className="py-2" value="31">
                    31
                  </option>
                  <option className="py-2" value="30">
                    30
                  </option>
                  <option className="py-2" value="29">
                    29
                  </option>
                  <option className="py-2" value="28">
                    28
                  </option>
                  <option className="py-2" value="27">
                    27
                  </option>
                  <option className="py-2" value="26">
                    26
                  </option>
                  <option className="py-2" value="25">
                    25
                  </option>
                  <option className="py-2" value="24">
                    24
                  </option>
                  <option className="py-2" value="23">
                    23
                  </option>
                  <option className="py-2" value="22">
                    22
                  </option>
                  <option className="py-2" value="21">
                    21
                  </option>
                  <option className="py-2" value="20">
                    20
                  </option>
                  <option className="py-2" value="19">
                    19
                  </option>
                  <option className="py-2" value="18">
                    18
                  </option>
                  <option className="py-2" value="17">
                    17
                  </option>
                  <option className="py-2" value="16">
                    16
                  </option>
                  <option className="py-2" value="15">
                    15
                  </option>
                  <option className="py-2" value="14">
                    14
                  </option>
                  <option className="py-2" value="13">
                    13
                  </option>
                  <option className="py-2" value="12">
                    12
                  </option>
                  <option className="py-2" value="11">
                    11
                  </option>
                  <option className="py-2" value="10">
                    10
                  </option>
                  <option className="py-2" value="9">
                    9
                  </option>
                  <option className="py-2" value="8">
                    8
                  </option>
                  <option className="py-2" value="7">
                    7
                  </option>
                  <option className="py-2" value="6">
                    6
                  </option>
                  <option className="py-2" value="5">
                    5
                  </option>
                  <option className="py-2" value="4">
                    4
                  </option>
                  <option className="py-2" value="3">
                    3
                  </option>
                  <option className="py-2" value="2">
                    2
                  </option>
                  <option className="py-2" value="1">
                    1
                  </option>
                  <option className="py-2" value="0">
                    0
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <label className="mb text-md text-[#34FEF8] font-bold uppercase">
              Balance
            </label>
            <br />
            <div
              className="z-[1000]"
              //  style={{transform: 'translate(-50%, -50%)'}}
            >
              <div className="rounded-lg border-[#34FEF8] px-6">
                <select
                  onChange={(e) => {
                    // selectedClass();
                    setBalance(e.target.value);
                  }}
                  className="rounder resize-none w-full h-[6rem] bg-[#01112B] text-base border-[5px] border-[#34FEF8] text-[#34FEF8] mb-2 mt-2 p-3 pl-4 pt-0 placeholder-opacity-60 placeholder-[#34FEF8]"
                >
                  <option
                    value="Select a Category"
                    selected
                    className="block"
                    disabled
                  >
                    Select a rating
                  </option>
                  <option className="py-2" value="99">
                    99
                  </option>
                  <option className="py-2" value="98">
                    98
                  </option>
                  <option className="py-2" value="97">
                    97
                  </option>
                  <option className="py-2" value="96">
                    96
                  </option>
                  <option className="py-2" value="95">
                    95
                  </option>
                  <option className="py-2" value="94">
                    94
                  </option>
                  <option className="py-2" value="93">
                    93
                  </option>
                  <option className="py-2" value="92">
                    92
                  </option>
                  <option className="py-2" value="91">
                    91
                  </option>
                  <option className="py-2" value="90">
                    90
                  </option>
                  <option className="py-2" value="89">
                    89
                  </option>
                  <option className="py-2" value="88">
                    88
                  </option>
                  <option className="py-2" value="87">
                    87
                  </option>
                  <option className="py-2" value="86">
                    86
                  </option>
                  <option className="py-2" value="85">
                    85
                  </option>
                  <option className="py-2" value="84">
                    84
                  </option>
                  <option className="py-2" value="83">
                    83
                  </option>
                  <option className="py-2" value="82">
                    82
                  </option>
                  <option className="py-2" value="81">
                    81
                  </option>
                  <option className="py-2" value="80">
                    80
                  </option>
                  <option className="py-2" value="79">
                    79
                  </option>
                  <option className="py-2" value="78">
                    78
                  </option>
                  <option className="py-2" value="77">
                    77
                  </option>
                  <option className="py-2" value="76">
                    76
                  </option>
                  <option className="py-2" value="75">
                    75
                  </option>
                  <option className="py-2" value="74">
                    74
                  </option>
                  <option className="py-2" value="73">
                    73
                  </option>
                  <option className="py-2" value="72">
                    72
                  </option>
                  <option className="py-2" value="71">
                    71
                  </option>
                  <option className="py-2" value="70">
                    70
                  </option>
                  <option className="py-2" value="69">
                    69
                  </option>
                  <option className="py-2" value="68">
                    68
                  </option>
                  <option className="py-2" value="67">
                    67
                  </option>
                  <option className="py-2" value="66">
                    66
                  </option>
                  <option className="py-2" value="65">
                    65
                  </option>
                  <option className="py-2" value="64">
                    64
                  </option>
                  <option className="py-2" value="63">
                    63
                  </option>
                  <option className="py-2" value="62">
                    62
                  </option>
                  <option className="py-2" value="61">
                    61
                  </option>
                  <option className="py-2" value="60">
                    60
                  </option>
                  <option className="py-2" value="59">
                    59
                  </option>
                  <option className="py-2" value="58">
                    58
                  </option>
                  <option className="py-2" value="57">
                    57
                  </option>
                  <option className="py-2" value="56">
                    56
                  </option>
                  <option className="py-2" value="55">
                    55
                  </option>
                  <option className="py-2" value="54">
                    54
                  </option>
                  <option className="py-2" value="53">
                    53
                  </option>
                  <option className="py-2" value="52">
                    52
                  </option>
                  <option className="py-2" value="51">
                    51
                  </option>
                  <option className="py-2" value="50">
                    50
                  </option>
                  <option className="py-2" value="49">
                    49
                  </option>
                  <option className="py-2" value="48">
                    48
                  </option>
                  <option className="py-2" value="47">
                    47
                  </option>
                  <option className="py-2" value="46">
                    46
                  </option>
                  <option className="py-2" value="45">
                    45
                  </option>
                  <option className="py-2" value="44">
                    44
                  </option>
                  <option className="py-2" value="43">
                    43
                  </option>
                  <option className="py-2" value="42">
                    42
                  </option>
                  <option className="py-2" value="41">
                    41
                  </option>
                  <option className="py-2" value="40">
                    40
                  </option>
                  <option className="py-2" value="39">
                    39
                  </option>
                  <option className="py-2" value="38">
                    38
                  </option>
                  <option className="py-2" value="37">
                    37
                  </option>
                  <option className="py-2" value="36">
                    36
                  </option>
                  <option className="py-2" value="35">
                    35
                  </option>
                  <option className="py-2" value="34">
                    34
                  </option>
                  <option className="py-2" value="33">
                    33
                  </option>
                  <option className="py-2" value="32">
                    32
                  </option>
                  <option className="py-2" value="31">
                    31
                  </option>
                  <option className="py-2" value="30">
                    30
                  </option>
                  <option className="py-2" value="29">
                    29
                  </option>
                  <option className="py-2" value="28">
                    28
                  </option>
                  <option className="py-2" value="27">
                    27
                  </option>
                  <option className="py-2" value="26">
                    26
                  </option>
                  <option className="py-2" value="25">
                    25
                  </option>
                  <option className="py-2" value="24">
                    24
                  </option>
                  <option className="py-2" value="23">
                    23
                  </option>
                  <option className="py-2" value="22">
                    22
                  </option>
                  <option className="py-2" value="21">
                    21
                  </option>
                  <option className="py-2" value="20">
                    20
                  </option>
                  <option className="py-2" value="19">
                    19
                  </option>
                  <option className="py-2" value="18">
                    18
                  </option>
                  <option className="py-2" value="17">
                    17
                  </option>
                  <option className="py-2" value="16">
                    16
                  </option>
                  <option className="py-2" value="15">
                    15
                  </option>
                  <option className="py-2" value="14">
                    14
                  </option>
                  <option className="py-2" value="13">
                    13
                  </option>
                  <option className="py-2" value="12">
                    12
                  </option>
                  <option className="py-2" value="11">
                    11
                  </option>
                  <option className="py-2" value="10">
                    10
                  </option>
                  <option className="py-2" value="9">
                    9
                  </option>
                  <option className="py-2" value="8">
                    8
                  </option>
                  <option className="py-2" value="7">
                    7
                  </option>
                  <option className="py-2" value="6">
                    6
                  </option>
                  <option className="py-2" value="5">
                    5
                  </option>
                  <option className="py-2" value="4">
                    4
                  </option>
                  <option className="py-2" value="3">
                    3
                  </option>
                  <option className="py-2" value="2">
                    2
                  </option>
                  <option className="py-2" value="1">
                    1
                  </option>
                  <option className="py-2" value="0">
                    0
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <label className="mb text-md text-[#34FEF8] font-bold uppercase">
              Ball Control
            </label>
            <br />
            <div
              className="z-[1000]"
              //  style={{transform: 'translate(-50%, -50%)'}}
            >
              <div className="rounded-lg border-[#34FEF8] px-6">
                <select
                  onChange={(e) => {
                    // selectedClass();
                    setBallControl(e.target.value);
                  }}
                  className="rounder resize-none w-full h-[6rem] bg-[#01112B] text-base border-[5px] border-[#34FEF8] text-[#34FEF8] mb-2 mt-2 p-3 pl-4 pt-0 placeholder-opacity-60 placeholder-[#34FEF8]"
                >
                  <option
                    value="Select a Category"
                    selected
                    className="block"
                    disabled
                  >
                    Select a rating
                  </option>
                  <option className="py-2" value="99">
                    99
                  </option>
                  <option className="py-2" value="98">
                    98
                  </option>
                  <option className="py-2" value="97">
                    97
                  </option>
                  <option className="py-2" value="96">
                    96
                  </option>
                  <option className="py-2" value="95">
                    95
                  </option>
                  <option className="py-2" value="94">
                    94
                  </option>
                  <option className="py-2" value="93">
                    93
                  </option>
                  <option className="py-2" value="92">
                    92
                  </option>
                  <option className="py-2" value="91">
                    91
                  </option>
                  <option className="py-2" value="90">
                    90
                  </option>
                  <option className="py-2" value="89">
                    89
                  </option>
                  <option className="py-2" value="88">
                    88
                  </option>
                  <option className="py-2" value="87">
                    87
                  </option>
                  <option className="py-2" value="86">
                    86
                  </option>
                  <option className="py-2" value="85">
                    85
                  </option>
                  <option className="py-2" value="84">
                    84
                  </option>
                  <option className="py-2" value="83">
                    83
                  </option>
                  <option className="py-2" value="82">
                    82
                  </option>
                  <option className="py-2" value="81">
                    81
                  </option>
                  <option className="py-2" value="80">
                    80
                  </option>
                  <option className="py-2" value="79">
                    79
                  </option>
                  <option className="py-2" value="78">
                    78
                  </option>
                  <option className="py-2" value="77">
                    77
                  </option>
                  <option className="py-2" value="76">
                    76
                  </option>
                  <option className="py-2" value="75">
                    75
                  </option>
                  <option className="py-2" value="74">
                    74
                  </option>
                  <option className="py-2" value="73">
                    73
                  </option>
                  <option className="py-2" value="72">
                    72
                  </option>
                  <option className="py-2" value="71">
                    71
                  </option>
                  <option className="py-2" value="70">
                    70
                  </option>
                  <option className="py-2" value="69">
                    69
                  </option>
                  <option className="py-2" value="68">
                    68
                  </option>
                  <option className="py-2" value="67">
                    67
                  </option>
                  <option className="py-2" value="66">
                    66
                  </option>
                  <option className="py-2" value="65">
                    65
                  </option>
                  <option className="py-2" value="64">
                    64
                  </option>
                  <option className="py-2" value="63">
                    63
                  </option>
                  <option className="py-2" value="62">
                    62
                  </option>
                  <option className="py-2" value="61">
                    61
                  </option>
                  <option className="py-2" value="60">
                    60
                  </option>
                  <option className="py-2" value="59">
                    59
                  </option>
                  <option className="py-2" value="58">
                    58
                  </option>
                  <option className="py-2" value="57">
                    57
                  </option>
                  <option className="py-2" value="56">
                    56
                  </option>
                  <option className="py-2" value="55">
                    55
                  </option>
                  <option className="py-2" value="54">
                    54
                  </option>
                  <option className="py-2" value="53">
                    53
                  </option>
                  <option className="py-2" value="52">
                    52
                  </option>
                  <option className="py-2" value="51">
                    51
                  </option>
                  <option className="py-2" value="50">
                    50
                  </option>
                  <option className="py-2" value="49">
                    49
                  </option>
                  <option className="py-2" value="48">
                    48
                  </option>
                  <option className="py-2" value="47">
                    47
                  </option>
                  <option className="py-2" value="46">
                    46
                  </option>
                  <option className="py-2" value="45">
                    45
                  </option>
                  <option className="py-2" value="44">
                    44
                  </option>
                  <option className="py-2" value="43">
                    43
                  </option>
                  <option className="py-2" value="42">
                    42
                  </option>
                  <option className="py-2" value="41">
                    41
                  </option>
                  <option className="py-2" value="40">
                    40
                  </option>
                  <option className="py-2" value="39">
                    39
                  </option>
                  <option className="py-2" value="38">
                    38
                  </option>
                  <option className="py-2" value="37">
                    37
                  </option>
                  <option className="py-2" value="36">
                    36
                  </option>
                  <option className="py-2" value="35">
                    35
                  </option>
                  <option className="py-2" value="34">
                    34
                  </option>
                  <option className="py-2" value="33">
                    33
                  </option>
                  <option className="py-2" value="32">
                    32
                  </option>
                  <option className="py-2" value="31">
                    31
                  </option>
                  <option className="py-2" value="30">
                    30
                  </option>
                  <option className="py-2" value="29">
                    29
                  </option>
                  <option className="py-2" value="28">
                    28
                  </option>
                  <option className="py-2" value="27">
                    27
                  </option>
                  <option className="py-2" value="26">
                    26
                  </option>
                  <option className="py-2" value="25">
                    25
                  </option>
                  <option className="py-2" value="24">
                    24
                  </option>
                  <option className="py-2" value="23">
                    23
                  </option>
                  <option className="py-2" value="22">
                    22
                  </option>
                  <option className="py-2" value="21">
                    21
                  </option>
                  <option className="py-2" value="20">
                    20
                  </option>
                  <option className="py-2" value="19">
                    19
                  </option>
                  <option className="py-2" value="18">
                    18
                  </option>
                  <option className="py-2" value="17">
                    17
                  </option>
                  <option className="py-2" value="16">
                    16
                  </option>
                  <option className="py-2" value="15">
                    15
                  </option>
                  <option className="py-2" value="14">
                    14
                  </option>
                  <option className="py-2" value="13">
                    13
                  </option>
                  <option className="py-2" value="12">
                    12
                  </option>
                  <option className="py-2" value="11">
                    11
                  </option>
                  <option className="py-2" value="10">
                    10
                  </option>
                  <option className="py-2" value="9">
                    9
                  </option>
                  <option className="py-2" value="8">
                    8
                  </option>
                  <option className="py-2" value="7">
                    7
                  </option>
                  <option className="py-2" value="6">
                    6
                  </option>
                  <option className="py-2" value="5">
                    5
                  </option>
                  <option className="py-2" value="4">
                    4
                  </option>
                  <option className="py-2" value="3">
                    3
                  </option>
                  <option className="py-2" value="2">
                    2
                  </option>
                  <option className="py-2" value="1">
                    1
                  </option>
                  <option className="py-2" value="0">
                    0
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <label className="mb text-md text-[#34FEF8] font-bold uppercase">
              Composure
            </label>
            <br />
            <div
              className="z-[1000]"
              //  style={{transform: 'translate(-50%, -50%)'}}
            >
              <div className="rounded-lg border-[#34FEF8] px-6">
                <select
                  onChange={(e) => {
                    // selectedClass();
                    setComposure(e.target.value);
                  }}
                  className="rounder resize-none w-full h-[6rem] bg-[#01112B] text-base border-[5px] border-[#34FEF8] text-[#34FEF8] mb-2 mt-2 p-3 pl-4 pt-0 placeholder-opacity-60 placeholder-[#34FEF8]"
                >
                  <option
                    value="Select a Category"
                    selected
                    className="block"
                    disabled
                  >
                    Select a rating
                  </option>
                  <option className="py-2" value="99">
                    99
                  </option>
                  <option className="py-2" value="98">
                    98
                  </option>
                  <option className="py-2" value="97">
                    97
                  </option>
                  <option className="py-2" value="96">
                    96
                  </option>
                  <option className="py-2" value="95">
                    95
                  </option>
                  <option className="py-2" value="94">
                    94
                  </option>
                  <option className="py-2" value="93">
                    93
                  </option>
                  <option className="py-2" value="92">
                    92
                  </option>
                  <option className="py-2" value="91">
                    91
                  </option>
                  <option className="py-2" value="90">
                    90
                  </option>
                  <option className="py-2" value="89">
                    89
                  </option>
                  <option className="py-2" value="88">
                    88
                  </option>
                  <option className="py-2" value="87">
                    87
                  </option>
                  <option className="py-2" value="86">
                    86
                  </option>
                  <option className="py-2" value="85">
                    85
                  </option>
                  <option className="py-2" value="84">
                    84
                  </option>
                  <option className="py-2" value="83">
                    83
                  </option>
                  <option className="py-2" value="82">
                    82
                  </option>
                  <option className="py-2" value="81">
                    81
                  </option>
                  <option className="py-2" value="80">
                    80
                  </option>
                  <option className="py-2" value="79">
                    79
                  </option>
                  <option className="py-2" value="78">
                    78
                  </option>
                  <option className="py-2" value="77">
                    77
                  </option>
                  <option className="py-2" value="76">
                    76
                  </option>
                  <option className="py-2" value="75">
                    75
                  </option>
                  <option className="py-2" value="74">
                    74
                  </option>
                  <option className="py-2" value="73">
                    73
                  </option>
                  <option className="py-2" value="72">
                    72
                  </option>
                  <option className="py-2" value="71">
                    71
                  </option>
                  <option className="py-2" value="70">
                    70
                  </option>
                  <option className="py-2" value="69">
                    69
                  </option>
                  <option className="py-2" value="68">
                    68
                  </option>
                  <option className="py-2" value="67">
                    67
                  </option>
                  <option className="py-2" value="66">
                    66
                  </option>
                  <option className="py-2" value="65">
                    65
                  </option>
                  <option className="py-2" value="64">
                    64
                  </option>
                  <option className="py-2" value="63">
                    63
                  </option>
                  <option className="py-2" value="62">
                    62
                  </option>
                  <option className="py-2" value="61">
                    61
                  </option>
                  <option className="py-2" value="60">
                    60
                  </option>
                  <option className="py-2" value="59">
                    59
                  </option>
                  <option className="py-2" value="58">
                    58
                  </option>
                  <option className="py-2" value="57">
                    57
                  </option>
                  <option className="py-2" value="56">
                    56
                  </option>
                  <option className="py-2" value="55">
                    55
                  </option>
                  <option className="py-2" value="54">
                    54
                  </option>
                  <option className="py-2" value="53">
                    53
                  </option>
                  <option className="py-2" value="52">
                    52
                  </option>
                  <option className="py-2" value="51">
                    51
                  </option>
                  <option className="py-2" value="50">
                    50
                  </option>
                  <option className="py-2" value="49">
                    49
                  </option>
                  <option className="py-2" value="48">
                    48
                  </option>
                  <option className="py-2" value="47">
                    47
                  </option>
                  <option className="py-2" value="46">
                    46
                  </option>
                  <option className="py-2" value="45">
                    45
                  </option>
                  <option className="py-2" value="44">
                    44
                  </option>
                  <option className="py-2" value="43">
                    43
                  </option>
                  <option className="py-2" value="42">
                    42
                  </option>
                  <option className="py-2" value="41">
                    41
                  </option>
                  <option className="py-2" value="40">
                    40
                  </option>
                  <option className="py-2" value="39">
                    39
                  </option>
                  <option className="py-2" value="38">
                    38
                  </option>
                  <option className="py-2" value="37">
                    37
                  </option>
                  <option className="py-2" value="36">
                    36
                  </option>
                  <option className="py-2" value="35">
                    35
                  </option>
                  <option className="py-2" value="34">
                    34
                  </option>
                  <option className="py-2" value="33">
                    33
                  </option>
                  <option className="py-2" value="32">
                    32
                  </option>
                  <option className="py-2" value="31">
                    31
                  </option>
                  <option className="py-2" value="30">
                    30
                  </option>
                  <option className="py-2" value="29">
                    29
                  </option>
                  <option className="py-2" value="28">
                    28
                  </option>
                  <option className="py-2" value="27">
                    27
                  </option>
                  <option className="py-2" value="26">
                    26
                  </option>
                  <option className="py-2" value="25">
                    25
                  </option>
                  <option className="py-2" value="24">
                    24
                  </option>
                  <option className="py-2" value="23">
                    23
                  </option>
                  <option className="py-2" value="22">
                    22
                  </option>
                  <option className="py-2" value="21">
                    21
                  </option>
                  <option className="py-2" value="20">
                    20
                  </option>
                  <option className="py-2" value="19">
                    19
                  </option>
                  <option className="py-2" value="18">
                    18
                  </option>
                  <option className="py-2" value="17">
                    17
                  </option>
                  <option className="py-2" value="16">
                    16
                  </option>
                  <option className="py-2" value="15">
                    15
                  </option>
                  <option className="py-2" value="14">
                    14
                  </option>
                  <option className="py-2" value="13">
                    13
                  </option>
                  <option className="py-2" value="12">
                    12
                  </option>
                  <option className="py-2" value="11">
                    11
                  </option>
                  <option className="py-2" value="10">
                    10
                  </option>
                  <option className="py-2" value="9">
                    9
                  </option>
                  <option className="py-2" value="8">
                    8
                  </option>
                  <option className="py-2" value="7">
                    7
                  </option>
                  <option className="py-2" value="6">
                    6
                  </option>
                  <option className="py-2" value="5">
                    5
                  </option>
                  <option className="py-2" value="4">
                    4
                  </option>
                  <option className="py-2" value="3">
                    3
                  </option>
                  <option className="py-2" value="2">
                    2
                  </option>
                  <option className="py-2" value="1">
                    1
                  </option>
                  <option className="py-2" value="0">
                    0
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <label className="mb text-md text-[#34FEF8] font-bold uppercase">
              Crossing
            </label>
            <br />
            <div
              className="z-[1000]"
              //  style={{transform: 'translate(-50%, -50%)'}}
            >
              <div className="rounded-lg border-[#34FEF8] px-6">
                <select
                  onChange={(e) => {
                    // selectedClass();
                    setCrossing(e.target.value);
                  }}
                  className="rounder resize-none w-full h-[6rem] bg-[#01112B] text-base border-[5px] border-[#34FEF8] text-[#34FEF8] mb-2 mt-2 p-3 pl-4 pt-0 placeholder-opacity-60 placeholder-[#34FEF8]"
                >
                  <option
                    value="Select a Category"
                    selected
                    className="block"
                    disabled
                  >
                    Select a rating
                  </option>
                  <option className="py-2" value="99">
                    99
                  </option>
                  <option className="py-2" value="98">
                    98
                  </option>
                  <option className="py-2" value="97">
                    97
                  </option>
                  <option className="py-2" value="96">
                    96
                  </option>
                  <option className="py-2" value="95">
                    95
                  </option>
                  <option className="py-2" value="94">
                    94
                  </option>
                  <option className="py-2" value="93">
                    93
                  </option>
                  <option className="py-2" value="92">
                    92
                  </option>
                  <option className="py-2" value="91">
                    91
                  </option>
                  <option className="py-2" value="90">
                    90
                  </option>
                  <option className="py-2" value="89">
                    89
                  </option>
                  <option className="py-2" value="88">
                    88
                  </option>
                  <option className="py-2" value="87">
                    87
                  </option>
                  <option className="py-2" value="86">
                    86
                  </option>
                  <option className="py-2" value="85">
                    85
                  </option>
                  <option className="py-2" value="84">
                    84
                  </option>
                  <option className="py-2" value="83">
                    83
                  </option>
                  <option className="py-2" value="82">
                    82
                  </option>
                  <option className="py-2" value="81">
                    81
                  </option>
                  <option className="py-2" value="80">
                    80
                  </option>
                  <option className="py-2" value="79">
                    79
                  </option>
                  <option className="py-2" value="78">
                    78
                  </option>
                  <option className="py-2" value="77">
                    77
                  </option>
                  <option className="py-2" value="76">
                    76
                  </option>
                  <option className="py-2" value="75">
                    75
                  </option>
                  <option className="py-2" value="74">
                    74
                  </option>
                  <option className="py-2" value="73">
                    73
                  </option>
                  <option className="py-2" value="72">
                    72
                  </option>
                  <option className="py-2" value="71">
                    71
                  </option>
                  <option className="py-2" value="70">
                    70
                  </option>
                  <option className="py-2" value="69">
                    69
                  </option>
                  <option className="py-2" value="68">
                    68
                  </option>
                  <option className="py-2" value="67">
                    67
                  </option>
                  <option className="py-2" value="66">
                    66
                  </option>
                  <option className="py-2" value="65">
                    65
                  </option>
                  <option className="py-2" value="64">
                    64
                  </option>
                  <option className="py-2" value="63">
                    63
                  </option>
                  <option className="py-2" value="62">
                    62
                  </option>
                  <option className="py-2" value="61">
                    61
                  </option>
                  <option className="py-2" value="60">
                    60
                  </option>
                  <option className="py-2" value="59">
                    59
                  </option>
                  <option className="py-2" value="58">
                    58
                  </option>
                  <option className="py-2" value="57">
                    57
                  </option>
                  <option className="py-2" value="56">
                    56
                  </option>
                  <option className="py-2" value="55">
                    55
                  </option>
                  <option className="py-2" value="54">
                    54
                  </option>
                  <option className="py-2" value="53">
                    53
                  </option>
                  <option className="py-2" value="52">
                    52
                  </option>
                  <option className="py-2" value="51">
                    51
                  </option>
                  <option className="py-2" value="50">
                    50
                  </option>
                  <option className="py-2" value="49">
                    49
                  </option>
                  <option className="py-2" value="48">
                    48
                  </option>
                  <option className="py-2" value="47">
                    47
                  </option>
                  <option className="py-2" value="46">
                    46
                  </option>
                  <option className="py-2" value="45">
                    45
                  </option>
                  <option className="py-2" value="44">
                    44
                  </option>
                  <option className="py-2" value="43">
                    43
                  </option>
                  <option className="py-2" value="42">
                    42
                  </option>
                  <option className="py-2" value="41">
                    41
                  </option>
                  <option className="py-2" value="40">
                    40
                  </option>
                  <option className="py-2" value="39">
                    39
                  </option>
                  <option className="py-2" value="38">
                    38
                  </option>
                  <option className="py-2" value="37">
                    37
                  </option>
                  <option className="py-2" value="36">
                    36
                  </option>
                  <option className="py-2" value="35">
                    35
                  </option>
                  <option className="py-2" value="34">
                    34
                  </option>
                  <option className="py-2" value="33">
                    33
                  </option>
                  <option className="py-2" value="32">
                    32
                  </option>
                  <option className="py-2" value="31">
                    31
                  </option>
                  <option className="py-2" value="30">
                    30
                  </option>
                  <option className="py-2" value="29">
                    29
                  </option>
                  <option className="py-2" value="28">
                    28
                  </option>
                  <option className="py-2" value="27">
                    27
                  </option>
                  <option className="py-2" value="26">
                    26
                  </option>
                  <option className="py-2" value="25">
                    25
                  </option>
                  <option className="py-2" value="24">
                    24
                  </option>
                  <option className="py-2" value="23">
                    23
                  </option>
                  <option className="py-2" value="22">
                    22
                  </option>
                  <option className="py-2" value="21">
                    21
                  </option>
                  <option className="py-2" value="20">
                    20
                  </option>
                  <option className="py-2" value="19">
                    19
                  </option>
                  <option className="py-2" value="18">
                    18
                  </option>
                  <option className="py-2" value="17">
                    17
                  </option>
                  <option className="py-2" value="16">
                    16
                  </option>
                  <option className="py-2" value="15">
                    15
                  </option>
                  <option className="py-2" value="14">
                    14
                  </option>
                  <option className="py-2" value="13">
                    13
                  </option>
                  <option className="py-2" value="12">
                    12
                  </option>
                  <option className="py-2" value="11">
                    11
                  </option>
                  <option className="py-2" value="10">
                    10
                  </option>
                  <option className="py-2" value="9">
                    9
                  </option>
                  <option className="py-2" value="8">
                    8
                  </option>
                  <option className="py-2" value="7">
                    7
                  </option>
                  <option className="py-2" value="6">
                    6
                  </option>
                  <option className="py-2" value="5">
                    5
                  </option>
                  <option className="py-2" value="4">
                    4
                  </option>
                  <option className="py-2" value="3">
                    3
                  </option>
                  <option className="py-2" value="2">
                    2
                  </option>
                  <option className="py-2" value="1">
                    1
                  </option>
                  <option className="py-2" value="0">
                    0
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <label className="mb text-md text-[#34FEF8] font-bold uppercase">
              Curve
            </label>
            <br />
            <div
              className="z-[1000]"
              //  style={{transform: 'translate(-50%, -50%)'}}
            >
              <div className="rounded-lg border-[#34FEF8] px-6">
                <select
                  onChange={(e) => {
                    // selectedClass();
                    setCurve(e.target.value);
                  }}
                  className="rounder resize-none w-full h-[6rem] bg-[#01112B] text-base border-[5px] border-[#34FEF8] text-[#34FEF8] mb-2 mt-2 p-3 pl-4 pt-0 placeholder-opacity-60 placeholder-[#34FEF8]"
                >
                  <option
                    value="Select a Category"
                    selected
                    className="block"
                    disabled
                  >
                    Select a rating
                  </option>
                  <option className="py-2" value="99">
                    99
                  </option>
                  <option className="py-2" value="98">
                    98
                  </option>
                  <option className="py-2" value="97">
                    97
                  </option>
                  <option className="py-2" value="96">
                    96
                  </option>
                  <option className="py-2" value="95">
                    95
                  </option>
                  <option className="py-2" value="94">
                    94
                  </option>
                  <option className="py-2" value="93">
                    93
                  </option>
                  <option className="py-2" value="92">
                    92
                  </option>
                  <option className="py-2" value="91">
                    91
                  </option>
                  <option className="py-2" value="90">
                    90
                  </option>
                  <option className="py-2" value="89">
                    89
                  </option>
                  <option className="py-2" value="88">
                    88
                  </option>
                  <option className="py-2" value="87">
                    87
                  </option>
                  <option className="py-2" value="86">
                    86
                  </option>
                  <option className="py-2" value="85">
                    85
                  </option>
                  <option className="py-2" value="84">
                    84
                  </option>
                  <option className="py-2" value="83">
                    83
                  </option>
                  <option className="py-2" value="82">
                    82
                  </option>
                  <option className="py-2" value="81">
                    81
                  </option>
                  <option className="py-2" value="80">
                    80
                  </option>
                  <option className="py-2" value="79">
                    79
                  </option>
                  <option className="py-2" value="78">
                    78
                  </option>
                  <option className="py-2" value="77">
                    77
                  </option>
                  <option className="py-2" value="76">
                    76
                  </option>
                  <option className="py-2" value="75">
                    75
                  </option>
                  <option className="py-2" value="74">
                    74
                  </option>
                  <option className="py-2" value="73">
                    73
                  </option>
                  <option className="py-2" value="72">
                    72
                  </option>
                  <option className="py-2" value="71">
                    71
                  </option>
                  <option className="py-2" value="70">
                    70
                  </option>
                  <option className="py-2" value="69">
                    69
                  </option>
                  <option className="py-2" value="68">
                    68
                  </option>
                  <option className="py-2" value="67">
                    67
                  </option>
                  <option className="py-2" value="66">
                    66
                  </option>
                  <option className="py-2" value="65">
                    65
                  </option>
                  <option className="py-2" value="64">
                    64
                  </option>
                  <option className="py-2" value="63">
                    63
                  </option>
                  <option className="py-2" value="62">
                    62
                  </option>
                  <option className="py-2" value="61">
                    61
                  </option>
                  <option className="py-2" value="60">
                    60
                  </option>
                  <option className="py-2" value="59">
                    59
                  </option>
                  <option className="py-2" value="58">
                    58
                  </option>
                  <option className="py-2" value="57">
                    57
                  </option>
                  <option className="py-2" value="56">
                    56
                  </option>
                  <option className="py-2" value="55">
                    55
                  </option>
                  <option className="py-2" value="54">
                    54
                  </option>
                  <option className="py-2" value="53">
                    53
                  </option>
                  <option className="py-2" value="52">
                    52
                  </option>
                  <option className="py-2" value="51">
                    51
                  </option>
                  <option className="py-2" value="50">
                    50
                  </option>
                  <option className="py-2" value="49">
                    49
                  </option>
                  <option className="py-2" value="48">
                    48
                  </option>
                  <option className="py-2" value="47">
                    47
                  </option>
                  <option className="py-2" value="46">
                    46
                  </option>
                  <option className="py-2" value="45">
                    45
                  </option>
                  <option className="py-2" value="44">
                    44
                  </option>
                  <option className="py-2" value="43">
                    43
                  </option>
                  <option className="py-2" value="42">
                    42
                  </option>
                  <option className="py-2" value="41">
                    41
                  </option>
                  <option className="py-2" value="40">
                    40
                  </option>
                  <option className="py-2" value="39">
                    39
                  </option>
                  <option className="py-2" value="38">
                    38
                  </option>
                  <option className="py-2" value="37">
                    37
                  </option>
                  <option className="py-2" value="36">
                    36
                  </option>
                  <option className="py-2" value="35">
                    35
                  </option>
                  <option className="py-2" value="34">
                    34
                  </option>
                  <option className="py-2" value="33">
                    33
                  </option>
                  <option className="py-2" value="32">
                    32
                  </option>
                  <option className="py-2" value="31">
                    31
                  </option>
                  <option className="py-2" value="30">
                    30
                  </option>
                  <option className="py-2" value="29">
                    29
                  </option>
                  <option className="py-2" value="28">
                    28
                  </option>
                  <option className="py-2" value="27">
                    27
                  </option>
                  <option className="py-2" value="26">
                    26
                  </option>
                  <option className="py-2" value="25">
                    25
                  </option>
                  <option className="py-2" value="24">
                    24
                  </option>
                  <option className="py-2" value="23">
                    23
                  </option>
                  <option className="py-2" value="22">
                    22
                  </option>
                  <option className="py-2" value="21">
                    21
                  </option>
                  <option className="py-2" value="20">
                    20
                  </option>
                  <option className="py-2" value="19">
                    19
                  </option>
                  <option className="py-2" value="18">
                    18
                  </option>
                  <option className="py-2" value="17">
                    17
                  </option>
                  <option className="py-2" value="16">
                    16
                  </option>
                  <option className="py-2" value="15">
                    15
                  </option>
                  <option className="py-2" value="14">
                    14
                  </option>
                  <option className="py-2" value="13">
                    13
                  </option>
                  <option className="py-2" value="12">
                    12
                  </option>
                  <option className="py-2" value="11">
                    11
                  </option>
                  <option className="py-2" value="10">
                    10
                  </option>
                  <option className="py-2" value="9">
                    9
                  </option>
                  <option className="py-2" value="8">
                    8
                  </option>
                  <option className="py-2" value="7">
                    7
                  </option>
                  <option className="py-2" value="6">
                    6
                  </option>
                  <option className="py-2" value="5">
                    5
                  </option>
                  <option className="py-2" value="4">
                    4
                  </option>
                  <option className="py-2" value="3">
                    3
                  </option>
                  <option className="py-2" value="2">
                    2
                  </option>
                  <option className="py-2" value="1">
                    1
                  </option>
                  <option className="py-2" value="0">
                    0
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <label className="mb text-md text-[#34FEF8] font-bold uppercase">
              Defending
            </label>
            <br />
            <div
              className="z-[1000]"
              //  style={{transform: 'translate(-50%, -50%)'}}
            >
              <div className="rounded-lg border-[#34FEF8] px-6">
                <select
                  onChange={(e) => {
                    // selectedClass();
                    setDefending(e.target.value);
                  }}
                  className="rounder resize-none w-full h-[6rem] bg-[#01112B] text-base border-[5px] border-[#34FEF8] text-[#34FEF8] mb-2 mt-2 p-3 pl-4 pt-0 placeholder-opacity-60 placeholder-[#34FEF8]"
                >
                  <option
                    value="Select a Category"
                    selected
                    className="block"
                    disabled
                  >
                    Select a rating
                  </option>
                  <option className="py-2" value="99">
                    99
                  </option>
                  <option className="py-2" value="98">
                    98
                  </option>
                  <option className="py-2" value="97">
                    97
                  </option>
                  <option className="py-2" value="96">
                    96
                  </option>
                  <option className="py-2" value="95">
                    95
                  </option>
                  <option className="py-2" value="94">
                    94
                  </option>
                  <option className="py-2" value="93">
                    93
                  </option>
                  <option className="py-2" value="92">
                    92
                  </option>
                  <option className="py-2" value="91">
                    91
                  </option>
                  <option className="py-2" value="90">
                    90
                  </option>
                  <option className="py-2" value="89">
                    89
                  </option>
                  <option className="py-2" value="88">
                    88
                  </option>
                  <option className="py-2" value="87">
                    87
                  </option>
                  <option className="py-2" value="86">
                    86
                  </option>
                  <option className="py-2" value="85">
                    85
                  </option>
                  <option className="py-2" value="84">
                    84
                  </option>
                  <option className="py-2" value="83">
                    83
                  </option>
                  <option className="py-2" value="82">
                    82
                  </option>
                  <option className="py-2" value="81">
                    81
                  </option>
                  <option className="py-2" value="80">
                    80
                  </option>
                  <option className="py-2" value="79">
                    79
                  </option>
                  <option className="py-2" value="78">
                    78
                  </option>
                  <option className="py-2" value="77">
                    77
                  </option>
                  <option className="py-2" value="76">
                    76
                  </option>
                  <option className="py-2" value="75">
                    75
                  </option>
                  <option className="py-2" value="74">
                    74
                  </option>
                  <option className="py-2" value="73">
                    73
                  </option>
                  <option className="py-2" value="72">
                    72
                  </option>
                  <option className="py-2" value="71">
                    71
                  </option>
                  <option className="py-2" value="70">
                    70
                  </option>
                  <option className="py-2" value="69">
                    69
                  </option>
                  <option className="py-2" value="68">
                    68
                  </option>
                  <option className="py-2" value="67">
                    67
                  </option>
                  <option className="py-2" value="66">
                    66
                  </option>
                  <option className="py-2" value="65">
                    65
                  </option>
                  <option className="py-2" value="64">
                    64
                  </option>
                  <option className="py-2" value="63">
                    63
                  </option>
                  <option className="py-2" value="62">
                    62
                  </option>
                  <option className="py-2" value="61">
                    61
                  </option>
                  <option className="py-2" value="60">
                    60
                  </option>
                  <option className="py-2" value="59">
                    59
                  </option>
                  <option className="py-2" value="58">
                    58
                  </option>
                  <option className="py-2" value="57">
                    57
                  </option>
                  <option className="py-2" value="56">
                    56
                  </option>
                  <option className="py-2" value="55">
                    55
                  </option>
                  <option className="py-2" value="54">
                    54
                  </option>
                  <option className="py-2" value="53">
                    53
                  </option>
                  <option className="py-2" value="52">
                    52
                  </option>
                  <option className="py-2" value="51">
                    51
                  </option>
                  <option className="py-2" value="50">
                    50
                  </option>
                  <option className="py-2" value="49">
                    49
                  </option>
                  <option className="py-2" value="48">
                    48
                  </option>
                  <option className="py-2" value="47">
                    47
                  </option>
                  <option className="py-2" value="46">
                    46
                  </option>
                  <option className="py-2" value="45">
                    45
                  </option>
                  <option className="py-2" value="44">
                    44
                  </option>
                  <option className="py-2" value="43">
                    43
                  </option>
                  <option className="py-2" value="42">
                    42
                  </option>
                  <option className="py-2" value="41">
                    41
                  </option>
                  <option className="py-2" value="40">
                    40
                  </option>
                  <option className="py-2" value="39">
                    39
                  </option>
                  <option className="py-2" value="38">
                    38
                  </option>
                  <option className="py-2" value="37">
                    37
                  </option>
                  <option className="py-2" value="36">
                    36
                  </option>
                  <option className="py-2" value="35">
                    35
                  </option>
                  <option className="py-2" value="34">
                    34
                  </option>
                  <option className="py-2" value="33">
                    33
                  </option>
                  <option className="py-2" value="32">
                    32
                  </option>
                  <option className="py-2" value="31">
                    31
                  </option>
                  <option className="py-2" value="30">
                    30
                  </option>
                  <option className="py-2" value="29">
                    29
                  </option>
                  <option className="py-2" value="28">
                    28
                  </option>
                  <option className="py-2" value="27">
                    27
                  </option>
                  <option className="py-2" value="26">
                    26
                  </option>
                  <option className="py-2" value="25">
                    25
                  </option>
                  <option className="py-2" value="24">
                    24
                  </option>
                  <option className="py-2" value="23">
                    23
                  </option>
                  <option className="py-2" value="22">
                    22
                  </option>
                  <option className="py-2" value="21">
                    21
                  </option>
                  <option className="py-2" value="20">
                    20
                  </option>
                  <option className="py-2" value="19">
                    19
                  </option>
                  <option className="py-2" value="18">
                    18
                  </option>
                  <option className="py-2" value="17">
                    17
                  </option>
                  <option className="py-2" value="16">
                    16
                  </option>
                  <option className="py-2" value="15">
                    15
                  </option>
                  <option className="py-2" value="14">
                    14
                  </option>
                  <option className="py-2" value="13">
                    13
                  </option>
                  <option className="py-2" value="12">
                    12
                  </option>
                  <option className="py-2" value="11">
                    11
                  </option>
                  <option className="py-2" value="10">
                    10
                  </option>
                  <option className="py-2" value="9">
                    9
                  </option>
                  <option className="py-2" value="8">
                    8
                  </option>
                  <option className="py-2" value="7">
                    7
                  </option>
                  <option className="py-2" value="6">
                    6
                  </option>
                  <option className="py-2" value="5">
                    5
                  </option>
                  <option className="py-2" value="4">
                    4
                  </option>
                  <option className="py-2" value="3">
                    3
                  </option>
                  <option className="py-2" value="2">
                    2
                  </option>
                  <option className="py-2" value="1">
                    1
                  </option>
                  <option className="py-2" value="0">
                    0
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <label className="mb text-md text-[#34FEF8] font-bold uppercase">
              Dribbling
            </label>
            <br />
            <div
              className="z-[1000]"
              //  style={{transform: 'translate(-50%, -50%)'}}
            >
              <div className="rounded-lg border-[#34FEF8] px-6">
                <select
                  onChange={(e) => {
                    // selectedClass();
                    setDribbling(e.target.value);
                  }}
                  className="rounder resize-none w-full h-[6rem] bg-[#01112B] text-base border-[5px] border-[#34FEF8] text-[#34FEF8] mb-2 mt-2 p-3 pl-4 pt-0 placeholder-opacity-60 placeholder-[#34FEF8]"
                >
                  <option
                    value="Select a Category"
                    selected
                    className="block"
                    disabled
                  >
                    Select a rating
                  </option>
                  <option className="py-2" value="99">
                    99
                  </option>
                  <option className="py-2" value="98">
                    98
                  </option>
                  <option className="py-2" value="97">
                    97
                  </option>
                  <option className="py-2" value="96">
                    96
                  </option>
                  <option className="py-2" value="95">
                    95
                  </option>
                  <option className="py-2" value="94">
                    94
                  </option>
                  <option className="py-2" value="93">
                    93
                  </option>
                  <option className="py-2" value="92">
                    92
                  </option>
                  <option className="py-2" value="91">
                    91
                  </option>
                  <option className="py-2" value="90">
                    90
                  </option>
                  <option className="py-2" value="89">
                    89
                  </option>
                  <option className="py-2" value="88">
                    88
                  </option>
                  <option className="py-2" value="87">
                    87
                  </option>
                  <option className="py-2" value="86">
                    86
                  </option>
                  <option className="py-2" value="85">
                    85
                  </option>
                  <option className="py-2" value="84">
                    84
                  </option>
                  <option className="py-2" value="83">
                    83
                  </option>
                  <option className="py-2" value="82">
                    82
                  </option>
                  <option className="py-2" value="81">
                    81
                  </option>
                  <option className="py-2" value="80">
                    80
                  </option>
                  <option className="py-2" value="79">
                    79
                  </option>
                  <option className="py-2" value="78">
                    78
                  </option>
                  <option className="py-2" value="77">
                    77
                  </option>
                  <option className="py-2" value="76">
                    76
                  </option>
                  <option className="py-2" value="75">
                    75
                  </option>
                  <option className="py-2" value="74">
                    74
                  </option>
                  <option className="py-2" value="73">
                    73
                  </option>
                  <option className="py-2" value="72">
                    72
                  </option>
                  <option className="py-2" value="71">
                    71
                  </option>
                  <option className="py-2" value="70">
                    70
                  </option>
                  <option className="py-2" value="69">
                    69
                  </option>
                  <option className="py-2" value="68">
                    68
                  </option>
                  <option className="py-2" value="67">
                    67
                  </option>
                  <option className="py-2" value="66">
                    66
                  </option>
                  <option className="py-2" value="65">
                    65
                  </option>
                  <option className="py-2" value="64">
                    64
                  </option>
                  <option className="py-2" value="63">
                    63
                  </option>
                  <option className="py-2" value="62">
                    62
                  </option>
                  <option className="py-2" value="61">
                    61
                  </option>
                  <option className="py-2" value="60">
                    60
                  </option>
                  <option className="py-2" value="59">
                    59
                  </option>
                  <option className="py-2" value="58">
                    58
                  </option>
                  <option className="py-2" value="57">
                    57
                  </option>
                  <option className="py-2" value="56">
                    56
                  </option>
                  <option className="py-2" value="55">
                    55
                  </option>
                  <option className="py-2" value="54">
                    54
                  </option>
                  <option className="py-2" value="53">
                    53
                  </option>
                  <option className="py-2" value="52">
                    52
                  </option>
                  <option className="py-2" value="51">
                    51
                  </option>
                  <option className="py-2" value="50">
                    50
                  </option>
                  <option className="py-2" value="49">
                    49
                  </option>
                  <option className="py-2" value="48">
                    48
                  </option>
                  <option className="py-2" value="47">
                    47
                  </option>
                  <option className="py-2" value="46">
                    46
                  </option>
                  <option className="py-2" value="45">
                    45
                  </option>
                  <option className="py-2" value="44">
                    44
                  </option>
                  <option className="py-2" value="43">
                    43
                  </option>
                  <option className="py-2" value="42">
                    42
                  </option>
                  <option className="py-2" value="41">
                    41
                  </option>
                  <option className="py-2" value="40">
                    40
                  </option>
                  <option className="py-2" value="39">
                    39
                  </option>
                  <option className="py-2" value="38">
                    38
                  </option>
                  <option className="py-2" value="37">
                    37
                  </option>
                  <option className="py-2" value="36">
                    36
                  </option>
                  <option className="py-2" value="35">
                    35
                  </option>
                  <option className="py-2" value="34">
                    34
                  </option>
                  <option className="py-2" value="33">
                    33
                  </option>
                  <option className="py-2" value="32">
                    32
                  </option>
                  <option className="py-2" value="31">
                    31
                  </option>
                  <option className="py-2" value="30">
                    30
                  </option>
                  <option className="py-2" value="29">
                    29
                  </option>
                  <option className="py-2" value="28">
                    28
                  </option>
                  <option className="py-2" value="27">
                    27
                  </option>
                  <option className="py-2" value="26">
                    26
                  </option>
                  <option className="py-2" value="25">
                    25
                  </option>
                  <option className="py-2" value="24">
                    24
                  </option>
                  <option className="py-2" value="23">
                    23
                  </option>
                  <option className="py-2" value="22">
                    22
                  </option>
                  <option className="py-2" value="21">
                    21
                  </option>
                  <option className="py-2" value="20">
                    20
                  </option>
                  <option className="py-2" value="19">
                    19
                  </option>
                  <option className="py-2" value="18">
                    18
                  </option>
                  <option className="py-2" value="17">
                    17
                  </option>
                  <option className="py-2" value="16">
                    16
                  </option>
                  <option className="py-2" value="15">
                    15
                  </option>
                  <option className="py-2" value="14">
                    14
                  </option>
                  <option className="py-2" value="13">
                    13
                  </option>
                  <option className="py-2" value="12">
                    12
                  </option>
                  <option className="py-2" value="11">
                    11
                  </option>
                  <option className="py-2" value="10">
                    10
                  </option>
                  <option className="py-2" value="9">
                    9
                  </option>
                  <option className="py-2" value="8">
                    8
                  </option>
                  <option className="py-2" value="7">
                    7
                  </option>
                  <option className="py-2" value="6">
                    6
                  </option>
                  <option className="py-2" value="5">
                    5
                  </option>
                  <option className="py-2" value="4">
                    4
                  </option>
                  <option className="py-2" value="3">
                    3
                  </option>
                  <option className="py-2" value="2">
                    2
                  </option>
                  <option className="py-2" value="1">
                    1
                  </option>
                  <option className="py-2" value="0">
                    0
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <label className="mb text-md text-[#34FEF8] font-bold uppercase">
              Finishing
            </label>
            <br />
            <div
              className="z-[1000]"
              //  style={{transform: 'translate(-50%, -50%)'}}
            >
              <div className="rounded-lg border-[#34FEF8] px-6">
                <select
                  onChange={(e) => {
                    // selectedClass();
                    setFinishing(e.target.value);
                  }}
                  className="rounder resize-none w-full h-[6rem] bg-[#01112B] text-base border-[5px] border-[#34FEF8] text-[#34FEF8] mb-2 mt-2 p-3 pl-4 pt-0 placeholder-opacity-60 placeholder-[#34FEF8]"
                >
                  <option
                    value="Select a Category"
                    selected
                    className="block"
                    disabled
                  >
                    Select a rating
                  </option>
                  <option className="py-2" value="99">
                    99
                  </option>
                  <option className="py-2" value="98">
                    98
                  </option>
                  <option className="py-2" value="97">
                    97
                  </option>
                  <option className="py-2" value="96">
                    96
                  </option>
                  <option className="py-2" value="95">
                    95
                  </option>
                  <option className="py-2" value="94">
                    94
                  </option>
                  <option className="py-2" value="93">
                    93
                  </option>
                  <option className="py-2" value="92">
                    92
                  </option>
                  <option className="py-2" value="91">
                    91
                  </option>
                  <option className="py-2" value="90">
                    90
                  </option>
                  <option className="py-2" value="89">
                    89
                  </option>
                  <option className="py-2" value="88">
                    88
                  </option>
                  <option className="py-2" value="87">
                    87
                  </option>
                  <option className="py-2" value="86">
                    86
                  </option>
                  <option className="py-2" value="85">
                    85
                  </option>
                  <option className="py-2" value="84">
                    84
                  </option>
                  <option className="py-2" value="83">
                    83
                  </option>
                  <option className="py-2" value="82">
                    82
                  </option>
                  <option className="py-2" value="81">
                    81
                  </option>
                  <option className="py-2" value="80">
                    80
                  </option>
                  <option className="py-2" value="79">
                    79
                  </option>
                  <option className="py-2" value="78">
                    78
                  </option>
                  <option className="py-2" value="77">
                    77
                  </option>
                  <option className="py-2" value="76">
                    76
                  </option>
                  <option className="py-2" value="75">
                    75
                  </option>
                  <option className="py-2" value="74">
                    74
                  </option>
                  <option className="py-2" value="73">
                    73
                  </option>
                  <option className="py-2" value="72">
                    72
                  </option>
                  <option className="py-2" value="71">
                    71
                  </option>
                  <option className="py-2" value="70">
                    70
                  </option>
                  <option className="py-2" value="69">
                    69
                  </option>
                  <option className="py-2" value="68">
                    68
                  </option>
                  <option className="py-2" value="67">
                    67
                  </option>
                  <option className="py-2" value="66">
                    66
                  </option>
                  <option className="py-2" value="65">
                    65
                  </option>
                  <option className="py-2" value="64">
                    64
                  </option>
                  <option className="py-2" value="63">
                    63
                  </option>
                  <option className="py-2" value="62">
                    62
                  </option>
                  <option className="py-2" value="61">
                    61
                  </option>
                  <option className="py-2" value="60">
                    60
                  </option>
                  <option className="py-2" value="59">
                    59
                  </option>
                  <option className="py-2" value="58">
                    58
                  </option>
                  <option className="py-2" value="57">
                    57
                  </option>
                  <option className="py-2" value="56">
                    56
                  </option>
                  <option className="py-2" value="55">
                    55
                  </option>
                  <option className="py-2" value="54">
                    54
                  </option>
                  <option className="py-2" value="53">
                    53
                  </option>
                  <option className="py-2" value="52">
                    52
                  </option>
                  <option className="py-2" value="51">
                    51
                  </option>
                  <option className="py-2" value="50">
                    50
                  </option>
                  <option className="py-2" value="49">
                    49
                  </option>
                  <option className="py-2" value="48">
                    48
                  </option>
                  <option className="py-2" value="47">
                    47
                  </option>
                  <option className="py-2" value="46">
                    46
                  </option>
                  <option className="py-2" value="45">
                    45
                  </option>
                  <option className="py-2" value="44">
                    44
                  </option>
                  <option className="py-2" value="43">
                    43
                  </option>
                  <option className="py-2" value="42">
                    42
                  </option>
                  <option className="py-2" value="41">
                    41
                  </option>
                  <option className="py-2" value="40">
                    40
                  </option>
                  <option className="py-2" value="39">
                    39
                  </option>
                  <option className="py-2" value="38">
                    38
                  </option>
                  <option className="py-2" value="37">
                    37
                  </option>
                  <option className="py-2" value="36">
                    36
                  </option>
                  <option className="py-2" value="35">
                    35
                  </option>
                  <option className="py-2" value="34">
                    34
                  </option>
                  <option className="py-2" value="33">
                    33
                  </option>
                  <option className="py-2" value="32">
                    32
                  </option>
                  <option className="py-2" value="31">
                    31
                  </option>
                  <option className="py-2" value="30">
                    30
                  </option>
                  <option className="py-2" value="29">
                    29
                  </option>
                  <option className="py-2" value="28">
                    28
                  </option>
                  <option className="py-2" value="27">
                    27
                  </option>
                  <option className="py-2" value="26">
                    26
                  </option>
                  <option className="py-2" value="25">
                    25
                  </option>
                  <option className="py-2" value="24">
                    24
                  </option>
                  <option className="py-2" value="23">
                    23
                  </option>
                  <option className="py-2" value="22">
                    22
                  </option>
                  <option className="py-2" value="21">
                    21
                  </option>
                  <option className="py-2" value="20">
                    20
                  </option>
                  <option className="py-2" value="19">
                    19
                  </option>
                  <option className="py-2" value="18">
                    18
                  </option>
                  <option className="py-2" value="17">
                    17
                  </option>
                  <option className="py-2" value="16">
                    16
                  </option>
                  <option className="py-2" value="15">
                    15
                  </option>
                  <option className="py-2" value="14">
                    14
                  </option>
                  <option className="py-2" value="13">
                    13
                  </option>
                  <option className="py-2" value="12">
                    12
                  </option>
                  <option className="py-2" value="11">
                    11
                  </option>
                  <option className="py-2" value="10">
                    10
                  </option>
                  <option className="py-2" value="9">
                    9
                  </option>
                  <option className="py-2" value="8">
                    8
                  </option>
                  <option className="py-2" value="7">
                    7
                  </option>
                  <option className="py-2" value="6">
                    6
                  </option>
                  <option className="py-2" value="5">
                    5
                  </option>
                  <option className="py-2" value="4">
                    4
                  </option>
                  <option className="py-2" value="3">
                    3
                  </option>
                  <option className="py-2" value="2">
                    2
                  </option>
                  <option className="py-2" value="1">
                    1
                  </option>
                  <option className="py-2" value="0">
                    0
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <label className="mb text-md text-[#34FEF8] font-bold uppercase">
              Free Kick
            </label>
            <br />
            <div
              className="z-[1000]"
              //  style={{transform: 'translate(-50%, -50%)'}}
            >
              <div className="rounded-lg border-[#34FEF8] px-6">
                <select
                  onChange={(e) => {
                    // selectedClass();
                    setFreeKick(e.target.value);
                  }}
                  className="rounder resize-none w-full h-[6rem] bg-[#01112B] text-base border-[5px] border-[#34FEF8] text-[#34FEF8] mb-2 mt-2 p-3 pl-4 pt-0 placeholder-opacity-60 placeholder-[#34FEF8]"
                >
                  <option
                    value="Select a Category"
                    selected
                    className="block"
                    disabled
                  >
                    Select a rating
                  </option>
                  <option className="py-2" value="99">
                    99
                  </option>
                  <option className="py-2" value="98">
                    98
                  </option>
                  <option className="py-2" value="97">
                    97
                  </option>
                  <option className="py-2" value="96">
                    96
                  </option>
                  <option className="py-2" value="95">
                    95
                  </option>
                  <option className="py-2" value="94">
                    94
                  </option>
                  <option className="py-2" value="93">
                    93
                  </option>
                  <option className="py-2" value="92">
                    92
                  </option>
                  <option className="py-2" value="91">
                    91
                  </option>
                  <option className="py-2" value="90">
                    90
                  </option>
                  <option className="py-2" value="89">
                    89
                  </option>
                  <option className="py-2" value="88">
                    88
                  </option>
                  <option className="py-2" value="87">
                    87
                  </option>
                  <option className="py-2" value="86">
                    86
                  </option>
                  <option className="py-2" value="85">
                    85
                  </option>
                  <option className="py-2" value="84">
                    84
                  </option>
                  <option className="py-2" value="83">
                    83
                  </option>
                  <option className="py-2" value="82">
                    82
                  </option>
                  <option className="py-2" value="81">
                    81
                  </option>
                  <option className="py-2" value="80">
                    80
                  </option>
                  <option className="py-2" value="79">
                    79
                  </option>
                  <option className="py-2" value="78">
                    78
                  </option>
                  <option className="py-2" value="77">
                    77
                  </option>
                  <option className="py-2" value="76">
                    76
                  </option>
                  <option className="py-2" value="75">
                    75
                  </option>
                  <option className="py-2" value="74">
                    74
                  </option>
                  <option className="py-2" value="73">
                    73
                  </option>
                  <option className="py-2" value="72">
                    72
                  </option>
                  <option className="py-2" value="71">
                    71
                  </option>
                  <option className="py-2" value="70">
                    70
                  </option>
                  <option className="py-2" value="69">
                    69
                  </option>
                  <option className="py-2" value="68">
                    68
                  </option>
                  <option className="py-2" value="67">
                    67
                  </option>
                  <option className="py-2" value="66">
                    66
                  </option>
                  <option className="py-2" value="65">
                    65
                  </option>
                  <option className="py-2" value="64">
                    64
                  </option>
                  <option className="py-2" value="63">
                    63
                  </option>
                  <option className="py-2" value="62">
                    62
                  </option>
                  <option className="py-2" value="61">
                    61
                  </option>
                  <option className="py-2" value="60">
                    60
                  </option>
                  <option className="py-2" value="59">
                    59
                  </option>
                  <option className="py-2" value="58">
                    58
                  </option>
                  <option className="py-2" value="57">
                    57
                  </option>
                  <option className="py-2" value="56">
                    56
                  </option>
                  <option className="py-2" value="55">
                    55
                  </option>
                  <option className="py-2" value="54">
                    54
                  </option>
                  <option className="py-2" value="53">
                    53
                  </option>
                  <option className="py-2" value="52">
                    52
                  </option>
                  <option className="py-2" value="51">
                    51
                  </option>
                  <option className="py-2" value="50">
                    50
                  </option>
                  <option className="py-2" value="49">
                    49
                  </option>
                  <option className="py-2" value="48">
                    48
                  </option>
                  <option className="py-2" value="47">
                    47
                  </option>
                  <option className="py-2" value="46">
                    46
                  </option>
                  <option className="py-2" value="45">
                    45
                  </option>
                  <option className="py-2" value="44">
                    44
                  </option>
                  <option className="py-2" value="43">
                    43
                  </option>
                  <option className="py-2" value="42">
                    42
                  </option>
                  <option className="py-2" value="41">
                    41
                  </option>
                  <option className="py-2" value="40">
                    40
                  </option>
                  <option className="py-2" value="39">
                    39
                  </option>
                  <option className="py-2" value="38">
                    38
                  </option>
                  <option className="py-2" value="37">
                    37
                  </option>
                  <option className="py-2" value="36">
                    36
                  </option>
                  <option className="py-2" value="35">
                    35
                  </option>
                  <option className="py-2" value="34">
                    34
                  </option>
                  <option className="py-2" value="33">
                    33
                  </option>
                  <option className="py-2" value="32">
                    32
                  </option>
                  <option className="py-2" value="31">
                    31
                  </option>
                  <option className="py-2" value="30">
                    30
                  </option>
                  <option className="py-2" value="29">
                    29
                  </option>
                  <option className="py-2" value="28">
                    28
                  </option>
                  <option className="py-2" value="27">
                    27
                  </option>
                  <option className="py-2" value="26">
                    26
                  </option>
                  <option className="py-2" value="25">
                    25
                  </option>
                  <option className="py-2" value="24">
                    24
                  </option>
                  <option className="py-2" value="23">
                    23
                  </option>
                  <option className="py-2" value="22">
                    22
                  </option>
                  <option className="py-2" value="21">
                    21
                  </option>
                  <option className="py-2" value="20">
                    20
                  </option>
                  <option className="py-2" value="19">
                    19
                  </option>
                  <option className="py-2" value="18">
                    18
                  </option>
                  <option className="py-2" value="17">
                    17
                  </option>
                  <option className="py-2" value="16">
                    16
                  </option>
                  <option className="py-2" value="15">
                    15
                  </option>
                  <option className="py-2" value="14">
                    14
                  </option>
                  <option className="py-2" value="13">
                    13
                  </option>
                  <option className="py-2" value="12">
                    12
                  </option>
                  <option className="py-2" value="11">
                    11
                  </option>
                  <option className="py-2" value="10">
                    10
                  </option>
                  <option className="py-2" value="9">
                    9
                  </option>
                  <option className="py-2" value="8">
                    8
                  </option>
                  <option className="py-2" value="7">
                    7
                  </option>
                  <option className="py-2" value="6">
                    6
                  </option>
                  <option className="py-2" value="5">
                    5
                  </option>
                  <option className="py-2" value="4">
                    4
                  </option>
                  <option className="py-2" value="3">
                    3
                  </option>
                  <option className="py-2" value="2">
                    2
                  </option>
                  <option className="py-2" value="1">
                    1
                  </option>
                  <option className="py-2" value="0">
                    0
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <label className="mb text-md text-[#34FEF8] font-bold uppercase">
              Heading
            </label>
            <br />
            <div
              className="z-[1000]"
              //  style={{transform: 'translate(-50%, -50%)'}}
            >
              <div className="rounded-lg border-[#34FEF8] px-6">
                <select
                  onChange={(e) => {
                    // selectedClass();
                    setHeading(e.target.value);
                  }}
                  className="rounder resize-none w-full h-[6rem] bg-[#01112B] text-base border-[5px] border-[#34FEF8] text-[#34FEF8] mb-2 mt-2 p-3 pl-4 pt-0 placeholder-opacity-60 placeholder-[#34FEF8]"
                >
                  <option
                    value="Select a Category"
                    selected
                    className="block"
                    disabled
                  >
                    Select a rating
                  </option>
                  <option className="py-2" value="99">
                    99
                  </option>
                  <option className="py-2" value="98">
                    98
                  </option>
                  <option className="py-2" value="97">
                    97
                  </option>
                  <option className="py-2" value="96">
                    96
                  </option>
                  <option className="py-2" value="95">
                    95
                  </option>
                  <option className="py-2" value="94">
                    94
                  </option>
                  <option className="py-2" value="93">
                    93
                  </option>
                  <option className="py-2" value="92">
                    92
                  </option>
                  <option className="py-2" value="91">
                    91
                  </option>
                  <option className="py-2" value="90">
                    90
                  </option>
                  <option className="py-2" value="89">
                    89
                  </option>
                  <option className="py-2" value="88">
                    88
                  </option>
                  <option className="py-2" value="87">
                    87
                  </option>
                  <option className="py-2" value="86">
                    86
                  </option>
                  <option className="py-2" value="85">
                    85
                  </option>
                  <option className="py-2" value="84">
                    84
                  </option>
                  <option className="py-2" value="83">
                    83
                  </option>
                  <option className="py-2" value="82">
                    82
                  </option>
                  <option className="py-2" value="81">
                    81
                  </option>
                  <option className="py-2" value="80">
                    80
                  </option>
                  <option className="py-2" value="79">
                    79
                  </option>
                  <option className="py-2" value="78">
                    78
                  </option>
                  <option className="py-2" value="77">
                    77
                  </option>
                  <option className="py-2" value="76">
                    76
                  </option>
                  <option className="py-2" value="75">
                    75
                  </option>
                  <option className="py-2" value="74">
                    74
                  </option>
                  <option className="py-2" value="73">
                    73
                  </option>
                  <option className="py-2" value="72">
                    72
                  </option>
                  <option className="py-2" value="71">
                    71
                  </option>
                  <option className="py-2" value="70">
                    70
                  </option>
                  <option className="py-2" value="69">
                    69
                  </option>
                  <option className="py-2" value="68">
                    68
                  </option>
                  <option className="py-2" value="67">
                    67
                  </option>
                  <option className="py-2" value="66">
                    66
                  </option>
                  <option className="py-2" value="65">
                    65
                  </option>
                  <option className="py-2" value="64">
                    64
                  </option>
                  <option className="py-2" value="63">
                    63
                  </option>
                  <option className="py-2" value="62">
                    62
                  </option>
                  <option className="py-2" value="61">
                    61
                  </option>
                  <option className="py-2" value="60">
                    60
                  </option>
                  <option className="py-2" value="59">
                    59
                  </option>
                  <option className="py-2" value="58">
                    58
                  </option>
                  <option className="py-2" value="57">
                    57
                  </option>
                  <option className="py-2" value="56">
                    56
                  </option>
                  <option className="py-2" value="55">
                    55
                  </option>
                  <option className="py-2" value="54">
                    54
                  </option>
                  <option className="py-2" value="53">
                    53
                  </option>
                  <option className="py-2" value="52">
                    52
                  </option>
                  <option className="py-2" value="51">
                    51
                  </option>
                  <option className="py-2" value="50">
                    50
                  </option>
                  <option className="py-2" value="49">
                    49
                  </option>
                  <option className="py-2" value="48">
                    48
                  </option>
                  <option className="py-2" value="47">
                    47
                  </option>
                  <option className="py-2" value="46">
                    46
                  </option>
                  <option className="py-2" value="45">
                    45
                  </option>
                  <option className="py-2" value="44">
                    44
                  </option>
                  <option className="py-2" value="43">
                    43
                  </option>
                  <option className="py-2" value="42">
                    42
                  </option>
                  <option className="py-2" value="41">
                    41
                  </option>
                  <option className="py-2" value="40">
                    40
                  </option>
                  <option className="py-2" value="39">
                    39
                  </option>
                  <option className="py-2" value="38">
                    38
                  </option>
                  <option className="py-2" value="37">
                    37
                  </option>
                  <option className="py-2" value="36">
                    36
                  </option>
                  <option className="py-2" value="35">
                    35
                  </option>
                  <option className="py-2" value="34">
                    34
                  </option>
                  <option className="py-2" value="33">
                    33
                  </option>
                  <option className="py-2" value="32">
                    32
                  </option>
                  <option className="py-2" value="31">
                    31
                  </option>
                  <option className="py-2" value="30">
                    30
                  </option>
                  <option className="py-2" value="29">
                    29
                  </option>
                  <option className="py-2" value="28">
                    28
                  </option>
                  <option className="py-2" value="27">
                    27
                  </option>
                  <option className="py-2" value="26">
                    26
                  </option>
                  <option className="py-2" value="25">
                    25
                  </option>
                  <option className="py-2" value="24">
                    24
                  </option>
                  <option className="py-2" value="23">
                    23
                  </option>
                  <option className="py-2" value="22">
                    22
                  </option>
                  <option className="py-2" value="21">
                    21
                  </option>
                  <option className="py-2" value="20">
                    20
                  </option>
                  <option className="py-2" value="19">
                    19
                  </option>
                  <option className="py-2" value="18">
                    18
                  </option>
                  <option className="py-2" value="17">
                    17
                  </option>
                  <option className="py-2" value="16">
                    16
                  </option>
                  <option className="py-2" value="15">
                    15
                  </option>
                  <option className="py-2" value="14">
                    14
                  </option>
                  <option className="py-2" value="13">
                    13
                  </option>
                  <option className="py-2" value="12">
                    12
                  </option>
                  <option className="py-2" value="11">
                    11
                  </option>
                  <option className="py-2" value="10">
                    10
                  </option>
                  <option className="py-2" value="9">
                    9
                  </option>
                  <option className="py-2" value="8">
                    8
                  </option>
                  <option className="py-2" value="7">
                    7
                  </option>
                  <option className="py-2" value="6">
                    6
                  </option>
                  <option className="py-2" value="5">
                    5
                  </option>
                  <option className="py-2" value="4">
                    4
                  </option>
                  <option className="py-2" value="3">
                    3
                  </option>
                  <option className="py-2" value="2">
                    2
                  </option>
                  <option className="py-2" value="1">
                    1
                  </option>
                  <option className="py-2" value="0">
                    0
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <label className="mb text-md text-[#34FEF8] font-bold uppercase">
              Interceptions
            </label>
            <br />
            <div
              className="z-[1000]"
              //  style={{transform: 'translate(-50%, -50%)'}}
            >
              <div className="rounded-lg border-[#34FEF8] px-6">
                <select
                  onChange={(e) => {
                    // selectedClass();
                    setInterceptions(e.target.value);
                  }}
                  className="rounder resize-none w-full h-[6rem] bg-[#01112B] text-base border-[5px] border-[#34FEF8] text-[#34FEF8] mb-2 mt-2 p-3 pl-4 pt-0 placeholder-opacity-60 placeholder-[#34FEF8]"
                >
                  <option
                    value="Select a Category"
                    selected
                    className="block"
                    disabled
                  >
                    Select a rating
                  </option>
                  <option className="py-2" value="99">
                    99
                  </option>
                  <option className="py-2" value="98">
                    98
                  </option>
                  <option className="py-2" value="97">
                    97
                  </option>
                  <option className="py-2" value="96">
                    96
                  </option>
                  <option className="py-2" value="95">
                    95
                  </option>
                  <option className="py-2" value="94">
                    94
                  </option>
                  <option className="py-2" value="93">
                    93
                  </option>
                  <option className="py-2" value="92">
                    92
                  </option>
                  <option className="py-2" value="91">
                    91
                  </option>
                  <option className="py-2" value="90">
                    90
                  </option>
                  <option className="py-2" value="89">
                    89
                  </option>
                  <option className="py-2" value="88">
                    88
                  </option>
                  <option className="py-2" value="87">
                    87
                  </option>
                  <option className="py-2" value="86">
                    86
                  </option>
                  <option className="py-2" value="85">
                    85
                  </option>
                  <option className="py-2" value="84">
                    84
                  </option>
                  <option className="py-2" value="83">
                    83
                  </option>
                  <option className="py-2" value="82">
                    82
                  </option>
                  <option className="py-2" value="81">
                    81
                  </option>
                  <option className="py-2" value="80">
                    80
                  </option>
                  <option className="py-2" value="79">
                    79
                  </option>
                  <option className="py-2" value="78">
                    78
                  </option>
                  <option className="py-2" value="77">
                    77
                  </option>
                  <option className="py-2" value="76">
                    76
                  </option>
                  <option className="py-2" value="75">
                    75
                  </option>
                  <option className="py-2" value="74">
                    74
                  </option>
                  <option className="py-2" value="73">
                    73
                  </option>
                  <option className="py-2" value="72">
                    72
                  </option>
                  <option className="py-2" value="71">
                    71
                  </option>
                  <option className="py-2" value="70">
                    70
                  </option>
                  <option className="py-2" value="69">
                    69
                  </option>
                  <option className="py-2" value="68">
                    68
                  </option>
                  <option className="py-2" value="67">
                    67
                  </option>
                  <option className="py-2" value="66">
                    66
                  </option>
                  <option className="py-2" value="65">
                    65
                  </option>
                  <option className="py-2" value="64">
                    64
                  </option>
                  <option className="py-2" value="63">
                    63
                  </option>
                  <option className="py-2" value="62">
                    62
                  </option>
                  <option className="py-2" value="61">
                    61
                  </option>
                  <option className="py-2" value="60">
                    60
                  </option>
                  <option className="py-2" value="59">
                    59
                  </option>
                  <option className="py-2" value="58">
                    58
                  </option>
                  <option className="py-2" value="57">
                    57
                  </option>
                  <option className="py-2" value="56">
                    56
                  </option>
                  <option className="py-2" value="55">
                    55
                  </option>
                  <option className="py-2" value="54">
                    54
                  </option>
                  <option className="py-2" value="53">
                    53
                  </option>
                  <option className="py-2" value="52">
                    52
                  </option>
                  <option className="py-2" value="51">
                    51
                  </option>
                  <option className="py-2" value="50">
                    50
                  </option>
                  <option className="py-2" value="49">
                    49
                  </option>
                  <option className="py-2" value="48">
                    48
                  </option>
                  <option className="py-2" value="47">
                    47
                  </option>
                  <option className="py-2" value="46">
                    46
                  </option>
                  <option className="py-2" value="45">
                    45
                  </option>
                  <option className="py-2" value="44">
                    44
                  </option>
                  <option className="py-2" value="43">
                    43
                  </option>
                  <option className="py-2" value="42">
                    42
                  </option>
                  <option className="py-2" value="41">
                    41
                  </option>
                  <option className="py-2" value="40">
                    40
                  </option>
                  <option className="py-2" value="39">
                    39
                  </option>
                  <option className="py-2" value="38">
                    38
                  </option>
                  <option className="py-2" value="37">
                    37
                  </option>
                  <option className="py-2" value="36">
                    36
                  </option>
                  <option className="py-2" value="35">
                    35
                  </option>
                  <option className="py-2" value="34">
                    34
                  </option>
                  <option className="py-2" value="33">
                    33
                  </option>
                  <option className="py-2" value="32">
                    32
                  </option>
                  <option className="py-2" value="31">
                    31
                  </option>
                  <option className="py-2" value="30">
                    30
                  </option>
                  <option className="py-2" value="29">
                    29
                  </option>
                  <option className="py-2" value="28">
                    28
                  </option>
                  <option className="py-2" value="27">
                    27
                  </option>
                  <option className="py-2" value="26">
                    26
                  </option>
                  <option className="py-2" value="25">
                    25
                  </option>
                  <option className="py-2" value="24">
                    24
                  </option>
                  <option className="py-2" value="23">
                    23
                  </option>
                  <option className="py-2" value="22">
                    22
                  </option>
                  <option className="py-2" value="21">
                    21
                  </option>
                  <option className="py-2" value="20">
                    20
                  </option>
                  <option className="py-2" value="19">
                    19
                  </option>
                  <option className="py-2" value="18">
                    18
                  </option>
                  <option className="py-2" value="17">
                    17
                  </option>
                  <option className="py-2" value="16">
                    16
                  </option>
                  <option className="py-2" value="15">
                    15
                  </option>
                  <option className="py-2" value="14">
                    14
                  </option>
                  <option className="py-2" value="13">
                    13
                  </option>
                  <option className="py-2" value="12">
                    12
                  </option>
                  <option className="py-2" value="11">
                    11
                  </option>
                  <option className="py-2" value="10">
                    10
                  </option>
                  <option className="py-2" value="9">
                    9
                  </option>
                  <option className="py-2" value="8">
                    8
                  </option>
                  <option className="py-2" value="7">
                    7
                  </option>
                  <option className="py-2" value="6">
                    6
                  </option>
                  <option className="py-2" value="5">
                    5
                  </option>
                  <option className="py-2" value="4">
                    4
                  </option>
                  <option className="py-2" value="3">
                    3
                  </option>
                  <option className="py-2" value="2">
                    2
                  </option>
                  <option className="py-2" value="1">
                    1
                  </option>
                  <option className="py-2" value="0">
                    0
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <label className="mb text-md text-[#34FEF8] font-bold uppercase">
              Jumping
            </label>
            <br />
            <div
              className="z-[1000]"
              //  style={{transform: 'translate(-50%, -50%)'}}
            >
              <div className="rounded-lg border-[#34FEF8] px-6">
                <select
                  onChange={(e) => {
                    // selectedClass();
                    setJumping(e.target.value);
                  }}
                  className="rounder resize-none w-full h-[6rem] bg-[#01112B] text-base border-[5px] border-[#34FEF8] text-[#34FEF8] mb-2 mt-2 p-3 pl-4 pt-0 placeholder-opacity-60 placeholder-[#34FEF8]"
                >
                  <option
                    value="Select a Category"
                    selected
                    className="block"
                    disabled
                  >
                    Select a rating
                  </option>
                  <option className="py-2" value="99">
                    99
                  </option>
                  <option className="py-2" value="98">
                    98
                  </option>
                  <option className="py-2" value="97">
                    97
                  </option>
                  <option className="py-2" value="96">
                    96
                  </option>
                  <option className="py-2" value="95">
                    95
                  </option>
                  <option className="py-2" value="94">
                    94
                  </option>
                  <option className="py-2" value="93">
                    93
                  </option>
                  <option className="py-2" value="92">
                    92
                  </option>
                  <option className="py-2" value="91">
                    91
                  </option>
                  <option className="py-2" value="90">
                    90
                  </option>
                  <option className="py-2" value="89">
                    89
                  </option>
                  <option className="py-2" value="88">
                    88
                  </option>
                  <option className="py-2" value="87">
                    87
                  </option>
                  <option className="py-2" value="86">
                    86
                  </option>
                  <option className="py-2" value="85">
                    85
                  </option>
                  <option className="py-2" value="84">
                    84
                  </option>
                  <option className="py-2" value="83">
                    83
                  </option>
                  <option className="py-2" value="82">
                    82
                  </option>
                  <option className="py-2" value="81">
                    81
                  </option>
                  <option className="py-2" value="80">
                    80
                  </option>
                  <option className="py-2" value="79">
                    79
                  </option>
                  <option className="py-2" value="78">
                    78
                  </option>
                  <option className="py-2" value="77">
                    77
                  </option>
                  <option className="py-2" value="76">
                    76
                  </option>
                  <option className="py-2" value="75">
                    75
                  </option>
                  <option className="py-2" value="74">
                    74
                  </option>
                  <option className="py-2" value="73">
                    73
                  </option>
                  <option className="py-2" value="72">
                    72
                  </option>
                  <option className="py-2" value="71">
                    71
                  </option>
                  <option className="py-2" value="70">
                    70
                  </option>
                  <option className="py-2" value="69">
                    69
                  </option>
                  <option className="py-2" value="68">
                    68
                  </option>
                  <option className="py-2" value="67">
                    67
                  </option>
                  <option className="py-2" value="66">
                    66
                  </option>
                  <option className="py-2" value="65">
                    65
                  </option>
                  <option className="py-2" value="64">
                    64
                  </option>
                  <option className="py-2" value="63">
                    63
                  </option>
                  <option className="py-2" value="62">
                    62
                  </option>
                  <option className="py-2" value="61">
                    61
                  </option>
                  <option className="py-2" value="60">
                    60
                  </option>
                  <option className="py-2" value="59">
                    59
                  </option>
                  <option className="py-2" value="58">
                    58
                  </option>
                  <option className="py-2" value="57">
                    57
                  </option>
                  <option className="py-2" value="56">
                    56
                  </option>
                  <option className="py-2" value="55">
                    55
                  </option>
                  <option className="py-2" value="54">
                    54
                  </option>
                  <option className="py-2" value="53">
                    53
                  </option>
                  <option className="py-2" value="52">
                    52
                  </option>
                  <option className="py-2" value="51">
                    51
                  </option>
                  <option className="py-2" value="50">
                    50
                  </option>
                  <option className="py-2" value="49">
                    49
                  </option>
                  <option className="py-2" value="48">
                    48
                  </option>
                  <option className="py-2" value="47">
                    47
                  </option>
                  <option className="py-2" value="46">
                    46
                  </option>
                  <option className="py-2" value="45">
                    45
                  </option>
                  <option className="py-2" value="44">
                    44
                  </option>
                  <option className="py-2" value="43">
                    43
                  </option>
                  <option className="py-2" value="42">
                    42
                  </option>
                  <option className="py-2" value="41">
                    41
                  </option>
                  <option className="py-2" value="40">
                    40
                  </option>
                  <option className="py-2" value="39">
                    39
                  </option>
                  <option className="py-2" value="38">
                    38
                  </option>
                  <option className="py-2" value="37">
                    37
                  </option>
                  <option className="py-2" value="36">
                    36
                  </option>
                  <option className="py-2" value="35">
                    35
                  </option>
                  <option className="py-2" value="34">
                    34
                  </option>
                  <option className="py-2" value="33">
                    33
                  </option>
                  <option className="py-2" value="32">
                    32
                  </option>
                  <option className="py-2" value="31">
                    31
                  </option>
                  <option className="py-2" value="30">
                    30
                  </option>
                  <option className="py-2" value="29">
                    29
                  </option>
                  <option className="py-2" value="28">
                    28
                  </option>
                  <option className="py-2" value="27">
                    27
                  </option>
                  <option className="py-2" value="26">
                    26
                  </option>
                  <option className="py-2" value="25">
                    25
                  </option>
                  <option className="py-2" value="24">
                    24
                  </option>
                  <option className="py-2" value="23">
                    23
                  </option>
                  <option className="py-2" value="22">
                    22
                  </option>
                  <option className="py-2" value="21">
                    21
                  </option>
                  <option className="py-2" value="20">
                    20
                  </option>
                  <option className="py-2" value="19">
                    19
                  </option>
                  <option className="py-2" value="18">
                    18
                  </option>
                  <option className="py-2" value="17">
                    17
                  </option>
                  <option className="py-2" value="16">
                    16
                  </option>
                  <option className="py-2" value="15">
                    15
                  </option>
                  <option className="py-2" value="14">
                    14
                  </option>
                  <option className="py-2" value="13">
                    13
                  </option>
                  <option className="py-2" value="12">
                    12
                  </option>
                  <option className="py-2" value="11">
                    11
                  </option>
                  <option className="py-2" value="10">
                    10
                  </option>
                  <option className="py-2" value="9">
                    9
                  </option>
                  <option className="py-2" value="8">
                    8
                  </option>
                  <option className="py-2" value="7">
                    7
                  </option>
                  <option className="py-2" value="6">
                    6
                  </option>
                  <option className="py-2" value="5">
                    5
                  </option>
                  <option className="py-2" value="4">
                    4
                  </option>
                  <option className="py-2" value="3">
                    3
                  </option>
                  <option className="py-2" value="2">
                    2
                  </option>
                  <option className="py-2" value="1">
                    1
                  </option>
                  <option className="py-2" value="0">
                    0
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <label className="mb text-md text-[#34FEF8] font-bold uppercase">
              Long Passing
            </label>
            <br />
            <div
              className="z-[1000]"
              //  style={{transform: 'translate(-50%, -50%)'}}
            >
              <div className="rounded-lg border-[#34FEF8] px-6">
                <select
                  onChange={(e) => {
                    // selectedClass();
                    setLongPassing(e.target.value);
                  }}
                  className="rounder resize-none w-full h-[6rem] bg-[#01112B] text-base border-[5px] border-[#34FEF8] text-[#34FEF8] mb-2 mt-2 p-3 pl-4 pt-0 placeholder-opacity-60 placeholder-[#34FEF8]"
                >
                  <option
                    value="Select a Category"
                    selected
                    className="block"
                    disabled
                  >
                    Select a rating
                  </option>
                  <option className="py-2" value="99">
                    99
                  </option>
                  <option className="py-2" value="98">
                    98
                  </option>
                  <option className="py-2" value="97">
                    97
                  </option>
                  <option className="py-2" value="96">
                    96
                  </option>
                  <option className="py-2" value="95">
                    95
                  </option>
                  <option className="py-2" value="94">
                    94
                  </option>
                  <option className="py-2" value="93">
                    93
                  </option>
                  <option className="py-2" value="92">
                    92
                  </option>
                  <option className="py-2" value="91">
                    91
                  </option>
                  <option className="py-2" value="90">
                    90
                  </option>
                  <option className="py-2" value="89">
                    89
                  </option>
                  <option className="py-2" value="88">
                    88
                  </option>
                  <option className="py-2" value="87">
                    87
                  </option>
                  <option className="py-2" value="86">
                    86
                  </option>
                  <option className="py-2" value="85">
                    85
                  </option>
                  <option className="py-2" value="84">
                    84
                  </option>
                  <option className="py-2" value="83">
                    83
                  </option>
                  <option className="py-2" value="82">
                    82
                  </option>
                  <option className="py-2" value="81">
                    81
                  </option>
                  <option className="py-2" value="80">
                    80
                  </option>
                  <option className="py-2" value="79">
                    79
                  </option>
                  <option className="py-2" value="78">
                    78
                  </option>
                  <option className="py-2" value="77">
                    77
                  </option>
                  <option className="py-2" value="76">
                    76
                  </option>
                  <option className="py-2" value="75">
                    75
                  </option>
                  <option className="py-2" value="74">
                    74
                  </option>
                  <option className="py-2" value="73">
                    73
                  </option>
                  <option className="py-2" value="72">
                    72
                  </option>
                  <option className="py-2" value="71">
                    71
                  </option>
                  <option className="py-2" value="70">
                    70
                  </option>
                  <option className="py-2" value="69">
                    69
                  </option>
                  <option className="py-2" value="68">
                    68
                  </option>
                  <option className="py-2" value="67">
                    67
                  </option>
                  <option className="py-2" value="66">
                    66
                  </option>
                  <option className="py-2" value="65">
                    65
                  </option>
                  <option className="py-2" value="64">
                    64
                  </option>
                  <option className="py-2" value="63">
                    63
                  </option>
                  <option className="py-2" value="62">
                    62
                  </option>
                  <option className="py-2" value="61">
                    61
                  </option>
                  <option className="py-2" value="60">
                    60
                  </option>
                  <option className="py-2" value="59">
                    59
                  </option>
                  <option className="py-2" value="58">
                    58
                  </option>
                  <option className="py-2" value="57">
                    57
                  </option>
                  <option className="py-2" value="56">
                    56
                  </option>
                  <option className="py-2" value="55">
                    55
                  </option>
                  <option className="py-2" value="54">
                    54
                  </option>
                  <option className="py-2" value="53">
                    53
                  </option>
                  <option className="py-2" value="52">
                    52
                  </option>
                  <option className="py-2" value="51">
                    51
                  </option>
                  <option className="py-2" value="50">
                    50
                  </option>
                  <option className="py-2" value="49">
                    49
                  </option>
                  <option className="py-2" value="48">
                    48
                  </option>
                  <option className="py-2" value="47">
                    47
                  </option>
                  <option className="py-2" value="46">
                    46
                  </option>
                  <option className="py-2" value="45">
                    45
                  </option>
                  <option className="py-2" value="44">
                    44
                  </option>
                  <option className="py-2" value="43">
                    43
                  </option>
                  <option className="py-2" value="42">
                    42
                  </option>
                  <option className="py-2" value="41">
                    41
                  </option>
                  <option className="py-2" value="40">
                    40
                  </option>
                  <option className="py-2" value="39">
                    39
                  </option>
                  <option className="py-2" value="38">
                    38
                  </option>
                  <option className="py-2" value="37">
                    37
                  </option>
                  <option className="py-2" value="36">
                    36
                  </option>
                  <option className="py-2" value="35">
                    35
                  </option>
                  <option className="py-2" value="34">
                    34
                  </option>
                  <option className="py-2" value="33">
                    33
                  </option>
                  <option className="py-2" value="32">
                    32
                  </option>
                  <option className="py-2" value="31">
                    31
                  </option>
                  <option className="py-2" value="30">
                    30
                  </option>
                  <option className="py-2" value="29">
                    29
                  </option>
                  <option className="py-2" value="28">
                    28
                  </option>
                  <option className="py-2" value="27">
                    27
                  </option>
                  <option className="py-2" value="26">
                    26
                  </option>
                  <option className="py-2" value="25">
                    25
                  </option>
                  <option className="py-2" value="24">
                    24
                  </option>
                  <option className="py-2" value="23">
                    23
                  </option>
                  <option className="py-2" value="22">
                    22
                  </option>
                  <option className="py-2" value="21">
                    21
                  </option>
                  <option className="py-2" value="20">
                    20
                  </option>
                  <option className="py-2" value="19">
                    19
                  </option>
                  <option className="py-2" value="18">
                    18
                  </option>
                  <option className="py-2" value="17">
                    17
                  </option>
                  <option className="py-2" value="16">
                    16
                  </option>
                  <option className="py-2" value="15">
                    15
                  </option>
                  <option className="py-2" value="14">
                    14
                  </option>
                  <option className="py-2" value="13">
                    13
                  </option>
                  <option className="py-2" value="12">
                    12
                  </option>
                  <option className="py-2" value="11">
                    11
                  </option>
                  <option className="py-2" value="10">
                    10
                  </option>
                  <option className="py-2" value="9">
                    9
                  </option>
                  <option className="py-2" value="8">
                    8
                  </option>
                  <option className="py-2" value="7">
                    7
                  </option>
                  <option className="py-2" value="6">
                    6
                  </option>
                  <option className="py-2" value="5">
                    5
                  </option>
                  <option className="py-2" value="4">
                    4
                  </option>
                  <option className="py-2" value="3">
                    3
                  </option>
                  <option className="py-2" value="2">
                    2
                  </option>
                  <option className="py-2" value="1">
                    1
                  </option>
                  <option className="py-2" value="0">
                    0
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <label className="mb text-md text-[#34FEF8] font-bold uppercase">
              Long Shot
            </label>
            <br />
            <div
              className="z-[1000]"
              //  style={{transform: 'translate(-50%, -50%)'}}
            >
              <div className="rounded-lg border-[#34FEF8] px-6">
                <select
                  onChange={(e) => {
                    // selectedClass();
                    setLongShot(e.target.value);
                  }}
                  className="rounder resize-none w-full h-[6rem] bg-[#01112B] text-base border-[5px] border-[#34FEF8] text-[#34FEF8] mb-2 mt-2 p-3 pl-4 pt-0 placeholder-opacity-60 placeholder-[#34FEF8]"
                >
                  <option
                    value="Select a Category"
                    selected
                    className="block"
                    disabled
                  >
                    Select a rating
                  </option>
                  <option className="py-2" value="99">
                    99
                  </option>
                  <option className="py-2" value="98">
                    98
                  </option>
                  <option className="py-2" value="97">
                    97
                  </option>
                  <option className="py-2" value="96">
                    96
                  </option>
                  <option className="py-2" value="95">
                    95
                  </option>
                  <option className="py-2" value="94">
                    94
                  </option>
                  <option className="py-2" value="93">
                    93
                  </option>
                  <option className="py-2" value="92">
                    92
                  </option>
                  <option className="py-2" value="91">
                    91
                  </option>
                  <option className="py-2" value="90">
                    90
                  </option>
                  <option className="py-2" value="89">
                    89
                  </option>
                  <option className="py-2" value="88">
                    88
                  </option>
                  <option className="py-2" value="87">
                    87
                  </option>
                  <option className="py-2" value="86">
                    86
                  </option>
                  <option className="py-2" value="85">
                    85
                  </option>
                  <option className="py-2" value="84">
                    84
                  </option>
                  <option className="py-2" value="83">
                    83
                  </option>
                  <option className="py-2" value="82">
                    82
                  </option>
                  <option className="py-2" value="81">
                    81
                  </option>
                  <option className="py-2" value="80">
                    80
                  </option>
                  <option className="py-2" value="79">
                    79
                  </option>
                  <option className="py-2" value="78">
                    78
                  </option>
                  <option className="py-2" value="77">
                    77
                  </option>
                  <option className="py-2" value="76">
                    76
                  </option>
                  <option className="py-2" value="75">
                    75
                  </option>
                  <option className="py-2" value="74">
                    74
                  </option>
                  <option className="py-2" value="73">
                    73
                  </option>
                  <option className="py-2" value="72">
                    72
                  </option>
                  <option className="py-2" value="71">
                    71
                  </option>
                  <option className="py-2" value="70">
                    70
                  </option>
                  <option className="py-2" value="69">
                    69
                  </option>
                  <option className="py-2" value="68">
                    68
                  </option>
                  <option className="py-2" value="67">
                    67
                  </option>
                  <option className="py-2" value="66">
                    66
                  </option>
                  <option className="py-2" value="65">
                    65
                  </option>
                  <option className="py-2" value="64">
                    64
                  </option>
                  <option className="py-2" value="63">
                    63
                  </option>
                  <option className="py-2" value="62">
                    62
                  </option>
                  <option className="py-2" value="61">
                    61
                  </option>
                  <option className="py-2" value="60">
                    60
                  </option>
                  <option className="py-2" value="59">
                    59
                  </option>
                  <option className="py-2" value="58">
                    58
                  </option>
                  <option className="py-2" value="57">
                    57
                  </option>
                  <option className="py-2" value="56">
                    56
                  </option>
                  <option className="py-2" value="55">
                    55
                  </option>
                  <option className="py-2" value="54">
                    54
                  </option>
                  <option className="py-2" value="53">
                    53
                  </option>
                  <option className="py-2" value="52">
                    52
                  </option>
                  <option className="py-2" value="51">
                    51
                  </option>
                  <option className="py-2" value="50">
                    50
                  </option>
                  <option className="py-2" value="49">
                    49
                  </option>
                  <option className="py-2" value="48">
                    48
                  </option>
                  <option className="py-2" value="47">
                    47
                  </option>
                  <option className="py-2" value="46">
                    46
                  </option>
                  <option className="py-2" value="45">
                    45
                  </option>
                  <option className="py-2" value="44">
                    44
                  </option>
                  <option className="py-2" value="43">
                    43
                  </option>
                  <option className="py-2" value="42">
                    42
                  </option>
                  <option className="py-2" value="41">
                    41
                  </option>
                  <option className="py-2" value="40">
                    40
                  </option>
                  <option className="py-2" value="39">
                    39
                  </option>
                  <option className="py-2" value="38">
                    38
                  </option>
                  <option className="py-2" value="37">
                    37
                  </option>
                  <option className="py-2" value="36">
                    36
                  </option>
                  <option className="py-2" value="35">
                    35
                  </option>
                  <option className="py-2" value="34">
                    34
                  </option>
                  <option className="py-2" value="33">
                    33
                  </option>
                  <option className="py-2" value="32">
                    32
                  </option>
                  <option className="py-2" value="31">
                    31
                  </option>
                  <option className="py-2" value="30">
                    30
                  </option>
                  <option className="py-2" value="29">
                    29
                  </option>
                  <option className="py-2" value="28">
                    28
                  </option>
                  <option className="py-2" value="27">
                    27
                  </option>
                  <option className="py-2" value="26">
                    26
                  </option>
                  <option className="py-2" value="25">
                    25
                  </option>
                  <option className="py-2" value="24">
                    24
                  </option>
                  <option className="py-2" value="23">
                    23
                  </option>
                  <option className="py-2" value="22">
                    22
                  </option>
                  <option className="py-2" value="21">
                    21
                  </option>
                  <option className="py-2" value="20">
                    20
                  </option>
                  <option className="py-2" value="19">
                    19
                  </option>
                  <option className="py-2" value="18">
                    18
                  </option>
                  <option className="py-2" value="17">
                    17
                  </option>
                  <option className="py-2" value="16">
                    16
                  </option>
                  <option className="py-2" value="15">
                    15
                  </option>
                  <option className="py-2" value="14">
                    14
                  </option>
                  <option className="py-2" value="13">
                    13
                  </option>
                  <option className="py-2" value="12">
                    12
                  </option>
                  <option className="py-2" value="11">
                    11
                  </option>
                  <option className="py-2" value="10">
                    10
                  </option>
                  <option className="py-2" value="9">
                    9
                  </option>
                  <option className="py-2" value="8">
                    8
                  </option>
                  <option className="py-2" value="7">
                    7
                  </option>
                  <option className="py-2" value="6">
                    6
                  </option>
                  <option className="py-2" value="5">
                    5
                  </option>
                  <option className="py-2" value="4">
                    4
                  </option>
                  <option className="py-2" value="3">
                    3
                  </option>
                  <option className="py-2" value="2">
                    2
                  </option>
                  <option className="py-2" value="1">
                    1
                  </option>
                  <option className="py-2" value="0">
                    0
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <label className="mb text-md text-[#34FEF8] font-bold uppercase">
              Marking
            </label>
            <br />
            <div
              className="z-[1000]"
              //  style={{transform: 'translate(-50%, -50%)'}}
            >
              <div className="rounded-lg border-[#34FEF8] px-6">
                <select
                  onChange={(e) => {
                    // selectedClass();
                    setMarking(e.target.value);
                  }}
                  className="rounder resize-none w-full h-[6rem] bg-[#01112B] text-base border-[5px] border-[#34FEF8] text-[#34FEF8] mb-2 mt-2 p-3 pl-4 pt-0 placeholder-opacity-60 placeholder-[#34FEF8]"
                >
                  <option
                    value="Select a Category"
                    selected
                    className="block"
                    disabled
                  >
                    Select a rating
                  </option>
                  <option className="py-2" value="99">
                    99
                  </option>
                  <option className="py-2" value="98">
                    98
                  </option>
                  <option className="py-2" value="97">
                    97
                  </option>
                  <option className="py-2" value="96">
                    96
                  </option>
                  <option className="py-2" value="95">
                    95
                  </option>
                  <option className="py-2" value="94">
                    94
                  </option>
                  <option className="py-2" value="93">
                    93
                  </option>
                  <option className="py-2" value="92">
                    92
                  </option>
                  <option className="py-2" value="91">
                    91
                  </option>
                  <option className="py-2" value="90">
                    90
                  </option>
                  <option className="py-2" value="89">
                    89
                  </option>
                  <option className="py-2" value="88">
                    88
                  </option>
                  <option className="py-2" value="87">
                    87
                  </option>
                  <option className="py-2" value="86">
                    86
                  </option>
                  <option className="py-2" value="85">
                    85
                  </option>
                  <option className="py-2" value="84">
                    84
                  </option>
                  <option className="py-2" value="83">
                    83
                  </option>
                  <option className="py-2" value="82">
                    82
                  </option>
                  <option className="py-2" value="81">
                    81
                  </option>
                  <option className="py-2" value="80">
                    80
                  </option>
                  <option className="py-2" value="79">
                    79
                  </option>
                  <option className="py-2" value="78">
                    78
                  </option>
                  <option className="py-2" value="77">
                    77
                  </option>
                  <option className="py-2" value="76">
                    76
                  </option>
                  <option className="py-2" value="75">
                    75
                  </option>
                  <option className="py-2" value="74">
                    74
                  </option>
                  <option className="py-2" value="73">
                    73
                  </option>
                  <option className="py-2" value="72">
                    72
                  </option>
                  <option className="py-2" value="71">
                    71
                  </option>
                  <option className="py-2" value="70">
                    70
                  </option>
                  <option className="py-2" value="69">
                    69
                  </option>
                  <option className="py-2" value="68">
                    68
                  </option>
                  <option className="py-2" value="67">
                    67
                  </option>
                  <option className="py-2" value="66">
                    66
                  </option>
                  <option className="py-2" value="65">
                    65
                  </option>
                  <option className="py-2" value="64">
                    64
                  </option>
                  <option className="py-2" value="63">
                    63
                  </option>
                  <option className="py-2" value="62">
                    62
                  </option>
                  <option className="py-2" value="61">
                    61
                  </option>
                  <option className="py-2" value="60">
                    60
                  </option>
                  <option className="py-2" value="59">
                    59
                  </option>
                  <option className="py-2" value="58">
                    58
                  </option>
                  <option className="py-2" value="57">
                    57
                  </option>
                  <option className="py-2" value="56">
                    56
                  </option>
                  <option className="py-2" value="55">
                    55
                  </option>
                  <option className="py-2" value="54">
                    54
                  </option>
                  <option className="py-2" value="53">
                    53
                  </option>
                  <option className="py-2" value="52">
                    52
                  </option>
                  <option className="py-2" value="51">
                    51
                  </option>
                  <option className="py-2" value="50">
                    50
                  </option>
                  <option className="py-2" value="49">
                    49
                  </option>
                  <option className="py-2" value="48">
                    48
                  </option>
                  <option className="py-2" value="47">
                    47
                  </option>
                  <option className="py-2" value="46">
                    46
                  </option>
                  <option className="py-2" value="45">
                    45
                  </option>
                  <option className="py-2" value="44">
                    44
                  </option>
                  <option className="py-2" value="43">
                    43
                  </option>
                  <option className="py-2" value="42">
                    42
                  </option>
                  <option className="py-2" value="41">
                    41
                  </option>
                  <option className="py-2" value="40">
                    40
                  </option>
                  <option className="py-2" value="39">
                    39
                  </option>
                  <option className="py-2" value="38">
                    38
                  </option>
                  <option className="py-2" value="37">
                    37
                  </option>
                  <option className="py-2" value="36">
                    36
                  </option>
                  <option className="py-2" value="35">
                    35
                  </option>
                  <option className="py-2" value="34">
                    34
                  </option>
                  <option className="py-2" value="33">
                    33
                  </option>
                  <option className="py-2" value="32">
                    32
                  </option>
                  <option className="py-2" value="31">
                    31
                  </option>
                  <option className="py-2" value="30">
                    30
                  </option>
                  <option className="py-2" value="29">
                    29
                  </option>
                  <option className="py-2" value="28">
                    28
                  </option>
                  <option className="py-2" value="27">
                    27
                  </option>
                  <option className="py-2" value="26">
                    26
                  </option>
                  <option className="py-2" value="25">
                    25
                  </option>
                  <option className="py-2" value="24">
                    24
                  </option>
                  <option className="py-2" value="23">
                    23
                  </option>
                  <option className="py-2" value="22">
                    22
                  </option>
                  <option className="py-2" value="21">
                    21
                  </option>
                  <option className="py-2" value="20">
                    20
                  </option>
                  <option className="py-2" value="19">
                    19
                  </option>
                  <option className="py-2" value="18">
                    18
                  </option>
                  <option className="py-2" value="17">
                    17
                  </option>
                  <option className="py-2" value="16">
                    16
                  </option>
                  <option className="py-2" value="15">
                    15
                  </option>
                  <option className="py-2" value="14">
                    14
                  </option>
                  <option className="py-2" value="13">
                    13
                  </option>
                  <option className="py-2" value="12">
                    12
                  </option>
                  <option className="py-2" value="11">
                    11
                  </option>
                  <option className="py-2" value="10">
                    10
                  </option>
                  <option className="py-2" value="9">
                    9
                  </option>
                  <option className="py-2" value="8">
                    8
                  </option>
                  <option className="py-2" value="7">
                    7
                  </option>
                  <option className="py-2" value="6">
                    6
                  </option>
                  <option className="py-2" value="5">
                    5
                  </option>
                  <option className="py-2" value="4">
                    4
                  </option>
                  <option className="py-2" value="3">
                    3
                  </option>
                  <option className="py-2" value="2">
                    2
                  </option>
                  <option className="py-2" value="1">
                    1
                  </option>
                  <option className="py-2" value="0">
                    0
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <label className="mb text-md text-[#34FEF8] font-bold uppercase">
              Pace
            </label>
            <br />
            <div
              className="z-[1000]"
              //  style={{transform: 'translate(-50%, -50%)'}}
            >
              <div className="rounded-lg border-[#34FEF8] px-6">
                <select
                  onChange={(e) => {
                    // selectedClass();
                    setPace(e.target.value);
                  }}
                  className="rounder resize-none w-full h-[6rem] bg-[#01112B] text-base border-[5px] border-[#34FEF8] text-[#34FEF8] mb-2 mt-2 p-3 pl-4 pt-0 placeholder-opacity-60 placeholder-[#34FEF8]"
                >
                  <option
                    value="Select a Category"
                    selected
                    className="block"
                    disabled
                  >
                    Select a rating
                  </option>
                  <option className="py-2" value="99">
                    99
                  </option>
                  <option className="py-2" value="98">
                    98
                  </option>
                  <option className="py-2" value="97">
                    97
                  </option>
                  <option className="py-2" value="96">
                    96
                  </option>
                  <option className="py-2" value="95">
                    95
                  </option>
                  <option className="py-2" value="94">
                    94
                  </option>
                  <option className="py-2" value="93">
                    93
                  </option>
                  <option className="py-2" value="92">
                    92
                  </option>
                  <option className="py-2" value="91">
                    91
                  </option>
                  <option className="py-2" value="90">
                    90
                  </option>
                  <option className="py-2" value="89">
                    89
                  </option>
                  <option className="py-2" value="88">
                    88
                  </option>
                  <option className="py-2" value="87">
                    87
                  </option>
                  <option className="py-2" value="86">
                    86
                  </option>
                  <option className="py-2" value="85">
                    85
                  </option>
                  <option className="py-2" value="84">
                    84
                  </option>
                  <option className="py-2" value="83">
                    83
                  </option>
                  <option className="py-2" value="82">
                    82
                  </option>
                  <option className="py-2" value="81">
                    81
                  </option>
                  <option className="py-2" value="80">
                    80
                  </option>
                  <option className="py-2" value="79">
                    79
                  </option>
                  <option className="py-2" value="78">
                    78
                  </option>
                  <option className="py-2" value="77">
                    77
                  </option>
                  <option className="py-2" value="76">
                    76
                  </option>
                  <option className="py-2" value="75">
                    75
                  </option>
                  <option className="py-2" value="74">
                    74
                  </option>
                  <option className="py-2" value="73">
                    73
                  </option>
                  <option className="py-2" value="72">
                    72
                  </option>
                  <option className="py-2" value="71">
                    71
                  </option>
                  <option className="py-2" value="70">
                    70
                  </option>
                  <option className="py-2" value="69">
                    69
                  </option>
                  <option className="py-2" value="68">
                    68
                  </option>
                  <option className="py-2" value="67">
                    67
                  </option>
                  <option className="py-2" value="66">
                    66
                  </option>
                  <option className="py-2" value="65">
                    65
                  </option>
                  <option className="py-2" value="64">
                    64
                  </option>
                  <option className="py-2" value="63">
                    63
                  </option>
                  <option className="py-2" value="62">
                    62
                  </option>
                  <option className="py-2" value="61">
                    61
                  </option>
                  <option className="py-2" value="60">
                    60
                  </option>
                  <option className="py-2" value="59">
                    59
                  </option>
                  <option className="py-2" value="58">
                    58
                  </option>
                  <option className="py-2" value="57">
                    57
                  </option>
                  <option className="py-2" value="56">
                    56
                  </option>
                  <option className="py-2" value="55">
                    55
                  </option>
                  <option className="py-2" value="54">
                    54
                  </option>
                  <option className="py-2" value="53">
                    53
                  </option>
                  <option className="py-2" value="52">
                    52
                  </option>
                  <option className="py-2" value="51">
                    51
                  </option>
                  <option className="py-2" value="50">
                    50
                  </option>
                  <option className="py-2" value="49">
                    49
                  </option>
                  <option className="py-2" value="48">
                    48
                  </option>
                  <option className="py-2" value="47">
                    47
                  </option>
                  <option className="py-2" value="46">
                    46
                  </option>
                  <option className="py-2" value="45">
                    45
                  </option>
                  <option className="py-2" value="44">
                    44
                  </option>
                  <option className="py-2" value="43">
                    43
                  </option>
                  <option className="py-2" value="42">
                    42
                  </option>
                  <option className="py-2" value="41">
                    41
                  </option>
                  <option className="py-2" value="40">
                    40
                  </option>
                  <option className="py-2" value="39">
                    39
                  </option>
                  <option className="py-2" value="38">
                    38
                  </option>
                  <option className="py-2" value="37">
                    37
                  </option>
                  <option className="py-2" value="36">
                    36
                  </option>
                  <option className="py-2" value="35">
                    35
                  </option>
                  <option className="py-2" value="34">
                    34
                  </option>
                  <option className="py-2" value="33">
                    33
                  </option>
                  <option className="py-2" value="32">
                    32
                  </option>
                  <option className="py-2" value="31">
                    31
                  </option>
                  <option className="py-2" value="30">
                    30
                  </option>
                  <option className="py-2" value="29">
                    29
                  </option>
                  <option className="py-2" value="28">
                    28
                  </option>
                  <option className="py-2" value="27">
                    27
                  </option>
                  <option className="py-2" value="26">
                    26
                  </option>
                  <option className="py-2" value="25">
                    25
                  </option>
                  <option className="py-2" value="24">
                    24
                  </option>
                  <option className="py-2" value="23">
                    23
                  </option>
                  <option className="py-2" value="22">
                    22
                  </option>
                  <option className="py-2" value="21">
                    21
                  </option>
                  <option className="py-2" value="20">
                    20
                  </option>
                  <option className="py-2" value="19">
                    19
                  </option>
                  <option className="py-2" value="18">
                    18
                  </option>
                  <option className="py-2" value="17">
                    17
                  </option>
                  <option className="py-2" value="16">
                    16
                  </option>
                  <option className="py-2" value="15">
                    15
                  </option>
                  <option className="py-2" value="14">
                    14
                  </option>
                  <option className="py-2" value="13">
                    13
                  </option>
                  <option className="py-2" value="12">
                    12
                  </option>
                  <option className="py-2" value="11">
                    11
                  </option>
                  <option className="py-2" value="10">
                    10
                  </option>
                  <option className="py-2" value="9">
                    9
                  </option>
                  <option className="py-2" value="8">
                    8
                  </option>
                  <option className="py-2" value="7">
                    7
                  </option>
                  <option className="py-2" value="6">
                    6
                  </option>
                  <option className="py-2" value="5">
                    5
                  </option>
                  <option className="py-2" value="4">
                    4
                  </option>
                  <option className="py-2" value="3">
                    3
                  </option>
                  <option className="py-2" value="2">
                    2
                  </option>
                  <option className="py-2" value="1">
                    1
                  </option>
                  <option className="py-2" value="0">
                    0
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <label className="mb text-md text-[#34FEF8] font-bold uppercase">
              Passing
            </label>
            <br />
            <div
              className="z-[1000]"
              //  style={{transform: 'translate(-50%, -50%)'}}
            >
              <div className="rounded-lg border-[#34FEF8] px-6">
                <select
                  onChange={(e) => {
                    // selectedClass();
                    setPassing(e.target.value);
                  }}
                  className="rounder resize-none w-full h-[6rem] bg-[#01112B] text-base border-[5px] border-[#34FEF8] text-[#34FEF8] mb-2 mt-2 p-3 pl-4 pt-0 placeholder-opacity-60 placeholder-[#34FEF8]"
                >
                  <option
                    value="Select a Category"
                    selected
                    className="block"
                    disabled
                  >
                    Select a rating
                  </option>
                  <option className="py-2" value="99">
                    99
                  </option>
                  <option className="py-2" value="98">
                    98
                  </option>
                  <option className="py-2" value="97">
                    97
                  </option>
                  <option className="py-2" value="96">
                    96
                  </option>
                  <option className="py-2" value="95">
                    95
                  </option>
                  <option className="py-2" value="94">
                    94
                  </option>
                  <option className="py-2" value="93">
                    93
                  </option>
                  <option className="py-2" value="92">
                    92
                  </option>
                  <option className="py-2" value="91">
                    91
                  </option>
                  <option className="py-2" value="90">
                    90
                  </option>
                  <option className="py-2" value="89">
                    89
                  </option>
                  <option className="py-2" value="88">
                    88
                  </option>
                  <option className="py-2" value="87">
                    87
                  </option>
                  <option className="py-2" value="86">
                    86
                  </option>
                  <option className="py-2" value="85">
                    85
                  </option>
                  <option className="py-2" value="84">
                    84
                  </option>
                  <option className="py-2" value="83">
                    83
                  </option>
                  <option className="py-2" value="82">
                    82
                  </option>
                  <option className="py-2" value="81">
                    81
                  </option>
                  <option className="py-2" value="80">
                    80
                  </option>
                  <option className="py-2" value="79">
                    79
                  </option>
                  <option className="py-2" value="78">
                    78
                  </option>
                  <option className="py-2" value="77">
                    77
                  </option>
                  <option className="py-2" value="76">
                    76
                  </option>
                  <option className="py-2" value="75">
                    75
                  </option>
                  <option className="py-2" value="74">
                    74
                  </option>
                  <option className="py-2" value="73">
                    73
                  </option>
                  <option className="py-2" value="72">
                    72
                  </option>
                  <option className="py-2" value="71">
                    71
                  </option>
                  <option className="py-2" value="70">
                    70
                  </option>
                  <option className="py-2" value="69">
                    69
                  </option>
                  <option className="py-2" value="68">
                    68
                  </option>
                  <option className="py-2" value="67">
                    67
                  </option>
                  <option className="py-2" value="66">
                    66
                  </option>
                  <option className="py-2" value="65">
                    65
                  </option>
                  <option className="py-2" value="64">
                    64
                  </option>
                  <option className="py-2" value="63">
                    63
                  </option>
                  <option className="py-2" value="62">
                    62
                  </option>
                  <option className="py-2" value="61">
                    61
                  </option>
                  <option className="py-2" value="60">
                    60
                  </option>
                  <option className="py-2" value="59">
                    59
                  </option>
                  <option className="py-2" value="58">
                    58
                  </option>
                  <option className="py-2" value="57">
                    57
                  </option>
                  <option className="py-2" value="56">
                    56
                  </option>
                  <option className="py-2" value="55">
                    55
                  </option>
                  <option className="py-2" value="54">
                    54
                  </option>
                  <option className="py-2" value="53">
                    53
                  </option>
                  <option className="py-2" value="52">
                    52
                  </option>
                  <option className="py-2" value="51">
                    51
                  </option>
                  <option className="py-2" value="50">
                    50
                  </option>
                  <option className="py-2" value="49">
                    49
                  </option>
                  <option className="py-2" value="48">
                    48
                  </option>
                  <option className="py-2" value="47">
                    47
                  </option>
                  <option className="py-2" value="46">
                    46
                  </option>
                  <option className="py-2" value="45">
                    45
                  </option>
                  <option className="py-2" value="44">
                    44
                  </option>
                  <option className="py-2" value="43">
                    43
                  </option>
                  <option className="py-2" value="42">
                    42
                  </option>
                  <option className="py-2" value="41">
                    41
                  </option>
                  <option className="py-2" value="40">
                    40
                  </option>
                  <option className="py-2" value="39">
                    39
                  </option>
                  <option className="py-2" value="38">
                    38
                  </option>
                  <option className="py-2" value="37">
                    37
                  </option>
                  <option className="py-2" value="36">
                    36
                  </option>
                  <option className="py-2" value="35">
                    35
                  </option>
                  <option className="py-2" value="34">
                    34
                  </option>
                  <option className="py-2" value="33">
                    33
                  </option>
                  <option className="py-2" value="32">
                    32
                  </option>
                  <option className="py-2" value="31">
                    31
                  </option>
                  <option className="py-2" value="30">
                    30
                  </option>
                  <option className="py-2" value="29">
                    29
                  </option>
                  <option className="py-2" value="28">
                    28
                  </option>
                  <option className="py-2" value="27">
                    27
                  </option>
                  <option className="py-2" value="26">
                    26
                  </option>
                  <option className="py-2" value="25">
                    25
                  </option>
                  <option className="py-2" value="24">
                    24
                  </option>
                  <option className="py-2" value="23">
                    23
                  </option>
                  <option className="py-2" value="22">
                    22
                  </option>
                  <option className="py-2" value="21">
                    21
                  </option>
                  <option className="py-2" value="20">
                    20
                  </option>
                  <option className="py-2" value="19">
                    19
                  </option>
                  <option className="py-2" value="18">
                    18
                  </option>
                  <option className="py-2" value="17">
                    17
                  </option>
                  <option className="py-2" value="16">
                    16
                  </option>
                  <option className="py-2" value="15">
                    15
                  </option>
                  <option className="py-2" value="14">
                    14
                  </option>
                  <option className="py-2" value="13">
                    13
                  </option>
                  <option className="py-2" value="12">
                    12
                  </option>
                  <option className="py-2" value="11">
                    11
                  </option>
                  <option className="py-2" value="10">
                    10
                  </option>
                  <option className="py-2" value="9">
                    9
                  </option>
                  <option className="py-2" value="8">
                    8
                  </option>
                  <option className="py-2" value="7">
                    7
                  </option>
                  <option className="py-2" value="6">
                    6
                  </option>
                  <option className="py-2" value="5">
                    5
                  </option>
                  <option className="py-2" value="4">
                    4
                  </option>
                  <option className="py-2" value="3">
                    3
                  </option>
                  <option className="py-2" value="2">
                    2
                  </option>
                  <option className="py-2" value="1">
                    1
                  </option>
                  <option className="py-2" value="0">
                    0
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <label className="mb text-md text-[#34FEF8] font-bold uppercase">
              Penalties
            </label>
            <br />
            <div
              className="z-[1000]"
              //  style={{transform: 'translate(-50%, -50%)'}}
            >
              <div className="rounded-lg border-[#34FEF8] px-6">
                <select
                  onChange={(e) => {
                    // selectedClass();
                    setPenalties(e.target.value);
                  }}
                  className="rounder resize-none w-full h-[6rem] bg-[#01112B] text-base border-[5px] border-[#34FEF8] text-[#34FEF8] mb-2 mt-2 p-3 pl-4 pt-0 placeholder-opacity-60 placeholder-[#34FEF8]"
                >
                  <option
                    value="Select a Category"
                    selected
                    className="block"
                    disabled
                  >
                    Select a rating
                  </option>
                  <option className="py-2" value="99">
                    99
                  </option>
                  <option className="py-2" value="98">
                    98
                  </option>
                  <option className="py-2" value="97">
                    97
                  </option>
                  <option className="py-2" value="96">
                    96
                  </option>
                  <option className="py-2" value="95">
                    95
                  </option>
                  <option className="py-2" value="94">
                    94
                  </option>
                  <option className="py-2" value="93">
                    93
                  </option>
                  <option className="py-2" value="92">
                    92
                  </option>
                  <option className="py-2" value="91">
                    91
                  </option>
                  <option className="py-2" value="90">
                    90
                  </option>
                  <option className="py-2" value="89">
                    89
                  </option>
                  <option className="py-2" value="88">
                    88
                  </option>
                  <option className="py-2" value="87">
                    87
                  </option>
                  <option className="py-2" value="86">
                    86
                  </option>
                  <option className="py-2" value="85">
                    85
                  </option>
                  <option className="py-2" value="84">
                    84
                  </option>
                  <option className="py-2" value="83">
                    83
                  </option>
                  <option className="py-2" value="82">
                    82
                  </option>
                  <option className="py-2" value="81">
                    81
                  </option>
                  <option className="py-2" value="80">
                    80
                  </option>
                  <option className="py-2" value="79">
                    79
                  </option>
                  <option className="py-2" value="78">
                    78
                  </option>
                  <option className="py-2" value="77">
                    77
                  </option>
                  <option className="py-2" value="76">
                    76
                  </option>
                  <option className="py-2" value="75">
                    75
                  </option>
                  <option className="py-2" value="74">
                    74
                  </option>
                  <option className="py-2" value="73">
                    73
                  </option>
                  <option className="py-2" value="72">
                    72
                  </option>
                  <option className="py-2" value="71">
                    71
                  </option>
                  <option className="py-2" value="70">
                    70
                  </option>
                  <option className="py-2" value="69">
                    69
                  </option>
                  <option className="py-2" value="68">
                    68
                  </option>
                  <option className="py-2" value="67">
                    67
                  </option>
                  <option className="py-2" value="66">
                    66
                  </option>
                  <option className="py-2" value="65">
                    65
                  </option>
                  <option className="py-2" value="64">
                    64
                  </option>
                  <option className="py-2" value="63">
                    63
                  </option>
                  <option className="py-2" value="62">
                    62
                  </option>
                  <option className="py-2" value="61">
                    61
                  </option>
                  <option className="py-2" value="60">
                    60
                  </option>
                  <option className="py-2" value="59">
                    59
                  </option>
                  <option className="py-2" value="58">
                    58
                  </option>
                  <option className="py-2" value="57">
                    57
                  </option>
                  <option className="py-2" value="56">
                    56
                  </option>
                  <option className="py-2" value="55">
                    55
                  </option>
                  <option className="py-2" value="54">
                    54
                  </option>
                  <option className="py-2" value="53">
                    53
                  </option>
                  <option className="py-2" value="52">
                    52
                  </option>
                  <option className="py-2" value="51">
                    51
                  </option>
                  <option className="py-2" value="50">
                    50
                  </option>
                  <option className="py-2" value="49">
                    49
                  </option>
                  <option className="py-2" value="48">
                    48
                  </option>
                  <option className="py-2" value="47">
                    47
                  </option>
                  <option className="py-2" value="46">
                    46
                  </option>
                  <option className="py-2" value="45">
                    45
                  </option>
                  <option className="py-2" value="44">
                    44
                  </option>
                  <option className="py-2" value="43">
                    43
                  </option>
                  <option className="py-2" value="42">
                    42
                  </option>
                  <option className="py-2" value="41">
                    41
                  </option>
                  <option className="py-2" value="40">
                    40
                  </option>
                  <option className="py-2" value="39">
                    39
                  </option>
                  <option className="py-2" value="38">
                    38
                  </option>
                  <option className="py-2" value="37">
                    37
                  </option>
                  <option className="py-2" value="36">
                    36
                  </option>
                  <option className="py-2" value="35">
                    35
                  </option>
                  <option className="py-2" value="34">
                    34
                  </option>
                  <option className="py-2" value="33">
                    33
                  </option>
                  <option className="py-2" value="32">
                    32
                  </option>
                  <option className="py-2" value="31">
                    31
                  </option>
                  <option className="py-2" value="30">
                    30
                  </option>
                  <option className="py-2" value="29">
                    29
                  </option>
                  <option className="py-2" value="28">
                    28
                  </option>
                  <option className="py-2" value="27">
                    27
                  </option>
                  <option className="py-2" value="26">
                    26
                  </option>
                  <option className="py-2" value="25">
                    25
                  </option>
                  <option className="py-2" value="24">
                    24
                  </option>
                  <option className="py-2" value="23">
                    23
                  </option>
                  <option className="py-2" value="22">
                    22
                  </option>
                  <option className="py-2" value="21">
                    21
                  </option>
                  <option className="py-2" value="20">
                    20
                  </option>
                  <option className="py-2" value="19">
                    19
                  </option>
                  <option className="py-2" value="18">
                    18
                  </option>
                  <option className="py-2" value="17">
                    17
                  </option>
                  <option className="py-2" value="16">
                    16
                  </option>
                  <option className="py-2" value="15">
                    15
                  </option>
                  <option className="py-2" value="14">
                    14
                  </option>
                  <option className="py-2" value="13">
                    13
                  </option>
                  <option className="py-2" value="12">
                    12
                  </option>
                  <option className="py-2" value="11">
                    11
                  </option>
                  <option className="py-2" value="10">
                    10
                  </option>
                  <option className="py-2" value="9">
                    9
                  </option>
                  <option className="py-2" value="8">
                    8
                  </option>
                  <option className="py-2" value="7">
                    7
                  </option>
                  <option className="py-2" value="6">
                    6
                  </option>
                  <option className="py-2" value="5">
                    5
                  </option>
                  <option className="py-2" value="4">
                    4
                  </option>
                  <option className="py-2" value="3">
                    3
                  </option>
                  <option className="py-2" value="2">
                    2
                  </option>
                  <option className="py-2" value="1">
                    1
                  </option>
                  <option className="py-2" value="0">
                    0
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <label className="mb text-md text-[#34FEF8] font-bold uppercase">
              Physical
            </label>
            <br />
            <div
              className="z-[1000]"
              //  style={{transform: 'translate(-50%, -50%)'}}
            >
              <div className="rounded-lg border-[#34FEF8] px-6">
                <select
                  onChange={(e) => {
                    // selectedClass();
                    setPhysical(e.target.value);
                  }}
                  className="rounder resize-none w-full h-[6rem] bg-[#01112B] text-base border-[5px] border-[#34FEF8] text-[#34FEF8] mb-2 mt-2 p-3 pl-4 pt-0 placeholder-opacity-60 placeholder-[#34FEF8]"
                >
                  <option
                    value="Select a Category"
                    selected
                    className="block"
                    disabled
                  >
                    Select a rating
                  </option>
                  <option className="py-2" value="99">
                    99
                  </option>
                  <option className="py-2" value="98">
                    98
                  </option>
                  <option className="py-2" value="97">
                    97
                  </option>
                  <option className="py-2" value="96">
                    96
                  </option>
                  <option className="py-2" value="95">
                    95
                  </option>
                  <option className="py-2" value="94">
                    94
                  </option>
                  <option className="py-2" value="93">
                    93
                  </option>
                  <option className="py-2" value="92">
                    92
                  </option>
                  <option className="py-2" value="91">
                    91
                  </option>
                  <option className="py-2" value="90">
                    90
                  </option>
                  <option className="py-2" value="89">
                    89
                  </option>
                  <option className="py-2" value="88">
                    88
                  </option>
                  <option className="py-2" value="87">
                    87
                  </option>
                  <option className="py-2" value="86">
                    86
                  </option>
                  <option className="py-2" value="85">
                    85
                  </option>
                  <option className="py-2" value="84">
                    84
                  </option>
                  <option className="py-2" value="83">
                    83
                  </option>
                  <option className="py-2" value="82">
                    82
                  </option>
                  <option className="py-2" value="81">
                    81
                  </option>
                  <option className="py-2" value="80">
                    80
                  </option>
                  <option className="py-2" value="79">
                    79
                  </option>
                  <option className="py-2" value="78">
                    78
                  </option>
                  <option className="py-2" value="77">
                    77
                  </option>
                  <option className="py-2" value="76">
                    76
                  </option>
                  <option className="py-2" value="75">
                    75
                  </option>
                  <option className="py-2" value="74">
                    74
                  </option>
                  <option className="py-2" value="73">
                    73
                  </option>
                  <option className="py-2" value="72">
                    72
                  </option>
                  <option className="py-2" value="71">
                    71
                  </option>
                  <option className="py-2" value="70">
                    70
                  </option>
                  <option className="py-2" value="69">
                    69
                  </option>
                  <option className="py-2" value="68">
                    68
                  </option>
                  <option className="py-2" value="67">
                    67
                  </option>
                  <option className="py-2" value="66">
                    66
                  </option>
                  <option className="py-2" value="65">
                    65
                  </option>
                  <option className="py-2" value="64">
                    64
                  </option>
                  <option className="py-2" value="63">
                    63
                  </option>
                  <option className="py-2" value="62">
                    62
                  </option>
                  <option className="py-2" value="61">
                    61
                  </option>
                  <option className="py-2" value="60">
                    60
                  </option>
                  <option className="py-2" value="59">
                    59
                  </option>
                  <option className="py-2" value="58">
                    58
                  </option>
                  <option className="py-2" value="57">
                    57
                  </option>
                  <option className="py-2" value="56">
                    56
                  </option>
                  <option className="py-2" value="55">
                    55
                  </option>
                  <option className="py-2" value="54">
                    54
                  </option>
                  <option className="py-2" value="53">
                    53
                  </option>
                  <option className="py-2" value="52">
                    52
                  </option>
                  <option className="py-2" value="51">
                    51
                  </option>
                  <option className="py-2" value="50">
                    50
                  </option>
                  <option className="py-2" value="49">
                    49
                  </option>
                  <option className="py-2" value="48">
                    48
                  </option>
                  <option className="py-2" value="47">
                    47
                  </option>
                  <option className="py-2" value="46">
                    46
                  </option>
                  <option className="py-2" value="45">
                    45
                  </option>
                  <option className="py-2" value="44">
                    44
                  </option>
                  <option className="py-2" value="43">
                    43
                  </option>
                  <option className="py-2" value="42">
                    42
                  </option>
                  <option className="py-2" value="41">
                    41
                  </option>
                  <option className="py-2" value="40">
                    40
                  </option>
                  <option className="py-2" value="39">
                    39
                  </option>
                  <option className="py-2" value="38">
                    38
                  </option>
                  <option className="py-2" value="37">
                    37
                  </option>
                  <option className="py-2" value="36">
                    36
                  </option>
                  <option className="py-2" value="35">
                    35
                  </option>
                  <option className="py-2" value="34">
                    34
                  </option>
                  <option className="py-2" value="33">
                    33
                  </option>
                  <option className="py-2" value="32">
                    32
                  </option>
                  <option className="py-2" value="31">
                    31
                  </option>
                  <option className="py-2" value="30">
                    30
                  </option>
                  <option className="py-2" value="29">
                    29
                  </option>
                  <option className="py-2" value="28">
                    28
                  </option>
                  <option className="py-2" value="27">
                    27
                  </option>
                  <option className="py-2" value="26">
                    26
                  </option>
                  <option className="py-2" value="25">
                    25
                  </option>
                  <option className="py-2" value="24">
                    24
                  </option>
                  <option className="py-2" value="23">
                    23
                  </option>
                  <option className="py-2" value="22">
                    22
                  </option>
                  <option className="py-2" value="21">
                    21
                  </option>
                  <option className="py-2" value="20">
                    20
                  </option>
                  <option className="py-2" value="19">
                    19
                  </option>
                  <option className="py-2" value="18">
                    18
                  </option>
                  <option className="py-2" value="17">
                    17
                  </option>
                  <option className="py-2" value="16">
                    16
                  </option>
                  <option className="py-2" value="15">
                    15
                  </option>
                  <option className="py-2" value="14">
                    14
                  </option>
                  <option className="py-2" value="13">
                    13
                  </option>
                  <option className="py-2" value="12">
                    12
                  </option>
                  <option className="py-2" value="11">
                    11
                  </option>
                  <option className="py-2" value="10">
                    10
                  </option>
                  <option className="py-2" value="9">
                    9
                  </option>
                  <option className="py-2" value="8">
                    8
                  </option>
                  <option className="py-2" value="7">
                    7
                  </option>
                  <option className="py-2" value="6">
                    6
                  </option>
                  <option className="py-2" value="5">
                    5
                  </option>
                  <option className="py-2" value="4">
                    4
                  </option>
                  <option className="py-2" value="3">
                    3
                  </option>
                  <option className="py-2" value="2">
                    2
                  </option>
                  <option className="py-2" value="1">
                    1
                  </option>
                  <option className="py-2" value="0">
                    0
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <label className="mb text-md text-[#34FEF8] font-bold uppercase">
              Positioning
            </label>
            <br />
            <div
              className="z-[1000]"
              //  style={{transform: 'translate(-50%, -50%)'}}
            >
              <div className="rounded-lg border-[#34FEF8] px-6">
                <select
                  onChange={(e) => {
                    // selectedClass();
                    setPositioning(e.target.value);
                  }}
                  className="rounder resize-none w-full h-[6rem] bg-[#01112B] text-base border-[5px] border-[#34FEF8] text-[#34FEF8] mb-2 mt-2 p-3 pl-4 pt-0 placeholder-opacity-60 placeholder-[#34FEF8]"
                >
                  <option
                    value="Select a Category"
                    selected
                    className="block"
                    disabled
                  >
                    Select a rating
                  </option>
                  <option className="py-2" value="99">
                    99
                  </option>
                  <option className="py-2" value="98">
                    98
                  </option>
                  <option className="py-2" value="97">
                    97
                  </option>
                  <option className="py-2" value="96">
                    96
                  </option>
                  <option className="py-2" value="95">
                    95
                  </option>
                  <option className="py-2" value="94">
                    94
                  </option>
                  <option className="py-2" value="93">
                    93
                  </option>
                  <option className="py-2" value="92">
                    92
                  </option>
                  <option className="py-2" value="91">
                    91
                  </option>
                  <option className="py-2" value="90">
                    90
                  </option>
                  <option className="py-2" value="89">
                    89
                  </option>
                  <option className="py-2" value="88">
                    88
                  </option>
                  <option className="py-2" value="87">
                    87
                  </option>
                  <option className="py-2" value="86">
                    86
                  </option>
                  <option className="py-2" value="85">
                    85
                  </option>
                  <option className="py-2" value="84">
                    84
                  </option>
                  <option className="py-2" value="83">
                    83
                  </option>
                  <option className="py-2" value="82">
                    82
                  </option>
                  <option className="py-2" value="81">
                    81
                  </option>
                  <option className="py-2" value="80">
                    80
                  </option>
                  <option className="py-2" value="79">
                    79
                  </option>
                  <option className="py-2" value="78">
                    78
                  </option>
                  <option className="py-2" value="77">
                    77
                  </option>
                  <option className="py-2" value="76">
                    76
                  </option>
                  <option className="py-2" value="75">
                    75
                  </option>
                  <option className="py-2" value="74">
                    74
                  </option>
                  <option className="py-2" value="73">
                    73
                  </option>
                  <option className="py-2" value="72">
                    72
                  </option>
                  <option className="py-2" value="71">
                    71
                  </option>
                  <option className="py-2" value="70">
                    70
                  </option>
                  <option className="py-2" value="69">
                    69
                  </option>
                  <option className="py-2" value="68">
                    68
                  </option>
                  <option className="py-2" value="67">
                    67
                  </option>
                  <option className="py-2" value="66">
                    66
                  </option>
                  <option className="py-2" value="65">
                    65
                  </option>
                  <option className="py-2" value="64">
                    64
                  </option>
                  <option className="py-2" value="63">
                    63
                  </option>
                  <option className="py-2" value="62">
                    62
                  </option>
                  <option className="py-2" value="61">
                    61
                  </option>
                  <option className="py-2" value="60">
                    60
                  </option>
                  <option className="py-2" value="59">
                    59
                  </option>
                  <option className="py-2" value="58">
                    58
                  </option>
                  <option className="py-2" value="57">
                    57
                  </option>
                  <option className="py-2" value="56">
                    56
                  </option>
                  <option className="py-2" value="55">
                    55
                  </option>
                  <option className="py-2" value="54">
                    54
                  </option>
                  <option className="py-2" value="53">
                    53
                  </option>
                  <option className="py-2" value="52">
                    52
                  </option>
                  <option className="py-2" value="51">
                    51
                  </option>
                  <option className="py-2" value="50">
                    50
                  </option>
                  <option className="py-2" value="49">
                    49
                  </option>
                  <option className="py-2" value="48">
                    48
                  </option>
                  <option className="py-2" value="47">
                    47
                  </option>
                  <option className="py-2" value="46">
                    46
                  </option>
                  <option className="py-2" value="45">
                    45
                  </option>
                  <option className="py-2" value="44">
                    44
                  </option>
                  <option className="py-2" value="43">
                    43
                  </option>
                  <option className="py-2" value="42">
                    42
                  </option>
                  <option className="py-2" value="41">
                    41
                  </option>
                  <option className="py-2" value="40">
                    40
                  </option>
                  <option className="py-2" value="39">
                    39
                  </option>
                  <option className="py-2" value="38">
                    38
                  </option>
                  <option className="py-2" value="37">
                    37
                  </option>
                  <option className="py-2" value="36">
                    36
                  </option>
                  <option className="py-2" value="35">
                    35
                  </option>
                  <option className="py-2" value="34">
                    34
                  </option>
                  <option className="py-2" value="33">
                    33
                  </option>
                  <option className="py-2" value="32">
                    32
                  </option>
                  <option className="py-2" value="31">
                    31
                  </option>
                  <option className="py-2" value="30">
                    30
                  </option>
                  <option className="py-2" value="29">
                    29
                  </option>
                  <option className="py-2" value="28">
                    28
                  </option>
                  <option className="py-2" value="27">
                    27
                  </option>
                  <option className="py-2" value="26">
                    26
                  </option>
                  <option className="py-2" value="25">
                    25
                  </option>
                  <option className="py-2" value="24">
                    24
                  </option>
                  <option className="py-2" value="23">
                    23
                  </option>
                  <option className="py-2" value="22">
                    22
                  </option>
                  <option className="py-2" value="21">
                    21
                  </option>
                  <option className="py-2" value="20">
                    20
                  </option>
                  <option className="py-2" value="19">
                    19
                  </option>
                  <option className="py-2" value="18">
                    18
                  </option>
                  <option className="py-2" value="17">
                    17
                  </option>
                  <option className="py-2" value="16">
                    16
                  </option>
                  <option className="py-2" value="15">
                    15
                  </option>
                  <option className="py-2" value="14">
                    14
                  </option>
                  <option className="py-2" value="13">
                    13
                  </option>
                  <option className="py-2" value="12">
                    12
                  </option>
                  <option className="py-2" value="11">
                    11
                  </option>
                  <option className="py-2" value="10">
                    10
                  </option>
                  <option className="py-2" value="9">
                    9
                  </option>
                  <option className="py-2" value="8">
                    8
                  </option>
                  <option className="py-2" value="7">
                    7
                  </option>
                  <option className="py-2" value="6">
                    6
                  </option>
                  <option className="py-2" value="5">
                    5
                  </option>
                  <option className="py-2" value="4">
                    4
                  </option>
                  <option className="py-2" value="3">
                    3
                  </option>
                  <option className="py-2" value="2">
                    2
                  </option>
                  <option className="py-2" value="1">
                    1
                  </option>
                  <option className="py-2" value="0">
                    0
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <label className="mb text-md text-[#34FEF8] font-bold uppercase">
              Reactions
            </label>
            <br />
            <div
              className="z-[1000]"
              //  style={{transform: 'translate(-50%, -50%)'}}
            >
              <div className="rounded-lg border-[#34FEF8] px-6">
                <select
                  onChange={(e) => {
                    // selectedClass();
                    setReactions(e.target.value);
                  }}
                  className="rounder resize-none w-full h-[6rem] bg-[#01112B] text-base border-[5px] border-[#34FEF8] text-[#34FEF8] mb-2 mt-2 p-3 pl-4 pt-0 placeholder-opacity-60 placeholder-[#34FEF8]"
                >
                  <option
                    value="Select a Category"
                    selected
                    className="block"
                    disabled
                  >
                    Select a rating
                  </option>
                  <option className="py-2" value="99">
                    99
                  </option>
                  <option className="py-2" value="98">
                    98
                  </option>
                  <option className="py-2" value="97">
                    97
                  </option>
                  <option className="py-2" value="96">
                    96
                  </option>
                  <option className="py-2" value="95">
                    95
                  </option>
                  <option className="py-2" value="94">
                    94
                  </option>
                  <option className="py-2" value="93">
                    93
                  </option>
                  <option className="py-2" value="92">
                    92
                  </option>
                  <option className="py-2" value="91">
                    91
                  </option>
                  <option className="py-2" value="90">
                    90
                  </option>
                  <option className="py-2" value="89">
                    89
                  </option>
                  <option className="py-2" value="88">
                    88
                  </option>
                  <option className="py-2" value="87">
                    87
                  </option>
                  <option className="py-2" value="86">
                    86
                  </option>
                  <option className="py-2" value="85">
                    85
                  </option>
                  <option className="py-2" value="84">
                    84
                  </option>
                  <option className="py-2" value="83">
                    83
                  </option>
                  <option className="py-2" value="82">
                    82
                  </option>
                  <option className="py-2" value="81">
                    81
                  </option>
                  <option className="py-2" value="80">
                    80
                  </option>
                  <option className="py-2" value="79">
                    79
                  </option>
                  <option className="py-2" value="78">
                    78
                  </option>
                  <option className="py-2" value="77">
                    77
                  </option>
                  <option className="py-2" value="76">
                    76
                  </option>
                  <option className="py-2" value="75">
                    75
                  </option>
                  <option className="py-2" value="74">
                    74
                  </option>
                  <option className="py-2" value="73">
                    73
                  </option>
                  <option className="py-2" value="72">
                    72
                  </option>
                  <option className="py-2" value="71">
                    71
                  </option>
                  <option className="py-2" value="70">
                    70
                  </option>
                  <option className="py-2" value="69">
                    69
                  </option>
                  <option className="py-2" value="68">
                    68
                  </option>
                  <option className="py-2" value="67">
                    67
                  </option>
                  <option className="py-2" value="66">
                    66
                  </option>
                  <option className="py-2" value="65">
                    65
                  </option>
                  <option className="py-2" value="64">
                    64
                  </option>
                  <option className="py-2" value="63">
                    63
                  </option>
                  <option className="py-2" value="62">
                    62
                  </option>
                  <option className="py-2" value="61">
                    61
                  </option>
                  <option className="py-2" value="60">
                    60
                  </option>
                  <option className="py-2" value="59">
                    59
                  </option>
                  <option className="py-2" value="58">
                    58
                  </option>
                  <option className="py-2" value="57">
                    57
                  </option>
                  <option className="py-2" value="56">
                    56
                  </option>
                  <option className="py-2" value="55">
                    55
                  </option>
                  <option className="py-2" value="54">
                    54
                  </option>
                  <option className="py-2" value="53">
                    53
                  </option>
                  <option className="py-2" value="52">
                    52
                  </option>
                  <option className="py-2" value="51">
                    51
                  </option>
                  <option className="py-2" value="50">
                    50
                  </option>
                  <option className="py-2" value="49">
                    49
                  </option>
                  <option className="py-2" value="48">
                    48
                  </option>
                  <option className="py-2" value="47">
                    47
                  </option>
                  <option className="py-2" value="46">
                    46
                  </option>
                  <option className="py-2" value="45">
                    45
                  </option>
                  <option className="py-2" value="44">
                    44
                  </option>
                  <option className="py-2" value="43">
                    43
                  </option>
                  <option className="py-2" value="42">
                    42
                  </option>
                  <option className="py-2" value="41">
                    41
                  </option>
                  <option className="py-2" value="40">
                    40
                  </option>
                  <option className="py-2" value="39">
                    39
                  </option>
                  <option className="py-2" value="38">
                    38
                  </option>
                  <option className="py-2" value="37">
                    37
                  </option>
                  <option className="py-2" value="36">
                    36
                  </option>
                  <option className="py-2" value="35">
                    35
                  </option>
                  <option className="py-2" value="34">
                    34
                  </option>
                  <option className="py-2" value="33">
                    33
                  </option>
                  <option className="py-2" value="32">
                    32
                  </option>
                  <option className="py-2" value="31">
                    31
                  </option>
                  <option className="py-2" value="30">
                    30
                  </option>
                  <option className="py-2" value="29">
                    29
                  </option>
                  <option className="py-2" value="28">
                    28
                  </option>
                  <option className="py-2" value="27">
                    27
                  </option>
                  <option className="py-2" value="26">
                    26
                  </option>
                  <option className="py-2" value="25">
                    25
                  </option>
                  <option className="py-2" value="24">
                    24
                  </option>
                  <option className="py-2" value="23">
                    23
                  </option>
                  <option className="py-2" value="22">
                    22
                  </option>
                  <option className="py-2" value="21">
                    21
                  </option>
                  <option className="py-2" value="20">
                    20
                  </option>
                  <option className="py-2" value="19">
                    19
                  </option>
                  <option className="py-2" value="18">
                    18
                  </option>
                  <option className="py-2" value="17">
                    17
                  </option>
                  <option className="py-2" value="16">
                    16
                  </option>
                  <option className="py-2" value="15">
                    15
                  </option>
                  <option className="py-2" value="14">
                    14
                  </option>
                  <option className="py-2" value="13">
                    13
                  </option>
                  <option className="py-2" value="12">
                    12
                  </option>
                  <option className="py-2" value="11">
                    11
                  </option>
                  <option className="py-2" value="10">
                    10
                  </option>
                  <option className="py-2" value="9">
                    9
                  </option>
                  <option className="py-2" value="8">
                    8
                  </option>
                  <option className="py-2" value="7">
                    7
                  </option>
                  <option className="py-2" value="6">
                    6
                  </option>
                  <option className="py-2" value="5">
                    5
                  </option>
                  <option className="py-2" value="4">
                    4
                  </option>
                  <option className="py-2" value="3">
                    3
                  </option>
                  <option className="py-2" value="2">
                    2
                  </option>
                  <option className="py-2" value="1">
                    1
                  </option>
                  <option className="py-2" value="0">
                    0
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <label className="mb text-md text-[#34FEF8] font-bold uppercase">
              Shooting
            </label>
            <br />
            <div
              className="z-[1000]"
              //  style={{transform: 'translate(-50%, -50%)'}}
            >
              <div className="rounded-lg border-[#34FEF8] px-6">
                <select
                  onChange={(e) => {
                    // selectedClass();
                    setShooting(e.target.value);
                  }}
                  className="rounder resize-none w-full h-[6rem] bg-[#01112B] text-base border-[5px] border-[#34FEF8] text-[#34FEF8] mb-2 mt-2 p-3 pl-4 pt-0 placeholder-opacity-60 placeholder-[#34FEF8]"
                >
                  <option
                    value="Select a Category"
                    selected
                    className="block"
                    disabled
                  >
                    Select a rating
                  </option>
                  <option className="py-2" value="99">
                    99
                  </option>
                  <option className="py-2" value="98">
                    98
                  </option>
                  <option className="py-2" value="97">
                    97
                  </option>
                  <option className="py-2" value="96">
                    96
                  </option>
                  <option className="py-2" value="95">
                    95
                  </option>
                  <option className="py-2" value="94">
                    94
                  </option>
                  <option className="py-2" value="93">
                    93
                  </option>
                  <option className="py-2" value="92">
                    92
                  </option>
                  <option className="py-2" value="91">
                    91
                  </option>
                  <option className="py-2" value="90">
                    90
                  </option>
                  <option className="py-2" value="89">
                    89
                  </option>
                  <option className="py-2" value="88">
                    88
                  </option>
                  <option className="py-2" value="87">
                    87
                  </option>
                  <option className="py-2" value="86">
                    86
                  </option>
                  <option className="py-2" value="85">
                    85
                  </option>
                  <option className="py-2" value="84">
                    84
                  </option>
                  <option className="py-2" value="83">
                    83
                  </option>
                  <option className="py-2" value="82">
                    82
                  </option>
                  <option className="py-2" value="81">
                    81
                  </option>
                  <option className="py-2" value="80">
                    80
                  </option>
                  <option className="py-2" value="79">
                    79
                  </option>
                  <option className="py-2" value="78">
                    78
                  </option>
                  <option className="py-2" value="77">
                    77
                  </option>
                  <option className="py-2" value="76">
                    76
                  </option>
                  <option className="py-2" value="75">
                    75
                  </option>
                  <option className="py-2" value="74">
                    74
                  </option>
                  <option className="py-2" value="73">
                    73
                  </option>
                  <option className="py-2" value="72">
                    72
                  </option>
                  <option className="py-2" value="71">
                    71
                  </option>
                  <option className="py-2" value="70">
                    70
                  </option>
                  <option className="py-2" value="69">
                    69
                  </option>
                  <option className="py-2" value="68">
                    68
                  </option>
                  <option className="py-2" value="67">
                    67
                  </option>
                  <option className="py-2" value="66">
                    66
                  </option>
                  <option className="py-2" value="65">
                    65
                  </option>
                  <option className="py-2" value="64">
                    64
                  </option>
                  <option className="py-2" value="63">
                    63
                  </option>
                  <option className="py-2" value="62">
                    62
                  </option>
                  <option className="py-2" value="61">
                    61
                  </option>
                  <option className="py-2" value="60">
                    60
                  </option>
                  <option className="py-2" value="59">
                    59
                  </option>
                  <option className="py-2" value="58">
                    58
                  </option>
                  <option className="py-2" value="57">
                    57
                  </option>
                  <option className="py-2" value="56">
                    56
                  </option>
                  <option className="py-2" value="55">
                    55
                  </option>
                  <option className="py-2" value="54">
                    54
                  </option>
                  <option className="py-2" value="53">
                    53
                  </option>
                  <option className="py-2" value="52">
                    52
                  </option>
                  <option className="py-2" value="51">
                    51
                  </option>
                  <option className="py-2" value="50">
                    50
                  </option>
                  <option className="py-2" value="49">
                    49
                  </option>
                  <option className="py-2" value="48">
                    48
                  </option>
                  <option className="py-2" value="47">
                    47
                  </option>
                  <option className="py-2" value="46">
                    46
                  </option>
                  <option className="py-2" value="45">
                    45
                  </option>
                  <option className="py-2" value="44">
                    44
                  </option>
                  <option className="py-2" value="43">
                    43
                  </option>
                  <option className="py-2" value="42">
                    42
                  </option>
                  <option className="py-2" value="41">
                    41
                  </option>
                  <option className="py-2" value="40">
                    40
                  </option>
                  <option className="py-2" value="39">
                    39
                  </option>
                  <option className="py-2" value="38">
                    38
                  </option>
                  <option className="py-2" value="37">
                    37
                  </option>
                  <option className="py-2" value="36">
                    36
                  </option>
                  <option className="py-2" value="35">
                    35
                  </option>
                  <option className="py-2" value="34">
                    34
                  </option>
                  <option className="py-2" value="33">
                    33
                  </option>
                  <option className="py-2" value="32">
                    32
                  </option>
                  <option className="py-2" value="31">
                    31
                  </option>
                  <option className="py-2" value="30">
                    30
                  </option>
                  <option className="py-2" value="29">
                    29
                  </option>
                  <option className="py-2" value="28">
                    28
                  </option>
                  <option className="py-2" value="27">
                    27
                  </option>
                  <option className="py-2" value="26">
                    26
                  </option>
                  <option className="py-2" value="25">
                    25
                  </option>
                  <option className="py-2" value="24">
                    24
                  </option>
                  <option className="py-2" value="23">
                    23
                  </option>
                  <option className="py-2" value="22">
                    22
                  </option>
                  <option className="py-2" value="21">
                    21
                  </option>
                  <option className="py-2" value="20">
                    20
                  </option>
                  <option className="py-2" value="19">
                    19
                  </option>
                  <option className="py-2" value="18">
                    18
                  </option>
                  <option className="py-2" value="17">
                    17
                  </option>
                  <option className="py-2" value="16">
                    16
                  </option>
                  <option className="py-2" value="15">
                    15
                  </option>
                  <option className="py-2" value="14">
                    14
                  </option>
                  <option className="py-2" value="13">
                    13
                  </option>
                  <option className="py-2" value="12">
                    12
                  </option>
                  <option className="py-2" value="11">
                    11
                  </option>
                  <option className="py-2" value="10">
                    10
                  </option>
                  <option className="py-2" value="9">
                    9
                  </option>
                  <option className="py-2" value="8">
                    8
                  </option>
                  <option className="py-2" value="7">
                    7
                  </option>
                  <option className="py-2" value="6">
                    6
                  </option>
                  <option className="py-2" value="5">
                    5
                  </option>
                  <option className="py-2" value="4">
                    4
                  </option>
                  <option className="py-2" value="3">
                    3
                  </option>
                  <option className="py-2" value="2">
                    2
                  </option>
                  <option className="py-2" value="1">
                    1
                  </option>
                  <option className="py-2" value="0">
                    0
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <label className="mb text-md text-[#34FEF8] font-bold uppercase">
              Short Passing
            </label>
            <br />
            <div
              className="z-[1000]"
              //  style={{transform: 'translate(-50%, -50%)'}}
            >
              <div className="rounded-lg border-[#34FEF8] px-6">
                <select
                  onChange={(e) => {
                    // selectedClass();
                    setShortPassing(e.target.value);
                  }}
                  className="rounder resize-none w-full h-[6rem] bg-[#01112B] text-base border-[5px] border-[#34FEF8] text-[#34FEF8] mb-2 mt-2 p-3 pl-4 pt-0 placeholder-opacity-60 placeholder-[#34FEF8]"
                >
                  <option
                    value="Select a Category"
                    selected
                    className="block"
                    disabled
                  >
                    Select a rating
                  </option>
                  <option className="py-2" value="99">
                    99
                  </option>
                  <option className="py-2" value="98">
                    98
                  </option>
                  <option className="py-2" value="97">
                    97
                  </option>
                  <option className="py-2" value="96">
                    96
                  </option>
                  <option className="py-2" value="95">
                    95
                  </option>
                  <option className="py-2" value="94">
                    94
                  </option>
                  <option className="py-2" value="93">
                    93
                  </option>
                  <option className="py-2" value="92">
                    92
                  </option>
                  <option className="py-2" value="91">
                    91
                  </option>
                  <option className="py-2" value="90">
                    90
                  </option>
                  <option className="py-2" value="89">
                    89
                  </option>
                  <option className="py-2" value="88">
                    88
                  </option>
                  <option className="py-2" value="87">
                    87
                  </option>
                  <option className="py-2" value="86">
                    86
                  </option>
                  <option className="py-2" value="85">
                    85
                  </option>
                  <option className="py-2" value="84">
                    84
                  </option>
                  <option className="py-2" value="83">
                    83
                  </option>
                  <option className="py-2" value="82">
                    82
                  </option>
                  <option className="py-2" value="81">
                    81
                  </option>
                  <option className="py-2" value="80">
                    80
                  </option>
                  <option className="py-2" value="79">
                    79
                  </option>
                  <option className="py-2" value="78">
                    78
                  </option>
                  <option className="py-2" value="77">
                    77
                  </option>
                  <option className="py-2" value="76">
                    76
                  </option>
                  <option className="py-2" value="75">
                    75
                  </option>
                  <option className="py-2" value="74">
                    74
                  </option>
                  <option className="py-2" value="73">
                    73
                  </option>
                  <option className="py-2" value="72">
                    72
                  </option>
                  <option className="py-2" value="71">
                    71
                  </option>
                  <option className="py-2" value="70">
                    70
                  </option>
                  <option className="py-2" value="69">
                    69
                  </option>
                  <option className="py-2" value="68">
                    68
                  </option>
                  <option className="py-2" value="67">
                    67
                  </option>
                  <option className="py-2" value="66">
                    66
                  </option>
                  <option className="py-2" value="65">
                    65
                  </option>
                  <option className="py-2" value="64">
                    64
                  </option>
                  <option className="py-2" value="63">
                    63
                  </option>
                  <option className="py-2" value="62">
                    62
                  </option>
                  <option className="py-2" value="61">
                    61
                  </option>
                  <option className="py-2" value="60">
                    60
                  </option>
                  <option className="py-2" value="59">
                    59
                  </option>
                  <option className="py-2" value="58">
                    58
                  </option>
                  <option className="py-2" value="57">
                    57
                  </option>
                  <option className="py-2" value="56">
                    56
                  </option>
                  <option className="py-2" value="55">
                    55
                  </option>
                  <option className="py-2" value="54">
                    54
                  </option>
                  <option className="py-2" value="53">
                    53
                  </option>
                  <option className="py-2" value="52">
                    52
                  </option>
                  <option className="py-2" value="51">
                    51
                  </option>
                  <option className="py-2" value="50">
                    50
                  </option>
                  <option className="py-2" value="49">
                    49
                  </option>
                  <option className="py-2" value="48">
                    48
                  </option>
                  <option className="py-2" value="47">
                    47
                  </option>
                  <option className="py-2" value="46">
                    46
                  </option>
                  <option className="py-2" value="45">
                    45
                  </option>
                  <option className="py-2" value="44">
                    44
                  </option>
                  <option className="py-2" value="43">
                    43
                  </option>
                  <option className="py-2" value="42">
                    42
                  </option>
                  <option className="py-2" value="41">
                    41
                  </option>
                  <option className="py-2" value="40">
                    40
                  </option>
                  <option className="py-2" value="39">
                    39
                  </option>
                  <option className="py-2" value="38">
                    38
                  </option>
                  <option className="py-2" value="37">
                    37
                  </option>
                  <option className="py-2" value="36">
                    36
                  </option>
                  <option className="py-2" value="35">
                    35
                  </option>
                  <option className="py-2" value="34">
                    34
                  </option>
                  <option className="py-2" value="33">
                    33
                  </option>
                  <option className="py-2" value="32">
                    32
                  </option>
                  <option className="py-2" value="31">
                    31
                  </option>
                  <option className="py-2" value="30">
                    30
                  </option>
                  <option className="py-2" value="29">
                    29
                  </option>
                  <option className="py-2" value="28">
                    28
                  </option>
                  <option className="py-2" value="27">
                    27
                  </option>
                  <option className="py-2" value="26">
                    26
                  </option>
                  <option className="py-2" value="25">
                    25
                  </option>
                  <option className="py-2" value="24">
                    24
                  </option>
                  <option className="py-2" value="23">
                    23
                  </option>
                  <option className="py-2" value="22">
                    22
                  </option>
                  <option className="py-2" value="21">
                    21
                  </option>
                  <option className="py-2" value="20">
                    20
                  </option>
                  <option className="py-2" value="19">
                    19
                  </option>
                  <option className="py-2" value="18">
                    18
                  </option>
                  <option className="py-2" value="17">
                    17
                  </option>
                  <option className="py-2" value="16">
                    16
                  </option>
                  <option className="py-2" value="15">
                    15
                  </option>
                  <option className="py-2" value="14">
                    14
                  </option>
                  <option className="py-2" value="13">
                    13
                  </option>
                  <option className="py-2" value="12">
                    12
                  </option>
                  <option className="py-2" value="11">
                    11
                  </option>
                  <option className="py-2" value="10">
                    10
                  </option>
                  <option className="py-2" value="9">
                    9
                  </option>
                  <option className="py-2" value="8">
                    8
                  </option>
                  <option className="py-2" value="7">
                    7
                  </option>
                  <option className="py-2" value="6">
                    6
                  </option>
                  <option className="py-2" value="5">
                    5
                  </option>
                  <option className="py-2" value="4">
                    4
                  </option>
                  <option className="py-2" value="3">
                    3
                  </option>
                  <option className="py-2" value="2">
                    2
                  </option>
                  <option className="py-2" value="1">
                    1
                  </option>
                  <option className="py-2" value="0">
                    0
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <label className="mb text-md text-[#34FEF8] font-bold uppercase">
              Shot Power
            </label>
            <br />
            <div
              className="z-[1000]"
              //  style={{transform: 'translate(-50%, -50%)'}}
            >
              <div className="rounded-lg border-[#34FEF8] px-6">
                <select
                  onChange={(e) => {
                    // selectedClass();
                    setShotPower(e.target.value);
                  }}
                  className="rounder resize-none w-full h-[6rem] bg-[#01112B] text-base border-[5px] border-[#34FEF8] text-[#34FEF8] mb-2 mt-2 p-3 pl-4 pt-0 placeholder-opacity-60 placeholder-[#34FEF8]"
                >
                  <option
                    value="Select a Category"
                    selected
                    className="block"
                    disabled
                  >
                    Select a rating
                  </option>
                  <option className="py-2" value="99">
                    99
                  </option>
                  <option className="py-2" value="98">
                    98
                  </option>
                  <option className="py-2" value="97">
                    97
                  </option>
                  <option className="py-2" value="96">
                    96
                  </option>
                  <option className="py-2" value="95">
                    95
                  </option>
                  <option className="py-2" value="94">
                    94
                  </option>
                  <option className="py-2" value="93">
                    93
                  </option>
                  <option className="py-2" value="92">
                    92
                  </option>
                  <option className="py-2" value="91">
                    91
                  </option>
                  <option className="py-2" value="90">
                    90
                  </option>
                  <option className="py-2" value="89">
                    89
                  </option>
                  <option className="py-2" value="88">
                    88
                  </option>
                  <option className="py-2" value="87">
                    87
                  </option>
                  <option className="py-2" value="86">
                    86
                  </option>
                  <option className="py-2" value="85">
                    85
                  </option>
                  <option className="py-2" value="84">
                    84
                  </option>
                  <option className="py-2" value="83">
                    83
                  </option>
                  <option className="py-2" value="82">
                    82
                  </option>
                  <option className="py-2" value="81">
                    81
                  </option>
                  <option className="py-2" value="80">
                    80
                  </option>
                  <option className="py-2" value="79">
                    79
                  </option>
                  <option className="py-2" value="78">
                    78
                  </option>
                  <option className="py-2" value="77">
                    77
                  </option>
                  <option className="py-2" value="76">
                    76
                  </option>
                  <option className="py-2" value="75">
                    75
                  </option>
                  <option className="py-2" value="74">
                    74
                  </option>
                  <option className="py-2" value="73">
                    73
                  </option>
                  <option className="py-2" value="72">
                    72
                  </option>
                  <option className="py-2" value="71">
                    71
                  </option>
                  <option className="py-2" value="70">
                    70
                  </option>
                  <option className="py-2" value="69">
                    69
                  </option>
                  <option className="py-2" value="68">
                    68
                  </option>
                  <option className="py-2" value="67">
                    67
                  </option>
                  <option className="py-2" value="66">
                    66
                  </option>
                  <option className="py-2" value="65">
                    65
                  </option>
                  <option className="py-2" value="64">
                    64
                  </option>
                  <option className="py-2" value="63">
                    63
                  </option>
                  <option className="py-2" value="62">
                    62
                  </option>
                  <option className="py-2" value="61">
                    61
                  </option>
                  <option className="py-2" value="60">
                    60
                  </option>
                  <option className="py-2" value="59">
                    59
                  </option>
                  <option className="py-2" value="58">
                    58
                  </option>
                  <option className="py-2" value="57">
                    57
                  </option>
                  <option className="py-2" value="56">
                    56
                  </option>
                  <option className="py-2" value="55">
                    55
                  </option>
                  <option className="py-2" value="54">
                    54
                  </option>
                  <option className="py-2" value="53">
                    53
                  </option>
                  <option className="py-2" value="52">
                    52
                  </option>
                  <option className="py-2" value="51">
                    51
                  </option>
                  <option className="py-2" value="50">
                    50
                  </option>
                  <option className="py-2" value="49">
                    49
                  </option>
                  <option className="py-2" value="48">
                    48
                  </option>
                  <option className="py-2" value="47">
                    47
                  </option>
                  <option className="py-2" value="46">
                    46
                  </option>
                  <option className="py-2" value="45">
                    45
                  </option>
                  <option className="py-2" value="44">
                    44
                  </option>
                  <option className="py-2" value="43">
                    43
                  </option>
                  <option className="py-2" value="42">
                    42
                  </option>
                  <option className="py-2" value="41">
                    41
                  </option>
                  <option className="py-2" value="40">
                    40
                  </option>
                  <option className="py-2" value="39">
                    39
                  </option>
                  <option className="py-2" value="38">
                    38
                  </option>
                  <option className="py-2" value="37">
                    37
                  </option>
                  <option className="py-2" value="36">
                    36
                  </option>
                  <option className="py-2" value="35">
                    35
                  </option>
                  <option className="py-2" value="34">
                    34
                  </option>
                  <option className="py-2" value="33">
                    33
                  </option>
                  <option className="py-2" value="32">
                    32
                  </option>
                  <option className="py-2" value="31">
                    31
                  </option>
                  <option className="py-2" value="30">
                    30
                  </option>
                  <option className="py-2" value="29">
                    29
                  </option>
                  <option className="py-2" value="28">
                    28
                  </option>
                  <option className="py-2" value="27">
                    27
                  </option>
                  <option className="py-2" value="26">
                    26
                  </option>
                  <option className="py-2" value="25">
                    25
                  </option>
                  <option className="py-2" value="24">
                    24
                  </option>
                  <option className="py-2" value="23">
                    23
                  </option>
                  <option className="py-2" value="22">
                    22
                  </option>
                  <option className="py-2" value="21">
                    21
                  </option>
                  <option className="py-2" value="20">
                    20
                  </option>
                  <option className="py-2" value="19">
                    19
                  </option>
                  <option className="py-2" value="18">
                    18
                  </option>
                  <option className="py-2" value="17">
                    17
                  </option>
                  <option className="py-2" value="16">
                    16
                  </option>
                  <option className="py-2" value="15">
                    15
                  </option>
                  <option className="py-2" value="14">
                    14
                  </option>
                  <option className="py-2" value="13">
                    13
                  </option>
                  <option className="py-2" value="12">
                    12
                  </option>
                  <option className="py-2" value="11">
                    11
                  </option>
                  <option className="py-2" value="10">
                    10
                  </option>
                  <option className="py-2" value="9">
                    9
                  </option>
                  <option className="py-2" value="8">
                    8
                  </option>
                  <option className="py-2" value="7">
                    7
                  </option>
                  <option className="py-2" value="6">
                    6
                  </option>
                  <option className="py-2" value="5">
                    5
                  </option>
                  <option className="py-2" value="4">
                    4
                  </option>
                  <option className="py-2" value="3">
                    3
                  </option>
                  <option className="py-2" value="2">
                    2
                  </option>
                  <option className="py-2" value="1">
                    1
                  </option>
                  <option className="py-2" value="0">
                    0
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <label className="mb text-md text-[#34FEF8] font-bold uppercase">
              Sliding Tackle
            </label>
            <br />
            <div
              className="z-[1000]"
              //  style={{transform: 'translate(-50%, -50%)'}}
            >
              <div className="rounded-lg border-[#34FEF8] px-6">
                <select
                  onChange={(e) => {
                    // selectedClass();
                    setSlidingTackle(e.target.value);
                  }}
                  className="rounder resize-none w-full h-[6rem] bg-[#01112B] text-base border-[5px] border-[#34FEF8] text-[#34FEF8] mb-2 mt-2 p-3 pl-4 pt-0 placeholder-opacity-60 placeholder-[#34FEF8]"
                >
                  <option
                    value="Select a Category"
                    selected
                    className="block"
                    disabled
                  >
                    Select a rating
                  </option>
                  <option className="py-2" value="99">
                    99
                  </option>
                  <option className="py-2" value="98">
                    98
                  </option>
                  <option className="py-2" value="97">
                    97
                  </option>
                  <option className="py-2" value="96">
                    96
                  </option>
                  <option className="py-2" value="95">
                    95
                  </option>
                  <option className="py-2" value="94">
                    94
                  </option>
                  <option className="py-2" value="93">
                    93
                  </option>
                  <option className="py-2" value="92">
                    92
                  </option>
                  <option className="py-2" value="91">
                    91
                  </option>
                  <option className="py-2" value="90">
                    90
                  </option>
                  <option className="py-2" value="89">
                    89
                  </option>
                  <option className="py-2" value="88">
                    88
                  </option>
                  <option className="py-2" value="87">
                    87
                  </option>
                  <option className="py-2" value="86">
                    86
                  </option>
                  <option className="py-2" value="85">
                    85
                  </option>
                  <option className="py-2" value="84">
                    84
                  </option>
                  <option className="py-2" value="83">
                    83
                  </option>
                  <option className="py-2" value="82">
                    82
                  </option>
                  <option className="py-2" value="81">
                    81
                  </option>
                  <option className="py-2" value="80">
                    80
                  </option>
                  <option className="py-2" value="79">
                    79
                  </option>
                  <option className="py-2" value="78">
                    78
                  </option>
                  <option className="py-2" value="77">
                    77
                  </option>
                  <option className="py-2" value="76">
                    76
                  </option>
                  <option className="py-2" value="75">
                    75
                  </option>
                  <option className="py-2" value="74">
                    74
                  </option>
                  <option className="py-2" value="73">
                    73
                  </option>
                  <option className="py-2" value="72">
                    72
                  </option>
                  <option className="py-2" value="71">
                    71
                  </option>
                  <option className="py-2" value="70">
                    70
                  </option>
                  <option className="py-2" value="69">
                    69
                  </option>
                  <option className="py-2" value="68">
                    68
                  </option>
                  <option className="py-2" value="67">
                    67
                  </option>
                  <option className="py-2" value="66">
                    66
                  </option>
                  <option className="py-2" value="65">
                    65
                  </option>
                  <option className="py-2" value="64">
                    64
                  </option>
                  <option className="py-2" value="63">
                    63
                  </option>
                  <option className="py-2" value="62">
                    62
                  </option>
                  <option className="py-2" value="61">
                    61
                  </option>
                  <option className="py-2" value="60">
                    60
                  </option>
                  <option className="py-2" value="59">
                    59
                  </option>
                  <option className="py-2" value="58">
                    58
                  </option>
                  <option className="py-2" value="57">
                    57
                  </option>
                  <option className="py-2" value="56">
                    56
                  </option>
                  <option className="py-2" value="55">
                    55
                  </option>
                  <option className="py-2" value="54">
                    54
                  </option>
                  <option className="py-2" value="53">
                    53
                  </option>
                  <option className="py-2" value="52">
                    52
                  </option>
                  <option className="py-2" value="51">
                    51
                  </option>
                  <option className="py-2" value="50">
                    50
                  </option>
                  <option className="py-2" value="49">
                    49
                  </option>
                  <option className="py-2" value="48">
                    48
                  </option>
                  <option className="py-2" value="47">
                    47
                  </option>
                  <option className="py-2" value="46">
                    46
                  </option>
                  <option className="py-2" value="45">
                    45
                  </option>
                  <option className="py-2" value="44">
                    44
                  </option>
                  <option className="py-2" value="43">
                    43
                  </option>
                  <option className="py-2" value="42">
                    42
                  </option>
                  <option className="py-2" value="41">
                    41
                  </option>
                  <option className="py-2" value="40">
                    40
                  </option>
                  <option className="py-2" value="39">
                    39
                  </option>
                  <option className="py-2" value="38">
                    38
                  </option>
                  <option className="py-2" value="37">
                    37
                  </option>
                  <option className="py-2" value="36">
                    36
                  </option>
                  <option className="py-2" value="35">
                    35
                  </option>
                  <option className="py-2" value="34">
                    34
                  </option>
                  <option className="py-2" value="33">
                    33
                  </option>
                  <option className="py-2" value="32">
                    32
                  </option>
                  <option className="py-2" value="31">
                    31
                  </option>
                  <option className="py-2" value="30">
                    30
                  </option>
                  <option className="py-2" value="29">
                    29
                  </option>
                  <option className="py-2" value="28">
                    28
                  </option>
                  <option className="py-2" value="27">
                    27
                  </option>
                  <option className="py-2" value="26">
                    26
                  </option>
                  <option className="py-2" value="25">
                    25
                  </option>
                  <option className="py-2" value="24">
                    24
                  </option>
                  <option className="py-2" value="23">
                    23
                  </option>
                  <option className="py-2" value="22">
                    22
                  </option>
                  <option className="py-2" value="21">
                    21
                  </option>
                  <option className="py-2" value="20">
                    20
                  </option>
                  <option className="py-2" value="19">
                    19
                  </option>
                  <option className="py-2" value="18">
                    18
                  </option>
                  <option className="py-2" value="17">
                    17
                  </option>
                  <option className="py-2" value="16">
                    16
                  </option>
                  <option className="py-2" value="15">
                    15
                  </option>
                  <option className="py-2" value="14">
                    14
                  </option>
                  <option className="py-2" value="13">
                    13
                  </option>
                  <option className="py-2" value="12">
                    12
                  </option>
                  <option className="py-2" value="11">
                    11
                  </option>
                  <option className="py-2" value="10">
                    10
                  </option>
                  <option className="py-2" value="9">
                    9
                  </option>
                  <option className="py-2" value="8">
                    8
                  </option>
                  <option className="py-2" value="7">
                    7
                  </option>
                  <option className="py-2" value="6">
                    6
                  </option>
                  <option className="py-2" value="5">
                    5
                  </option>
                  <option className="py-2" value="4">
                    4
                  </option>
                  <option className="py-2" value="3">
                    3
                  </option>
                  <option className="py-2" value="2">
                    2
                  </option>
                  <option className="py-2" value="1">
                    1
                  </option>
                  <option className="py-2" value="0">
                    0
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <label className="mb text-md text-[#34FEF8] font-bold uppercase">
              Sprint Speed
            </label>
            <br />
            <div
              className="z-[1000]"
              //  style={{transform: 'translate(-50%, -50%)'}}
            >
              <div className="rounded-lg border-[#34FEF8] px-6">
                <select
                  onChange={(e) => {
                    // selectedClass();
                    setSprintSpeed(e.target.value);
                  }}
                  className="rounder resize-none w-full h-[6rem] bg-[#01112B] text-base border-[5px] border-[#34FEF8] text-[#34FEF8] mb-2 mt-2 p-3 pl-4 pt-0 placeholder-opacity-60 placeholder-[#34FEF8]"
                >
                  <option
                    value="Select a Category"
                    selected
                    className="block"
                    disabled
                  >
                    Select a rating
                  </option>
                  <option className="py-2" value="99">
                    99
                  </option>
                  <option className="py-2" value="98">
                    98
                  </option>
                  <option className="py-2" value="97">
                    97
                  </option>
                  <option className="py-2" value="96">
                    96
                  </option>
                  <option className="py-2" value="95">
                    95
                  </option>
                  <option className="py-2" value="94">
                    94
                  </option>
                  <option className="py-2" value="93">
                    93
                  </option>
                  <option className="py-2" value="92">
                    92
                  </option>
                  <option className="py-2" value="91">
                    91
                  </option>
                  <option className="py-2" value="90">
                    90
                  </option>
                  <option className="py-2" value="89">
                    89
                  </option>
                  <option className="py-2" value="88">
                    88
                  </option>
                  <option className="py-2" value="87">
                    87
                  </option>
                  <option className="py-2" value="86">
                    86
                  </option>
                  <option className="py-2" value="85">
                    85
                  </option>
                  <option className="py-2" value="84">
                    84
                  </option>
                  <option className="py-2" value="83">
                    83
                  </option>
                  <option className="py-2" value="82">
                    82
                  </option>
                  <option className="py-2" value="81">
                    81
                  </option>
                  <option className="py-2" value="80">
                    80
                  </option>
                  <option className="py-2" value="79">
                    79
                  </option>
                  <option className="py-2" value="78">
                    78
                  </option>
                  <option className="py-2" value="77">
                    77
                  </option>
                  <option className="py-2" value="76">
                    76
                  </option>
                  <option className="py-2" value="75">
                    75
                  </option>
                  <option className="py-2" value="74">
                    74
                  </option>
                  <option className="py-2" value="73">
                    73
                  </option>
                  <option className="py-2" value="72">
                    72
                  </option>
                  <option className="py-2" value="71">
                    71
                  </option>
                  <option className="py-2" value="70">
                    70
                  </option>
                  <option className="py-2" value="69">
                    69
                  </option>
                  <option className="py-2" value="68">
                    68
                  </option>
                  <option className="py-2" value="67">
                    67
                  </option>
                  <option className="py-2" value="66">
                    66
                  </option>
                  <option className="py-2" value="65">
                    65
                  </option>
                  <option className="py-2" value="64">
                    64
                  </option>
                  <option className="py-2" value="63">
                    63
                  </option>
                  <option className="py-2" value="62">
                    62
                  </option>
                  <option className="py-2" value="61">
                    61
                  </option>
                  <option className="py-2" value="60">
                    60
                  </option>
                  <option className="py-2" value="59">
                    59
                  </option>
                  <option className="py-2" value="58">
                    58
                  </option>
                  <option className="py-2" value="57">
                    57
                  </option>
                  <option className="py-2" value="56">
                    56
                  </option>
                  <option className="py-2" value="55">
                    55
                  </option>
                  <option className="py-2" value="54">
                    54
                  </option>
                  <option className="py-2" value="53">
                    53
                  </option>
                  <option className="py-2" value="52">
                    52
                  </option>
                  <option className="py-2" value="51">
                    51
                  </option>
                  <option className="py-2" value="50">
                    50
                  </option>
                  <option className="py-2" value="49">
                    49
                  </option>
                  <option className="py-2" value="48">
                    48
                  </option>
                  <option className="py-2" value="47">
                    47
                  </option>
                  <option className="py-2" value="46">
                    46
                  </option>
                  <option className="py-2" value="45">
                    45
                  </option>
                  <option className="py-2" value="44">
                    44
                  </option>
                  <option className="py-2" value="43">
                    43
                  </option>
                  <option className="py-2" value="42">
                    42
                  </option>
                  <option className="py-2" value="41">
                    41
                  </option>
                  <option className="py-2" value="40">
                    40
                  </option>
                  <option className="py-2" value="39">
                    39
                  </option>
                  <option className="py-2" value="38">
                    38
                  </option>
                  <option className="py-2" value="37">
                    37
                  </option>
                  <option className="py-2" value="36">
                    36
                  </option>
                  <option className="py-2" value="35">
                    35
                  </option>
                  <option className="py-2" value="34">
                    34
                  </option>
                  <option className="py-2" value="33">
                    33
                  </option>
                  <option className="py-2" value="32">
                    32
                  </option>
                  <option className="py-2" value="31">
                    31
                  </option>
                  <option className="py-2" value="30">
                    30
                  </option>
                  <option className="py-2" value="29">
                    29
                  </option>
                  <option className="py-2" value="28">
                    28
                  </option>
                  <option className="py-2" value="27">
                    27
                  </option>
                  <option className="py-2" value="26">
                    26
                  </option>
                  <option className="py-2" value="25">
                    25
                  </option>
                  <option className="py-2" value="24">
                    24
                  </option>
                  <option className="py-2" value="23">
                    23
                  </option>
                  <option className="py-2" value="22">
                    22
                  </option>
                  <option className="py-2" value="21">
                    21
                  </option>
                  <option className="py-2" value="20">
                    20
                  </option>
                  <option className="py-2" value="19">
                    19
                  </option>
                  <option className="py-2" value="18">
                    18
                  </option>
                  <option className="py-2" value="17">
                    17
                  </option>
                  <option className="py-2" value="16">
                    16
                  </option>
                  <option className="py-2" value="15">
                    15
                  </option>
                  <option className="py-2" value="14">
                    14
                  </option>
                  <option className="py-2" value="13">
                    13
                  </option>
                  <option className="py-2" value="12">
                    12
                  </option>
                  <option className="py-2" value="11">
                    11
                  </option>
                  <option className="py-2" value="10">
                    10
                  </option>
                  <option className="py-2" value="9">
                    9
                  </option>
                  <option className="py-2" value="8">
                    8
                  </option>
                  <option className="py-2" value="7">
                    7
                  </option>
                  <option className="py-2" value="6">
                    6
                  </option>
                  <option className="py-2" value="5">
                    5
                  </option>
                  <option className="py-2" value="4">
                    4
                  </option>
                  <option className="py-2" value="3">
                    3
                  </option>
                  <option className="py-2" value="2">
                    2
                  </option>
                  <option className="py-2" value="1">
                    1
                  </option>
                  <option className="py-2" value="0">
                    0
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <label className="mb text-md text-[#34FEF8] font-bold uppercase">
              Stamina
            </label>
            <br />
            <div
              className="z-[1000]"
              //  style={{transform: 'translate(-50%, -50%)'}}
            >
              <div className="rounded-lg border-[#34FEF8] px-6">
                <select
                  onChange={(e) => {
                    // selectedClass();
                    setStamina(e.target.value);
                  }}
                  className="rounder resize-none w-full h-[6rem] bg-[#01112B] text-base border-[5px] border-[#34FEF8] text-[#34FEF8] mb-2 mt-2 p-3 pl-4 pt-0 placeholder-opacity-60 placeholder-[#34FEF8]"
                >
                  <option
                    value="Select a Category"
                    selected
                    className="block"
                    disabled
                  >
                    Select a rating
                  </option>
                  <option className="py-2" value="99">
                    99
                  </option>
                  <option className="py-2" value="98">
                    98
                  </option>
                  <option className="py-2" value="97">
                    97
                  </option>
                  <option className="py-2" value="96">
                    96
                  </option>
                  <option className="py-2" value="95">
                    95
                  </option>
                  <option className="py-2" value="94">
                    94
                  </option>
                  <option className="py-2" value="93">
                    93
                  </option>
                  <option className="py-2" value="92">
                    92
                  </option>
                  <option className="py-2" value="91">
                    91
                  </option>
                  <option className="py-2" value="90">
                    90
                  </option>
                  <option className="py-2" value="89">
                    89
                  </option>
                  <option className="py-2" value="88">
                    88
                  </option>
                  <option className="py-2" value="87">
                    87
                  </option>
                  <option className="py-2" value="86">
                    86
                  </option>
                  <option className="py-2" value="85">
                    85
                  </option>
                  <option className="py-2" value="84">
                    84
                  </option>
                  <option className="py-2" value="83">
                    83
                  </option>
                  <option className="py-2" value="82">
                    82
                  </option>
                  <option className="py-2" value="81">
                    81
                  </option>
                  <option className="py-2" value="80">
                    80
                  </option>
                  <option className="py-2" value="79">
                    79
                  </option>
                  <option className="py-2" value="78">
                    78
                  </option>
                  <option className="py-2" value="77">
                    77
                  </option>
                  <option className="py-2" value="76">
                    76
                  </option>
                  <option className="py-2" value="75">
                    75
                  </option>
                  <option className="py-2" value="74">
                    74
                  </option>
                  <option className="py-2" value="73">
                    73
                  </option>
                  <option className="py-2" value="72">
                    72
                  </option>
                  <option className="py-2" value="71">
                    71
                  </option>
                  <option className="py-2" value="70">
                    70
                  </option>
                  <option className="py-2" value="69">
                    69
                  </option>
                  <option className="py-2" value="68">
                    68
                  </option>
                  <option className="py-2" value="67">
                    67
                  </option>
                  <option className="py-2" value="66">
                    66
                  </option>
                  <option className="py-2" value="65">
                    65
                  </option>
                  <option className="py-2" value="64">
                    64
                  </option>
                  <option className="py-2" value="63">
                    63
                  </option>
                  <option className="py-2" value="62">
                    62
                  </option>
                  <option className="py-2" value="61">
                    61
                  </option>
                  <option className="py-2" value="60">
                    60
                  </option>
                  <option className="py-2" value="59">
                    59
                  </option>
                  <option className="py-2" value="58">
                    58
                  </option>
                  <option className="py-2" value="57">
                    57
                  </option>
                  <option className="py-2" value="56">
                    56
                  </option>
                  <option className="py-2" value="55">
                    55
                  </option>
                  <option className="py-2" value="54">
                    54
                  </option>
                  <option className="py-2" value="53">
                    53
                  </option>
                  <option className="py-2" value="52">
                    52
                  </option>
                  <option className="py-2" value="51">
                    51
                  </option>
                  <option className="py-2" value="50">
                    50
                  </option>
                  <option className="py-2" value="49">
                    49
                  </option>
                  <option className="py-2" value="48">
                    48
                  </option>
                  <option className="py-2" value="47">
                    47
                  </option>
                  <option className="py-2" value="46">
                    46
                  </option>
                  <option className="py-2" value="45">
                    45
                  </option>
                  <option className="py-2" value="44">
                    44
                  </option>
                  <option className="py-2" value="43">
                    43
                  </option>
                  <option className="py-2" value="42">
                    42
                  </option>
                  <option className="py-2" value="41">
                    41
                  </option>
                  <option className="py-2" value="40">
                    40
                  </option>
                  <option className="py-2" value="39">
                    39
                  </option>
                  <option className="py-2" value="38">
                    38
                  </option>
                  <option className="py-2" value="37">
                    37
                  </option>
                  <option className="py-2" value="36">
                    36
                  </option>
                  <option className="py-2" value="35">
                    35
                  </option>
                  <option className="py-2" value="34">
                    34
                  </option>
                  <option className="py-2" value="33">
                    33
                  </option>
                  <option className="py-2" value="32">
                    32
                  </option>
                  <option className="py-2" value="31">
                    31
                  </option>
                  <option className="py-2" value="30">
                    30
                  </option>
                  <option className="py-2" value="29">
                    29
                  </option>
                  <option className="py-2" value="28">
                    28
                  </option>
                  <option className="py-2" value="27">
                    27
                  </option>
                  <option className="py-2" value="26">
                    26
                  </option>
                  <option className="py-2" value="25">
                    25
                  </option>
                  <option className="py-2" value="24">
                    24
                  </option>
                  <option className="py-2" value="23">
                    23
                  </option>
                  <option className="py-2" value="22">
                    22
                  </option>
                  <option className="py-2" value="21">
                    21
                  </option>
                  <option className="py-2" value="20">
                    20
                  </option>
                  <option className="py-2" value="19">
                    19
                  </option>
                  <option className="py-2" value="18">
                    18
                  </option>
                  <option className="py-2" value="17">
                    17
                  </option>
                  <option className="py-2" value="16">
                    16
                  </option>
                  <option className="py-2" value="15">
                    15
                  </option>
                  <option className="py-2" value="14">
                    14
                  </option>
                  <option className="py-2" value="13">
                    13
                  </option>
                  <option className="py-2" value="12">
                    12
                  </option>
                  <option className="py-2" value="11">
                    11
                  </option>
                  <option className="py-2" value="10">
                    10
                  </option>
                  <option className="py-2" value="9">
                    9
                  </option>
                  <option className="py-2" value="8">
                    8
                  </option>
                  <option className="py-2" value="7">
                    7
                  </option>
                  <option className="py-2" value="6">
                    6
                  </option>
                  <option className="py-2" value="5">
                    5
                  </option>
                  <option className="py-2" value="4">
                    4
                  </option>
                  <option className="py-2" value="3">
                    3
                  </option>
                  <option className="py-2" value="2">
                    2
                  </option>
                  <option className="py-2" value="1">
                    1
                  </option>
                  <option className="py-2" value="0">
                    0
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <label className="mb text-md text-[#34FEF8] font-bold uppercase">
              Standing Tackle
            </label>
            <br />
            <div
              className="z-[1000]"
              //  style={{transform: 'translate(-50%, -50%)'}}
            >
              <div className="rounded-lg border-[#34FEF8] px-6">
                <select
                  onChange={(e) => {
                    // selectedClass();
                    setStandingTackle(e.target.value);
                  }}
                  className="rounder resize-none w-full h-[6rem] bg-[#01112B] text-base border-[5px] border-[#34FEF8] text-[#34FEF8] mb-2 mt-2 p-3 pl-4 pt-0 placeholder-opacity-60 placeholder-[#34FEF8]"
                >
                  <option
                    value="Select a Category"
                    selected
                    className="block"
                    disabled
                  >
                    Select a rating
                  </option>
                  <option className="py-2" value="99">
                    99
                  </option>
                  <option className="py-2" value="98">
                    98
                  </option>
                  <option className="py-2" value="97">
                    97
                  </option>
                  <option className="py-2" value="96">
                    96
                  </option>
                  <option className="py-2" value="95">
                    95
                  </option>
                  <option className="py-2" value="94">
                    94
                  </option>
                  <option className="py-2" value="93">
                    93
                  </option>
                  <option className="py-2" value="92">
                    92
                  </option>
                  <option className="py-2" value="91">
                    91
                  </option>
                  <option className="py-2" value="90">
                    90
                  </option>
                  <option className="py-2" value="89">
                    89
                  </option>
                  <option className="py-2" value="88">
                    88
                  </option>
                  <option className="py-2" value="87">
                    87
                  </option>
                  <option className="py-2" value="86">
                    86
                  </option>
                  <option className="py-2" value="85">
                    85
                  </option>
                  <option className="py-2" value="84">
                    84
                  </option>
                  <option className="py-2" value="83">
                    83
                  </option>
                  <option className="py-2" value="82">
                    82
                  </option>
                  <option className="py-2" value="81">
                    81
                  </option>
                  <option className="py-2" value="80">
                    80
                  </option>
                  <option className="py-2" value="79">
                    79
                  </option>
                  <option className="py-2" value="78">
                    78
                  </option>
                  <option className="py-2" value="77">
                    77
                  </option>
                  <option className="py-2" value="76">
                    76
                  </option>
                  <option className="py-2" value="75">
                    75
                  </option>
                  <option className="py-2" value="74">
                    74
                  </option>
                  <option className="py-2" value="73">
                    73
                  </option>
                  <option className="py-2" value="72">
                    72
                  </option>
                  <option className="py-2" value="71">
                    71
                  </option>
                  <option className="py-2" value="70">
                    70
                  </option>
                  <option className="py-2" value="69">
                    69
                  </option>
                  <option className="py-2" value="68">
                    68
                  </option>
                  <option className="py-2" value="67">
                    67
                  </option>
                  <option className="py-2" value="66">
                    66
                  </option>
                  <option className="py-2" value="65">
                    65
                  </option>
                  <option className="py-2" value="64">
                    64
                  </option>
                  <option className="py-2" value="63">
                    63
                  </option>
                  <option className="py-2" value="62">
                    62
                  </option>
                  <option className="py-2" value="61">
                    61
                  </option>
                  <option className="py-2" value="60">
                    60
                  </option>
                  <option className="py-2" value="59">
                    59
                  </option>
                  <option className="py-2" value="58">
                    58
                  </option>
                  <option className="py-2" value="57">
                    57
                  </option>
                  <option className="py-2" value="56">
                    56
                  </option>
                  <option className="py-2" value="55">
                    55
                  </option>
                  <option className="py-2" value="54">
                    54
                  </option>
                  <option className="py-2" value="53">
                    53
                  </option>
                  <option className="py-2" value="52">
                    52
                  </option>
                  <option className="py-2" value="51">
                    51
                  </option>
                  <option className="py-2" value="50">
                    50
                  </option>
                  <option className="py-2" value="49">
                    49
                  </option>
                  <option className="py-2" value="48">
                    48
                  </option>
                  <option className="py-2" value="47">
                    47
                  </option>
                  <option className="py-2" value="46">
                    46
                  </option>
                  <option className="py-2" value="45">
                    45
                  </option>
                  <option className="py-2" value="44">
                    44
                  </option>
                  <option className="py-2" value="43">
                    43
                  </option>
                  <option className="py-2" value="42">
                    42
                  </option>
                  <option className="py-2" value="41">
                    41
                  </option>
                  <option className="py-2" value="40">
                    40
                  </option>
                  <option className="py-2" value="39">
                    39
                  </option>
                  <option className="py-2" value="38">
                    38
                  </option>
                  <option className="py-2" value="37">
                    37
                  </option>
                  <option className="py-2" value="36">
                    36
                  </option>
                  <option className="py-2" value="35">
                    35
                  </option>
                  <option className="py-2" value="34">
                    34
                  </option>
                  <option className="py-2" value="33">
                    33
                  </option>
                  <option className="py-2" value="32">
                    32
                  </option>
                  <option className="py-2" value="31">
                    31
                  </option>
                  <option className="py-2" value="30">
                    30
                  </option>
                  <option className="py-2" value="29">
                    29
                  </option>
                  <option className="py-2" value="28">
                    28
                  </option>
                  <option className="py-2" value="27">
                    27
                  </option>
                  <option className="py-2" value="26">
                    26
                  </option>
                  <option className="py-2" value="25">
                    25
                  </option>
                  <option className="py-2" value="24">
                    24
                  </option>
                  <option className="py-2" value="23">
                    23
                  </option>
                  <option className="py-2" value="22">
                    22
                  </option>
                  <option className="py-2" value="21">
                    21
                  </option>
                  <option className="py-2" value="20">
                    20
                  </option>
                  <option className="py-2" value="19">
                    19
                  </option>
                  <option className="py-2" value="18">
                    18
                  </option>
                  <option className="py-2" value="17">
                    17
                  </option>
                  <option className="py-2" value="16">
                    16
                  </option>
                  <option className="py-2" value="15">
                    15
                  </option>
                  <option className="py-2" value="14">
                    14
                  </option>
                  <option className="py-2" value="13">
                    13
                  </option>
                  <option className="py-2" value="12">
                    12
                  </option>
                  <option className="py-2" value="11">
                    11
                  </option>
                  <option className="py-2" value="10">
                    10
                  </option>
                  <option className="py-2" value="9">
                    9
                  </option>
                  <option className="py-2" value="8">
                    8
                  </option>
                  <option className="py-2" value="7">
                    7
                  </option>
                  <option className="py-2" value="6">
                    6
                  </option>
                  <option className="py-2" value="5">
                    5
                  </option>
                  <option className="py-2" value="4">
                    4
                  </option>
                  <option className="py-2" value="3">
                    3
                  </option>
                  <option className="py-2" value="2">
                    2
                  </option>
                  <option className="py-2" value="1">
                    1
                  </option>
                  <option className="py-2" value="0">
                    0
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <label className="mb text-md text-[#34FEF8] font-bold uppercase">
              Strength
            </label>
            <br />
            <div
              className="z-[1000]"
              //  style={{transform: 'translate(-50%, -50%)'}}
            >
              <div className="rounded-lg border-[#34FEF8] px-6">
                <select
                  onChange={(e) => {
                    // selectedClass();
                    setStrength(e.target.value);
                  }}
                  className="rounder resize-none w-full h-[6rem] bg-[#01112B] text-base border-[5px] border-[#34FEF8] text-[#34FEF8] mb-2 mt-2 p-3 pl-4 pt-0 placeholder-opacity-60 placeholder-[#34FEF8]"
                >
                  <option
                    value="Select a Category"
                    selected
                    className="block"
                    disabled
                  >
                    Select a rating
                  </option>
                  <option className="py-2" value="99">
                    99
                  </option>
                  <option className="py-2" value="98">
                    98
                  </option>
                  <option className="py-2" value="97">
                    97
                  </option>
                  <option className="py-2" value="96">
                    96
                  </option>
                  <option className="py-2" value="95">
                    95
                  </option>
                  <option className="py-2" value="94">
                    94
                  </option>
                  <option className="py-2" value="93">
                    93
                  </option>
                  <option className="py-2" value="92">
                    92
                  </option>
                  <option className="py-2" value="91">
                    91
                  </option>
                  <option className="py-2" value="90">
                    90
                  </option>
                  <option className="py-2" value="89">
                    89
                  </option>
                  <option className="py-2" value="88">
                    88
                  </option>
                  <option className="py-2" value="87">
                    87
                  </option>
                  <option className="py-2" value="86">
                    86
                  </option>
                  <option className="py-2" value="85">
                    85
                  </option>
                  <option className="py-2" value="84">
                    84
                  </option>
                  <option className="py-2" value="83">
                    83
                  </option>
                  <option className="py-2" value="82">
                    82
                  </option>
                  <option className="py-2" value="81">
                    81
                  </option>
                  <option className="py-2" value="80">
                    80
                  </option>
                  <option className="py-2" value="79">
                    79
                  </option>
                  <option className="py-2" value="78">
                    78
                  </option>
                  <option className="py-2" value="77">
                    77
                  </option>
                  <option className="py-2" value="76">
                    76
                  </option>
                  <option className="py-2" value="75">
                    75
                  </option>
                  <option className="py-2" value="74">
                    74
                  </option>
                  <option className="py-2" value="73">
                    73
                  </option>
                  <option className="py-2" value="72">
                    72
                  </option>
                  <option className="py-2" value="71">
                    71
                  </option>
                  <option className="py-2" value="70">
                    70
                  </option>
                  <option className="py-2" value="69">
                    69
                  </option>
                  <option className="py-2" value="68">
                    68
                  </option>
                  <option className="py-2" value="67">
                    67
                  </option>
                  <option className="py-2" value="66">
                    66
                  </option>
                  <option className="py-2" value="65">
                    65
                  </option>
                  <option className="py-2" value="64">
                    64
                  </option>
                  <option className="py-2" value="63">
                    63
                  </option>
                  <option className="py-2" value="62">
                    62
                  </option>
                  <option className="py-2" value="61">
                    61
                  </option>
                  <option className="py-2" value="60">
                    60
                  </option>
                  <option className="py-2" value="59">
                    59
                  </option>
                  <option className="py-2" value="58">
                    58
                  </option>
                  <option className="py-2" value="57">
                    57
                  </option>
                  <option className="py-2" value="56">
                    56
                  </option>
                  <option className="py-2" value="55">
                    55
                  </option>
                  <option className="py-2" value="54">
                    54
                  </option>
                  <option className="py-2" value="53">
                    53
                  </option>
                  <option className="py-2" value="52">
                    52
                  </option>
                  <option className="py-2" value="51">
                    51
                  </option>
                  <option className="py-2" value="50">
                    50
                  </option>
                  <option className="py-2" value="49">
                    49
                  </option>
                  <option className="py-2" value="48">
                    48
                  </option>
                  <option className="py-2" value="47">
                    47
                  </option>
                  <option className="py-2" value="46">
                    46
                  </option>
                  <option className="py-2" value="45">
                    45
                  </option>
                  <option className="py-2" value="44">
                    44
                  </option>
                  <option className="py-2" value="43">
                    43
                  </option>
                  <option className="py-2" value="42">
                    42
                  </option>
                  <option className="py-2" value="41">
                    41
                  </option>
                  <option className="py-2" value="40">
                    40
                  </option>
                  <option className="py-2" value="39">
                    39
                  </option>
                  <option className="py-2" value="38">
                    38
                  </option>
                  <option className="py-2" value="37">
                    37
                  </option>
                  <option className="py-2" value="36">
                    36
                  </option>
                  <option className="py-2" value="35">
                    35
                  </option>
                  <option className="py-2" value="34">
                    34
                  </option>
                  <option className="py-2" value="33">
                    33
                  </option>
                  <option className="py-2" value="32">
                    32
                  </option>
                  <option className="py-2" value="31">
                    31
                  </option>
                  <option className="py-2" value="30">
                    30
                  </option>
                  <option className="py-2" value="29">
                    29
                  </option>
                  <option className="py-2" value="28">
                    28
                  </option>
                  <option className="py-2" value="27">
                    27
                  </option>
                  <option className="py-2" value="26">
                    26
                  </option>
                  <option className="py-2" value="25">
                    25
                  </option>
                  <option className="py-2" value="24">
                    24
                  </option>
                  <option className="py-2" value="23">
                    23
                  </option>
                  <option className="py-2" value="22">
                    22
                  </option>
                  <option className="py-2" value="21">
                    21
                  </option>
                  <option className="py-2" value="20">
                    20
                  </option>
                  <option className="py-2" value="19">
                    19
                  </option>
                  <option className="py-2" value="18">
                    18
                  </option>
                  <option className="py-2" value="17">
                    17
                  </option>
                  <option className="py-2" value="16">
                    16
                  </option>
                  <option className="py-2" value="15">
                    15
                  </option>
                  <option className="py-2" value="14">
                    14
                  </option>
                  <option className="py-2" value="13">
                    13
                  </option>
                  <option className="py-2" value="12">
                    12
                  </option>
                  <option className="py-2" value="11">
                    11
                  </option>
                  <option className="py-2" value="10">
                    10
                  </option>
                  <option className="py-2" value="9">
                    9
                  </option>
                  <option className="py-2" value="8">
                    8
                  </option>
                  <option className="py-2" value="7">
                    7
                  </option>
                  <option className="py-2" value="6">
                    6
                  </option>
                  <option className="py-2" value="5">
                    5
                  </option>
                  <option className="py-2" value="4">
                    4
                  </option>
                  <option className="py-2" value="3">
                    3
                  </option>
                  <option className="py-2" value="2">
                    2
                  </option>
                  <option className="py-2" value="1">
                    1
                  </option>
                  <option className="py-2" value="0">
                    0
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <label className="mb text-md text-[#34FEF8] font-bold uppercase">
              Vision
            </label>
            <br />
            <div
              className="z-[1000]"
              //  style={{transform: 'translate(-50%, -50%)'}}
            >
              <div className="rounded-lg border-[#34FEF8] px-6">
                <select
                  onChange={(e) => {
                    // selectedClass();
                    setVision(e.target.value);
                  }}
                  className="rounder resize-none w-full h-[6rem] bg-[#01112B] text-base border-[5px] border-[#34FEF8] text-[#34FEF8] mb-2 mt-2 p-3 pl-4 pt-0 placeholder-opacity-60 placeholder-[#34FEF8]"
                >
                  <option
                    value="Select a Category"
                    selected
                    className="block"
                    disabled
                  >
                    Select a rating
                  </option>
                  <option className="py-2" value="99">
                    99
                  </option>
                  <option className="py-2" value="98">
                    98
                  </option>
                  <option className="py-2" value="97">
                    97
                  </option>
                  <option className="py-2" value="96">
                    96
                  </option>
                  <option className="py-2" value="95">
                    95
                  </option>
                  <option className="py-2" value="94">
                    94
                  </option>
                  <option className="py-2" value="93">
                    93
                  </option>
                  <option className="py-2" value="92">
                    92
                  </option>
                  <option className="py-2" value="91">
                    91
                  </option>
                  <option className="py-2" value="90">
                    90
                  </option>
                  <option className="py-2" value="89">
                    89
                  </option>
                  <option className="py-2" value="88">
                    88
                  </option>
                  <option className="py-2" value="87">
                    87
                  </option>
                  <option className="py-2" value="86">
                    86
                  </option>
                  <option className="py-2" value="85">
                    85
                  </option>
                  <option className="py-2" value="84">
                    84
                  </option>
                  <option className="py-2" value="83">
                    83
                  </option>
                  <option className="py-2" value="82">
                    82
                  </option>
                  <option className="py-2" value="81">
                    81
                  </option>
                  <option className="py-2" value="80">
                    80
                  </option>
                  <option className="py-2" value="79">
                    79
                  </option>
                  <option className="py-2" value="78">
                    78
                  </option>
                  <option className="py-2" value="77">
                    77
                  </option>
                  <option className="py-2" value="76">
                    76
                  </option>
                  <option className="py-2" value="75">
                    75
                  </option>
                  <option className="py-2" value="74">
                    74
                  </option>
                  <option className="py-2" value="73">
                    73
                  </option>
                  <option className="py-2" value="72">
                    72
                  </option>
                  <option className="py-2" value="71">
                    71
                  </option>
                  <option className="py-2" value="70">
                    70
                  </option>
                  <option className="py-2" value="69">
                    69
                  </option>
                  <option className="py-2" value="68">
                    68
                  </option>
                  <option className="py-2" value="67">
                    67
                  </option>
                  <option className="py-2" value="66">
                    66
                  </option>
                  <option className="py-2" value="65">
                    65
                  </option>
                  <option className="py-2" value="64">
                    64
                  </option>
                  <option className="py-2" value="63">
                    63
                  </option>
                  <option className="py-2" value="62">
                    62
                  </option>
                  <option className="py-2" value="61">
                    61
                  </option>
                  <option className="py-2" value="60">
                    60
                  </option>
                  <option className="py-2" value="59">
                    59
                  </option>
                  <option className="py-2" value="58">
                    58
                  </option>
                  <option className="py-2" value="57">
                    57
                  </option>
                  <option className="py-2" value="56">
                    56
                  </option>
                  <option className="py-2" value="55">
                    55
                  </option>
                  <option className="py-2" value="54">
                    54
                  </option>
                  <option className="py-2" value="53">
                    53
                  </option>
                  <option className="py-2" value="52">
                    52
                  </option>
                  <option className="py-2" value="51">
                    51
                  </option>
                  <option className="py-2" value="50">
                    50
                  </option>
                  <option className="py-2" value="49">
                    49
                  </option>
                  <option className="py-2" value="48">
                    48
                  </option>
                  <option className="py-2" value="47">
                    47
                  </option>
                  <option className="py-2" value="46">
                    46
                  </option>
                  <option className="py-2" value="45">
                    45
                  </option>
                  <option className="py-2" value="44">
                    44
                  </option>
                  <option className="py-2" value="43">
                    43
                  </option>
                  <option className="py-2" value="42">
                    42
                  </option>
                  <option className="py-2" value="41">
                    41
                  </option>
                  <option className="py-2" value="40">
                    40
                  </option>
                  <option className="py-2" value="39">
                    39
                  </option>
                  <option className="py-2" value="38">
                    38
                  </option>
                  <option className="py-2" value="37">
                    37
                  </option>
                  <option className="py-2" value="36">
                    36
                  </option>
                  <option className="py-2" value="35">
                    35
                  </option>
                  <option className="py-2" value="34">
                    34
                  </option>
                  <option className="py-2" value="33">
                    33
                  </option>
                  <option className="py-2" value="32">
                    32
                  </option>
                  <option className="py-2" value="31">
                    31
                  </option>
                  <option className="py-2" value="30">
                    30
                  </option>
                  <option className="py-2" value="29">
                    29
                  </option>
                  <option className="py-2" value="28">
                    28
                  </option>
                  <option className="py-2" value="27">
                    27
                  </option>
                  <option className="py-2" value="26">
                    26
                  </option>
                  <option className="py-2" value="25">
                    25
                  </option>
                  <option className="py-2" value="24">
                    24
                  </option>
                  <option className="py-2" value="23">
                    23
                  </option>
                  <option className="py-2" value="22">
                    22
                  </option>
                  <option className="py-2" value="21">
                    21
                  </option>
                  <option className="py-2" value="20">
                    20
                  </option>
                  <option className="py-2" value="19">
                    19
                  </option>
                  <option className="py-2" value="18">
                    18
                  </option>
                  <option className="py-2" value="17">
                    17
                  </option>
                  <option className="py-2" value="16">
                    16
                  </option>
                  <option className="py-2" value="15">
                    15
                  </option>
                  <option className="py-2" value="14">
                    14
                  </option>
                  <option className="py-2" value="13">
                    13
                  </option>
                  <option className="py-2" value="12">
                    12
                  </option>
                  <option className="py-2" value="11">
                    11
                  </option>
                  <option className="py-2" value="10">
                    10
                  </option>
                  <option className="py-2" value="9">
                    9
                  </option>
                  <option className="py-2" value="8">
                    8
                  </option>
                  <option className="py-2" value="7">
                    7
                  </option>
                  <option className="py-2" value="6">
                    6
                  </option>
                  <option className="py-2" value="5">
                    5
                  </option>
                  <option className="py-2" value="4">
                    4
                  </option>
                  <option className="py-2" value="3">
                    3
                  </option>
                  <option className="py-2" value="2">
                    2
                  </option>
                  <option className="py-2" value="1">
                    1
                  </option>
                  <option className="py-2" value="0">
                    0
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <label className="mb text-md text-[#34FEF8] font-bold uppercase">
              Volleys
            </label>
            <br />
            <div
              className="z-[1000]"
              //  style={{transform: 'translate(-50%, -50%)'}}
            >
              <div className="rounded-lg border-[#34FEF8] px-6">
                <select
                  onChange={(e) => {
                    // selectedClass();
                    setVolleys(e.target.value);
                  }}
                  className="rounder resize-none w-full h-[6rem] bg-[#01112B] text-base border-[5px] border-[#34FEF8] text-[#34FEF8] mb-2 mt-2 p-3 pl-4 pt-0 placeholder-opacity-60 placeholder-[#34FEF8]"
                >
                  <option
                    value="Select a Category"
                    selected
                    className="block"
                    disabled
                  >
                    Select a rating
                  </option>
                  <option className="py-2" value="99">
                    99
                  </option>
                  <option className="py-2" value="98">
                    98
                  </option>
                  <option className="py-2" value="97">
                    97
                  </option>
                  <option className="py-2" value="96">
                    96
                  </option>
                  <option className="py-2" value="95">
                    95
                  </option>
                  <option className="py-2" value="94">
                    94
                  </option>
                  <option className="py-2" value="93">
                    93
                  </option>
                  <option className="py-2" value="92">
                    92
                  </option>
                  <option className="py-2" value="91">
                    91
                  </option>
                  <option className="py-2" value="90">
                    90
                  </option>
                  <option className="py-2" value="89">
                    89
                  </option>
                  <option className="py-2" value="88">
                    88
                  </option>
                  <option className="py-2" value="87">
                    87
                  </option>
                  <option className="py-2" value="86">
                    86
                  </option>
                  <option className="py-2" value="85">
                    85
                  </option>
                  <option className="py-2" value="84">
                    84
                  </option>
                  <option className="py-2" value="83">
                    83
                  </option>
                  <option className="py-2" value="82">
                    82
                  </option>
                  <option className="py-2" value="81">
                    81
                  </option>
                  <option className="py-2" value="80">
                    80
                  </option>
                  <option className="py-2" value="79">
                    79
                  </option>
                  <option className="py-2" value="78">
                    78
                  </option>
                  <option className="py-2" value="77">
                    77
                  </option>
                  <option className="py-2" value="76">
                    76
                  </option>
                  <option className="py-2" value="75">
                    75
                  </option>
                  <option className="py-2" value="74">
                    74
                  </option>
                  <option className="py-2" value="73">
                    73
                  </option>
                  <option className="py-2" value="72">
                    72
                  </option>
                  <option className="py-2" value="71">
                    71
                  </option>
                  <option className="py-2" value="70">
                    70
                  </option>
                  <option className="py-2" value="69">
                    69
                  </option>
                  <option className="py-2" value="68">
                    68
                  </option>
                  <option className="py-2" value="67">
                    67
                  </option>
                  <option className="py-2" value="66">
                    66
                  </option>
                  <option className="py-2" value="65">
                    65
                  </option>
                  <option className="py-2" value="64">
                    64
                  </option>
                  <option className="py-2" value="63">
                    63
                  </option>
                  <option className="py-2" value="62">
                    62
                  </option>
                  <option className="py-2" value="61">
                    61
                  </option>
                  <option className="py-2" value="60">
                    60
                  </option>
                  <option className="py-2" value="59">
                    59
                  </option>
                  <option className="py-2" value="58">
                    58
                  </option>
                  <option className="py-2" value="57">
                    57
                  </option>
                  <option className="py-2" value="56">
                    56
                  </option>
                  <option className="py-2" value="55">
                    55
                  </option>
                  <option className="py-2" value="54">
                    54
                  </option>
                  <option className="py-2" value="53">
                    53
                  </option>
                  <option className="py-2" value="52">
                    52
                  </option>
                  <option className="py-2" value="51">
                    51
                  </option>
                  <option className="py-2" value="50">
                    50
                  </option>
                  <option className="py-2" value="49">
                    49
                  </option>
                  <option className="py-2" value="48">
                    48
                  </option>
                  <option className="py-2" value="47">
                    47
                  </option>
                  <option className="py-2" value="46">
                    46
                  </option>
                  <option className="py-2" value="45">
                    45
                  </option>
                  <option className="py-2" value="44">
                    44
                  </option>
                  <option className="py-2" value="43">
                    43
                  </option>
                  <option className="py-2" value="42">
                    42
                  </option>
                  <option className="py-2" value="41">
                    41
                  </option>
                  <option className="py-2" value="40">
                    40
                  </option>
                  <option className="py-2" value="39">
                    39
                  </option>
                  <option className="py-2" value="38">
                    38
                  </option>
                  <option className="py-2" value="37">
                    37
                  </option>
                  <option className="py-2" value="36">
                    36
                  </option>
                  <option className="py-2" value="35">
                    35
                  </option>
                  <option className="py-2" value="34">
                    34
                  </option>
                  <option className="py-2" value="33">
                    33
                  </option>
                  <option className="py-2" value="32">
                    32
                  </option>
                  <option className="py-2" value="31">
                    31
                  </option>
                  <option className="py-2" value="30">
                    30
                  </option>
                  <option className="py-2" value="29">
                    29
                  </option>
                  <option className="py-2" value="28">
                    28
                  </option>
                  <option className="py-2" value="27">
                    27
                  </option>
                  <option className="py-2" value="26">
                    26
                  </option>
                  <option className="py-2" value="25">
                    25
                  </option>
                  <option className="py-2" value="24">
                    24
                  </option>
                  <option className="py-2" value="23">
                    23
                  </option>
                  <option className="py-2" value="22">
                    22
                  </option>
                  <option className="py-2" value="21">
                    21
                  </option>
                  <option className="py-2" value="20">
                    20
                  </option>
                  <option className="py-2" value="19">
                    19
                  </option>
                  <option className="py-2" value="18">
                    18
                  </option>
                  <option className="py-2" value="17">
                    17
                  </option>
                  <option className="py-2" value="16">
                    16
                  </option>
                  <option className="py-2" value="15">
                    15
                  </option>
                  <option className="py-2" value="14">
                    14
                  </option>
                  <option className="py-2" value="13">
                    13
                  </option>
                  <option className="py-2" value="12">
                    12
                  </option>
                  <option className="py-2" value="11">
                    11
                  </option>
                  <option className="py-2" value="10">
                    10
                  </option>
                  <option className="py-2" value="9">
                    9
                  </option>
                  <option className="py-2" value="8">
                    8
                  </option>
                  <option className="py-2" value="7">
                    7
                  </option>
                  <option className="py-2" value="6">
                    6
                  </option>
                  <option className="py-2" value="5">
                    5
                  </option>
                  <option className="py-2" value="4">
                    4
                  </option>
                  <option className="py-2" value="3">
                    3
                  </option>
                  <option className="py-2" value="2">
                    2
                  </option>
                  <option className="py-2" value="1">
                    1
                  </option>
                  <option className="py-2" value="0">
                    0
                  </option>
                </select>
              </div>
            </div>
          </div>

          {/* submit button */}
          <button
            onClick={() => {
              handleEditBtn();
              //   handleContext();
            }}
            className="w-[19.6875rem]  bg-gradient-to-br from-white via-red-300 to-red-500 border-none mx-auto rounded-lg py-2 text-white my-5"
          >
            Save
          </button>
          {/* style={{ display: "none" }} */}
          <div
            ref={save2Ref}
            className="fixed hidden lg:left-[50%] lg:top-[25%] lg:w-[19.6875rem] bg-[#EF8E87] rounded-lg py-2 text-white lg:my-5 flex justify-center items-center text-center flex-col z-[99999999999999999999]"
          >
            <h3 className="w-[19.6875rem] bg-[#EF8E87] rounded-lg py-2 text-white my-5">
              Are you sure you want to save new Informations
            </h3>
            <div className="flex flex-row">
              <button
                onClick={handleEditBtn3}
                className="w-[5em] mr-2 text-[#EF8E87] hover:bg-[#EF8E87] hover:border hover:border-white hover:text-white rounded-lg py-2 bg-white my-5  justify-center items-center text-center"
              >
                No
              </button>
              <button
                onClick={() => {
                  handleEditBtn2();
                  //   handleContext();
                }}
                className="w-[5em] ml-2 text-[#EF8E87] hover:bg-[#EF8E87] hover:border hover:border-white hover:text-white rounded-lg py-2 bg-white my-5  justify-center items-center text-center"
              >
                Yes
              </button>
            </div>
          </div>

          {/* confirmed alert */}
          <div
            ref={confirmedRef}
            className="fixed hidden lg:left-[50%] lg:top-[25%] lg:w-[19.6875rem] lg:h-[10rem] bg-white rounded-lg py-2 text-white lg:my-5 flex justify-center items-center text-center flex-col"
          >
            <h3 className="text-2xl text-[#EF8E87]">
              Result submitted successfully
            </h3>
          </div>

          {/* unconfirmed alert */}
          <div
            ref={unconfirmedRef}
            className="fixed hidden lg:left-[50%] lg:top-[25%] lg:w-[19.6875rem] lg:h-[10rem] bg-white rounded-lg py-2 text-white lg:my-5 flex justify-center items-center text-center flex-col"
          >
            <h3 className="text-xl text-[#EF8E87] p-1">
              Result submission not successful
            </h3>
            <h5 className="text-[#EF8E87]">Fill up all empty credentials</h5>
          </div>

          <button
            className=" w-max h-[4rem] bg-[#01112B] rounded-tl-[20px] rounded-br-[20px] mx-auto text-base border-[3px] border-[#34FEF8] text-[#34FEF8] mb-2 mt-20 p-3 pl-4 pt-0"
            onClick={handleBack2ImgBtn}
          >
            Back
          </button>
        </div>

        {usersInfo.length > 0 ? (
          usersInfo.map((info, index) => {
            return (
              <div ref={raterLgRef} className="relative hidden lg:block lg:w-[50vw] lg:h-[100%]">
                <div className="carder mr-10 relative lg:fixed top-1 mt-10">
                  {/* <img src={CardImg} alt="card rater" /> */}
                  <div className="relative top-0">
                    <div className="absolute top-[2.7em] left-[2.9em] font-extrabold text-4xl text-[#3E361D]">
                    {Math.ceil((parseInt(info.Acceleration) +
                        parseInt(info.Aggression) +
                        parseInt(info.Agility) +
                        parseInt(info.AttackingPosition) +
                        parseInt(info.Awareness) +
                        parseInt(info.Balance) +
                        parseInt(info.BallControl) +
                        parseInt(info.Composure) +
                        parseInt(info.Crossing) +
                        parseInt(info.Curve) +
                        parseInt(info.Defending) +
                        parseInt(info.Dribbling) +
                        parseInt(info.Finishing) +
                        parseInt(info.FreeKick) +
                        parseInt(info.Heading) +
                        parseInt(info.Interceptions) +
                        parseInt(info.Jumping) +
                        parseInt(info.LongPassing) +
                        parseInt(info.LongShot) +
                        parseInt(info.Marking) +
                        parseInt(info.Pace) +
                        parseInt(info.Passing) +
                        parseInt(info.Penalties) +
                        parseInt(info.Physical) +
                        parseInt(info.Positioning) +
                        parseInt(info.Reactions) +
                        parseInt(info.Shooting) +
                        parseInt(info.ShortPassing) +
                        parseInt(info.ShotPower) +
                        parseInt(info.SlidingTackle) +
                        parseInt(info.SprintSpeed) +
                        parseInt(info.Stamina) +
                        parseInt(info.StandingTackle) +
                        parseInt(info.Strength) +
                        parseInt(info.Vision) +
                        parseInt(info.Volleys)) /
                        36)}
                    </div>
                    <div className="absolute top-[4.7em] left-[3.4em]  text-3xl text-[#3E361D]">
                      {info.Position}
                    </div>
                    <img
                      src={info.Nation}
                      alt="country"
                      className="w-[40px] h-[30px] absolute top-[12em] left-[6.5em] z-[99999999999]"
                    />
                    <img
                      src={info.Team}
                      alt="club"
                      className="w-[40px] h-[40px] absolute top-[15.5em] left-[6.5em]"
                    />
                    <img
                      src={image}
                      alt="player"
                      className="w-[200px] h-[200px] absolute top-[6.7em] left-[11em]"
                    />
                    <div className="absolute top-[8.7em] left-[4.5em]  text-4xl text-[#3E361D]">
                      {info.name}
                    </div>
                    <div className="absolute top-[10.5em] left-[2.5em]  text-4xl text-[#3E361D]">
                      {info.Pace}
                    </div>
                    <div className="absolute top-[11.6em] left-[2.5em]  text-4xl text-[#3E361D]">
                      {info.Shooting}
                    </div>
                    <div className="absolute top-[12.7em] left-[2.5em]  text-4xl text-[#3E361D]">
                      {info.Passing}
                    </div>
                    <div className="absolute top-[10.5em] left-[6.9em]  text-4xl text-[#3E361D]">
                      {info.Dribbling}
                    </div>
                    <div className="absolute top-[11.6em] left-[6.9em]  text-4xl text-[#3E361D]">
                      {info.Defending}
                    </div>
                    <div className="absolute top-[12.7em] left-[6.9em]  text-4xl text-[#3E361D]">
                      {info.Physical}
                    </div>
                    <div className="absolute text-3xl font-extrabold  top-[17em] left-[6.1em]  p-1 rounded-[50%] text-[#3E361D] bg-[#D6C26C] w-max h-max">
                      VCR
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div ref={raterLgRef} className="relative hidden lg:block lg:w-[50vw] lg:h-[100%]">
            <div className="carder mr-10 relative lg:fixed top-1 mt-10">
              {/* <img src={CardImg} alt="card rater" /> */}
              <div className="relative top-0">
                <div className="absolute text-3xl font-extrabold  top-[17em] left-[6.1em]  p-1 rounded-[50%] text-[#3E361D] bg-[#D6C26C] w-max h-max">
                  VCR
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Rater;
