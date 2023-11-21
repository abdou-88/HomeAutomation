
import '../App.css';
import '../assets/Container.css';

interface ContainerProps {
    content: React.ReactNode | null;
    isOpen: boolean;
}

const Container: React.FC<ContainerProps> = ({ content, isOpen }) => {

   
   
  
    return (
        <>
            <div className="sub-div" >
                
                <div className={`container ${isOpen ? 'feed-in' : ''}`}>
                    {content}
                    </div>
                
            </div>
        </>
    );
}

export default Container
