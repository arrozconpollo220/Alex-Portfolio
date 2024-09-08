// importing css file from the styles folder
import '../styles/portfolio.css';

// importing images from the assets folder
import slcEvent from '../assets/Screenshot of SLC Events.png';
import weatherDashboard from '../assets/Screenshot Weather Dash.png';
import noteTaker from '../assets/screenshot notetaker.png';

export default function Portfolio() {
    return (
      <div>
        <h1>Portfolio</h1>
       <p>Write a paragraph</p>
       <figure>
        <figcaption>SLC Events</figcaption>
          <img src= {slcEvent} alt="SLC Events" />   
       </figure>
       <figure>
        <figcaption>Weather Dashboard</figcaption>
          <img src= {weatherDashboard} alt="SLC Events" />   
       </figure>
       <figure>
        <figcaption>Note Taker</figcaption>
          <img src= {noteTaker} alt="SLC Events" />   
       </figure>

      </div>
    );
  }