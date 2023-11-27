
import '../../assets/lights.css'
interface LightsProps {
    content?: React.ReactNode | null;
    isOpen?: boolean;
}

const Lights: React.FC<LightsProps> = () => {




    return (

        <div className='lights'>
           <div className='Singlight'>Corridor : <input className="l" type="checkbox"></input></div> 
           <div className='Singlight'>Bed Room :<input className="l" type="checkbox"></input></div>
            <div className='Singlight'>Corridor : <input className="l" type="checkbox"></input></div> 
           <div className='Singlight'>Bed Room :<input className="l" type="checkbox"></input></div> 
           <div className='Singlight'>Corridor : <input className="l" type="checkbox"></input></div> 
           <div className='Singlight'>Bed Room :<input className="l" type="checkbox"></input></div> 
           <div className='Singlight'>Corridor : <input className="l" type="checkbox"></input></div> 
           <div className='Singlight'>Bed Room :<input className="l" type="checkbox"></input></div> 
        </div>

    );
}

export default Lights
