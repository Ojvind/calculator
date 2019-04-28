import React, { Component } from "react";
import ReactDOM from "react-dom";

import Layout from '../components/layout';
import TextBox from '../components/textbox';
import RadioButton from '../components/radiobutton'
import Label from '../components/label'

class ChangeInput extends Component {

    render() {
        return (
            <div>
                <Layout>
                <div class='some-page-wrapper'>
                    <div className='row'>
                        <div className='column'>
                        <div className='blue-column'>
                            Some Text in Column One
                        </div>
                        </div>
                        <div className='column'>
                        <div className='green-column'>
                            Some Text in Column Two
                        </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='column'>
                        <div className='blue-column'>
                            Some Text in Column One
                        </div>
                        </div>
                        <div className='column'>
                        <div className='green-column'>
                            Some Text in Column Two
                        </div>
                        </div>
                    </div>

                </div>
                </Layout>
                <style jsx>{`
                   .some-page-wrapper {
                        margin: 15px;
                        padding:20px;
                        background: red;
                  }
                  
                  .row {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    width: 100%;
                  }
                  
                  .column {
                    display: flex;
                    flex-direction: column;
                    flex-basis: 100%;
                    flex: 1;
                  }
                  
                  .blue-column {
                    background-color: blue;
                    height: 100px;
                  }
                  
                  .green-column {
                    background-color: green;
                    height: 100px;
                  }
                      
                `}</style>
            </div>
        );
    }
}

export default ChangeInput;