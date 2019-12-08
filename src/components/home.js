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
                    <ul className="sections-list">
                        {this.state.pageData.map(item => {
                            return (
                                <li key={item.id} className="sections-list-item">
                                    <Link to={`/${item.title.toLowerCase()}`} >{item.title}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </React.Fragment>
        );
    }
}