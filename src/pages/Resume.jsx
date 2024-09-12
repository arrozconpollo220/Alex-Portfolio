// importing css file from the styles folder
import '../styles/resume.css';

// importing resume from the public folder
import ResumePage from '../assets/AR resume.jpg';

export default function Resume() {
    return (
      <div className='resume'>
        <h1>Resume.</h1>
      <h2>Take a look at my resume and feel free to download for your records.</h2>
      <img src={ResumePage} alt="Resume" />
      </div>
    );
  }