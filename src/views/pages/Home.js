import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Home extends Component {
	
    constructor(props) {
        super(props);
		let {REACT_APP_BASE_URL,REACT_APP_HOME_URL}	= process.env;
		if( REACT_APP_BASE_URL != REACT_APP_HOME_URL ){
			window.location = REACT_APP_HOME_URL;
		}
    }

    render() {
        return (
             <div className="main-content">
				<div className="centered-text">
					<h1>Digi Art</h1>
                    <p>Public Setion</p>
					<Link to="/artist" className="btn btn-primary">Go to Artist Setion </Link>
				</div>
			</div>
        );
    }
}
