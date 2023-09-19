import React from 'react'
import CartWidget from './CartWidget'
import Logo from './logo'
import {Link} from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">  
                <div className="container-fluid d-flex justify-content-evenly">
                    <a className="navbar-brand" href="../public/index.html"> <Logo/> </a>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-dec" to="">Hombres</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="">Mujeres</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="">Nosotros</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="">Contactanos</Link>
                            </li>
                        </ul>
                    </div>
                    <CartWidget/>
                </div>
            </nav>
        </div>
    )
}

export default Navbar