

import styled from 'styled-components';
import '../../assets/Curtains.css'
import { useState } from 'react';
import SidePanel from '../SidePanel';
import CurtainsSide from './CurtainsSide';
import Nav from '../Music/Nav';

interface CurtainsProps {
  content?: React.ReactNode | null;
  isOpen?: boolean;
}

const Curtains: React.FC<CurtainsProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleCurtains = () => {
    setIsOpen(!isOpen);
  };
  const [SidePanelStatus, setSidePanelStatus] = useState<boolean>(false);


  return (
    <>
      <AppContainer SidePanelStatus={SidePanelStatus}>
        <Nav SidePanelStatus={SidePanelStatus} setSidePanelStatus={setSidePanelStatus} Bttn="Setting" MainTitle="Curtains Control" />
        <LightControlContainer >

          <div className="curtains-container" onClick={toggleCurtains} >
            <div className="curtains-wrapper">
              <div className={`curtain left ${isOpen ? 'open' : ''}`}></div>
              <div className={`curtain right ${isOpen ? 'open' : ''}`}></div>
            </div>

            <div className="content-below-curtains">
              Corridor
            </div>
          </div>

        </LightControlContainer>


        <SidePanel
          component={CurtainsSide}
          componentProps={{
            lights: []
          }}
          SidePanelStatus={SidePanelStatus}
          SideTitle="Setting"
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



export default Curtains;
