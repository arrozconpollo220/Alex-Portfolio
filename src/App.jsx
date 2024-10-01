// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import './App.css';
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineX } from "react-icons/ai";
import { SiGmail } from "react-icons/si";





function App() {
  // Returning the Nav component and the Outlet component. The Outlet component is a placeholder for the child routes to be rendered.
  return (
    <>
      <Nav />
      <main className="mx-3">
        <Outlet />
        <footer className='footer'>
          <a href='https://www.linkedin.com/in/alexander-rodriguez-8a539117b/' target="_blank" ><AiFillLinkedin /></a>
          <a href='https://github.com/arrozconpollo220' target="_blank" >
            <AiFillGithub /></a>
          <a href='https://www.instagram.com/arrozconpollo220/' target="_blank" >
            <AiFillInstagram /></a>
          <a href='https://x.com/AlexRodri007' target="_blank" >
          <AiOutlineX /></a>
          <a href='mailto: alexander.rodriguez2121@gmail.com' target="_blank" >
          <SiGmail /></a>
        </footer>
      </main>
    </>
  );
}

export default App;