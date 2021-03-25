import {Link} from 'react-router-dom';
import {useState} from 'react';
const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleTogler = (x)=>{
        x.preventDefault();
        setClick(!click);
    }
    return (  
        <header className="header" id="header">
        <nav className="navbar">
            <Link className="navbar-logo" to="/">Ahmadglob</Link>
            <div className='navbar-icon' onClick={handleTogler}>
            </div>
            <ul className='navbar-link' id={click ? 'navbar-link' : 'mobile-nav'}>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/About">About</Link>
                </li>
                <li>
                <Link to="/Project">Project</Link>
                </li>
                <li>
                <Link to="/Contact">Contact</Link>
                </li>
            </ul>
        </nav>
    </header>
    );
}
 
export default Navbar;