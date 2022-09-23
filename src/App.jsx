import React from 'react';
import './App.css';
import Header from './Components/Header/Header';


export default function App() {
  return (
    <div className="App">
      <Header 
        trollFace="./src/assets/trollface.png"
        headerTitle="Meme Generator" 
        headerTitle2="React Course - Project 3"
        />
    </div>
  )
};
