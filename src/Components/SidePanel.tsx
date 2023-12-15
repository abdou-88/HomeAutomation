import React from "react";
import styled from "styled-components";


interface SidePanelProps<T extends {}> {
  component: React.ComponentType<T>;
  componentProps: T;
  SidePanelStatus: boolean;
  SideTitle: string;
}

const SidePanel = <T extends {}>({ component: Component, componentProps, SidePanelStatus, SideTitle }: SidePanelProps<T>) => {
  
  return (
    <SidePanelContainer SidePanelStatus={SidePanelStatus}>
      <H1>{SideTitle}</H1>
      <Component {...componentProps} />
    </SidePanelContainer>
  );
};

const SidePanelContainer = styled.div<{ SidePanelStatus: boolean }>`
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  height: 100%;
  background-color: rgba(204,204,204,0.5);
  box-shadow: 2px 2px 50px rgb(204, 204, 204);
  user-select: none;
  overflow: auto  ;
  transform: translateX(${(p) => (p.SidePanelStatus ? "0%" : "-100%")});
  transition: all 0.5s ease;
  opacity: ${(p) => (p.SidePanelStatus ? "100" : "0")};
  scrollbar-width: thin;  
  border-right: 2px solid #fff;
  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(155, 155, 155, 0.5) transparent;
    border-radius: 20px;
    border: transparent;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    z-index: 9;
  }
`;

const H1 = styled.h2`
  padding: 2rem;
  color : #000000;
`;

export default SidePanel;
