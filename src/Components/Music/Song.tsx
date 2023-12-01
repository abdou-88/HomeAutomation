


import React from "react";
import styled from "styled-components";

interface SongProps {
  currentSong: {
    cover: string;
    name: string;
    artist: string;
    // Add other properties of the currentSong object as needed
  };
}

const Song: React.FC<SongProps> = ({ currentSong }) => {
  return (
    <SongContainer>
      <Img src={currentSong.cover} alt={currentSong.name}></Img>
      <H1>{currentSong.name}</H1>
      <H2>{currentSong.artist}</H2>
    </SongContainer>
  );
};

const SongContainer = styled.div`
  
  max-height: 60vh;

  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  width: 10%;
  border-radius: 50%;
  @media screen and (max-width: 768px) {
    width: 50%;
  }
`;

const H1 = styled.h2`
  padding: 3rem 1rem 1rem 1rem;
`;

const H2 = styled.h3`
  font-size: 1rem;
`;

export default Song;
