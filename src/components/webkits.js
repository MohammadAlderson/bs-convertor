import React from 'react';
import { Link} from "react-router-dom";

export default class Webkits extends React.Component {

    state = {
        pageData : [
            {
                id: 0,
                title: 'border-radius'
            },
            {
                id: 1,
                title: 'border-top-left-radius'
            },
            {
                id: 2,
                title: 'border-top-right-radius'
            },
            {
                id: 3,
                title: 'border-bottom-left-radius'
            },
            {
                id: 4,
                title: 'border-bottom-right-radius'
            },
        ]
    }

    render() {
        return(
            <React.Fragment>
                <h1 className="page-title">Webkits List</h1>
                <div className="form-container">
                    <ul className="sections-list">
                    {this.state.pageData.map(item => {
                        return(
                            <li className="sections-list-item">
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