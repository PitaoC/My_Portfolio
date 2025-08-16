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
                {/* <div className='Outercircle'>
                    <div className='Innercircle'>
                        <div id='number'>90%</div>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100%">
                            <defs>
                                <linearGradient id="GradientColor">
                                    <stop offset="0%" stopColor="#ff3232ff" />
                                    <stop offset="100%" stopColor="#5b1414ff" />
                                </linearGradient>
                            </defs>
                            <circle cx="50%" cy="50%" r="33%" strokeLinecap="round" />
                        </svg>
                    </div>
                </div>
                <div className='Outercircle'>
                    <div className='Innercircle'>
                        <div id='number'>70%</div>
                    </div>
                </div>
                <div className='Outercircle'>
                    <div className='Innercircle'>
                        <div id='number'>70%</div>
                    </div>
                </div> */}
                {/* <CircularProgressbar
                    value={80}
                    text={`80%`}
                    circleRatio={0.75}
                    styles={buildStyles({
                        rotation: 1 / 2 + 1 / 8,
                        strokeLinecap: "butt",
                        trailColor: "#eee"
                    })}
                /> */}
            </div>
        </div>
    );
}
export default MyName;