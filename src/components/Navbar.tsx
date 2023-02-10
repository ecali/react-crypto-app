import {FaCoins} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './navbar.css';

export const Navbar = () => {
    return(
        <Link to='/'>
            <div className="navbar">
                <FaCoins className='icon' />
                <h1>Coin <span className='purple'>Search</span></h1>
            </div>
        </Link>
    );
}