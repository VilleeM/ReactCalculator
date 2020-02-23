import React, { Component } from 'react';
import './Calculator.css';
import './ButtonBoard'
import './Calculator.js';
import './outputScreenTwoRows';

//Luodaan toiminnallinen komponentti.
//Sen tarkoituksena on näyttää laskutoimitus ja tulos.
class OutputScreen extends Component {
    render() {
        let {result} = this.props;
        return (
            <div className="screen-row">
            <input className="output-screen" type="text" readOnly value = {result}/>
            </div>
        )
    }
}

//Luodaan rivi, jonka avulla saadaan tuotua luotu elementti loppukokonaisuuteen.
export default OutputScreen;