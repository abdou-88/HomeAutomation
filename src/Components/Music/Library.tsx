import React from "react";
import LibrarySong from "./LibrarySong";
import styled from "styled-components";

interface Song {
  name: string;
  cover: string;
  artist: string;
  audio: string;
  color: string[];
  id: string;
  active: boolean;
}

interface LibraryProps {
  songs: Song[];
  currentSong: Song;
  setCurrentSong: React.Dispatch<React.SetStateAction<Song>>;
  audioRef: React.MutableRefObject<HTMLAudioElement>;
  isPlaying: boolean;
  setSongs: React.Dispatch<React.SetStateAction<Song[]>>;
  libraryStatus: boolean;
}

const Library: React.FC<LibraryProps> = ({
  songs,
  currentSong,
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
  width: 20rem;
  height: 100%;
  background-color: white;
  box-shadow: 2px 2px 50px rgb(204, 204, 204);
  user-select: none;
  overflow: scroll;
  transform: translateX(${(p) => (p.libraryStatus ? "0%" : "-100%")});
  transition: all 0.5s ease;
  opacity: ${(p) => (p.libraryStatus ? "100" : "0")};
  scrollbar-width: thin;
  scrollbar-color: rgba(155, 155, 155, 0.5) transparent;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(155, 155, 155, 0.5);
    border-radius: 20px;
    border: transparent;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    z-index: 9;
  }
`;

const SongContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
`;

const H1 = styled.h2`
  padding: 2rem;
`;

export default Library;
