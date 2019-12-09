import React from "react";
import "./../../styles/App.css";
import { InputBox } from './../ui-components/inputBox'
import { OutputBox } from './../ui-components/outputBox'
import { FormButtons } from "./../ui-components/formButtons"

export default class BordersMain extends React.Component {
    constructor(props) {
        super(props);
        this.textInputRef = ""
    }

    state = {
        textInputValue: "",
        outPut: "Waiting..."
    };

    onChangeTextInputValue = e => {
        this.setState({ textInputValue: e.target.value });
    };

    doClear = () => {
        this.textInputRef.value = ""
        this.setState({ textInputValue: "", outPut: "Waiting..." });
    };

    doConvert = () => {
        if (this.textInputRef.value === "") {
            this.setState({ outPut: "Enter something in text box" })
            setTimeout(() => this.setState({ outPut: "Waiting..." }), 3000);
            return;
        }
        this.setState({
            outPut: `${this.props.componentLabel}: ${this.state.textInputValue.trim()};
         -webkit-${this.props.componentLabel}: ${this.state.textInputValue.trim()};
         -moz-${this.props.componentLabel}: ${this.state.textInputValue.trim()};
         -ms-${this.props.componentLabel}: ${this.state.textInputValue.trim()};`
        });
    };

    RefController = ref => {
        this.textInputRef = ref
    }

    render() {
        return (
            <React.Fragment>
                <h1 className="page-title">{this.props.componentTitle}</h1>
                <div className="form-container">
                    <h3 className="input-title">{this.props.componentTitle} Input</h3>
                    <InputBox
                        boxLabel={this.props.componentLabel} refController={this.RefController}
                        inputId={this.props.componentLabel} inputClass="form-input"
                        inputController={this.onChangeTextInputValue} />
                    <FormButtons
                        convertId="convertorBtn" clearId="clearBtn"
                        convertLabel="Convert" clearLabel="Clear"
                        convertClick={this.doConvert} clearClick={this.doClear} />
                </div>
                <OutputBox outputValue={this.state.outPut}
                    boxLabel={`${this.props.componentTitle} Output`} />
            </React.Fragment>
        );
    }
}