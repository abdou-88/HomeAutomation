
import React, { useEffect, useState } from 'react';
import { Container, IconButton, Slider } from '@mui/material';
import { PlayArrow, Pause, SkipNext, SkipPrevious } from '@mui/icons-material';
import { Howl } from 'howler';
import '../../assets/Music.css'


interface MusicProps {
    content?: React.ReactNode | null;
    isOpen?: boolean;
}
interface Track {
    title: string;
    audioSrc: string;
}


const tracks: Track[] = [
    {
        title: 'Track 1',
        audioSrc: 'C:/Users/abdou/Desktop/VS Projects/HomeAutomation/public/T1.mp3',
    },
    {
        title: 'Track 2',
        audioSrc: 'C:/Users/abdou/Desktop/VS Projects/HomeAutomation/public/T2.mp3',
    },
    {
        title: 'Track 3',
        audioSrc: 'C:/Users/abdou/Desktop/VS Projects/HomeAutomation/public/T3.mp3',
    },
    // Add more tracks as needed
];


const Music: React.FC<MusicProps> = () => {

    const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [audio, setAudio] = useState<Howl | null>(null);


    useEffect(() => {
        setAudio(
            new Howl({
                src: [tracks[currentTrackIndex].audioSrc],
                onend: () => handleNextTrack(),
                onloaderror: (id, error) => {
                    console.error('Error loading sound:', error);
                },
            })
        );
    }, [currentTrackIndex]);

    const handlePlayPause = () => {
        if (audio) {
            if (isPlaying) {
                audio.pause();
            } else {
                audio.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleNextTrack = () => {
        if (currentTrackIndex < tracks.length - 1) {
            setCurrentTrackIndex(currentTrackIndex + 1);
            setIsPlaying(false);
        }
    };

    const handlePrevTrack = () => {
        if (currentTrackIndex > 0) {
            setCurrentTrackIndex(currentTrackIndex - 1);
            setIsPlaying(false);
        }
    };


    const handleSliderChange = (_event: Event, newValue: number | number[]) => {
        if (audio) {
        const seekTime = typeof newValue === 'number' ? newValue : newValue[0];
        audio.seek(seekTime);}
    };

    const containerStyles = {
        // Add your styling properties here
        display: 'flex',
        height: '100%',
        width : '100%',
    };

    return (
        <Container style={containerStyles} >

            <div className="side-by-side">
                <h2>Tracks</h2>
                <ul>
                    {tracks.map((track, index) => (
                        <li key={index} onClick={() => setCurrentTrackIndex(index)}>
                            {track.title}
                        </li>
                    ))}
                </ul>
            </div>
            
            <div className="side-by-side">
                <h1>{tracks[currentTrackIndex].title}</h1>
                <div className="controls-container">
                    <IconButton onClick={handlePrevTrack}>
                        <SkipPrevious />
                    </IconButton>
                    <IconButton onClick={handlePlayPause}>
                        {isPlaying ? <Pause /> : <PlayArrow />}
                    </IconButton>
                    <IconButton onClick={handleNextTrack}>
                        <SkipNext />
                    </IconButton>
                    {audio && (
                        <div>
                            <Slider
                                style={containerStyles}
                                value={audio.seek()}
                                min={0}
                                max={audio.duration()}
                                onChange={handleSliderChange}
                                aria-labelledby="continuous-slider"
                            />
                        </div>
                    )}
                </div>
            </div>

        </Container>
    );

}

export default Music



