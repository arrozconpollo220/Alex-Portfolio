// importing css file from the styles folder
import '../styles/experience.css';

// importing dead face project image from the images folder
import deadFace from '../assets/deadface screenshot.png';

export default function Experience() {
    return (
      <div className='exp'>
        <h1>Experience.</h1>
        <p>
        Dead Faces clothing line was created to get the client off of Shopify. 
        </p>
        <a href="https://deadxfaces.up.railway.app/">
        <img src= {deadFace} alt="dead face project"/>
        </a>
      </div>
    );
  }