import React, { Fragment, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import '../css/navbar.css'
import { activeNav } from '../Utils/Anim'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    let navigate = useNavigate()
    
    const [clicked, setClicked] = useState(true)

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
                    <li className='resized' onClick={() => navigate("/")}>MyStats</li>
                    <li className='resized' onClick={() => navigate("/clips")}>Clips</li>
                    <li className='resized' onClick={() => navigate("/profil")}>Profil</li>
                    <li className='resized' onClick={() => navigate("/login")}>Login</li>
                </ul>
            </nav>
        </Fragment>
    )
}

export default Navbar



