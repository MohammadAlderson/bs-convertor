import React from 'react';

export const OutputBox = props => {
    return(
        <div className="output-box">
            <h3 className="output-title">{props.boxLabel}</h3>
            <h2 className="output-text" id="output">{props.outputValue}</h2>
        </div>
    )
}