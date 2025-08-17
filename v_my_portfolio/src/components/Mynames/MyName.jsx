import './myname.css';
import HBackground from '../../assets/HackerBackground.png';
import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function MyName(){
    return(

        <div className='Nouterborder'>
            <div className='border'>
                <div className='OuterBorder'>
                    <p1>Hey there,</p1>
                    <h1>I'm Christian<br></br>P. Pitao</h1>
                </div>
                <div className='MiddleBorder'>
                    <h2> - Aspiring Junior Developer</h2>
                    <p2 className="p2">A Junior Developer with 
                        experience in front-end and back-end 
                        development. Passionate about creating 
                        efficient, user-friendly applications and 
                        eager to contribute to innovative projects 
                        while continuously expanding technical expertise.
                    </p2>
                </div>
                <div className='HBackground'> 
                    <img src={HBackground} alt="HBackground" />
                </div>
            </div>
            <div className='skills'>
                <div className='skillsbox'>
                    <div className='skill1'>
                        <div className='skilltext'>
                            <h1>Web Development</h1>
                            <p>REACT, HTML, CSS, JSX, NODE.js, PHP, SQL, LARAVEL</p>
                        </div>
                        <div className='skillbar'>
                            <CircularProgressbar
                            value={90}
                            text={`90%`}
                            circleRatio={0.75}
                            styles={buildStyles({
                                rotation: 1 / 2 + 1 / 8,
                                strokeLinecap: "round",
                                pathColor: "url(#gradient)", // Use gradient for the progress path
                                trailColor: "#323232fe"
                            })}
                            />
                        </div>
                    </div>
                    <div className='skill1'>
                        <div className='skilltext'>
                            <h1>Software Development</h1>
                            <p>PYTHON, NODE.js, JAVA, MONGODB, API</p>
                        </div>
                        <div className='skillbar'>
                            <CircularProgressbar
                            value={70}
                            text={`70%`}
                            circleRatio={0.75}
                            styles={buildStyles({
                                rotation: 1 / 2 + 1 / 8,
                                strokeLinecap: "round",
                                pathColor: "url(#gradient)", // Use gradient for the progress path
                                trailColor: "#323232fe"
                            })}
                            />
                        </div>
                    </div>
                    <div className='skill1'>
                        <div className='skilltext'>
                            <h1>Application Development</h1>
                            <p>REACT NATIVE, KOTLIN, JAVASCRIPT, JAVA</p>
                        </div>
                        <div className='skillbar'>
                            <CircularProgressbar
                            value={70}
                            text={`70%`}
                            circleRatio={0.75}
                            styles={buildStyles({
                                rotation: 1 / 2 + 1 / 8,
                                strokeLinecap: "round",
                                pathColor: "url(#gradient)", // Use gradient for the progress path
                                trailColor: "#323232fe"
                            })}
                            />
                        </div>
                    </div>
                     <svg width="0" height="0">
                            <defs>
                                <linearGradient id="gradient" gradientTransform="rotate(90)">
                                    <stop offset="0%" stopColor="#5b1414ff" />
                                    <stop offset="100%" stopColor="#ff3232ff" />
                                </linearGradient>
                            </defs>
                    </svg>
                </div>
                
            </div>
        </div>
    );
}
export default MyName;