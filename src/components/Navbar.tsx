import {FaCoins} from 'react-icons/fa';
import './navbar.css';

export const Navbar = () => {
    return(
        <div className="">
            <div className="navbar">
                <FaCoins className='icon' />
                <h1>Coin <span className='purple'>Search</span></h1>
            </div>
        </div>
    );
}