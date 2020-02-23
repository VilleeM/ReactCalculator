import React, {component} from 'react';

class ButtonBoard extends React.Component {
    render() {
        return (
            <div className = "buttons-container">

                {/* <button name=""></button> */}
                <button id="number" name="7" onClick={e =>  this.props.onClick(e.target.name)}>7</button>
                <button id="number" name="8" onClick={e =>  this.props.onClick(e.target.name)}>8</button>
                <button id="number" name="9" onClick={e =>  this.props.onClick(e.target.name)}>9</button>
                <button id="operator" name="x²" onClick={e =>  this.props.onClick(e.target.name)}>x²</button>
                <button id="operator" name="*" onClick={e =>  this.props.onClick(e.target.name)}>x</button><br/>
    
                {/* <button name=""></button> */}
                <button id="number" name="4" onClick={e =>  this.props.onClick(e.target.name)}>4</button>
                <button id="number" name="5" onClick={e =>  this.props.onClick(e.target.name)}>5</button>
                <button id="number" name="6" onClick={e =>  this.props.onClick(e.target.name)}>6</button>
                <button id="operator" name="√" onClick={e =>  this.props.onClick(e.target.name)}>√</button>
                <button id="operator" name="/" onClick={e =>  this.props.onClick(e.target.name)}>/</button><br/>
            
                {/* <button name=""></button> */}
                <button id="number" name="1" onClick={e =>  this.props.onClick(e.target.name)}>1</button>
                <button id="number" name="2" onClick={e =>  this.props.onClick(e.target.name)}>2</button>
                <button id="number" name="3" onClick={e =>  this.props.onClick(e.target.name)}>3</button>
                <button id="operator" name="+" onClick={e =>  this.props.onClick(e.target.name)}>+</button>
                <button id="operator" name="-" onClick={e =>  this.props.onClick(e.target.name)}>-</button><br/>

                {/* <button name=""></button> */}
                <button id="number" name="." onClick={e =>  this.props.onClick(e.target.name)}>.</button>
                <button id="number" name="0" onClick={e =>  this.props.onClick(e.target.name)}>0</button>
                <button id="operator" name="C" onClick={e =>  this.props.onClick(e.target.name)}>C</button>
                <button id="operator" name="CE" onClick={e =>  this.props.onClick(e.target.name)}>CE</button>
                <button id="operator" name="=" onClick={e =>  this.props.onClick(e.target.name)}>=</button><br/>
            </div>
        );
    }
}

export default ButtonBoard;