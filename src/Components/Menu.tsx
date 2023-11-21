
import { ReactNode, useState } from 'react';
import '../App.css'
import '../assets/Menu.css'

import { Icon } from '@mdi/react';
import { mdiCurtains, mdiMusic, mdiMovie, mdiLightbulb, mdiHomeAutomation} from '@mdi/js';
import Lights from './Lights/Lights';
import Curtains from './Curtains/Curtains';
import Music from './Music/Music';
import Movies from './Movies/Movies';
import Appliances from './Appliances/Appliances';


interface MenuProps {
    updateContainer: (newState: React.ReactNode, isOpen: boolean) => void;
}

const Menu: React.FC<MenuProps> = ({ updateContainer }) => {
    const [isFlipped, setIsFlipped] = useState([true, false, false, false, false,false]);

    const handleClick = (id: number, newdiv: ReactNode ) => {
        const newArray = isFlipped.map((_value, i) => (i == id ? !isFlipped[id] : false));
        setIsFlipped(newArray);
       
        updateContainer(newdiv, isFlipped[id]);
        
    };
  

    return (
        <>
            <div className="sub-div">
                <div className={`flip-container ${isFlipped[1] ? 'flip' : ''}`} onClick={() => handleClick(1, <Lights/>)}>
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
                <div className={`flip-container ${isFlipped[2] ? 'flip' : ''}`} onClick={() => handleClick(2, <Curtains/>)}>
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
                <div className={`flip-container ${isFlipped[3] ? 'flip' : ''}`} onClick={() => handleClick(3, <Music />)}>
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
                <div className={`flip-container ${isFlipped[4] ? 'flip' : ''}`} onClick={() => handleClick(4, <Movies />)}>
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
                <div className={`flip-container ${isFlipped[5] ? 'flip' : ''}`} onClick={() => handleClick(5, <Appliances />)}>
                    <div className="flipper">
                        <div className="front">
                            <Icon path={mdiHomeAutomation}
                                size={4}
                                horizontal
                                vertical
                                rotate={180}
                                color="white" /></div>
                        <div className="back">Appliances</div>
                    </div>
                </div>
                
            </div>
        </>
    );
}

export default Menu
