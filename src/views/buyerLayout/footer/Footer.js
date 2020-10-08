import React, {Component} from 'react';

export default class Footer extends Component { 

    render() {
        return (
				<div className={"row footer-row "+this.props.className}>Powered by&nbsp;<span>LivePass</span></div>
                );
    }
	
}