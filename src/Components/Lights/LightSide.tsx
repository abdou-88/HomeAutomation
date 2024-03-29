// SongContainer.tsx
import React from "react";
import styled from "styled-components";


interface LightsContainerProps {
  lights: String[];
  
}

const LightSide: React.FC<LightsContainerProps> = ({
  
}) => {
  return (
    <StyledLightContainer>
    sth
    </StyledLightContainer>
  );
};

const StyledLightContainer = styled.div`
  flex-direction: column;
  color: #000000;
  width: 15vw;
`;



export default LightSide;
