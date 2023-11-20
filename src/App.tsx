

import './App.css'
import BGVideo from "./assets/sample.mp4";
import Container from './Components/Container';

import Menu from './Components/Menu';

function App() {


  return (
    <>

      <div className="main-background">
        <video className="video-background" autoPlay loop muted>
          <source src={BGVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="main-container">
          <Container/>
          <Menu />
          <div className="sub-div">footer</div>
        </div>
      </div>
    </>
  );
}

export default App
