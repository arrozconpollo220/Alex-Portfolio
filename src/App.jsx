// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import './App.css';




function App() {
  // Returning the Nav component and the Outlet component. The Outlet component is a placeholder for the child routes to be rendered.
  return (
    <>
      <Nav />
      <main className="mx-3">
        <Outlet />
        <footer>
        
        This is a footer
        </footer>
      </main>
    </>
  );
}

export default App;