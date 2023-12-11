import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

import { NavProps } from '../../Types';

const Nav: React.FC<NavProps> = ({ SidePanelStatus, setSidePanelStatus }) => {
  return (
    <><Button onClick={() => setSidePanelStatus(!SidePanelStatus)}>
      Library
      <FontAwesomeIcon icon={faMusic} />
    </Button>
      <NavContainer>
        <H1 SidePanelStatus={SidePanelStatus}>Music Player</H1>
      </NavContainer></>

  );
};

const NavContainer = styled.div`
  min-height: 10vh;  
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 768px) {
    position: fixed;
    z-index: 10;
    top: 10px;
    left: 0;
    width: 100%;
  }
`;

const H1 = styled.h1<{ SidePanelStatus: boolean }>`
  transition: all 0.5s ease;
  color: #ffffff;
  @media screen and (max-width: 768px) {
    visibility: ${(p) => (p.SidePanelStatus ? "hidden" : "visible")};
    opacity: ${(p) => (p.SidePanelStatus ? "0" : "100")};
    transition: all 0.5s ease;
    color: #ffffff;
  }
`;

const Button = styled.button`
  background: #ccc;
  position : absolute;
  right: 10px;
  top: 10px;
  border: none;
  cursor: pointer;
  border: 2px solid rgb(65, 65, 65);
  padding: 0.5rem;
  transition: all 0.3s ease;
  &:hover {
    background: rgb(65, 65, 65);
    color: white;
  }
`;

export default Nav;
