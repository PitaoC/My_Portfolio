import './myteam.css';
import christianImage from '../../assets/PITAO,CHRISTIAN.jpg';
import vincentImage from '../../assets/PONCE,VINCENT.jpg';
import lanceImage from '../../assets/SABATIN,LANCE.jpg';
import hannahImage from '../../assets/FAROL,HANNAH.jpg';

function MyTeam() {
    return (
        <div className="teamborder">
            <header className="teamheader">
                <h1>About Our&nbsp;</h1>
                <h1 className='teamblue'>Team</h1>
            </header>
            <p className='teampara'>We're a team of programmer building powerful digital solutions. 
               From custom websites to robust applications, we blend technology 
               and strategy to bring your ideas to life.</p>
            <div className='teamMembersContainer'>
                <div className='teamMember1'>
                    <img src={christianImage} alt="christianImage" />
                    <h2>Christian Pitao</h2>
                    <p>Full Stack Developer</p>
                </div>
                <div className='teamMember2'>
                    <img src={vincentImage} alt="vincentImage" />
                    <h2>Vincent Ponce</h2>
                    <p>Back-End Developer</p>
                </div>
                <div className='teamMember3'>
                    <img src={lanceImage} alt="lanceImage" />
                    <h2>Lance Sabatin</h2>
                    <p>Database Administrator</p>
                </div>
                <div className='teamMember4'>
                    <img src={hannahImage} alt="hannahImage" />
                    <h2>Hannah Farol</h2>
                    <p>Front-End Developer</p>
                </div>
            </div>
        </div>
    );
}
export default MyTeam;