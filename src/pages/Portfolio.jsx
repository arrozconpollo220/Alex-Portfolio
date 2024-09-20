// importing css file from the styles folder
import '../styles/portfolio.css';

// importing images from the assets folder
import slcEvent from '../assets/Screenshot of SLC Events.png';
import weatherDashboard from '../assets/Screenshot Weather Dash.png';
import noteTaker from '../assets/screenshot notetaker.png';


export default function Portfolio() {
  return (
    <div className='portPage'>
      <h1>Portfolio.</h1>
      <container className='portPage2'>
      <figure>
        <figcaption>SLC Events</figcaption>
        <a href="https://arrozconpollo220.github.io/SLC-Events/">
          <img src={slcEvent} alt="SLC Events" className='slcEventsImg' />
        </a>
      </figure>
      <figure>
        <figcaption>Weather Dashboard</figcaption>
        <a href="https://arrozconpollo220.github.io/Weather-Dashboard-App/">
          <img src={weatherDashboard} alt="SLC Events" className='weatherDashImg'/>
        </a>
      </figure>
      <figure>
        <figcaption>Note Taker</figcaption>
        <a href="https://note-taker-site-1.onrender.com">
          <img src={noteTaker} alt="SLC Events" className='noteTakerImg' />
        </a>
      </figure>
      </container>

    </div>
  );
}