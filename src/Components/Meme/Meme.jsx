import React from 'react';
import './Meme.css';

export default function Meme(props) {
    return (
        <form action="" >
            <div className='textinput-container' >
                <div className='textinput-containers1 textinput-containers' >
                    <label for="textinput1">{props.label1}</label>
                    <input type="text" id="textinput1" name="textinput1" value=""/>
                </div>
                <div className='textinput-containers2 textinput-containers' >
                    <label for="textinput2">{props.label2}</label>
                    <input type="text" id="textinput2" name="textinput2" value=""/>
                </div>
            </div>
            <input className='submit-button' type="submit" value={props.submitButtonText} />
        </form>
    )
}