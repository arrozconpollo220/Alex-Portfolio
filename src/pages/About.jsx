import Emoji2 from '../assets/2.svg'

export default function About() {
    return (
      <div>
        <h1>About Page</h1>
        <p>
         This is the about page. Write about yourself here.
        </p>
        <img src={Emoji2} alt="Emoji of Alex" />
      </div>
    );
  }