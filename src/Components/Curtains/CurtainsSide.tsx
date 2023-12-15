// SongContainer.tsx
import React from "react";
import styled from "styled-components";


interface LightsContainerProps {
  lights: String[];
  
}

const CurtainsSide: React.FC<LightsContainerProps> = ({
  
}) => {
  return (
    <StyledLightContainer>
    cutrains
    </StyledLightContainer>
  );
};

const StyledLightContainer = styled.div`
  flex-direction: column;
  color: #000000;
  width: 15vw;
`;



export default CurtainsSide;
