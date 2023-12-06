
import styled from 'styled-components';
import '../../assets/lights.css'

interface LightsProps {
    content?: React.ReactNode | null;
    isOpen?: boolean;
}

const Lights: React.FC<LightsProps> = () => {




    return (
        <>
            <AppContainer SidePanelStatus={true}>

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


            </AppContainer>

        </>

    );
}
const AppContainer = styled.div<{ SidePanelStatus: boolean }>`
  transition: all 0.5s ease;
  width: 100%;
  height: 100%; 
  margin-left: ${(p) => (p.SidePanelStatus ? "20rem" : "0")};
  @media screen and (max-width: 768px) {
    margin-left: 0;
  }
`;


export default Lights
