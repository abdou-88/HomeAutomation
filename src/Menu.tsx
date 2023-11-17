
import { useState } from 'react';
import './App.css'
import './assets/Menu.css'

import { Icon } from '@mdi/react';
import { mdiHomeAutomation, mdiMusic, mdiMovie } from '@mdi/js';

function Menu() {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };
    return (
        <>
            <div className="sub-div">
                <div className={`flip-container ${isFlipped ? 'flip' : ''}`} onClick={handleClick}>
                    <div className="flipper">
                        <div className="front">
                            <Icon path={mdiHomeAutomation}
                            size={4}
                            horizontal
                            vertical
                            rotate={180}
                            color="white" /></div>
                        <div className="back">Home Control</div>
                    </div>
                </div>
                <div className={`flip-container ${isFlipped ? 'flip' : ''}`} onClick={handleClick}>
                    <div className="flipper">
                        <div className="front">
                            <Icon path={mdiMusic}
                            size={4}
                            horizontal
                            vertical
                            rotate={180}
                            color="white" /></div>
                        <div className="back">Music</div>
                    </div>
                </div>
                <div className={`flip-container ${isFlipped ? 'flip' : ''}`} onClick={handleClick}>
                    <div className="flipper">
                        <div className="front">
                            <Icon path={mdiMovie}
                                size={4}
                                horizontal
                                vertical
                                rotate={180}
                                color="white" /></div>
                        <div className="back">Movies</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Menu
