export interface Song {
    name: string;
    cover: string;
    artist: string;
    audio: string;
    color: string[];
    id: string;
    active: boolean;
  }
  
  export interface LibraryProps {
    songs: Song[];
    currentSong: Song;
    setCurrentSong: React.Dispatch<React.SetStateAction<Song>>;
    audioRef: React.MutableRefObject<HTMLAudioElement>;
    isPlaying: boolean;
    setSongs: React.Dispatch<React.SetStateAction<Song[]>>;
    libraryStatus: boolean;
  }

  export  interface SongProps {
    currentSong: {
      cover: string;
      name: string;
      artist: string;
      // Add other properties of the currentSong object as needed
    };
  }


  export interface LibrarySongProps {
    song: Song;
    setCurrentSong: React.Dispatch<React.SetStateAction<Song>>;
    audioRef: React.MutableRefObject<HTMLAudioElement>;
    isPlaying: boolean;
    songs: Song[];
    setSongs: React.Dispatch<React.SetStateAction<Song[]>>;
  }

  export interface Song {
	id: string;
	// Define other properties of your song object here
	color: string[];
	active: boolean;
	// Add any other properties specific to a song
  }
  export interface AnimateTrackProps {
	songInfo: {
	  currentTime: number;
	  duration: number;
	};
  }
  

  export interface IPlayerProps  {
	currentSong: any,
	setCurrentSong: any,
	isPlaying: boolean,
	setIsPlaying: any,
	audioRef: any,
	songInfo: any,
	setSongInfo: any,
	songs: any,
	setSongs: any,
}
 export interface NavProps {
   libraryStatus: boolean;
   setLibraryStatus: React.Dispatch<React.SetStateAction<boolean>>;
 }