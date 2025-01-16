import { useEffect, useState } from 'react';

const Designs = () => {

    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (image) => {
        setSelectedImage(image); // Set the clicked image as selected
    };

    const closeModal = () => {
        setSelectedImage(null); // Close the modal
    };
    
    const tattooImages = [
        '/designs-img/1.png',
        '/designs-img/2.png',
        '/designs-img/3.png',
        '/designs-img/4.png',
        '/designs-img/5.png',
        '/designs-img/6.png',
        '/designs-img/7.png',
        '/designs-img/8.png',
        '/designs-img/9.png',
        '/designs-img/10.png',
        '/designs-img/11.png',
        '/designs-img/12.png',
        '/designs-img/13.png',
        '/designs-img/14.png',
        '/designs-img/15.png',
        '/designs-img/16.png',
        '/designs-img/17.png',
        '/designs-img/18.png',
        '/designs-img/19.png',
        '/designs-img/20.png',
        '/designs-img/22.png',
        '/designs-img/24.png',
        '/designs-img/25.png',
        '/designs-img/27.png',
        '/designs-img/28.png',
        '/designs-img/29.png',
        '/designs-img/30.png',
        '/designs-img/31.png',
        '/designs-img/32.png',
        '/designs-img/33.png',
        '/designs-img/34.png',
        '/designs-img/35.png',
        '/designs-img/36.png',
        '/designs-img/37.png',
        '/designs-img/38.png',
        '/designs-img/39.png',
        '/designs-img/41.png',
        '/designs-img/42.png',
        '/designs-img/44.png',
        '/designs-img/45.png',
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
                        onClick={() => handleImageClick(image)}
                    >
                        <img
                            src={image}
                            alt={`Tattoo design ${index + 1}`}
                            className="w-full h-auto max-h-60 object-contain cursor-pointer"
                        />
                        <p className="absolute bottom-2 right-2 opacity-60">
                            D{index + 1}
                        </p>
                    </div>
                ))}
            </div>

            {/* Modal for enlarged image */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                    onClick={closeModal}
                >
                    <div
                        className="relative bg-white rounded-lg p-4"
                        onClick={(e) => e.stopPropagation()} // Prevent click propagation to close the modal
                    >
                        <button
                            className="absolute top-2 right-2 bg-green-500 text-white rounded-full p-2"
                            onClick={closeModal}
                        >
                            X
                        </button>
                        <img
                            src={selectedImage}
                            alt="Enlarged tattoo design"
                            className="max-w-full max-h-screen object-contain"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Designs;
