import React from 'react';
import { Link } from "react-router-dom";

export default class Home extends React.Component {

    state = {
        pageData: [
            {
                id: 0,
                title: 'Webkits'
            },
            {
                id: 1,
                title: 'Cols'
            },
        ]
    }

    render() {
        return (
            <React.Fragment>
                <h1 className="page-title">Home</h1>
                <div className="form-container">
                    <h3 className="input-title">Choose one</h3>
                    <ul>
                        {this.state.pageData.map(item => {
                            return (
                                <li>
                                    <Link to={`/${item.title}`} >{item.title}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </React.Fragment>
        );
    }
}