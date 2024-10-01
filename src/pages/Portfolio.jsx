// importing css file from the styles folder
import '../styles/portfolio.css';

// importing images from the assets folder
import slcEvent from '../assets/Screenshot of SLC Events.png';
import weatherDashboard from '../assets/Screenshot Weather Dash.png';
import noteTaker from '../assets/screenshot notetaker.png';
import pigskin from '../assets/PPscreenshot.png';


export default function Portfolio() {
  return (
    <div className='portPage'>
      <h1>Portfolio.</h1>
      <container className='portPage2'>
      <figure>
        <figcaption>SLC Events</figcaption>
        <a href="https://arrozconpollo220.github.io/SLC-Events/" target="_blank" >
          <img src={slcEvent} alt="SLC Events" className='slcEventsImg' />
        </a>
      </figure>
      <figure>
        <figcaption>Pigskin Pachanga</figcaption>
        <a href="https://pigskin-pachanga.up.railway.app/" target="_blank" >
          <img src={ pigskin } alt="SLC Events" className='pigskinPachanga' />
        </a>
      </figure>
      <figure>
        <figcaption>Weather Dashboard</figcaption>
        <a href="https://arrozconpollo220.github.io/Weather-Dashboard-App/" target="_blank" >
          <img src={weatherDashboard} alt="SLC Events" className='weatherDashImg'/>
        </a>
      </figure>
      <figure>
        <figcaption>Note Taker</figcaption>
        <a href="https://note-taker-site-1.onrender.com" target="_blank" >
          <img src={noteTaker} alt="SLC Events" className='noteTakerImg' />
        </a>
      </figure>
      </container>

    </div>
  );
}