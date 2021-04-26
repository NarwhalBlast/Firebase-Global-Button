import React from 'react';
import unpressed from './button-unpressed.png';
import pressed from './button-unpressed.png';

let isPressed = false;

const Button = () => {
    return (
        <button id='the-button'>
            <img src={ isPressed ? pressed : unpressed }></img>
        </button>
    );
};

export default Button;