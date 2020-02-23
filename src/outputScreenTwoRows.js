import React, { Component } from 'react';
import logo from './logo.svg';
import './Calculator.css';
import './ButtonBoard'
import ButtonBoard from './ButtonBoard';
import * as math from 'mathjs';
import './Calculator.js';
import './outputScreen.js';
import './darktheme.css';
import OutputScreen from './outputScreen.js'

//Lisätään taas toiminnallinen elementti.
//Tarvitaan siihen, jotta laskimessa voidaan näyttää kaksi riviä.
const OutputScreenTwoRows = (props) => {
    return (
        <div className="screen">
        <OutputScreen value = {props.syote}/>
        <OutputScreen value = {props.vastaus}/>
        </div>
    )
}

//Luodaan taas elementti, jolla luotu elementti saadaan tuotua pääelementtiin.
export default OutputScreenTwoRows;