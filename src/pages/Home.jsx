import Emoji1 from '../assets/Portfolio Alex.svg'

export default function Home() {
    return (
      <div>
        <h3>Hi, I'm</h3>
        <h1>Alex</h1>
        <h3>Software Engineer & full-Stack Web Developer.</h3>
        <p>
            This is the Home page. Add some text here.
        </p>
       <img src={Emoji1} alt="Emoji of Alex" />
      </div>
      
    );
  }