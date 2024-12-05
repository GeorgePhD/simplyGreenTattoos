import { useState } from "react";

const Consentimiento = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        age: "",
        email: "",
        healthConditions: "",
        agreeTerms: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.agreeTerms) {
            alert("Consentimiento registrado con éxito.");
        } else {
            alert("Debe aceptar los términos y condiciones antes de continuar.");
        }
    };

    return (
        <div className="bg-gray-100 py-10 px-5 sm:px-20">
            <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                    Formulario de Consentimiento para Tatuaje
                </h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Nombre completo */}
                    <div>
                        <label
                            htmlFor="fullName"
                            className="block text-gray-700 font-medium mb-2"
                        >
                            Nombre Completo:
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                            required
                        />
                    </div>

                    {/* Edad */}
                    <div>
                        <label
                            htmlFor="age"
                            className="block text-gray-700 font-medium mb-2"
                        >
                            Edad:
                        </label>
                        <input
                            type="number"
                            id="age"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            min="18"
                            className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                            required
                        />
                    </div>

                    {/* Correo electrónico */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-gray-700 font-medium mb-2"
                        >
                            Correo Electrónico:
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                            required
                        />
                    </div>

                    {/* Condiciones de salud */}
                    <div>
                        <label
                            htmlFor="healthConditions"
                            className="block text-gray-700 font-medium mb-2"
                        >
                            ¿Tiene alguna condición médica o está tomando medicamentos que
                            debamos conocer? (Especifique)
                        </label>
                        <textarea
                            id="healthConditions"
                            name="healthConditions"
                            value={formData.healthConditions}
                            onChange={handleChange}
                            className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                            rows="4"
                        />
                    </div>

                    {/* Aceptación de términos */}
                    <div className="flex items-start">
                        <input
                            type="checkbox"
                            id="agreeTerms"
                            name="agreeTerms"
                            checked={formData.agreeTerms}
                            onChange={handleChange}
                            className="h-5 w-5 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label
                            htmlFor="agreeTerms"
                            className="ml-3 text-gray-700 font-medium"
                        >
                            Declaro que soy mayor de 18 años, que he informado al artista
                            sobre cualquier condición médica relevante, y que acepto los
                            términos y condiciones del procedimiento de tatuaje.
                        </label>
                    </div>

                    {/* Botón de envío */}
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-green-500 text-white font-medium py-3 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                            Enviar Consentimiento
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Consentimiento;
