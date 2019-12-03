import React from "react";
import "./../styles/App.css";


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
         outPut: `col-xl-${this.state.LgValue} col-lg-${
            this.state.MdValue
         } col-md-${this.state.SmValue} col-${this.state.XsValue}`
      });
   };

   render() {
      return (
         <React.Fragment>
            <h1 className="page-title">BS3 To BS4 Convertor</h1>
            <div className="form-container">
               <h3 className="input-title">BS3 Input</h3>
               <div className="form-item">
                  <label className="form-label">Col-Xs- :</label>
                  <input
                     ref={ref => (this.Col_Xs = ref)}
                     id="Col-Xs"
                     className="form-input"
                     onChange={this.onChangeColXsValue}
                     type="text"
                  />
               </div>
               <div className="form-item">
                  <label className="form-label">Col-Sm- :</label>
                  <input
                     ref={ref => (this.Col_Sm = ref)}
                     id="Col-Sm"
                     className="form-input"
                     onChange={this.onChangeColSmValue}
                     type="text"
                  />
               </div>
               <div className="form-item">
                  <label className="form-label">Col-Md- :</label>
                  <input
                     ref={ref => (this.Col_Md = ref)}
                     id="Col-Md"
                     className="form-input"
                     onChange={this.onChangeColMdValue}
                     type="text"
                  />
               </div>
               <div className="form-item">
                  <label className="form-label">Col-Lg- :</label>
                  <input
                     ref={ref => (this.Col_Lg = ref)}
                     id="Col-Lg"
                     className="form-input"
                     onChange={this.onChangeColLgValue}
                     type="text"
                  />
               </div>
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
            <div className="output-box"></div>
         </React.Fragment>
      );
   }
}