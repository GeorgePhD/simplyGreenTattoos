import { Link } from 'react-router-dom';

const HomeBtn = () => {
    return (
        <div className="fixed z-50 top-[50%] right-[-90px] sm:right-[-120px] translate-y-[-50%] flex flex-col gap-4 transition-all duration-500 hover:right-0">
            <Link to="#">
                <button className="relative right-[10px] sm:right-[25px] w-[130px]  font-semibold text-white bg-green-600 border border-green-500 rounded hover:bg-white hover:text-green-500 hover:border-green-500 p-2 text-sm sm:text-base">
                    menu
                </button>
            </Link>
            <Link to="/Home">
                <button className="w-[130px] font-semibold text-white bg-green-500 border border-green-500 rounded hover:bg-white hover:text-green-500 hover:border-green-500 p-2 text-sm sm:text-base">
                    Ir a inicio
                </button>
            </Link>
            <Link to="/Designs">
                <button className="w-[130px] font-semibold text-white bg-green-500 border border-green-500 rounded hover:bg-white hover:text-green-500 hover:border-green-500 p-2 text-sm sm:text-base">
                    Diseños
                </button>
            </Link>
            <Link to="/Demos">
                <button className="w-[130px] font-semibold text-white bg-green-500 border border-green-500 rounded hover:bg-white hover:text-green-500 hover:border-green-500 p-2 text-sm sm:text-base">
                    Demos
                </button>
            </Link>
            <Link to="/ImplementosDeTrabajo">
                <button className="w-[130px] font-semibold text-white bg-green-500 border border-green-500 rounded hover:bg-white hover:text-green-500 hover:border-green-500 p-2 text-sm sm:text-base">
                    Implementos
                </button>
            </Link>
            <Link to="/Privacidad">
                <button className="w-[130px] font-semibold text-white bg-green-500 border border-green-500 rounded hover:bg-white hover:text-green-500 hover:border-green-500 p-2 text-sm sm:text-base">
                    Privacidad
                </button>
            </Link>
            <Link to="/Cookies">
                <button className="w-[130px] font-semibold text-white bg-green-500 border border-green-500 rounded hover:bg-white hover:text-green-500 hover:border-green-500 p-2 text-sm sm:text-base">
                    Cookies
                </button>
            </Link>
        </div>
    );
};

export default HomeBtn;

