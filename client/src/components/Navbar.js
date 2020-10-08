import React,{useState} from 'react';
import logo from '../images/logo.png'
import { FaAlignRight } from 'react-icons/fa';
import {Link} from 'react-router-dom'

export const Navbar = () => {
    const[isOpen,setIsOpen]=useState(false)

    handleToggle=()=>{
        return setIsOpen({isOpen:!isOpen})
    }
    return (
        <nav className="navbar">
            <div className="nav-center"></div>
           <div className="navbar"></div>
            
        </nav>
    )
}
