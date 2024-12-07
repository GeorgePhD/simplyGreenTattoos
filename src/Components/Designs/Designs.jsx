import { useEffect } from 'react';
import './designs.css';
const Designs = () => {
    const tattooImages = [
        '/designs-img/1.JPG',
        '/designs-img/2.JPG',
        '/designs-img/3.JPG',
        '/designs-img/4.JPG',
        '/designs-img/5.JPG',
        '/designs-img/6.JPG',
        '/designs-img/7.jpg',
        '/designs-img/8.jpg',
        '/designs-img/8.jpg',
        '/designs-img/8.jpg',
        '/designs-img/8.jpg',
        '/designs-img/8.jpg',
        '/designs-img/8.jpg',
        '/designs-img/3.JPG',
        '/designs-img/4.JPG',
        '/designs-img/5.JPG',
        '/designs-img/6.JPG',
        '/designs-img/7.jpg',
        '/designs-img/8.jpg',
        '/designs-img/8.jpg',
        '/designs-img/8.jpg',
        '/designs-img/8.jpg',
        '/designs-img/8.jpg',
        '/designs-img/8.jpg',
        '/designs-img/3.JPG',
        '/designs-img/4.JPG',
        '/designs-img/5.JPG',
        '/designs-img/6.JPG',
        '/designs-img/7.jpg',
        '/designs-img/8.jpg',
        '/designs-img/8.jpg',
        '/designs-img/3.JPG',
        '/designs-img/4.JPG',
        '/designs-img/5.JPG',
        '/designs-img/6.JPG',
        '/designs-img/7.jpg',
        '/designs-img/8.jpg',
        '/designs-img/8.jpg',
        '/designs-img/8.jpg',
        '/designs-img/8.jpg',
        '/designs-img/8.jpg',
        '/designs-img/8.jpg',
        '/designs-img/3.JPG',
        '/designs-img/4.JPG',
        '/designs-img/5.JPG',
        '/designs-img/6.JPG',
        '/designs-img/7.jpg',
        '/designs-img/8.jpg',
        '/designs-img/8.jpg',
        '/designs-img/8.jpg',
        '/designs-img/8.jpg',
        '/designs-img/8.jpg',
        '/designs-img/8.jpg',
        '/designs-img/3.JPG',
        '/designs-img/4.JPG',
        '/designs-img/5.JPG',
        '/designs-img/6.JPG',
        '/designs-img/7.jpg',
        '/designs-img/8.jpg',
        '/designs-img/8.jpg',
        '/designs-img/3.JPG',
        '/designs-img/4.JPG',
        '/designs-img/5.JPG',
        '/designs-img/6.JPG',
        '/designs-img/7.jpg',
        '/designs-img/8.jpg',
        '/designs-img/8.jpg',
        '/designs-img/8.jpg',
        '/designs-img/8.jpg',
        '/designs-img/8.jpg',
        '/designs-img/8.jpg',
        '/designs-img/3.JPG',
        '/designs-img/4.JPG',
        '/designs-img/5.JPG',
        '/designs-img/6.JPG',
        '/designs-img/7.jpg',
        '/designs-img/8.jpg',
        '/designs-img/8.jpg',
        '/designs-img/8.jpg',
        '/designs-img/8.jpg',
        '/designs-img/8.jpg',
        '/designs-img/8.jpg',
        '/designs-img/3.JPG',
        '/designs-img/4.JPG',
        '/designs-img/5.JPG',
        '/designs-img/6.JPG',
        '/designs-img/7.jpg',
        '/designs-img/8.jpg',
        '/designs-img/8.jpg',
        '/designs-img/3.JPG',
        '/designs-img/4.JPG',
        '/designs-img/5.JPG',
        '/designs-img/6.JPG',
        '/designs-img/7.jpg',
        '/designs-img/8.jpg',
        '/designs-img/8.jpg',
        '/designs-img/8.jpg',
        '/designs-img/8.jpg',
        '/designs-img/8.jpg',
        '/designs-img/8.jpg',
        '/designs-img/3.JPG',
        '/designs-img/4.JPG',
        '/designs-img/5.JPG',
        '/designs-img/6.JPG',
        '/designs-img/7.jpg',
        '/designs-img/8.jpg',
        '/designs-img/8.jpg',
        '/designs-img/8.jpg',
        '/designs-img/8.jpg',
        '/designs-img/8.jpg',
        '/designs-img/8.jpg',
        '/designs-img/3.JPG',
        '/designs-img/4.JPG',
        '/designs-img/5.JPG',
        '/designs-img/6.JPG',
        '/designs-img/7.jpg',
        '/designs-img/8.jpg',
        '/designs-img/8.jpg',
        '/designs-img/8.jpg',
        '/designs-img/8.jpg',
        '/designs-img/8.jpg',
        '/designs-img/8.jpg',
        '/designs-img/3.JPG',
        '/designs-img/4.JPG',
        '/designs-img/5.JPG',
        '/designs-img/6.JPG',
        '/designs-img/7.jpg',
        '/designs-img/8.jpg',
        '/designs-img/8.jpg',
        '/designs-img/8.jpg',
        '/designs-img/8.jpg',
        '/designs-img/8.jpg',
        '/designs-img/8.jpg',
        '/designs-img/3.JPG',
        '/designs-img/4.JPG',
        '/designs-img/5.JPG',
        '/designs-img/6.JPG',
        '/designs-img/7.jpg',
        '/designs-img/8.jpg',
        '/designs-img/8.jpg',
        '/designs-img/8.jpg',
        '/designs-img/8.jpg',
        '/designs-img/8.jpg',
        '/designs-img/8.jpg',
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="title text-start text-black font-bold mb-8 xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl text-4xl">
            Diseños
        </h1>
        {/* Grid container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {tattooImages.map((image, index) => (
            <div
                key={index}
                className="relative overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
            >
                <img
                    src={image}
                    alt={`Tattoo design ${index + 1}`}
                    //className="w-full h-full object-cover"
                    className="w-full h-auto max-h-60 object-contain"
                />
            <p className='absolute bottom-2 right-2 opacity-60'> D{index + 1}</p>
            </div>
            ))}
        </div>
        </div>
    );
};

export default Designs;


