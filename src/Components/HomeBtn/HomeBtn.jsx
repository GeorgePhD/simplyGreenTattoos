import { Link } from 'react-router-dom'
const HomeBtn = () => {

    return (
        <>
        <Link to="/Home">
            <button className="fixed top-[1%] right-[1%] flex items-center justify-center w-50 h-auto font-semibold text-white bg-green-500 border border-green-500 rounded hover:bg-white hover:text-green-500 hover:border-green-500 p-2 mt-4 w-[130px]">Ir a inicio
            </button>
        </Link>
            <Link to="/Designs">
                <button className="fixed top-[35%] right-[1%] flex items-center justify-center w-50 h-auto font-semibold text-white bg-green-500 border border-green-500 rounded hover:bg-white hover:text-green-500 hover:border-green-500 p-2 mt-4 w-[130px]">Diseños
                </button>
            </Link>
            <Link to="/Demos">
                <button className="fixed top-[40%] right-[1%] flex items-center justify-center w-50 h-auto font-semibold text-white bg-green-500 border border-green-500 rounded hover:bg-white hover:text-green-500 hover:border-green-500 p-2 mt-4 w-[130px]">Demos
                </button>
            </Link>
            <Link to="/ImplementosDeTrabajo">
                <button className="fixed top-[45%] right-[1%] flex items-center justify-center w-50 h-auto font-semibold text-white bg-green-500 border border-green-500 rounded hover:bg-white hover:text-green-500 hover:border-green-500 p-2 mt-4 w-[130px]">Implepentos
                </button>
            </Link>
            <Link to="/Privacidad">
                <button className="fixed top-[50%] right-[1%] flex items-center justify-center w-50 h-auto font-semibold text-white bg-green-500 border border-green-500 rounded hover:bg-white hover:text-green-500 hover:border-green-500 p-2 mt-4 w-[130px]">
                    Privacidad
                </button>
            </Link>
            <Link to="/Cookies">
                <button className="fixed top-[55%] right-[1%] flex items-center justify-center w-50 h-auto font-semibold text-white bg-green-500 border border-green-500 rounded hover:bg-white hover:text-green-500 hover:border-green-500 p-2 mt-4 w-[130px]">Cookies
                </button>
            </Link>
        </>
        
    )
}
export default HomeBtn