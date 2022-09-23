import React from 'react';
import './Header.css';

export default function Header(props) {
    return (
        <div className='header-container' >
            <img className='header--img' src={props.trollFace} alt="" />
            <p className='header--title' >{props.headerTitle}</p>
            <p className='header--title2' >{props.headerTitle2}</p>
        </div>
    )
}