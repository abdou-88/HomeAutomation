import React from "react";
import LibrarySong from "./LibrarySong";
import styled from "styled-components";

import {LibraryProps} from '../../Types';

const SidePanel: React.FC<LibraryProps> = ({
  songs,  
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
}) => {
  return (
    <LibraryContainer libraryStatus={libraryStatus}>
      <H1>Library</H1>
      <SongContainer>
        {songs.map((song) => (
          <LibrarySong
            song={song}
            setCurrentSong={setCurrentSong}
            key={song.id}
            audioRef={audioRef}
            isPlaying={isPlaying}
            songs={songs}
            setSongs={setSongs}
          />
        ))}
      </SongContainer>
    </LibraryContainer>
  );
};

const LibraryContainer = styled.div<{ libraryStatus: boolean }>`
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  height: 100%;
  background-color: rgba(204,204,204,0.5);
  box-shadow: 2px 2px 50px rgb(204, 204, 204);
  user-select: none;
  overflow: auto  ;
  transform: translateX(${(p) => (p.libraryStatus ? "0%" : "-100%")});
  transition: all 0.5s ease;
  opacity: ${(p) => (p.libraryStatus ? "100" : "0")};
  scrollbar-width: thin;  
  border-right: 2px solid #fff;
  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(155, 155, 155, 0.5) transparent;
    border-radius: 20px;
    border: transparent;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    z-index: 9;
  }
`;

const SongContainer = styled.div`

  flex-direction: column;
  
  color : #000000;
 
`;

const H1 = styled.h2`
  padding: 2rem;
  color : #000000;
`;

export default SidePanel;
