
import React, { useState, useRef } from "react";
import styled from "styled-components";
import "../../App.css";

// Import components
import Player from "./Player";
import Track from "./Track";
import SidePanel from "../SidePanel";
import Nav from "./Nav";

import {Song} from '../../Types'

// Import data
import data from "./Data";



const Music: React.FC = () => {

  const audioRef = useRef<HTMLAudioElement>(null!); 

  const [songs, setSongs] = useState<Song[]>(data());
  const [currentSong, setCurrentSong] = useState<Song>(songs[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [SidePanelStatus, setSidePanelStatus] = useState<boolean>(false);
  const [songInfo, setSongInfo] = useState<{ currentTime: number; duration: number }>({
    currentTime: 0,
    duration: 0,
  });

  const updateTimeHandler = (e: React.SyntheticEvent<HTMLAudioElement>) => {
    const currentTime = e.currentTarget.currentTime;
    const duration = e.currentTarget.duration;
    setSongInfo({ ...songInfo, currentTime, duration });
  };

  const songEndHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    let nextSong = songs[(currentIndex + 1) % songs.length];
    await setCurrentSong(nextSong);

    const newSongs = songs.map((song) =>
      song.id === nextSong.id ? { ...song, active: true } : { ...song, active: false }
    );
    setSongs(newSongs);

    if (isPlaying) {
      audioRef.current?.play();
    }
  };

  return (
    <AppContainer SidePanelStatus={SidePanelStatus}>
      <Nav SidePanelStatus={SidePanelStatus} setSidePanelStatus={setSidePanelStatus} />
      <Track currentSong={currentSong} />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        songs={songs}
        setSongs={setSongs}
      />
      <SidePanel
        currentSong={currentSong} // Make sure currentSong is included here
        songs={songs}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setSongs={setSongs}
        SidePanelStatus={SidePanelStatus}
      />
      <audio
        onLoadedMetadata={updateTimeHandler}
        onTimeUpdate={updateTimeHandler}
        onEnded={songEndHandler}
        ref={audioRef}
        src={currentSong.audio}
      />
    </AppContainer>
  );
};

const AppContainer = styled.div<{ SidePanelStatus: boolean }>`
  transition: all 0.5s ease;
  width: 100%;
  height: 100%; 
  margin-left: ${(p) => (p.SidePanelStatus ? "20rem" : "0")};
  @media screen and (max-width: 768px) {
    margin-left: 0;
  }
`;

export default Music;

