import React, {useState} from 'react';
import './Meme.css';

export default function Meme(props) {
    const [url,setUrl] = useState(props.state);

    function changeUrl() {
        setUrl(props.imgUrl);
    }

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
                <img src={url} alt="" />
            </div>
        </main>
    )
}