import christianImage from '../assets/PITAO,CHRISTIAN.jpg';
import vincentImage from '../assets/PONCE,VINCENT.jpg';
import lanceImage from '../assets/SABATIN,LANCE.jpg';
import hannahImage from '../assets/FAROL,HANNAH.jpg';

function MyTeams(){
    return (
        <div id="Teams" className="lg:w-screen lg:h-screen md:w-screen md:h-[200vh] h-screen 
                                   flex flex-col justify-center 
                                   bg-gradient-to-b from-stone-950 to-indigo-990 
                                   text-white">
            <div className="flex flex-col items-center">
                <div className="flex flex-col items-center justify-center mb-10 w-1/2">
                    <div className="lg:w-screen w-screen flex flex-row my-4 justify-center">
                        <h className="text-center font-dmserif text-5xl lg:text-8xl ">
                        About Our&nbsp;
                        </h>
                        <h className="text-center font-dmserif text-5xl lg:text-8xl text-blue-900">
                        Team
                        </h>
                    </div>
                    <p className="lg:w-11/20 w-screen text-center text-gray-200 font-roboto text-cl lg:text-sm">
                        We're a team of programmer building powerful digital solutions. From custom websites to robust applications, 
                        we blend technology and strategy to bring your ideas to life.
                    </p>
                </div>
                <div className="lg:w-3/4 lg:h-fit w-screen h-3/4 
                                lg:flex lg:flex-row 
                                grid grid-cols-2 grid-rows-2
                                text-lg text-center 
                                lg:justify-center lg:items-center md:justify-items-center 
                                ">
                    <div id='teamMember1' className='mx-5 '>
                        <img src={christianImage} alt="christianImage" className='lg:w-[10vw] lg:h-[10vw] md:w-[20vw] md:h-[20vw] rounded-full mb-3'/>
                        <h className='font-medium lg:text-2xl md:text-xl font-libertinus-sans'>Christian Pitao</h>
                        <p className='text-xs font-roboto italic my-3'>Full Stack Developer</p>
                    </div>
                    <div id='teamMember2' className='mx-5 '>
                        <img src={vincentImage} alt="vincentImage" className='lg:w-[10vw] lg:h-[10vw] md:w-[20vw] md:h-[20vw] rounded-full mb-3'/>
                        <h className='font-medium lg:text-2xl md:text-xl font-libertinus-sans'>Vincent Ponce</h>
                        <p className='text-xs font-roboto italic my-3'>Back-End Developer</p>
                    </div>
                    <div id='teamMember3' className='mx-5 '>
                        <img src={lanceImage} alt="lanceImage" className='lg:w-[10vw] lg:h-[10vw] md:w-[20vw] md:h-[20vw] rounded-full mb-3'/>
                        <h className='font-medium lg:text-2xl md:text-xl font-libertinus-sans'>Lance Sabatin</h>
                        <p className='text-xs font-roboto italic my-3'>Database Administrator</p>
                    </div>
                    <div id='teamMember4' className='mx-5 '>
                        <img src={hannahImage} alt="hannahImage" className='lg:w-[10vw] lg:h-[10vw] md:w-[20vw] md:h-[20vw] rounded-full mb-3'/>
                        <h className='font-medium lg:text-2xl md:text-xl font-libertinus-sans'>Hannah Farol</h>
                        <p className='text-xs font-roboto italic my-3'>Front-End Developer</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyTeams;