// importing css file from the styles folder
import '../styles/about.css';

// importing emoji from the assets folder
import Emoji2 from '../assets/2.svg';

export default function About() {
    return (
      <div className='about'>
        <h1>About.</h1>
       <h2>I'm a software engineer based in Salt Lake City Metropolitan area.</h2>
        <p>I have a passion for software development and love to create things that can help people in their daily lives. I have experience in building web applications using JavaScript, React, and Node.js. I am always looking for opportunities to learn and grow as a developer. When I'm not infront of the computer, I enjoy watching Football, listening to hiphop music, cooking with my family and traveling the world.</p>

       
        <img src={Emoji2} alt="Emoji of Alex" />
      </div>
    );
  }