

import { ReactNode,  useState } from 'react';
import './App.css'
import BGVideo from "./assets/sample.mp4";
import Container from './Components/Container';

import Menu from './Components/Menu';
 

const App: React.FC = () => {
  const [containerData, setChildBState] = useState<ReactNode | null>(null);

  const [isContainerOpen, setIsContainerOpen] = useState(false);


  const updateContainerData = (newState: ReactNode, isOpen: boolean) => {
    setChildBState(newState);
    setIsContainerOpen(!isOpen);
  };

  return (

    <>

      <div className="main-background">
        <video className="video-background" autoPlay loop muted>
          <source src={BGVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="main-container">
          <Container content={containerData} isOpen={isContainerOpen} />
          <Menu updateContainer={updateContainerData}   />
          <div className="sub-div">footer</div>
        </div>
      </div>
    </>
   
  );
};

export default App;
