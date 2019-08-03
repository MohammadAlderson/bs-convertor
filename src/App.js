import React from "react";
import "./styles/App.css";

class App extends React.Component {
   render() {
      return (
         <div className="main">
            <h1 className="page-title">BS3 To BS4 Convertor</h1>
            <div className="form-container">
               <h3 className="input-title">BS3 Input</h3>
               <div className="form-item">
                  <label className="form-label">Col-Xs- :</label>
                  <input
                     id="Col-Xs"
                     className="form-input"
                     onchange="onChangeCol_XsValue()"
                     type="text"
                  />
               </div>
               <div className="form-item">
                  <label className="form-label">Col-Sm- :</label>
                  <input
                     id="Col-Sm"
                     className="form-input"
                     onchange="onChangeCol_SmValue()"
                     type="text"
                  />
               </div>
               <div className="form-item">
                  <label className="form-label">Col-Md- :</label>
                  <input
                     id="Col-Md"
                     className="form-input"
                     onchange="onChangeCol_MdValue()"
                     type="text"
                  />
               </div>
               <div className="form-item">
                  <label className="form-label">Col-Lg- :</label>
                  <input
                     id="Col-Lg"
                     className="form-input"
                     onchange="onChangeCol_LgValue()"
                     type="text"
                  />
               </div>
               <div className="form-item btns-container">
                  <button
                     className="form-btn"
                     id="convertorBtn"
                     onclick="btnClick()"
                  >
                     Convert
                  </button>
                  <button
                     className="form-btn"
                     id="clearBtn"
                     onclick="btnClear()"
                  >
                     Clear
                  </button>
               </div>
            </div>
            <div className="output-box">
               <h3 className="output-title">BS4 Output</h3>
               <h2 className="output-text" id="output">
                  Waiting...
               </h2>
            </div>
         </div>
      );
   }
}

export default App;
