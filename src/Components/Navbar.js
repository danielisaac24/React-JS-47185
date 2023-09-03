import React from 'react'
import CartWidget from './CartWidget'
import Logo from './logo'
const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid d-flex justify-content-evenly">
                    <a class="navbar-brand" href="../public/index.html"> <Logo/> </a>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="../public/index.html">Inicio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-dec" href="../public/index.html">Hombres</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="../public/index.html">Mujeres</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="../public/index.html">Nosotros</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="../public/index.html">Contactanos</a>
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