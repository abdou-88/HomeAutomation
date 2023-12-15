
import styled from 'styled-components';
import '../../assets/lights.css'
import { useState } from 'react';
import SidePanel from '../SidePanel';
import LightSide from './LightSide';
import Nav from '../Music/Nav';

interface LightsProps {
    content?: React.ReactNode | null;
    isOpen?: boolean;
}

const Lights: React.FC<LightsProps> = () => {

    const [SidePanelStatus, setSidePanelStatus] = useState<boolean>(false);


    return (
        <>
            <AppContainer SidePanelStatus={SidePanelStatus}>
                <Nav SidePanelStatus={SidePanelStatus} setSidePanelStatus={setSidePanelStatus} Bttn="Setting" MainTitle="Lights Control" />
                <LightControlContainer>

                    <div className='Singlight'>Leaving Room : <input className="l" type="checkbox"></input></div>
                    <div className='Singlight'>Bed Room :<input className="l" type="checkbox"></input></div>
                    <div className='Singlight'>Main Corridor :<input className="l" type="checkbox"></input></div>
                    <div className='Singlight'>Adam Room :<input className="l" type="checkbox"></input></div>
                    <div className='Singlight'>Corridor 1 : <input className="l" type="checkbox"></input></div>
                    <div className='Singlight'>Kitchen :<input className="l" type="checkbox"></input></div>
                    <div className='Singlight'>Corridor 2 : <input className="l" type="checkbox"></input></div>
                    <div className='Singlight'>Shower :<input className="l" type="checkbox"></input></div>
                    <div className='Singlight'>Toilet : <input className="l" type="checkbox"></input></div>

                </LightControlContainer>


                <SidePanel
                    component={LightSide}
                    componentProps={{
                        lights: []
                    }}
                    SidePanelStatus={SidePanelStatus}
                    SideTitle = "Setting"
                />
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
const LightControlContainer = styled.div`
    display: flex;
	flex-direction: column  ;
	align-items: center;
    font-size: 30px;
	max-height: 80%; 
    overflow: auto;
    justify-content: space-between; 
	width: 100%;
	display: flex;
	@media screen and (max-width: 768px) {
		width: 85%;
	}
`;



export default Lights
