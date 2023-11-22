
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
interface ImenuItems {
    icon: string;
    component: JSX.Element;
}

const Menu: React.FC<MenuProps> = ({ updateContainer }) => {
    
    const [isFlipped, setIsFlipped] = useState([true, false, false, false, false,false]);

    const handleClick = (id: number, newdiv: ReactNode ) => {
        const newArray = isFlipped.map((_value, i) => (i == id ? !isFlipped[id] : false));
        setIsFlipped(newArray);
       
        updateContainer(newdiv, isFlipped[id]);
        
    };

    const menuItems: ImenuItems[] = [
        {
            icon: mdiLightbulb,
            component: <Lights />,
        },
        {
            icon: mdiCurtains,
            component: <Curtains />,
        },
        {
            icon: mdiMusic,
            component: <Music />,
        },
        {
            icon: mdiMovie,
            component: <Movies />,
        },
        {
            icon: mdiHomeAutomation,
            component: <Appliances />,
        },
    ];

   

    return (
        <>
            <div className="sub-div">
                
                    {menuItems.map((object: ImenuItems, index: number) => (
                        <div key={index} className={`flip-container ${isFlipped[index] ? 'flip' : ''}`} onClick={() => handleClick(index, object.component)}>
                            <div className="flipper">
                                <div className="front">
                                    <Icon path={object.icon}
                                        size={4}
                                        horizontal
                                        vertical
                                        rotate={180}
                                        color="white" /></div>
                                <div className="back">Lights</div>
                            </div>
                        </div>
                    ))}
              
            
            </div>
        </>
    );
}

export default Menu
