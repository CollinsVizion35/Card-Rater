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

import { AppPass }  from "../contexts/AppContext";
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
} from "firebase/firestore";
import { db } from "../firebase";

function Rater() {
  useEffect(() => {
    document.title = "VCR - Create your Idea Footballing Rater";
  }, []);

  const navigate = useNavigate();

  const {
    name,
    setName,
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
  } = AppPass();

  const save2Ref = useRef();
  const confirmedRef = useRef();
  const unconfirmedRef = useRef();
  const nationRef = useRef();
  const skillSetRef = useRef();
  const clubNationRef = useRef();
  const bundesligaRef = useRef();
  const laLigaRef = useRef();
  const ligue1Ref = useRef();
  const eplRef = useRef();
  const serieARef = useRef();
  const rotwRef = useRef();
  const teamsRef = useRef();
  const imagesRef = useRef();

  teamsRef;

  const data = {
    // name: name,
  };

  const [photoURL, setPhotoURL] = useState(defaultImg);

  // storing and getting image from local storage
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64Image = reader.result;
      localStorage.setItem("image", base64Image);
      setImage(base64Image);
    };
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  console.log(data);

  async function handleEditBtn(e) {
    save2Ref.current.style.display = "flex";
  }

  async function handleEditBtn2() {
    //   e.preventDefault();
    try {
      // setError(false);

      await addDoc(collection(db, "Junior Sec School"), data);
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

  const handleBack2HomeBtn = () => {
    navigate("/home");
  };
  const handleBack2NationBtn = () => {
    nationRef.current.style.display = "block";
    clubNationRef.current.style.display = "none";
  };
  const handleBack2NationTeamBtn = () => {
    clubNationRef.current.style.display = "block";
    teamsRef.current.style.display = "none";
  };
  const handleBack2TeamBtn = () => {
    teamsRef.current.style.display = "block";
    imagesRef.current.style.display = "none";
    bundesligaRef.current.style.display = "block";
    laLigaRef.current.style.display = "none";
    ligue1Ref.current.style.display = "none";
    eplRef.current.style.display = "none";
    serieARef.current.style.display = "none";
    rotwRef.current.style.display = "none";
  };
  const handleBack2ImgBtn = () => {
    imagesRef.current.style.display = "block";
    skillSetRef.current.style.display = "none";
  };

  const handleEditBtn1st = (e) => {
    nationRef.current.style.display = "none";
    clubNationRef.current.style.display = "block";
    // console.log(e.target.src)
  };

  const handleEditBtnBund = () => {
    clubNationRef.current.style.display = "none";
    teamsRef.current.style.display = "block";
    bundesligaRef.current.style.display = "block";
    laLigaRef.current.style.display = "none";
    ligue1Ref.current.style.display = "none";
    eplRef.current.style.display = "none";
    serieARef.current.style.display = "none";
    rotwRef.current.style.display = "none";
  };

  const handleEditBtnLaLiga = () => {
    clubNationRef.current.style.display = "none";
    teamsRef.current.style.display = "block";
    bundesligaRef.current.style.display = "none";
    laLigaRef.current.style.display = "block";
    ligue1Ref.current.style.display = "none";
    eplRef.current.style.display = "none";
    serieARef.current.style.display = "none";
    rotwRef.current.style.display = "none";
  };

  const handleEditBtnLig1 = () => {
    clubNationRef.current.style.display = "none";
    teamsRef.current.style.display = "block";
    bundesligaRef.current.style.display = "none";
    laLigaRef.current.style.display = "none";
    ligue1Ref.current.style.display = "block";
    eplRef.current.style.display = "none";
    serieARef.current.style.display = "none";
    rotwRef.current.style.display = "none";
  };

  const handleEditBtnEpl = () => {
    clubNationRef.current.style.display = "none";
    teamsRef.current.style.display = "block";
    bundesligaRef.current.style.display = "none";
    laLigaRef.current.style.display = "none";
    ligue1Ref.current.style.display = "none";
    eplRef.current.style.display = "block";
    serieARef.current.style.display = "none";
    rotwRef.current.style.display = "none";
  };

  const handleEditBtnSerA = () => {
    clubNationRef.current.style.display = "none";
    teamsRef.current.style.display = "block";
    bundesligaRef.current.style.display = "none";
    laLigaRef.current.style.display = "none";
    ligue1Ref.current.style.display = "none";
    eplRef.current.style.display = "none";
    serieARef.current.style.display = "block";
    rotwRef.current.style.display = "none";
  };

  const handleEditBtnRotw = () => {
    clubNationRef.current.style.display = "none";
    teamsRef.current.style.display = "block";
    bundesligaRef.current.style.display = "none";
    laLigaRef.current.style.display = "none";
    ligue1Ref.current.style.display = "none";
    eplRef.current.style.display = "none";
    serieARef.current.style.display = "none";
    rotwRef.current.style.display = "block";
  };

  const handleEditBtnteams = () => {
    teamsRef.current.style.display = "none";
    imagesRef.current.style.display = "block";
  };

  const openRemoveBg = () => {
    alert("Redirecting to another page, Remove.bg");
    window.open("https://www.remove.bg/upload");
  };

  const handleSkillSetBtn = () => {
    imagesRef.current.style.display = "none";
    skillSetRef.current.style.display = "flex";
  };

  useEffect(() => {
    save2Ref.current.style.display = "none";
  }, []);

  const audio = new Audio("./mixkit-soccer-ball-quick-kick-2108.wav");

  const playBallAudio = () => {
    audio.play();
  };

  return (
    <>
      {/* main */}

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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
                      onClick={() => {
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
              {image && (
                <img
                  className="h-36 w-36 rounded-[50%]"
                  // src={photoURL}
                  src={image}
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

      {/*  lg:flex lg:flex-row flex-col  */}
      <div
        ref={skillSetRef}
        className="major-Bg text-center
      
       overflow-visible hidden lg:flex-row flex-col"
      >
        <div className="relative carder2 lg:hidden">
          <div className="carder-sm fixed lg:hidden h-[50vh] w-[100vw]">
            <div className="sticky top-[10vh] pr-[90px] text-2xl text-[#3E361D]">
              98
            </div>
            <div className="sticky top-[15.5vh] pr-[90px]  text-[18px] text-[#3E361D]">
              LWF
            </div>
            <div className="relative flex boy content-center justify-center ">
              <div className="absolute top-[-2.5em]">
                <img
                  src={countryImg}
                  alt="country"
                  className="w-[20px] h-[15px] top-[20.5vh] sticky z-[99999999999]"
                />
                <img
                  src={clubImg}
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
              Messi
            </div>
            <div className="sticky top-[32vh] pr-[100px]  text-[18px] text-[#3E361D]">
              99
            </div>
            <div className="sticky top-[35.5vh] pr-[100px]  text-[18px] text-[#3E361D]">
              98
            </div>
            <div className="sticky top-[39vh] pr-[100px]  text-[18px] text-[#3E361D]">
              99
            </div>
            <div className="sticky top-[32vh]  pl-[50px] text-[18px] text-[#3E361D]">
              97
            </div>
            <div className="sticky top-[35.5vh]  pl-[50px] text-[18px] text-[#3E361D]">
              97
            </div>
            <div className="sticky  pl-[50px] text-[18px] text-[#3E361D]">
              99
            </div>
          </div>
        </div>

        <div className="class lg:w-[50vw]  flex flex-col pt-[55vh]  lg:pt-10">
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
                  <option clasName="py-2" value="99">
                    99
                  </option>
                  <option clasName="py-2" value="98">
                    98
                  </option>
                  <option clasName="py-2" value="97">
                    97
                  </option>
                  <option clasName="py-2" value="96">
                    96
                  </option>
                  <option clasName="py-2" value="95">
                    95
                  </option>
                  <option clasName="py-2" value="94">
                    94
                  </option>
                  <option clasName="py-2" value="93">
                    93
                  </option>
                  <option clasName="py-2" value="92">
                    92
                  </option>
                  <option clasName="py-2" value="91">
                    91
                  </option>
                  <option clasName="py-2" value="90">
                    90
                  </option>
                  <option clasName="py-2" value="89">
                    89
                  </option>
                  <option clasName="py-2" value="88">
                    88
                  </option>
                  <option clasName="py-2" value="87">
                    87
                  </option>
                  <option clasName="py-2" value="86">
                    86
                  </option>
                  <option clasName="py-2" value="85">
                    85
                  </option>
                  <option clasName="py-2" value="84">
                    84
                  </option>
                  <option clasName="py-2" value="83">
                    83
                  </option>
                  <option clasName="py-2" value="82">
                    82
                  </option>
                  <option clasName="py-2" value="81">
                    81
                  </option>
                  <option clasName="py-2" value="80">
                    80
                  </option>
                  <option clasName="py-2" value="79">
                    79
                  </option>
                  <option clasName="py-2" value="78">
                    78
                  </option>
                  <option clasName="py-2" value="77">
                    77
                  </option>
                  <option clasName="py-2" value="76">
                    76
                  </option>
                  <option clasName="py-2" value="75">
                    75
                  </option>
                  <option clasName="py-2" value="74">
                    74
                  </option>
                  <option clasName="py-2" value="73">
                    73
                  </option>
                  <option clasName="py-2" value="72">
                    72
                  </option>
                  <option clasName="py-2" value="71">
                    71
                  </option>
                  <option clasName="py-2" value="70">
                    70
                  </option>
                  <option clasName="py-2" value="69">
                    69
                  </option>
                  <option clasName="py-2" value="68">
                    68
                  </option>
                  <option clasName="py-2" value="67">
                    67
                  </option>
                  <option clasName="py-2" value="66">
                    66
                  </option>
                  <option clasName="py-2" value="65">
                    65
                  </option>
                  <option clasName="py-2" value="64">
                    64
                  </option>
                  <option clasName="py-2" value="63">
                    63
                  </option>
                  <option clasName="py-2" value="62">
                    62
                  </option>
                  <option clasName="py-2" value="61">
                    61
                  </option>
                  <option clasName="py-2" value="60">
                    60
                  </option>
                  <option clasName="py-2" value="59">
                    59
                  </option>
                  <option clasName="py-2" value="58">
                    58
                  </option>
                  <option clasName="py-2" value="57">
                    57
                  </option>
                  <option clasName="py-2" value="56">
                    56
                  </option>
                  <option clasName="py-2" value="55">
                    55
                  </option>
                  <option clasName="py-2" value="54">
                    54
                  </option>
                  <option clasName="py-2" value="53">
                    53
                  </option>
                  <option clasName="py-2" value="52">
                    52
                  </option>
                  <option clasName="py-2" value="51">
                    51
                  </option>
                  <option clasName="py-2" value="50">
                    50
                  </option>
                  <option clasName="py-2" value="49">
                    49
                  </option>
                  <option clasName="py-2" value="48">
                    48
                  </option>
                  <option clasName="py-2" value="47">
                    47
                  </option>
                  <option clasName="py-2" value="46">
                    46
                  </option>
                  <option clasName="py-2" value="45">
                    45
                  </option>
                  <option clasName="py-2" value="44">
                    44
                  </option>
                  <option clasName="py-2" value="43">
                    43
                  </option>
                  <option clasName="py-2" value="42">
                    42
                  </option>
                  <option clasName="py-2" value="41">
                    41
                  </option>
                  <option clasName="py-2" value="40">
                    40
                  </option>
                  <option clasName="py-2" value="39">
                    39
                  </option>
                  <option clasName="py-2" value="38">
                    38
                  </option>
                  <option clasName="py-2" value="37">
                    37
                  </option>
                  <option clasName="py-2" value="36">
                    36
                  </option>
                  <option clasName="py-2" value="35">
                    35
                  </option>
                  <option clasName="py-2" value="34">
                    34
                  </option>
                  <option clasName="py-2" value="33">
                    33
                  </option>
                  <option clasName="py-2" value="32">
                    32
                  </option>
                  <option clasName="py-2" value="31">
                    31
                  </option>
                  <option clasName="py-2" value="30">
                    30
                  </option>
                  <option clasName="py-2" value="29">
                    29
                  </option>
                  <option clasName="py-2" value="28">
                    28
                  </option>
                  <option clasName="py-2" value="27">
                    27
                  </option>
                  <option clasName="py-2" value="26">
                    26
                  </option>
                  <option clasName="py-2" value="25">
                    25
                  </option>
                  <option clasName="py-2" value="24">
                    24
                  </option>
                  <option clasName="py-2" value="23">
                    23
                  </option>
                  <option clasName="py-2" value="22">
                    22
                  </option>
                  <option clasName="py-2" value="21">
                    21
                  </option>
                  <option clasName="py-2" value="20">
                    20
                  </option>
                  <option clasName="py-2" value="19">
                    19
                  </option>
                  <option clasName="py-2" value="18">
                    18
                  </option>
                  <option clasName="py-2" value="17">
                    17
                  </option>
                  <option clasName="py-2" value="16">
                    16
                  </option>
                  <option clasName="py-2" value="15">
                    15
                  </option>
                  <option clasName="py-2" value="14">
                    14
                  </option>
                  <option clasName="py-2" value="13">
                    13
                  </option>
                  <option clasName="py-2" value="12">
                    12
                  </option>
                  <option clasName="py-2" value="11">
                    11
                  </option>
                  <option clasName="py-2" value="10">
                    10
                  </option>
                  <option clasName="py-2" value="9">
                    9
                  </option>
                  <option clasName="py-2" value="8">
                    8
                  </option>
                  <option clasName="py-2" value="7">
                    7
                  </option>
                  <option clasName="py-2" value="6">
                    6
                  </option>
                  <option clasName="py-2" value="5">
                    5
                  </option>
                  <option clasName="py-2" value="4">
                    4
                  </option>
                  <option clasName="py-2" value="3">
                    3
                  </option>
                  <option clasName="py-2" value="2">
                    2
                  </option>
                  <option clasName="py-2" value="1">
                    1
                  </option>
                  <option clasName="py-2" value="0">
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
                  <option clasName="py-2" value="99">
                    99
                  </option>
                  <option clasName="py-2" value="98">
                    98
                  </option>
                  <option clasName="py-2" value="97">
                    97
                  </option>
                  <option clasName="py-2" value="96">
                    96
                  </option>
                  <option clasName="py-2" value="95">
                    95
                  </option>
                  <option clasName="py-2" value="94">
                    94
                  </option>
                  <option clasName="py-2" value="93">
                    93
                  </option>
                  <option clasName="py-2" value="92">
                    92
                  </option>
                  <option clasName="py-2" value="91">
                    91
                  </option>
                  <option clasName="py-2" value="90">
                    90
                  </option>
                  <option clasName="py-2" value="89">
                    89
                  </option>
                  <option clasName="py-2" value="88">
                    88
                  </option>
                  <option clasName="py-2" value="87">
                    87
                  </option>
                  <option clasName="py-2" value="86">
                    86
                  </option>
                  <option clasName="py-2" value="85">
                    85
                  </option>
                  <option clasName="py-2" value="84">
                    84
                  </option>
                  <option clasName="py-2" value="83">
                    83
                  </option>
                  <option clasName="py-2" value="82">
                    82
                  </option>
                  <option clasName="py-2" value="81">
                    81
                  </option>
                  <option clasName="py-2" value="80">
                    80
                  </option>
                  <option clasName="py-2" value="79">
                    79
                  </option>
                  <option clasName="py-2" value="78">
                    78
                  </option>
                  <option clasName="py-2" value="77">
                    77
                  </option>
                  <option clasName="py-2" value="76">
                    76
                  </option>
                  <option clasName="py-2" value="75">
                    75
                  </option>
                  <option clasName="py-2" value="74">
                    74
                  </option>
                  <option clasName="py-2" value="73">
                    73
                  </option>
                  <option clasName="py-2" value="72">
                    72
                  </option>
                  <option clasName="py-2" value="71">
                    71
                  </option>
                  <option clasName="py-2" value="70">
                    70
                  </option>
                  <option clasName="py-2" value="69">
                    69
                  </option>
                  <option clasName="py-2" value="68">
                    68
                  </option>
                  <option clasName="py-2" value="67">
                    67
                  </option>
                  <option clasName="py-2" value="66">
                    66
                  </option>
                  <option clasName="py-2" value="65">
                    65
                  </option>
                  <option clasName="py-2" value="64">
                    64
                  </option>
                  <option clasName="py-2" value="63">
                    63
                  </option>
                  <option clasName="py-2" value="62">
                    62
                  </option>
                  <option clasName="py-2" value="61">
                    61
                  </option>
                  <option clasName="py-2" value="60">
                    60
                  </option>
                  <option clasName="py-2" value="59">
                    59
                  </option>
                  <option clasName="py-2" value="58">
                    58
                  </option>
                  <option clasName="py-2" value="57">
                    57
                  </option>
                  <option clasName="py-2" value="56">
                    56
                  </option>
                  <option clasName="py-2" value="55">
                    55
                  </option>
                  <option clasName="py-2" value="54">
                    54
                  </option>
                  <option clasName="py-2" value="53">
                    53
                  </option>
                  <option clasName="py-2" value="52">
                    52
                  </option>
                  <option clasName="py-2" value="51">
                    51
                  </option>
                  <option clasName="py-2" value="50">
                    50
                  </option>
                  <option clasName="py-2" value="49">
                    49
                  </option>
                  <option clasName="py-2" value="48">
                    48
                  </option>
                  <option clasName="py-2" value="47">
                    47
                  </option>
                  <option clasName="py-2" value="46">
                    46
                  </option>
                  <option clasName="py-2" value="45">
                    45
                  </option>
                  <option clasName="py-2" value="44">
                    44
                  </option>
                  <option clasName="py-2" value="43">
                    43
                  </option>
                  <option clasName="py-2" value="42">
                    42
                  </option>
                  <option clasName="py-2" value="41">
                    41
                  </option>
                  <option clasName="py-2" value="40">
                    40
                  </option>
                  <option clasName="py-2" value="39">
                    39
                  </option>
                  <option clasName="py-2" value="38">
                    38
                  </option>
                  <option clasName="py-2" value="37">
                    37
                  </option>
                  <option clasName="py-2" value="36">
                    36
                  </option>
                  <option clasName="py-2" value="35">
                    35
                  </option>
                  <option clasName="py-2" value="34">
                    34
                  </option>
                  <option clasName="py-2" value="33">
                    33
                  </option>
                  <option clasName="py-2" value="32">
                    32
                  </option>
                  <option clasName="py-2" value="31">
                    31
                  </option>
                  <option clasName="py-2" value="30">
                    30
                  </option>
                  <option clasName="py-2" value="29">
                    29
                  </option>
                  <option clasName="py-2" value="28">
                    28
                  </option>
                  <option clasName="py-2" value="27">
                    27
                  </option>
                  <option clasName="py-2" value="26">
                    26
                  </option>
                  <option clasName="py-2" value="25">
                    25
                  </option>
                  <option clasName="py-2" value="24">
                    24
                  </option>
                  <option clasName="py-2" value="23">
                    23
                  </option>
                  <option clasName="py-2" value="22">
                    22
                  </option>
                  <option clasName="py-2" value="21">
                    21
                  </option>
                  <option clasName="py-2" value="20">
                    20
                  </option>
                  <option clasName="py-2" value="19">
                    19
                  </option>
                  <option clasName="py-2" value="18">
                    18
                  </option>
                  <option clasName="py-2" value="17">
                    17
                  </option>
                  <option clasName="py-2" value="16">
                    16
                  </option>
                  <option clasName="py-2" value="15">
                    15
                  </option>
                  <option clasName="py-2" value="14">
                    14
                  </option>
                  <option clasName="py-2" value="13">
                    13
                  </option>
                  <option clasName="py-2" value="12">
                    12
                  </option>
                  <option clasName="py-2" value="11">
                    11
                  </option>
                  <option clasName="py-2" value="10">
                    10
                  </option>
                  <option clasName="py-2" value="9">
                    9
                  </option>
                  <option clasName="py-2" value="8">
                    8
                  </option>
                  <option clasName="py-2" value="7">
                    7
                  </option>
                  <option clasName="py-2" value="6">
                    6
                  </option>
                  <option clasName="py-2" value="5">
                    5
                  </option>
                  <option clasName="py-2" value="4">
                    4
                  </option>
                  <option clasName="py-2" value="3">
                    3
                  </option>
                  <option clasName="py-2" value="2">
                    2
                  </option>
                  <option clasName="py-2" value="1">
                    1
                  </option>
                  <option clasName="py-2" value="0">
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
                  <option clasName="py-2" value="99">
                    99
                  </option>
                  <option clasName="py-2" value="98">
                    98
                  </option>
                  <option clasName="py-2" value="97">
                    97
                  </option>
                  <option clasName="py-2" value="96">
                    96
                  </option>
                  <option clasName="py-2" value="95">
                    95
                  </option>
                  <option clasName="py-2" value="94">
                    94
                  </option>
                  <option clasName="py-2" value="93">
                    93
                  </option>
                  <option clasName="py-2" value="92">
                    92
                  </option>
                  <option clasName="py-2" value="91">
                    91
                  </option>
                  <option clasName="py-2" value="90">
                    90
                  </option>
                  <option clasName="py-2" value="89">
                    89
                  </option>
                  <option clasName="py-2" value="88">
                    88
                  </option>
                  <option clasName="py-2" value="87">
                    87
                  </option>
                  <option clasName="py-2" value="86">
                    86
                  </option>
                  <option clasName="py-2" value="85">
                    85
                  </option>
                  <option clasName="py-2" value="84">
                    84
                  </option>
                  <option clasName="py-2" value="83">
                    83
                  </option>
                  <option clasName="py-2" value="82">
                    82
                  </option>
                  <option clasName="py-2" value="81">
                    81
                  </option>
                  <option clasName="py-2" value="80">
                    80
                  </option>
                  <option clasName="py-2" value="79">
                    79
                  </option>
                  <option clasName="py-2" value="78">
                    78
                  </option>
                  <option clasName="py-2" value="77">
                    77
                  </option>
                  <option clasName="py-2" value="76">
                    76
                  </option>
                  <option clasName="py-2" value="75">
                    75
                  </option>
                  <option clasName="py-2" value="74">
                    74
                  </option>
                  <option clasName="py-2" value="73">
                    73
                  </option>
                  <option clasName="py-2" value="72">
                    72
                  </option>
                  <option clasName="py-2" value="71">
                    71
                  </option>
                  <option clasName="py-2" value="70">
                    70
                  </option>
                  <option clasName="py-2" value="69">
                    69
                  </option>
                  <option clasName="py-2" value="68">
                    68
                  </option>
                  <option clasName="py-2" value="67">
                    67
                  </option>
                  <option clasName="py-2" value="66">
                    66
                  </option>
                  <option clasName="py-2" value="65">
                    65
                  </option>
                  <option clasName="py-2" value="64">
                    64
                  </option>
                  <option clasName="py-2" value="63">
                    63
                  </option>
                  <option clasName="py-2" value="62">
                    62
                  </option>
                  <option clasName="py-2" value="61">
                    61
                  </option>
                  <option clasName="py-2" value="60">
                    60
                  </option>
                  <option clasName="py-2" value="59">
                    59
                  </option>
                  <option clasName="py-2" value="58">
                    58
                  </option>
                  <option clasName="py-2" value="57">
                    57
                  </option>
                  <option clasName="py-2" value="56">
                    56
                  </option>
                  <option clasName="py-2" value="55">
                    55
                  </option>
                  <option clasName="py-2" value="54">
                    54
                  </option>
                  <option clasName="py-2" value="53">
                    53
                  </option>
                  <option clasName="py-2" value="52">
                    52
                  </option>
                  <option clasName="py-2" value="51">
                    51
                  </option>
                  <option clasName="py-2" value="50">
                    50
                  </option>
                  <option clasName="py-2" value="49">
                    49
                  </option>
                  <option clasName="py-2" value="48">
                    48
                  </option>
                  <option clasName="py-2" value="47">
                    47
                  </option>
                  <option clasName="py-2" value="46">
                    46
                  </option>
                  <option clasName="py-2" value="45">
                    45
                  </option>
                  <option clasName="py-2" value="44">
                    44
                  </option>
                  <option clasName="py-2" value="43">
                    43
                  </option>
                  <option clasName="py-2" value="42">
                    42
                  </option>
                  <option clasName="py-2" value="41">
                    41
                  </option>
                  <option clasName="py-2" value="40">
                    40
                  </option>
                  <option clasName="py-2" value="39">
                    39
                  </option>
                  <option clasName="py-2" value="38">
                    38
                  </option>
                  <option clasName="py-2" value="37">
                    37
                  </option>
                  <option clasName="py-2" value="36">
                    36
                  </option>
                  <option clasName="py-2" value="35">
                    35
                  </option>
                  <option clasName="py-2" value="34">
                    34
                  </option>
                  <option clasName="py-2" value="33">
                    33
                  </option>
                  <option clasName="py-2" value="32">
                    32
                  </option>
                  <option clasName="py-2" value="31">
                    31
                  </option>
                  <option clasName="py-2" value="30">
                    30
                  </option>
                  <option clasName="py-2" value="29">
                    29
                  </option>
                  <option clasName="py-2" value="28">
                    28
                  </option>
                  <option clasName="py-2" value="27">
                    27
                  </option>
                  <option clasName="py-2" value="26">
                    26
                  </option>
                  <option clasName="py-2" value="25">
                    25
                  </option>
                  <option clasName="py-2" value="24">
                    24
                  </option>
                  <option clasName="py-2" value="23">
                    23
                  </option>
                  <option clasName="py-2" value="22">
                    22
                  </option>
                  <option clasName="py-2" value="21">
                    21
                  </option>
                  <option clasName="py-2" value="20">
                    20
                  </option>
                  <option clasName="py-2" value="19">
                    19
                  </option>
                  <option clasName="py-2" value="18">
                    18
                  </option>
                  <option clasName="py-2" value="17">
                    17
                  </option>
                  <option clasName="py-2" value="16">
                    16
                  </option>
                  <option clasName="py-2" value="15">
                    15
                  </option>
                  <option clasName="py-2" value="14">
                    14
                  </option>
                  <option clasName="py-2" value="13">
                    13
                  </option>
                  <option clasName="py-2" value="12">
                    12
                  </option>
                  <option clasName="py-2" value="11">
                    11
                  </option>
                  <option clasName="py-2" value="10">
                    10
                  </option>
                  <option clasName="py-2" value="9">
                    9
                  </option>
                  <option clasName="py-2" value="8">
                    8
                  </option>
                  <option clasName="py-2" value="7">
                    7
                  </option>
                  <option clasName="py-2" value="6">
                    6
                  </option>
                  <option clasName="py-2" value="5">
                    5
                  </option>
                  <option clasName="py-2" value="4">
                    4
                  </option>
                  <option clasName="py-2" value="3">
                    3
                  </option>
                  <option clasName="py-2" value="2">
                    2
                  </option>
                  <option clasName="py-2" value="1">
                    1
                  </option>
                  <option clasName="py-2" value="0">
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
                  <option clasName="py-2" value="99">
                    99
                  </option>
                  <option clasName="py-2" value="98">
                    98
                  </option>
                  <option clasName="py-2" value="97">
                    97
                  </option>
                  <option clasName="py-2" value="96">
                    96
                  </option>
                  <option clasName="py-2" value="95">
                    95
                  </option>
                  <option clasName="py-2" value="94">
                    94
                  </option>
                  <option clasName="py-2" value="93">
                    93
                  </option>
                  <option clasName="py-2" value="92">
                    92
                  </option>
                  <option clasName="py-2" value="91">
                    91
                  </option>
                  <option clasName="py-2" value="90">
                    90
                  </option>
                  <option clasName="py-2" value="89">
                    89
                  </option>
                  <option clasName="py-2" value="88">
                    88
                  </option>
                  <option clasName="py-2" value="87">
                    87
                  </option>
                  <option clasName="py-2" value="86">
                    86
                  </option>
                  <option clasName="py-2" value="85">
                    85
                  </option>
                  <option clasName="py-2" value="84">
                    84
                  </option>
                  <option clasName="py-2" value="83">
                    83
                  </option>
                  <option clasName="py-2" value="82">
                    82
                  </option>
                  <option clasName="py-2" value="81">
                    81
                  </option>
                  <option clasName="py-2" value="80">
                    80
                  </option>
                  <option clasName="py-2" value="79">
                    79
                  </option>
                  <option clasName="py-2" value="78">
                    78
                  </option>
                  <option clasName="py-2" value="77">
                    77
                  </option>
                  <option clasName="py-2" value="76">
                    76
                  </option>
                  <option clasName="py-2" value="75">
                    75
                  </option>
                  <option clasName="py-2" value="74">
                    74
                  </option>
                  <option clasName="py-2" value="73">
                    73
                  </option>
                  <option clasName="py-2" value="72">
                    72
                  </option>
                  <option clasName="py-2" value="71">
                    71
                  </option>
                  <option clasName="py-2" value="70">
                    70
                  </option>
                  <option clasName="py-2" value="69">
                    69
                  </option>
                  <option clasName="py-2" value="68">
                    68
                  </option>
                  <option clasName="py-2" value="67">
                    67
                  </option>
                  <option clasName="py-2" value="66">
                    66
                  </option>
                  <option clasName="py-2" value="65">
                    65
                  </option>
                  <option clasName="py-2" value="64">
                    64
                  </option>
                  <option clasName="py-2" value="63">
                    63
                  </option>
                  <option clasName="py-2" value="62">
                    62
                  </option>
                  <option clasName="py-2" value="61">
                    61
                  </option>
                  <option clasName="py-2" value="60">
                    60
                  </option>
                  <option clasName="py-2" value="59">
                    59
                  </option>
                  <option clasName="py-2" value="58">
                    58
                  </option>
                  <option clasName="py-2" value="57">
                    57
                  </option>
                  <option clasName="py-2" value="56">
                    56
                  </option>
                  <option clasName="py-2" value="55">
                    55
                  </option>
                  <option clasName="py-2" value="54">
                    54
                  </option>
                  <option clasName="py-2" value="53">
                    53
                  </option>
                  <option clasName="py-2" value="52">
                    52
                  </option>
                  <option clasName="py-2" value="51">
                    51
                  </option>
                  <option clasName="py-2" value="50">
                    50
                  </option>
                  <option clasName="py-2" value="49">
                    49
                  </option>
                  <option clasName="py-2" value="48">
                    48
                  </option>
                  <option clasName="py-2" value="47">
                    47
                  </option>
                  <option clasName="py-2" value="46">
                    46
                  </option>
                  <option clasName="py-2" value="45">
                    45
                  </option>
                  <option clasName="py-2" value="44">
                    44
                  </option>
                  <option clasName="py-2" value="43">
                    43
                  </option>
                  <option clasName="py-2" value="42">
                    42
                  </option>
                  <option clasName="py-2" value="41">
                    41
                  </option>
                  <option clasName="py-2" value="40">
                    40
                  </option>
                  <option clasName="py-2" value="39">
                    39
                  </option>
                  <option clasName="py-2" value="38">
                    38
                  </option>
                  <option clasName="py-2" value="37">
                    37
                  </option>
                  <option clasName="py-2" value="36">
                    36
                  </option>
                  <option clasName="py-2" value="35">
                    35
                  </option>
                  <option clasName="py-2" value="34">
                    34
                  </option>
                  <option clasName="py-2" value="33">
                    33
                  </option>
                  <option clasName="py-2" value="32">
                    32
                  </option>
                  <option clasName="py-2" value="31">
                    31
                  </option>
                  <option clasName="py-2" value="30">
                    30
                  </option>
                  <option clasName="py-2" value="29">
                    29
                  </option>
                  <option clasName="py-2" value="28">
                    28
                  </option>
                  <option clasName="py-2" value="27">
                    27
                  </option>
                  <option clasName="py-2" value="26">
                    26
                  </option>
                  <option clasName="py-2" value="25">
                    25
                  </option>
                  <option clasName="py-2" value="24">
                    24
                  </option>
                  <option clasName="py-2" value="23">
                    23
                  </option>
                  <option clasName="py-2" value="22">
                    22
                  </option>
                  <option clasName="py-2" value="21">
                    21
                  </option>
                  <option clasName="py-2" value="20">
                    20
                  </option>
                  <option clasName="py-2" value="19">
                    19
                  </option>
                  <option clasName="py-2" value="18">
                    18
                  </option>
                  <option clasName="py-2" value="17">
                    17
                  </option>
                  <option clasName="py-2" value="16">
                    16
                  </option>
                  <option clasName="py-2" value="15">
                    15
                  </option>
                  <option clasName="py-2" value="14">
                    14
                  </option>
                  <option clasName="py-2" value="13">
                    13
                  </option>
                  <option clasName="py-2" value="12">
                    12
                  </option>
                  <option clasName="py-2" value="11">
                    11
                  </option>
                  <option clasName="py-2" value="10">
                    10
                  </option>
                  <option clasName="py-2" value="9">
                    9
                  </option>
                  <option clasName="py-2" value="8">
                    8
                  </option>
                  <option clasName="py-2" value="7">
                    7
                  </option>
                  <option clasName="py-2" value="6">
                    6
                  </option>
                  <option clasName="py-2" value="5">
                    5
                  </option>
                  <option clasName="py-2" value="4">
                    4
                  </option>
                  <option clasName="py-2" value="3">
                    3
                  </option>
                  <option clasName="py-2" value="2">
                    2
                  </option>
                  <option clasName="py-2" value="1">
                    1
                  </option>
                  <option clasName="py-2" value="0">
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
                  <option clasName="py-2" value="99">
                    99
                  </option>
                  <option clasName="py-2" value="98">
                    98
                  </option>
                  <option clasName="py-2" value="97">
                    97
                  </option>
                  <option clasName="py-2" value="96">
                    96
                  </option>
                  <option clasName="py-2" value="95">
                    95
                  </option>
                  <option clasName="py-2" value="94">
                    94
                  </option>
                  <option clasName="py-2" value="93">
                    93
                  </option>
                  <option clasName="py-2" value="92">
                    92
                  </option>
                  <option clasName="py-2" value="91">
                    91
                  </option>
                  <option clasName="py-2" value="90">
                    90
                  </option>
                  <option clasName="py-2" value="89">
                    89
                  </option>
                  <option clasName="py-2" value="88">
                    88
                  </option>
                  <option clasName="py-2" value="87">
                    87
                  </option>
                  <option clasName="py-2" value="86">
                    86
                  </option>
                  <option clasName="py-2" value="85">
                    85
                  </option>
                  <option clasName="py-2" value="84">
                    84
                  </option>
                  <option clasName="py-2" value="83">
                    83
                  </option>
                  <option clasName="py-2" value="82">
                    82
                  </option>
                  <option clasName="py-2" value="81">
                    81
                  </option>
                  <option clasName="py-2" value="80">
                    80
                  </option>
                  <option clasName="py-2" value="79">
                    79
                  </option>
                  <option clasName="py-2" value="78">
                    78
                  </option>
                  <option clasName="py-2" value="77">
                    77
                  </option>
                  <option clasName="py-2" value="76">
                    76
                  </option>
                  <option clasName="py-2" value="75">
                    75
                  </option>
                  <option clasName="py-2" value="74">
                    74
                  </option>
                  <option clasName="py-2" value="73">
                    73
                  </option>
                  <option clasName="py-2" value="72">
                    72
                  </option>
                  <option clasName="py-2" value="71">
                    71
                  </option>
                  <option clasName="py-2" value="70">
                    70
                  </option>
                  <option clasName="py-2" value="69">
                    69
                  </option>
                  <option clasName="py-2" value="68">
                    68
                  </option>
                  <option clasName="py-2" value="67">
                    67
                  </option>
                  <option clasName="py-2" value="66">
                    66
                  </option>
                  <option clasName="py-2" value="65">
                    65
                  </option>
                  <option clasName="py-2" value="64">
                    64
                  </option>
                  <option clasName="py-2" value="63">
                    63
                  </option>
                  <option clasName="py-2" value="62">
                    62
                  </option>
                  <option clasName="py-2" value="61">
                    61
                  </option>
                  <option clasName="py-2" value="60">
                    60
                  </option>
                  <option clasName="py-2" value="59">
                    59
                  </option>
                  <option clasName="py-2" value="58">
                    58
                  </option>
                  <option clasName="py-2" value="57">
                    57
                  </option>
                  <option clasName="py-2" value="56">
                    56
                  </option>
                  <option clasName="py-2" value="55">
                    55
                  </option>
                  <option clasName="py-2" value="54">
                    54
                  </option>
                  <option clasName="py-2" value="53">
                    53
                  </option>
                  <option clasName="py-2" value="52">
                    52
                  </option>
                  <option clasName="py-2" value="51">
                    51
                  </option>
                  <option clasName="py-2" value="50">
                    50
                  </option>
                  <option clasName="py-2" value="49">
                    49
                  </option>
                  <option clasName="py-2" value="48">
                    48
                  </option>
                  <option clasName="py-2" value="47">
                    47
                  </option>
                  <option clasName="py-2" value="46">
                    46
                  </option>
                  <option clasName="py-2" value="45">
                    45
                  </option>
                  <option clasName="py-2" value="44">
                    44
                  </option>
                  <option clasName="py-2" value="43">
                    43
                  </option>
                  <option clasName="py-2" value="42">
                    42
                  </option>
                  <option clasName="py-2" value="41">
                    41
                  </option>
                  <option clasName="py-2" value="40">
                    40
                  </option>
                  <option clasName="py-2" value="39">
                    39
                  </option>
                  <option clasName="py-2" value="38">
                    38
                  </option>
                  <option clasName="py-2" value="37">
                    37
                  </option>
                  <option clasName="py-2" value="36">
                    36
                  </option>
                  <option clasName="py-2" value="35">
                    35
                  </option>
                  <option clasName="py-2" value="34">
                    34
                  </option>
                  <option clasName="py-2" value="33">
                    33
                  </option>
                  <option clasName="py-2" value="32">
                    32
                  </option>
                  <option clasName="py-2" value="31">
                    31
                  </option>
                  <option clasName="py-2" value="30">
                    30
                  </option>
                  <option clasName="py-2" value="29">
                    29
                  </option>
                  <option clasName="py-2" value="28">
                    28
                  </option>
                  <option clasName="py-2" value="27">
                    27
                  </option>
                  <option clasName="py-2" value="26">
                    26
                  </option>
                  <option clasName="py-2" value="25">
                    25
                  </option>
                  <option clasName="py-2" value="24">
                    24
                  </option>
                  <option clasName="py-2" value="23">
                    23
                  </option>
                  <option clasName="py-2" value="22">
                    22
                  </option>
                  <option clasName="py-2" value="21">
                    21
                  </option>
                  <option clasName="py-2" value="20">
                    20
                  </option>
                  <option clasName="py-2" value="19">
                    19
                  </option>
                  <option clasName="py-2" value="18">
                    18
                  </option>
                  <option clasName="py-2" value="17">
                    17
                  </option>
                  <option clasName="py-2" value="16">
                    16
                  </option>
                  <option clasName="py-2" value="15">
                    15
                  </option>
                  <option clasName="py-2" value="14">
                    14
                  </option>
                  <option clasName="py-2" value="13">
                    13
                  </option>
                  <option clasName="py-2" value="12">
                    12
                  </option>
                  <option clasName="py-2" value="11">
                    11
                  </option>
                  <option clasName="py-2" value="10">
                    10
                  </option>
                  <option clasName="py-2" value="9">
                    9
                  </option>
                  <option clasName="py-2" value="8">
                    8
                  </option>
                  <option clasName="py-2" value="7">
                    7
                  </option>
                  <option clasName="py-2" value="6">
                    6
                  </option>
                  <option clasName="py-2" value="5">
                    5
                  </option>
                  <option clasName="py-2" value="4">
                    4
                  </option>
                  <option clasName="py-2" value="3">
                    3
                  </option>
                  <option clasName="py-2" value="2">
                    2
                  </option>
                  <option clasName="py-2" value="1">
                    1
                  </option>
                  <option clasName="py-2" value="0">
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
                  <option clasName="py-2" value="99">
                    99
                  </option>
                  <option clasName="py-2" value="98">
                    98
                  </option>
                  <option clasName="py-2" value="97">
                    97
                  </option>
                  <option clasName="py-2" value="96">
                    96
                  </option>
                  <option clasName="py-2" value="95">
                    95
                  </option>
                  <option clasName="py-2" value="94">
                    94
                  </option>
                  <option clasName="py-2" value="93">
                    93
                  </option>
                  <option clasName="py-2" value="92">
                    92
                  </option>
                  <option clasName="py-2" value="91">
                    91
                  </option>
                  <option clasName="py-2" value="90">
                    90
                  </option>
                  <option clasName="py-2" value="89">
                    89
                  </option>
                  <option clasName="py-2" value="88">
                    88
                  </option>
                  <option clasName="py-2" value="87">
                    87
                  </option>
                  <option clasName="py-2" value="86">
                    86
                  </option>
                  <option clasName="py-2" value="85">
                    85
                  </option>
                  <option clasName="py-2" value="84">
                    84
                  </option>
                  <option clasName="py-2" value="83">
                    83
                  </option>
                  <option clasName="py-2" value="82">
                    82
                  </option>
                  <option clasName="py-2" value="81">
                    81
                  </option>
                  <option clasName="py-2" value="80">
                    80
                  </option>
                  <option clasName="py-2" value="79">
                    79
                  </option>
                  <option clasName="py-2" value="78">
                    78
                  </option>
                  <option clasName="py-2" value="77">
                    77
                  </option>
                  <option clasName="py-2" value="76">
                    76
                  </option>
                  <option clasName="py-2" value="75">
                    75
                  </option>
                  <option clasName="py-2" value="74">
                    74
                  </option>
                  <option clasName="py-2" value="73">
                    73
                  </option>
                  <option clasName="py-2" value="72">
                    72
                  </option>
                  <option clasName="py-2" value="71">
                    71
                  </option>
                  <option clasName="py-2" value="70">
                    70
                  </option>
                  <option clasName="py-2" value="69">
                    69
                  </option>
                  <option clasName="py-2" value="68">
                    68
                  </option>
                  <option clasName="py-2" value="67">
                    67
                  </option>
                  <option clasName="py-2" value="66">
                    66
                  </option>
                  <option clasName="py-2" value="65">
                    65
                  </option>
                  <option clasName="py-2" value="64">
                    64
                  </option>
                  <option clasName="py-2" value="63">
                    63
                  </option>
                  <option clasName="py-2" value="62">
                    62
                  </option>
                  <option clasName="py-2" value="61">
                    61
                  </option>
                  <option clasName="py-2" value="60">
                    60
                  </option>
                  <option clasName="py-2" value="59">
                    59
                  </option>
                  <option clasName="py-2" value="58">
                    58
                  </option>
                  <option clasName="py-2" value="57">
                    57
                  </option>
                  <option clasName="py-2" value="56">
                    56
                  </option>
                  <option clasName="py-2" value="55">
                    55
                  </option>
                  <option clasName="py-2" value="54">
                    54
                  </option>
                  <option clasName="py-2" value="53">
                    53
                  </option>
                  <option clasName="py-2" value="52">
                    52
                  </option>
                  <option clasName="py-2" value="51">
                    51
                  </option>
                  <option clasName="py-2" value="50">
                    50
                  </option>
                  <option clasName="py-2" value="49">
                    49
                  </option>
                  <option clasName="py-2" value="48">
                    48
                  </option>
                  <option clasName="py-2" value="47">
                    47
                  </option>
                  <option clasName="py-2" value="46">
                    46
                  </option>
                  <option clasName="py-2" value="45">
                    45
                  </option>
                  <option clasName="py-2" value="44">
                    44
                  </option>
                  <option clasName="py-2" value="43">
                    43
                  </option>
                  <option clasName="py-2" value="42">
                    42
                  </option>
                  <option clasName="py-2" value="41">
                    41
                  </option>
                  <option clasName="py-2" value="40">
                    40
                  </option>
                  <option clasName="py-2" value="39">
                    39
                  </option>
                  <option clasName="py-2" value="38">
                    38
                  </option>
                  <option clasName="py-2" value="37">
                    37
                  </option>
                  <option clasName="py-2" value="36">
                    36
                  </option>
                  <option clasName="py-2" value="35">
                    35
                  </option>
                  <option clasName="py-2" value="34">
                    34
                  </option>
                  <option clasName="py-2" value="33">
                    33
                  </option>
                  <option clasName="py-2" value="32">
                    32
                  </option>
                  <option clasName="py-2" value="31">
                    31
                  </option>
                  <option clasName="py-2" value="30">
                    30
                  </option>
                  <option clasName="py-2" value="29">
                    29
                  </option>
                  <option clasName="py-2" value="28">
                    28
                  </option>
                  <option clasName="py-2" value="27">
                    27
                  </option>
                  <option clasName="py-2" value="26">
                    26
                  </option>
                  <option clasName="py-2" value="25">
                    25
                  </option>
                  <option clasName="py-2" value="24">
                    24
                  </option>
                  <option clasName="py-2" value="23">
                    23
                  </option>
                  <option clasName="py-2" value="22">
                    22
                  </option>
                  <option clasName="py-2" value="21">
                    21
                  </option>
                  <option clasName="py-2" value="20">
                    20
                  </option>
                  <option clasName="py-2" value="19">
                    19
                  </option>
                  <option clasName="py-2" value="18">
                    18
                  </option>
                  <option clasName="py-2" value="17">
                    17
                  </option>
                  <option clasName="py-2" value="16">
                    16
                  </option>
                  <option clasName="py-2" value="15">
                    15
                  </option>
                  <option clasName="py-2" value="14">
                    14
                  </option>
                  <option clasName="py-2" value="13">
                    13
                  </option>
                  <option clasName="py-2" value="12">
                    12
                  </option>
                  <option clasName="py-2" value="11">
                    11
                  </option>
                  <option clasName="py-2" value="10">
                    10
                  </option>
                  <option clasName="py-2" value="9">
                    9
                  </option>
                  <option clasName="py-2" value="8">
                    8
                  </option>
                  <option clasName="py-2" value="7">
                    7
                  </option>
                  <option clasName="py-2" value="6">
                    6
                  </option>
                  <option clasName="py-2" value="5">
                    5
                  </option>
                  <option clasName="py-2" value="4">
                    4
                  </option>
                  <option clasName="py-2" value="3">
                    3
                  </option>
                  <option clasName="py-2" value="2">
                    2
                  </option>
                  <option clasName="py-2" value="1">
                    1
                  </option>
                  <option clasName="py-2" value="0">
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
                  <option clasName="py-2" value="99">
                    99
                  </option>
                  <option clasName="py-2" value="98">
                    98
                  </option>
                  <option clasName="py-2" value="97">
                    97
                  </option>
                  <option clasName="py-2" value="96">
                    96
                  </option>
                  <option clasName="py-2" value="95">
                    95
                  </option>
                  <option clasName="py-2" value="94">
                    94
                  </option>
                  <option clasName="py-2" value="93">
                    93
                  </option>
                  <option clasName="py-2" value="92">
                    92
                  </option>
                  <option clasName="py-2" value="91">
                    91
                  </option>
                  <option clasName="py-2" value="90">
                    90
                  </option>
                  <option clasName="py-2" value="89">
                    89
                  </option>
                  <option clasName="py-2" value="88">
                    88
                  </option>
                  <option clasName="py-2" value="87">
                    87
                  </option>
                  <option clasName="py-2" value="86">
                    86
                  </option>
                  <option clasName="py-2" value="85">
                    85
                  </option>
                  <option clasName="py-2" value="84">
                    84
                  </option>
                  <option clasName="py-2" value="83">
                    83
                  </option>
                  <option clasName="py-2" value="82">
                    82
                  </option>
                  <option clasName="py-2" value="81">
                    81
                  </option>
                  <option clasName="py-2" value="80">
                    80
                  </option>
                  <option clasName="py-2" value="79">
                    79
                  </option>
                  <option clasName="py-2" value="78">
                    78
                  </option>
                  <option clasName="py-2" value="77">
                    77
                  </option>
                  <option clasName="py-2" value="76">
                    76
                  </option>
                  <option clasName="py-2" value="75">
                    75
                  </option>
                  <option clasName="py-2" value="74">
                    74
                  </option>
                  <option clasName="py-2" value="73">
                    73
                  </option>
                  <option clasName="py-2" value="72">
                    72
                  </option>
                  <option clasName="py-2" value="71">
                    71
                  </option>
                  <option clasName="py-2" value="70">
                    70
                  </option>
                  <option clasName="py-2" value="69">
                    69
                  </option>
                  <option clasName="py-2" value="68">
                    68
                  </option>
                  <option clasName="py-2" value="67">
                    67
                  </option>
                  <option clasName="py-2" value="66">
                    66
                  </option>
                  <option clasName="py-2" value="65">
                    65
                  </option>
                  <option clasName="py-2" value="64">
                    64
                  </option>
                  <option clasName="py-2" value="63">
                    63
                  </option>
                  <option clasName="py-2" value="62">
                    62
                  </option>
                  <option clasName="py-2" value="61">
                    61
                  </option>
                  <option clasName="py-2" value="60">
                    60
                  </option>
                  <option clasName="py-2" value="59">
                    59
                  </option>
                  <option clasName="py-2" value="58">
                    58
                  </option>
                  <option clasName="py-2" value="57">
                    57
                  </option>
                  <option clasName="py-2" value="56">
                    56
                  </option>
                  <option clasName="py-2" value="55">
                    55
                  </option>
                  <option clasName="py-2" value="54">
                    54
                  </option>
                  <option clasName="py-2" value="53">
                    53
                  </option>
                  <option clasName="py-2" value="52">
                    52
                  </option>
                  <option clasName="py-2" value="51">
                    51
                  </option>
                  <option clasName="py-2" value="50">
                    50
                  </option>
                  <option clasName="py-2" value="49">
                    49
                  </option>
                  <option clasName="py-2" value="48">
                    48
                  </option>
                  <option clasName="py-2" value="47">
                    47
                  </option>
                  <option clasName="py-2" value="46">
                    46
                  </option>
                  <option clasName="py-2" value="45">
                    45
                  </option>
                  <option clasName="py-2" value="44">
                    44
                  </option>
                  <option clasName="py-2" value="43">
                    43
                  </option>
                  <option clasName="py-2" value="42">
                    42
                  </option>
                  <option clasName="py-2" value="41">
                    41
                  </option>
                  <option clasName="py-2" value="40">
                    40
                  </option>
                  <option clasName="py-2" value="39">
                    39
                  </option>
                  <option clasName="py-2" value="38">
                    38
                  </option>
                  <option clasName="py-2" value="37">
                    37
                  </option>
                  <option clasName="py-2" value="36">
                    36
                  </option>
                  <option clasName="py-2" value="35">
                    35
                  </option>
                  <option clasName="py-2" value="34">
                    34
                  </option>
                  <option clasName="py-2" value="33">
                    33
                  </option>
                  <option clasName="py-2" value="32">
                    32
                  </option>
                  <option clasName="py-2" value="31">
                    31
                  </option>
                  <option clasName="py-2" value="30">
                    30
                  </option>
                  <option clasName="py-2" value="29">
                    29
                  </option>
                  <option clasName="py-2" value="28">
                    28
                  </option>
                  <option clasName="py-2" value="27">
                    27
                  </option>
                  <option clasName="py-2" value="26">
                    26
                  </option>
                  <option clasName="py-2" value="25">
                    25
                  </option>
                  <option clasName="py-2" value="24">
                    24
                  </option>
                  <option clasName="py-2" value="23">
                    23
                  </option>
                  <option clasName="py-2" value="22">
                    22
                  </option>
                  <option clasName="py-2" value="21">
                    21
                  </option>
                  <option clasName="py-2" value="20">
                    20
                  </option>
                  <option clasName="py-2" value="19">
                    19
                  </option>
                  <option clasName="py-2" value="18">
                    18
                  </option>
                  <option clasName="py-2" value="17">
                    17
                  </option>
                  <option clasName="py-2" value="16">
                    16
                  </option>
                  <option clasName="py-2" value="15">
                    15
                  </option>
                  <option clasName="py-2" value="14">
                    14
                  </option>
                  <option clasName="py-2" value="13">
                    13
                  </option>
                  <option clasName="py-2" value="12">
                    12
                  </option>
                  <option clasName="py-2" value="11">
                    11
                  </option>
                  <option clasName="py-2" value="10">
                    10
                  </option>
                  <option clasName="py-2" value="9">
                    9
                  </option>
                  <option clasName="py-2" value="8">
                    8
                  </option>
                  <option clasName="py-2" value="7">
                    7
                  </option>
                  <option clasName="py-2" value="6">
                    6
                  </option>
                  <option clasName="py-2" value="5">
                    5
                  </option>
                  <option clasName="py-2" value="4">
                    4
                  </option>
                  <option clasName="py-2" value="3">
                    3
                  </option>
                  <option clasName="py-2" value="2">
                    2
                  </option>
                  <option clasName="py-2" value="1">
                    1
                  </option>
                  <option clasName="py-2" value="0">
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
                  <option clasName="py-2" value="99">
                    99
                  </option>
                  <option clasName="py-2" value="98">
                    98
                  </option>
                  <option clasName="py-2" value="97">
                    97
                  </option>
                  <option clasName="py-2" value="96">
                    96
                  </option>
                  <option clasName="py-2" value="95">
                    95
                  </option>
                  <option clasName="py-2" value="94">
                    94
                  </option>
                  <option clasName="py-2" value="93">
                    93
                  </option>
                  <option clasName="py-2" value="92">
                    92
                  </option>
                  <option clasName="py-2" value="91">
                    91
                  </option>
                  <option clasName="py-2" value="90">
                    90
                  </option>
                  <option clasName="py-2" value="89">
                    89
                  </option>
                  <option clasName="py-2" value="88">
                    88
                  </option>
                  <option clasName="py-2" value="87">
                    87
                  </option>
                  <option clasName="py-2" value="86">
                    86
                  </option>
                  <option clasName="py-2" value="85">
                    85
                  </option>
                  <option clasName="py-2" value="84">
                    84
                  </option>
                  <option clasName="py-2" value="83">
                    83
                  </option>
                  <option clasName="py-2" value="82">
                    82
                  </option>
                  <option clasName="py-2" value="81">
                    81
                  </option>
                  <option clasName="py-2" value="80">
                    80
                  </option>
                  <option clasName="py-2" value="79">
                    79
                  </option>
                  <option clasName="py-2" value="78">
                    78
                  </option>
                  <option clasName="py-2" value="77">
                    77
                  </option>
                  <option clasName="py-2" value="76">
                    76
                  </option>
                  <option clasName="py-2" value="75">
                    75
                  </option>
                  <option clasName="py-2" value="74">
                    74
                  </option>
                  <option clasName="py-2" value="73">
                    73
                  </option>
                  <option clasName="py-2" value="72">
                    72
                  </option>
                  <option clasName="py-2" value="71">
                    71
                  </option>
                  <option clasName="py-2" value="70">
                    70
                  </option>
                  <option clasName="py-2" value="69">
                    69
                  </option>
                  <option clasName="py-2" value="68">
                    68
                  </option>
                  <option clasName="py-2" value="67">
                    67
                  </option>
                  <option clasName="py-2" value="66">
                    66
                  </option>
                  <option clasName="py-2" value="65">
                    65
                  </option>
                  <option clasName="py-2" value="64">
                    64
                  </option>
                  <option clasName="py-2" value="63">
                    63
                  </option>
                  <option clasName="py-2" value="62">
                    62
                  </option>
                  <option clasName="py-2" value="61">
                    61
                  </option>
                  <option clasName="py-2" value="60">
                    60
                  </option>
                  <option clasName="py-2" value="59">
                    59
                  </option>
                  <option clasName="py-2" value="58">
                    58
                  </option>
                  <option clasName="py-2" value="57">
                    57
                  </option>
                  <option clasName="py-2" value="56">
                    56
                  </option>
                  <option clasName="py-2" value="55">
                    55
                  </option>
                  <option clasName="py-2" value="54">
                    54
                  </option>
                  <option clasName="py-2" value="53">
                    53
                  </option>
                  <option clasName="py-2" value="52">
                    52
                  </option>
                  <option clasName="py-2" value="51">
                    51
                  </option>
                  <option clasName="py-2" value="50">
                    50
                  </option>
                  <option clasName="py-2" value="49">
                    49
                  </option>
                  <option clasName="py-2" value="48">
                    48
                  </option>
                  <option clasName="py-2" value="47">
                    47
                  </option>
                  <option clasName="py-2" value="46">
                    46
                  </option>
                  <option clasName="py-2" value="45">
                    45
                  </option>
                  <option clasName="py-2" value="44">
                    44
                  </option>
                  <option clasName="py-2" value="43">
                    43
                  </option>
                  <option clasName="py-2" value="42">
                    42
                  </option>
                  <option clasName="py-2" value="41">
                    41
                  </option>
                  <option clasName="py-2" value="40">
                    40
                  </option>
                  <option clasName="py-2" value="39">
                    39
                  </option>
                  <option clasName="py-2" value="38">
                    38
                  </option>
                  <option clasName="py-2" value="37">
                    37
                  </option>
                  <option clasName="py-2" value="36">
                    36
                  </option>
                  <option clasName="py-2" value="35">
                    35
                  </option>
                  <option clasName="py-2" value="34">
                    34
                  </option>
                  <option clasName="py-2" value="33">
                    33
                  </option>
                  <option clasName="py-2" value="32">
                    32
                  </option>
                  <option clasName="py-2" value="31">
                    31
                  </option>
                  <option clasName="py-2" value="30">
                    30
                  </option>
                  <option clasName="py-2" value="29">
                    29
                  </option>
                  <option clasName="py-2" value="28">
                    28
                  </option>
                  <option clasName="py-2" value="27">
                    27
                  </option>
                  <option clasName="py-2" value="26">
                    26
                  </option>
                  <option clasName="py-2" value="25">
                    25
                  </option>
                  <option clasName="py-2" value="24">
                    24
                  </option>
                  <option clasName="py-2" value="23">
                    23
                  </option>
                  <option clasName="py-2" value="22">
                    22
                  </option>
                  <option clasName="py-2" value="21">
                    21
                  </option>
                  <option clasName="py-2" value="20">
                    20
                  </option>
                  <option clasName="py-2" value="19">
                    19
                  </option>
                  <option clasName="py-2" value="18">
                    18
                  </option>
                  <option clasName="py-2" value="17">
                    17
                  </option>
                  <option clasName="py-2" value="16">
                    16
                  </option>
                  <option clasName="py-2" value="15">
                    15
                  </option>
                  <option clasName="py-2" value="14">
                    14
                  </option>
                  <option clasName="py-2" value="13">
                    13
                  </option>
                  <option clasName="py-2" value="12">
                    12
                  </option>
                  <option clasName="py-2" value="11">
                    11
                  </option>
                  <option clasName="py-2" value="10">
                    10
                  </option>
                  <option clasName="py-2" value="9">
                    9
                  </option>
                  <option clasName="py-2" value="8">
                    8
                  </option>
                  <option clasName="py-2" value="7">
                    7
                  </option>
                  <option clasName="py-2" value="6">
                    6
                  </option>
                  <option clasName="py-2" value="5">
                    5
                  </option>
                  <option clasName="py-2" value="4">
                    4
                  </option>
                  <option clasName="py-2" value="3">
                    3
                  </option>
                  <option clasName="py-2" value="2">
                    2
                  </option>
                  <option clasName="py-2" value="1">
                    1
                  </option>
                  <option clasName="py-2" value="0">
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
                  <option clasName="py-2" value="99">
                    99
                  </option>
                  <option clasName="py-2" value="98">
                    98
                  </option>
                  <option clasName="py-2" value="97">
                    97
                  </option>
                  <option clasName="py-2" value="96">
                    96
                  </option>
                  <option clasName="py-2" value="95">
                    95
                  </option>
                  <option clasName="py-2" value="94">
                    94
                  </option>
                  <option clasName="py-2" value="93">
                    93
                  </option>
                  <option clasName="py-2" value="92">
                    92
                  </option>
                  <option clasName="py-2" value="91">
                    91
                  </option>
                  <option clasName="py-2" value="90">
                    90
                  </option>
                  <option clasName="py-2" value="89">
                    89
                  </option>
                  <option clasName="py-2" value="88">
                    88
                  </option>
                  <option clasName="py-2" value="87">
                    87
                  </option>
                  <option clasName="py-2" value="86">
                    86
                  </option>
                  <option clasName="py-2" value="85">
                    85
                  </option>
                  <option clasName="py-2" value="84">
                    84
                  </option>
                  <option clasName="py-2" value="83">
                    83
                  </option>
                  <option clasName="py-2" value="82">
                    82
                  </option>
                  <option clasName="py-2" value="81">
                    81
                  </option>
                  <option clasName="py-2" value="80">
                    80
                  </option>
                  <option clasName="py-2" value="79">
                    79
                  </option>
                  <option clasName="py-2" value="78">
                    78
                  </option>
                  <option clasName="py-2" value="77">
                    77
                  </option>
                  <option clasName="py-2" value="76">
                    76
                  </option>
                  <option clasName="py-2" value="75">
                    75
                  </option>
                  <option clasName="py-2" value="74">
                    74
                  </option>
                  <option clasName="py-2" value="73">
                    73
                  </option>
                  <option clasName="py-2" value="72">
                    72
                  </option>
                  <option clasName="py-2" value="71">
                    71
                  </option>
                  <option clasName="py-2" value="70">
                    70
                  </option>
                  <option clasName="py-2" value="69">
                    69
                  </option>
                  <option clasName="py-2" value="68">
                    68
                  </option>
                  <option clasName="py-2" value="67">
                    67
                  </option>
                  <option clasName="py-2" value="66">
                    66
                  </option>
                  <option clasName="py-2" value="65">
                    65
                  </option>
                  <option clasName="py-2" value="64">
                    64
                  </option>
                  <option clasName="py-2" value="63">
                    63
                  </option>
                  <option clasName="py-2" value="62">
                    62
                  </option>
                  <option clasName="py-2" value="61">
                    61
                  </option>
                  <option clasName="py-2" value="60">
                    60
                  </option>
                  <option clasName="py-2" value="59">
                    59
                  </option>
                  <option clasName="py-2" value="58">
                    58
                  </option>
                  <option clasName="py-2" value="57">
                    57
                  </option>
                  <option clasName="py-2" value="56">
                    56
                  </option>
                  <option clasName="py-2" value="55">
                    55
                  </option>
                  <option clasName="py-2" value="54">
                    54
                  </option>
                  <option clasName="py-2" value="53">
                    53
                  </option>
                  <option clasName="py-2" value="52">
                    52
                  </option>
                  <option clasName="py-2" value="51">
                    51
                  </option>
                  <option clasName="py-2" value="50">
                    50
                  </option>
                  <option clasName="py-2" value="49">
                    49
                  </option>
                  <option clasName="py-2" value="48">
                    48
                  </option>
                  <option clasName="py-2" value="47">
                    47
                  </option>
                  <option clasName="py-2" value="46">
                    46
                  </option>
                  <option clasName="py-2" value="45">
                    45
                  </option>
                  <option clasName="py-2" value="44">
                    44
                  </option>
                  <option clasName="py-2" value="43">
                    43
                  </option>
                  <option clasName="py-2" value="42">
                    42
                  </option>
                  <option clasName="py-2" value="41">
                    41
                  </option>
                  <option clasName="py-2" value="40">
                    40
                  </option>
                  <option clasName="py-2" value="39">
                    39
                  </option>
                  <option clasName="py-2" value="38">
                    38
                  </option>
                  <option clasName="py-2" value="37">
                    37
                  </option>
                  <option clasName="py-2" value="36">
                    36
                  </option>
                  <option clasName="py-2" value="35">
                    35
                  </option>
                  <option clasName="py-2" value="34">
                    34
                  </option>
                  <option clasName="py-2" value="33">
                    33
                  </option>
                  <option clasName="py-2" value="32">
                    32
                  </option>
                  <option clasName="py-2" value="31">
                    31
                  </option>
                  <option clasName="py-2" value="30">
                    30
                  </option>
                  <option clasName="py-2" value="29">
                    29
                  </option>
                  <option clasName="py-2" value="28">
                    28
                  </option>
                  <option clasName="py-2" value="27">
                    27
                  </option>
                  <option clasName="py-2" value="26">
                    26
                  </option>
                  <option clasName="py-2" value="25">
                    25
                  </option>
                  <option clasName="py-2" value="24">
                    24
                  </option>
                  <option clasName="py-2" value="23">
                    23
                  </option>
                  <option clasName="py-2" value="22">
                    22
                  </option>
                  <option clasName="py-2" value="21">
                    21
                  </option>
                  <option clasName="py-2" value="20">
                    20
                  </option>
                  <option clasName="py-2" value="19">
                    19
                  </option>
                  <option clasName="py-2" value="18">
                    18
                  </option>
                  <option clasName="py-2" value="17">
                    17
                  </option>
                  <option clasName="py-2" value="16">
                    16
                  </option>
                  <option clasName="py-2" value="15">
                    15
                  </option>
                  <option clasName="py-2" value="14">
                    14
                  </option>
                  <option clasName="py-2" value="13">
                    13
                  </option>
                  <option clasName="py-2" value="12">
                    12
                  </option>
                  <option clasName="py-2" value="11">
                    11
                  </option>
                  <option clasName="py-2" value="10">
                    10
                  </option>
                  <option clasName="py-2" value="9">
                    9
                  </option>
                  <option clasName="py-2" value="8">
                    8
                  </option>
                  <option clasName="py-2" value="7">
                    7
                  </option>
                  <option clasName="py-2" value="6">
                    6
                  </option>
                  <option clasName="py-2" value="5">
                    5
                  </option>
                  <option clasName="py-2" value="4">
                    4
                  </option>
                  <option clasName="py-2" value="3">
                    3
                  </option>
                  <option clasName="py-2" value="2">
                    2
                  </option>
                  <option clasName="py-2" value="1">
                    1
                  </option>
                  <option clasName="py-2" value="0">
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
                  <option clasName="py-2" value="99">
                    99
                  </option>
                  <option clasName="py-2" value="98">
                    98
                  </option>
                  <option clasName="py-2" value="97">
                    97
                  </option>
                  <option clasName="py-2" value="96">
                    96
                  </option>
                  <option clasName="py-2" value="95">
                    95
                  </option>
                  <option clasName="py-2" value="94">
                    94
                  </option>
                  <option clasName="py-2" value="93">
                    93
                  </option>
                  <option clasName="py-2" value="92">
                    92
                  </option>
                  <option clasName="py-2" value="91">
                    91
                  </option>
                  <option clasName="py-2" value="90">
                    90
                  </option>
                  <option clasName="py-2" value="89">
                    89
                  </option>
                  <option clasName="py-2" value="88">
                    88
                  </option>
                  <option clasName="py-2" value="87">
                    87
                  </option>
                  <option clasName="py-2" value="86">
                    86
                  </option>
                  <option clasName="py-2" value="85">
                    85
                  </option>
                  <option clasName="py-2" value="84">
                    84
                  </option>
                  <option clasName="py-2" value="83">
                    83
                  </option>
                  <option clasName="py-2" value="82">
                    82
                  </option>
                  <option clasName="py-2" value="81">
                    81
                  </option>
                  <option clasName="py-2" value="80">
                    80
                  </option>
                  <option clasName="py-2" value="79">
                    79
                  </option>
                  <option clasName="py-2" value="78">
                    78
                  </option>
                  <option clasName="py-2" value="77">
                    77
                  </option>
                  <option clasName="py-2" value="76">
                    76
                  </option>
                  <option clasName="py-2" value="75">
                    75
                  </option>
                  <option clasName="py-2" value="74">
                    74
                  </option>
                  <option clasName="py-2" value="73">
                    73
                  </option>
                  <option clasName="py-2" value="72">
                    72
                  </option>
                  <option clasName="py-2" value="71">
                    71
                  </option>
                  <option clasName="py-2" value="70">
                    70
                  </option>
                  <option clasName="py-2" value="69">
                    69
                  </option>
                  <option clasName="py-2" value="68">
                    68
                  </option>
                  <option clasName="py-2" value="67">
                    67
                  </option>
                  <option clasName="py-2" value="66">
                    66
                  </option>
                  <option clasName="py-2" value="65">
                    65
                  </option>
                  <option clasName="py-2" value="64">
                    64
                  </option>
                  <option clasName="py-2" value="63">
                    63
                  </option>
                  <option clasName="py-2" value="62">
                    62
                  </option>
                  <option clasName="py-2" value="61">
                    61
                  </option>
                  <option clasName="py-2" value="60">
                    60
                  </option>
                  <option clasName="py-2" value="59">
                    59
                  </option>
                  <option clasName="py-2" value="58">
                    58
                  </option>
                  <option clasName="py-2" value="57">
                    57
                  </option>
                  <option clasName="py-2" value="56">
                    56
                  </option>
                  <option clasName="py-2" value="55">
                    55
                  </option>
                  <option clasName="py-2" value="54">
                    54
                  </option>
                  <option clasName="py-2" value="53">
                    53
                  </option>
                  <option clasName="py-2" value="52">
                    52
                  </option>
                  <option clasName="py-2" value="51">
                    51
                  </option>
                  <option clasName="py-2" value="50">
                    50
                  </option>
                  <option clasName="py-2" value="49">
                    49
                  </option>
                  <option clasName="py-2" value="48">
                    48
                  </option>
                  <option clasName="py-2" value="47">
                    47
                  </option>
                  <option clasName="py-2" value="46">
                    46
                  </option>
                  <option clasName="py-2" value="45">
                    45
                  </option>
                  <option clasName="py-2" value="44">
                    44
                  </option>
                  <option clasName="py-2" value="43">
                    43
                  </option>
                  <option clasName="py-2" value="42">
                    42
                  </option>
                  <option clasName="py-2" value="41">
                    41
                  </option>
                  <option clasName="py-2" value="40">
                    40
                  </option>
                  <option clasName="py-2" value="39">
                    39
                  </option>
                  <option clasName="py-2" value="38">
                    38
                  </option>
                  <option clasName="py-2" value="37">
                    37
                  </option>
                  <option clasName="py-2" value="36">
                    36
                  </option>
                  <option clasName="py-2" value="35">
                    35
                  </option>
                  <option clasName="py-2" value="34">
                    34
                  </option>
                  <option clasName="py-2" value="33">
                    33
                  </option>
                  <option clasName="py-2" value="32">
                    32
                  </option>
                  <option clasName="py-2" value="31">
                    31
                  </option>
                  <option clasName="py-2" value="30">
                    30
                  </option>
                  <option clasName="py-2" value="29">
                    29
                  </option>
                  <option clasName="py-2" value="28">
                    28
                  </option>
                  <option clasName="py-2" value="27">
                    27
                  </option>
                  <option clasName="py-2" value="26">
                    26
                  </option>
                  <option clasName="py-2" value="25">
                    25
                  </option>
                  <option clasName="py-2" value="24">
                    24
                  </option>
                  <option clasName="py-2" value="23">
                    23
                  </option>
                  <option clasName="py-2" value="22">
                    22
                  </option>
                  <option clasName="py-2" value="21">
                    21
                  </option>
                  <option clasName="py-2" value="20">
                    20
                  </option>
                  <option clasName="py-2" value="19">
                    19
                  </option>
                  <option clasName="py-2" value="18">
                    18
                  </option>
                  <option clasName="py-2" value="17">
                    17
                  </option>
                  <option clasName="py-2" value="16">
                    16
                  </option>
                  <option clasName="py-2" value="15">
                    15
                  </option>
                  <option clasName="py-2" value="14">
                    14
                  </option>
                  <option clasName="py-2" value="13">
                    13
                  </option>
                  <option clasName="py-2" value="12">
                    12
                  </option>
                  <option clasName="py-2" value="11">
                    11
                  </option>
                  <option clasName="py-2" value="10">
                    10
                  </option>
                  <option clasName="py-2" value="9">
                    9
                  </option>
                  <option clasName="py-2" value="8">
                    8
                  </option>
                  <option clasName="py-2" value="7">
                    7
                  </option>
                  <option clasName="py-2" value="6">
                    6
                  </option>
                  <option clasName="py-2" value="5">
                    5
                  </option>
                  <option clasName="py-2" value="4">
                    4
                  </option>
                  <option clasName="py-2" value="3">
                    3
                  </option>
                  <option clasName="py-2" value="2">
                    2
                  </option>
                  <option clasName="py-2" value="1">
                    1
                  </option>
                  <option clasName="py-2" value="0">
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
                  <option clasName="py-2" value="99">
                    99
                  </option>
                  <option clasName="py-2" value="98">
                    98
                  </option>
                  <option clasName="py-2" value="97">
                    97
                  </option>
                  <option clasName="py-2" value="96">
                    96
                  </option>
                  <option clasName="py-2" value="95">
                    95
                  </option>
                  <option clasName="py-2" value="94">
                    94
                  </option>
                  <option clasName="py-2" value="93">
                    93
                  </option>
                  <option clasName="py-2" value="92">
                    92
                  </option>
                  <option clasName="py-2" value="91">
                    91
                  </option>
                  <option clasName="py-2" value="90">
                    90
                  </option>
                  <option clasName="py-2" value="89">
                    89
                  </option>
                  <option clasName="py-2" value="88">
                    88
                  </option>
                  <option clasName="py-2" value="87">
                    87
                  </option>
                  <option clasName="py-2" value="86">
                    86
                  </option>
                  <option clasName="py-2" value="85">
                    85
                  </option>
                  <option clasName="py-2" value="84">
                    84
                  </option>
                  <option clasName="py-2" value="83">
                    83
                  </option>
                  <option clasName="py-2" value="82">
                    82
                  </option>
                  <option clasName="py-2" value="81">
                    81
                  </option>
                  <option clasName="py-2" value="80">
                    80
                  </option>
                  <option clasName="py-2" value="79">
                    79
                  </option>
                  <option clasName="py-2" value="78">
                    78
                  </option>
                  <option clasName="py-2" value="77">
                    77
                  </option>
                  <option clasName="py-2" value="76">
                    76
                  </option>
                  <option clasName="py-2" value="75">
                    75
                  </option>
                  <option clasName="py-2" value="74">
                    74
                  </option>
                  <option clasName="py-2" value="73">
                    73
                  </option>
                  <option clasName="py-2" value="72">
                    72
                  </option>
                  <option clasName="py-2" value="71">
                    71
                  </option>
                  <option clasName="py-2" value="70">
                    70
                  </option>
                  <option clasName="py-2" value="69">
                    69
                  </option>
                  <option clasName="py-2" value="68">
                    68
                  </option>
                  <option clasName="py-2" value="67">
                    67
                  </option>
                  <option clasName="py-2" value="66">
                    66
                  </option>
                  <option clasName="py-2" value="65">
                    65
                  </option>
                  <option clasName="py-2" value="64">
                    64
                  </option>
                  <option clasName="py-2" value="63">
                    63
                  </option>
                  <option clasName="py-2" value="62">
                    62
                  </option>
                  <option clasName="py-2" value="61">
                    61
                  </option>
                  <option clasName="py-2" value="60">
                    60
                  </option>
                  <option clasName="py-2" value="59">
                    59
                  </option>
                  <option clasName="py-2" value="58">
                    58
                  </option>
                  <option clasName="py-2" value="57">
                    57
                  </option>
                  <option clasName="py-2" value="56">
                    56
                  </option>
                  <option clasName="py-2" value="55">
                    55
                  </option>
                  <option clasName="py-2" value="54">
                    54
                  </option>
                  <option clasName="py-2" value="53">
                    53
                  </option>
                  <option clasName="py-2" value="52">
                    52
                  </option>
                  <option clasName="py-2" value="51">
                    51
                  </option>
                  <option clasName="py-2" value="50">
                    50
                  </option>
                  <option clasName="py-2" value="49">
                    49
                  </option>
                  <option clasName="py-2" value="48">
                    48
                  </option>
                  <option clasName="py-2" value="47">
                    47
                  </option>
                  <option clasName="py-2" value="46">
                    46
                  </option>
                  <option clasName="py-2" value="45">
                    45
                  </option>
                  <option clasName="py-2" value="44">
                    44
                  </option>
                  <option clasName="py-2" value="43">
                    43
                  </option>
                  <option clasName="py-2" value="42">
                    42
                  </option>
                  <option clasName="py-2" value="41">
                    41
                  </option>
                  <option clasName="py-2" value="40">
                    40
                  </option>
                  <option clasName="py-2" value="39">
                    39
                  </option>
                  <option clasName="py-2" value="38">
                    38
                  </option>
                  <option clasName="py-2" value="37">
                    37
                  </option>
                  <option clasName="py-2" value="36">
                    36
                  </option>
                  <option clasName="py-2" value="35">
                    35
                  </option>
                  <option clasName="py-2" value="34">
                    34
                  </option>
                  <option clasName="py-2" value="33">
                    33
                  </option>
                  <option clasName="py-2" value="32">
                    32
                  </option>
                  <option clasName="py-2" value="31">
                    31
                  </option>
                  <option clasName="py-2" value="30">
                    30
                  </option>
                  <option clasName="py-2" value="29">
                    29
                  </option>
                  <option clasName="py-2" value="28">
                    28
                  </option>
                  <option clasName="py-2" value="27">
                    27
                  </option>
                  <option clasName="py-2" value="26">
                    26
                  </option>
                  <option clasName="py-2" value="25">
                    25
                  </option>
                  <option clasName="py-2" value="24">
                    24
                  </option>
                  <option clasName="py-2" value="23">
                    23
                  </option>
                  <option clasName="py-2" value="22">
                    22
                  </option>
                  <option clasName="py-2" value="21">
                    21
                  </option>
                  <option clasName="py-2" value="20">
                    20
                  </option>
                  <option clasName="py-2" value="19">
                    19
                  </option>
                  <option clasName="py-2" value="18">
                    18
                  </option>
                  <option clasName="py-2" value="17">
                    17
                  </option>
                  <option clasName="py-2" value="16">
                    16
                  </option>
                  <option clasName="py-2" value="15">
                    15
                  </option>
                  <option clasName="py-2" value="14">
                    14
                  </option>
                  <option clasName="py-2" value="13">
                    13
                  </option>
                  <option clasName="py-2" value="12">
                    12
                  </option>
                  <option clasName="py-2" value="11">
                    11
                  </option>
                  <option clasName="py-2" value="10">
                    10
                  </option>
                  <option clasName="py-2" value="9">
                    9
                  </option>
                  <option clasName="py-2" value="8">
                    8
                  </option>
                  <option clasName="py-2" value="7">
                    7
                  </option>
                  <option clasName="py-2" value="6">
                    6
                  </option>
                  <option clasName="py-2" value="5">
                    5
                  </option>
                  <option clasName="py-2" value="4">
                    4
                  </option>
                  <option clasName="py-2" value="3">
                    3
                  </option>
                  <option clasName="py-2" value="2">
                    2
                  </option>
                  <option clasName="py-2" value="1">
                    1
                  </option>
                  <option clasName="py-2" value="0">
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
                  <option clasName="py-2" value="99">
                    99
                  </option>
                  <option clasName="py-2" value="98">
                    98
                  </option>
                  <option clasName="py-2" value="97">
                    97
                  </option>
                  <option clasName="py-2" value="96">
                    96
                  </option>
                  <option clasName="py-2" value="95">
                    95
                  </option>
                  <option clasName="py-2" value="94">
                    94
                  </option>
                  <option clasName="py-2" value="93">
                    93
                  </option>
                  <option clasName="py-2" value="92">
                    92
                  </option>
                  <option clasName="py-2" value="91">
                    91
                  </option>
                  <option clasName="py-2" value="90">
                    90
                  </option>
                  <option clasName="py-2" value="89">
                    89
                  </option>
                  <option clasName="py-2" value="88">
                    88
                  </option>
                  <option clasName="py-2" value="87">
                    87
                  </option>
                  <option clasName="py-2" value="86">
                    86
                  </option>
                  <option clasName="py-2" value="85">
                    85
                  </option>
                  <option clasName="py-2" value="84">
                    84
                  </option>
                  <option clasName="py-2" value="83">
                    83
                  </option>
                  <option clasName="py-2" value="82">
                    82
                  </option>
                  <option clasName="py-2" value="81">
                    81
                  </option>
                  <option clasName="py-2" value="80">
                    80
                  </option>
                  <option clasName="py-2" value="79">
                    79
                  </option>
                  <option clasName="py-2" value="78">
                    78
                  </option>
                  <option clasName="py-2" value="77">
                    77
                  </option>
                  <option clasName="py-2" value="76">
                    76
                  </option>
                  <option clasName="py-2" value="75">
                    75
                  </option>
                  <option clasName="py-2" value="74">
                    74
                  </option>
                  <option clasName="py-2" value="73">
                    73
                  </option>
                  <option clasName="py-2" value="72">
                    72
                  </option>
                  <option clasName="py-2" value="71">
                    71
                  </option>
                  <option clasName="py-2" value="70">
                    70
                  </option>
                  <option clasName="py-2" value="69">
                    69
                  </option>
                  <option clasName="py-2" value="68">
                    68
                  </option>
                  <option clasName="py-2" value="67">
                    67
                  </option>
                  <option clasName="py-2" value="66">
                    66
                  </option>
                  <option clasName="py-2" value="65">
                    65
                  </option>
                  <option clasName="py-2" value="64">
                    64
                  </option>
                  <option clasName="py-2" value="63">
                    63
                  </option>
                  <option clasName="py-2" value="62">
                    62
                  </option>
                  <option clasName="py-2" value="61">
                    61
                  </option>
                  <option clasName="py-2" value="60">
                    60
                  </option>
                  <option clasName="py-2" value="59">
                    59
                  </option>
                  <option clasName="py-2" value="58">
                    58
                  </option>
                  <option clasName="py-2" value="57">
                    57
                  </option>
                  <option clasName="py-2" value="56">
                    56
                  </option>
                  <option clasName="py-2" value="55">
                    55
                  </option>
                  <option clasName="py-2" value="54">
                    54
                  </option>
                  <option clasName="py-2" value="53">
                    53
                  </option>
                  <option clasName="py-2" value="52">
                    52
                  </option>
                  <option clasName="py-2" value="51">
                    51
                  </option>
                  <option clasName="py-2" value="50">
                    50
                  </option>
                  <option clasName="py-2" value="49">
                    49
                  </option>
                  <option clasName="py-2" value="48">
                    48
                  </option>
                  <option clasName="py-2" value="47">
                    47
                  </option>
                  <option clasName="py-2" value="46">
                    46
                  </option>
                  <option clasName="py-2" value="45">
                    45
                  </option>
                  <option clasName="py-2" value="44">
                    44
                  </option>
                  <option clasName="py-2" value="43">
                    43
                  </option>
                  <option clasName="py-2" value="42">
                    42
                  </option>
                  <option clasName="py-2" value="41">
                    41
                  </option>
                  <option clasName="py-2" value="40">
                    40
                  </option>
                  <option clasName="py-2" value="39">
                    39
                  </option>
                  <option clasName="py-2" value="38">
                    38
                  </option>
                  <option clasName="py-2" value="37">
                    37
                  </option>
                  <option clasName="py-2" value="36">
                    36
                  </option>
                  <option clasName="py-2" value="35">
                    35
                  </option>
                  <option clasName="py-2" value="34">
                    34
                  </option>
                  <option clasName="py-2" value="33">
                    33
                  </option>
                  <option clasName="py-2" value="32">
                    32
                  </option>
                  <option clasName="py-2" value="31">
                    31
                  </option>
                  <option clasName="py-2" value="30">
                    30
                  </option>
                  <option clasName="py-2" value="29">
                    29
                  </option>
                  <option clasName="py-2" value="28">
                    28
                  </option>
                  <option clasName="py-2" value="27">
                    27
                  </option>
                  <option clasName="py-2" value="26">
                    26
                  </option>
                  <option clasName="py-2" value="25">
                    25
                  </option>
                  <option clasName="py-2" value="24">
                    24
                  </option>
                  <option clasName="py-2" value="23">
                    23
                  </option>
                  <option clasName="py-2" value="22">
                    22
                  </option>
                  <option clasName="py-2" value="21">
                    21
                  </option>
                  <option clasName="py-2" value="20">
                    20
                  </option>
                  <option clasName="py-2" value="19">
                    19
                  </option>
                  <option clasName="py-2" value="18">
                    18
                  </option>
                  <option clasName="py-2" value="17">
                    17
                  </option>
                  <option clasName="py-2" value="16">
                    16
                  </option>
                  <option clasName="py-2" value="15">
                    15
                  </option>
                  <option clasName="py-2" value="14">
                    14
                  </option>
                  <option clasName="py-2" value="13">
                    13
                  </option>
                  <option clasName="py-2" value="12">
                    12
                  </option>
                  <option clasName="py-2" value="11">
                    11
                  </option>
                  <option clasName="py-2" value="10">
                    10
                  </option>
                  <option clasName="py-2" value="9">
                    9
                  </option>
                  <option clasName="py-2" value="8">
                    8
                  </option>
                  <option clasName="py-2" value="7">
                    7
                  </option>
                  <option clasName="py-2" value="6">
                    6
                  </option>
                  <option clasName="py-2" value="5">
                    5
                  </option>
                  <option clasName="py-2" value="4">
                    4
                  </option>
                  <option clasName="py-2" value="3">
                    3
                  </option>
                  <option clasName="py-2" value="2">
                    2
                  </option>
                  <option clasName="py-2" value="1">
                    1
                  </option>
                  <option clasName="py-2" value="0">
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
                  <option clasName="py-2" value="99">
                    99
                  </option>
                  <option clasName="py-2" value="98">
                    98
                  </option>
                  <option clasName="py-2" value="97">
                    97
                  </option>
                  <option clasName="py-2" value="96">
                    96
                  </option>
                  <option clasName="py-2" value="95">
                    95
                  </option>
                  <option clasName="py-2" value="94">
                    94
                  </option>
                  <option clasName="py-2" value="93">
                    93
                  </option>
                  <option clasName="py-2" value="92">
                    92
                  </option>
                  <option clasName="py-2" value="91">
                    91
                  </option>
                  <option clasName="py-2" value="90">
                    90
                  </option>
                  <option clasName="py-2" value="89">
                    89
                  </option>
                  <option clasName="py-2" value="88">
                    88
                  </option>
                  <option clasName="py-2" value="87">
                    87
                  </option>
                  <option clasName="py-2" value="86">
                    86
                  </option>
                  <option clasName="py-2" value="85">
                    85
                  </option>
                  <option clasName="py-2" value="84">
                    84
                  </option>
                  <option clasName="py-2" value="83">
                    83
                  </option>
                  <option clasName="py-2" value="82">
                    82
                  </option>
                  <option clasName="py-2" value="81">
                    81
                  </option>
                  <option clasName="py-2" value="80">
                    80
                  </option>
                  <option clasName="py-2" value="79">
                    79
                  </option>
                  <option clasName="py-2" value="78">
                    78
                  </option>
                  <option clasName="py-2" value="77">
                    77
                  </option>
                  <option clasName="py-2" value="76">
                    76
                  </option>
                  <option clasName="py-2" value="75">
                    75
                  </option>
                  <option clasName="py-2" value="74">
                    74
                  </option>
                  <option clasName="py-2" value="73">
                    73
                  </option>
                  <option clasName="py-2" value="72">
                    72
                  </option>
                  <option clasName="py-2" value="71">
                    71
                  </option>
                  <option clasName="py-2" value="70">
                    70
                  </option>
                  <option clasName="py-2" value="69">
                    69
                  </option>
                  <option clasName="py-2" value="68">
                    68
                  </option>
                  <option clasName="py-2" value="67">
                    67
                  </option>
                  <option clasName="py-2" value="66">
                    66
                  </option>
                  <option clasName="py-2" value="65">
                    65
                  </option>
                  <option clasName="py-2" value="64">
                    64
                  </option>
                  <option clasName="py-2" value="63">
                    63
                  </option>
                  <option clasName="py-2" value="62">
                    62
                  </option>
                  <option clasName="py-2" value="61">
                    61
                  </option>
                  <option clasName="py-2" value="60">
                    60
                  </option>
                  <option clasName="py-2" value="59">
                    59
                  </option>
                  <option clasName="py-2" value="58">
                    58
                  </option>
                  <option clasName="py-2" value="57">
                    57
                  </option>
                  <option clasName="py-2" value="56">
                    56
                  </option>
                  <option clasName="py-2" value="55">
                    55
                  </option>
                  <option clasName="py-2" value="54">
                    54
                  </option>
                  <option clasName="py-2" value="53">
                    53
                  </option>
                  <option clasName="py-2" value="52">
                    52
                  </option>
                  <option clasName="py-2" value="51">
                    51
                  </option>
                  <option clasName="py-2" value="50">
                    50
                  </option>
                  <option clasName="py-2" value="49">
                    49
                  </option>
                  <option clasName="py-2" value="48">
                    48
                  </option>
                  <option clasName="py-2" value="47">
                    47
                  </option>
                  <option clasName="py-2" value="46">
                    46
                  </option>
                  <option clasName="py-2" value="45">
                    45
                  </option>
                  <option clasName="py-2" value="44">
                    44
                  </option>
                  <option clasName="py-2" value="43">
                    43
                  </option>
                  <option clasName="py-2" value="42">
                    42
                  </option>
                  <option clasName="py-2" value="41">
                    41
                  </option>
                  <option clasName="py-2" value="40">
                    40
                  </option>
                  <option clasName="py-2" value="39">
                    39
                  </option>
                  <option clasName="py-2" value="38">
                    38
                  </option>
                  <option clasName="py-2" value="37">
                    37
                  </option>
                  <option clasName="py-2" value="36">
                    36
                  </option>
                  <option clasName="py-2" value="35">
                    35
                  </option>
                  <option clasName="py-2" value="34">
                    34
                  </option>
                  <option clasName="py-2" value="33">
                    33
                  </option>
                  <option clasName="py-2" value="32">
                    32
                  </option>
                  <option clasName="py-2" value="31">
                    31
                  </option>
                  <option clasName="py-2" value="30">
                    30
                  </option>
                  <option clasName="py-2" value="29">
                    29
                  </option>
                  <option clasName="py-2" value="28">
                    28
                  </option>
                  <option clasName="py-2" value="27">
                    27
                  </option>
                  <option clasName="py-2" value="26">
                    26
                  </option>
                  <option clasName="py-2" value="25">
                    25
                  </option>
                  <option clasName="py-2" value="24">
                    24
                  </option>
                  <option clasName="py-2" value="23">
                    23
                  </option>
                  <option clasName="py-2" value="22">
                    22
                  </option>
                  <option clasName="py-2" value="21">
                    21
                  </option>
                  <option clasName="py-2" value="20">
                    20
                  </option>
                  <option clasName="py-2" value="19">
                    19
                  </option>
                  <option clasName="py-2" value="18">
                    18
                  </option>
                  <option clasName="py-2" value="17">
                    17
                  </option>
                  <option clasName="py-2" value="16">
                    16
                  </option>
                  <option clasName="py-2" value="15">
                    15
                  </option>
                  <option clasName="py-2" value="14">
                    14
                  </option>
                  <option clasName="py-2" value="13">
                    13
                  </option>
                  <option clasName="py-2" value="12">
                    12
                  </option>
                  <option clasName="py-2" value="11">
                    11
                  </option>
                  <option clasName="py-2" value="10">
                    10
                  </option>
                  <option clasName="py-2" value="9">
                    9
                  </option>
                  <option clasName="py-2" value="8">
                    8
                  </option>
                  <option clasName="py-2" value="7">
                    7
                  </option>
                  <option clasName="py-2" value="6">
                    6
                  </option>
                  <option clasName="py-2" value="5">
                    5
                  </option>
                  <option clasName="py-2" value="4">
                    4
                  </option>
                  <option clasName="py-2" value="3">
                    3
                  </option>
                  <option clasName="py-2" value="2">
                    2
                  </option>
                  <option clasName="py-2" value="1">
                    1
                  </option>
                  <option clasName="py-2" value="0">
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
                  <option clasName="py-2" value="99">
                    99
                  </option>
                  <option clasName="py-2" value="98">
                    98
                  </option>
                  <option clasName="py-2" value="97">
                    97
                  </option>
                  <option clasName="py-2" value="96">
                    96
                  </option>
                  <option clasName="py-2" value="95">
                    95
                  </option>
                  <option clasName="py-2" value="94">
                    94
                  </option>
                  <option clasName="py-2" value="93">
                    93
                  </option>
                  <option clasName="py-2" value="92">
                    92
                  </option>
                  <option clasName="py-2" value="91">
                    91
                  </option>
                  <option clasName="py-2" value="90">
                    90
                  </option>
                  <option clasName="py-2" value="89">
                    89
                  </option>
                  <option clasName="py-2" value="88">
                    88
                  </option>
                  <option clasName="py-2" value="87">
                    87
                  </option>
                  <option clasName="py-2" value="86">
                    86
                  </option>
                  <option clasName="py-2" value="85">
                    85
                  </option>
                  <option clasName="py-2" value="84">
                    84
                  </option>
                  <option clasName="py-2" value="83">
                    83
                  </option>
                  <option clasName="py-2" value="82">
                    82
                  </option>
                  <option clasName="py-2" value="81">
                    81
                  </option>
                  <option clasName="py-2" value="80">
                    80
                  </option>
                  <option clasName="py-2" value="79">
                    79
                  </option>
                  <option clasName="py-2" value="78">
                    78
                  </option>
                  <option clasName="py-2" value="77">
                    77
                  </option>
                  <option clasName="py-2" value="76">
                    76
                  </option>
                  <option clasName="py-2" value="75">
                    75
                  </option>
                  <option clasName="py-2" value="74">
                    74
                  </option>
                  <option clasName="py-2" value="73">
                    73
                  </option>
                  <option clasName="py-2" value="72">
                    72
                  </option>
                  <option clasName="py-2" value="71">
                    71
                  </option>
                  <option clasName="py-2" value="70">
                    70
                  </option>
                  <option clasName="py-2" value="69">
                    69
                  </option>
                  <option clasName="py-2" value="68">
                    68
                  </option>
                  <option clasName="py-2" value="67">
                    67
                  </option>
                  <option clasName="py-2" value="66">
                    66
                  </option>
                  <option clasName="py-2" value="65">
                    65
                  </option>
                  <option clasName="py-2" value="64">
                    64
                  </option>
                  <option clasName="py-2" value="63">
                    63
                  </option>
                  <option clasName="py-2" value="62">
                    62
                  </option>
                  <option clasName="py-2" value="61">
                    61
                  </option>
                  <option clasName="py-2" value="60">
                    60
                  </option>
                  <option clasName="py-2" value="59">
                    59
                  </option>
                  <option clasName="py-2" value="58">
                    58
                  </option>
                  <option clasName="py-2" value="57">
                    57
                  </option>
                  <option clasName="py-2" value="56">
                    56
                  </option>
                  <option clasName="py-2" value="55">
                    55
                  </option>
                  <option clasName="py-2" value="54">
                    54
                  </option>
                  <option clasName="py-2" value="53">
                    53
                  </option>
                  <option clasName="py-2" value="52">
                    52
                  </option>
                  <option clasName="py-2" value="51">
                    51
                  </option>
                  <option clasName="py-2" value="50">
                    50
                  </option>
                  <option clasName="py-2" value="49">
                    49
                  </option>
                  <option clasName="py-2" value="48">
                    48
                  </option>
                  <option clasName="py-2" value="47">
                    47
                  </option>
                  <option clasName="py-2" value="46">
                    46
                  </option>
                  <option clasName="py-2" value="45">
                    45
                  </option>
                  <option clasName="py-2" value="44">
                    44
                  </option>
                  <option clasName="py-2" value="43">
                    43
                  </option>
                  <option clasName="py-2" value="42">
                    42
                  </option>
                  <option clasName="py-2" value="41">
                    41
                  </option>
                  <option clasName="py-2" value="40">
                    40
                  </option>
                  <option clasName="py-2" value="39">
                    39
                  </option>
                  <option clasName="py-2" value="38">
                    38
                  </option>
                  <option clasName="py-2" value="37">
                    37
                  </option>
                  <option clasName="py-2" value="36">
                    36
                  </option>
                  <option clasName="py-2" value="35">
                    35
                  </option>
                  <option clasName="py-2" value="34">
                    34
                  </option>
                  <option clasName="py-2" value="33">
                    33
                  </option>
                  <option clasName="py-2" value="32">
                    32
                  </option>
                  <option clasName="py-2" value="31">
                    31
                  </option>
                  <option clasName="py-2" value="30">
                    30
                  </option>
                  <option clasName="py-2" value="29">
                    29
                  </option>
                  <option clasName="py-2" value="28">
                    28
                  </option>
                  <option clasName="py-2" value="27">
                    27
                  </option>
                  <option clasName="py-2" value="26">
                    26
                  </option>
                  <option clasName="py-2" value="25">
                    25
                  </option>
                  <option clasName="py-2" value="24">
                    24
                  </option>
                  <option clasName="py-2" value="23">
                    23
                  </option>
                  <option clasName="py-2" value="22">
                    22
                  </option>
                  <option clasName="py-2" value="21">
                    21
                  </option>
                  <option clasName="py-2" value="20">
                    20
                  </option>
                  <option clasName="py-2" value="19">
                    19
                  </option>
                  <option clasName="py-2" value="18">
                    18
                  </option>
                  <option clasName="py-2" value="17">
                    17
                  </option>
                  <option clasName="py-2" value="16">
                    16
                  </option>
                  <option clasName="py-2" value="15">
                    15
                  </option>
                  <option clasName="py-2" value="14">
                    14
                  </option>
                  <option clasName="py-2" value="13">
                    13
                  </option>
                  <option clasName="py-2" value="12">
                    12
                  </option>
                  <option clasName="py-2" value="11">
                    11
                  </option>
                  <option clasName="py-2" value="10">
                    10
                  </option>
                  <option clasName="py-2" value="9">
                    9
                  </option>
                  <option clasName="py-2" value="8">
                    8
                  </option>
                  <option clasName="py-2" value="7">
                    7
                  </option>
                  <option clasName="py-2" value="6">
                    6
                  </option>
                  <option clasName="py-2" value="5">
                    5
                  </option>
                  <option clasName="py-2" value="4">
                    4
                  </option>
                  <option clasName="py-2" value="3">
                    3
                  </option>
                  <option clasName="py-2" value="2">
                    2
                  </option>
                  <option clasName="py-2" value="1">
                    1
                  </option>
                  <option clasName="py-2" value="0">
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
                  <option clasName="py-2" value="99">
                    99
                  </option>
                  <option clasName="py-2" value="98">
                    98
                  </option>
                  <option clasName="py-2" value="97">
                    97
                  </option>
                  <option clasName="py-2" value="96">
                    96
                  </option>
                  <option clasName="py-2" value="95">
                    95
                  </option>
                  <option clasName="py-2" value="94">
                    94
                  </option>
                  <option clasName="py-2" value="93">
                    93
                  </option>
                  <option clasName="py-2" value="92">
                    92
                  </option>
                  <option clasName="py-2" value="91">
                    91
                  </option>
                  <option clasName="py-2" value="90">
                    90
                  </option>
                  <option clasName="py-2" value="89">
                    89
                  </option>
                  <option clasName="py-2" value="88">
                    88
                  </option>
                  <option clasName="py-2" value="87">
                    87
                  </option>
                  <option clasName="py-2" value="86">
                    86
                  </option>
                  <option clasName="py-2" value="85">
                    85
                  </option>
                  <option clasName="py-2" value="84">
                    84
                  </option>
                  <option clasName="py-2" value="83">
                    83
                  </option>
                  <option clasName="py-2" value="82">
                    82
                  </option>
                  <option clasName="py-2" value="81">
                    81
                  </option>
                  <option clasName="py-2" value="80">
                    80
                  </option>
                  <option clasName="py-2" value="79">
                    79
                  </option>
                  <option clasName="py-2" value="78">
                    78
                  </option>
                  <option clasName="py-2" value="77">
                    77
                  </option>
                  <option clasName="py-2" value="76">
                    76
                  </option>
                  <option clasName="py-2" value="75">
                    75
                  </option>
                  <option clasName="py-2" value="74">
                    74
                  </option>
                  <option clasName="py-2" value="73">
                    73
                  </option>
                  <option clasName="py-2" value="72">
                    72
                  </option>
                  <option clasName="py-2" value="71">
                    71
                  </option>
                  <option clasName="py-2" value="70">
                    70
                  </option>
                  <option clasName="py-2" value="69">
                    69
                  </option>
                  <option clasName="py-2" value="68">
                    68
                  </option>
                  <option clasName="py-2" value="67">
                    67
                  </option>
                  <option clasName="py-2" value="66">
                    66
                  </option>
                  <option clasName="py-2" value="65">
                    65
                  </option>
                  <option clasName="py-2" value="64">
                    64
                  </option>
                  <option clasName="py-2" value="63">
                    63
                  </option>
                  <option clasName="py-2" value="62">
                    62
                  </option>
                  <option clasName="py-2" value="61">
                    61
                  </option>
                  <option clasName="py-2" value="60">
                    60
                  </option>
                  <option clasName="py-2" value="59">
                    59
                  </option>
                  <option clasName="py-2" value="58">
                    58
                  </option>
                  <option clasName="py-2" value="57">
                    57
                  </option>
                  <option clasName="py-2" value="56">
                    56
                  </option>
                  <option clasName="py-2" value="55">
                    55
                  </option>
                  <option clasName="py-2" value="54">
                    54
                  </option>
                  <option clasName="py-2" value="53">
                    53
                  </option>
                  <option clasName="py-2" value="52">
                    52
                  </option>
                  <option clasName="py-2" value="51">
                    51
                  </option>
                  <option clasName="py-2" value="50">
                    50
                  </option>
                  <option clasName="py-2" value="49">
                    49
                  </option>
                  <option clasName="py-2" value="48">
                    48
                  </option>
                  <option clasName="py-2" value="47">
                    47
                  </option>
                  <option clasName="py-2" value="46">
                    46
                  </option>
                  <option clasName="py-2" value="45">
                    45
                  </option>
                  <option clasName="py-2" value="44">
                    44
                  </option>
                  <option clasName="py-2" value="43">
                    43
                  </option>
                  <option clasName="py-2" value="42">
                    42
                  </option>
                  <option clasName="py-2" value="41">
                    41
                  </option>
                  <option clasName="py-2" value="40">
                    40
                  </option>
                  <option clasName="py-2" value="39">
                    39
                  </option>
                  <option clasName="py-2" value="38">
                    38
                  </option>
                  <option clasName="py-2" value="37">
                    37
                  </option>
                  <option clasName="py-2" value="36">
                    36
                  </option>
                  <option clasName="py-2" value="35">
                    35
                  </option>
                  <option clasName="py-2" value="34">
                    34
                  </option>
                  <option clasName="py-2" value="33">
                    33
                  </option>
                  <option clasName="py-2" value="32">
                    32
                  </option>
                  <option clasName="py-2" value="31">
                    31
                  </option>
                  <option clasName="py-2" value="30">
                    30
                  </option>
                  <option clasName="py-2" value="29">
                    29
                  </option>
                  <option clasName="py-2" value="28">
                    28
                  </option>
                  <option clasName="py-2" value="27">
                    27
                  </option>
                  <option clasName="py-2" value="26">
                    26
                  </option>
                  <option clasName="py-2" value="25">
                    25
                  </option>
                  <option clasName="py-2" value="24">
                    24
                  </option>
                  <option clasName="py-2" value="23">
                    23
                  </option>
                  <option clasName="py-2" value="22">
                    22
                  </option>
                  <option clasName="py-2" value="21">
                    21
                  </option>
                  <option clasName="py-2" value="20">
                    20
                  </option>
                  <option clasName="py-2" value="19">
                    19
                  </option>
                  <option clasName="py-2" value="18">
                    18
                  </option>
                  <option clasName="py-2" value="17">
                    17
                  </option>
                  <option clasName="py-2" value="16">
                    16
                  </option>
                  <option clasName="py-2" value="15">
                    15
                  </option>
                  <option clasName="py-2" value="14">
                    14
                  </option>
                  <option clasName="py-2" value="13">
                    13
                  </option>
                  <option clasName="py-2" value="12">
                    12
                  </option>
                  <option clasName="py-2" value="11">
                    11
                  </option>
                  <option clasName="py-2" value="10">
                    10
                  </option>
                  <option clasName="py-2" value="9">
                    9
                  </option>
                  <option clasName="py-2" value="8">
                    8
                  </option>
                  <option clasName="py-2" value="7">
                    7
                  </option>
                  <option clasName="py-2" value="6">
                    6
                  </option>
                  <option clasName="py-2" value="5">
                    5
                  </option>
                  <option clasName="py-2" value="4">
                    4
                  </option>
                  <option clasName="py-2" value="3">
                    3
                  </option>
                  <option clasName="py-2" value="2">
                    2
                  </option>
                  <option clasName="py-2" value="1">
                    1
                  </option>
                  <option clasName="py-2" value="0">
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
                  <option clasName="py-2" value="99">
                    99
                  </option>
                  <option clasName="py-2" value="98">
                    98
                  </option>
                  <option clasName="py-2" value="97">
                    97
                  </option>
                  <option clasName="py-2" value="96">
                    96
                  </option>
                  <option clasName="py-2" value="95">
                    95
                  </option>
                  <option clasName="py-2" value="94">
                    94
                  </option>
                  <option clasName="py-2" value="93">
                    93
                  </option>
                  <option clasName="py-2" value="92">
                    92
                  </option>
                  <option clasName="py-2" value="91">
                    91
                  </option>
                  <option clasName="py-2" value="90">
                    90
                  </option>
                  <option clasName="py-2" value="89">
                    89
                  </option>
                  <option clasName="py-2" value="88">
                    88
                  </option>
                  <option clasName="py-2" value="87">
                    87
                  </option>
                  <option clasName="py-2" value="86">
                    86
                  </option>
                  <option clasName="py-2" value="85">
                    85
                  </option>
                  <option clasName="py-2" value="84">
                    84
                  </option>
                  <option clasName="py-2" value="83">
                    83
                  </option>
                  <option clasName="py-2" value="82">
                    82
                  </option>
                  <option clasName="py-2" value="81">
                    81
                  </option>
                  <option clasName="py-2" value="80">
                    80
                  </option>
                  <option clasName="py-2" value="79">
                    79
                  </option>
                  <option clasName="py-2" value="78">
                    78
                  </option>
                  <option clasName="py-2" value="77">
                    77
                  </option>
                  <option clasName="py-2" value="76">
                    76
                  </option>
                  <option clasName="py-2" value="75">
                    75
                  </option>
                  <option clasName="py-2" value="74">
                    74
                  </option>
                  <option clasName="py-2" value="73">
                    73
                  </option>
                  <option clasName="py-2" value="72">
                    72
                  </option>
                  <option clasName="py-2" value="71">
                    71
                  </option>
                  <option clasName="py-2" value="70">
                    70
                  </option>
                  <option clasName="py-2" value="69">
                    69
                  </option>
                  <option clasName="py-2" value="68">
                    68
                  </option>
                  <option clasName="py-2" value="67">
                    67
                  </option>
                  <option clasName="py-2" value="66">
                    66
                  </option>
                  <option clasName="py-2" value="65">
                    65
                  </option>
                  <option clasName="py-2" value="64">
                    64
                  </option>
                  <option clasName="py-2" value="63">
                    63
                  </option>
                  <option clasName="py-2" value="62">
                    62
                  </option>
                  <option clasName="py-2" value="61">
                    61
                  </option>
                  <option clasName="py-2" value="60">
                    60
                  </option>
                  <option clasName="py-2" value="59">
                    59
                  </option>
                  <option clasName="py-2" value="58">
                    58
                  </option>
                  <option clasName="py-2" value="57">
                    57
                  </option>
                  <option clasName="py-2" value="56">
                    56
                  </option>
                  <option clasName="py-2" value="55">
                    55
                  </option>
                  <option clasName="py-2" value="54">
                    54
                  </option>
                  <option clasName="py-2" value="53">
                    53
                  </option>
                  <option clasName="py-2" value="52">
                    52
                  </option>
                  <option clasName="py-2" value="51">
                    51
                  </option>
                  <option clasName="py-2" value="50">
                    50
                  </option>
                  <option clasName="py-2" value="49">
                    49
                  </option>
                  <option clasName="py-2" value="48">
                    48
                  </option>
                  <option clasName="py-2" value="47">
                    47
                  </option>
                  <option clasName="py-2" value="46">
                    46
                  </option>
                  <option clasName="py-2" value="45">
                    45
                  </option>
                  <option clasName="py-2" value="44">
                    44
                  </option>
                  <option clasName="py-2" value="43">
                    43
                  </option>
                  <option clasName="py-2" value="42">
                    42
                  </option>
                  <option clasName="py-2" value="41">
                    41
                  </option>
                  <option clasName="py-2" value="40">
                    40
                  </option>
                  <option clasName="py-2" value="39">
                    39
                  </option>
                  <option clasName="py-2" value="38">
                    38
                  </option>
                  <option clasName="py-2" value="37">
                    37
                  </option>
                  <option clasName="py-2" value="36">
                    36
                  </option>
                  <option clasName="py-2" value="35">
                    35
                  </option>
                  <option clasName="py-2" value="34">
                    34
                  </option>
                  <option clasName="py-2" value="33">
                    33
                  </option>
                  <option clasName="py-2" value="32">
                    32
                  </option>
                  <option clasName="py-2" value="31">
                    31
                  </option>
                  <option clasName="py-2" value="30">
                    30
                  </option>
                  <option clasName="py-2" value="29">
                    29
                  </option>
                  <option clasName="py-2" value="28">
                    28
                  </option>
                  <option clasName="py-2" value="27">
                    27
                  </option>
                  <option clasName="py-2" value="26">
                    26
                  </option>
                  <option clasName="py-2" value="25">
                    25
                  </option>
                  <option clasName="py-2" value="24">
                    24
                  </option>
                  <option clasName="py-2" value="23">
                    23
                  </option>
                  <option clasName="py-2" value="22">
                    22
                  </option>
                  <option clasName="py-2" value="21">
                    21
                  </option>
                  <option clasName="py-2" value="20">
                    20
                  </option>
                  <option clasName="py-2" value="19">
                    19
                  </option>
                  <option clasName="py-2" value="18">
                    18
                  </option>
                  <option clasName="py-2" value="17">
                    17
                  </option>
                  <option clasName="py-2" value="16">
                    16
                  </option>
                  <option clasName="py-2" value="15">
                    15
                  </option>
                  <option clasName="py-2" value="14">
                    14
                  </option>
                  <option clasName="py-2" value="13">
                    13
                  </option>
                  <option clasName="py-2" value="12">
                    12
                  </option>
                  <option clasName="py-2" value="11">
                    11
                  </option>
                  <option clasName="py-2" value="10">
                    10
                  </option>
                  <option clasName="py-2" value="9">
                    9
                  </option>
                  <option clasName="py-2" value="8">
                    8
                  </option>
                  <option clasName="py-2" value="7">
                    7
                  </option>
                  <option clasName="py-2" value="6">
                    6
                  </option>
                  <option clasName="py-2" value="5">
                    5
                  </option>
                  <option clasName="py-2" value="4">
                    4
                  </option>
                  <option clasName="py-2" value="3">
                    3
                  </option>
                  <option clasName="py-2" value="2">
                    2
                  </option>
                  <option clasName="py-2" value="1">
                    1
                  </option>
                  <option clasName="py-2" value="0">
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
                  <option clasName="py-2" value="99">
                    99
                  </option>
                  <option clasName="py-2" value="98">
                    98
                  </option>
                  <option clasName="py-2" value="97">
                    97
                  </option>
                  <option clasName="py-2" value="96">
                    96
                  </option>
                  <option clasName="py-2" value="95">
                    95
                  </option>
                  <option clasName="py-2" value="94">
                    94
                  </option>
                  <option clasName="py-2" value="93">
                    93
                  </option>
                  <option clasName="py-2" value="92">
                    92
                  </option>
                  <option clasName="py-2" value="91">
                    91
                  </option>
                  <option clasName="py-2" value="90">
                    90
                  </option>
                  <option clasName="py-2" value="89">
                    89
                  </option>
                  <option clasName="py-2" value="88">
                    88
                  </option>
                  <option clasName="py-2" value="87">
                    87
                  </option>
                  <option clasName="py-2" value="86">
                    86
                  </option>
                  <option clasName="py-2" value="85">
                    85
                  </option>
                  <option clasName="py-2" value="84">
                    84
                  </option>
                  <option clasName="py-2" value="83">
                    83
                  </option>
                  <option clasName="py-2" value="82">
                    82
                  </option>
                  <option clasName="py-2" value="81">
                    81
                  </option>
                  <option clasName="py-2" value="80">
                    80
                  </option>
                  <option clasName="py-2" value="79">
                    79
                  </option>
                  <option clasName="py-2" value="78">
                    78
                  </option>
                  <option clasName="py-2" value="77">
                    77
                  </option>
                  <option clasName="py-2" value="76">
                    76
                  </option>
                  <option clasName="py-2" value="75">
                    75
                  </option>
                  <option clasName="py-2" value="74">
                    74
                  </option>
                  <option clasName="py-2" value="73">
                    73
                  </option>
                  <option clasName="py-2" value="72">
                    72
                  </option>
                  <option clasName="py-2" value="71">
                    71
                  </option>
                  <option clasName="py-2" value="70">
                    70
                  </option>
                  <option clasName="py-2" value="69">
                    69
                  </option>
                  <option clasName="py-2" value="68">
                    68
                  </option>
                  <option clasName="py-2" value="67">
                    67
                  </option>
                  <option clasName="py-2" value="66">
                    66
                  </option>
                  <option clasName="py-2" value="65">
                    65
                  </option>
                  <option clasName="py-2" value="64">
                    64
                  </option>
                  <option clasName="py-2" value="63">
                    63
                  </option>
                  <option clasName="py-2" value="62">
                    62
                  </option>
                  <option clasName="py-2" value="61">
                    61
                  </option>
                  <option clasName="py-2" value="60">
                    60
                  </option>
                  <option clasName="py-2" value="59">
                    59
                  </option>
                  <option clasName="py-2" value="58">
                    58
                  </option>
                  <option clasName="py-2" value="57">
                    57
                  </option>
                  <option clasName="py-2" value="56">
                    56
                  </option>
                  <option clasName="py-2" value="55">
                    55
                  </option>
                  <option clasName="py-2" value="54">
                    54
                  </option>
                  <option clasName="py-2" value="53">
                    53
                  </option>
                  <option clasName="py-2" value="52">
                    52
                  </option>
                  <option clasName="py-2" value="51">
                    51
                  </option>
                  <option clasName="py-2" value="50">
                    50
                  </option>
                  <option clasName="py-2" value="49">
                    49
                  </option>
                  <option clasName="py-2" value="48">
                    48
                  </option>
                  <option clasName="py-2" value="47">
                    47
                  </option>
                  <option clasName="py-2" value="46">
                    46
                  </option>
                  <option clasName="py-2" value="45">
                    45
                  </option>
                  <option clasName="py-2" value="44">
                    44
                  </option>
                  <option clasName="py-2" value="43">
                    43
                  </option>
                  <option clasName="py-2" value="42">
                    42
                  </option>
                  <option clasName="py-2" value="41">
                    41
                  </option>
                  <option clasName="py-2" value="40">
                    40
                  </option>
                  <option clasName="py-2" value="39">
                    39
                  </option>
                  <option clasName="py-2" value="38">
                    38
                  </option>
                  <option clasName="py-2" value="37">
                    37
                  </option>
                  <option clasName="py-2" value="36">
                    36
                  </option>
                  <option clasName="py-2" value="35">
                    35
                  </option>
                  <option clasName="py-2" value="34">
                    34
                  </option>
                  <option clasName="py-2" value="33">
                    33
                  </option>
                  <option clasName="py-2" value="32">
                    32
                  </option>
                  <option clasName="py-2" value="31">
                    31
                  </option>
                  <option clasName="py-2" value="30">
                    30
                  </option>
                  <option clasName="py-2" value="29">
                    29
                  </option>
                  <option clasName="py-2" value="28">
                    28
                  </option>
                  <option clasName="py-2" value="27">
                    27
                  </option>
                  <option clasName="py-2" value="26">
                    26
                  </option>
                  <option clasName="py-2" value="25">
                    25
                  </option>
                  <option clasName="py-2" value="24">
                    24
                  </option>
                  <option clasName="py-2" value="23">
                    23
                  </option>
                  <option clasName="py-2" value="22">
                    22
                  </option>
                  <option clasName="py-2" value="21">
                    21
                  </option>
                  <option clasName="py-2" value="20">
                    20
                  </option>
                  <option clasName="py-2" value="19">
                    19
                  </option>
                  <option clasName="py-2" value="18">
                    18
                  </option>
                  <option clasName="py-2" value="17">
                    17
                  </option>
                  <option clasName="py-2" value="16">
                    16
                  </option>
                  <option clasName="py-2" value="15">
                    15
                  </option>
                  <option clasName="py-2" value="14">
                    14
                  </option>
                  <option clasName="py-2" value="13">
                    13
                  </option>
                  <option clasName="py-2" value="12">
                    12
                  </option>
                  <option clasName="py-2" value="11">
                    11
                  </option>
                  <option clasName="py-2" value="10">
                    10
                  </option>
                  <option clasName="py-2" value="9">
                    9
                  </option>
                  <option clasName="py-2" value="8">
                    8
                  </option>
                  <option clasName="py-2" value="7">
                    7
                  </option>
                  <option clasName="py-2" value="6">
                    6
                  </option>
                  <option clasName="py-2" value="5">
                    5
                  </option>
                  <option clasName="py-2" value="4">
                    4
                  </option>
                  <option clasName="py-2" value="3">
                    3
                  </option>
                  <option clasName="py-2" value="2">
                    2
                  </option>
                  <option clasName="py-2" value="1">
                    1
                  </option>
                  <option clasName="py-2" value="0">
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
                  <option clasName="py-2" value="99">
                    99
                  </option>
                  <option clasName="py-2" value="98">
                    98
                  </option>
                  <option clasName="py-2" value="97">
                    97
                  </option>
                  <option clasName="py-2" value="96">
                    96
                  </option>
                  <option clasName="py-2" value="95">
                    95
                  </option>
                  <option clasName="py-2" value="94">
                    94
                  </option>
                  <option clasName="py-2" value="93">
                    93
                  </option>
                  <option clasName="py-2" value="92">
                    92
                  </option>
                  <option clasName="py-2" value="91">
                    91
                  </option>
                  <option clasName="py-2" value="90">
                    90
                  </option>
                  <option clasName="py-2" value="89">
                    89
                  </option>
                  <option clasName="py-2" value="88">
                    88
                  </option>
                  <option clasName="py-2" value="87">
                    87
                  </option>
                  <option clasName="py-2" value="86">
                    86
                  </option>
                  <option clasName="py-2" value="85">
                    85
                  </option>
                  <option clasName="py-2" value="84">
                    84
                  </option>
                  <option clasName="py-2" value="83">
                    83
                  </option>
                  <option clasName="py-2" value="82">
                    82
                  </option>
                  <option clasName="py-2" value="81">
                    81
                  </option>
                  <option clasName="py-2" value="80">
                    80
                  </option>
                  <option clasName="py-2" value="79">
                    79
                  </option>
                  <option clasName="py-2" value="78">
                    78
                  </option>
                  <option clasName="py-2" value="77">
                    77
                  </option>
                  <option clasName="py-2" value="76">
                    76
                  </option>
                  <option clasName="py-2" value="75">
                    75
                  </option>
                  <option clasName="py-2" value="74">
                    74
                  </option>
                  <option clasName="py-2" value="73">
                    73
                  </option>
                  <option clasName="py-2" value="72">
                    72
                  </option>
                  <option clasName="py-2" value="71">
                    71
                  </option>
                  <option clasName="py-2" value="70">
                    70
                  </option>
                  <option clasName="py-2" value="69">
                    69
                  </option>
                  <option clasName="py-2" value="68">
                    68
                  </option>
                  <option clasName="py-2" value="67">
                    67
                  </option>
                  <option clasName="py-2" value="66">
                    66
                  </option>
                  <option clasName="py-2" value="65">
                    65
                  </option>
                  <option clasName="py-2" value="64">
                    64
                  </option>
                  <option clasName="py-2" value="63">
                    63
                  </option>
                  <option clasName="py-2" value="62">
                    62
                  </option>
                  <option clasName="py-2" value="61">
                    61
                  </option>
                  <option clasName="py-2" value="60">
                    60
                  </option>
                  <option clasName="py-2" value="59">
                    59
                  </option>
                  <option clasName="py-2" value="58">
                    58
                  </option>
                  <option clasName="py-2" value="57">
                    57
                  </option>
                  <option clasName="py-2" value="56">
                    56
                  </option>
                  <option clasName="py-2" value="55">
                    55
                  </option>
                  <option clasName="py-2" value="54">
                    54
                  </option>
                  <option clasName="py-2" value="53">
                    53
                  </option>
                  <option clasName="py-2" value="52">
                    52
                  </option>
                  <option clasName="py-2" value="51">
                    51
                  </option>
                  <option clasName="py-2" value="50">
                    50
                  </option>
                  <option clasName="py-2" value="49">
                    49
                  </option>
                  <option clasName="py-2" value="48">
                    48
                  </option>
                  <option clasName="py-2" value="47">
                    47
                  </option>
                  <option clasName="py-2" value="46">
                    46
                  </option>
                  <option clasName="py-2" value="45">
                    45
                  </option>
                  <option clasName="py-2" value="44">
                    44
                  </option>
                  <option clasName="py-2" value="43">
                    43
                  </option>
                  <option clasName="py-2" value="42">
                    42
                  </option>
                  <option clasName="py-2" value="41">
                    41
                  </option>
                  <option clasName="py-2" value="40">
                    40
                  </option>
                  <option clasName="py-2" value="39">
                    39
                  </option>
                  <option clasName="py-2" value="38">
                    38
                  </option>
                  <option clasName="py-2" value="37">
                    37
                  </option>
                  <option clasName="py-2" value="36">
                    36
                  </option>
                  <option clasName="py-2" value="35">
                    35
                  </option>
                  <option clasName="py-2" value="34">
                    34
                  </option>
                  <option clasName="py-2" value="33">
                    33
                  </option>
                  <option clasName="py-2" value="32">
                    32
                  </option>
                  <option clasName="py-2" value="31">
                    31
                  </option>
                  <option clasName="py-2" value="30">
                    30
                  </option>
                  <option clasName="py-2" value="29">
                    29
                  </option>
                  <option clasName="py-2" value="28">
                    28
                  </option>
                  <option clasName="py-2" value="27">
                    27
                  </option>
                  <option clasName="py-2" value="26">
                    26
                  </option>
                  <option clasName="py-2" value="25">
                    25
                  </option>
                  <option clasName="py-2" value="24">
                    24
                  </option>
                  <option clasName="py-2" value="23">
                    23
                  </option>
                  <option clasName="py-2" value="22">
                    22
                  </option>
                  <option clasName="py-2" value="21">
                    21
                  </option>
                  <option clasName="py-2" value="20">
                    20
                  </option>
                  <option clasName="py-2" value="19">
                    19
                  </option>
                  <option clasName="py-2" value="18">
                    18
                  </option>
                  <option clasName="py-2" value="17">
                    17
                  </option>
                  <option clasName="py-2" value="16">
                    16
                  </option>
                  <option clasName="py-2" value="15">
                    15
                  </option>
                  <option clasName="py-2" value="14">
                    14
                  </option>
                  <option clasName="py-2" value="13">
                    13
                  </option>
                  <option clasName="py-2" value="12">
                    12
                  </option>
                  <option clasName="py-2" value="11">
                    11
                  </option>
                  <option clasName="py-2" value="10">
                    10
                  </option>
                  <option clasName="py-2" value="9">
                    9
                  </option>
                  <option clasName="py-2" value="8">
                    8
                  </option>
                  <option clasName="py-2" value="7">
                    7
                  </option>
                  <option clasName="py-2" value="6">
                    6
                  </option>
                  <option clasName="py-2" value="5">
                    5
                  </option>
                  <option clasName="py-2" value="4">
                    4
                  </option>
                  <option clasName="py-2" value="3">
                    3
                  </option>
                  <option clasName="py-2" value="2">
                    2
                  </option>
                  <option clasName="py-2" value="1">
                    1
                  </option>
                  <option clasName="py-2" value="0">
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
                  <option clasName="py-2" value="99">
                    99
                  </option>
                  <option clasName="py-2" value="98">
                    98
                  </option>
                  <option clasName="py-2" value="97">
                    97
                  </option>
                  <option clasName="py-2" value="96">
                    96
                  </option>
                  <option clasName="py-2" value="95">
                    95
                  </option>
                  <option clasName="py-2" value="94">
                    94
                  </option>
                  <option clasName="py-2" value="93">
                    93
                  </option>
                  <option clasName="py-2" value="92">
                    92
                  </option>
                  <option clasName="py-2" value="91">
                    91
                  </option>
                  <option clasName="py-2" value="90">
                    90
                  </option>
                  <option clasName="py-2" value="89">
                    89
                  </option>
                  <option clasName="py-2" value="88">
                    88
                  </option>
                  <option clasName="py-2" value="87">
                    87
                  </option>
                  <option clasName="py-2" value="86">
                    86
                  </option>
                  <option clasName="py-2" value="85">
                    85
                  </option>
                  <option clasName="py-2" value="84">
                    84
                  </option>
                  <option clasName="py-2" value="83">
                    83
                  </option>
                  <option clasName="py-2" value="82">
                    82
                  </option>
                  <option clasName="py-2" value="81">
                    81
                  </option>
                  <option clasName="py-2" value="80">
                    80
                  </option>
                  <option clasName="py-2" value="79">
                    79
                  </option>
                  <option clasName="py-2" value="78">
                    78
                  </option>
                  <option clasName="py-2" value="77">
                    77
                  </option>
                  <option clasName="py-2" value="76">
                    76
                  </option>
                  <option clasName="py-2" value="75">
                    75
                  </option>
                  <option clasName="py-2" value="74">
                    74
                  </option>
                  <option clasName="py-2" value="73">
                    73
                  </option>
                  <option clasName="py-2" value="72">
                    72
                  </option>
                  <option clasName="py-2" value="71">
                    71
                  </option>
                  <option clasName="py-2" value="70">
                    70
                  </option>
                  <option clasName="py-2" value="69">
                    69
                  </option>
                  <option clasName="py-2" value="68">
                    68
                  </option>
                  <option clasName="py-2" value="67">
                    67
                  </option>
                  <option clasName="py-2" value="66">
                    66
                  </option>
                  <option clasName="py-2" value="65">
                    65
                  </option>
                  <option clasName="py-2" value="64">
                    64
                  </option>
                  <option clasName="py-2" value="63">
                    63
                  </option>
                  <option clasName="py-2" value="62">
                    62
                  </option>
                  <option clasName="py-2" value="61">
                    61
                  </option>
                  <option clasName="py-2" value="60">
                    60
                  </option>
                  <option clasName="py-2" value="59">
                    59
                  </option>
                  <option clasName="py-2" value="58">
                    58
                  </option>
                  <option clasName="py-2" value="57">
                    57
                  </option>
                  <option clasName="py-2" value="56">
                    56
                  </option>
                  <option clasName="py-2" value="55">
                    55
                  </option>
                  <option clasName="py-2" value="54">
                    54
                  </option>
                  <option clasName="py-2" value="53">
                    53
                  </option>
                  <option clasName="py-2" value="52">
                    52
                  </option>
                  <option clasName="py-2" value="51">
                    51
                  </option>
                  <option clasName="py-2" value="50">
                    50
                  </option>
                  <option clasName="py-2" value="49">
                    49
                  </option>
                  <option clasName="py-2" value="48">
                    48
                  </option>
                  <option clasName="py-2" value="47">
                    47
                  </option>
                  <option clasName="py-2" value="46">
                    46
                  </option>
                  <option clasName="py-2" value="45">
                    45
                  </option>
                  <option clasName="py-2" value="44">
                    44
                  </option>
                  <option clasName="py-2" value="43">
                    43
                  </option>
                  <option clasName="py-2" value="42">
                    42
                  </option>
                  <option clasName="py-2" value="41">
                    41
                  </option>
                  <option clasName="py-2" value="40">
                    40
                  </option>
                  <option clasName="py-2" value="39">
                    39
                  </option>
                  <option clasName="py-2" value="38">
                    38
                  </option>
                  <option clasName="py-2" value="37">
                    37
                  </option>
                  <option clasName="py-2" value="36">
                    36
                  </option>
                  <option clasName="py-2" value="35">
                    35
                  </option>
                  <option clasName="py-2" value="34">
                    34
                  </option>
                  <option clasName="py-2" value="33">
                    33
                  </option>
                  <option clasName="py-2" value="32">
                    32
                  </option>
                  <option clasName="py-2" value="31">
                    31
                  </option>
                  <option clasName="py-2" value="30">
                    30
                  </option>
                  <option clasName="py-2" value="29">
                    29
                  </option>
                  <option clasName="py-2" value="28">
                    28
                  </option>
                  <option clasName="py-2" value="27">
                    27
                  </option>
                  <option clasName="py-2" value="26">
                    26
                  </option>
                  <option clasName="py-2" value="25">
                    25
                  </option>
                  <option clasName="py-2" value="24">
                    24
                  </option>
                  <option clasName="py-2" value="23">
                    23
                  </option>
                  <option clasName="py-2" value="22">
                    22
                  </option>
                  <option clasName="py-2" value="21">
                    21
                  </option>
                  <option clasName="py-2" value="20">
                    20
                  </option>
                  <option clasName="py-2" value="19">
                    19
                  </option>
                  <option clasName="py-2" value="18">
                    18
                  </option>
                  <option clasName="py-2" value="17">
                    17
                  </option>
                  <option clasName="py-2" value="16">
                    16
                  </option>
                  <option clasName="py-2" value="15">
                    15
                  </option>
                  <option clasName="py-2" value="14">
                    14
                  </option>
                  <option clasName="py-2" value="13">
                    13
                  </option>
                  <option clasName="py-2" value="12">
                    12
                  </option>
                  <option clasName="py-2" value="11">
                    11
                  </option>
                  <option clasName="py-2" value="10">
                    10
                  </option>
                  <option clasName="py-2" value="9">
                    9
                  </option>
                  <option clasName="py-2" value="8">
                    8
                  </option>
                  <option clasName="py-2" value="7">
                    7
                  </option>
                  <option clasName="py-2" value="6">
                    6
                  </option>
                  <option clasName="py-2" value="5">
                    5
                  </option>
                  <option clasName="py-2" value="4">
                    4
                  </option>
                  <option clasName="py-2" value="3">
                    3
                  </option>
                  <option clasName="py-2" value="2">
                    2
                  </option>
                  <option clasName="py-2" value="1">
                    1
                  </option>
                  <option clasName="py-2" value="0">
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
                  <option clasName="py-2" value="99">
                    99
                  </option>
                  <option clasName="py-2" value="98">
                    98
                  </option>
                  <option clasName="py-2" value="97">
                    97
                  </option>
                  <option clasName="py-2" value="96">
                    96
                  </option>
                  <option clasName="py-2" value="95">
                    95
                  </option>
                  <option clasName="py-2" value="94">
                    94
                  </option>
                  <option clasName="py-2" value="93">
                    93
                  </option>
                  <option clasName="py-2" value="92">
                    92
                  </option>
                  <option clasName="py-2" value="91">
                    91
                  </option>
                  <option clasName="py-2" value="90">
                    90
                  </option>
                  <option clasName="py-2" value="89">
                    89
                  </option>
                  <option clasName="py-2" value="88">
                    88
                  </option>
                  <option clasName="py-2" value="87">
                    87
                  </option>
                  <option clasName="py-2" value="86">
                    86
                  </option>
                  <option clasName="py-2" value="85">
                    85
                  </option>
                  <option clasName="py-2" value="84">
                    84
                  </option>
                  <option clasName="py-2" value="83">
                    83
                  </option>
                  <option clasName="py-2" value="82">
                    82
                  </option>
                  <option clasName="py-2" value="81">
                    81
                  </option>
                  <option clasName="py-2" value="80">
                    80
                  </option>
                  <option clasName="py-2" value="79">
                    79
                  </option>
                  <option clasName="py-2" value="78">
                    78
                  </option>
                  <option clasName="py-2" value="77">
                    77
                  </option>
                  <option clasName="py-2" value="76">
                    76
                  </option>
                  <option clasName="py-2" value="75">
                    75
                  </option>
                  <option clasName="py-2" value="74">
                    74
                  </option>
                  <option clasName="py-2" value="73">
                    73
                  </option>
                  <option clasName="py-2" value="72">
                    72
                  </option>
                  <option clasName="py-2" value="71">
                    71
                  </option>
                  <option clasName="py-2" value="70">
                    70
                  </option>
                  <option clasName="py-2" value="69">
                    69
                  </option>
                  <option clasName="py-2" value="68">
                    68
                  </option>
                  <option clasName="py-2" value="67">
                    67
                  </option>
                  <option clasName="py-2" value="66">
                    66
                  </option>
                  <option clasName="py-2" value="65">
                    65
                  </option>
                  <option clasName="py-2" value="64">
                    64
                  </option>
                  <option clasName="py-2" value="63">
                    63
                  </option>
                  <option clasName="py-2" value="62">
                    62
                  </option>
                  <option clasName="py-2" value="61">
                    61
                  </option>
                  <option clasName="py-2" value="60">
                    60
                  </option>
                  <option clasName="py-2" value="59">
                    59
                  </option>
                  <option clasName="py-2" value="58">
                    58
                  </option>
                  <option clasName="py-2" value="57">
                    57
                  </option>
                  <option clasName="py-2" value="56">
                    56
                  </option>
                  <option clasName="py-2" value="55">
                    55
                  </option>
                  <option clasName="py-2" value="54">
                    54
                  </option>
                  <option clasName="py-2" value="53">
                    53
                  </option>
                  <option clasName="py-2" value="52">
                    52
                  </option>
                  <option clasName="py-2" value="51">
                    51
                  </option>
                  <option clasName="py-2" value="50">
                    50
                  </option>
                  <option clasName="py-2" value="49">
                    49
                  </option>
                  <option clasName="py-2" value="48">
                    48
                  </option>
                  <option clasName="py-2" value="47">
                    47
                  </option>
                  <option clasName="py-2" value="46">
                    46
                  </option>
                  <option clasName="py-2" value="45">
                    45
                  </option>
                  <option clasName="py-2" value="44">
                    44
                  </option>
                  <option clasName="py-2" value="43">
                    43
                  </option>
                  <option clasName="py-2" value="42">
                    42
                  </option>
                  <option clasName="py-2" value="41">
                    41
                  </option>
                  <option clasName="py-2" value="40">
                    40
                  </option>
                  <option clasName="py-2" value="39">
                    39
                  </option>
                  <option clasName="py-2" value="38">
                    38
                  </option>
                  <option clasName="py-2" value="37">
                    37
                  </option>
                  <option clasName="py-2" value="36">
                    36
                  </option>
                  <option clasName="py-2" value="35">
                    35
                  </option>
                  <option clasName="py-2" value="34">
                    34
                  </option>
                  <option clasName="py-2" value="33">
                    33
                  </option>
                  <option clasName="py-2" value="32">
                    32
                  </option>
                  <option clasName="py-2" value="31">
                    31
                  </option>
                  <option clasName="py-2" value="30">
                    30
                  </option>
                  <option clasName="py-2" value="29">
                    29
                  </option>
                  <option clasName="py-2" value="28">
                    28
                  </option>
                  <option clasName="py-2" value="27">
                    27
                  </option>
                  <option clasName="py-2" value="26">
                    26
                  </option>
                  <option clasName="py-2" value="25">
                    25
                  </option>
                  <option clasName="py-2" value="24">
                    24
                  </option>
                  <option clasName="py-2" value="23">
                    23
                  </option>
                  <option clasName="py-2" value="22">
                    22
                  </option>
                  <option clasName="py-2" value="21">
                    21
                  </option>
                  <option clasName="py-2" value="20">
                    20
                  </option>
                  <option clasName="py-2" value="19">
                    19
                  </option>
                  <option clasName="py-2" value="18">
                    18
                  </option>
                  <option clasName="py-2" value="17">
                    17
                  </option>
                  <option clasName="py-2" value="16">
                    16
                  </option>
                  <option clasName="py-2" value="15">
                    15
                  </option>
                  <option clasName="py-2" value="14">
                    14
                  </option>
                  <option clasName="py-2" value="13">
                    13
                  </option>
                  <option clasName="py-2" value="12">
                    12
                  </option>
                  <option clasName="py-2" value="11">
                    11
                  </option>
                  <option clasName="py-2" value="10">
                    10
                  </option>
                  <option clasName="py-2" value="9">
                    9
                  </option>
                  <option clasName="py-2" value="8">
                    8
                  </option>
                  <option clasName="py-2" value="7">
                    7
                  </option>
                  <option clasName="py-2" value="6">
                    6
                  </option>
                  <option clasName="py-2" value="5">
                    5
                  </option>
                  <option clasName="py-2" value="4">
                    4
                  </option>
                  <option clasName="py-2" value="3">
                    3
                  </option>
                  <option clasName="py-2" value="2">
                    2
                  </option>
                  <option clasName="py-2" value="1">
                    1
                  </option>
                  <option clasName="py-2" value="0">
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
                  <option clasName="py-2" value="99">
                    99
                  </option>
                  <option clasName="py-2" value="98">
                    98
                  </option>
                  <option clasName="py-2" value="97">
                    97
                  </option>
                  <option clasName="py-2" value="96">
                    96
                  </option>
                  <option clasName="py-2" value="95">
                    95
                  </option>
                  <option clasName="py-2" value="94">
                    94
                  </option>
                  <option clasName="py-2" value="93">
                    93
                  </option>
                  <option clasName="py-2" value="92">
                    92
                  </option>
                  <option clasName="py-2" value="91">
                    91
                  </option>
                  <option clasName="py-2" value="90">
                    90
                  </option>
                  <option clasName="py-2" value="89">
                    89
                  </option>
                  <option clasName="py-2" value="88">
                    88
                  </option>
                  <option clasName="py-2" value="87">
                    87
                  </option>
                  <option clasName="py-2" value="86">
                    86
                  </option>
                  <option clasName="py-2" value="85">
                    85
                  </option>
                  <option clasName="py-2" value="84">
                    84
                  </option>
                  <option clasName="py-2" value="83">
                    83
                  </option>
                  <option clasName="py-2" value="82">
                    82
                  </option>
                  <option clasName="py-2" value="81">
                    81
                  </option>
                  <option clasName="py-2" value="80">
                    80
                  </option>
                  <option clasName="py-2" value="79">
                    79
                  </option>
                  <option clasName="py-2" value="78">
                    78
                  </option>
                  <option clasName="py-2" value="77">
                    77
                  </option>
                  <option clasName="py-2" value="76">
                    76
                  </option>
                  <option clasName="py-2" value="75">
                    75
                  </option>
                  <option clasName="py-2" value="74">
                    74
                  </option>
                  <option clasName="py-2" value="73">
                    73
                  </option>
                  <option clasName="py-2" value="72">
                    72
                  </option>
                  <option clasName="py-2" value="71">
                    71
                  </option>
                  <option clasName="py-2" value="70">
                    70
                  </option>
                  <option clasName="py-2" value="69">
                    69
                  </option>
                  <option clasName="py-2" value="68">
                    68
                  </option>
                  <option clasName="py-2" value="67">
                    67
                  </option>
                  <option clasName="py-2" value="66">
                    66
                  </option>
                  <option clasName="py-2" value="65">
                    65
                  </option>
                  <option clasName="py-2" value="64">
                    64
                  </option>
                  <option clasName="py-2" value="63">
                    63
                  </option>
                  <option clasName="py-2" value="62">
                    62
                  </option>
                  <option clasName="py-2" value="61">
                    61
                  </option>
                  <option clasName="py-2" value="60">
                    60
                  </option>
                  <option clasName="py-2" value="59">
                    59
                  </option>
                  <option clasName="py-2" value="58">
                    58
                  </option>
                  <option clasName="py-2" value="57">
                    57
                  </option>
                  <option clasName="py-2" value="56">
                    56
                  </option>
                  <option clasName="py-2" value="55">
                    55
                  </option>
                  <option clasName="py-2" value="54">
                    54
                  </option>
                  <option clasName="py-2" value="53">
                    53
                  </option>
                  <option clasName="py-2" value="52">
                    52
                  </option>
                  <option clasName="py-2" value="51">
                    51
                  </option>
                  <option clasName="py-2" value="50">
                    50
                  </option>
                  <option clasName="py-2" value="49">
                    49
                  </option>
                  <option clasName="py-2" value="48">
                    48
                  </option>
                  <option clasName="py-2" value="47">
                    47
                  </option>
                  <option clasName="py-2" value="46">
                    46
                  </option>
                  <option clasName="py-2" value="45">
                    45
                  </option>
                  <option clasName="py-2" value="44">
                    44
                  </option>
                  <option clasName="py-2" value="43">
                    43
                  </option>
                  <option clasName="py-2" value="42">
                    42
                  </option>
                  <option clasName="py-2" value="41">
                    41
                  </option>
                  <option clasName="py-2" value="40">
                    40
                  </option>
                  <option clasName="py-2" value="39">
                    39
                  </option>
                  <option clasName="py-2" value="38">
                    38
                  </option>
                  <option clasName="py-2" value="37">
                    37
                  </option>
                  <option clasName="py-2" value="36">
                    36
                  </option>
                  <option clasName="py-2" value="35">
                    35
                  </option>
                  <option clasName="py-2" value="34">
                    34
                  </option>
                  <option clasName="py-2" value="33">
                    33
                  </option>
                  <option clasName="py-2" value="32">
                    32
                  </option>
                  <option clasName="py-2" value="31">
                    31
                  </option>
                  <option clasName="py-2" value="30">
                    30
                  </option>
                  <option clasName="py-2" value="29">
                    29
                  </option>
                  <option clasName="py-2" value="28">
                    28
                  </option>
                  <option clasName="py-2" value="27">
                    27
                  </option>
                  <option clasName="py-2" value="26">
                    26
                  </option>
                  <option clasName="py-2" value="25">
                    25
                  </option>
                  <option clasName="py-2" value="24">
                    24
                  </option>
                  <option clasName="py-2" value="23">
                    23
                  </option>
                  <option clasName="py-2" value="22">
                    22
                  </option>
                  <option clasName="py-2" value="21">
                    21
                  </option>
                  <option clasName="py-2" value="20">
                    20
                  </option>
                  <option clasName="py-2" value="19">
                    19
                  </option>
                  <option clasName="py-2" value="18">
                    18
                  </option>
                  <option clasName="py-2" value="17">
                    17
                  </option>
                  <option clasName="py-2" value="16">
                    16
                  </option>
                  <option clasName="py-2" value="15">
                    15
                  </option>
                  <option clasName="py-2" value="14">
                    14
                  </option>
                  <option clasName="py-2" value="13">
                    13
                  </option>
                  <option clasName="py-2" value="12">
                    12
                  </option>
                  <option clasName="py-2" value="11">
                    11
                  </option>
                  <option clasName="py-2" value="10">
                    10
                  </option>
                  <option clasName="py-2" value="9">
                    9
                  </option>
                  <option clasName="py-2" value="8">
                    8
                  </option>
                  <option clasName="py-2" value="7">
                    7
                  </option>
                  <option clasName="py-2" value="6">
                    6
                  </option>
                  <option clasName="py-2" value="5">
                    5
                  </option>
                  <option clasName="py-2" value="4">
                    4
                  </option>
                  <option clasName="py-2" value="3">
                    3
                  </option>
                  <option clasName="py-2" value="2">
                    2
                  </option>
                  <option clasName="py-2" value="1">
                    1
                  </option>
                  <option clasName="py-2" value="0">
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
                  <option clasName="py-2" value="99">
                    99
                  </option>
                  <option clasName="py-2" value="98">
                    98
                  </option>
                  <option clasName="py-2" value="97">
                    97
                  </option>
                  <option clasName="py-2" value="96">
                    96
                  </option>
                  <option clasName="py-2" value="95">
                    95
                  </option>
                  <option clasName="py-2" value="94">
                    94
                  </option>
                  <option clasName="py-2" value="93">
                    93
                  </option>
                  <option clasName="py-2" value="92">
                    92
                  </option>
                  <option clasName="py-2" value="91">
                    91
                  </option>
                  <option clasName="py-2" value="90">
                    90
                  </option>
                  <option clasName="py-2" value="89">
                    89
                  </option>
                  <option clasName="py-2" value="88">
                    88
                  </option>
                  <option clasName="py-2" value="87">
                    87
                  </option>
                  <option clasName="py-2" value="86">
                    86
                  </option>
                  <option clasName="py-2" value="85">
                    85
                  </option>
                  <option clasName="py-2" value="84">
                    84
                  </option>
                  <option clasName="py-2" value="83">
                    83
                  </option>
                  <option clasName="py-2" value="82">
                    82
                  </option>
                  <option clasName="py-2" value="81">
                    81
                  </option>
                  <option clasName="py-2" value="80">
                    80
                  </option>
                  <option clasName="py-2" value="79">
                    79
                  </option>
                  <option clasName="py-2" value="78">
                    78
                  </option>
                  <option clasName="py-2" value="77">
                    77
                  </option>
                  <option clasName="py-2" value="76">
                    76
                  </option>
                  <option clasName="py-2" value="75">
                    75
                  </option>
                  <option clasName="py-2" value="74">
                    74
                  </option>
                  <option clasName="py-2" value="73">
                    73
                  </option>
                  <option clasName="py-2" value="72">
                    72
                  </option>
                  <option clasName="py-2" value="71">
                    71
                  </option>
                  <option clasName="py-2" value="70">
                    70
                  </option>
                  <option clasName="py-2" value="69">
                    69
                  </option>
                  <option clasName="py-2" value="68">
                    68
                  </option>
                  <option clasName="py-2" value="67">
                    67
                  </option>
                  <option clasName="py-2" value="66">
                    66
                  </option>
                  <option clasName="py-2" value="65">
                    65
                  </option>
                  <option clasName="py-2" value="64">
                    64
                  </option>
                  <option clasName="py-2" value="63">
                    63
                  </option>
                  <option clasName="py-2" value="62">
                    62
                  </option>
                  <option clasName="py-2" value="61">
                    61
                  </option>
                  <option clasName="py-2" value="60">
                    60
                  </option>
                  <option clasName="py-2" value="59">
                    59
                  </option>
                  <option clasName="py-2" value="58">
                    58
                  </option>
                  <option clasName="py-2" value="57">
                    57
                  </option>
                  <option clasName="py-2" value="56">
                    56
                  </option>
                  <option clasName="py-2" value="55">
                    55
                  </option>
                  <option clasName="py-2" value="54">
                    54
                  </option>
                  <option clasName="py-2" value="53">
                    53
                  </option>
                  <option clasName="py-2" value="52">
                    52
                  </option>
                  <option clasName="py-2" value="51">
                    51
                  </option>
                  <option clasName="py-2" value="50">
                    50
                  </option>
                  <option clasName="py-2" value="49">
                    49
                  </option>
                  <option clasName="py-2" value="48">
                    48
                  </option>
                  <option clasName="py-2" value="47">
                    47
                  </option>
                  <option clasName="py-2" value="46">
                    46
                  </option>
                  <option clasName="py-2" value="45">
                    45
                  </option>
                  <option clasName="py-2" value="44">
                    44
                  </option>
                  <option clasName="py-2" value="43">
                    43
                  </option>
                  <option clasName="py-2" value="42">
                    42
                  </option>
                  <option clasName="py-2" value="41">
                    41
                  </option>
                  <option clasName="py-2" value="40">
                    40
                  </option>
                  <option clasName="py-2" value="39">
                    39
                  </option>
                  <option clasName="py-2" value="38">
                    38
                  </option>
                  <option clasName="py-2" value="37">
                    37
                  </option>
                  <option clasName="py-2" value="36">
                    36
                  </option>
                  <option clasName="py-2" value="35">
                    35
                  </option>
                  <option clasName="py-2" value="34">
                    34
                  </option>
                  <option clasName="py-2" value="33">
                    33
                  </option>
                  <option clasName="py-2" value="32">
                    32
                  </option>
                  <option clasName="py-2" value="31">
                    31
                  </option>
                  <option clasName="py-2" value="30">
                    30
                  </option>
                  <option clasName="py-2" value="29">
                    29
                  </option>
                  <option clasName="py-2" value="28">
                    28
                  </option>
                  <option clasName="py-2" value="27">
                    27
                  </option>
                  <option clasName="py-2" value="26">
                    26
                  </option>
                  <option clasName="py-2" value="25">
                    25
                  </option>
                  <option clasName="py-2" value="24">
                    24
                  </option>
                  <option clasName="py-2" value="23">
                    23
                  </option>
                  <option clasName="py-2" value="22">
                    22
                  </option>
                  <option clasName="py-2" value="21">
                    21
                  </option>
                  <option clasName="py-2" value="20">
                    20
                  </option>
                  <option clasName="py-2" value="19">
                    19
                  </option>
                  <option clasName="py-2" value="18">
                    18
                  </option>
                  <option clasName="py-2" value="17">
                    17
                  </option>
                  <option clasName="py-2" value="16">
                    16
                  </option>
                  <option clasName="py-2" value="15">
                    15
                  </option>
                  <option clasName="py-2" value="14">
                    14
                  </option>
                  <option clasName="py-2" value="13">
                    13
                  </option>
                  <option clasName="py-2" value="12">
                    12
                  </option>
                  <option clasName="py-2" value="11">
                    11
                  </option>
                  <option clasName="py-2" value="10">
                    10
                  </option>
                  <option clasName="py-2" value="9">
                    9
                  </option>
                  <option clasName="py-2" value="8">
                    8
                  </option>
                  <option clasName="py-2" value="7">
                    7
                  </option>
                  <option clasName="py-2" value="6">
                    6
                  </option>
                  <option clasName="py-2" value="5">
                    5
                  </option>
                  <option clasName="py-2" value="4">
                    4
                  </option>
                  <option clasName="py-2" value="3">
                    3
                  </option>
                  <option clasName="py-2" value="2">
                    2
                  </option>
                  <option clasName="py-2" value="1">
                    1
                  </option>
                  <option clasName="py-2" value="0">
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
                  <option clasName="py-2" value="99">
                    99
                  </option>
                  <option clasName="py-2" value="98">
                    98
                  </option>
                  <option clasName="py-2" value="97">
                    97
                  </option>
                  <option clasName="py-2" value="96">
                    96
                  </option>
                  <option clasName="py-2" value="95">
                    95
                  </option>
                  <option clasName="py-2" value="94">
                    94
                  </option>
                  <option clasName="py-2" value="93">
                    93
                  </option>
                  <option clasName="py-2" value="92">
                    92
                  </option>
                  <option clasName="py-2" value="91">
                    91
                  </option>
                  <option clasName="py-2" value="90">
                    90
                  </option>
                  <option clasName="py-2" value="89">
                    89
                  </option>
                  <option clasName="py-2" value="88">
                    88
                  </option>
                  <option clasName="py-2" value="87">
                    87
                  </option>
                  <option clasName="py-2" value="86">
                    86
                  </option>
                  <option clasName="py-2" value="85">
                    85
                  </option>
                  <option clasName="py-2" value="84">
                    84
                  </option>
                  <option clasName="py-2" value="83">
                    83
                  </option>
                  <option clasName="py-2" value="82">
                    82
                  </option>
                  <option clasName="py-2" value="81">
                    81
                  </option>
                  <option clasName="py-2" value="80">
                    80
                  </option>
                  <option clasName="py-2" value="79">
                    79
                  </option>
                  <option clasName="py-2" value="78">
                    78
                  </option>
                  <option clasName="py-2" value="77">
                    77
                  </option>
                  <option clasName="py-2" value="76">
                    76
                  </option>
                  <option clasName="py-2" value="75">
                    75
                  </option>
                  <option clasName="py-2" value="74">
                    74
                  </option>
                  <option clasName="py-2" value="73">
                    73
                  </option>
                  <option clasName="py-2" value="72">
                    72
                  </option>
                  <option clasName="py-2" value="71">
                    71
                  </option>
                  <option clasName="py-2" value="70">
                    70
                  </option>
                  <option clasName="py-2" value="69">
                    69
                  </option>
                  <option clasName="py-2" value="68">
                    68
                  </option>
                  <option clasName="py-2" value="67">
                    67
                  </option>
                  <option clasName="py-2" value="66">
                    66
                  </option>
                  <option clasName="py-2" value="65">
                    65
                  </option>
                  <option clasName="py-2" value="64">
                    64
                  </option>
                  <option clasName="py-2" value="63">
                    63
                  </option>
                  <option clasName="py-2" value="62">
                    62
                  </option>
                  <option clasName="py-2" value="61">
                    61
                  </option>
                  <option clasName="py-2" value="60">
                    60
                  </option>
                  <option clasName="py-2" value="59">
                    59
                  </option>
                  <option clasName="py-2" value="58">
                    58
                  </option>
                  <option clasName="py-2" value="57">
                    57
                  </option>
                  <option clasName="py-2" value="56">
                    56
                  </option>
                  <option clasName="py-2" value="55">
                    55
                  </option>
                  <option clasName="py-2" value="54">
                    54
                  </option>
                  <option clasName="py-2" value="53">
                    53
                  </option>
                  <option clasName="py-2" value="52">
                    52
                  </option>
                  <option clasName="py-2" value="51">
                    51
                  </option>
                  <option clasName="py-2" value="50">
                    50
                  </option>
                  <option clasName="py-2" value="49">
                    49
                  </option>
                  <option clasName="py-2" value="48">
                    48
                  </option>
                  <option clasName="py-2" value="47">
                    47
                  </option>
                  <option clasName="py-2" value="46">
                    46
                  </option>
                  <option clasName="py-2" value="45">
                    45
                  </option>
                  <option clasName="py-2" value="44">
                    44
                  </option>
                  <option clasName="py-2" value="43">
                    43
                  </option>
                  <option clasName="py-2" value="42">
                    42
                  </option>
                  <option clasName="py-2" value="41">
                    41
                  </option>
                  <option clasName="py-2" value="40">
                    40
                  </option>
                  <option clasName="py-2" value="39">
                    39
                  </option>
                  <option clasName="py-2" value="38">
                    38
                  </option>
                  <option clasName="py-2" value="37">
                    37
                  </option>
                  <option clasName="py-2" value="36">
                    36
                  </option>
                  <option clasName="py-2" value="35">
                    35
                  </option>
                  <option clasName="py-2" value="34">
                    34
                  </option>
                  <option clasName="py-2" value="33">
                    33
                  </option>
                  <option clasName="py-2" value="32">
                    32
                  </option>
                  <option clasName="py-2" value="31">
                    31
                  </option>
                  <option clasName="py-2" value="30">
                    30
                  </option>
                  <option clasName="py-2" value="29">
                    29
                  </option>
                  <option clasName="py-2" value="28">
                    28
                  </option>
                  <option clasName="py-2" value="27">
                    27
                  </option>
                  <option clasName="py-2" value="26">
                    26
                  </option>
                  <option clasName="py-2" value="25">
                    25
                  </option>
                  <option clasName="py-2" value="24">
                    24
                  </option>
                  <option clasName="py-2" value="23">
                    23
                  </option>
                  <option clasName="py-2" value="22">
                    22
                  </option>
                  <option clasName="py-2" value="21">
                    21
                  </option>
                  <option clasName="py-2" value="20">
                    20
                  </option>
                  <option clasName="py-2" value="19">
                    19
                  </option>
                  <option clasName="py-2" value="18">
                    18
                  </option>
                  <option clasName="py-2" value="17">
                    17
                  </option>
                  <option clasName="py-2" value="16">
                    16
                  </option>
                  <option clasName="py-2" value="15">
                    15
                  </option>
                  <option clasName="py-2" value="14">
                    14
                  </option>
                  <option clasName="py-2" value="13">
                    13
                  </option>
                  <option clasName="py-2" value="12">
                    12
                  </option>
                  <option clasName="py-2" value="11">
                    11
                  </option>
                  <option clasName="py-2" value="10">
                    10
                  </option>
                  <option clasName="py-2" value="9">
                    9
                  </option>
                  <option clasName="py-2" value="8">
                    8
                  </option>
                  <option clasName="py-2" value="7">
                    7
                  </option>
                  <option clasName="py-2" value="6">
                    6
                  </option>
                  <option clasName="py-2" value="5">
                    5
                  </option>
                  <option clasName="py-2" value="4">
                    4
                  </option>
                  <option clasName="py-2" value="3">
                    3
                  </option>
                  <option clasName="py-2" value="2">
                    2
                  </option>
                  <option clasName="py-2" value="1">
                    1
                  </option>
                  <option clasName="py-2" value="0">
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
                  <option clasName="py-2" value="99">
                    99
                  </option>
                  <option clasName="py-2" value="98">
                    98
                  </option>
                  <option clasName="py-2" value="97">
                    97
                  </option>
                  <option clasName="py-2" value="96">
                    96
                  </option>
                  <option clasName="py-2" value="95">
                    95
                  </option>
                  <option clasName="py-2" value="94">
                    94
                  </option>
                  <option clasName="py-2" value="93">
                    93
                  </option>
                  <option clasName="py-2" value="92">
                    92
                  </option>
                  <option clasName="py-2" value="91">
                    91
                  </option>
                  <option clasName="py-2" value="90">
                    90
                  </option>
                  <option clasName="py-2" value="89">
                    89
                  </option>
                  <option clasName="py-2" value="88">
                    88
                  </option>
                  <option clasName="py-2" value="87">
                    87
                  </option>
                  <option clasName="py-2" value="86">
                    86
                  </option>
                  <option clasName="py-2" value="85">
                    85
                  </option>
                  <option clasName="py-2" value="84">
                    84
                  </option>
                  <option clasName="py-2" value="83">
                    83
                  </option>
                  <option clasName="py-2" value="82">
                    82
                  </option>
                  <option clasName="py-2" value="81">
                    81
                  </option>
                  <option clasName="py-2" value="80">
                    80
                  </option>
                  <option clasName="py-2" value="79">
                    79
                  </option>
                  <option clasName="py-2" value="78">
                    78
                  </option>
                  <option clasName="py-2" value="77">
                    77
                  </option>
                  <option clasName="py-2" value="76">
                    76
                  </option>
                  <option clasName="py-2" value="75">
                    75
                  </option>
                  <option clasName="py-2" value="74">
                    74
                  </option>
                  <option clasName="py-2" value="73">
                    73
                  </option>
                  <option clasName="py-2" value="72">
                    72
                  </option>
                  <option clasName="py-2" value="71">
                    71
                  </option>
                  <option clasName="py-2" value="70">
                    70
                  </option>
                  <option clasName="py-2" value="69">
                    69
                  </option>
                  <option clasName="py-2" value="68">
                    68
                  </option>
                  <option clasName="py-2" value="67">
                    67
                  </option>
                  <option clasName="py-2" value="66">
                    66
                  </option>
                  <option clasName="py-2" value="65">
                    65
                  </option>
                  <option clasName="py-2" value="64">
                    64
                  </option>
                  <option clasName="py-2" value="63">
                    63
                  </option>
                  <option clasName="py-2" value="62">
                    62
                  </option>
                  <option clasName="py-2" value="61">
                    61
                  </option>
                  <option clasName="py-2" value="60">
                    60
                  </option>
                  <option clasName="py-2" value="59">
                    59
                  </option>
                  <option clasName="py-2" value="58">
                    58
                  </option>
                  <option clasName="py-2" value="57">
                    57
                  </option>
                  <option clasName="py-2" value="56">
                    56
                  </option>
                  <option clasName="py-2" value="55">
                    55
                  </option>
                  <option clasName="py-2" value="54">
                    54
                  </option>
                  <option clasName="py-2" value="53">
                    53
                  </option>
                  <option clasName="py-2" value="52">
                    52
                  </option>
                  <option clasName="py-2" value="51">
                    51
                  </option>
                  <option clasName="py-2" value="50">
                    50
                  </option>
                  <option clasName="py-2" value="49">
                    49
                  </option>
                  <option clasName="py-2" value="48">
                    48
                  </option>
                  <option clasName="py-2" value="47">
                    47
                  </option>
                  <option clasName="py-2" value="46">
                    46
                  </option>
                  <option clasName="py-2" value="45">
                    45
                  </option>
                  <option clasName="py-2" value="44">
                    44
                  </option>
                  <option clasName="py-2" value="43">
                    43
                  </option>
                  <option clasName="py-2" value="42">
                    42
                  </option>
                  <option clasName="py-2" value="41">
                    41
                  </option>
                  <option clasName="py-2" value="40">
                    40
                  </option>
                  <option clasName="py-2" value="39">
                    39
                  </option>
                  <option clasName="py-2" value="38">
                    38
                  </option>
                  <option clasName="py-2" value="37">
                    37
                  </option>
                  <option clasName="py-2" value="36">
                    36
                  </option>
                  <option clasName="py-2" value="35">
                    35
                  </option>
                  <option clasName="py-2" value="34">
                    34
                  </option>
                  <option clasName="py-2" value="33">
                    33
                  </option>
                  <option clasName="py-2" value="32">
                    32
                  </option>
                  <option clasName="py-2" value="31">
                    31
                  </option>
                  <option clasName="py-2" value="30">
                    30
                  </option>
                  <option clasName="py-2" value="29">
                    29
                  </option>
                  <option clasName="py-2" value="28">
                    28
                  </option>
                  <option clasName="py-2" value="27">
                    27
                  </option>
                  <option clasName="py-2" value="26">
                    26
                  </option>
                  <option clasName="py-2" value="25">
                    25
                  </option>
                  <option clasName="py-2" value="24">
                    24
                  </option>
                  <option clasName="py-2" value="23">
                    23
                  </option>
                  <option clasName="py-2" value="22">
                    22
                  </option>
                  <option clasName="py-2" value="21">
                    21
                  </option>
                  <option clasName="py-2" value="20">
                    20
                  </option>
                  <option clasName="py-2" value="19">
                    19
                  </option>
                  <option clasName="py-2" value="18">
                    18
                  </option>
                  <option clasName="py-2" value="17">
                    17
                  </option>
                  <option clasName="py-2" value="16">
                    16
                  </option>
                  <option clasName="py-2" value="15">
                    15
                  </option>
                  <option clasName="py-2" value="14">
                    14
                  </option>
                  <option clasName="py-2" value="13">
                    13
                  </option>
                  <option clasName="py-2" value="12">
                    12
                  </option>
                  <option clasName="py-2" value="11">
                    11
                  </option>
                  <option clasName="py-2" value="10">
                    10
                  </option>
                  <option clasName="py-2" value="9">
                    9
                  </option>
                  <option clasName="py-2" value="8">
                    8
                  </option>
                  <option clasName="py-2" value="7">
                    7
                  </option>
                  <option clasName="py-2" value="6">
                    6
                  </option>
                  <option clasName="py-2" value="5">
                    5
                  </option>
                  <option clasName="py-2" value="4">
                    4
                  </option>
                  <option clasName="py-2" value="3">
                    3
                  </option>
                  <option clasName="py-2" value="2">
                    2
                  </option>
                  <option clasName="py-2" value="1">
                    1
                  </option>
                  <option clasName="py-2" value="0">
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
                  <option clasName="py-2" value="99">
                    99
                  </option>
                  <option clasName="py-2" value="98">
                    98
                  </option>
                  <option clasName="py-2" value="97">
                    97
                  </option>
                  <option clasName="py-2" value="96">
                    96
                  </option>
                  <option clasName="py-2" value="95">
                    95
                  </option>
                  <option clasName="py-2" value="94">
                    94
                  </option>
                  <option clasName="py-2" value="93">
                    93
                  </option>
                  <option clasName="py-2" value="92">
                    92
                  </option>
                  <option clasName="py-2" value="91">
                    91
                  </option>
                  <option clasName="py-2" value="90">
                    90
                  </option>
                  <option clasName="py-2" value="89">
                    89
                  </option>
                  <option clasName="py-2" value="88">
                    88
                  </option>
                  <option clasName="py-2" value="87">
                    87
                  </option>
                  <option clasName="py-2" value="86">
                    86
                  </option>
                  <option clasName="py-2" value="85">
                    85
                  </option>
                  <option clasName="py-2" value="84">
                    84
                  </option>
                  <option clasName="py-2" value="83">
                    83
                  </option>
                  <option clasName="py-2" value="82">
                    82
                  </option>
                  <option clasName="py-2" value="81">
                    81
                  </option>
                  <option clasName="py-2" value="80">
                    80
                  </option>
                  <option clasName="py-2" value="79">
                    79
                  </option>
                  <option clasName="py-2" value="78">
                    78
                  </option>
                  <option clasName="py-2" value="77">
                    77
                  </option>
                  <option clasName="py-2" value="76">
                    76
                  </option>
                  <option clasName="py-2" value="75">
                    75
                  </option>
                  <option clasName="py-2" value="74">
                    74
                  </option>
                  <option clasName="py-2" value="73">
                    73
                  </option>
                  <option clasName="py-2" value="72">
                    72
                  </option>
                  <option clasName="py-2" value="71">
                    71
                  </option>
                  <option clasName="py-2" value="70">
                    70
                  </option>
                  <option clasName="py-2" value="69">
                    69
                  </option>
                  <option clasName="py-2" value="68">
                    68
                  </option>
                  <option clasName="py-2" value="67">
                    67
                  </option>
                  <option clasName="py-2" value="66">
                    66
                  </option>
                  <option clasName="py-2" value="65">
                    65
                  </option>
                  <option clasName="py-2" value="64">
                    64
                  </option>
                  <option clasName="py-2" value="63">
                    63
                  </option>
                  <option clasName="py-2" value="62">
                    62
                  </option>
                  <option clasName="py-2" value="61">
                    61
                  </option>
                  <option clasName="py-2" value="60">
                    60
                  </option>
                  <option clasName="py-2" value="59">
                    59
                  </option>
                  <option clasName="py-2" value="58">
                    58
                  </option>
                  <option clasName="py-2" value="57">
                    57
                  </option>
                  <option clasName="py-2" value="56">
                    56
                  </option>
                  <option clasName="py-2" value="55">
                    55
                  </option>
                  <option clasName="py-2" value="54">
                    54
                  </option>
                  <option clasName="py-2" value="53">
                    53
                  </option>
                  <option clasName="py-2" value="52">
                    52
                  </option>
                  <option clasName="py-2" value="51">
                    51
                  </option>
                  <option clasName="py-2" value="50">
                    50
                  </option>
                  <option clasName="py-2" value="49">
                    49
                  </option>
                  <option clasName="py-2" value="48">
                    48
                  </option>
                  <option clasName="py-2" value="47">
                    47
                  </option>
                  <option clasName="py-2" value="46">
                    46
                  </option>
                  <option clasName="py-2" value="45">
                    45
                  </option>
                  <option clasName="py-2" value="44">
                    44
                  </option>
                  <option clasName="py-2" value="43">
                    43
                  </option>
                  <option clasName="py-2" value="42">
                    42
                  </option>
                  <option clasName="py-2" value="41">
                    41
                  </option>
                  <option clasName="py-2" value="40">
                    40
                  </option>
                  <option clasName="py-2" value="39">
                    39
                  </option>
                  <option clasName="py-2" value="38">
                    38
                  </option>
                  <option clasName="py-2" value="37">
                    37
                  </option>
                  <option clasName="py-2" value="36">
                    36
                  </option>
                  <option clasName="py-2" value="35">
                    35
                  </option>
                  <option clasName="py-2" value="34">
                    34
                  </option>
                  <option clasName="py-2" value="33">
                    33
                  </option>
                  <option clasName="py-2" value="32">
                    32
                  </option>
                  <option clasName="py-2" value="31">
                    31
                  </option>
                  <option clasName="py-2" value="30">
                    30
                  </option>
                  <option clasName="py-2" value="29">
                    29
                  </option>
                  <option clasName="py-2" value="28">
                    28
                  </option>
                  <option clasName="py-2" value="27">
                    27
                  </option>
                  <option clasName="py-2" value="26">
                    26
                  </option>
                  <option clasName="py-2" value="25">
                    25
                  </option>
                  <option clasName="py-2" value="24">
                    24
                  </option>
                  <option clasName="py-2" value="23">
                    23
                  </option>
                  <option clasName="py-2" value="22">
                    22
                  </option>
                  <option clasName="py-2" value="21">
                    21
                  </option>
                  <option clasName="py-2" value="20">
                    20
                  </option>
                  <option clasName="py-2" value="19">
                    19
                  </option>
                  <option clasName="py-2" value="18">
                    18
                  </option>
                  <option clasName="py-2" value="17">
                    17
                  </option>
                  <option clasName="py-2" value="16">
                    16
                  </option>
                  <option clasName="py-2" value="15">
                    15
                  </option>
                  <option clasName="py-2" value="14">
                    14
                  </option>
                  <option clasName="py-2" value="13">
                    13
                  </option>
                  <option clasName="py-2" value="12">
                    12
                  </option>
                  <option clasName="py-2" value="11">
                    11
                  </option>
                  <option clasName="py-2" value="10">
                    10
                  </option>
                  <option clasName="py-2" value="9">
                    9
                  </option>
                  <option clasName="py-2" value="8">
                    8
                  </option>
                  <option clasName="py-2" value="7">
                    7
                  </option>
                  <option clasName="py-2" value="6">
                    6
                  </option>
                  <option clasName="py-2" value="5">
                    5
                  </option>
                  <option clasName="py-2" value="4">
                    4
                  </option>
                  <option clasName="py-2" value="3">
                    3
                  </option>
                  <option clasName="py-2" value="2">
                    2
                  </option>
                  <option clasName="py-2" value="1">
                    1
                  </option>
                  <option clasName="py-2" value="0">
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
                  <option clasName="py-2" value="99">
                    99
                  </option>
                  <option clasName="py-2" value="98">
                    98
                  </option>
                  <option clasName="py-2" value="97">
                    97
                  </option>
                  <option clasName="py-2" value="96">
                    96
                  </option>
                  <option clasName="py-2" value="95">
                    95
                  </option>
                  <option clasName="py-2" value="94">
                    94
                  </option>
                  <option clasName="py-2" value="93">
                    93
                  </option>
                  <option clasName="py-2" value="92">
                    92
                  </option>
                  <option clasName="py-2" value="91">
                    91
                  </option>
                  <option clasName="py-2" value="90">
                    90
                  </option>
                  <option clasName="py-2" value="89">
                    89
                  </option>
                  <option clasName="py-2" value="88">
                    88
                  </option>
                  <option clasName="py-2" value="87">
                    87
                  </option>
                  <option clasName="py-2" value="86">
                    86
                  </option>
                  <option clasName="py-2" value="85">
                    85
                  </option>
                  <option clasName="py-2" value="84">
                    84
                  </option>
                  <option clasName="py-2" value="83">
                    83
                  </option>
                  <option clasName="py-2" value="82">
                    82
                  </option>
                  <option clasName="py-2" value="81">
                    81
                  </option>
                  <option clasName="py-2" value="80">
                    80
                  </option>
                  <option clasName="py-2" value="79">
                    79
                  </option>
                  <option clasName="py-2" value="78">
                    78
                  </option>
                  <option clasName="py-2" value="77">
                    77
                  </option>
                  <option clasName="py-2" value="76">
                    76
                  </option>
                  <option clasName="py-2" value="75">
                    75
                  </option>
                  <option clasName="py-2" value="74">
                    74
                  </option>
                  <option clasName="py-2" value="73">
                    73
                  </option>
                  <option clasName="py-2" value="72">
                    72
                  </option>
                  <option clasName="py-2" value="71">
                    71
                  </option>
                  <option clasName="py-2" value="70">
                    70
                  </option>
                  <option clasName="py-2" value="69">
                    69
                  </option>
                  <option clasName="py-2" value="68">
                    68
                  </option>
                  <option clasName="py-2" value="67">
                    67
                  </option>
                  <option clasName="py-2" value="66">
                    66
                  </option>
                  <option clasName="py-2" value="65">
                    65
                  </option>
                  <option clasName="py-2" value="64">
                    64
                  </option>
                  <option clasName="py-2" value="63">
                    63
                  </option>
                  <option clasName="py-2" value="62">
                    62
                  </option>
                  <option clasName="py-2" value="61">
                    61
                  </option>
                  <option clasName="py-2" value="60">
                    60
                  </option>
                  <option clasName="py-2" value="59">
                    59
                  </option>
                  <option clasName="py-2" value="58">
                    58
                  </option>
                  <option clasName="py-2" value="57">
                    57
                  </option>
                  <option clasName="py-2" value="56">
                    56
                  </option>
                  <option clasName="py-2" value="55">
                    55
                  </option>
                  <option clasName="py-2" value="54">
                    54
                  </option>
                  <option clasName="py-2" value="53">
                    53
                  </option>
                  <option clasName="py-2" value="52">
                    52
                  </option>
                  <option clasName="py-2" value="51">
                    51
                  </option>
                  <option clasName="py-2" value="50">
                    50
                  </option>
                  <option clasName="py-2" value="49">
                    49
                  </option>
                  <option clasName="py-2" value="48">
                    48
                  </option>
                  <option clasName="py-2" value="47">
                    47
                  </option>
                  <option clasName="py-2" value="46">
                    46
                  </option>
                  <option clasName="py-2" value="45">
                    45
                  </option>
                  <option clasName="py-2" value="44">
                    44
                  </option>
                  <option clasName="py-2" value="43">
                    43
                  </option>
                  <option clasName="py-2" value="42">
                    42
                  </option>
                  <option clasName="py-2" value="41">
                    41
                  </option>
                  <option clasName="py-2" value="40">
                    40
                  </option>
                  <option clasName="py-2" value="39">
                    39
                  </option>
                  <option clasName="py-2" value="38">
                    38
                  </option>
                  <option clasName="py-2" value="37">
                    37
                  </option>
                  <option clasName="py-2" value="36">
                    36
                  </option>
                  <option clasName="py-2" value="35">
                    35
                  </option>
                  <option clasName="py-2" value="34">
                    34
                  </option>
                  <option clasName="py-2" value="33">
                    33
                  </option>
                  <option clasName="py-2" value="32">
                    32
                  </option>
                  <option clasName="py-2" value="31">
                    31
                  </option>
                  <option clasName="py-2" value="30">
                    30
                  </option>
                  <option clasName="py-2" value="29">
                    29
                  </option>
                  <option clasName="py-2" value="28">
                    28
                  </option>
                  <option clasName="py-2" value="27">
                    27
                  </option>
                  <option clasName="py-2" value="26">
                    26
                  </option>
                  <option clasName="py-2" value="25">
                    25
                  </option>
                  <option clasName="py-2" value="24">
                    24
                  </option>
                  <option clasName="py-2" value="23">
                    23
                  </option>
                  <option clasName="py-2" value="22">
                    22
                  </option>
                  <option clasName="py-2" value="21">
                    21
                  </option>
                  <option clasName="py-2" value="20">
                    20
                  </option>
                  <option clasName="py-2" value="19">
                    19
                  </option>
                  <option clasName="py-2" value="18">
                    18
                  </option>
                  <option clasName="py-2" value="17">
                    17
                  </option>
                  <option clasName="py-2" value="16">
                    16
                  </option>
                  <option clasName="py-2" value="15">
                    15
                  </option>
                  <option clasName="py-2" value="14">
                    14
                  </option>
                  <option clasName="py-2" value="13">
                    13
                  </option>
                  <option clasName="py-2" value="12">
                    12
                  </option>
                  <option clasName="py-2" value="11">
                    11
                  </option>
                  <option clasName="py-2" value="10">
                    10
                  </option>
                  <option clasName="py-2" value="9">
                    9
                  </option>
                  <option clasName="py-2" value="8">
                    8
                  </option>
                  <option clasName="py-2" value="7">
                    7
                  </option>
                  <option clasName="py-2" value="6">
                    6
                  </option>
                  <option clasName="py-2" value="5">
                    5
                  </option>
                  <option clasName="py-2" value="4">
                    4
                  </option>
                  <option clasName="py-2" value="3">
                    3
                  </option>
                  <option clasName="py-2" value="2">
                    2
                  </option>
                  <option clasName="py-2" value="1">
                    1
                  </option>
                  <option clasName="py-2" value="0">
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
                  <option clasName="py-2" value="99">
                    99
                  </option>
                  <option clasName="py-2" value="98">
                    98
                  </option>
                  <option clasName="py-2" value="97">
                    97
                  </option>
                  <option clasName="py-2" value="96">
                    96
                  </option>
                  <option clasName="py-2" value="95">
                    95
                  </option>
                  <option clasName="py-2" value="94">
                    94
                  </option>
                  <option clasName="py-2" value="93">
                    93
                  </option>
                  <option clasName="py-2" value="92">
                    92
                  </option>
                  <option clasName="py-2" value="91">
                    91
                  </option>
                  <option clasName="py-2" value="90">
                    90
                  </option>
                  <option clasName="py-2" value="89">
                    89
                  </option>
                  <option clasName="py-2" value="88">
                    88
                  </option>
                  <option clasName="py-2" value="87">
                    87
                  </option>
                  <option clasName="py-2" value="86">
                    86
                  </option>
                  <option clasName="py-2" value="85">
                    85
                  </option>
                  <option clasName="py-2" value="84">
                    84
                  </option>
                  <option clasName="py-2" value="83">
                    83
                  </option>
                  <option clasName="py-2" value="82">
                    82
                  </option>
                  <option clasName="py-2" value="81">
                    81
                  </option>
                  <option clasName="py-2" value="80">
                    80
                  </option>
                  <option clasName="py-2" value="79">
                    79
                  </option>
                  <option clasName="py-2" value="78">
                    78
                  </option>
                  <option clasName="py-2" value="77">
                    77
                  </option>
                  <option clasName="py-2" value="76">
                    76
                  </option>
                  <option clasName="py-2" value="75">
                    75
                  </option>
                  <option clasName="py-2" value="74">
                    74
                  </option>
                  <option clasName="py-2" value="73">
                    73
                  </option>
                  <option clasName="py-2" value="72">
                    72
                  </option>
                  <option clasName="py-2" value="71">
                    71
                  </option>
                  <option clasName="py-2" value="70">
                    70
                  </option>
                  <option clasName="py-2" value="69">
                    69
                  </option>
                  <option clasName="py-2" value="68">
                    68
                  </option>
                  <option clasName="py-2" value="67">
                    67
                  </option>
                  <option clasName="py-2" value="66">
                    66
                  </option>
                  <option clasName="py-2" value="65">
                    65
                  </option>
                  <option clasName="py-2" value="64">
                    64
                  </option>
                  <option clasName="py-2" value="63">
                    63
                  </option>
                  <option clasName="py-2" value="62">
                    62
                  </option>
                  <option clasName="py-2" value="61">
                    61
                  </option>
                  <option clasName="py-2" value="60">
                    60
                  </option>
                  <option clasName="py-2" value="59">
                    59
                  </option>
                  <option clasName="py-2" value="58">
                    58
                  </option>
                  <option clasName="py-2" value="57">
                    57
                  </option>
                  <option clasName="py-2" value="56">
                    56
                  </option>
                  <option clasName="py-2" value="55">
                    55
                  </option>
                  <option clasName="py-2" value="54">
                    54
                  </option>
                  <option clasName="py-2" value="53">
                    53
                  </option>
                  <option clasName="py-2" value="52">
                    52
                  </option>
                  <option clasName="py-2" value="51">
                    51
                  </option>
                  <option clasName="py-2" value="50">
                    50
                  </option>
                  <option clasName="py-2" value="49">
                    49
                  </option>
                  <option clasName="py-2" value="48">
                    48
                  </option>
                  <option clasName="py-2" value="47">
                    47
                  </option>
                  <option clasName="py-2" value="46">
                    46
                  </option>
                  <option clasName="py-2" value="45">
                    45
                  </option>
                  <option clasName="py-2" value="44">
                    44
                  </option>
                  <option clasName="py-2" value="43">
                    43
                  </option>
                  <option clasName="py-2" value="42">
                    42
                  </option>
                  <option clasName="py-2" value="41">
                    41
                  </option>
                  <option clasName="py-2" value="40">
                    40
                  </option>
                  <option clasName="py-2" value="39">
                    39
                  </option>
                  <option clasName="py-2" value="38">
                    38
                  </option>
                  <option clasName="py-2" value="37">
                    37
                  </option>
                  <option clasName="py-2" value="36">
                    36
                  </option>
                  <option clasName="py-2" value="35">
                    35
                  </option>
                  <option clasName="py-2" value="34">
                    34
                  </option>
                  <option clasName="py-2" value="33">
                    33
                  </option>
                  <option clasName="py-2" value="32">
                    32
                  </option>
                  <option clasName="py-2" value="31">
                    31
                  </option>
                  <option clasName="py-2" value="30">
                    30
                  </option>
                  <option clasName="py-2" value="29">
                    29
                  </option>
                  <option clasName="py-2" value="28">
                    28
                  </option>
                  <option clasName="py-2" value="27">
                    27
                  </option>
                  <option clasName="py-2" value="26">
                    26
                  </option>
                  <option clasName="py-2" value="25">
                    25
                  </option>
                  <option clasName="py-2" value="24">
                    24
                  </option>
                  <option clasName="py-2" value="23">
                    23
                  </option>
                  <option clasName="py-2" value="22">
                    22
                  </option>
                  <option clasName="py-2" value="21">
                    21
                  </option>
                  <option clasName="py-2" value="20">
                    20
                  </option>
                  <option clasName="py-2" value="19">
                    19
                  </option>
                  <option clasName="py-2" value="18">
                    18
                  </option>
                  <option clasName="py-2" value="17">
                    17
                  </option>
                  <option clasName="py-2" value="16">
                    16
                  </option>
                  <option clasName="py-2" value="15">
                    15
                  </option>
                  <option clasName="py-2" value="14">
                    14
                  </option>
                  <option clasName="py-2" value="13">
                    13
                  </option>
                  <option clasName="py-2" value="12">
                    12
                  </option>
                  <option clasName="py-2" value="11">
                    11
                  </option>
                  <option clasName="py-2" value="10">
                    10
                  </option>
                  <option clasName="py-2" value="9">
                    9
                  </option>
                  <option clasName="py-2" value="8">
                    8
                  </option>
                  <option clasName="py-2" value="7">
                    7
                  </option>
                  <option clasName="py-2" value="6">
                    6
                  </option>
                  <option clasName="py-2" value="5">
                    5
                  </option>
                  <option clasName="py-2" value="4">
                    4
                  </option>
                  <option clasName="py-2" value="3">
                    3
                  </option>
                  <option clasName="py-2" value="2">
                    2
                  </option>
                  <option clasName="py-2" value="1">
                    1
                  </option>
                  <option clasName="py-2" value="0">
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
                  <option clasName="py-2" value="99">
                    99
                  </option>
                  <option clasName="py-2" value="98">
                    98
                  </option>
                  <option clasName="py-2" value="97">
                    97
                  </option>
                  <option clasName="py-2" value="96">
                    96
                  </option>
                  <option clasName="py-2" value="95">
                    95
                  </option>
                  <option clasName="py-2" value="94">
                    94
                  </option>
                  <option clasName="py-2" value="93">
                    93
                  </option>
                  <option clasName="py-2" value="92">
                    92
                  </option>
                  <option clasName="py-2" value="91">
                    91
                  </option>
                  <option clasName="py-2" value="90">
                    90
                  </option>
                  <option clasName="py-2" value="89">
                    89
                  </option>
                  <option clasName="py-2" value="88">
                    88
                  </option>
                  <option clasName="py-2" value="87">
                    87
                  </option>
                  <option clasName="py-2" value="86">
                    86
                  </option>
                  <option clasName="py-2" value="85">
                    85
                  </option>
                  <option clasName="py-2" value="84">
                    84
                  </option>
                  <option clasName="py-2" value="83">
                    83
                  </option>
                  <option clasName="py-2" value="82">
                    82
                  </option>
                  <option clasName="py-2" value="81">
                    81
                  </option>
                  <option clasName="py-2" value="80">
                    80
                  </option>
                  <option clasName="py-2" value="79">
                    79
                  </option>
                  <option clasName="py-2" value="78">
                    78
                  </option>
                  <option clasName="py-2" value="77">
                    77
                  </option>
                  <option clasName="py-2" value="76">
                    76
                  </option>
                  <option clasName="py-2" value="75">
                    75
                  </option>
                  <option clasName="py-2" value="74">
                    74
                  </option>
                  <option clasName="py-2" value="73">
                    73
                  </option>
                  <option clasName="py-2" value="72">
                    72
                  </option>
                  <option clasName="py-2" value="71">
                    71
                  </option>
                  <option clasName="py-2" value="70">
                    70
                  </option>
                  <option clasName="py-2" value="69">
                    69
                  </option>
                  <option clasName="py-2" value="68">
                    68
                  </option>
                  <option clasName="py-2" value="67">
                    67
                  </option>
                  <option clasName="py-2" value="66">
                    66
                  </option>
                  <option clasName="py-2" value="65">
                    65
                  </option>
                  <option clasName="py-2" value="64">
                    64
                  </option>
                  <option clasName="py-2" value="63">
                    63
                  </option>
                  <option clasName="py-2" value="62">
                    62
                  </option>
                  <option clasName="py-2" value="61">
                    61
                  </option>
                  <option clasName="py-2" value="60">
                    60
                  </option>
                  <option clasName="py-2" value="59">
                    59
                  </option>
                  <option clasName="py-2" value="58">
                    58
                  </option>
                  <option clasName="py-2" value="57">
                    57
                  </option>
                  <option clasName="py-2" value="56">
                    56
                  </option>
                  <option clasName="py-2" value="55">
                    55
                  </option>
                  <option clasName="py-2" value="54">
                    54
                  </option>
                  <option clasName="py-2" value="53">
                    53
                  </option>
                  <option clasName="py-2" value="52">
                    52
                  </option>
                  <option clasName="py-2" value="51">
                    51
                  </option>
                  <option clasName="py-2" value="50">
                    50
                  </option>
                  <option clasName="py-2" value="49">
                    49
                  </option>
                  <option clasName="py-2" value="48">
                    48
                  </option>
                  <option clasName="py-2" value="47">
                    47
                  </option>
                  <option clasName="py-2" value="46">
                    46
                  </option>
                  <option clasName="py-2" value="45">
                    45
                  </option>
                  <option clasName="py-2" value="44">
                    44
                  </option>
                  <option clasName="py-2" value="43">
                    43
                  </option>
                  <option clasName="py-2" value="42">
                    42
                  </option>
                  <option clasName="py-2" value="41">
                    41
                  </option>
                  <option clasName="py-2" value="40">
                    40
                  </option>
                  <option clasName="py-2" value="39">
                    39
                  </option>
                  <option clasName="py-2" value="38">
                    38
                  </option>
                  <option clasName="py-2" value="37">
                    37
                  </option>
                  <option clasName="py-2" value="36">
                    36
                  </option>
                  <option clasName="py-2" value="35">
                    35
                  </option>
                  <option clasName="py-2" value="34">
                    34
                  </option>
                  <option clasName="py-2" value="33">
                    33
                  </option>
                  <option clasName="py-2" value="32">
                    32
                  </option>
                  <option clasName="py-2" value="31">
                    31
                  </option>
                  <option clasName="py-2" value="30">
                    30
                  </option>
                  <option clasName="py-2" value="29">
                    29
                  </option>
                  <option clasName="py-2" value="28">
                    28
                  </option>
                  <option clasName="py-2" value="27">
                    27
                  </option>
                  <option clasName="py-2" value="26">
                    26
                  </option>
                  <option clasName="py-2" value="25">
                    25
                  </option>
                  <option clasName="py-2" value="24">
                    24
                  </option>
                  <option clasName="py-2" value="23">
                    23
                  </option>
                  <option clasName="py-2" value="22">
                    22
                  </option>
                  <option clasName="py-2" value="21">
                    21
                  </option>
                  <option clasName="py-2" value="20">
                    20
                  </option>
                  <option clasName="py-2" value="19">
                    19
                  </option>
                  <option clasName="py-2" value="18">
                    18
                  </option>
                  <option clasName="py-2" value="17">
                    17
                  </option>
                  <option clasName="py-2" value="16">
                    16
                  </option>
                  <option clasName="py-2" value="15">
                    15
                  </option>
                  <option clasName="py-2" value="14">
                    14
                  </option>
                  <option clasName="py-2" value="13">
                    13
                  </option>
                  <option clasName="py-2" value="12">
                    12
                  </option>
                  <option clasName="py-2" value="11">
                    11
                  </option>
                  <option clasName="py-2" value="10">
                    10
                  </option>
                  <option clasName="py-2" value="9">
                    9
                  </option>
                  <option clasName="py-2" value="8">
                    8
                  </option>
                  <option clasName="py-2" value="7">
                    7
                  </option>
                  <option clasName="py-2" value="6">
                    6
                  </option>
                  <option clasName="py-2" value="5">
                    5
                  </option>
                  <option clasName="py-2" value="4">
                    4
                  </option>
                  <option clasName="py-2" value="3">
                    3
                  </option>
                  <option clasName="py-2" value="2">
                    2
                  </option>
                  <option clasName="py-2" value="1">
                    1
                  </option>
                  <option clasName="py-2" value="0">
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
                  <option clasName="py-2" value="99">
                    99
                  </option>
                  <option clasName="py-2" value="98">
                    98
                  </option>
                  <option clasName="py-2" value="97">
                    97
                  </option>
                  <option clasName="py-2" value="96">
                    96
                  </option>
                  <option clasName="py-2" value="95">
                    95
                  </option>
                  <option clasName="py-2" value="94">
                    94
                  </option>
                  <option clasName="py-2" value="93">
                    93
                  </option>
                  <option clasName="py-2" value="92">
                    92
                  </option>
                  <option clasName="py-2" value="91">
                    91
                  </option>
                  <option clasName="py-2" value="90">
                    90
                  </option>
                  <option clasName="py-2" value="89">
                    89
                  </option>
                  <option clasName="py-2" value="88">
                    88
                  </option>
                  <option clasName="py-2" value="87">
                    87
                  </option>
                  <option clasName="py-2" value="86">
                    86
                  </option>
                  <option clasName="py-2" value="85">
                    85
                  </option>
                  <option clasName="py-2" value="84">
                    84
                  </option>
                  <option clasName="py-2" value="83">
                    83
                  </option>
                  <option clasName="py-2" value="82">
                    82
                  </option>
                  <option clasName="py-2" value="81">
                    81
                  </option>
                  <option clasName="py-2" value="80">
                    80
                  </option>
                  <option clasName="py-2" value="79">
                    79
                  </option>
                  <option clasName="py-2" value="78">
                    78
                  </option>
                  <option clasName="py-2" value="77">
                    77
                  </option>
                  <option clasName="py-2" value="76">
                    76
                  </option>
                  <option clasName="py-2" value="75">
                    75
                  </option>
                  <option clasName="py-2" value="74">
                    74
                  </option>
                  <option clasName="py-2" value="73">
                    73
                  </option>
                  <option clasName="py-2" value="72">
                    72
                  </option>
                  <option clasName="py-2" value="71">
                    71
                  </option>
                  <option clasName="py-2" value="70">
                    70
                  </option>
                  <option clasName="py-2" value="69">
                    69
                  </option>
                  <option clasName="py-2" value="68">
                    68
                  </option>
                  <option clasName="py-2" value="67">
                    67
                  </option>
                  <option clasName="py-2" value="66">
                    66
                  </option>
                  <option clasName="py-2" value="65">
                    65
                  </option>
                  <option clasName="py-2" value="64">
                    64
                  </option>
                  <option clasName="py-2" value="63">
                    63
                  </option>
                  <option clasName="py-2" value="62">
                    62
                  </option>
                  <option clasName="py-2" value="61">
                    61
                  </option>
                  <option clasName="py-2" value="60">
                    60
                  </option>
                  <option clasName="py-2" value="59">
                    59
                  </option>
                  <option clasName="py-2" value="58">
                    58
                  </option>
                  <option clasName="py-2" value="57">
                    57
                  </option>
                  <option clasName="py-2" value="56">
                    56
                  </option>
                  <option clasName="py-2" value="55">
                    55
                  </option>
                  <option clasName="py-2" value="54">
                    54
                  </option>
                  <option clasName="py-2" value="53">
                    53
                  </option>
                  <option clasName="py-2" value="52">
                    52
                  </option>
                  <option clasName="py-2" value="51">
                    51
                  </option>
                  <option clasName="py-2" value="50">
                    50
                  </option>
                  <option clasName="py-2" value="49">
                    49
                  </option>
                  <option clasName="py-2" value="48">
                    48
                  </option>
                  <option clasName="py-2" value="47">
                    47
                  </option>
                  <option clasName="py-2" value="46">
                    46
                  </option>
                  <option clasName="py-2" value="45">
                    45
                  </option>
                  <option clasName="py-2" value="44">
                    44
                  </option>
                  <option clasName="py-2" value="43">
                    43
                  </option>
                  <option clasName="py-2" value="42">
                    42
                  </option>
                  <option clasName="py-2" value="41">
                    41
                  </option>
                  <option clasName="py-2" value="40">
                    40
                  </option>
                  <option clasName="py-2" value="39">
                    39
                  </option>
                  <option clasName="py-2" value="38">
                    38
                  </option>
                  <option clasName="py-2" value="37">
                    37
                  </option>
                  <option clasName="py-2" value="36">
                    36
                  </option>
                  <option clasName="py-2" value="35">
                    35
                  </option>
                  <option clasName="py-2" value="34">
                    34
                  </option>
                  <option clasName="py-2" value="33">
                    33
                  </option>
                  <option clasName="py-2" value="32">
                    32
                  </option>
                  <option clasName="py-2" value="31">
                    31
                  </option>
                  <option clasName="py-2" value="30">
                    30
                  </option>
                  <option clasName="py-2" value="29">
                    29
                  </option>
                  <option clasName="py-2" value="28">
                    28
                  </option>
                  <option clasName="py-2" value="27">
                    27
                  </option>
                  <option clasName="py-2" value="26">
                    26
                  </option>
                  <option clasName="py-2" value="25">
                    25
                  </option>
                  <option clasName="py-2" value="24">
                    24
                  </option>
                  <option clasName="py-2" value="23">
                    23
                  </option>
                  <option clasName="py-2" value="22">
                    22
                  </option>
                  <option clasName="py-2" value="21">
                    21
                  </option>
                  <option clasName="py-2" value="20">
                    20
                  </option>
                  <option clasName="py-2" value="19">
                    19
                  </option>
                  <option clasName="py-2" value="18">
                    18
                  </option>
                  <option clasName="py-2" value="17">
                    17
                  </option>
                  <option clasName="py-2" value="16">
                    16
                  </option>
                  <option clasName="py-2" value="15">
                    15
                  </option>
                  <option clasName="py-2" value="14">
                    14
                  </option>
                  <option clasName="py-2" value="13">
                    13
                  </option>
                  <option clasName="py-2" value="12">
                    12
                  </option>
                  <option clasName="py-2" value="11">
                    11
                  </option>
                  <option clasName="py-2" value="10">
                    10
                  </option>
                  <option clasName="py-2" value="9">
                    9
                  </option>
                  <option clasName="py-2" value="8">
                    8
                  </option>
                  <option clasName="py-2" value="7">
                    7
                  </option>
                  <option clasName="py-2" value="6">
                    6
                  </option>
                  <option clasName="py-2" value="5">
                    5
                  </option>
                  <option clasName="py-2" value="4">
                    4
                  </option>
                  <option clasName="py-2" value="3">
                    3
                  </option>
                  <option clasName="py-2" value="2">
                    2
                  </option>
                  <option clasName="py-2" value="1">
                    1
                  </option>
                  <option clasName="py-2" value="0">
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
                  <option clasName="py-2" value="99">
                    99
                  </option>
                  <option clasName="py-2" value="98">
                    98
                  </option>
                  <option clasName="py-2" value="97">
                    97
                  </option>
                  <option clasName="py-2" value="96">
                    96
                  </option>
                  <option clasName="py-2" value="95">
                    95
                  </option>
                  <option clasName="py-2" value="94">
                    94
                  </option>
                  <option clasName="py-2" value="93">
                    93
                  </option>
                  <option clasName="py-2" value="92">
                    92
                  </option>
                  <option clasName="py-2" value="91">
                    91
                  </option>
                  <option clasName="py-2" value="90">
                    90
                  </option>
                  <option clasName="py-2" value="89">
                    89
                  </option>
                  <option clasName="py-2" value="88">
                    88
                  </option>
                  <option clasName="py-2" value="87">
                    87
                  </option>
                  <option clasName="py-2" value="86">
                    86
                  </option>
                  <option clasName="py-2" value="85">
                    85
                  </option>
                  <option clasName="py-2" value="84">
                    84
                  </option>
                  <option clasName="py-2" value="83">
                    83
                  </option>
                  <option clasName="py-2" value="82">
                    82
                  </option>
                  <option clasName="py-2" value="81">
                    81
                  </option>
                  <option clasName="py-2" value="80">
                    80
                  </option>
                  <option clasName="py-2" value="79">
                    79
                  </option>
                  <option clasName="py-2" value="78">
                    78
                  </option>
                  <option clasName="py-2" value="77">
                    77
                  </option>
                  <option clasName="py-2" value="76">
                    76
                  </option>
                  <option clasName="py-2" value="75">
                    75
                  </option>
                  <option clasName="py-2" value="74">
                    74
                  </option>
                  <option clasName="py-2" value="73">
                    73
                  </option>
                  <option clasName="py-2" value="72">
                    72
                  </option>
                  <option clasName="py-2" value="71">
                    71
                  </option>
                  <option clasName="py-2" value="70">
                    70
                  </option>
                  <option clasName="py-2" value="69">
                    69
                  </option>
                  <option clasName="py-2" value="68">
                    68
                  </option>
                  <option clasName="py-2" value="67">
                    67
                  </option>
                  <option clasName="py-2" value="66">
                    66
                  </option>
                  <option clasName="py-2" value="65">
                    65
                  </option>
                  <option clasName="py-2" value="64">
                    64
                  </option>
                  <option clasName="py-2" value="63">
                    63
                  </option>
                  <option clasName="py-2" value="62">
                    62
                  </option>
                  <option clasName="py-2" value="61">
                    61
                  </option>
                  <option clasName="py-2" value="60">
                    60
                  </option>
                  <option clasName="py-2" value="59">
                    59
                  </option>
                  <option clasName="py-2" value="58">
                    58
                  </option>
                  <option clasName="py-2" value="57">
                    57
                  </option>
                  <option clasName="py-2" value="56">
                    56
                  </option>
                  <option clasName="py-2" value="55">
                    55
                  </option>
                  <option clasName="py-2" value="54">
                    54
                  </option>
                  <option clasName="py-2" value="53">
                    53
                  </option>
                  <option clasName="py-2" value="52">
                    52
                  </option>
                  <option clasName="py-2" value="51">
                    51
                  </option>
                  <option clasName="py-2" value="50">
                    50
                  </option>
                  <option clasName="py-2" value="49">
                    49
                  </option>
                  <option clasName="py-2" value="48">
                    48
                  </option>
                  <option clasName="py-2" value="47">
                    47
                  </option>
                  <option clasName="py-2" value="46">
                    46
                  </option>
                  <option clasName="py-2" value="45">
                    45
                  </option>
                  <option clasName="py-2" value="44">
                    44
                  </option>
                  <option clasName="py-2" value="43">
                    43
                  </option>
                  <option clasName="py-2" value="42">
                    42
                  </option>
                  <option clasName="py-2" value="41">
                    41
                  </option>
                  <option clasName="py-2" value="40">
                    40
                  </option>
                  <option clasName="py-2" value="39">
                    39
                  </option>
                  <option clasName="py-2" value="38">
                    38
                  </option>
                  <option clasName="py-2" value="37">
                    37
                  </option>
                  <option clasName="py-2" value="36">
                    36
                  </option>
                  <option clasName="py-2" value="35">
                    35
                  </option>
                  <option clasName="py-2" value="34">
                    34
                  </option>
                  <option clasName="py-2" value="33">
                    33
                  </option>
                  <option clasName="py-2" value="32">
                    32
                  </option>
                  <option clasName="py-2" value="31">
                    31
                  </option>
                  <option clasName="py-2" value="30">
                    30
                  </option>
                  <option clasName="py-2" value="29">
                    29
                  </option>
                  <option clasName="py-2" value="28">
                    28
                  </option>
                  <option clasName="py-2" value="27">
                    27
                  </option>
                  <option clasName="py-2" value="26">
                    26
                  </option>
                  <option clasName="py-2" value="25">
                    25
                  </option>
                  <option clasName="py-2" value="24">
                    24
                  </option>
                  <option clasName="py-2" value="23">
                    23
                  </option>
                  <option clasName="py-2" value="22">
                    22
                  </option>
                  <option clasName="py-2" value="21">
                    21
                  </option>
                  <option clasName="py-2" value="20">
                    20
                  </option>
                  <option clasName="py-2" value="19">
                    19
                  </option>
                  <option clasName="py-2" value="18">
                    18
                  </option>
                  <option clasName="py-2" value="17">
                    17
                  </option>
                  <option clasName="py-2" value="16">
                    16
                  </option>
                  <option clasName="py-2" value="15">
                    15
                  </option>
                  <option clasName="py-2" value="14">
                    14
                  </option>
                  <option clasName="py-2" value="13">
                    13
                  </option>
                  <option clasName="py-2" value="12">
                    12
                  </option>
                  <option clasName="py-2" value="11">
                    11
                  </option>
                  <option clasName="py-2" value="10">
                    10
                  </option>
                  <option clasName="py-2" value="9">
                    9
                  </option>
                  <option clasName="py-2" value="8">
                    8
                  </option>
                  <option clasName="py-2" value="7">
                    7
                  </option>
                  <option clasName="py-2" value="6">
                    6
                  </option>
                  <option clasName="py-2" value="5">
                    5
                  </option>
                  <option clasName="py-2" value="4">
                    4
                  </option>
                  <option clasName="py-2" value="3">
                    3
                  </option>
                  <option clasName="py-2" value="2">
                    2
                  </option>
                  <option clasName="py-2" value="1">
                    1
                  </option>
                  <option clasName="py-2" value="0">
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
                  <option clasName="py-2" value="99">
                    99
                  </option>
                  <option clasName="py-2" value="98">
                    98
                  </option>
                  <option clasName="py-2" value="97">
                    97
                  </option>
                  <option clasName="py-2" value="96">
                    96
                  </option>
                  <option clasName="py-2" value="95">
                    95
                  </option>
                  <option clasName="py-2" value="94">
                    94
                  </option>
                  <option clasName="py-2" value="93">
                    93
                  </option>
                  <option clasName="py-2" value="92">
                    92
                  </option>
                  <option clasName="py-2" value="91">
                    91
                  </option>
                  <option clasName="py-2" value="90">
                    90
                  </option>
                  <option clasName="py-2" value="89">
                    89
                  </option>
                  <option clasName="py-2" value="88">
                    88
                  </option>
                  <option clasName="py-2" value="87">
                    87
                  </option>
                  <option clasName="py-2" value="86">
                    86
                  </option>
                  <option clasName="py-2" value="85">
                    85
                  </option>
                  <option clasName="py-2" value="84">
                    84
                  </option>
                  <option clasName="py-2" value="83">
                    83
                  </option>
                  <option clasName="py-2" value="82">
                    82
                  </option>
                  <option clasName="py-2" value="81">
                    81
                  </option>
                  <option clasName="py-2" value="80">
                    80
                  </option>
                  <option clasName="py-2" value="79">
                    79
                  </option>
                  <option clasName="py-2" value="78">
                    78
                  </option>
                  <option clasName="py-2" value="77">
                    77
                  </option>
                  <option clasName="py-2" value="76">
                    76
                  </option>
                  <option clasName="py-2" value="75">
                    75
                  </option>
                  <option clasName="py-2" value="74">
                    74
                  </option>
                  <option clasName="py-2" value="73">
                    73
                  </option>
                  <option clasName="py-2" value="72">
                    72
                  </option>
                  <option clasName="py-2" value="71">
                    71
                  </option>
                  <option clasName="py-2" value="70">
                    70
                  </option>
                  <option clasName="py-2" value="69">
                    69
                  </option>
                  <option clasName="py-2" value="68">
                    68
                  </option>
                  <option clasName="py-2" value="67">
                    67
                  </option>
                  <option clasName="py-2" value="66">
                    66
                  </option>
                  <option clasName="py-2" value="65">
                    65
                  </option>
                  <option clasName="py-2" value="64">
                    64
                  </option>
                  <option clasName="py-2" value="63">
                    63
                  </option>
                  <option clasName="py-2" value="62">
                    62
                  </option>
                  <option clasName="py-2" value="61">
                    61
                  </option>
                  <option clasName="py-2" value="60">
                    60
                  </option>
                  <option clasName="py-2" value="59">
                    59
                  </option>
                  <option clasName="py-2" value="58">
                    58
                  </option>
                  <option clasName="py-2" value="57">
                    57
                  </option>
                  <option clasName="py-2" value="56">
                    56
                  </option>
                  <option clasName="py-2" value="55">
                    55
                  </option>
                  <option clasName="py-2" value="54">
                    54
                  </option>
                  <option clasName="py-2" value="53">
                    53
                  </option>
                  <option clasName="py-2" value="52">
                    52
                  </option>
                  <option clasName="py-2" value="51">
                    51
                  </option>
                  <option clasName="py-2" value="50">
                    50
                  </option>
                  <option clasName="py-2" value="49">
                    49
                  </option>
                  <option clasName="py-2" value="48">
                    48
                  </option>
                  <option clasName="py-2" value="47">
                    47
                  </option>
                  <option clasName="py-2" value="46">
                    46
                  </option>
                  <option clasName="py-2" value="45">
                    45
                  </option>
                  <option clasName="py-2" value="44">
                    44
                  </option>
                  <option clasName="py-2" value="43">
                    43
                  </option>
                  <option clasName="py-2" value="42">
                    42
                  </option>
                  <option clasName="py-2" value="41">
                    41
                  </option>
                  <option clasName="py-2" value="40">
                    40
                  </option>
                  <option clasName="py-2" value="39">
                    39
                  </option>
                  <option clasName="py-2" value="38">
                    38
                  </option>
                  <option clasName="py-2" value="37">
                    37
                  </option>
                  <option clasName="py-2" value="36">
                    36
                  </option>
                  <option clasName="py-2" value="35">
                    35
                  </option>
                  <option clasName="py-2" value="34">
                    34
                  </option>
                  <option clasName="py-2" value="33">
                    33
                  </option>
                  <option clasName="py-2" value="32">
                    32
                  </option>
                  <option clasName="py-2" value="31">
                    31
                  </option>
                  <option clasName="py-2" value="30">
                    30
                  </option>
                  <option clasName="py-2" value="29">
                    29
                  </option>
                  <option clasName="py-2" value="28">
                    28
                  </option>
                  <option clasName="py-2" value="27">
                    27
                  </option>
                  <option clasName="py-2" value="26">
                    26
                  </option>
                  <option clasName="py-2" value="25">
                    25
                  </option>
                  <option clasName="py-2" value="24">
                    24
                  </option>
                  <option clasName="py-2" value="23">
                    23
                  </option>
                  <option clasName="py-2" value="22">
                    22
                  </option>
                  <option clasName="py-2" value="21">
                    21
                  </option>
                  <option clasName="py-2" value="20">
                    20
                  </option>
                  <option clasName="py-2" value="19">
                    19
                  </option>
                  <option clasName="py-2" value="18">
                    18
                  </option>
                  <option clasName="py-2" value="17">
                    17
                  </option>
                  <option clasName="py-2" value="16">
                    16
                  </option>
                  <option clasName="py-2" value="15">
                    15
                  </option>
                  <option clasName="py-2" value="14">
                    14
                  </option>
                  <option clasName="py-2" value="13">
                    13
                  </option>
                  <option clasName="py-2" value="12">
                    12
                  </option>
                  <option clasName="py-2" value="11">
                    11
                  </option>
                  <option clasName="py-2" value="10">
                    10
                  </option>
                  <option clasName="py-2" value="9">
                    9
                  </option>
                  <option clasName="py-2" value="8">
                    8
                  </option>
                  <option clasName="py-2" value="7">
                    7
                  </option>
                  <option clasName="py-2" value="6">
                    6
                  </option>
                  <option clasName="py-2" value="5">
                    5
                  </option>
                  <option clasName="py-2" value="4">
                    4
                  </option>
                  <option clasName="py-2" value="3">
                    3
                  </option>
                  <option clasName="py-2" value="2">
                    2
                  </option>
                  <option clasName="py-2" value="1">
                    1
                  </option>
                  <option clasName="py-2" value="0">
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
                  <option clasName="py-2" value="99">
                    99
                  </option>
                  <option clasName="py-2" value="98">
                    98
                  </option>
                  <option clasName="py-2" value="97">
                    97
                  </option>
                  <option clasName="py-2" value="96">
                    96
                  </option>
                  <option clasName="py-2" value="95">
                    95
                  </option>
                  <option clasName="py-2" value="94">
                    94
                  </option>
                  <option clasName="py-2" value="93">
                    93
                  </option>
                  <option clasName="py-2" value="92">
                    92
                  </option>
                  <option clasName="py-2" value="91">
                    91
                  </option>
                  <option clasName="py-2" value="90">
                    90
                  </option>
                  <option clasName="py-2" value="89">
                    89
                  </option>
                  <option clasName="py-2" value="88">
                    88
                  </option>
                  <option clasName="py-2" value="87">
                    87
                  </option>
                  <option clasName="py-2" value="86">
                    86
                  </option>
                  <option clasName="py-2" value="85">
                    85
                  </option>
                  <option clasName="py-2" value="84">
                    84
                  </option>
                  <option clasName="py-2" value="83">
                    83
                  </option>
                  <option clasName="py-2" value="82">
                    82
                  </option>
                  <option clasName="py-2" value="81">
                    81
                  </option>
                  <option clasName="py-2" value="80">
                    80
                  </option>
                  <option clasName="py-2" value="79">
                    79
                  </option>
                  <option clasName="py-2" value="78">
                    78
                  </option>
                  <option clasName="py-2" value="77">
                    77
                  </option>
                  <option clasName="py-2" value="76">
                    76
                  </option>
                  <option clasName="py-2" value="75">
                    75
                  </option>
                  <option clasName="py-2" value="74">
                    74
                  </option>
                  <option clasName="py-2" value="73">
                    73
                  </option>
                  <option clasName="py-2" value="72">
                    72
                  </option>
                  <option clasName="py-2" value="71">
                    71
                  </option>
                  <option clasName="py-2" value="70">
                    70
                  </option>
                  <option clasName="py-2" value="69">
                    69
                  </option>
                  <option clasName="py-2" value="68">
                    68
                  </option>
                  <option clasName="py-2" value="67">
                    67
                  </option>
                  <option clasName="py-2" value="66">
                    66
                  </option>
                  <option clasName="py-2" value="65">
                    65
                  </option>
                  <option clasName="py-2" value="64">
                    64
                  </option>
                  <option clasName="py-2" value="63">
                    63
                  </option>
                  <option clasName="py-2" value="62">
                    62
                  </option>
                  <option clasName="py-2" value="61">
                    61
                  </option>
                  <option clasName="py-2" value="60">
                    60
                  </option>
                  <option clasName="py-2" value="59">
                    59
                  </option>
                  <option clasName="py-2" value="58">
                    58
                  </option>
                  <option clasName="py-2" value="57">
                    57
                  </option>
                  <option clasName="py-2" value="56">
                    56
                  </option>
                  <option clasName="py-2" value="55">
                    55
                  </option>
                  <option clasName="py-2" value="54">
                    54
                  </option>
                  <option clasName="py-2" value="53">
                    53
                  </option>
                  <option clasName="py-2" value="52">
                    52
                  </option>
                  <option clasName="py-2" value="51">
                    51
                  </option>
                  <option clasName="py-2" value="50">
                    50
                  </option>
                  <option clasName="py-2" value="49">
                    49
                  </option>
                  <option clasName="py-2" value="48">
                    48
                  </option>
                  <option clasName="py-2" value="47">
                    47
                  </option>
                  <option clasName="py-2" value="46">
                    46
                  </option>
                  <option clasName="py-2" value="45">
                    45
                  </option>
                  <option clasName="py-2" value="44">
                    44
                  </option>
                  <option clasName="py-2" value="43">
                    43
                  </option>
                  <option clasName="py-2" value="42">
                    42
                  </option>
                  <option clasName="py-2" value="41">
                    41
                  </option>
                  <option clasName="py-2" value="40">
                    40
                  </option>
                  <option clasName="py-2" value="39">
                    39
                  </option>
                  <option clasName="py-2" value="38">
                    38
                  </option>
                  <option clasName="py-2" value="37">
                    37
                  </option>
                  <option clasName="py-2" value="36">
                    36
                  </option>
                  <option clasName="py-2" value="35">
                    35
                  </option>
                  <option clasName="py-2" value="34">
                    34
                  </option>
                  <option clasName="py-2" value="33">
                    33
                  </option>
                  <option clasName="py-2" value="32">
                    32
                  </option>
                  <option clasName="py-2" value="31">
                    31
                  </option>
                  <option clasName="py-2" value="30">
                    30
                  </option>
                  <option clasName="py-2" value="29">
                    29
                  </option>
                  <option clasName="py-2" value="28">
                    28
                  </option>
                  <option clasName="py-2" value="27">
                    27
                  </option>
                  <option clasName="py-2" value="26">
                    26
                  </option>
                  <option clasName="py-2" value="25">
                    25
                  </option>
                  <option clasName="py-2" value="24">
                    24
                  </option>
                  <option clasName="py-2" value="23">
                    23
                  </option>
                  <option clasName="py-2" value="22">
                    22
                  </option>
                  <option clasName="py-2" value="21">
                    21
                  </option>
                  <option clasName="py-2" value="20">
                    20
                  </option>
                  <option clasName="py-2" value="19">
                    19
                  </option>
                  <option clasName="py-2" value="18">
                    18
                  </option>
                  <option clasName="py-2" value="17">
                    17
                  </option>
                  <option clasName="py-2" value="16">
                    16
                  </option>
                  <option clasName="py-2" value="15">
                    15
                  </option>
                  <option clasName="py-2" value="14">
                    14
                  </option>
                  <option clasName="py-2" value="13">
                    13
                  </option>
                  <option clasName="py-2" value="12">
                    12
                  </option>
                  <option clasName="py-2" value="11">
                    11
                  </option>
                  <option clasName="py-2" value="10">
                    10
                  </option>
                  <option clasName="py-2" value="9">
                    9
                  </option>
                  <option clasName="py-2" value="8">
                    8
                  </option>
                  <option clasName="py-2" value="7">
                    7
                  </option>
                  <option clasName="py-2" value="6">
                    6
                  </option>
                  <option clasName="py-2" value="5">
                    5
                  </option>
                  <option clasName="py-2" value="4">
                    4
                  </option>
                  <option clasName="py-2" value="3">
                    3
                  </option>
                  <option clasName="py-2" value="2">
                    2
                  </option>
                  <option clasName="py-2" value="1">
                    1
                  </option>
                  <option clasName="py-2" value="0">
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
                  <option clasName="py-2" value="99">
                    99
                  </option>
                  <option clasName="py-2" value="98">
                    98
                  </option>
                  <option clasName="py-2" value="97">
                    97
                  </option>
                  <option clasName="py-2" value="96">
                    96
                  </option>
                  <option clasName="py-2" value="95">
                    95
                  </option>
                  <option clasName="py-2" value="94">
                    94
                  </option>
                  <option clasName="py-2" value="93">
                    93
                  </option>
                  <option clasName="py-2" value="92">
                    92
                  </option>
                  <option clasName="py-2" value="91">
                    91
                  </option>
                  <option clasName="py-2" value="90">
                    90
                  </option>
                  <option clasName="py-2" value="89">
                    89
                  </option>
                  <option clasName="py-2" value="88">
                    88
                  </option>
                  <option clasName="py-2" value="87">
                    87
                  </option>
                  <option clasName="py-2" value="86">
                    86
                  </option>
                  <option clasName="py-2" value="85">
                    85
                  </option>
                  <option clasName="py-2" value="84">
                    84
                  </option>
                  <option clasName="py-2" value="83">
                    83
                  </option>
                  <option clasName="py-2" value="82">
                    82
                  </option>
                  <option clasName="py-2" value="81">
                    81
                  </option>
                  <option clasName="py-2" value="80">
                    80
                  </option>
                  <option clasName="py-2" value="79">
                    79
                  </option>
                  <option clasName="py-2" value="78">
                    78
                  </option>
                  <option clasName="py-2" value="77">
                    77
                  </option>
                  <option clasName="py-2" value="76">
                    76
                  </option>
                  <option clasName="py-2" value="75">
                    75
                  </option>
                  <option clasName="py-2" value="74">
                    74
                  </option>
                  <option clasName="py-2" value="73">
                    73
                  </option>
                  <option clasName="py-2" value="72">
                    72
                  </option>
                  <option clasName="py-2" value="71">
                    71
                  </option>
                  <option clasName="py-2" value="70">
                    70
                  </option>
                  <option clasName="py-2" value="69">
                    69
                  </option>
                  <option clasName="py-2" value="68">
                    68
                  </option>
                  <option clasName="py-2" value="67">
                    67
                  </option>
                  <option clasName="py-2" value="66">
                    66
                  </option>
                  <option clasName="py-2" value="65">
                    65
                  </option>
                  <option clasName="py-2" value="64">
                    64
                  </option>
                  <option clasName="py-2" value="63">
                    63
                  </option>
                  <option clasName="py-2" value="62">
                    62
                  </option>
                  <option clasName="py-2" value="61">
                    61
                  </option>
                  <option clasName="py-2" value="60">
                    60
                  </option>
                  <option clasName="py-2" value="59">
                    59
                  </option>
                  <option clasName="py-2" value="58">
                    58
                  </option>
                  <option clasName="py-2" value="57">
                    57
                  </option>
                  <option clasName="py-2" value="56">
                    56
                  </option>
                  <option clasName="py-2" value="55">
                    55
                  </option>
                  <option clasName="py-2" value="54">
                    54
                  </option>
                  <option clasName="py-2" value="53">
                    53
                  </option>
                  <option clasName="py-2" value="52">
                    52
                  </option>
                  <option clasName="py-2" value="51">
                    51
                  </option>
                  <option clasName="py-2" value="50">
                    50
                  </option>
                  <option clasName="py-2" value="49">
                    49
                  </option>
                  <option clasName="py-2" value="48">
                    48
                  </option>
                  <option clasName="py-2" value="47">
                    47
                  </option>
                  <option clasName="py-2" value="46">
                    46
                  </option>
                  <option clasName="py-2" value="45">
                    45
                  </option>
                  <option clasName="py-2" value="44">
                    44
                  </option>
                  <option clasName="py-2" value="43">
                    43
                  </option>
                  <option clasName="py-2" value="42">
                    42
                  </option>
                  <option clasName="py-2" value="41">
                    41
                  </option>
                  <option clasName="py-2" value="40">
                    40
                  </option>
                  <option clasName="py-2" value="39">
                    39
                  </option>
                  <option clasName="py-2" value="38">
                    38
                  </option>
                  <option clasName="py-2" value="37">
                    37
                  </option>
                  <option clasName="py-2" value="36">
                    36
                  </option>
                  <option clasName="py-2" value="35">
                    35
                  </option>
                  <option clasName="py-2" value="34">
                    34
                  </option>
                  <option clasName="py-2" value="33">
                    33
                  </option>
                  <option clasName="py-2" value="32">
                    32
                  </option>
                  <option clasName="py-2" value="31">
                    31
                  </option>
                  <option clasName="py-2" value="30">
                    30
                  </option>
                  <option clasName="py-2" value="29">
                    29
                  </option>
                  <option clasName="py-2" value="28">
                    28
                  </option>
                  <option clasName="py-2" value="27">
                    27
                  </option>
                  <option clasName="py-2" value="26">
                    26
                  </option>
                  <option clasName="py-2" value="25">
                    25
                  </option>
                  <option clasName="py-2" value="24">
                    24
                  </option>
                  <option clasName="py-2" value="23">
                    23
                  </option>
                  <option clasName="py-2" value="22">
                    22
                  </option>
                  <option clasName="py-2" value="21">
                    21
                  </option>
                  <option clasName="py-2" value="20">
                    20
                  </option>
                  <option clasName="py-2" value="19">
                    19
                  </option>
                  <option clasName="py-2" value="18">
                    18
                  </option>
                  <option clasName="py-2" value="17">
                    17
                  </option>
                  <option clasName="py-2" value="16">
                    16
                  </option>
                  <option clasName="py-2" value="15">
                    15
                  </option>
                  <option clasName="py-2" value="14">
                    14
                  </option>
                  <option clasName="py-2" value="13">
                    13
                  </option>
                  <option clasName="py-2" value="12">
                    12
                  </option>
                  <option clasName="py-2" value="11">
                    11
                  </option>
                  <option clasName="py-2" value="10">
                    10
                  </option>
                  <option clasName="py-2" value="9">
                    9
                  </option>
                  <option clasName="py-2" value="8">
                    8
                  </option>
                  <option clasName="py-2" value="7">
                    7
                  </option>
                  <option clasName="py-2" value="6">
                    6
                  </option>
                  <option clasName="py-2" value="5">
                    5
                  </option>
                  <option clasName="py-2" value="4">
                    4
                  </option>
                  <option clasName="py-2" value="3">
                    3
                  </option>
                  <option clasName="py-2" value="2">
                    2
                  </option>
                  <option clasName="py-2" value="1">
                    1
                  </option>
                  <option clasName="py-2" value="0">
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
                  <option clasName="py-2" value="99">
                    99
                  </option>
                  <option clasName="py-2" value="98">
                    98
                  </option>
                  <option clasName="py-2" value="97">
                    97
                  </option>
                  <option clasName="py-2" value="96">
                    96
                  </option>
                  <option clasName="py-2" value="95">
                    95
                  </option>
                  <option clasName="py-2" value="94">
                    94
                  </option>
                  <option clasName="py-2" value="93">
                    93
                  </option>
                  <option clasName="py-2" value="92">
                    92
                  </option>
                  <option clasName="py-2" value="91">
                    91
                  </option>
                  <option clasName="py-2" value="90">
                    90
                  </option>
                  <option clasName="py-2" value="89">
                    89
                  </option>
                  <option clasName="py-2" value="88">
                    88
                  </option>
                  <option clasName="py-2" value="87">
                    87
                  </option>
                  <option clasName="py-2" value="86">
                    86
                  </option>
                  <option clasName="py-2" value="85">
                    85
                  </option>
                  <option clasName="py-2" value="84">
                    84
                  </option>
                  <option clasName="py-2" value="83">
                    83
                  </option>
                  <option clasName="py-2" value="82">
                    82
                  </option>
                  <option clasName="py-2" value="81">
                    81
                  </option>
                  <option clasName="py-2" value="80">
                    80
                  </option>
                  <option clasName="py-2" value="79">
                    79
                  </option>
                  <option clasName="py-2" value="78">
                    78
                  </option>
                  <option clasName="py-2" value="77">
                    77
                  </option>
                  <option clasName="py-2" value="76">
                    76
                  </option>
                  <option clasName="py-2" value="75">
                    75
                  </option>
                  <option clasName="py-2" value="74">
                    74
                  </option>
                  <option clasName="py-2" value="73">
                    73
                  </option>
                  <option clasName="py-2" value="72">
                    72
                  </option>
                  <option clasName="py-2" value="71">
                    71
                  </option>
                  <option clasName="py-2" value="70">
                    70
                  </option>
                  <option clasName="py-2" value="69">
                    69
                  </option>
                  <option clasName="py-2" value="68">
                    68
                  </option>
                  <option clasName="py-2" value="67">
                    67
                  </option>
                  <option clasName="py-2" value="66">
                    66
                  </option>
                  <option clasName="py-2" value="65">
                    65
                  </option>
                  <option clasName="py-2" value="64">
                    64
                  </option>
                  <option clasName="py-2" value="63">
                    63
                  </option>
                  <option clasName="py-2" value="62">
                    62
                  </option>
                  <option clasName="py-2" value="61">
                    61
                  </option>
                  <option clasName="py-2" value="60">
                    60
                  </option>
                  <option clasName="py-2" value="59">
                    59
                  </option>
                  <option clasName="py-2" value="58">
                    58
                  </option>
                  <option clasName="py-2" value="57">
                    57
                  </option>
                  <option clasName="py-2" value="56">
                    56
                  </option>
                  <option clasName="py-2" value="55">
                    55
                  </option>
                  <option clasName="py-2" value="54">
                    54
                  </option>
                  <option clasName="py-2" value="53">
                    53
                  </option>
                  <option clasName="py-2" value="52">
                    52
                  </option>
                  <option clasName="py-2" value="51">
                    51
                  </option>
                  <option clasName="py-2" value="50">
                    50
                  </option>
                  <option clasName="py-2" value="49">
                    49
                  </option>
                  <option clasName="py-2" value="48">
                    48
                  </option>
                  <option clasName="py-2" value="47">
                    47
                  </option>
                  <option clasName="py-2" value="46">
                    46
                  </option>
                  <option clasName="py-2" value="45">
                    45
                  </option>
                  <option clasName="py-2" value="44">
                    44
                  </option>
                  <option clasName="py-2" value="43">
                    43
                  </option>
                  <option clasName="py-2" value="42">
                    42
                  </option>
                  <option clasName="py-2" value="41">
                    41
                  </option>
                  <option clasName="py-2" value="40">
                    40
                  </option>
                  <option clasName="py-2" value="39">
                    39
                  </option>
                  <option clasName="py-2" value="38">
                    38
                  </option>
                  <option clasName="py-2" value="37">
                    37
                  </option>
                  <option clasName="py-2" value="36">
                    36
                  </option>
                  <option clasName="py-2" value="35">
                    35
                  </option>
                  <option clasName="py-2" value="34">
                    34
                  </option>
                  <option clasName="py-2" value="33">
                    33
                  </option>
                  <option clasName="py-2" value="32">
                    32
                  </option>
                  <option clasName="py-2" value="31">
                    31
                  </option>
                  <option clasName="py-2" value="30">
                    30
                  </option>
                  <option clasName="py-2" value="29">
                    29
                  </option>
                  <option clasName="py-2" value="28">
                    28
                  </option>
                  <option clasName="py-2" value="27">
                    27
                  </option>
                  <option clasName="py-2" value="26">
                    26
                  </option>
                  <option clasName="py-2" value="25">
                    25
                  </option>
                  <option clasName="py-2" value="24">
                    24
                  </option>
                  <option clasName="py-2" value="23">
                    23
                  </option>
                  <option clasName="py-2" value="22">
                    22
                  </option>
                  <option clasName="py-2" value="21">
                    21
                  </option>
                  <option clasName="py-2" value="20">
                    20
                  </option>
                  <option clasName="py-2" value="19">
                    19
                  </option>
                  <option clasName="py-2" value="18">
                    18
                  </option>
                  <option clasName="py-2" value="17">
                    17
                  </option>
                  <option clasName="py-2" value="16">
                    16
                  </option>
                  <option clasName="py-2" value="15">
                    15
                  </option>
                  <option clasName="py-2" value="14">
                    14
                  </option>
                  <option clasName="py-2" value="13">
                    13
                  </option>
                  <option clasName="py-2" value="12">
                    12
                  </option>
                  <option clasName="py-2" value="11">
                    11
                  </option>
                  <option clasName="py-2" value="10">
                    10
                  </option>
                  <option clasName="py-2" value="9">
                    9
                  </option>
                  <option clasName="py-2" value="8">
                    8
                  </option>
                  <option clasName="py-2" value="7">
                    7
                  </option>
                  <option clasName="py-2" value="6">
                    6
                  </option>
                  <option clasName="py-2" value="5">
                    5
                  </option>
                  <option clasName="py-2" value="4">
                    4
                  </option>
                  <option clasName="py-2" value="3">
                    3
                  </option>
                  <option clasName="py-2" value="2">
                    2
                  </option>
                  <option clasName="py-2" value="1">
                    1
                  </option>
                  <option clasName="py-2" value="0">
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
                  <option clasName="py-2" value="99">
                    99
                  </option>
                  <option clasName="py-2" value="98">
                    98
                  </option>
                  <option clasName="py-2" value="97">
                    97
                  </option>
                  <option clasName="py-2" value="96">
                    96
                  </option>
                  <option clasName="py-2" value="95">
                    95
                  </option>
                  <option clasName="py-2" value="94">
                    94
                  </option>
                  <option clasName="py-2" value="93">
                    93
                  </option>
                  <option clasName="py-2" value="92">
                    92
                  </option>
                  <option clasName="py-2" value="91">
                    91
                  </option>
                  <option clasName="py-2" value="90">
                    90
                  </option>
                  <option clasName="py-2" value="89">
                    89
                  </option>
                  <option clasName="py-2" value="88">
                    88
                  </option>
                  <option clasName="py-2" value="87">
                    87
                  </option>
                  <option clasName="py-2" value="86">
                    86
                  </option>
                  <option clasName="py-2" value="85">
                    85
                  </option>
                  <option clasName="py-2" value="84">
                    84
                  </option>
                  <option clasName="py-2" value="83">
                    83
                  </option>
                  <option clasName="py-2" value="82">
                    82
                  </option>
                  <option clasName="py-2" value="81">
                    81
                  </option>
                  <option clasName="py-2" value="80">
                    80
                  </option>
                  <option clasName="py-2" value="79">
                    79
                  </option>
                  <option clasName="py-2" value="78">
                    78
                  </option>
                  <option clasName="py-2" value="77">
                    77
                  </option>
                  <option clasName="py-2" value="76">
                    76
                  </option>
                  <option clasName="py-2" value="75">
                    75
                  </option>
                  <option clasName="py-2" value="74">
                    74
                  </option>
                  <option clasName="py-2" value="73">
                    73
                  </option>
                  <option clasName="py-2" value="72">
                    72
                  </option>
                  <option clasName="py-2" value="71">
                    71
                  </option>
                  <option clasName="py-2" value="70">
                    70
                  </option>
                  <option clasName="py-2" value="69">
                    69
                  </option>
                  <option clasName="py-2" value="68">
                    68
                  </option>
                  <option clasName="py-2" value="67">
                    67
                  </option>
                  <option clasName="py-2" value="66">
                    66
                  </option>
                  <option clasName="py-2" value="65">
                    65
                  </option>
                  <option clasName="py-2" value="64">
                    64
                  </option>
                  <option clasName="py-2" value="63">
                    63
                  </option>
                  <option clasName="py-2" value="62">
                    62
                  </option>
                  <option clasName="py-2" value="61">
                    61
                  </option>
                  <option clasName="py-2" value="60">
                    60
                  </option>
                  <option clasName="py-2" value="59">
                    59
                  </option>
                  <option clasName="py-2" value="58">
                    58
                  </option>
                  <option clasName="py-2" value="57">
                    57
                  </option>
                  <option clasName="py-2" value="56">
                    56
                  </option>
                  <option clasName="py-2" value="55">
                    55
                  </option>
                  <option clasName="py-2" value="54">
                    54
                  </option>
                  <option clasName="py-2" value="53">
                    53
                  </option>
                  <option clasName="py-2" value="52">
                    52
                  </option>
                  <option clasName="py-2" value="51">
                    51
                  </option>
                  <option clasName="py-2" value="50">
                    50
                  </option>
                  <option clasName="py-2" value="49">
                    49
                  </option>
                  <option clasName="py-2" value="48">
                    48
                  </option>
                  <option clasName="py-2" value="47">
                    47
                  </option>
                  <option clasName="py-2" value="46">
                    46
                  </option>
                  <option clasName="py-2" value="45">
                    45
                  </option>
                  <option clasName="py-2" value="44">
                    44
                  </option>
                  <option clasName="py-2" value="43">
                    43
                  </option>
                  <option clasName="py-2" value="42">
                    42
                  </option>
                  <option clasName="py-2" value="41">
                    41
                  </option>
                  <option clasName="py-2" value="40">
                    40
                  </option>
                  <option clasName="py-2" value="39">
                    39
                  </option>
                  <option clasName="py-2" value="38">
                    38
                  </option>
                  <option clasName="py-2" value="37">
                    37
                  </option>
                  <option clasName="py-2" value="36">
                    36
                  </option>
                  <option clasName="py-2" value="35">
                    35
                  </option>
                  <option clasName="py-2" value="34">
                    34
                  </option>
                  <option clasName="py-2" value="33">
                    33
                  </option>
                  <option clasName="py-2" value="32">
                    32
                  </option>
                  <option clasName="py-2" value="31">
                    31
                  </option>
                  <option clasName="py-2" value="30">
                    30
                  </option>
                  <option clasName="py-2" value="29">
                    29
                  </option>
                  <option clasName="py-2" value="28">
                    28
                  </option>
                  <option clasName="py-2" value="27">
                    27
                  </option>
                  <option clasName="py-2" value="26">
                    26
                  </option>
                  <option clasName="py-2" value="25">
                    25
                  </option>
                  <option clasName="py-2" value="24">
                    24
                  </option>
                  <option clasName="py-2" value="23">
                    23
                  </option>
                  <option clasName="py-2" value="22">
                    22
                  </option>
                  <option clasName="py-2" value="21">
                    21
                  </option>
                  <option clasName="py-2" value="20">
                    20
                  </option>
                  <option clasName="py-2" value="19">
                    19
                  </option>
                  <option clasName="py-2" value="18">
                    18
                  </option>
                  <option clasName="py-2" value="17">
                    17
                  </option>
                  <option clasName="py-2" value="16">
                    16
                  </option>
                  <option clasName="py-2" value="15">
                    15
                  </option>
                  <option clasName="py-2" value="14">
                    14
                  </option>
                  <option clasName="py-2" value="13">
                    13
                  </option>
                  <option clasName="py-2" value="12">
                    12
                  </option>
                  <option clasName="py-2" value="11">
                    11
                  </option>
                  <option clasName="py-2" value="10">
                    10
                  </option>
                  <option clasName="py-2" value="9">
                    9
                  </option>
                  <option clasName="py-2" value="8">
                    8
                  </option>
                  <option clasName="py-2" value="7">
                    7
                  </option>
                  <option clasName="py-2" value="6">
                    6
                  </option>
                  <option clasName="py-2" value="5">
                    5
                  </option>
                  <option clasName="py-2" value="4">
                    4
                  </option>
                  <option clasName="py-2" value="3">
                    3
                  </option>
                  <option clasName="py-2" value="2">
                    2
                  </option>
                  <option clasName="py-2" value="1">
                    1
                  </option>
                  <option clasName="py-2" value="0">
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
                  <option clasName="py-2" value="99">
                    99
                  </option>
                  <option clasName="py-2" value="98">
                    98
                  </option>
                  <option clasName="py-2" value="97">
                    97
                  </option>
                  <option clasName="py-2" value="96">
                    96
                  </option>
                  <option clasName="py-2" value="95">
                    95
                  </option>
                  <option clasName="py-2" value="94">
                    94
                  </option>
                  <option clasName="py-2" value="93">
                    93
                  </option>
                  <option clasName="py-2" value="92">
                    92
                  </option>
                  <option clasName="py-2" value="91">
                    91
                  </option>
                  <option clasName="py-2" value="90">
                    90
                  </option>
                  <option clasName="py-2" value="89">
                    89
                  </option>
                  <option clasName="py-2" value="88">
                    88
                  </option>
                  <option clasName="py-2" value="87">
                    87
                  </option>
                  <option clasName="py-2" value="86">
                    86
                  </option>
                  <option clasName="py-2" value="85">
                    85
                  </option>
                  <option clasName="py-2" value="84">
                    84
                  </option>
                  <option clasName="py-2" value="83">
                    83
                  </option>
                  <option clasName="py-2" value="82">
                    82
                  </option>
                  <option clasName="py-2" value="81">
                    81
                  </option>
                  <option clasName="py-2" value="80">
                    80
                  </option>
                  <option clasName="py-2" value="79">
                    79
                  </option>
                  <option clasName="py-2" value="78">
                    78
                  </option>
                  <option clasName="py-2" value="77">
                    77
                  </option>
                  <option clasName="py-2" value="76">
                    76
                  </option>
                  <option clasName="py-2" value="75">
                    75
                  </option>
                  <option clasName="py-2" value="74">
                    74
                  </option>
                  <option clasName="py-2" value="73">
                    73
                  </option>
                  <option clasName="py-2" value="72">
                    72
                  </option>
                  <option clasName="py-2" value="71">
                    71
                  </option>
                  <option clasName="py-2" value="70">
                    70
                  </option>
                  <option clasName="py-2" value="69">
                    69
                  </option>
                  <option clasName="py-2" value="68">
                    68
                  </option>
                  <option clasName="py-2" value="67">
                    67
                  </option>
                  <option clasName="py-2" value="66">
                    66
                  </option>
                  <option clasName="py-2" value="65">
                    65
                  </option>
                  <option clasName="py-2" value="64">
                    64
                  </option>
                  <option clasName="py-2" value="63">
                    63
                  </option>
                  <option clasName="py-2" value="62">
                    62
                  </option>
                  <option clasName="py-2" value="61">
                    61
                  </option>
                  <option clasName="py-2" value="60">
                    60
                  </option>
                  <option clasName="py-2" value="59">
                    59
                  </option>
                  <option clasName="py-2" value="58">
                    58
                  </option>
                  <option clasName="py-2" value="57">
                    57
                  </option>
                  <option clasName="py-2" value="56">
                    56
                  </option>
                  <option clasName="py-2" value="55">
                    55
                  </option>
                  <option clasName="py-2" value="54">
                    54
                  </option>
                  <option clasName="py-2" value="53">
                    53
                  </option>
                  <option clasName="py-2" value="52">
                    52
                  </option>
                  <option clasName="py-2" value="51">
                    51
                  </option>
                  <option clasName="py-2" value="50">
                    50
                  </option>
                  <option clasName="py-2" value="49">
                    49
                  </option>
                  <option clasName="py-2" value="48">
                    48
                  </option>
                  <option clasName="py-2" value="47">
                    47
                  </option>
                  <option clasName="py-2" value="46">
                    46
                  </option>
                  <option clasName="py-2" value="45">
                    45
                  </option>
                  <option clasName="py-2" value="44">
                    44
                  </option>
                  <option clasName="py-2" value="43">
                    43
                  </option>
                  <option clasName="py-2" value="42">
                    42
                  </option>
                  <option clasName="py-2" value="41">
                    41
                  </option>
                  <option clasName="py-2" value="40">
                    40
                  </option>
                  <option clasName="py-2" value="39">
                    39
                  </option>
                  <option clasName="py-2" value="38">
                    38
                  </option>
                  <option clasName="py-2" value="37">
                    37
                  </option>
                  <option clasName="py-2" value="36">
                    36
                  </option>
                  <option clasName="py-2" value="35">
                    35
                  </option>
                  <option clasName="py-2" value="34">
                    34
                  </option>
                  <option clasName="py-2" value="33">
                    33
                  </option>
                  <option clasName="py-2" value="32">
                    32
                  </option>
                  <option clasName="py-2" value="31">
                    31
                  </option>
                  <option clasName="py-2" value="30">
                    30
                  </option>
                  <option clasName="py-2" value="29">
                    29
                  </option>
                  <option clasName="py-2" value="28">
                    28
                  </option>
                  <option clasName="py-2" value="27">
                    27
                  </option>
                  <option clasName="py-2" value="26">
                    26
                  </option>
                  <option clasName="py-2" value="25">
                    25
                  </option>
                  <option clasName="py-2" value="24">
                    24
                  </option>
                  <option clasName="py-2" value="23">
                    23
                  </option>
                  <option clasName="py-2" value="22">
                    22
                  </option>
                  <option clasName="py-2" value="21">
                    21
                  </option>
                  <option clasName="py-2" value="20">
                    20
                  </option>
                  <option clasName="py-2" value="19">
                    19
                  </option>
                  <option clasName="py-2" value="18">
                    18
                  </option>
                  <option clasName="py-2" value="17">
                    17
                  </option>
                  <option clasName="py-2" value="16">
                    16
                  </option>
                  <option clasName="py-2" value="15">
                    15
                  </option>
                  <option clasName="py-2" value="14">
                    14
                  </option>
                  <option clasName="py-2" value="13">
                    13
                  </option>
                  <option clasName="py-2" value="12">
                    12
                  </option>
                  <option clasName="py-2" value="11">
                    11
                  </option>
                  <option clasName="py-2" value="10">
                    10
                  </option>
                  <option clasName="py-2" value="9">
                    9
                  </option>
                  <option clasName="py-2" value="8">
                    8
                  </option>
                  <option clasName="py-2" value="7">
                    7
                  </option>
                  <option clasName="py-2" value="6">
                    6
                  </option>
                  <option clasName="py-2" value="5">
                    5
                  </option>
                  <option clasName="py-2" value="4">
                    4
                  </option>
                  <option clasName="py-2" value="3">
                    3
                  </option>
                  <option clasName="py-2" value="2">
                    2
                  </option>
                  <option clasName="py-2" value="1">
                    1
                  </option>
                  <option clasName="py-2" value="0">
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
            className="fixed hidden lg:left-[50%] lg:top-[25%] lg:w-[19.6875rem] bg-[#EF8E87] rounded-lg py-2 text-white lg:my-5 flex justify-center items-center text-center flex-col"
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

        <div className="relative hidden lg:block lg:w-[50vw] lg:h-[100%]">
          <div className="carder mr-10 relative lg:fixed top-1 mt-10">
            {/* <img src={CardImg} alt="card rater" /> */}
            <div className="relative top-0">
              <div className="absolute top-[2.7em] left-[2.9em] text-4xl text-[#3E361D]">
                98
              </div>
              <div className="absolute top-[4.7em] left-[3.2em]  text-3xl text-[#3E361D]">
                LWF
              </div>
              <img
                src={countryImg}
                alt="country"
                className="w-[40px] h-[30px] absolute top-[12em] left-[6.5em] z-[99999999999]"
              />
              <img
                src={clubImg}
                alt="club"
                className="w-[40px] h-[40px] absolute top-[15.5em] left-[6.5em]"
              />
              <img
                src={playerImg}
                alt="player"
                className="w-[200px] h-[200px] absolute top-[6.7em] left-[11em]"
              />
              <div className="absolute top-[8.7em] left-[4.5em]  text-4xl text-[#3E361D]">
                Messi
              </div>
              <div className="absolute top-[10.5em] left-[2.5em]  text-4xl text-[#3E361D]">
                99
              </div>
              <div className="absolute top-[11.6em] left-[2.5em]  text-4xl text-[#3E361D]">
                98
              </div>
              <div className="absolute top-[12.7em] left-[2.5em]  text-4xl text-[#3E361D]">
                99
              </div>
              <div className="absolute top-[10.5em] left-[6.9em]  text-4xl text-[#3E361D]">
                97
              </div>
              <div className="absolute top-[11.6em] left-[6.9em]  text-4xl text-[#3E361D]">
                97
              </div>
              <div className="absolute top-[12.7em] left-[6.9em]  text-4xl text-[#3E361D]">
                99
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Rater;
