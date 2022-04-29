import React, { Fragment, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import '../css/navbar.css'
import { activeNav } from '../Utils/Anim'

const Navbar = () => {
    
    const [clicked, setClicked] = useState(false)

    return (
        <Fragment>
            <FontAwesomeIcon icon={faBars} onClick={() => 
            { 
                setClicked(!clicked) 
                activeNav(clicked)
            }}>
            </FontAwesomeIcon>
            <nav className='hidden'>
                <ul>
                    <li className='resized'>MyStats</li>
                    <li className='resized'>Clips</li>
                    <li className='resized'>Profil</li>
                    <li className='resized'>Login</li>
                </ul>
            </nav>
        </Fragment>
    )
}

export default Navbar



