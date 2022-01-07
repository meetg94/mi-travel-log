import React from "react"
import { FaGlobeAmericas } from 'react-icons/fa';
import { FcGlobe } from 'react-icons/fc';


function Navbar() {
    return (
        <div className="navbar">
            <FcGlobe size={35}/>
            <span className="nav-text">Mitravel Log</span>
        </div>
    )
}

export default Navbar