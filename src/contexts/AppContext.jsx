import { useEffect, useState, createContext, useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

export const AppContext = createContext();

export const AppContextPage = ({ children }) => {
  const navigate = useNavigate();

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
  const infoRef = useRef();
  const raterLgRef = useRef();
  const raterSmRef = useRef();

  //Pupil's/students's information

  const [name, setName] = useState("VCR");

  const [PassCode, setPassCode] = useState(() => {
    // getting stored value
    const saved = sessionStorage.getItem("none");
    const initialValue = JSON.parse(saved);
    return initialValue || "block";
  });

  useEffect(() => {
    sessionStorage.setItem("PassCode", JSON.stringify(PassCode));
  }, [PassCode]);

  const [none, setNone] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("none");
    const initialValue = JSON.parse(saved);
    return initialValue || "block";
  });

  const [block, setBlock] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("block");
    const initialValue = JSON.parse(saved);
    return initialValue || "none";
  });

  useEffect(() => {
    localStorage.setItem("none", JSON.stringify(none));
    localStorage.setItem("block", JSON.stringify(block));
  }, [none, block]);

  // save image to local storage
  const [url, setUrl] = useState("");
  const uploader = (file) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      localStorage.setItem("recent-image", reader.result);
      setUrl(localStorage.getItem("recent-image"));
    });
    reader.readAsDataURL(file);
  };

  // storing and getting image from local storage
  const [images, setImages] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64Image = reader.result;
      localStorage.setItem("images", base64Image);
      setImages(base64Image);
    };
  };

  // Random password Generation

  useEffect(() => {
    const generatePassword = () => {
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let result = "";
      const charactersLength = characters.length;
      for (let i = 0; i < 20; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      setPassCode(result);
    };
    generatePassword();
  }, []);

  // All functions

  const handleBack2HomeBtn = () => {
    navigate("/");
  };
  const handleCreateNewLgBtn = () => {
    window.location.reload(false); 
    localStorage.clear();
    sessionStorage.clear();
  };
  const handleCreateNewSmBtn = () => {
    window.location.reload(false); 
    localStorage.clear();
    sessionStorage.clear();
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
    infoRef.current.style.display = "flex";
    raterLgRef.current.style.display = "none";
    raterSmRef.current.style.display = "none";
  };

  const audio = new Audio("./mixkit-soccer-ball-quick-kick-2108.wav");

  const playBallAudio = () => {
    audio.play();
  };

  const [Nation, setNation] = useState("");
  const [Team, setTeam] = useState("");

  const [Position, setPosition] = useState("");

  const [Acceleration, setAcceleration] = useState(0);
  const [Aggression, setAggression] = useState(0);
  const [Agility, setAgility] = useState(0);
  const [AttackingPosition, setAttackingPosition] = useState(0);
  const [Awareness, setAwareness] = useState(0);
  const [Balance, setBalance] = useState(0);
  const [BallControl, setBallControl] = useState(0);
  const [Composure, setComposure] = useState(0);
  const [Crossing, setCrossing] = useState(0);
  const [Curve, setCurve] = useState(0);
  const [Defending, setDefending] = useState(0);
  const [Dribbling, setDribbling] = useState(0);
  const [Finishing, setFinishing] = useState(0);
  const [FreeKick, setFreeKick] = useState(0);
  const [Heading, setHeading] = useState(0);
  const [Interceptions, setInterceptions] = useState(0);
  const [Jumping, setJumping] = useState(0);
  const [LongPassing, setLongPassing] = useState(0);
  const [LongShot, setLongShot] = useState(0);
  const [Marking, setMarking] = useState(0);
  const [Pace, setPace] = useState(0);
  const [Passing, setPassing] = useState(0);
  const [Penalties, setPenalties] = useState(0);
  const [Physical, setPhysical] = useState(0);
  const [Positioning, setPositioning] = useState(0);
  const [Reactions, setReactions] = useState(0);
  const [Shooting, setShooting] = useState(0);
  const [ShortPassing, setShortPassing] = useState(0);
  const [ShotPower, setShotPower] = useState(0);
  const [SlidingTackle, setSlidingTackle] = useState(0);
  const [SprintSpeed, setSprintSpeed] = useState(0);
  const [Stamina, setStamina] = useState(0);
  const [StandingTackle, setStandingTackle] = useState(0);
  const [Strength, setStrength] = useState(0);
  const [Vision, setVision] = useState(0);
  const [Volleys, setVolleys] = useState(0);

  return (
    <>
      <AppContext.Provider
        value={{
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
          handleCreateNewLgBtn,
          handleCreateNewSmBtn,
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
        }}
      >
        {children}
      </AppContext.Provider>
    </>
  );
};

export const AppPass = () => {
  return useContext(AppContext);
};
