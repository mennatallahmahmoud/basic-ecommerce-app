import { Link } from "react-router-dom";
import Image1 from './Images/logo.png'
import '../components/Navbar.css';

function Navbar() {
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary p-0 position-fixed z-3 w-100">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src={Image1} className="logo m-0"/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Navbar;