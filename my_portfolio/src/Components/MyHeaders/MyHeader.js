import './myheader.css';
import MeHeader from '../../assets/MeHeader.svg';



function MyHeader() { // PascalCase function name
    return (
        <div className="myportfolio">
            <img alt="MeHeader" src={MeHeader} ></img>
            <h1>PORTFOLIO</h1>

            <p1 className="p1">A Motivated Junior Developer with 
                experience in front-end and back-end 
                development. Passionate about creating 
                efficient, user-friendly applications and 
                eager to contribute to innovative projects 
                while continuously expanding technical expertise.
            </p1>
            <div className='NavBar'>
                <nav className='Bar1'>Home</nav>
                <nav className='Bar2'>Team</nav>
                <nav className='Bar3'>Projects</nav>
                <nav className='Bar4'>About Me</nav>
                <nav className='Bar5'>Contact</nav>
            </div>
        </div>
    );
}

export default MyHeader;
