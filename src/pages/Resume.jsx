// importing resume from the public folder
import Resume from '../assets/AR resume.jpg';

export default function Resume() {
    return (
      <div>
        <h1>Resume</h1>
      <h2>Take a look at my resume and feel free to download for your records</h2>
      <img src={Resume} alt="Resume" />
      </div>
    );
  }