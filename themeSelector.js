import React, { Component } from 'react';
import logo from './logo.svg';
import './Calculator.css';
import './ButtonBoard'
import ButtonBoard from './ButtonBoard';
import * as math from 'mathjs';
import './Calculator.js';
import './outputScreen.js';
import './outputScreenTwoRows';
import './darktheme.css';

//Luodaan uusi luokka, jolle annetaan true-ehto.
//true-ehdon toteutuessa, laskimemme on valoisa.
//state-komponentti on Reactiin sisäänrakennettu ominaisuus, joka mahdollistaa sen,
//että komponentit pysyvät perillä arvoista, joiden on tarkoitus muuttua.
class ThemeSelector extends React.Component {
    state = {
        isValittu: true
    }

    //Määritellään nuolinotaatiolla memberfunktio.
    //Tällä saadaan klikattava nappula toimimaan halutulla tavalla.
    //Muuttaa tilan ja sitten uudelleen-renderöi komponentin.
    asetaTeema = (props) => {
        this.setState({
            isValittu: !this.state.isValittu
        });
    };

    //Määritellään, kuinka komponentti reagoi määritellyn valoisuuden mukaan.
    //Nappulan avulla käyttäjä pystyy säätelemään haluttua tilaa.
    render(props) {
        //Tämän avulla saadaan sekä tausta että teksti muuttamaan väriä klikatessa.
        const lightedness = this.state.isValittu ? "vaalea" : "tumma";
        return (
            <div className={`ThemeSelector ${lightedness}`}>
            Laskimesi on nyt {lightedness}
            <br />
            <button onClick={this.asetaTeema}>Valitse teema</button>
            </div>
        );
    }
}

ReactDOM.render(<ThemeSelector />, document.getElementById('root'));

export default ThemeSelector;