import React from 'react';
import './Header.css';

export default function Header(props) {
    return (
        <header className='header-container' >
            <div className='header--title-container' >
                <img className='header--img' src={props.trollFace} alt="" />
                <p className='header--title' >{props.headerTitle}</p>
            </div>
            <p className='header--title2' >{props.headerTitle2}</p>
        </header>
    )
}