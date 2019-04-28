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
                    <div className="Aligner">
                        <div className="Aligner-item Aligner-item--top">Top</div>
                        <div className="Aligner-item">Center</div>
                        <div className="Aligner-item Aligner-item--bottom">Bottom</div>
                    </div>
                </Layout>
                <style jsx>{`
                    .Aligner {
                        border: solid 1px black;
                        height: 200px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    
                    .Aligner-item {
                        border: solid 1px red;
                        max-width: 100%;
                    }
                    
                    .Aligner-item--top {
                        align-self: flex-start;
                    }
                    
                    .Aligner-item--bottom {
                        align-self: flex-end;
                    }
                `}</style>
            </div>
        );
    }
}

export default ChangeInput;