import React, {Component} from 'react';
import {ProviderContext} from 'views/common/CommonContext';

export default class RenderStyles extends React.PureComponent {
	static contextType = ProviderContext;
	
    constructor(props) {
        super(props);
       /*  this.initialState = {
			layout: !isEmpty(props.layout)?props.layout:""
		}
		this.state 					= this.initialState; */
    }
	
    render() {
        return (
			this.props.children
        );
    }
}