import React from 'react';

export const FormButtons = props => {
    return (
        <div className="form-item btns-container">
            <button
                className="form-btn"
                id={props.convertId}
                onClick={props.convertClick}
            >
                {props.convertLabel}
            </button>
            <button
                className="form-btn"
                id={props.clearId}
                onClick={props.clearClick}
            >
                {props.clearLabel}
            </button>
        </div>
    )
}