import React, { Component } from "react";
import ReactDOM from "react-dom";

import Layout from '../components/layout';
import TextBox from '../components/textbox';
import RadioButton from '../components/radiobutton'
import Label from '../components/label'

class ChangeInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textBox1: 0,
      textBox2: 0,
      textBox3: 0,
      result: 0,
      sum: true,
      mul: false,
    };

    this.sumUp = this.sumUp.bind(this);
    this.multiply = this.multiply.bind(this);
    this.sum = this.sum.bind(this);
    this.mul = this.mul.bind(this);
    this.changeState = this.changeState.bind(this);
    this.validateNumber = this.validateNumber.bind(this);
  }

  validateNumber() {
    var e = event || window.event;
    var key = e.keyCode || e.which;

    console.log(key);
    if (!e.shiftKey && !e.altKey && !e.ctrlKey &&
    // numbers   
    key >= 48 && key <= 57 ||
    // Numeric keypad
    key >= 98 && key <= 105 ||
    // Backspace and Tab and Enter
    key == 8 || key == 9 || key == 13 ||
    // Home and End
    key == 35 || key == 36 ||
    // left and right arrows
    key == 37 || key == 39 ||
    // Del and Ins
    key == 46 || key == 45) {
        // input is VALID
    }
    else {
        // input is INVALID
        e.returnValue = false;
        if (e.preventDefault) e.preventDefault();
    }
  };

  sum() {
    return parseInt(this.state.textBox1) + parseInt(this.state.textBox2) + parseInt(this.state.textBox3);
  }
  
  sumUp() {
    this.setState({
      result: this.sum(),
      sum: true,
      mul: false,
    });
  }

  mul() {
    return this.state.textBox1 * this.state.textBox2 * this.state.textBox3;
  }

  multiply() {
    this.setState({
      result: this.mul(),
      mul: true,
      sum: false
    });
  }

  changeState(textbox, event) {
    let scopedState = this.state;
    let value = event.target.value;
    if (value==='') {
      value=0;
    };
    switch(textbox) {
      case 'textbox1':
        scopedState.textBox1 = value
        break; 
      case 'textbox2':
        scopedState.textBox2 = value
      break; 
      case 'textbox3':
        scopedState.textBox3 = value
      break; 
    }
    if (scopedState.sum) {
      scopedState.result = this.sum();
    }
    else if (scopedState.mul) {
      scopedState.result = this.mul();
    }
    this.setState(scopedState);
}

  render() {
    return (
      <div>
        <Layout>
          <div className="wrapper">
            <div className='box parameterBox'>
              <span className='aligner'> 
                Value 1: <TextBox
                  onChange={(event) =>this.changeState('textbox1', event)}
                  onKeyPress={this.validateNumber}/>
              </span>
            </div>
            <div className='box parameterBox'>
              <span className='aligner'> 
                Value 2: <TextBox 
                  onChange={(event) =>this.changeState('textbox2', event)}
                  onKeyPress={this.validateNumber}/>
              </span>
            </div>
            <div className='box parameterBox'>
              <span className='aligner'> 
                Value 3: <TextBox 
                  onChange={(event) =>this.changeState('textbox3', event)}
                  onKeyPress={this.validateNumber}/>
              </span>
            </div>
            <div className='box answerBox'>
              <div className='aligner'> 
                <div>
                  <div className='row'>
                    <RadioButton checked={this.state.sum} name='arithmetic' onChange={this.sumUp}>Sum</RadioButton>
                  </div>
                  <div className='row'>
                    <RadioButton name='arithmetic' onChange={this.multiply}>Multiply</RadioButton>
                  </div>
                  <div className='row padding'>
                    Result: <Label>{this.state.result}</Label>
                  </div>
                </div>
                </div>
              </div>
          </div>
        </Layout>
        <style jsx>{`
          .wrapper {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            margin: 15px;
            padding:20px;
          }

          .box {
            border: solid 1px black;
            padding: 5px;
            width: 250px;
            height: 250px;
            margin-top: 10px;
            margin-right: 10px;
            font-weight: bold;
            text-align: center;
            align-items: center;
          }

          .answerBox {
            background: pink;
          }

          .parameterBox {
            background: lightblue;
          }

          .padding {
            padding-top: 20px;
          }

          .aligner {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
      
          .row {
            border: solid yellow 0px;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            width: 90px;
          }
        `}</style>
      </div>
    );
  }
}

export default ChangeInput;