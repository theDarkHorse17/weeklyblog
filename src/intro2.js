
import React, { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown  } from '@fortawesome/free-solid-svg-icons';


export default function Intro(){
    const [user,setuser]=useState(null);
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
    async function logout(ev) {
        ev.preventDefault();
        
        try {
          const response = await fetch('http://localhost:4000/logout', {
            credentials: 'include',
            method: 'POST',
          });
      
          if (response.ok) {
            setuser(null)
            // Logout was successful, redirect to the home page
            window.location.href = '/'; // Replace '/' with the actual URL of your home page
          } else {
            console.error('Logout failed with status:', response.status);
          }
        } catch (error) {
          console.error('Error during logout:', error);
        }
      }

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
                
                <li><a href='/create' id='create'>Create Post</a></li>
                <li><a href='/logout' id='logout' onClick={logout} >Logout</a></li>
            </ul>
        );
    }
    return(
        <header id="header">
            <a href='/' className="logo" id='logs'>Weekly Blog</a>   
            {ulContent}
        <div id="drop" onClick={handleDropdownClick}><FontAwesomeIcon icon={faAnglesDown} id="drp"style={iconStyle}/></div>
    </header>
    )
}