import {MdQueryStats} from 'react-icons/md';
import { Link } from 'react-router-dom';
import './navbar.css';

export const Navbar = () => {
    return(
        <Link to='/'>
            <div className="navbar">
                <MdQueryStats className='icon' />
                <h1>Crypto <span className='purple'>Search Bay</span></h1>
            </div>
        </Link>
    );
}