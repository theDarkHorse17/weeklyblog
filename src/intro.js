
import React, { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown  } from '@fortawesome/free-solid-svg-icons';


export default function Intro(){
    const [isDropdownVisible, setIsDropdownVisible] = useState(true);
    const [rotation, setRotation] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        
        if (windowWidth <= 820) {
            setIsDropdownVisible(true);
            setRotation(180);
        } else {
            setIsDropdownVisible(false);
            setRotation(0);
        }
    }, [windowWidth]);

    const handleDropdownClick = () => {
        setIsDropdownVisible(!isDropdownVisible);
        setRotation(rotation === 0 ? 180 : 0);
    };

    const iconStyle = {
        transform: `rotate(${rotation}deg)`,
        transition: 'transform 0.3s ease-in-out',
    };

    const ulStyle = {
        maxHeight: isDropdownVisible ? '500px' : '0', // Set the maximum height based on visibility
        overflow: 'hidden',
        opacity: isDropdownVisible ? 1 : 0,
        transition: 'max-height 0.3s ease-in-out, opacity 0.3s ease-in-out',
    };
    let ulContent = null;
    if (window.innerWidth <= 820) {
        // Conditionally set ulContent if window width is less than or equal to 820
        ulContent = (
            <ul id="ul" style={ulStyle}>
                
                <li><a href='/login' id='log'>Login</a></li>
                <li><a href='/register' id='log'>Register</a></li>
            </ul>
        );
    }
    else{
        ulContent = (
            <ul id="ul">
                
                <li><a href='/login' id='log'>Login</a></li>
                <li><a href='/register' id='log'>Register</a></li>
            </ul>
        );
    }
    return(
        <header id="header">
            <a href='/' className="logo">Weekly Blog</a>   
            {ulContent}
        <div id="drop" onClick={handleDropdownClick}><FontAwesomeIcon icon={faAnglesDown} id="drp"style={iconStyle}/></div>
    </header>
    )
}