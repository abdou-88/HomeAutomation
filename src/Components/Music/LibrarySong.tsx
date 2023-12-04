import React from "react";
import styled from "styled-components";
import {LibrarySongProps} from '../../Types';


const LibrarySong: React.FC<LibrarySongProps> = ({
  song,
  setCurrentSong,
  audioRef,
  isPlaying,
  songs,
  setSongs,
}) => {
  const songSelectHandler = async () => {
    await setCurrentSong(song);
    const curSong = song;
    const songList = songs;

    const newSongs = songList.map((s) => {
      if (s.id === curSong.id) {
        return {
          ...s,
          active: true,
        };
      } else {
        return {
          ...s,
          active: false,
        };
      }
    });
    setSongs(newSongs);

    if (isPlaying) {
      audioRef.current.play();
    }
  };

  return (
    <LibrarySongContainer onClick={songSelectHandler} isActive={song.active}>
      <Img src={song.cover} alt={song.name}></Img>
      <LibrarySongDescription>
        <H1>{song.name}</H1>
        <H2>{song.artist}</H2>
      </LibrarySongDescription>
    </LibrarySongContainer>
  );
};

const LibrarySongContainer = styled.div<{ isActive: boolean }>`
  padding: 0 2rem 0 2rem; 
  display: flex;
  transition: all 0.3s ease;
  background-color: ${(p) => (p.isActive ? "#cccccc" : "transparent")};
  &:hover {
    background-color: lightblue;
    transition: all 0.3s ease;
  }
  &.active {
    background-color: pink;
  }
`;

const LibrarySongDescription = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Img = styled.img`
  margin: 20px 0;
  height: 60px;
`;

const H1 = styled.h3`
  padding-left: 1rem;
  font-size: 1rem;
`;

const H2 = styled.h4`
  padding-left: 1rem;
  font-size: 0.7rem;
`;

export default LibrarySong;
