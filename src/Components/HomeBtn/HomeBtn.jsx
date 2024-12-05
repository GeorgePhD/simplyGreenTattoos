import { Link } from 'react-router-dom'
const HomeBtn = () => {

    return (
        
        <Link to="/Home">
            <button className="fixed top-[1%] right-[1%] flex items-center justify-center w-50 h-auto font-semibold text-white bg-green-500 rounded hover:bg-green-600 p-2 mt-4">Ir a inicio
            </button>
        </Link>
        
    )
}

export default HomeBtn