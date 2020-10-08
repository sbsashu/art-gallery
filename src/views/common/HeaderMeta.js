import React, {Component} from 'react';
import {isEmpty} from 'config/functions';
import {Helmet} from "react-helmet";

export default class HeaderMeta extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
			title: (!isEmpty(props.title)?props.title:"")
		}
		this.state 					= this.initialState;
    }
    
    render() {
        return (
            <div className="application">
				<Helmet>
					<meta charSet="utf-8" />
					<title>{this.state.title} |  Live Pass</title>
				</Helmet>
			</div>
        );
    }
}