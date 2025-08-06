import './myheader.css';
import MeHeader from '../../assets/MeHeader.svg';



function MyHeader() { // PascalCase function name
    return (
        // <div class="myportfolio">
        //     <h1 class="absolute font-eb-garamond font-extrabold tracking-wider text-[16vw] text-white opacity-80">Your Text</h1>
        //     <img class="relative w-full h-[950px] drop-shadow-[20px_0px_10px_rgba(219,219,219,0.5)]" src={MeHeader} alt="MeHeader"></img>
        //     <p class="absolute flex items-center justify-center text-justify font-bebas-neue text-[1vw] italic bottom-10 left-16 w-[25vw] h-[30vh] text-[#ebebeb]">Your Text</p>
        //     <div class="NavBar absolute flex flex-row items-center justify-evenly top-4 right-0 w-[35vw] h-[3vh] text-white font-bebas-neue text-[1.10vw]">
        //         <div class="Bar1 w-[3vw] flex justify-center hover:border-b border-[#d1d1d1]">Bar1</div>
        //         <div class="Bar2 w-[3vw] flex justify-center hover:border-b border-[#d1d1d1]">Bar2</div>
        //         <div class="Bar3 w-[3.8vw] flex justify-center hover:border-b border-[#d1d1d1]">Bar3</div>
        //         <div class="Bar4 w-[4vw] flex justify-center hover:border-b border-[#d1d1d1]">Bar4</div>
        //         <div class="Bar5 w-[3.5vw] flex justify-center hover:border-b border-[#d1d1d1]">Bar5</div>
        //     </div>
        // </div>
        <div className="myportfolio">
            {/* <img alt="MeHeader" src={MeHeader} ></img> */}
            <h1>PORTFOLIO</h1>
            


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
