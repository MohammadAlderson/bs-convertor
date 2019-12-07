import React from 'react';

export const InputBox = props => {
    return(
        <div className="form-item">
            <label className="form-label">{props.boxLabel} :</label>
            <input
                ref={(ref) => props.refController(ref)}
                id={props.inputId}
                className={props.inputClass}
                onChange={props.inputController}
                type="text"
            />
        </div>
    )
}