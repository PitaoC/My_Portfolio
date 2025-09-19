import HBackground from '../../assets/HackerBackground.png';
import CircularProgress from "./CircularProgress";
import React, { useState, useEffect} from "react";

function Mynames() {
    function useScreenSize() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
    
    useEffect(() => {
        function handleResize() {
        setIsMobile(window.innerWidth < 1024);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return isMobile;
    }
    const isMobile = useScreenSize();

    const [trigger, setTrigger] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setTrigger((prev) => prev + 1); // bump trigger to restart animation
            }
            });
        },
        { threshold: 0.3 }
        );

        const section = document.querySelector("#About");
        if (section) observer.observe(section);

        return () => {
        if (section) observer.unobserve(section);
        };
    }, []);


    return (
        
        <div
            id="About"
            className="lg:w-screen lg:h-screen md:h-[300vh] sm:h-[300vh] h-[200vh] bg-stone-950 lg:bg-cover lg:bg-top md:bg-cover md:bg-bottom bg-cover bg-bottom flex flex-col lg:flex-row"
            style={{ backgroundImage: `url(${HBackground})`  }}
            >
            <div id="col1" className="md:h-screen h-screen flex-1 flex flex-col justify-center lg:pl-10 text-lg-start text-md-center text-center text-white scroll-fade">
                <p className="text-3xl font-dmserif ">Hey there,</p>
                <h className="text-6xl lg:text-7xl font-dmserif pt-1 pb-2">
                I'm Christian <br /> P. Pitao
                </h>
                <h className="text-xl pt-2 pb-3 lg:text-4xl font-bold font-playfair text-red-600">
                - Aspiring Junior Developer
                </h>
                <p className="lg:text-base text-xs pt-3 pb-2 font-medium italic font-roboto tracking-wide lg:max-w-2xl text-md-justify text-justify px-lg-0 px-md-5 px-4">
                A Junior Developer with experience in front-end and back-end
                development. Passionate about creating efficient, user-friendly
                applications and eager to contribute to innovative projects while
                continuously expanding technical expertise.
                </p>
            </div>

            <div id="col2" className="h-screen flex-1 flex flex-col lg:items-end items-center justify-center lg:pr-10 scroll-fade">
                <div className='flex lg:flex-row flex-col lg:pt-3 lg:pb-3 my-2 lg:my-0' >
                    <div className='flex flex-col justify-center lg:items-end item-start lg:pr-10 text-center'>
                        <h className='text-white font-lora lg:text-3xl text-2xl font-semibold'>Web Development</h>
                        <p className='text-white font-anek-telugu text-xs p-2'>REACT, HTML, CSS, JSX, NODE.js, PHP, SQL, LARAVEL</p>
                    </div>
                    <CircularProgress value={90} size={isMobile ? 120 : 160} trigger={trigger}/>
                </div>
                <div className='flex lg:flex-row flex-col lg:pt-3 lg:pb-3 my-2 lg:my-0' >
                    <div className='flex flex-col justify-center lg:items-end item-start lg:pr-10 text-center'>
                        <h className='text-white font-lora lg:text-3xl text-2xl font-semibold'>Software Development</h>
                        <p className='text-white font-anek-telugu text-xs p-2'>PYTHON, NODE.js, JAVA, MONGODB, API</p>
                    </div>
                    <CircularProgress value={70} size={isMobile ? 120 : 160} trigger={trigger}/>
                </div>
                <div className='flex lg:flex-row flex-col lg:pt-3 lg:pb-3 my-2 lg:my-0' >
                    <div className='flex flex-col justify-center lg:items-end item-start lg:pr-10 text-center'>
                        <h className='text-white font-lora lg:text-3xl text-2xl font-semibold'>Application Development</h>
                        <p className='text-white font-anek-telugu text-xs p-2'>REACT NATIVE, KOTLIN, JAVASCRIPT, JAVA</p>
                    </div>
                    <CircularProgress value={80} size={isMobile ? 120 : 160} trigger={trigger} />
                </div>
            </div>
        </div>

    );
}

export default Mynames;