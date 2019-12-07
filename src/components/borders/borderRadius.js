import React from "react";
import "./../../styles/App.css";
import {InputBox} from './../ui-components/inputBox'


export default class BorderRadius extends React.Component {
   constructor(props) {
      super(props);
      this.BorderRadius = ""
   }

   state = {
      borderRadiusValue: "",
      outPut: "Waiting..." 
   };

   onChangeBorderRadiusValue = e => {
      this.setState({ borderRadiusValue: e.target.value });
   };

   doClear = () => {
      this.BorderRadius.value = ""
      this.setState({ borderRadiusValue: "",outPut: "Waiting..."});
   };

   doConvert = () => {
      if (this.BorderRadius.value === "") {
         this.setState({outPut:"Enter something in text box"})
         setTimeout(() => this.setState({ outPut: "Waiting..." }), 3000);
         console.log('if occured');
         return;
      }
      this.setState({
         outPut: `border-radius: ${this.state.borderRadiusValue.trim()}; 
         -webkit-border-radius: ${this.state.borderRadiusValue.trim()}; 
         -moz-border-radius: ${this.state.borderRadiusValue.trim()};
          -ms-border-radius: ${this.state.borderRadiusValue.trim()};`
      });
   };

   RefController = ref => {
      this.BorderRadius = ref
   }

   render() {
      return (
         <React.Fragment>
            <h1 className="page-title">Border-Radius</h1>
            <div className="form-container">
               <h3 className="input-title">Border-Radius Input</h3>
               <InputBox boxLabel="border-radius" refController={this.RefController} inputId="border-radius" 
                  inputClass="form-input" inputController={this.onChangeBorderRadiusValue} />
               <div className="form-item btns-container">
                  <button
                     className="form-btn"
                     id="convertorBtn"
                     onClick={this.doConvert}
                  >
                     Convert
                  </button>
                  <button
                     className="form-btn"
                     id="clearBtn"
                     onClick={this.doClear}
                  >
                     Clear
                  </button>
               </div>
            </div>
            <div className="output-box">
               <h3 className="output-title">Border-Radius Output</h3>
               <h2 className="output-text" id="output">{this.state.outPut}</h2>
            </div>
         </React.Fragment>
      );
   }
}