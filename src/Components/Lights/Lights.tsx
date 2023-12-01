
import '../../assets/lights.css'
interface LightsProps {
    content?: React.ReactNode | null;
    isOpen?: boolean;
}

const Lights: React.FC<LightsProps> = () => {




    return (
        <>
        <h1 style={{fontSize:'3.5em',position:'fixed', top:'5px' ,left:'5px'}}>Lights:</h1>
        <div className='lights'>
            <div className='Singlight'>Leaving Room : <input className="l" type="checkbox"></input></div>
            <div className='Singlight'>Bed Room :<input className="l" type="checkbox"></input></div>
            <div className='Singlight'>Main Corridor :<input className="l" type="checkbox"></input></div>
            <div className='Singlight'>Adam Room :<input className="l" type="checkbox"></input></div>
            <div className='Singlight'>Corridor 1 : <input className="l" type="checkbox"></input></div>
            <div className='Singlight'>Kitchen :<input className="l" type="checkbox"></input></div>
            <div className='Singlight'>Corridor 2 : <input className="l" type="checkbox"></input></div>
            <div className='Singlight'>Shower :<input className="l" type="checkbox"></input></div>
            <div className='Singlight'>Toilet : <input className="l" type="checkbox"></input></div>
           
            
        </div>
</>

    );
}

export default Lights
