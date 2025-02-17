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
            // Toggle the lamp state
            setLampOn((prevLampOn) => !prevLampOn);
            // Toggle the link visibility state
            setLinkVisible((prev) => !prev);
        }, 2500); // Use the same interval for both

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex items-center justify-center h-screen">
            {/* Container for two columns */}
            <div className="flex w-full max-w-7xl">
                {/* First Column - 60% */}
                <div className="w-3/5 p-8 text-center text-black">
                    <h1 className="text-6xl font-bold black">
                        Simply<span className="text-green-400">Green</span> Tattoos
                    </h1>
                </div>

                {/* Second Column - 40% */}
                <div className="designs__container w-2/5 bg-black p-8 text-center text-white">
                    {/* Lamp Image */}
                    {lampOn ? (
                        <img className='lamp lampOn' src={LampOn} alt="image of a lamp" />
                    ) : (
                        <img className='lamp lampOff' src={LampOff} alt="image of a lamp" />
                    )}

                    {/* Diseños Link */}
                    <Link
                        to="/Designs"
                        className={`designs__link text-5xl font-semibold transition-opacity duration-1600 ${
                            linkVisible ? 'opacity-0' : 'opacity-100'
                        }`}
                    >
                        Diseños
                    </Link>
                    <h2
                        className={`designs__link text-2xl transition-opacity duration-1600 ${
                            linkVisible ? 'opacity-0' : 'opacity-100'
                        }`}
                    >
                        Clikea acá!
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Home;