// importing css file from the styles folder
import '../styles/home.css';

//importing photo from the assets folder
import Emoji1 from '../assets/Portfolio Alex.svg'

export default function Home() {
    return (
      <div className='intro'>
       
        <h3 className='hi'>Hi, I'm</h3>
        <h1 className= 'alex'>Alex.</h1>
        <h3 className='software'>I'm a Software Engineer.</h3>
      
       <img src={Emoji1} alt="Emoji of Alex" className= 'helloPhoto' />
      </div>
      
    );
  }