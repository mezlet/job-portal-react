import React from 'react';
import Ilogo from '../../assests/logo.png';
import Ihome from '../../assests/icon-home.png';
import Ibriefcase from '../../assests/icon-brief-case.png';
import Icompany from '../../assests/icon-npm-fill.png';
import Iperson from '../../assests/icon-person-fill.png';

const SideNav = () => {
    return (
    <nav className="navbar">
        <ul className="navbar-nav d-flex justify-content-column ml-4">
            <li  className="nav-item mt-4 "><img src={Ilogo} alt="" className="logo"/></li>
            <li className="nav-item mt-4 side-item"><img src={Ihome} alt="" className="mr-3"/> Dashboard</li>
            <li className="nav-item mt-4 side-item"><img src={Ibriefcase} alt="" className="mr-3"/> Gigs</li>
            <li className="nav-item mt-4 side-item"><img src={Icompany} alt="" className="mr-3"/>Company</li>
            <li className="nav-item mt-4 side-item"><img src={Iperson} alt="" className="mr-3"/>Account</li>
        </ul>
    </nav>)
}

export default SideNav;