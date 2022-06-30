import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link className="logo" to="/">
                <h1>L'avantage de la glace</h1>
            </Link>
            <div className="links">
                <Link to="/patinage">Patinage</Link>
                <Link to="/lancers">Lancers</Link>
                <Link to="/maniement">Maniement</Link>
                <Link to="/strategies">Stratégies</Link>
                <Link to="/horsglace">Hors-Glace</Link>
                <Link className="button" to="/reserver">Réserver</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;