import React, { useState } from 'react';
import './Meme.css';
import memeData from '../../meme-database'

export default function Meme(props) {
    const [urlImg, setUrlImg] = useState({
        topText: "",
        bottomText: "",
        randomImage: "",
        ...memeData
    });

    function changeUrl() {
        setUrlImg(prevState => {
            return {
                ...prevState,
                url: !prevState
            }
        });
    }

    const randomMeme = urlImg.data.memes[Math.floor(Math.random() * urlImg.data.memes.length)].url;

    return (
        <main>
            <div className='form' >
                <div className='textinput-container' >
                    <div className='textinput-containers1 textinput-containers' >
                        <input type="text" id="textinput1" name="textinput1" placeholder={props.placeHolder1} />
                    </div>
                    <div className='textinput-containers2 textinput-containers' >
                        <input type="text" id="textinput2" name="textinput2" placeholder={props.placeHolder2} />
                    </div>
                </div>
                <input className='submit-button' type="submit" value={props.submitButtonText} onClick={changeUrl} />
                <img src={randomMeme} alt="" />
            </div>
        </main>
    )
}