import { useEffect } from "react";

const Cookies = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="cookies-info w-full mx-auto mt-2 bg-gray-100 py-10 px-5 sm:px-20">
            <section className="w-full sm:w-[80%] md:w-[60%] lg:w-[50%] mx-auto mt-2 mb-4 max-w-3xl bg-white shadow-md rounded-lg p-8">
                <h1 className="title text-2xl font-bold mb-4 text-start">Tipos de Cookies</h1>
                <ul className="list-disc pl-5 space-y-4">
                    <li>
                        <h3 className="text-xl">1. Cookies Esenciales</h3>
                        <p className="mt-1">
                            Estas cookies son necesarias para el funcionamiento básico del sitio web, como la navegación y el acceso a áreas seguras. Sin estas, el sitio no funcionará correctamente.
                        </p>
                    </li>
                    <li>
                        <h3 className="text-xl font-bold">2. Cookies de Rendimiento</h3>
                        <p className="mt-1">
                            Nos ayudan a entender cómo los usuarios interactúan con nuestro sitio recopilando información anónima, lo que nos permite mejorar su funcionalidad.
                        </p>
                    </li>
                    <li>
                        <h3 className="text-xl font-bold">3. Cookies de Personalización</h3>
                        <p className="mt-1">
                            Almacenan sus preferencias (como el idioma o la región) para ofrecerle una experiencia personalizada.
                        </p>
                    </li>
                </ul>
            </section>
        </section>


    )
}

export default Cookies