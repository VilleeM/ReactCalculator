import React, { Component } from 'react';
import logo from './logo.svg';
import './Calculator.css';
import './ButtonBoard'
import ButtonBoard from './ButtonBoard';
import * as math from 'mathjs';
import OutputScreen from "./outputScreen";

class Sidebar extends React.Component {
  render() {
    let { sidebarContent } = this.props;
    return (
      <div>
        {sidebarContent}
      </div>
    );
  }
}

class Calculator extends Component {
  constructor() {
    super();

    // lista johon tehdään historia div elementit
    this.displayData = [];
    // lista johon laitetaan laskut
    this.laskuja = [];

    this.state = {
      result: "",
      sidebarContent: this.displayData,
      isValittu: false
    }
    this.asetaTeema = this.asetaTeema.bind(this);
    this.clearSidebar = this.clearSidebar.bind(this);
  }
    //Määritellään nuolinotaatiolla memberfunktio.
    //Tällä saadaan klikattava nappula toimimaan halutulla tavalla.
    //Muuttaa tilan ja sitten uudelleen-renderöi komponentin.
    asetaTeema() {
      this.setState({
          isValittu: !this.state.isValittu
      });
  };

  onClick = button => {
    if (button === "=") {
      let laskettuLasku = this.state.result
      console.log(this.state)
      let vastausLaskuun = math.eval(this.state.result);
      console.log(math.eval(this.state.result))
      this.setState({
       result: vastausLaskuun
      })
      this.displayData.unshift(<div className="history-container"><pre>{`${laskettuLasku} = ${vastausLaskuun}`}</pre></div>)
      localStorage.setItem("laskut", `${laskettuLasku} = ${vastausLaskuun}`)
    } else if (button === "C") {
      this.setState({
        result : ""
      })
    } else if (button === "CE") {
      this.setState({
        result: this.state.result.slice(0, -1)
      })
    }
    else {
      this.setState({
        result: this.state.result + button
      })
    }
  }
  // addToInput vie painikkeista painetut numerot ja merkit inputtiin
  // tallentuu myöhempää käyttöä varten
  // addToInput = val => {
  //   this.setState({ input: this.state.input + val });
  // }

  // Yhtä kuin --> =-merkki, laskee toimituksen, joka löytyy inputista
  // handleEqual = () => {
  //   this.setState[{ input: math.eval(this.state.input) }];
  // }

  // // hoitaa kertolaskun myös jos kertomerkki on X eikä *
  // handleMultiply = val => {
  //   if (val === "x") {
  //     this.setState({ input: this.state.input + val.replace("x", "*") });
  //   }
  // }
  // metodi suoritetaan kun Calculator luokka kiinnitetään sivulle
  componentDidMount() {
    // katsotaan onko välimuistissa laskut avainta jos ei se tehdään
    if (localStorage.getItem("laskut") === null) {
      localStorage.setItem("laskut", "");
    }
    // haetaan välimuistin laskut
    let savedCalculations = localStorage.getItem("laskut").split(",");
    // katsotaan että localStoragen laskut sisältää edes yhden laskun jos ei sisällä ==> laskut : { "" } || parempi tapa tähänkin?
    if (savedCalculations[0] !== "") { // parempi tapa checkata? 
      savedCalculations.forEach(element => {
        // Pusketaan displayData listaan uusia elementtejä, jotka sisältävät välimuistista noudetut laskut
        this.displayData.push(<div className="history-container"><pre>{element}</pre></div>)
      });
      // Päivitetään state, jotta edellä pusketut elementit tulevat näkyviin
      this.setState({
        sidebarContent: this.displayData
      });
    }
  }
  // // TO DO : pass data as parameter for this function to increase re-useability
  // appendData() {
  //   // pusketaan displayData listaan uusi elementti, joka ottaa arvon currentCalculation
  //   this.displayData.unshift(<div className="history-container"><pre>{this.state.currentCalculation}</pre></div>);
  //   this.laskuja.unshift(this.state.currentCalculation)
  //   this.setState({
  //     sidebarContent: this.displayData,
  //     currentCalculation: "" // tyhjätään currentCalc.
  //   });
  //   localStorage.setItem("laskut", this.laskuja);
  // }
  // testi tarkoituksiin tehty metodi saattaa kuitenkin olla hyödyllinen muissa tarkoituksissa
  // //metodi joka suoritetaan aina kun input elementtiin tulee muutos
  // handleChange(e) {
  //   //localStorage.setItem("lasku", e.target.value);
  //   let getInputValue = e.target.value;
  //   this.setState({
  //     // muutetaan pääluokan staten currentCalculation avaimen arvoa
  //     currentCalculation: getInputValue
  //   });
  // }


  clearSidebar() {
    localStorage.setItem("laskut", ""); // tyhjennetään localStorage kaikesta jää vain laskut : { "" }
    this.displayData = []
    this.setState({
      sidebarContent: this.displayData
    })
  }
  render() {
    const lightedness = this.state.isValittu ? "vaalea" : "tumma";
    // passataan lapsikomponentille alla oleva muuttuja
    return (
      <div className={`ThemeSelector ${lightedness} calculator-main`} >
        <div>
            Laskimesi on nyt {lightedness}
            <br/>
            <input onClick={this.asetaTeema} value="Valitse teema" type="submit"></input>
            </div>
        <img src={logo} className="App-logo" alt="logo" />
        <OutputScreen result={this.state.result}></OutputScreen>
        <ButtonBoard onClick={this.onClick}></ButtonBoard>
        {/* <input value={this.state.currentCalculation} onChange={this.handleChange} ></input> */ /* testi tarkoituksiin tehty input saattaa olla hyödyllinen?*/}
        {/* <input type="submit" className="button" onClick={this.appendData} value="Append" /> */}
        <div className="sidebar-container">
          <div className="sidebar-header">
            <input type="submit" className="clear-button" onClick={this.clearSidebar} value="Clear" />
          </div>
          <Sidebar
            sidebarContent={this.state.sidebarContent}
          />
        </div>
      </div>
    );
  }
}

export default Calculator;
