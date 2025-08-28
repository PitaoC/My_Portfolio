import MyHeader from './components/MyHeaders/MyHeader';
import MyName from './components/Mynames/MyName';
import MyContact from './components/MyContacts/MyContact';
import MyTeam from './components/MyTeams/MyTeam';
import './App.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SmoothScroll from 'smooth-scroll';

function App() {
      const location = useLocation();
      useEffect(() => {
          if (location.hash) {
              const id = location.hash.replace('', '');
              const anchor = document.getElementById(id);
              if (anchor) {
                  const scroll = new SmoothScroll();
                  scroll.animateScroll(anchor);
              }
          }
      }, [location]);
  return (
    <div className="App">
      <MyHeader />
      <MyName />
      <MyTeam />
      <MyContact />
    </div>
  );
}

export default App;

