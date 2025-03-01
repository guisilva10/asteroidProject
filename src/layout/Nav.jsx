import React from 'react'
import '../style/Nav.css'
import { Link } from 'react-router-dom'
import img from '../assets/foguete.png'

const Nav = () => {
    return (<>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" >
            <div className="container-fluid">
                <img src={img} alt="" width='70px' />
                <div className="collapse navbar-collapse navbarText" >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item  ">
                            <Link className="nav-link animacaoli" to={'/'}>Home</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link animacaoli" to={'/sobre-mim'}>Sobre Mim</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>)
}

export default Nav