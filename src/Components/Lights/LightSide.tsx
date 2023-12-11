// SongContainer.tsx
import React from "react";
import styled from "styled-components";


interface LightsContainerProps {
  lights: String[];
  
}

const LightContainer: React.FC<LightsContainerProps> = ({
  
}) => {
  return (
    <StyledSongContainer>
    
    </StyledSongContainer>
  );
};

const StyledSongContainer = styled.div`
  flex-direction: column;
  color: #000000;
`;


export default LightContainer;
