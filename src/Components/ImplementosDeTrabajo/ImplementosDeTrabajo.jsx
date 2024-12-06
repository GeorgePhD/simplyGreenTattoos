import { useEffect } from "react";
import Machine from '/public/gear/machine.jpg';
import Ink from '/public/gear/ink.jpg';
import Needles from '/public/gear/needles.jpg';
import Stencil from '/public/gear/stencil.jpg';
import Cord from '/public/gear/cord.jpg';
import Chair from '/public/gear/chair.jpg';
const ImplementosDeTrabajo = () => {

    useEffect(() => {

        window.scrollTo(0, 0);
    }, []);

    const gearItems = [
        {
            name: "Tattoo Machine",
            description:
                "The core tool for tattoo artists, available in rotary or coil models. It helps apply ink into the skin with precision.",
            img: Machine, // Replace with actual image URL
        },
        {
            name: "Tattoo Ink",
            description:
                "Specialized ink designed for safe use on human skin, available in a wide range of colors and shades.",
            img: Ink, // Replace with actual image URL
        },
        {
            name: "Tattoo Needles",
            description:
                "Different types of needles (liners, shaders) are used depending on the design and detailing required.",
            img: Needles, // Replace with actual image URL
        },
        {
            name: "Stencil Paper",
            description:
                "Used to transfer the tattoo design from paper to the skin, ensuring accurate outlines for the artwork.",
            img: Stencil, // Replace with actual image URL
        },
        {
            name: "Clip Cord and Power Supply",
            description:
                "The power source for the tattoo machine, ensuring smooth operation throughout the session.",
            img: Cord, // Replace with actual image URL
        },
        {
            name: "Tattoo Chair",
            description:
                "Adjustable chairs for client comfort, making it easier for the artist to work on different body parts.",
            img: Chair, // Replace with actual image URL
        },
    ];

    return (
        <section className="bg-gray-100 py-10 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    Implementos esenciales
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {gearItems.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-300"
                        >
                            <img
                                src={item.img}
                                alt={item.name}
                                className="w-full h-40 object-contain rounded-t-md mb-4"
                            />
                            <h3 className="text-xl font-semibold text-gray-700 mb-2">
                                {item.name}
                            </h3>
                            <p className="text-gray-600 text-sm">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ImplementosDeTrabajo