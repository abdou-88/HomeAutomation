
import { useState } from 'react';
import './App.css'
import './assets/Menu.css'

import { Icon } from '@mdi/react';
import { mdiCurtains, mdiMusic, mdiMovie, mdiLightbulb, mdiHomeAutomation} from '@mdi/js';

function Menu() {
    const [isFlipped, setIsFlipped] = useState([false, false, false, false, false,false]);

    const handleClick = (id: number ) => {
        const newArray = isFlipped.map((_value, i) => (i == id ? !isFlipped[id] : false));
        setIsFlipped(newArray);
    };
    return (
        <>
            <div className="sub-div">
                <div className={`flip-container ${isFlipped[1] ? 'flip' : ''}`} onClick={() => handleClick(1)}>
                    <div className="flipper">
                        <div className="front">
                            <Icon path={mdiLightbulb}
                            size={4}
                            horizontal
                            vertical
                            rotate={180}
                            color="white" /></div>
                        <div className="back">Lights</div>
                    </div>
                </div>
                <div className={`flip-container ${isFlipped[2] ? 'flip' : ''}`} onClick={() => handleClick(2)}>
                    <div className="flipper">
                        <div className="front">
                            <Icon path={mdiCurtains}
                            size={4}
                            horizontal
                            vertical
                            rotate={180}
                            color="white" /></div>
                        <div className="back">Curtains</div>
                    </div>
                </div>
                <div className={`flip-container ${isFlipped[3] ? 'flip' : ''}`} onClick={() => handleClick(3)}>
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
                <div className={`flip-container ${isFlipped[4] ? 'flip' : ''}`} onClick={() => handleClick(4)}>
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
                <div className={`flip-container ${isFlipped[5] ? 'flip' : ''}`} onClick={() => handleClick(5)}>
                    <div className="flipper">
                        <div className="front">
                            <Icon path={mdiHomeAutomation}
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
