import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    
    return (
        <Fragment>
            <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
            <nav className='hidden'>
                <div className='logo'>
                    Logo
                </div>
                <ul>
                    <li>MyStats</li>
                    <li>Clips</li>
                    <li>Profil</li>
                </ul>
                <button>Login</button>
            </nav>
        </Fragment>
    )
}

export default Navbar



