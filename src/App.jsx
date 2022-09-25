import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Meme from './Components/Meme/Meme';


export default function App() {
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
       />
    </div>
  )
};
