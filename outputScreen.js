import React, { Component } from 'react';
import logo from './logo.svg';
import './Calculator.css';
import './ButtonBoard'
import ButtonBoard from './ButtonBoard';
import * as math from 'mathjs';
import './Calculator.js';
import './outputScreenTwoRows';
import './darktheme.css';

//Luodaan toiminnallinen komponentti.
//Sen tarkoituksena on näyttää laskutoimitus ja tulos.
const OutputScreen = (props) => {
    return (
        <div className="screen-row">
        <input type="text" readOnly value = {props.value}/>
        </div>
    )
}

//Luodaan rivi, jonka avulla saadaan tuotua luotu elementti loppukokonaisuuteen.
export default OutputScreen;