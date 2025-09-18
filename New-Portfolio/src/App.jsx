
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mynames from './components/MyNames/Mynames';
import Myheaders from './components/MyHeaders/Myheaders';
import Navbar from './components/Navbar';
import { useEffect } from 'react';
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
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    }, { threshold: 0.2 }); // 20% visible

    const elements = document.querySelectorAll(".scroll-fade");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
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

