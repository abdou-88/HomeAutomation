
import { useState } from 'react';
import './App.css'
import './assets/Menu.css'

import { Icon } from '@mdi/react';
import { mdiHomeAutomation, mdiMusic, mdiMovie } from '@mdi/js';

function Menu() {
    const [isFlipped, setIsFlipped] = useState([false, false, false]);

    const handleClick = (id: number ) => {
        const newArray = isFlipped.map((value, i) => (i == id ? !isFlipped[id] : false));
        setIsFlipped(newArray);
    };
    return (
        <>
            <div className="sub-div">
                <div className={`flip-container ${isFlipped[1] ? 'flip' : ''}`} onClick={() => handleClick(1)}>
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
                <div className={`flip-container ${isFlipped[2] ? 'flip' : ''}`} onClick={() => handleClick(2)}>
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
                <div className={`flip-container ${isFlipped[3] ? 'flip' : ''}`} onClick={() => handleClick(3)}>
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
