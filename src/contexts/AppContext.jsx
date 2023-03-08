import { useEffect, useState, createContext, useContext } from "react";

export const AppContext = createContext();

export const AppContextPage = ({ children }) => {
  //Pupil's/students's information

  const [name, setName] = useState("VCR");

  // useEffect(() => {
  //   localStorage.setItem("name", JSON.stringify(name));
  // }, [name]);

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
  const [Nation, setNation] = useState("");
  const [Team, setTeam] = useState("");

  const [Position, setPosition] = useState("");

  const [Acceleration, setAcceleration] = useState("");
  const [Aggression, setAggression] = useState("");
  const [Agility, setAgility] = useState("");
  const [AttackingPosition, setAttackingPosition] = useState("");
  const [Awareness, setAwareness] = useState("");
  const [Balance, setBalance] = useState("");
  const [BallControl, setBallControl] = useState("");
  const [Composure, setComposure] = useState("");
  const [Crossing, setCrossing] = useState("");
  const [Curve, setCurve] = useState("");
  const [Defending, setDefending] = useState("");
  const [Dribbling, setDribbling] = useState("");
  const [Finishing, setFinishing] = useState("");
  const [FreeKick, setFreeKick] = useState("");
  const [Heading, setHeading] = useState("");
  const [Interceptions, setInterceptions] = useState("");
  const [Jumping, setJumping] = useState("");
  const [LongPassing, setLongPassing] = useState("");
  const [LongShot, setLongShot] = useState("");
  const [Marking, setMarking] = useState("");
  const [Pace, setPace] = useState("");
  const [Passing, setPassing] = useState("");
  const [Penalties, setPenalties] = useState("");
  const [Physical, setPhysical] = useState("");
  const [Positioning, setPositioning] = useState("");
  const [Reactions, setReactions] = useState("");
  const [Shooting, setShooting] = useState("");
  const [ShortPassing, setShortPassing] = useState("");
  const [ShotPower, setShotPower] = useState("");
  const [SlidingTackle, setSlidingTackle] = useState("");
  const [SprintSpeed, setSprintSpeed] = useState("");
  const [Stamina, setStamina] = useState("");
  const [StandingTackle, setStandingTackle] = useState("");
  const [Strength, setStrength] = useState("");
  const [Vision, setVision] = useState("");
  const [Volleys, setVolleys] = useState("");

  return (
    <>
      <AppContext.Provider
        value={{
          name,
          setName,
          none,
          setNone,
          block,
          setBlock,
          url,
          setUrl,
          uploader,
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
