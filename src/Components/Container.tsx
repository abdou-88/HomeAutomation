
import { useState } from 'react';
import '../App.css';
import '../assets/Container.css';


function Container() {
    const [isFeeding, setIsFeeding] = useState(false);

    const handleClick = () => {
        setIsFeeding(!isFeeding);
    };
    return (
        <>
            <div className="sub-div" onClick={handleClick}>
                
                    <div className={`container ${isFeeding ? 'feed-in' : ''}`}>
                        main container
                    </div>
                
            </div>
        </>
    );
}

export default Container
