import { useEffect, useState, createContext, useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

export const MusicContext = createContext();


//Music from https://thinknews.com.ng/

const golden = [
    {
      id: 0,
      artist: "Rema",
      name: "Calm Down",
      audio:
        "https://www.voxlyrics.com/wp-content/uploads/2022/02/Rema_-_Calm_Down.mp3",
    },
    {
      id: 1,
      artist: "Burna Boy",
      name: "Last Last",
      audio:
        "Burna_Boy_Last_Last_(thinkNews.com.ng).mp3",
    },
    {
      id: 2,
      artist: "Bad Bunny",
      name: "Tití Me Preguntó",
      audio:
        "Bad_Bunny_Tití_Me_Preguntó_(thinkNews.com.ng).mp3",
    },
    {
      id: 3,
      artist: "Harry Styles",
      name: "As It Was",
      audio:
        "Harry_Styles_-_As_It_Was_Latestnaijamusic.com.mp3",
    },
    {
      id: 4,
      artist: "Rosalía",
      name: "Despechá",
      audio:
        "ROSALÍA_DESPECHÁ_(thinkNews.com.ng).mp3",
    },
    {
      id: 5,
      artist: "Steve Lacy",
      name: "Bad Habit",
      audio:
        "Steve_Lacy_-_Bad_Habit_Latestnaijamusic.com.mp3",
    },
    {
      id: 6,
      artist: "The Weeknd",
      name: "Less Than Zero",
      audio:
        "The_Weeknd_Less_Than_Zero_(thinkNews.com.ng).mp3",
    },
    {
      id: 7,
      artist: "Mr Kleb Ft. Stephen & OBIdients",
      name: "Ellu P",
      audio:
        "Mr_Kleb_Ft_Stephen_Obidients_-_Elu_P.mp3",
    },
    {
      id: 8,
      artist: "Beyonce",
      name: "Break My Soul",
      audio:
        "Beyonc_-_BREAK_MY_SOUL_360media.com.ng.mp3",
    },
  ];

export const MusicContextPage = ({ children }) => {

    
  // const [releases, setReleases] = useState([])
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [volume, setVolume] = useState("1");


  useEffect(() => {
    const newCurrentSongIndex = Math.floor(Math.random() * 9);
    setCurrentSongIndex(newCurrentSongIndex);
    console.log(newCurrentSongIndex)
  }, []);
  

  const getCurrDuration = (e) => {
    const percent = (
      (e.currentTarget.currentTime / e.currentTarget.duration) *
      100
    ).toFixed(2);
    const time = e.currentTarget.currentTime;

    setPercentage(+percent);
    setCurrentTime(time.toFixed(2));
  };

  const audioEl = useRef(null);

  // for goldenAge
  const playerAudio6Ref = useRef(null);
  const playerImage6Ref = useRef(null);
  const playerName6Ref = useRef(null);
  const playerArtist6Ref = useRef(null);

  const PlayerBoxRef = useRef(null);

  
  // shuffle an repeat state
  const [repeat, setRepeat] = useState(true);
  const [shuffle, setShuffle] = useState(true);
 

  return (
    <>
      <MusicContext.Provider
        value={{
          
  
            golden,
  
            currentSongIndex,
            setCurrentSongIndex,
            nextSongIndex,
            setNextSongIndex,
            isPlaying,
            setIsPlaying,
            duration,
            setDuration,
            currentTime,
            setCurrentTime,
            percentage,
            setPercentage,
            volume,
            setVolume,
            repeat,
            setRepeat,
            shuffle,
            setShuffle,
            getCurrDuration,
            audioEl,
            // for goldenAge
            playerAudio6Ref,
            playerImage6Ref,
            playerName6Ref,
            playerArtist6Ref,
            PlayerBoxRef,
        }}
      >
        {children}
      </MusicContext.Provider>
    </>
  );
};

export const MusicPass = () => {
  return useContext(MusicContext);
};
