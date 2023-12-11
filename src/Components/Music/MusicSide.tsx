// SongContainer.tsx
import React from "react";
import styled from "styled-components";
import { Song } from "../../Types";
import LibrarySong from "./LibrarySong";

interface SongContainerProps {
  songs: Song[];
  setCurrentSong: React.Dispatch<React.SetStateAction<Song>>;
  audioRef: React.MutableRefObject<HTMLAudioElement>;
  isPlaying: boolean;
  setSongs: React.Dispatch<React.SetStateAction<Song[]>>;
}

const SongContainer: React.FC<SongContainerProps> = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
}) => {
  return (
    <StyledSongContainer>
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
    </StyledSongContainer>
  );
};

const StyledSongContainer = styled.div`
  flex-direction: column;
  color: #000000;
`;


export default SongContainer;
