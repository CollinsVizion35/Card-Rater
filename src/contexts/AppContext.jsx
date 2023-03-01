import { useEffect, useState, createContext, useContext } from "react";

export const AppContext = createContext();

export const AppContextPage = ({ children }) => {
  //Pupil's/students's information

  const [name, setName] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("name");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [passcode, setPasscode] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("passcode");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [classRoom, setClassRoom] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("classRoom");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  const [acaSession, setAcaSession] = useState("");
  const [Age, setAge] = useState(0);
  const [sex, setSex] = useState("");
  const [present, setPresent] = useState("");
  const [absent, setAbsent] = useState();
  const [closure, setClosure] = useState("");
  const [term, setTerm] = useState("");

  // Psychomotor skill, effective areas and closing remarks

  const [cali, setCali] = useState("");
  const [verb, setVerb] = useState("");
  const [game, setGame] = useState("");
  const [sport, setSport] = useState("");
  const [handT, setHandT] = useState("");
  const [drawT, setDrawT] = useState("");
  const [drAPt, setDrAPt] = useState("");
  const [muSk, setMuSk] = useState("");

  const [punc, setPunc] = useState("");
  const [neat, setNeat] = useState("");
  const [polite, setPolite] = useState("");
  const [hone, setHone] = useState("");
  const [coOp, setCoOp] = useState("");
  const [lead, setLead] = useState("");
  const [helpO, setHelpO] = useState("");
  const [emoS, setEmoS] = useState("");
  const [health, setHealth] = useState("");
  const [atti, setAtti] = useState("");
  const [attent, setAttent] = useState("");
  const [speakH, setSpeakH] = useState("");

  const [popul, setPopul] = useState("");
  const [posi, setPosi] = useState("");
  const [conduct, setConduct] = useState("");
  const [classTS, setClassTS] = useState("");
  const [headTS, setHeadTS] = useState("");
  const [closing, setClosing] = useState("");
  const [nTOpen, setNTOpen] = useState("");

  // English Language

  const [engFirst, setEngFirst] = useState(0);

  const [engSec, setEngSec] = useState(0);

  const [engExam, setEngExam] = useState(0);

  const [engTotal, setEngTotal] = useState(0);

  const [engPos, setEngPos] = useState("");

  const [engGrade, setEngGrade] = useState("");

  // mathematics

  const [MathFirst, setMathFirst] = useState(0);

  const [MathSec, setMathSec] = useState(0);

  const [MathExam, setMathExam] = useState(0);

  const [MathTotal, setMathTotal] = useState(0);

  const [MathPos, setMathPos] = useState("");

  const [MathGrade, setMathGrade] = useState("");

  // poems

  const [PoemFirst, setPoemFirst] = useState(0);

  const [PoemSec, setPoemSec] = useState(0);

  const [PoemExam, setPoemExam] = useState(0);

  const [PoemTotal, setPoemTotal] = useState(0);

  const [PoemPos, setPoemPos] = useState("");

  const [PoemGrade, setPoemGrade] = useState("");

  // Civic Education

  const [CivFirst, setCivFirst] = useState(0);

  const [CivSec, setCivSec] = useState(0);

  const [CivExam, setCivExam] = useState(0);

  const [CivTotal, setCivTotal] = useState(0);

  const [CivPos, setCivPos] = useState("");

  const [CivGrade, setCivGrade] = useState("");

  // CRK

  const [CrkFirst, setCrkFirst] = useState(0);

  const [CrkSec, setCrkSec] = useState(0);

  const [CrkExam, setCrkExam] = useState(0);

  const [CrkTotal, setCrkTotal] = useState(0);

  const [CrkPos, setCrkPos] = useState("");

  const [CrkGrade, setCrkGrade] = useState("");

  // Nature Studies

  const [NatFirst, setNatFirst] = useState(0);

  const [NatSec, setNatSec] = useState(0);

  const [NatExam, setNatExam] = useState(0);

  const [NatTotal, setNatTotal] = useState(0);

  const [NatPos, setNatPos] = useState("");

  const [NatGrade, setNatGrade] = useState("");

  // picture reading

  const [PicFirst, setPicFirst] = useState(0);

  const [PicSec, setPicSec] = useState(0);

  const [PicExam, setPicExam] = useState(0);

  const [PicTotal, setPicTotal] = useState(0);

  const [PicPos, setPicPos] = useState("");

  const [PicGrade, setPicGrade] = useState("");

  // Moral instruction

  const [MorFirst, setMorFirst] = useState(0);

  const [MorSec, setMorSec] = useState(0);

  const [MorExam, setMorExam] = useState(0);

  const [MorTotal, setMorTotal] = useState(0);

  const [MorPos, setMorPos] = useState("");

  const [MorGrade, setMorGrade] = useState("");

  // Creative art
  const [ArtFirst, setArtFirst] = useState(0);

  const [ArtSec, setArtSec] = useState(0);

  const [ArtExam, setArtExam] = useState(0);

  const [ArtTotal, setArtTotal] = useState(0);

  const [ArtPos, setArtPos] = useState("");

  const [ArtGrade, setArtGrade] = useState("");

  // health instruction

  const [HeaFirst, setHeaFirst] = useState(0);

  const [HeaSec, setHeaSec] = useState(0);

  const [HeaExam, setHeaExam] = useState(0);

  const [HeaTotal, setHeaTotal] = useState(0);

  const [HeaPos, setHeaPos] = useState("");

  const [HeaGrade, setHeaGrade] = useState("");

  // social instruction

  const [SocFirst, setSocFirst] = useState(0);

  const [SocSec, setSocSec] = useState(0);

  const [SocExam, setSocExam] = useState(0);

  const [SocTotal, setSocTotal] = useState(0);

  const [SocPos, setSocPos] = useState("");

  const [SocGrade, setSocGrade] = useState("");

  // Phonetics

  const [PhoFirst, setPhoFirst] = useState(0);

  const [PhoSec, setPhoSec] = useState(0);

  const [PhoExam, setPhoExam] = useState(0);

  const [PhoTotal, setPhoTotal] = useState(0);

  const [PhoPos, setPhoPos] = useState("");

  const [PhoGrade, setPhoGrade] = useState("");

  // language art
  const [LanFirst, setLanFirst] = useState(0);

  const [LanSec, setLanSec] = useState(0);

  const [LanExam, setLanExam] = useState(0);

  const [LanTotal, setLanTotal] = useState(0);

  const [LanPos, setLanPos] = useState("");

  const [LanGrade, setLanGrade] = useState("");

  // Verbal Reasoning
  const [VerbalFirst, setVerbalFirst] = useState(0);

  const [VerbalSec, setVerbalSec] = useState(0);

  const [VerbalExam, setVerbalExam] = useState(0);

  const [VerbalTotal, setVerbalTotal] = useState(0);

  const [VerbalPos, setVerbalPos] = useState("");

  const [VerbalGrade, setVerbalGrade] = useState("");

  // Quant Reasoning
  const [QuantFirst, setQuantFirst] = useState(0);

  const [QuantSec, setQuantSec] = useState(0);

  const [QuantExam, setQuantExam] = useState(0);

  const [QuantTotal, setQuantTotal] = useState(0);

  const [QuantPos, setQuantPos] = useState("");

  const [QuantGrade, setQuantGrade] = useState("");

  // History
  const [HistFirst, setHistFirst] = useState(0);

  const [HistSec, setHistSec] = useState(0);

  const [HistExam, setHistExam] = useState(0);

  const [HistTotal, setHistTotal] = useState(0);

  const [HistPos, setHistPos] = useState("");

  const [HistGrade, setHistGrade] = useState("");

  // Agric
  const [AgricFirst, setAgricFirst] = useState(0);

  const [AgricSec, setAgricSec] = useState(0);

  const [AgricExam, setAgricExam] = useState(0);

  const [AgricTotal, setAgricTotal] = useState(0);

  const [AgricPos, setAgricPos] = useState("");

  const [AgricGrade, setAgricGrade] = useState("");

  // Home Economics
  const [HoEconFirst, setHoEconFirst] = useState(0);

  const [HoEconSec, setHoEconSec] = useState(0);

  const [HoEconExam, setHoEconExam] = useState(0);

  const [HoEconTotal, setHoEconTotal] = useState(0);

  const [HoEconPos, setHoEconPos] = useState("");

  const [HoEconGrade, setHoEconGrade] = useState("");

  // Basic Science
  const [BasicFirst, setBasicFirst] = useState(0);

  const [BasicSec, setBasicSec] = useState(0);

  const [BasicExam, setBasicExam] = useState(0);

  const [BasicTotal, setBasicTotal] = useState(0);

  const [BasicPos, setBasicPos] = useState("");

  const [BasicGrade, setBasicGrade] = useState("");

  // Computer Education
  const [CompFirst, setCompFirst] = useState(0);

  const [CompSec, setCompSec] = useState(0);

  const [CompExam, setCompExam] = useState(0);

  const [CompTotal, setCompTotal] = useState(0);

  const [CompPos, setCompPos] = useState("");

  const [CompGrade, setCompGrade] = useState("");

  // Spelling / Dictation
  const [SpeDicFirst, setSpeDicFirst] = useState(0);

  const [SpeDicSec, setSpeDicSec] = useState(0);

  const [SpeDicExam, setSpeDicExam] = useState(0);

  const [SpeDicTotal, setSpeDicTotal] = useState(0);

  const [SpeDicPos, setSpeDicPos] = useState("");

  const [SpeDicGrade, setSpeDicGrade] = useState("");

  // Vocational Aptitude
  const [VocFirst, setVocFirst] = useState(0);

  const [VocSec, setVocSec] = useState(0);

  const [VocExam, setVocExam] = useState(0);

  const [VocTotal, setVocTotal] = useState(0);

  const [VocPos, setVocPos] = useState("");

  const [VocGrade, setVocGrade] = useState("");

  // French
  const [FrenchFirst, setFrenchFirst] = useState(0);

  const [FrenchSec, setFrenchSec] = useState(0);

  const [FrenchExam, setFrenchExam] = useState(0);

  const [FrenchTotal, setFrenchTotal] = useState(0);

  const [FrenchPos, setFrenchPos] = useState("");

  const [FrenchGrade, setFrenchGrade] = useState("");

  // Igbo Language
  const [IgboFirst, setIgboFirst] = useState(0);

  const [IgboSec, setIgboSec] = useState(0);

  const [IgboExam, setIgboExam] = useState(0);

  const [IgboTotal, setIgboTotal] = useState(0);

  const [IgboPos, setIgboPos] = useState("");

  const [IgboGrade, setIgboGrade] = useState("");

  // Business Studies
  const [BusiFirst, setBusiFirst] = useState(0);

  const [BusiSec, setBusiSec] = useState(0);

  const [BusiExam, setBusiExam] = useState(0);

  const [BusiTotal, setBusiTotal] = useState(0);

  const [BusiPos, setBusiPos] = useState("");

  const [BusiGrade, setBusiGrade] = useState("");

  // Basic technology
  const [BasTechFirst, setBasTechFirst] = useState(0);

  const [BasTechSec, setBasTechSec] = useState(0);

  const [BasTechExam, setBasTechExam] = useState(0);

  const [BasTechTotal, setBasTechTotal] = useState(0);

  const [BasTechPos, setBasTechPos] = useState("");

  const [BasTechGrade, setBasTechGrade] = useState("");

  // Literature
  const [LiterateFirst, setLiterateFirst] = useState(0);

  const [LiterateSec, setLiterateSec] = useState(0);

  const [LiterateExam, setLiterateExam] = useState(0);

  const [LiterateTotal, setLiterateTotal] = useState(0);

  const [LiteratePos, setLiteratePos] = useState("");

  const [LiterateGrade, setLiterateGrade] = useState("");

  // Futher Mathematics
  const [FMathsFirst, setFMathsFirst] = useState(0);

  const [FMathsSec, setFMathsSec] = useState(0);

  const [FMathsExam, setFMathsExam] = useState(0);

  const [FMathsTotal, setFMathsTotal] = useState(0);

  const [FMathsPos, setFMathsPos] = useState("");

  const [FMathsGrade, setFMathsGrade] = useState("");

  // Physics
  const [PhyFirst, setPhyFirst] = useState(0);

  const [PhySec, setPhySec] = useState(0);

  const [PhyExam, setPhyExam] = useState(0);

  const [PhyTotal, setPhyTotal] = useState(0);

  const [PhyPos, setPhyPos] = useState("");

  const [PhyGrade, setPhyGrade] = useState("");

  // Chemistry
  const [ChemFirst, setChemFirst] = useState(0);

  const [ChemSec, setChemSec] = useState(0);

  const [ChemExam, setChemExam] = useState(0);

  const [ChemTotal, setChemTotal] = useState(0);

  const [ChemPos, setChemPos] = useState("");

  const [ChemGrade, setChemGrade] = useState("");

  // Biology
  const [BioFirst, setBioFirst] = useState(0);

  const [BioSec, setBioSec] = useState(0);

  const [BioExam, setBioExam] = useState(0);

  const [BioTotal, setBioTotal] = useState(0);

  const [BioPos, setBioPos] = useState("");

  const [BioGrade, setBioGrade] = useState("");

  // Geography
  const [GeoFirst, setGeoFirst] = useState(0);

  const [GeoSec, setGeoSec] = useState(0);

  const [GeoExam, setGeoExam] = useState(0);

  const [GeoTotal, setGeoTotal] = useState(0);

  const [GeoPos, setGeoPos] = useState("");

  const [GeoGrade, setGeoGrade] = useState("");

  // Economics
  const [EconsFirst, setEconsFirst] = useState(0);

  const [EconsSec, setEconsSec] = useState(0);

  const [EconsExam, setEconsExam] = useState(0);

  const [EconsTotal, setEconsTotal] = useState(0);

  const [EconsPos, setEconsPos] = useState("");

  const [EconsGrade, setEconsGrade] = useState("");

  // Commerce
  const [CommFirst, setCommFirst] = useState(0);

  const [CommSec, setCommSec] = useState(0);

  const [CommExam, setCommExam] = useState(0);

  const [CommTotal, setCommTotal] = useState(0);

  const [CommPos, setCommPos] = useState("");

  const [CommGrade, setCommGrade] = useState("");

  // Government
  const [GovFirst, setGovFirst] = useState(0);

  const [GovSec, setGovSec] = useState(0);

  const [GovExam, setGovExam] = useState(0);

  const [GovTotal, setGovTotal] = useState(0);

  const [GovPos, setGovPos] = useState("");

  const [GovGrade, setGovGrade] = useState("");

  // Food and Nutrition
  const [FnNutFirst, setFnNutFirst] = useState(0);

  const [FnNutSec, setFnNutSec] = useState(0);

  const [FnNutExam, setFnNutExam] = useState(0);

  const [FnNutTotal, setFnNutTotal] = useState(0);

  const [FnNutPos, setFnNutPos] = useState("");

  const [FnNutGrade, setFnNutGrade] = useState("");

  // Marketing
  const [MarketFirst, setMarketFirst] = useState(0);

  const [MarketSec, setMarketSec] = useState(0);

  const [MarketExam, setMarketExam] = useState(0);

  const [MarketTotal, setMarketTotal] = useState(0);

  const [MarketPos, setMarketPos] = useState("");

  const [MarketGrade, setMarketGrade] = useState("");

  // Book Keeping / Financial accounting
  const [BKeepFirst, setBKeepFirst] = useState(0);

  const [BKeepSec, setBKeepSec] = useState(0);

  const [BKeepExam, setBKeepExam] = useState(0);

  const [BKeepTotal, setBKeepTotal] = useState(0);

  const [BKeepPos, setBKeepPos] = useState("");

  const [BKeepGrade, setBKeepGrade] = useState("");

  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name));
    localStorage.setItem("classRoom", JSON.stringify(classRoom));
    localStorage.setItem("passcode", JSON.stringify(passcode));
  }, [name, passcode, classRoom]);

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

  return (
    <>
      <AppContext.Provider
        value={{
          name,
          passcode,
          setName,
          setPasscode,
          classRoom,
          setClassRoom,
          acaSession,
          setAcaSession,
          Age,
          setAge,
          sex,
          setSex,
          present,
          setPresent,
          absent,
          setAbsent,
          closure,
          setClosure,
          term,
          setTerm,

          none,
          setNone,
          block,
          setBlock,
          engFirst,
          setEngFirst,
          engSec,
          setEngSec,
          engExam,
          setEngExam,
          engTotal,
          setEngTotal,
          engPos,
          setEngPos,
          engGrade,
          setEngGrade,
          MathFirst,
          setMathFirst,
          MathSec,
          setMathSec,
          MathExam,
          setMathExam,
          MathTotal,
          setMathTotal,
          MathPos,
          setMathPos,
          MathGrade,
          setMathGrade,
          PoemFirst,
          setPoemFirst,
          PoemSec,
          setPoemSec,
          PoemExam,
          setPoemExam,
          PoemTotal,
          setPoemTotal,
          PoemPos,
          setPoemPos,
          PoemGrade,
          setPoemGrade,
          CivFirst,
          setCivFirst,
          CivSec,
          setCivSec,
          CivExam,
          setCivExam,
          CivTotal,
          setCivTotal,
          CivPos,
          setCivPos,
          CivGrade,
          setCivGrade,
          CrkFirst,
          setCrkFirst,
          CrkSec,
          setCrkSec,
          CrkExam,
          setCrkExam,
          CrkTotal,
          setCrkTotal,
          CrkPos,
          setCrkPos,
          CrkGrade,
          setCrkGrade,
          NatFirst,
          setNatFirst,
          NatSec,
          setNatSec,
          NatExam,
          setNatExam,
          NatTotal,
          setNatTotal,
          NatPos,
          setNatPos,
          NatGrade,
          setNatGrade,
          PicFirst,
          setPicFirst,
          PicSec,
          setPicSec,
          PicExam,
          setPicExam,
          PicTotal,
          setPicTotal,
          PicPos,
          setPicPos,
          PicGrade,
          setPicGrade,
          MorFirst,
          setMorFirst,
          MorSec,
          setMorSec,
          MorExam,
          setMorExam,
          MorTotal,
          setMorTotal,
          MorPos,
          setMorPos,
          MorGrade,
          setMorGrade,
          ArtFirst,
          setArtFirst,
          ArtSec,
          setArtSec,
          ArtExam,
          setArtExam,
          ArtTotal,
          setArtTotal,
          ArtPos,
          setArtPos,
          ArtGrade,
          setArtGrade,
          HeaFirst,
          setHeaFirst,
          HeaSec,
          setHeaSec,
          HeaExam,
          setHeaExam,
          HeaTotal,
          setHeaTotal,
          HeaPos,
          setHeaPos,
          HeaGrade,
          setHeaGrade,
          SocFirst,
          setSocFirst,
          SocSec,
          setSocSec,
          SocExam,
          setSocExam,
          SocTotal,
          setSocTotal,
          SocPos,
          setSocPos,
          SocGrade,
          setSocGrade,
          PhoFirst,
          setPhoFirst,
          PhoSec,
          setPhoSec,
          PhoExam,
          setPhoExam,
          PhoTotal,
          setPhoTotal,
          PhoPos,
          setPhoPos,
          PhoGrade,
          setPhoGrade,
          LanFirst,
          setLanFirst,
          LanSec,
          setLanSec,
          LanExam,
          setLanExam,
          LanTotal,
          setLanTotal,
          LanPos,
          setLanPos,
          LanGrade,
          setLanGrade,
          VerbalFirst,
          setVerbalFirst,
          VerbalSec,
          setVerbalSec,
          VerbalExam,
          setVerbalExam,
          VerbalTotal,
          setVerbalTotal,
          VerbalPos,
          setVerbalPos,
          VerbalGrade,
          setVerbalGrade,
          QuantFirst,
          setQuantFirst,
          QuantSec,
          setQuantSec,
          QuantExam,
          setQuantExam,
          QuantTotal,
          setQuantTotal,
          QuantPos,
          setQuantPos,
          QuantGrade,
          setQuantGrade,
          HistFirst,
          setHistFirst,
          HistSec,
          setHistSec,
          HistExam,
          setHistExam,
          HistTotal,
          setHistTotal,
          HistPos,
          setHistPos,
          HistGrade,
          setHistGrade,
          AgricFirst,
          setAgricFirst,
          AgricSec,
          setAgricSec,
          AgricExam,
          setAgricExam,
          AgricTotal,
          setAgricTotal,
          AgricPos,
          setAgricPos,
          AgricGrade,
          setAgricGrade,
          HoEconFirst,
          setHoEconFirst,
          HoEconSec,
          setHoEconSec,
          HoEconExam,
          setHoEconExam,
          HoEconTotal,
          setHoEconTotal,
          HoEconPos,
          setHoEconPos,
          HoEconGrade,
          setHoEconGrade,
          BasicFirst,
          setBasicFirst,
          BasicSec,
          setBasicSec,
          BasicExam,
          setBasicExam,
          BasicTotal,
          setBasicTotal,
          BasicPos,
          setBasicPos,
          BasicGrade,
          setBasicGrade,
          CompFirst,
          setCompFirst,
          CompSec,
          setCompSec,
          CompExam,
          setCompExam,
          CompTotal,
          setCompTotal,
          CompPos,
          setCompPos,
          CompGrade,
          setCompGrade,
          SpeDicFirst,
          setSpeDicFirst,
          SpeDicSec,
          setSpeDicSec,
          SpeDicExam,
          setSpeDicExam,
          SpeDicTotal,
          setSpeDicTotal,
          SpeDicPos,
          setSpeDicPos,
          SpeDicGrade,
          setSpeDicGrade,
          VocFirst,
          setVocFirst,
          VocSec,
          setVocSec,
          VocExam,
          setVocExam,
          VocTotal,
          setVocTotal,
          VocPos,
          setVocPos,
          VocGrade,
          setVocGrade,
          FrenchFirst,
          setFrenchFirst,
          FrenchSec,
          setFrenchSec,
          FrenchExam,
          setFrenchExam,
          FrenchTotal,
          setFrenchTotal,
          FrenchPos,
          setFrenchPos,
          FrenchGrade,
          setFrenchGrade,
          IgboFirst,
          setIgboFirst,
          IgboSec,
          setIgboSec,
          IgboExam,
          setIgboExam,
          IgboTotal,
          setIgboTotal,
          IgboPos,
          setIgboPos,
          IgboGrade,
          setIgboGrade,
          BusiFirst,
          setBusiFirst,
          BusiSec,
          setBusiSec,
          BusiExam,
          setBusiExam,
          BusiTotal,
          setBusiTotal,
          BusiPos,
          setBusiPos,
          BusiGrade,
          setBusiGrade,
          BasTechFirst,
          setBasTechFirst,
          BasTechSec,
          setBasTechSec,
          BasTechExam,
          setBasTechExam,
          BasTechTotal,
          setBasTechTotal,
          BasTechPos,
          setBasTechPos,
          BasTechGrade,
          setBasTechGrade,
          LiterateFirst,
          setLiterateFirst,
          LiterateSec,
          setLiterateSec,
          LiterateExam,
          setLiterateExam,
          LiterateTotal,
          setLiterateTotal,
          LiteratePos,
          setLiteratePos,
          LiterateGrade,
          setLiterateGrade,
          FMathsFirst,
          setFMathsFirst,
          FMathsSec,
          setFMathsSec,
          FMathsExam,
          setFMathsExam,
          FMathsTotal,
          setFMathsTotal,
          FMathsPos,
          setFMathsPos,
          FMathsGrade,
          setFMathsGrade,
          PhyFirst,
          setPhyFirst,
          PhySec,
          setPhySec,
          PhyExam,
          setPhyExam,
          PhyTotal,
          setPhyTotal,
          PhyPos,
          setPhyPos,
          PhyGrade,
          setPhyGrade,
          ChemFirst,
          setChemFirst,
          ChemSec,
          setChemSec,
          ChemExam,
          setChemExam,
          ChemTotal,
          setChemTotal,
          ChemPos,
          setChemPos,
          ChemGrade,
          setChemGrade,
          BioFirst,
          setBioFirst,
          BioSec,
          setBioSec,
          BioExam,
          setBioExam,
          BioTotal,
          setBioTotal,
          BioPos,
          setBioPos,
          BioGrade,
          setBioGrade,
          GeoFirst,
          setGeoFirst,
          GeoSec,
          setGeoSec,
          GeoExam,
          setGeoExam,
          GeoTotal,
          setGeoTotal,
          GeoPos,
          setGeoPos,
          GeoGrade,
          setGeoGrade,
          EconsFirst,
          setEconsFirst,
          EconsSec,
          setEconsSec,
          EconsExam,
          setEconsExam,
          EconsTotal,
          setEconsTotal,
          EconsPos,
          setEconsPos,
          EconsGrade,
          setEconsGrade,
          CommFirst,
          setCommFirst,
          CommSec,
          setCommSec,
          CommExam,
          setCommExam,
          CommTotal,
          setCommTotal,
          CommPos,
          setCommPos,
          CommGrade,
          setCommGrade,
          GovFirst,
          setGovFirst,
          GovSec,
          setGovSec,
          GovExam,
          setGovExam,
          GovTotal,
          setGovTotal,
          GovPos,
          setGovPos,
          GovGrade,
          setGovGrade,
          FnNutFirst,
          setFnNutFirst,
          FnNutSec,
          setFnNutSec,
          FnNutExam,
          setFnNutExam,
          FnNutTotal,
          setFnNutTotal,
          FnNutPos,
          setFnNutPos,
          FnNutGrade,
          setFnNutGrade,
          MarketFirst,
          setMarketFirst,
          MarketSec,
          setMarketSec,
          MarketExam,
          setMarketExam,
          MarketTotal,
          setMarketTotal,
          MarketPos,
          setMarketPos,
          MarketGrade,
          setMarketGrade,
          BKeepFirst,
          setBKeepFirst,
          BKeepSec,
          setBKeepSec,
          BKeepExam,
          setBKeepExam,
          BKeepTotal,
          setBKeepTotal,
          BKeepPos,
          setBKeepPos,
          BKeepGrade,
          setBKeepGrade,

          cali,
          setCali,
          verb,
          setVerb,
          game,
          setGame,
          sport,
          setSport,
          handT,
          setHandT,
          drawT,
          setDrawT,
          drAPt,
          setDrAPt,
          muSk,
          setMuSk,

          punc,
          setPunc,
          neat,
          setNeat,
          polite,
          setPolite,
          hone,
          setHone,
          coOp,
          setCoOp,
          lead,
          setLead,
          helpO,
          setHelpO,
          emoS,
          setEmoS,
          health,
          setHealth,
          atti,
          setAtti,
          attent,
          setAttent,
          speakH,
          setSpeakH,

          popul,
          setPopul,
          posi,
          setPosi,
          conduct,
          setConduct,
          classTS,
          setClassTS,
          headTS,
          setHeadTS,
          closing,
          setClosing,
          nTOpen,
          setNTOpen,
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
