import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Meme from './Components/Meme/Meme';
import memeData from './meme-database'


export default function App() {

  function handleOnClick() {
    return memeData.data.memes[Math.floor(Math.random() * memeData.data.memes.length)].url
  }

  return (
    <div className="App">
      <Header 
        trollFace="./src/assets/trollface.png"
        headerTitle="Meme Generator" 
        headerTitle2="React Course - Project 3"
        />
      <Meme
        placeHolder1="top text"
        placeHolder2="bottom text"
        submitButtonText="Get a new meme image"
        imgUrl={handleOnClick}
        state={memeData.data.memes[Math.floor(Math.random() * memeData.data.memes.length)].url}
       />
    </div>
  )
};
