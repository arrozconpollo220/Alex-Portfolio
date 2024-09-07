// importing css file from the styles folder
import '../styles/experience.css';

// importing dead face project image from the images folder
import deadFace from '../assets/deadface screenshot.png';

export default function Experience() {
    return (
      <div>
        <h1>Experience</h1>
        <p>
This is the Experience page. add dead face project here
        </p>
        <img src= {deadFace} alt="dead face project" />
      </div>
    );
  }