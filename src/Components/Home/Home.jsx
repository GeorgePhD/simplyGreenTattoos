import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import LampOn from '/lampOn.svg';
import LampOff from '/lampOff.svg';
import './home.css';
const Home = () => {

    const [lampOn, setLampOn] = useState(false);
    const [linkVisible, setLinkVisible] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setLampOn((prevLampOn) => !prevLampOn);
        }, 2500);    

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
            // Set an interval to toggle the visibility of the Link every 5 seconds
            const interval = setInterval(() => {
                setLinkVisible((prev) => !prev);
            }, 3000);
        
            // Cleanup interval on component unmount
            return () => clearInterval(interval);
        }, []);

    return (

    <div className="flex items-center justify-center h-screen">
        {/* Container for two columns */}
        <div className="flex w-full max-w-7xl">
        {/* First Column - 60% */}
            <div className="w-3/5 p-8 text-center text-black">
                <h1 className="text-6xl font-bold black">Simply<span className="text-green-400">Green</span>  Tattoos</h1>
            </div>

        {/* Second Column - 40% */}

            
            <div className="designs__container w-2/5 bg-black p-8 text-center text-white">

                {lampOn ? (

                    <img className='lamp' src={LampOn} alt="image of a lamp" />

                ) : (

                    <img className='lamp lampOff' src={LampOff} alt="image of a lamp" />

                )
            
            }

                <Link to="/Designs" 
                className={`designs__link text-5xl font-semibold transition-opacity duration-1000 ${linkVisible ? 'opacity-100' : 'opacity-0'}`}
                >
                Diseños
                </Link>
                <h2 className={`designs__link text-2xl transition-opacity duration-1000 ${linkVisible ? 'opacity-100' : 'opacity-0'}`}>Clikea acá!</h2>
            </div>
        </div>
    </div>
    )
}

export default Home



