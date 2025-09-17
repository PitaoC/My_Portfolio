
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mynames from './components/MyNames/Mynames';
import Myheaders from './components/MyHeaders/Myheaders';
import Navbar from './components/Navbar';
// import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import SmoothScroll from 'smooth-scroll';
import Mycontacts from './components/Mycontacts';
import MyTeams from './components/MyTeams';

function App() {
      // const location = useLocation();
      // useEffect(() => {
      //     if (location.hash) {
      //         const id = location.hash.replace('', '');
      //         const anchor = document.getElementById(id);
      //         if (anchor) {
      //             const scroll = new SmoothScroll();
      //             scroll.animateScroll(anchor);
      //         }
      //     }
      // }, [location]);
  return (
    <div className="App overflow-x-hidden scroll-smooth caret-transparent">
      <Navbar />
      <Myheaders />
      <Mynames />
      <MyTeams />
      <Mycontacts />
    </div>
  );
}

export default App;

