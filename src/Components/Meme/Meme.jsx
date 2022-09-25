import React from 'react';
import './Meme.css';

export default function Meme(props) {
    return (
        <main>
            <form action="" >
                <div className='textinput-container' >
                    <div className='textinput-containers1 textinput-containers' >
                        <input type="text" id="textinput1" name="textinput1" placeholder={props.placeHolder1} />
                    </div>
                    <div className='textinput-containers2 textinput-containers' >
                        <input type="text" id="textinput2" name="textinput2" placeholder={props.placeHolder2} />
                    </div>
                </div>
                <input className='submit-button' type="submit" value={props.submitButtonText} />
            </form>
        </main>
    )
}