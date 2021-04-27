import React from 'react';
import './App.css';

import unpressedImg from './button-unpressed.png';
import pressedImg from './button-unpressed.png';

import firebase from 'firebase/app';
import 'firebase/firestore';

import { useDocumentData } from 'react-firebase-hooks/firestore';
import { useState } from 'react';

firebase.initializeApp({
    apiKey: "AIzaSyAgyZEo_ZtSvMPjqQD9cF2iRzihYztPp1g",
    authDomain: "the-firebase-button.firebaseapp.com",
    databaseURL: "https://the-firebase-button-default-rtdb.firebaseio.com",
    projectId: "the-firebase-button",
    storageBucket: "the-firebase-button.appspot.com",
    messagingSenderId: "742090871591",
    appId: "1:742090871591:web:d46df4943451c11ed7cf02"
});

const db = firebase.firestore();

const App = () => {
    return (
      <div className="App">
          <header className="App-header">
              <Button />
              <Counter />
          </header>
      </div>
    );
}

const Button = () => {
    const [pressed, setPressed] = useState(false);

    return (
        <button id='the-button' onClick={ () => { await handleClick(); }}>
            <img src={ pressed ? pressedImg : unpressedImg }></img>
        </button>
    );
};

const Counter = () => {
    // const countRef = db.collection('main').doc('counter');
    // const query = countRef.

    // const count = useDocumentData(countRef);
    const count = 0;

    return (
        <div id='counter'>{ count }</div>
    );
};


const handleClick = async () => {
    const increment = firebase.firestore.FieldValue.increment(1);
    db.collection('main').doc('counter').update({count: increment});
};

export default App;
