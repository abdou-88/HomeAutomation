import React from "react";
import LibrarySong from "..//Music/LibrarySong";
import styled from "styled-components";

import {MusicSideProps} from '../../Types';

const MusicSide: React.FC<MusicSideProps> = ({
  songs,  
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs
  
}) => {
  return (
    
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
    
  );
};



const SongContainer = styled.div`
  flex-direction: column;  
  color : #000000; 
`;


export default MusicSide;
