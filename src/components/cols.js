import React from "react";
import "./../styles/App.css";
import {OutputBox} from "./../components/ui-components/outputBox";
import {InputBox} from "./../components/ui-components/inputBox";
import {FormButtons} from "./../components/ui-components/formButtons";

export default class Cols extends React.Component {
   constructor(props) {
      super(props);
      this.Col_Xs = "";
      this.Col_Sm = "";
      this.Col_Md = "";
      this.Col_Lg = "";
   }

   state = {
      XsValue: "",
      SmValue: "",
      MdValue: "",
      LgValue: "",
      outPut: "Waiting..."
   };

   onChangeColXsValue = e => {
      this.setState({ XsValue: e.target.value });
   };

   onChangeColSmValue = e => {
      this.setState({ SmValue: e.target.value });
   };

   onChangeColMdValue = e => {
      this.setState({ MdValue: e.target.value });
   };

   onChangeColLgValue = e => {
      this.setState({ LgValue: e.target.value });
   };

   doClear = () => {
      this.Col_Xs.value = "";
      this.Col_Sm.value = "";
      this.Col_Md.value = "";
      this.Col_Lg.value = "";
      this.setState({
         XsValue: "",
         SmValue: "",
         MdValue: "",
         LgValue: "",
         outPut: "Waiting..."
      });
   };

   doConvert = () => {
      this.setState({
         outPut: `col-xl-${this.state.LgValue.trim()} col-lg-${
            this.state.MdValue.trim()
            } col-md-${this.state.SmValue.trim()} col-${this.state.XsValue.trim()}`
      });
   };

   render() {
      return (
         <React.Fragment>
            <h1 className="page-title">BS3 To BS4 Convertor</h1>
            <div className="form-container">
               <h3 className="input-title">BS3 Input</h3>
               <InputBox
                  boxLabel="col-xs- " refController={ref => this.Col_Xs = ref}
                  inputId="Col-Xs" inputClass="form-input"
                  inputController={this.onChangeColXsValue} />
               <InputBox
                  boxLabel="col-sm- " refController={ref => this.Col_Sm = ref}
                  inputId="Col-Sm" inputClass="form-input"
                  inputController={this.onChangeColSmValue} />
               <InputBox
                  boxLabel="col-md- " refController={ref => this.Col_Md = ref}
                  inputId="Col-Md" inputClass="form-input"
                  inputController={this.onChangeColMdValue} />
               <InputBox
                  boxLabel="col-lg- " refController={ref => this.Col_Lg = ref}
                  inputId="Col-Lg" inputClass="form-input"
                  inputController={this.onChangeColLgValue} />
               <FormButtons
                  convertId="convertorBtn" clearId="clearBtn"
                  convertLabel="Convert" clearLabel="Clear"
                  convertClick={this.doConvert} clearClick={this.doClear} />
            </div>
            <OutputBox outputValue={this.state.outPut} boxLabel="BS4 Output" />
         </React.Fragment>
      );
   }
}