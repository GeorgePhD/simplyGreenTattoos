import { useEffect } from "react";
import { Link } from "react-router-dom"

const Privacidad = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-gray-100 py-10 px-5 sm:px-20">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Política de Privacidad</h1>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">1. Información Recopilada</h2>
                    <p className="text-gray-600 mb-3">
                        <strong>1.1. A través del sitio web:</strong> Podemos recopilar información personal cuando usted navega por nuestro sitio, se registra o completa formularios en línea. Esto incluye:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 ml-4">
                        <li>Nombre completo.</li>
                        <li>Correo electrónico.</li>
                        <li>Número de teléfono.</li>
                        <li>Consultas específicas (como ideas o diseños de tatuajes).</li>
                    </ul>
                    <p className="text-gray-600 mt-3">
                        <strong>1.2. Durante la cita para un tatuaje:</strong> Solicitamos información adicional para garantizar su seguridad y personalizar el servicio, tales como historial médico relevante y consentimientos legales.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">2. Uso de la Información</h2>
                    <p className="text-gray-600">
                        La información recopilada se utilizará para:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 ml-4">
                        <li>Proveer servicios personalizados, como tatuajes a medida.</li>
                        <li>Comunicación para confirmar citas o responder consultas.</li>
                        <li>Cumplir con requisitos legales relacionados con la industria del tatuaje.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">3. Protección de la Información</h2>
                    <p className="text-gray-600">
                        Implementamos medidas de seguridad para proteger su información personal contra accesos no autorizados, alteraciones, divulgación o destrucción.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">4. Derechos del Usuario</h2>
                    <p className="text-gray-600">
                        Usted tiene derecho a acceder, rectificar o eliminar sus datos personales en cualquier momento. Puede contactarnos a través de [correo electrónico] o en nuestro estudio para ejercer estos derechos.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">5. Consentimiento para Procedimientos de Tatuaje</h2>
                    <p className="text-gray-600">
                        Antes de realizar un tatuaje, requerimos que todos los clientes firmen un <Link to="/Consentimiento" className="text-blue-500 underline">formulario de consentimiento informado</Link>, el cual incluye detalles sobre el procedimiento y posibles riesgos asociados.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">6. Contacto</h2>
                    <p className="text-gray-600">
                        Si tiene preguntas relacionadas con nuestra política de privacidad, puede comunicarse con nosotros a través de:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 ml-4">
                        <li>Correo electrónico: <a href="mailto:correo@example.com" className="text-blue-500 underline">correo@example.com</a></li>
                        <li>Teléfono: [número]</li>
                        <li>Dirección: [dirección del estudio]</li>
                    </ul>
                </section>
            </div>
        </div>
    )
}

export default Privacidad