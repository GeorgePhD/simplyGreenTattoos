import { useEffect } from "react";

const ImplementosDeTrabajo = () => {

    useEffect(() => {

        window.scrollTo(0, 0);
    }, []);

    const gearItems = [
        {
            name: "Máquina de Tatuajes",
            description:
                "La herramienta principal para los tatuadores, disponible en modelos rotativos o de bobina. Ayuda a aplicar tinta en la piel con precisión..",
            img: "/gear/machine.jpg", // Replace with actual image URL
        },
        {
            name: "Tinta de Tatuajes",
            description:
                "Tinta especializada diseñada para un uso seguro en la piel humana, disponible en una amplia gama de colores y tonalidades.",
            img: "/gear/ink.jpg", // Replace with actual image URL
        },
        {
            name: "Agujas de Tatuajes",
            description:
                "Se utilizan diferentes tipos de agujas (delineadores, sombreadores) según el diseño y los detalles requeridos..",
            img: "/gear/needles.jpg", // Replace with actual image URL
        },
        {
            name: "stencil de Tatuajes",
            description:
                "Se utiliza para transferir el diseño del tatuaje del papel a la piel, asegurando contornos precisos para la obra de arte..",
            img: "/gear/stencil.jpg", // Replace with actual image URL
        },
        {
            name: "Cable y fuente de alimentación",
            description:
                "La fuente de energía de la máquina de tatuar, que garantiza un funcionamiento fluido durante toda la sesión..",
            img: "/gear/cord.jpg", // Replace with actual image URL
        },
        {
            name: "Silla o camilla ajustable para tatuajes",
            description:
                "Adjustable chairs for client comfort, making it easier for the artist to work on different body parts.",
            img: "/gear/chair.jpg", // Replace with actual image URL
        },
        {
            name: "Alcohol",
            description:
                "El alcohol al 75% es ampliamente utilizado en el proceso de limpieza y preparación de la piel en el ámbito del tatuaje. Su uso tiene múltiples beneficios y sigue ciertos estándares de seguridad e higiene.",
            img: "/gear/alcohol.jpg", // Replace with actual image URL
        },
        {
            name: "Crema nivea",
            description:
                "La crema Nivea es un producto hidratante ampliamente conocido y utilizado para el cuidado de la piel. Su fórmula clásica, con el envase azul característico, está diseñada para mantener la piel suave, hidratada y protegida.",
            img: "/gear/crema-nivea.jpg", // Replace with actual image URL
        },
        {
            name: "Solución antiséptica",
            description:
                "Una solución antiséptica es un líquido formulado para eliminar o inhibir el crecimiento de microorganismos en la piel, superficies o tejidos vivos. Se utiliza comúnmente en procedimientos médicos, cuidado personal y tatuajes, debido a su capacidad para prevenir infecciones.",
            img: "/gear/solucion-antiseptica.png", // Replace with actual image URL
        },
        {
            name: "Transfer para stencil",
            description:
                "El transfer para stencil es una solución o gel específicamente formulado para transferir y fijar diseños (stencils) en la piel antes de realizar un tatuaje. Es un producto esencial en el proceso de tatuado, ya que permite que el diseño se mantenga en su lugar durante la sesión, asegurando precisión y claridad.",
            img: "/gear/transfer-stencil.jpg", // Replace with actual image URL
        },
        {
            name: "Vaselina",
            description:
                "La vaselina es un producto ampliamente utilizado en el cuidado de la piel y tiene un papel esencial en el proceso de tatuado. Su composición de petrolato actúa como un emoliente y barrera protectora que ayuda a mantener la piel hidratada y protegida durante y después de procedimientos como tatuajes.",
            img: "/gear/vaselina.jpg", // Replace with actual image URL
        },
    ];

    return (
        <section className="bg-gray-100 py-10 px-6">
            <div className="max-w-7xl mx-auto">
                <h1 className="title text-3xl font-bold text-start text-gray-800 mb-6">
                    Implementos esenciales
                </h1>
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
                            <h2 className="text-xl font-semibold text-green-400 mb-2">
                                {item.name}
                            </h2>
                            <p className="text-gray-600 text-sm">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ImplementosDeTrabajo