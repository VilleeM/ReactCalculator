// import on tehty jo Calculator.js tiedostoon
// import * as math from 'mathjs';

class Calculator extends Component {
    constructor() {
        super();
        this.state = {
            input: ""
        }
    }

    // addToInput vie painikkeista painetut numerot ja merkit inputtiin
    // tallentuu myöhempää käyttöä varten
    addToInput = val => {
        this.setState({ input: this.state.input + val });
    }

    // Yhtä kuin --> =-merkki, laskee toimituksen, joka löytyy inputista
    handleEqual = () => {
        this.setState[{ input: math.eval(this.state.input) }];
    }

    // hoitaa kertolaskun myös jos kertomerkki on X eikä *
    handleMultiply = val => {
        if (val === "x") {
            this.setState({ input: this.state.input + val.replace("x", "*") });
        }
    }
}

render() {
    return (
        <div className="calculator">
            <div className="calculator-wrapper">
                <Input input={this.state.input}></Input>
                <div className="row">
                    <Button handleClick={this.addToInput}>7</Button>
                    <Button handleClick={this.addToInput}>8</Button>
                    <Button handleClick={this.addToInput}>9</Button>
                    <Button handleClick={this.handleMultiply}>x</Button>
                </div>
                <div className="row">
                    <Button handleClick={this.addToInput}>4</Button>
                    <Button handleClick={this.addToInput}>5</Button>
                    <Button handleClick={this.addToInput}>6</Button>
                    <Button handleClick={this.addToInput}>-</Button>
                </div>
                <div className="row">
                    <Button handleClick={this.addToInput}>1</Button>
                    <Button handleClick={this.addToInput}>2</Button>
                    <Button handleClick={this.addToInput}>3</Button>
                    <Button handleClick={this.addToInput}>+</Button>
                </div>
                <div className="row">
                    <Button handleClick={this.addToInput}>0</Button>
                    <Button handleClick={this.addToInput}>.</Button>
                    <Button handleClick={() => this.handleEqual()}>=</Button>
                    <Button handleClick={this.addToInput}>/</Button>
                </div>
                <div className="row">
                    <ClearButton handleClear={() => this.setState({ input: "" })}>clear</ClearButton>
                </div>
            </div>
        </div>
    );
}

export default App;
