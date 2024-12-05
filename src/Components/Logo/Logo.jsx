import { Link } from 'react-router-dom'	
import Logo2 from '/logo-2.png'
const Logo = () => {

    return (
        <Link to="/Home">
            <div className="fixed top-0 left-0 flex">
                <img className="h-auto w-36 m-2" src={Logo2} alt="Logo" />
            </div>
        </Link>
    )
}

export default Logo