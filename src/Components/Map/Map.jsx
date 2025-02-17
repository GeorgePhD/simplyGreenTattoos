const MapEmbed = () => {

    return (

        <div className="min-h-screen bg-gray-100 flex flex-row items-center justify-center p-4">
            <div className="flex flex-col items-center justify-center flex-1 basis-1/2">
                <h1 className="text-4xl font-bold mb-6 text-center">Nuestra Ubicación</h1>
                <p className="text-4xl font-bold text-center">Puedes encontrarnos en Manuel Montt 464, Curicó.</p>
                <p className="text-4xl font-bold text-center">referencia: Frente a mall del valle, junto a Sabores nativos en el segundo piso.</p>
            </div>
            <div className="flex items-center justify-center w-full max-w-4xl aspect-video border-0 mx-auto flex-1 basis-1/2">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3268.959059256058!2d-71.24613061831108!3d-34.98269020751357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96645709c03ade7d%3A0x3e29fc63b97209bc!2sManuel%20Montt%20464%2C%20Curic%C3%B3%2C%20Maule!5e0!3m2!1sen!2scl!4v1733692902062!5m2!1sen!2scl"
                    className="w-[500px] h-[400px] border-0 mx-auto"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                ></iframe>
            </div>
        </div>
    );
};

export default MapEmbed;
