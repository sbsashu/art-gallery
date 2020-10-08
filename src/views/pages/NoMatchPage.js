import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import HeaderMeta from 'views/common/HeaderMeta';
import  './NoMatchPage.css';

export default class NoMatchPage extends Component {
    
    render() {
        return (
			<div id="notfound">
				<div className="notfound">
					<div className="notfound-404">
						<h1>Oops!</h1>
						<h2>404 - The Page can't be found</h2>
					</div>
					<a href="/" className="btn btn-primary">Go TO Homepage</a>
				</div>
			</div>
        );
    }
}