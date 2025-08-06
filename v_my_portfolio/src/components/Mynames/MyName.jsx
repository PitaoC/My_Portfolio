import './myname.css';
import HBackground from '../../assets/HackerBackground.png';

function MyName(){
    return(
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
    );
}
export default MyName;