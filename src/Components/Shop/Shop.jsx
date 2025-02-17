import Image1 from '/shop/shop1.jpg';
import Image2 from '/shop/shop2.jpg';

const Shop = () => {
    
    return (
        <div>
            <h1 className="text-4xl mb-5">Estudio</h1>
            <section className="content mb-5">
                <h2 className="mb-3">Estudio de tatuajes Simply Green Tattoos</h2>
                <div className="flex items-center gap-4">
                    <img src={Image1} alt="Sample Image" className="w-96 h-64 rounded-sm"/>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni possimus adipisci corporis expedita aperiam dolorum est, ut, fugit at similique odio, blanditiis temporibus nulla cupiditate dolor nesciunt dignissimos vitae? Nobis esse libero ad sit nesciunt perferendis. Dicta exercitationem, impedit delectus consequuntur eveniet excepturi incidunt sed? Quaerat aspernatur, enim eaque, laborum a tempore animi nemo placeat inventore, omnis mollitia ad architecto! Tempore similique neque itaque illo dolorem aperiam veniam ipsa laborum id explicabo, consequuntur optio eveniet voluptates incidunt eius vel doloribus! Voluptatum, nulla enim soluta quae corrupti voluptatem, voluptatibus corporis ab in sit deserunt laboriosam quaerat. Aperiam delectus vitae ab minima.</p>
                </div>
                <div className="flex items-center gap-4">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni possimus adipisci corporis expedita aperiam dolorum est, ut, fugit at similique odio, blanditiis temporibus nulla cupiditate dolor nesciunt dignissimos vitae? Nobis esse libero ad sit nesciunt perferendis. Dicta exercitationem, impedit delectus consequuntur eveniet excepturi incidunt sed? Quaerat aspernatur, enim eaque, laborum a tempore animi nemo placeat inventore, omnis mollitia ad architecto! Tempore similique neque itaque illo dolorem aperiam veniam ipsa laborum id explicabo, consequuntur optio eveniet voluptates incidunt eius vel doloribus! Voluptatum, nulla enim soluta quae corrupti voluptatem, voluptatibus corporis ab in sit deserunt laboriosam quaerat. Aperiam delectus vitae ab minima.</p>
                    <img src={Image2} alt="Sample Image" className="w-96 h-64 rounded-sm"/>
                </div>
            </section>
        </div>
    )
}

export default Shop